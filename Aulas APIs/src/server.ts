import express, { response } from 'express';
import { CreateCourse } from './router';

const app = express();

app.get("/", CreateCourse);

app.listen(3333);