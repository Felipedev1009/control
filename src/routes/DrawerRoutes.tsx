import React from "react";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import EntidadeScreen from "../screens/EntidadeScreen";
import ContasReceberScreen from "../screens/ContasReceberScreen";
import ContasPagarScreen from "../screens/ContasPagarScreen";

const Drawer = createDrawerNavigator();
function CustomDrawerContent(props: any) {
    const user = {
        nome: "Joao Silva",
        foto: "https://i.pravatar.cc/100",
    };
    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <Image source={{ uri: user.foto }} style={styles.avatar} />
                <Text style={styles.name}>{user.nome}</Text>
            </DrawerContentScrollView>
            <DrawerItemList {...props} />
            <View style={styles.footer}>
                <TouchableOpacity
                    style={styles.logoutButton}
                    onPress={() => console.log("Logout")}
                >
                    <Ionicons name="log-out-outline" size={22} color="#fff" />
                    <Text style={styles.logoutText}>Deslogar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default function DrawerRoutes() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#1E88E5",
                },
                headerTintColor: "#fff",
                drawerActiveTintColor: "#1E88E5",
            }}
        >
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" size={size} color={color} />
                    ),
                }}
            />

            <Drawer.Screen
                name="Entidades"
                component={EntidadeScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="business-outline" size={size} color={color} />
                    ),
                }}
            />

            <Drawer.Screen
                name="Contas a Receber"
                component={ContasReceberScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="arrow-forward-outline" size={size} color={color} />
                    ),
                }}
            />

            <Drawer.Screen
                name="Contas a Pagar"
                component={ContasPagarScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="arrow-back-outline" size={size} color={color} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );


}const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginVertical: 16,
        marginHorizontal: 16,
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
        marginHorizontal: 16,
        marginBottom: 16,
    },
    footer: {
        borderTopWidth: 1,
        borderTopColor: "#e0e0e0",
        padding: 16,
    },
    logoutButton: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: "#E53935",
        borderRadius: 8,
    },
    logoutText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
});