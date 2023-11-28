import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import colors from "colors"
import morgan from "morgan"

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))
app.use(cors({
	origin: "*"
}))



const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
	console.log(colors.cyan.bold(`server listening on http://localhost:${PORT}`))
})
