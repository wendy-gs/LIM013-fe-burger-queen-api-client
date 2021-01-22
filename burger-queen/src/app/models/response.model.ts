//Son los campos que nos devuelve la api siemrpe que solicitemos una solicitud
export interface ResponseI{
    email?:string;
    token?:string;
    status?: number;
}