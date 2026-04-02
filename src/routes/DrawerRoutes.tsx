import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import EntidadeScreen from "../screens/EntidadeScreen";
import ContasPagarScreen from "../screens/ContasPagarScreen";
import ContasReceberScreen from "../screens/ContasReceberScreen";

const Drawer = createDrawerNavigator();
export default function DrawerRoutes() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Entidades" component={EntidadeScreen} />
            <Drawer.Screen name="Contas a Pagar" component={ContasPagarScreen}  />
            <Drawer.Screen name="Contas a Receber" component={ContasReceberScreen} />
        </Drawer.Navigator>
    );
}