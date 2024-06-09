import Api from "./Api";
import { Consulta } from "../Interfaces/Consulta";

export async function createConsulta(consulta: Consulta){
    console.log(consulta);
    try {
        const result = await Api.post('/consulta', consulta)
        return result;
    } catch (error) {
        console.error(error);
        return null;
    }
}

 