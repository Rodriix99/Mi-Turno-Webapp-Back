"use strict";
const mongoose = require("mongoose");
mongoose
    .connect("mongodb://localhost/mi-turno-webapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
    console.log("Mongoose is connected");
})
    .catch(() => {
    console.log("Couldn't connect with mongoose :(");
});
