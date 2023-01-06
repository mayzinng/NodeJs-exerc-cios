import { Router } from "express";
import { Specification } from "../modules/cars/model/Specification";
import { SpecificationsRepository } from "../modules/cars/repositories/SpecificationRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecification";


const specificationsRoutes = Router();

const specificationRepository = new SpecificationsRepository()

specificationsRoutes.post("/", (request, response)=> {
    const {name, description} = request.body;

    const createSpecificationService = new CreateSpecificationService(specificationRepository);

    createSpecificationService.execute({name, description});

    return response.status(201).send()
})

export {specificationsRoutes};