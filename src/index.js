const express = require('express');
const route = require("./router/router")
const mongoose  = require('mongoose');
const multer = require('multer')
const app = express();


app.use(express.json())

app.use(multer().any())


mongoose.connect("mongodb+srv://izazsarkar11:pQ1xcwJzAI5R7SC6@izazlithium.7ghyokt.mongodb.net/Project-2", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);

// app.use( (req ,res) => {
//     res.status(404).send({status : false , message :`Page Not Found , Given URL ${req.url} is incorrect for this application.`})
// })


app.listen(process.env.PORT || 3001, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3001))
});
