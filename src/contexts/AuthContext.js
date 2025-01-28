import { useState, useEffect, createContext } from "react";
import { Token, User } from "@/api";

const tokenCtrl = new Token();
const userCtrl = new User();

export const AuthContext = createContext();

export function AuthProvider(props) {
        const { children } = props;
        const [user, setUser] = useState(null);
        const [token, setToken] = useState(null);
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            (async () => {
                const token = tokenCtrl.getToken();
                if (!token) {
                    logout();
                    setLoading(false);
                    return;
                } 

                if (tokenCtrl.hasExpired(token)) {
                    logout();
                } else {
                    await login(token);
                }
             })()
            }, []);

        
        const login = async (token) => {
            try {
                // TODO: Setear el token en el localStorage
                tokenCtrl.setToken(token);
                // TODO: Obtener los datos del usuario
                const response = await userCtrl.getMe();
                // TODO: setear los datos del usuario en el state user
                setUser(response);
                // TODO: setear el valor de token en el state token
                setToken(token);
                // TODO: hacer un setLoading false
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        const logout = () => {
            // TODO: Eliminar el token en el localStorage
            tokenCtrl.removeToken();
            // TODO: Resetear el token en el state
            setToken(null);
            // TODO: Resetear el user en el state
            setUser(null); 
        };

        const updateUser = (user) => {

    const data ={
        accessToken: token,
        user,
        login,
        logout,
        updateUser,
    };

    if (loading) return null;

    return (
        <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
    )
}