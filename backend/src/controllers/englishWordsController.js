import englishWordsModel from "../models/englishWords.js";

export default {
    async getEnglishWords(req, res){
        try{
            const englishWords = await englishWordsModel.find();
            return res.status(200).json(englishWords);
        } catch(e){
            return res.status(500).json("Não foi possivel localizar as palavras");
        }
    },

    async insertEnglishWords(req, res){
        
        try{
            const { word, translation, priority } = req.body;
            if(!word || !translation || !priority){
                res.status(400).json({erro: "Os campos não podem serem vazios"});
            }
            const newEnglishWords  = await englishWordsModel.create({
                word,
                translation,
                priority
            });

            res.status(200).json(newEnglishWords);
        }catch(e){
            res.status(500).json({erro: "Não foi possivel criar a nova palavra"})
        }

    },

    async deleteEnglishWords(req, res){
        const { id } = req.params;
        const deletedWord = await englishWordsModel.findOneAndDelete({_id: id});

        if(deletedWord){
            return res.status(200).json(deletedWord);
        }

        return res.status(400).json({error: "Não foi possível deletar a palavra"});
    }
}