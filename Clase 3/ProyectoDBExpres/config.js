import dotenv from "dotenv"

dotenv.config()

export const port = process.env.PORT
export const mongodb_uri = process.env.MONGODB_URI