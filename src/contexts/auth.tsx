import React, { createContext, useState, useEffect } from "react";
import { AsyncStorage, View, ActivityIndicator } from "react-native";
import { authService } from "../services/auth";
interface AuthContextData {
  signed: boolean;
  user: object | null;
  signIn(): Promise<void>;
  signOut(): void;
  loading: boolean;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    async function loadStorageData() {
      const user = await AsyncStorage.getItem("@RNAuth:user");
      const token = await AsyncStorage.getItem("@RNAuth:token");

      if (user && token) {
        setUser(JSON.parse(user));
        setLoading(false);
      }
    }
    loadStorageData();
  }, []);
  async function signIn() {
    const response = await authService.signIn();
    const { token, user } = response;
    setUser(user);
    AsyncStorage.setItem("@RNAuth:user", JSON.stringify(user));
    AsyncStorage.setItem("@RNAuth:token", token);
  }

  async function signOut() {
    await AsyncStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, signIn, loading, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
