import { Checkbox } from "native-base"

const cadastroSections = [
    {// STEP ONE
      id: 1,
      title: 'Insira alguns dados básicos',
      InputText: [
        {
          id: 1,
          label: 'Nome',
          placeholder: 'Digite seu nome completo'
        },
        {
          id: 2,
          label: 'Email',
          placeholder: 'Digite seu email'
        },
        {
          id: 3,
          label: 'Senha',
          placeholder: 'Digite sua senha',
          secureTextEntry: true
        },
        {
          id: 4,
          label: 'Confirmação de senha',
          placeholder: 'Confirme a senha',
          secureTextEntry: true

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
          placeholder: 'Digite seu CEP'
        },
        {
          id: 2,
          label: 'Endereço',
          placeholder: 'Digite seu endereço'
        },
        {
          id: 3,
          label: 'Número',
          placeholder: 'Digite o número'
        },
        {
          id: 4,
          label: 'Complemento',
          placeholder: 'Digite o complemento'
        },
        {
          id: 5,
          label: 'Telefone',
          placeholder: 'Digite seu telefone'
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
        },
        {
          id: 2,
          value: 'Unimed',
        },
        {
          id: 3,
          value: 'Amil',
        },
        {
          id: 4,
          value: 'Bradesco',
        },
        {
          id: 5,
          value: 'Hapvida',
        },
        {
          id: 6,
          value: 'Outros',
        },
        {
          id: 7,
          value: 'Particular',
        },
      ]
    },
  ]



export {cadastroSections}