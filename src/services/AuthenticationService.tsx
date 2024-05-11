import api from "./api";

export async function doLogin(email: string, password: string) {
    if (!email || !password) return null;
    
    const payload = {
        "email": email,
        "senha": password
    };

    try {
        const result = await api.post('/auth/login', payload)

        return result;
    } catch (error) {
        console.error(error);
        return null;
    }
}
