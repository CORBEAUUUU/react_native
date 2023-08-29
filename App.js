import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Profil from "./components/pages/Profil";
import Auth from "./components/pages/Auth";

export default function App() {
	const [user, setUser] = useState();

	return <View style={styles.container} >{user ? <Profil /> : <Auth />}</View>;
}

const styles = StyleSheet.create({
	container: {
    width:"100%"
  },
});
