import express from "express"
import frenchWordsController from "../controllers/frenchWordsController.js";
import usersController from "../controllers/usersController.js";
import englishWordsController from "../controllers/englishWordsController.js";

const routes = express.Router();

//frances
routes.get("/frances", frenchWordsController.getFrenchWords);
routes.get("/frances/:id", frenchWordsController.getWordsFromUser)
routes.post("/frances", frenchWordsController.insertFrenchWords);
routes.delete("/frances/:id", frenchWordsController.deleteFrenchWords);

//users
routes.get("/users", usersController.getUsers);
routes.post("/users", usersController.insertUsers);
routes.put("/users", usersController.changePassword);
routes.delete("/users/:id", usersController.deleteUser);

//ingles
routes.get("/ingles", englishWordsController.getEnglishWords);
routes.post("/ingles", englishWordsController.insertEnglishWords);
routes.delete("/ingles", englishWordsController.deleteEnglishWords)

export default routes;