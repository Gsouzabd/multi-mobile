import { Checkbox } from "native-base"
const cadastroSections = [
  {// STEP ONE
    id: 1,
    title: 'Insira alguns dados básicos',
    InputText: [
      {
        id: 1,
        label: 'CPF',
        placeholder: 'Digite seu cpf completo',
        name: 'cpf'
      },
      {
        id: 2,
        label: 'Nome',
        placeholder: 'Digite seu nome completo',
        name: 'nome'
      },
      {
        id: 3,
        label: 'Email',
        placeholder: 'Digite seu email',
        name: 'email'
      },
      {
        id: 4,
        label: 'Senha',
        placeholder: 'Digite sua senha',
        secureTextEntry: true,
        name: 'senha'
      },
      {
        id: 5,
        label: 'Confirmação de senha',
        placeholder: 'Confirme a senha',
        secureTextEntry: true,
        name: 'confirmacao_senha'
      }
    ]
  },
  { // STEP TWO
    id: 2,
    title: 'Agora, mais alguns dados sobre você:',
    InputText: [
      {
        id: 1,
        label: 'CEP',
        placeholder: 'Digite seu CEP',
        name: 'cep'
      },
      {
        id: 2,
        label: 'Rua',
        placeholder: 'Digite sua rua',
        name: 'rua'
      },
      {
        id: 3,
        label: 'Número',
        placeholder: 'Digite o número',
        name: 'numero'
      },
      {
        id: 4,
        label: 'Complemento',
        placeholder: 'Digite o complemento',
        name: 'complemento'
      },
      {
        id: 5,
        label: 'Estado',
        placeholder: 'Digite a UF do seu estado',
        name: 'estado'
      },
      {
        id: 6,
        label: 'Telefone',
        placeholder: 'Digite seu telefone',
        name: 'telefone'
      }
    ]
  },
  {// STEP THREE
    id: 3,
    title: 'Para finalizar, quais são seus planos de saúde?',
    subtitle: 'Selecione seus planos:',
    Checkbox: [
      {
        id: 1,
        value: 'Sulamerica',
        name: 'planosSaude[]'
      },
      {
        id: 2,
        value: 'Unimed',
        name: 'planosSaude[]'
      },
      {
        id: 3,
        value: 'Amil',
        name: 'planosSaude[]'
      },
      {
        id: 4,
        value: 'Bradesco',
        name: 'planosSaude[]'
      },
      {
        id: 5,
        value: 'Hapvida',
        name: 'planosSaude[]'
      },
      {
        id: 6,
        value: 'Outros',
        name: 'planosSaude[]'
      },
      {
        id: 7,
        value: 'Particular',
        name: 'planosSaude[]'
      },
    ]
  },
];




export {cadastroSections}