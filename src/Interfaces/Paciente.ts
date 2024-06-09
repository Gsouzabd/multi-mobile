export interface Paciente {
    nome: string;
    cpf: string;
    email: string;
    password: string;

    data_nascimento: string;
    sexo: string;
    // foto: string;
    cep: string;
    endereco: string;
    numero: string;
    complemento?: string;
    bairro?: string;
    cidade: string;
    estado: string;
    celular: string;
    pais?: string;
    convenios: string[];
}