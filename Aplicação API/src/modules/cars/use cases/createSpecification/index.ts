import { SpecificationsRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateSpecificationController } from "./createSpecificationCOntroller";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";


const SpecificationRepository = new SpecificationsRepository();
const createSpecificationUseCase = new CreateSpecificationUseCase(SpecificationRepository);
const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);

export { createSpecificationController }