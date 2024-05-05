import { VStack, Image, Text, Box, FormControl, Input, Button, Link } from "native-base";
import Logo from "./assets/Logo.png";
import { TouchableOpacity } from "react-native";
import { Title } from "./components/Title";
import { InputText } from "./components/InputText";

export default function Login({navigation}) {
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      {/* <Image source={Logo} alt="Logo" width="40%" height="10%"/> */}

      <Title>Faça seu login</Title>

      <Box>
        <InputText
          label="Email"
          placeholder="Preencha seu email"
        />

        <InputText
          label="Senha"
          placeholder="Digite sua senha"
        />
      </Box>

      <Button onPress={() => navigation.navigate('Tabs')} 
          backgroundColor={"blue.800"} 
          mt={10} 
          borderRadius={"lg"} 
          width="100%"
        >
        Entrar
      </Button>

      <Link href="#" textAlign="center" mt={5}> Esqueceu sua senha?</Link>

      <Box w="100%" flexDirection="row" justifyContent="center" mt={50}>
        <Text>Ainda não tem cadastro? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text style={{ color: 'blue' }}>Faça seu cadastro</Text>
        </TouchableOpacity>
      </Box>
      
    </VStack>
  );
}
