import frenchWords from "../models/frenchWords.js";

export default{
    async getFrenchWords(req, res){
        const FrenchWordsList = await frenchWords.find();
        return res.status(200).json(FrenchWordsList);
    },
    async insertFrenchWords(req, res){
        try{
            const { word, translation, priority } = req.body;
            if(!word || !translation){
                return res.status(400).json( {error: "Palavra e tradução não podem ser vazios"} );
            }
            const newFrenchWord = await frenchWords.create({
                word,
                translation,
                priority
            });
        
            return res.status(200).json(newFrenchWord);
        }
        catch(e){
            return res.status(400).json({error: "Não foi possivel criar a palavra no banco de dados"});
        }
        
    },
    async deleteFrenchWords(req, res){
        const { id } = req.params;
        const deletedWord = await frenchWords.findOneAndDelete({_id: id});
        if(deletedWord){
            return res.status(200).json(deletedWord);
        }
        return res.status(400).json({error: "Não foi possível deletar a palavra"});
    }
}