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
exports.seedBooking = void 0;
const mongoose = require("mongoose");
const Booking_1 = __importDefault(require("../models/Booking"));
const seedBooking = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Booking_1.default.deleteMany();
        const booking = new Booking_1.default({
            //branchId: IBranch["_id"],
            reservationDate: "12/07/23 13:00hs",
            //userId: IUser["_id"],
            email: "Turnos@Booking.com",
            password: "IsBooking@1234",
        });
        yield booking.save();
        console.log('Booking seed successful!');
    }
    catch (e) {
        console.error(e);
    }
});
exports.seedBooking = seedBooking;
mongoose.set("strictQuery", false);
mongoose
    .connect("mongodb://localhost/mi-turno-webapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
})
    .then(() => {
    (0, exports.seedBooking)().then(() => console.log('booking seeded successfully')).catch(console.error);
})
    .catch(() => {
    console.log("Couldn't connect with the booking seeder :(");
});
