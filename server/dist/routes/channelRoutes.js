"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const channelRoutes = express_1.default.Router();
const emptyArray = [];
const data = {
    Channnels: ['Channel1', 'Channel2', 'Channel3'],
    messages: [
        {
            id: "Channel1",
            messages: ["messsage1"]
        },
        {
            id: "Channel2",
            messages: ["message2"]
        },
        {
            id: "Channel3",
            messages: ["message3"]
        }
    ]
};
channelRoutes.get('/channels', (req, res) => {
    return res.json(data.Channnels);
});
channelRoutes.get('/messages/:id', (req, res) => {
    const channelId = req.params.id;
    return res.json(data.messages.filter((item) => {
        if (item.id === channelId)
            return item.messages;
    }));
});
channelRoutes.put('/updateChannel/:id', (req, res) => {
    const channelId = req.params.id;
    const message = req.body.message;
    console.log(message);
    data.messages.forEach(item => {
        if (item.id === channelId) {
            console.log(item.id === channelId);
            item.messages.push(message);
        }
        ;
    });
    return res.json({
        "data": data,
        "Message": "Message Inserted Successfully"
    });
});
exports.default = channelRoutes;
//# sourceMappingURL=channelRoutes.js.map