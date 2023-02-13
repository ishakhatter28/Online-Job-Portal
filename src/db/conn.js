const mongoose = require("mongoose");

mongoose.set("strictQuery" , true);

mongoose.connect('mongodb+srv://gurubhuvi:gurubhuvi@cluster0.y5ixvov.mongodb.net/?retryWrites=true&w=majority', { tls: true, ssl: true })
.then(() => {
    console.log("Connection Successful!");
}).catch((err) => {
    console.log(err);
}); 