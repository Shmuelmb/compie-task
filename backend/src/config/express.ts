import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import routes from "@/routes/routes"
import http from "http"
import helmet from "helmet"
import { getHealthCheck } from "@/controllers"
import { onHealth } from "@/constants/internal-routes"
import limiter from "./limiter"

const app = express()
const server = http.createServer(app)

app.use(bodyParser.json())
app.use(cors())
app.use(helmet())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(onHealth, getHealthCheck)
app.use(limiter)

app.use("/api", routes)

export default server
