const mongoose = require("mongoose");
import Admin from "../models/Admin"

export const seedAdmin = async () => {
  try {
    await Admin.deleteMany()

    const admin = new Admin({
      fullName: "adminUser",
      dni: 12345678,
      email: "admin@admin.com",
      password: "IsAdmin@1234",
      usertype: "admin"
    })

    await admin.save()

    console.log('Admin seed successful!')
  } catch (e) {
    console.error(e)
  }
}

mongoose.set("strictQuery", false);

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
  });