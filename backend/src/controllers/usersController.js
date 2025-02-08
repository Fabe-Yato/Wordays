import usersModel from "../models/usersModel.js"

export default {
    async getUsers(req, res){
        const users = await usersModel.find();
        return res.status(200).json(users);
    },

    async insertUsers(req, res){
        try{
            const { name, email, password, profile_image } = req.body; 
            if(!name || !email || !password){
                return res.status(400).json({erro: "Nome, email ou senha não podem ser vazios"});
            }
            const newUser = await usersModel.create({
                name,
                email,
                password,
                profile_image
            });
            return res.status(200).json(newUser);
        } catch(e){
            return res.status(400).json({erro: "Não foi possível criar os usuários"});
        }
    },

    async changePassword(req, res){
        const { id, password } = req.body;
        if(!id || !password){
            return res.status(400).json({erro: "Não foi possível encontrar o usuário"});
        }

        const newPasswordUpdated = await usersModel.findByIdAndUpdate(
            id, 
            { $set: {password: password}},
            {new: true}
        );
        return res.status(200).json(newPasswordUpdated);
    },

    async deleteUser(req, res){
        try{
            const { id } = req.params
            if(!id){
                return res.status(400).json({error: "Não foi possivel encontrar o usuário"})
            }
            const deletedUser = await usersModel.findByIdAndDelete({_id: id});
            return res.status(200).json(deletedUser);
        } catch(e){
            return res.status(500).json({error: "Não foi possivel deletar o usuário"})
        }
    }

}