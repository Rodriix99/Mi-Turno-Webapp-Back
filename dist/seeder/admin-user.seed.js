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
exports.seedAdmin = void 0;
const mongoose = require("mongoose");
const Admin_1 = __importDefault(require("../models/Admin"));
const seedAdmin = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Admin_1.default.deleteMany();
        const admin = new Admin_1.default({
            fullName: "adminUser",
            dni: 12345678,
            email: "admin@admin.com",
            password: "IsAdmin@1234",
            usertype: "admin"
        });
        yield admin.save();
        console.log('Admin seed successful!');
    }
    catch (e) {
        console.error(e);
    }
});
exports.seedAdmin = seedAdmin;
/* mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb://localhost/mi-turno-webapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
  })
  .then(() => {
    seedAdmin().then(() => console.log('Admins seeded successfully')).catch(console.error);
  })
  .catch(() => {
    console.log("Couldn't connect with the admin seeder :(");
  }); */ 
