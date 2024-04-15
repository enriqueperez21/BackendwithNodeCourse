import mongoose from "mongoose"
import { mongodb_uri } from "./config.js"

export async function connectDBMongo(){
  try {
    const db = await mongoose.connect(mongodb_uri)
    console.log("Connect correct to ", db.connection.name)
  } catch (error) {
    console.log("Error: "+error)
  }
}