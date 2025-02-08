import express from "express"
import frenchWordsController from "../controllers/frenchWordsController.js";
import usersController from "../controllers/usersController.js";

const routes = express.Router();

routes.get("/frances", frenchWordsController.getFrenchWords);
routes.post("/frances", frenchWordsController.insertFrenchWords);
routes.delete("/frances/:id", frenchWordsController.deleteFrenchWords);

routes.get("/users", usersController.getUsers);
routes.post("/users", usersController.insertUsers);
routes.put("/users", usersController.changePassword);
routes.delete("/users/:id", usersController.deleteUser);

export default routes;