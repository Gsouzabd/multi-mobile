import {Text, Box, Button, Checkbox, ScrollView, useToast } from "native-base";
import { Title } from "./components/Title";
import { InputText } from "./components/InputText";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import "core-js/stable/atob";
import { jwtDecode } from "jwt-decode";


import { cadastroSections } from "./utils/CadastroSections";
import { createPaciente } from "./services/PacienteService";


export default function Cadastro({navigation}) {
  const toast = useToast();

  const [numSection, setNumSection] = useState(0);
  const [data, setData] = useState({} as any);
  const [planos, setPlanos] = useState([]);


  async function cadastrar(data) {
    try {
      const result = await createPaciente({
        cpf: data.cpf,
        nome: data.nome,
        email: data.email,
        endereco: {
            cep: data.cep,
            rua: data.rua,
            numero: data.numero,
            complemento: data.complemento,
            estado: data.estado
        },
        senha: data.senha,
        telefone: data.telefone,
        possuiPlanoSaude: planos.length > 0,
        planosSaude: data.planosSaude,
        imagem: data.imagem
      });
    
      if(result){      
        if(result === null) {
          toast.show({
            title: "Erro no cadastro",
            description: "Dados inválidos. Verifique os campos preenchidos.",
            backgroundColor: "red.500"
          })
        } else {
          if(result.estaAtivo) navigation.navigate('Login')
        }
      }else{
        toast.show({
          title: "Erro no cadastro",
          description: "Dados inválidos. Verifique os campos preenchidos.",
          backgroundColor: "red.500"
        })
      }
    } catch (error) {
      console.error('Erro durante o cadastro:', error);
    }
  }


  function nextSection(){
    if(numSection < cadastroSections.length - 1){
      const currentSection = cadastroSections[numSection];
      const inputTextFields = currentSection.InputText || [];
      
      const isEmpty = inputTextFields.some((input) => {
        return !data[input.name] || data[input.name].trim() === '';
      });

      if(isEmpty){
        return toast.show({
          title: "Erro no cadastro",
          description: "Preencha todos os campos da seção",
          backgroundColor: "red.500"
        })
      }

      setNumSection(numSection+1);
    }else{
      data['planosSaude'] = planos;
      cadastrar(data)
    }
  }
  
  
  function previousSection(){
    if(numSection > 0){
      setNumSection(numSection-1);
    }
  }


  function updateData(name: string, value: string){
    setData({...data, [name]: value})
  }


  return (
    <ScrollView flex={1} p={5}>
      {/* <Image source={Logo} alt="Logo" width="40%" height="10%"/> */}

      <Title>{cadastroSections[numSection].title}</Title>
      <Text color={"blue.800"} mt={10} mb={2} fontWeight={700}>
        {cadastroSections[numSection].subtitle && cadastroSections[numSection].subtitle}
      </Text>
      <Box>
        {cadastroSections[numSection].InputText &&
          cadastroSections[numSection].InputText.map(input => {
            return <InputText 
                      label={input.label} 
                      placeholder={input.placeholder} 
                      key={input.id} 
                      secureTextEntry={input.secureTextEntry}
                      value={data[input.name]}
                      onChangeText={(value) => updateData(input.name, value)}
                      />
          })
        }
      </Box>
      <Box>
        {cadastroSections[numSection].Checkbox &&
          cadastroSections[numSection].Checkbox.map(checkbox => {
            return <Checkbox 
                      key={checkbox.id} 
                      value={checkbox.name} 
                      mt={3}
                      onChange={() => {
                        setPlanos((planosExistentes) =>{
                          if(planosExistentes.includes(checkbox.id)){
                            return planosExistentes.filter((id) => {id != checkbox.id});
                          }
                          return [...planosExistentes, checkbox.id];                      
                        })
                      }}
                      isChecked={planos.includes(checkbox.id)}
                      >
                      <Text color={"gray.600"}>{checkbox.value}</Text>
                    </Checkbox>
          })
        }
      </Box>
      
      {numSection > 0 && <Button onPress={() => previousSection()} 
        backgroundColor={"gray.300"} 
        mt={10} 
        borderRadius={"lg"}
        width="100%">
          <Text fontWeight={600} color={"white"}>Voltar</Text>
      </Button>}

      <Button onPress={() => nextSection()} 
        backgroundColor={"blue.800"} 
        mt={5} 
        mb={10}
        borderRadius={"lg"}
        width="100%">
          <Text fontWeight={600} color={"white"}>
          {numSection == 2 ? "Finalizar" : "Avançar"} 
          </Text>
      </Button>

    </ScrollView>
  );
}
