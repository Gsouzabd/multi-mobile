import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons'

import Principal from "./Principal";
import Consultas from "./Consultas";
import Explorar from "./Explorar";
import Perfil from "./Perfil";


const Tab = createBottomTabNavigator();
const Screens = [
    {
        id: 1,
        name: "Principal",
        component: Principal,
        iconName: "home"
    },
    {
        id: 2,
        name: "Consultas",
        component: Consultas,
        iconName: "calendar"
    },
    {
        id: 3,
        name: "Explorar",
        component: Explorar,
        iconName: "search"
    },
    {
        id: 4,
        name: "Perfil",
        component: Perfil,
        iconName: "person"
    },
];

export default function Tabs() {
    return (
       <Tab.Navigator
            detachInactiveScreens={false}
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
                        key={screen.id}
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