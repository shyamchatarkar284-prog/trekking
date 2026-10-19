const express = require("express")
require("dotenv").config({ path: "./.env" })
const cors = require('cors')
const config = require("./config")
const app = express()

app.use(express.json())
app.use(cors())

app.use("/api/auth", require("./routes/auth.routes"))



app.listen(process.env.PORT, () => {
    console.log(`node : ${config.ENV}`)
    console.log(`CORS : ${config.CORS_ORIGIN}`)
    console.log(`server running on http://localhost:${process.env.PORT}`)
})

module.exports = app;

