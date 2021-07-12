import getAllproduct from "../../controller/productController/getAllproduct";
import postProduct from "../../controller/productController/postProduct";
import getProductbyid from "../../controller/productController/getProductbyid";
import deleteByid from "../../controller/productController/deleteByid";
import putByid from "../../controller/productController/putByid";


import { FakeExpress } from "../fakeExpress";

const productModel ={
    findOne:jest.fn(),
    find:jest.fn(),
    create:jest.fn(),
    findOneAndUpdate:jest.fn(),
    findOneAndDelete:jest.fn()
}


describe("Movie Controller tests for get all", ()=>{
    beforeEach(()=>{
        jest.setTimeout(30000)
        productModel.find.mockClear();
    });


    it('should get if record found', async()=> {
        let request={ params:{id:1}};
        let express=new FakeExpress(request);

        productModel.find.mockResolvedValue({
            id:"1",
        });

        await express.handleRequest(getAllproduct);
        
        expect(express.response.statusCode).toBe(200);
        console.log('hela')
        console.log('express.responseData',express.responseData);
        expect(express.responseData.id).toStrictEqual(undefined);
    });

    

    it("get by id", async()=> {
        let request={ params:{id:"1"}};
        let express=new FakeExpress(request);

        productModel.find.mockResolvedValue({
            id:"1",
        });

        await express.handleRequest(getProductbyid);
        
        expect(express.response.statusCode).toBe(400);
        console.log('express.responseData',express.responseData);
        expect(express.responseData.id).toStrictEqual(undefined);
    })


    it("put by id", async()=> {
        let request = {params : { id : "1"}, body : { price : 17.55, rating : 3.2}}
        let express = new FakeExpress(request);

        await express.put(putByid);

        expect(express.response.statusCode).toBe(400)
        console.log('express.responseData',express.responseData);
    })


    it("delete by id", async()=> {
        let request = {params : {id : "1"}, body : {}}
        let express = new FakeExpress(request);

        await express.delete(deleteByid);

        expect(express.response.statusCode).toBe(400)
        console.log('express.responseData',express.responseData);
    })

});


describe("movie controller for post product", ()=>{
    beforeEach(()=>{
        jest.setTimeout(30000)
        productModel.create.mockClear();
    });
    it("if record is posted", async()=> {
        let request = {params : {}, body : {}}
        let express = new FakeExpress(request);

        productModel.create.mockResolvedValue({
            id:"1",
        });

        await express.handleRequest(postProduct);

        expect(express.response.statusCode).toBe(400)
        console.log('express.responseData',express.responseData);
    })
})