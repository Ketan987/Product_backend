"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var winston_1 = require("winston");
exports.default = winston_1.createLogger({
    transports: new winston_1.transports.File({
        filename: 'logs/server.log',
        format: winston_1.format.combine(winston_1.format.timestamp({ format: 'MMM-DD-YYYY HH:mm:ss' }), winston_1.format.align(), winston_1.format.printf(function (info) { return info.level + ": " + [info.timestamp] + ": " + info.message; }))
    }),
});
