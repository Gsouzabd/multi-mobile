import { VStack, Image, Text, Box, FormControl, Input, Button, Link, useToast } from "native-base";
import Logo from "./assets/Logo.png";
import { TouchableOpacity } from "react-native";
import { Title } from "./components/Title";
import { InputText } from "./components/InputText";
import { useEffect, useState } from "react";
import { doLogin } from "./services/AuthenticationService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import "core-js/stable/atob";
import { jwtDecode } from "jwt-decode";
import { STORAGE_URL, getConfigurations } from "./services/ConfigurationService";


export default function Login({navigation}) {
  const toast = useToast();

  const [config, setConfig] = useState({} as any);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function verifyLogin() {
      try {
        //  AsyncStorage.removeItem('token');

        const token = await AsyncStorage.getItem('token');
        if (token) {
          navigation.navigate('Tabs');
        }
      } catch (error) {
        console.error('Error verifying login:', error);
      }
    }
    async function getConfigs() {
      const result = await getConfigurations();
      if(result){
          setConfig(result);
          setLoading(false);
      }
    }

    verifyLogin();
    getConfigs();

  }, []);


  async function login() {
    try{
      console.log('tentando verificar login')

      const result = await doLogin(email, password)
      console.log(result)
      if(result){      
        if(result === null || result === undefined) {
          toast.show({
            title: "Erro no login",
            description: "O email ou senha não conferem",
            backgroundColor: "red.500"
          })
        } else {
          const token = result.token
          AsyncStorage.setItem('token', token);
          console.log(token)

          const pacienteId = JSON.stringify(result.user_id); 
          AsyncStorage.setItem('pacienteId', pacienteId);
          navigation.navigate('Tabs')
        }
      }else{
        toast.show({
          title: "Erro no login",
          description: "O email ou senha não conferem",
          backgroundColor: "red.500"
        })
      }
    } catch (error) {
      console.error('Erro durante o login:', error);
    }
  }

  if(loading) return null;
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image 
        source={{ uri: STORAGE_URL + config.logo }} 
        style={{ width: '50%', height: 100 }} 
        alt="logo"
      />
      <Title>Faça seu login</Title>

      <Box>
        <InputText
          label="Email"
          placeholder="Preencha seu email"
          value={email}
          onChangeText={setEmail}
        />

        <InputText
          label="Senha"
          placeholder="Digite sua senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </Box>

      <Button 
        onPress={login}
          backgroundColor={'#0B3B60'}
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
