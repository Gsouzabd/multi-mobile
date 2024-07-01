import Api from "./Api";

export async function getConfigurations() {
    try {
        const result = await Api.get('/configuracoes')
        return result;
    } catch (error) {
        console.error(error);
        return null;
    }
}


export const STORAGE_URL = 'http://192.168.1.139:8989/';

