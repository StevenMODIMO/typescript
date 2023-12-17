"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = __importDefault(require("os"));
const PLATFORM = os_1.default.platform();
switch (PLATFORM) {
    case "win32":
        console.log("Windows");
        break;
    case "linux":
        console.log("Linux");
        break;
    case "android":
        console.log("Android");
        break;
    case "darwin":
        console.log("Mac OS");
        break;
    default:
        console.log("OS Not found");
}
