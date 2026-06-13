const dotenv = require("dotenv").config()
const express = require("express")
const cors = require("cors")
const connectDB = require("./config/db")


const app = express()

connectDB()
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(express.json())


app.use("/api/auth", require("./routes/auth"))
app.use("/api/jobs", require("./routes/jobs"))
app.use("/api/ai", require("./routes/ai"))


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})