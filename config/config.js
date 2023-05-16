const mongoose = require("mongoose")

mongoose.connect(
    process.env.MONGODB_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
    console.log("connection successfully")
}).catch((error) => {
    console.error(error);
})

