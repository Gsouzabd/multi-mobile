import Api from "./Api";

export async function getEspecialistaBy(filters: Array<any>) {
    const query = filters.map(filter => {
        return `${filter.key}=${filter.value}`;
    })
    try {
        //formate a query, por exemplo: se o 'estado' for São Paulo, a query deve ser 'estado=sao%paulo'
        const query = filters.map(filter => {
            return `${encodeURIComponent(filter.key)}=${encodeURIComponent(filter.value)}`;
          }).join('&');
          const result = await Api.get(`/especialista/busca?${query}`);
          console.log(result)

        return result;
    } catch (error) {
        console.error(error);
        return null;
    }
    
}