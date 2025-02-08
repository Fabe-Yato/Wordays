import mongoose from "mongoose";

const englishWordsSchema = new mongoose.Schema({
    word: String,
    translation: String,
    priority: String,
});

export default mongoose.model("EnglishWords", englishWordsSchema)