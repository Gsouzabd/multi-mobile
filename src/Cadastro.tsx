import { VStack, Image, Text, Box, FormControl, Input, Button, Link, Checkbox, ScrollView } from "native-base";
import Logo from "./assets/Logo.png";
import { TouchableOpacity } from "react-native";
import { Title } from "./components/Title";
import { InputText } from "./components/InputText";
import { useState } from "react";

import { cadastroSections } from "./utils/CadastroSections";

export default function Cadastro() {
  const [numSection, setNumSection] = useState(0);

  function nextSection(){
    if(numSection < cadastroSections.length - 1){
      setNumSection(numSection+1);
    }
  }
  function previousSection(){
    if(numSection > 0){
      setNumSection(numSection-1);
    }
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
                      />
          })
        }
      </Box>
      <Box>
        {cadastroSections[numSection].Checkbox &&
          cadastroSections[numSection].Checkbox.map(checkbox => {
            return <Checkbox key={checkbox.id} value={checkbox.value} mt={3}>
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
          <Text fontWeight={600} color={"white"}>Avançar</Text>
      </Button>

    </ScrollView>
  );
}
