import { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Bouton from "../ui/Bouton";
import { AntDesign } from "@expo/vector-icons";
const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");

	const handleEmail = (text) => {
		setEmailError("");
		setEmail(text);
	};
	const handlePassword = (text) => {
		setPasswordError("");
		setPassword(text);
	};

	const submit = () => {
		if (email.includes("@") && password.length >= 6) {
			alert("Connexion");
			return;
		}
		setEmailError(!email.includes("@") ? "Email incorrect" : "");
		setPasswordError(
			password.length < 6 ? "Mot de passe trop court logi(Minimum 6)" : ""
		);
	};

	return (
		<View style={styles.container}>
			<TextInput
				keyboardType="email-address"
				placeholder="Email"
				onChangeText={handleEmail}
				value={email}
			/>
			<Text>{emailError}</Text>

			<TextInput
				placeholder="Mot de passe"
				onChangeText={handlePassword}
				value={password}
				secureTextEntry={true}
			/>
			<Text>{passwordError}</Text>

			<Bouton action={submit}>
				<AntDesign name="login" size={24} color="black" />
				<Text>Se connecter</Text>
			</Bouton>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
});

export default LoginForm;
