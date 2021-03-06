import request from 'supertest';
import productRouter from '../../routes/productRoutes';
import getAllproduct from '../../controller/productController/getAllproduct'


describe.skip("All Routes testing", ()=>{

    beforeAll(()=>{
        jest.setTimeout(30000);
    })
    describe("post product", ()=>{
        it("given all data", async()=>{
            const response = await request(productRouter())
            .get("/products")
            expect(response.body.status).toBe(200)
            
        });

        it("when id is missing", async()=>{
            const response = await request(productRouter())
            .post("/products").send({
                productName : "Chainsaw"
            });
            expect(response.body.status).toBe(400)
        });
    });

});