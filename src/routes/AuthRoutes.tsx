import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import AboutScreen from "../screens/AboutScreen";

const Stack = createNativeStackNavigator();

export default function AuthRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} options={{ title:"" }} />
            <Stack.Screen name="Cadastro" component={RegisterScreen} options={{ title:"" }} />
                <Stack.Screen name="Sobre" component={AboutScreen} options={{ title:"" }} />
        </Stack.Navigator>
    );
}