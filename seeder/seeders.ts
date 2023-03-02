const mongoose = require("mongoose");
import { seedAdmin } from "./admin-user.seed";
import { seedBooking } from "./booking.seed";
import { seedBranch } from "./branch.seed";
import { seedOperator } from "./operator-user.seed";

mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb://localhost/mi-turno-webapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
  })
  .then(() => {
    seedAdmin().then(() => console.log('Admins seeded successfully')).catch(console.error);
    seedBooking().then(() => console.log('booking seeded successfully')).catch(console.error);
    seedBranch().then(() => console.log('Branches seeded successfully')).catch(console.error);
    seedOperator().then(() => console.log('Operators seeded successfully')).catch(console.error);
  })
  .catch(() => {
    console.log("Couldn't connect with the seeders :(");
  });