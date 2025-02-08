import mongoose from "mongoose";

const FrenchWordsSchema = new mongoose.Schema({
    word: String,
    translation: String,
    priority: String,
});

export default mongoose.model("FrenchWords", FrenchWordsSchema);