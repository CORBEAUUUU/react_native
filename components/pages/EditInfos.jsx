import { View, Text, StyleSheet } from "react-native";
import InputWithError from "../ui/InputWithError";
import Bouton from "../ui/Bouton";
import { useContext, useState } from "react";
import { UtilisateurContext } from "../context/UtilisateurContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
const EditInfos = (props) => {
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [description, setDescription] = useState("");

	const [emailError, setEmailError] = useState("");
	const [usernameError, setUsernameError] = useState("");
	const [descriptionError, setDescriptionError] = useState("");

	const handleEmail = (text) => {
		setEmail(text);
	};
	const handleUsername = (text) => {
		setUsername(text);
	};
	const handleDescription = (text) => {
		setDescription(text);
	};

	const objet = useContext(UtilisateurContext);

	const saveInfos = async () => {
		// Tester les entrées
		if (
			email.includes("@") &&
			username.length >= 3 &&
			username.length <= 12 &&
			description.length <= 200
		) {
			// Remplacer les données de l'utilisateur avec les valeur des variable
			objet.setUtilisateur({
				...objet.utilisateur,
				email: email,
				username: username,
				description: description,
			});
      await AsyncStorage.setItem(
				"user",
				JSON.stringify({
          ...objet.utilisateur,
          email: email,
          username: username,
          description: description,
        })
			);
			props.navigation.goBack();
			return;
		}
		setEmailError(!email.includes("@") ? "Email incorrect" : "");
		setUsernameError(
			username.length < 3 || username.length > 12
				? "username incorrect (Max. 12, min. 3)"
				: ""
		);
		setDescriptionError(
			description.length > 200 ? "Description trop longue,Max 200" : ""
		);
	};

	return (
		<View style={styles.container}>
			<InputWithError holder="Email" valeur={email} action={handleEmail} errorMessage={emailError} />
			<InputWithError holder="Username" valeur={username} action={handleUsername} errorMessage={usernameError}/>
			<InputWithError
      errorMessage={descriptionError}
				holder="Description"
				valeur={description}
				action={handleDescription}
			/>
			<Bouton action={saveInfos}>
				<Text>Enregistrer</Text>
			</Bouton>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
});

export default EditInfos;
