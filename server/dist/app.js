"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const channelRoutes_1 = __importDefault(require("./routes/channelRoutes"));
const app = express_1.default();
app.use(body_parser_1.default.json());
app.use(cors_1.default());
app.use('/channelApi', channelRoutes_1.default);
app.listen(8080, function () {
    console.log('server running in port 8080');
});
//# sourceMappingURL=app.js.map