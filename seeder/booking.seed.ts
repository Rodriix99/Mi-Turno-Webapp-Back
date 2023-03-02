const mongoose = require("mongoose");
import Booking from "../models/Booking";
//seed turnos
const turnos = [
  {
    reservationDate: "13:00hs",
    email: "Turnos@Booking.com",
    password: "IsBooking@1234",
  },
  {
    reservationDate: "13:30hs",
    email: "Turnos@Booking.com",
    password: "IsBooking@1234",
  },{
    reservationDate: "14:00hs",
    email: "Turnos@Booking.com",
    password: "IsBooking@1234",
  },{
    reservationDate: "14:30hs",
    email: "Turnos@Booking.com",
    password: "IsBooking@1234",
  },{
    reservationDate: "15:00hs",
    email: "Turnos@Booking.com",
    password: "IsBooking@1234",
  },{
    reservationDate: "15:30hs",
    email: "Turnos@Booking.com",
    password: "IsBooking@1234",
  },{
    reservationDate: "16:00hs",
    email: "Turnos@Booking.com",
    password: "IsBooking@1234",
  },{
    reservationDate: "16:30hs",
    email: "Turnos@Booking.com",
    password: "IsBooking@1234",
  },{
    reservationDate: "17:00hs",
    email: "Turnos@Booking.com",
    password: "IsBooking@1234",
  },{
    reservationDate: "17:30hs",
    email: "Turnos@Booking.com",
    password: "IsBooking@1234",
  },{
    reservationDate: "18:00hs",
    email: "Turnos@Booking.com",
    password: "IsBooking@1234",
  },{
    reservationDate: "18:30hs",
    email: "Turnos@Booking.com",
    password: "IsBooking@1234",
  },{
    reservationDate: "19:00hs",
    email: "Turnos@Booking.com",
    password: "IsBooking@1234",
  }
]

export const seedBooking = async () => {
  try {
    await Booking.deleteMany();
    async function createBooking() {
      for (let i = 0; i < turnos.length; i++) {
        let booking = new Booking(turnos[i]);
        booking.save();
      }
    }
    createBooking()
    console.log("Booking seed successful!");
  } catch (e) {
    console.error(e);
  }
};

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
