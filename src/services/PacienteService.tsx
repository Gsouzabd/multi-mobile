import { Paciente } from "../Interfaces/Paciente";
import api from "./api";

export async function createPaciente(paciente: Paciente){
    try {
        const result = await api.post('/paciente', paciente)
        return result;
    } catch (error) {
        console.error(error);
        return null;
    }
}


export async function getPaciente(id: string) {
    try {
        const result = await api.get(`/paciente/${id}`);
        return result;
    } catch (error) {
        console.error(error);
        return null;
    }
    
}