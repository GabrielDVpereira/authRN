import React, { useContext } from "react";
import { View, Button } from "react-native";
import AuthContext from "../../contexts/auth";

const Dashboard: React.FC = () => {
  const { signOut } = useContext(AuthContext);
  async function handleLogout() {
    signOut();
  }

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default Dashboard;
