import { Paciente } from "../Interfaces/Paciente";
import Api from "./Api";

export async function createPaciente(paciente: Paciente){
    console.log(paciente)
    try {
        const result = await Api.post('/pacientes', paciente)
        console.log(result)
        return result;
    } catch (error) {
        console.error(error);
        return null;
    }
}


export async function getPaciente(id: string) {
    try {
        const result = await Api.get(`/pacientes/${id}`);
        return result;
    } catch (error) {
        console.error(error);
        return null;
    }
    
}

 