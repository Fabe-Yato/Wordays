import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const dbConfig = `mongodb+srv://fabibinho2:Fabitdb2114@bancodepalavras.5m9tq.mongodb.net/?retryWrites=true&w=majority&appName=BancoDePalavras`;
const connection = mongoose.connect(dbConfig);

export default connection;