import Api from "./Api";

export async function getAllConvenios() {
    try {
        const result = await Api.get(`/convenios/`);
        return result;
    } catch (error) {
        console.error(error);
        return null;
    }
    
}

 