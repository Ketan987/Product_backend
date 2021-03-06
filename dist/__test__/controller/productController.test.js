"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var getAllproduct_1 = __importDefault(require("../../controller/productController/getAllproduct"));
var postProduct_1 = __importDefault(require("../../controller/productController/postProduct"));
var getProductbyid_1 = __importDefault(require("../../controller/productController/getProductbyid"));
var deleteByid_1 = __importDefault(require("../../controller/productController/deleteByid"));
var putByid_1 = __importDefault(require("../../controller/productController/putByid"));
var fakeExpress_1 = require("../fakeExpress");
var productModel = {
    findOne: jest.fn(),
    find: jest.fn(),
    create: jest.fn(),
    findOneAndUpdate: jest.fn(),
    findOneAndDelete: jest.fn()
};
describe("Movie Controller tests for get all", function () {
    beforeEach(function () {
        jest.setTimeout(30000);
        productModel.find.mockClear();
    });
    it('should get if record found', function () { return __awaiter(void 0, void 0, void 0, function () {
        var request, express;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    request = { params: { id: 1 } };
                    express = new fakeExpress_1.FakeExpress(request);
                    productModel.find.mockResolvedValue({
                        id: "1",
                    });
                    return [4 /*yield*/, express.handleRequest(getAllproduct_1.default)];
                case 1:
                    _a.sent();
                    expect(express.response.statusCode).toBe(200);
                    console.log('hela');
                    console.log('express.responseData', express.responseData);
                    expect(express.responseData.id).toStrictEqual(undefined);
                    return [2 /*return*/];
            }
        });
    }); });
    it("get by id", function () { return __awaiter(void 0, void 0, void 0, function () {
        var request, express;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    request = { params: { id: "1" } };
                    express = new fakeExpress_1.FakeExpress(request);
                    productModel.find.mockResolvedValue({
                        id: "1",
                    });
                    return [4 /*yield*/, express.handleRequest(getProductbyid_1.default)];
                case 1:
                    _a.sent();
                    expect(express.response.statusCode).toBe(400);
                    console.log('express.responseData', express.responseData);
                    expect(express.responseData.id).toStrictEqual(undefined);
                    return [2 /*return*/];
            }
        });
    }); });
    it("put by id", function () { return __awaiter(void 0, void 0, void 0, function () {
        var request, express;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    request = { params: { id: "1" }, body: { price: 17.55, rating: 3.2 } };
                    express = new fakeExpress_1.FakeExpress(request);
                    return [4 /*yield*/, express.put(putByid_1.default)];
                case 1:
                    _a.sent();
                    expect(express.response.statusCode).toBe(400);
                    console.log('express.responseData', express.responseData);
                    return [2 /*return*/];
            }
        });
    }); });
    it("delete by id", function () { return __awaiter(void 0, void 0, void 0, function () {
        var request, express;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    request = { params: { id: "1" }, body: {} };
                    express = new fakeExpress_1.FakeExpress(request);
                    return [4 /*yield*/, express.delete(deleteByid_1.default)];
                case 1:
                    _a.sent();
                    expect(express.response.statusCode).toBe(400);
                    console.log('express.responseData', express.responseData);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("movie controller for post product", function () {
    beforeEach(function () {
        jest.setTimeout(30000);
        productModel.create.mockClear();
    });
    it("if record is posted", function () { return __awaiter(void 0, void 0, void 0, function () {
        var request, express;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    request = { params: {}, body: {} };
                    express = new fakeExpress_1.FakeExpress(request);
                    productModel.create.mockResolvedValue({
                        id: "1",
                    });
                    return [4 /*yield*/, express.handleRequest(postProduct_1.default)];
                case 1:
                    _a.sent();
                    expect(express.response.statusCode).toBe(400);
                    console.log('express.responseData', express.responseData);
                    return [2 /*return*/];
            }
        });
    }); });
});
