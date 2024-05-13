import api from "./api";

export async function createPaciente(data){

    data.estaAtivo = true;

    data.endereco = {
        "cep": data.cep,
        "rua": data.rua,
        "numero": data.numero,
        "complemento": data.complemento,
        "estado": data.estado
    }

    try {
        const result = await api.post('/paciente', data)
        return result;
    } catch (error) {
        console.error(error);
        return null;
    }
}
