"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCouseService {
    execute({ durantion = 8, educator, name }) {
        console.log(name, durantion, educator);
    }
}
exports.default = new CreateCouseService;
