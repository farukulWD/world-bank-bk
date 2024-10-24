import express, { Application, RequestHandler } from "express"
import cors from "cors"
import router from "./app/routes"
import notFound from "./app/middlewares/notFound"
import globalErrorHandler from "./app/middlewares/globalErrorhandler"



const app:Application = express()
app.use(cors())
app.use(express.json())

app.use("/api/v1",router)
app.use(notFound);
app.use(globalErrorHandler);

//Not Found




export default app
