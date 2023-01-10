import { Router } from "express";
import { CategoriesRepository } from "../modules/cars/repositories/implementations/CategoryRepository";
import { createCategoryController } from "../modules/cars/use cases/createCategory";
import { listCategoriesController } from "../modules/cars/use cases/listCategories";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
   return createCategoryController.handle(request,response);
});

categoriesRoutes.get("/", (request, response) => {
 return listCategoriesController.handle(request, response);
})

export { categoriesRoutes };