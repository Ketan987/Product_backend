import jwt from 'jsonwebtoken';
import userSchema from '../model/userSchema';


export const isAuthenticatedUser = 
    async (req: any, res: any, next: any) => {
      try {
        const header = req.header("Authorization");
        console.log(header);
  
        const token = header && header.split(" ")[1];
  
        if (token === null) {
          return res.sendStatus(401);
        }
        jwt.verify(token, "we8tewfhoer8ut89giuurbovperh8gpe9gjorgh", (err: any, user: any) => {
          if (err) {
            if (err.name === "TokenExpiredError") {
              return res.status(401).json({
                message: "session expired...Please login Again!",
                success: false,
              });
            }
            return res.status(403).json({
              message: "Something went wrong: " + err.message,
              success: false,
            });
          }
  
          req.user = user;
          console.log("user----->",user);
          next();
        });
      } catch (err) {
        res.status(404).send({
          success: false,
          message: "Error while Authenticating the User",
        });
      }
    };