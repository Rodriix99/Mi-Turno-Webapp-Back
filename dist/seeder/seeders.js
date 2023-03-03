"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const admin_user_seed_1 = require("./admin-user.seed");
const booking_seed_1 = require("./booking.seed");
const branch_seed_1 = require("./branch.seed");
const operator_user_seed_1 = require("./operator-user.seed");
mongoose.set("strictQuery", false);
//conectar al seed
mongoose
    .connect("mongodb://localhost/mi-turno-webapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
})
    .then(() => {
    (0, admin_user_seed_1.seedAdmin)().then(() => console.log('Admins seeded successfully')).catch(console.error);
    (0, booking_seed_1.seedBooking)().then(() => console.log('booking seeded successfully')).catch(console.error);
    (0, branch_seed_1.seedBranch)().then(() => console.log('Branches seeded successfully')).catch(console.error);
    (0, operator_user_seed_1.seedOperator)().then(() => console.log('Operators seeded successfully')).catch(console.error);
})
    .catch(() => {
    console.log("Couldn't connect with the seeders :(");
});
