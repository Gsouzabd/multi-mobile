import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons'

import Principal from "./Principal";
import Consultas from "./Consultas";
import Explorar from "./Explorar";
import Perfil from "./Perfil";


const Tab = createBottomTabNavigator();
const Screens = [
    {
        name: "Principal",
        component: Principal,
        iconName: "home"
    },
    {
        name: "Consultas",
        component: Consultas,
        iconName: "calendar"
    },
    {
        name: "Explorar",
        component: Explorar,
        iconName: "search"
    },
    {
        name: "Perfil",
        component: Perfil,
        iconName: "person"
    },
];

export default function Tabs() {
    return (
       <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: "#002851"
                },
                tabBarActiveTintColor: "#339cff",
                tabBarInactiveTintColor: "white" 
            }}>
        
            {Screens.map((screen) => {
                return (
                    <Tab.Screen
                        name={screen.name}
                        component={screen.component}
                        options={{
                        headerShown: false,
                            tabBarIcon: ({color, size}) => (
                                <Ionicons name={screen.iconName} color={color} size={size} />
                                )
                            }}
                    />
                )
            })}

        </Tab.Navigator>
    )
}