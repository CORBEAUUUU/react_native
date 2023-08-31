import { createContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Profil from "./components/pages/Profil";
import Auth from "./components/pages/Auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import ProfilSTack from "./components/stacks/ProfilStack";
import { UtilisateurContext } from "./components/context/UtilisateurContext";



export default function App() {
  
	const [user, setUser] = useState();

  const getUserFromStorage = async ()=>{
    const localUser = await AsyncStorage.getItem('user');
    if(localUser){
      setUser(JSON.parse(localUser));
    }
  }

  useEffect(()=>{
    getUserFromStorage();
  }, [])

	return (
		<View style={styles.container}>
			<UtilisateurContext.Provider value={{ utilisateur: user, setUtilisateur: setUser }}>
        <NavigationContainer>
          {user ? <ProfilSTack /> : <Auth />}
        </NavigationContainer>
			</UtilisateurContext.Provider>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
    flex:1
	},
});
