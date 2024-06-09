import { Checkbox } from "native-base"
import { Convenio } from "../Interfaces/Convenio";
import { getAllConvenios } from "../services/ConvenioService";

import { useState, useEffect } from 'react';


export function CadastroSections() {
  const [convenios, setCovenios] = useState([] as Convenio[]);

  useEffect(() => {
    async function getConvenios() {
      const result = await getAllConvenios();
      if(result){
        setCovenios(result);
      }
    }
    getConvenios();
  }, []);


  const cadastroSections = [
    {// STEP ONE
      id: 1,
      title: 'Insira alguns dados básicos',
      InputText: [
        {
          id: 1,
          label: 'Nome',
          placeholder: 'Digite seu nome completo',
          name: 'nome'
        },
        {
          id: 2,
          label: 'CPF',
          placeholder: 'Digite seu cpf',
          name: 'cpf'
        },
        {
          id: 3,
          label: 'Data de nascimento',
          date: true,
          placeholder: 'Informe sua data de nascimento',
          name: 'dataNascimento'
        },
        {
          id: 5,
          label: 'Sexo',
          placeholder: 'Informe seu sexo',
          name: 'sexo'
        },
        {
          id: 6,
          label: 'Email',
          placeholder: 'Digite seu email',
          name: 'email'
        },
        {
          id: 7,
          label: 'Senha',
          placeholder: 'Digite sua senha',
          secureTextEntry: true,
          name: 'senha'
        },
        {
          id: 8,
          label: 'Confirmação de senha',
          placeholder: 'Confirme a senha',
          secureTextEntry: true,
          name: 'confirmacao_senha'
        }
      ],
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
          label: 'Cidade',
          placeholder: 'Digite a cidade',
          name: 'cidade'
        },
        {
          id: 6,
          label: 'Estado',
          placeholder: 'Digite a UF do seu estado',
          name: 'estado'
        },
        {
          id: 7,
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
      Checkbox: convenios.map((convenio) => {
        return {
          id: convenio.id,
          value: convenio.nome,
          name: "planosSaude[]"
        }
      })
    },
  ];

  return cadastroSections;
}




