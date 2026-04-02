import AuthRoutes from "./AuthRoutes";
import DrawerRoutes from "./DrawerRoutes";

export default function AppRoutes(){
    const isAuthenticated = false;
    return isAuthenticated ? <DrawerRoutes/> : <AuthRoutes/>;
}