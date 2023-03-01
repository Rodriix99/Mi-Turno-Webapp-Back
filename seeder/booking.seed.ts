const mongoose = require("mongoose");
import Booking from "../models/Booking";


export const seedBooking = async () => {
  try {
    await Booking.deleteMany()

    const booking = new Booking({
      //branchId: IBranch["_id"],
    reservationDate: "12/07/23 13:00hs",
      //userId: IUser["_id"],
      email: "Turnos@Booking.com",
      password: "IsBooking@1234",
      
    })

    await booking.save()

    console.log('Booking seed successful!')
  } catch (e) {
    console.error(e)
  }
}

/* mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb://localhost/mi-turno-webapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
  })
  .then(() => {
    seedBooking().then(() => console.log('booking seeded successfully')).catch(console.error);
  })
  .catch(() => {
    console.log("Couldn't connect with the booking seeder :(");
  }); */