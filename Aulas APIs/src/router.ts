import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function CreateCourse(request: Request, response: Response) {

    CreateCourseService.execute({
        name: "NodeJs",
        educator: "Dani",
        durantion: 10
    });
    
    CreateCourseService.execute({
        name: "ReactJs",
        educator: "Diego"
    });



    return response.send()
}