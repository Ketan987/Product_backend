import getAllproduct from "../../controller/productController/getAllproduct";
import postProduct from "../../controller/productController/postProduct";
import getProductbyid from "../../controller/productController/getProductbyid";

import { FakeExpress } from "../fakeExpress";
import { get } from "mongoose";

const productModel ={
    findOne:jest.fn(),
    find:jest.fn(),
    create:jest.fn(),
    findOneAndUpdate:jest.fn(),
    findOneAndDelete:jest.fn()
}


describe("Movie Controller tests", ()=>{
    beforeEach(()=>{
        jest.setTimeout(30000)
        productModel.findOne.mockClear();
    });


    it('should get if No record found', async()=> {
        let request={ params:{id:1}};
        let express=new FakeExpress(request);

        productModel.find.mockResolvedValue({
            id:1,
        });

        await express.handleRequest(getProductbyid);
        
        expect(express.response.statusCode).toBe(400);
        console.log('express.responseData',express.responseData);
        expect(express.responseData.id).toStrictEqual(undefined);
    });



});