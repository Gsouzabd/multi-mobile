import Api from "./Api";

export async function getAllunidades() {
    try {
        const result = await Api.get(`/unidades/`);
        return result;
    } catch (error) {
        console.error(error);
        return null;
    }
}


 