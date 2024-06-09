interface Especialidade {
    id: number;
    nome: string;
    cbos: string;
    descricao: string;
    conselho_id: number;
    created_at: string;
    updated_at: string;
    especialistas: Especialista[];
}