 export interface IUsuario {
    id: number;
    name: string;
    email: string;
    edad: number;
    direcciones?: Iaddress[];
    telefonos: string[];
    nif: string;
}
export interface Iaddress {
    calle : string;
    ciudad : string;
    pais : string;
}
export interface IResponse {
    status: number;
    message: string;
    data?: any;
}