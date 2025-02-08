import mongoose from "mongoose";

const FrenchWordsSchema = new mongoose.Schema({
    word: String,
    translation: String,
    priority: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: "Users"},
});

export default mongoose.model("FrenchWords", FrenchWordsSchema);