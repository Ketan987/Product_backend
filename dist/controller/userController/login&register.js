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
exports.login = exports.register = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var userSchema_1 = __importDefault(require("../../model/userSchema"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// const secret = process.env.jwt_token;
var register = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                user = new userSchema_1.default(req.body);
                return [4 /*yield*/, user.save()];
            case 1:
                _a.sent();
                res.status(200).send(user);
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                console.log(process.env.jwt_token);
                res.status(400).send({
                    message: "Error while saving " + err_1.message
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.register = register;
var login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email_1, password_1, user, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                _a = req.body, email_1 = _a.email, password_1 = _a.password;
                if (!email_1 || !password_1) {
                    res.status(400).json({ message: "credential are not matched" });
                }
                return [4 /*yield*/, userSchema_1.default.findOne({ email: req.body.email, password: req.body.password })];
            case 1:
                user = _c.sent();
                if (!user) {
                    res.json({
                        message: "failed"
                    });
                }
                // jwt sign
                jsonwebtoken_1.default.sign({ email: email_1, password: password_1 }, "we8tewfhoer8ut89giuurbovperh8gpe9gjorgh", { expiresIn: "1d" }, function (err, token) {
                    if (err) {
                        res.status(404).send({ message: "token expired" });
                    }
                    else
                        (res.status(200).send({
                            email: email_1,
                            password: password_1,
                            token: token
                        }));
                });
                return [3 /*break*/, 3];
            case 2:
                _b = _c.sent();
                res.json({
                    message: "failed"
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.login = login;
