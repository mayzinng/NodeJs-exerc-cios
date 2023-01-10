import { Request, Response } from 'express'
import { CategoriesRepository } from '../../repositories/implementations/CategoryRepository';
import { ListCategoriesUseCase } from './listCategoriesUseCase';

class ListCategoriesController {

    constructor(private listCategoriesUseCase: ListCategoriesUseCase) {
    }

    handle(request: Request, response: Response): Response {
        const all = this.listCategoriesUseCase.execute();

        return response.json(all)
    }
}


export { ListCategoriesController }