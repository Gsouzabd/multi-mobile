import Api from "./Api";

export async function getAllEspecialidades() {
    try {
        const result = await Api.get(`/especialidades/`);
        return result;
    } catch (error) {
        console.error(error);
        return null;
    }
}


export async function getEspecialidadeEspecialistas(especialidadeId: string, unidadeId: string) {
    console.log(unidadeId)
    try {
        const result = await Api.get(`/especialidades/${especialidadeId}/especialistas/${unidadeId}`);
        return result;
    } catch (error) {
        console.error(error);
        return null;
    }
}
 