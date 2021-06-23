import productSchema from "../../model/productSchema";
import mongoose, { connection } from "mongoose";
import dotenv from 'dotenv';
dotenv.config()



async function connectToDb() {
    jest.useFakeTimers();
    const connStr = `mongodb+srv://KetanUser:${process.env.DB_PASS}@clustermern.qtl6k.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`;
    console.log("Initializing  database connection");
    await mongoose.connect(connStr, { useNewUrlParser: true, useUnifiedTopology: true, });
    console.log("database connection established");
}


describe("User-Model tests", () => {
    jest.setTimeout(30000 )
    // beforeAll(async()=>{
    //     await connectToDb();
    // })

    it("To create a new Product", async()=>{
        await connectToDb();
        const product:any =await productSchema.create(new productSchema({id : 0}))
        expect(product._id).not.toBeNull();

        expect(product._id).not.toBeNull();
        let dbProduct = await productSchema.findById(product._id);

        expect(dbProduct.id).toStrictEqual("0");

    });

    afterAll(async()=>{
        await productSchema.findOneAndDelete({id : 0})
        connection.close()
    });

    it("check test runner", ()=> {
        expect(4+3).toBe(7)
    });

    
});


