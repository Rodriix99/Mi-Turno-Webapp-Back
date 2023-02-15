"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("./config/db");
const index_1 = __importDefault(require("./routes/index"));
const port = 3001;
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Todo bien");
});
app.use("/api", index_1.default);
app.listen(port, () => {
    console.log("Listening on port 3001");
});
