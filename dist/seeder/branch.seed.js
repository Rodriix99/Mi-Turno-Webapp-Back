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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedBranch = void 0;
const mongoose = require("mongoose");
const Branch_1 = __importDefault(require("../models/Branch"));
const seedBranch = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Branch_1.default.deleteMany();
        const branch = new Branch_1.default({
            name: "Sucursal 1",
            location: "Santa Fe",
            email: "Branch1@Branch.com",
            phone: "1123465789"
            //booking: IBooking,
            //operator: [IUser["_id"]],
        });
        yield branch.save();
        console.log('Branch seed successful!');
    }
    catch (e) {
        console.error(e);
    }
});
exports.seedBranch = seedBranch;
/* mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb://localhost/mi-turno-webapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
  })
  .then(() => {
    seedBranch().then(() => console.log('Branches seeded successfully')).catch(console.error);
  })
  .catch(() => {
    console.log("Couldn't connect with the Branch seeder :(");
  }); */ 
