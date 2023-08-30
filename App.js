import { createContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import Profil from "./components/pages/Profil";
import Auth from "./components/pages/Auth";

export const UtilisateurContext = createContext();

export default function App() {
	const [user, setUser] = useState();

	return (
		<View style={styles.container}>
			<UtilisateurContext.Provider value={{ utilisateur: user, setUtilisateur: setUser }}>
				{user ? <Profil /> : <Auth />}
			</UtilisateurContext.Provider>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
	},
});
