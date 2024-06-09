import Api from "./Api";

export async function doLogin(email: string, password: string) {
    if (!email || !password) return null; 
    
    const payload = {
        "email": email,
        "password": password
    };

    try {
        const result = await Api.post('/autenticacao', payload)

        return result;
    } catch (error) {
        console.error(error);
        return null;
    }
}
