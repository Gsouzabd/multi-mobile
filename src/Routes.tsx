import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Cadastro from "./Cadastro";
import Login from "./Login";
import Tabs from "./Tabs"


const Tab = createNativeStackNavigator();

export default function Routes(){
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Login" component={Login} />
                <Tab.Screen name="Cadastro" component={Cadastro} />
                <Tab.Screen name="Tabs" component={Tabs} options={{headerShown: false}}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}