import joi from '@hapi/joi';
export type Employee = {
    id: string;
    nombre: string;
    edad: number;
    cargo: string;
}


export const EmployeeSchema = joi.object().keys({
    id: joi.string().required(),
    login: joi.string().required(),
    password: joi.string().alphanum().required()
})