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


export async function getEspecialidadeEspecialistas(especialidadeId: string) {
    try {
        const result = await Api.get(`/especialidades/${especialidadeId}/especialistas`);
        return result;
    } catch (error) {
        console.error(error);
        return null;
    }
}
 