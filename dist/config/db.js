"use strict";
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose
    .connect("mongodb://localhost/mi-turno-webapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
})
    .then(() => {
    console.log('Connected to MongoDB');
})
    .catch(() => {
    console.log("Couldn't connect with mongoose :(");
});
