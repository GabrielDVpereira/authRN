import React, { useContext } from "react";
import { View, Button } from "react-native";
import { authService } from "../../services/auth";
import AuthContext from "../../contexts/auth";

const SignIn: React.FC = () => {
  const { signed } = useContext(AuthContext);
  async function handleSignIn() {
    const response = await authService.signIn();
    console.log(response);
  }

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button title="Sign in" onPress={handleSignIn} />
    </View>
  );
};

export default SignIn;
