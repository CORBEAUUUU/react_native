import React, { useContext } from "react";
import {
	Image,
	Pressable,
	StyleSheet,
	Text,
	View,
	useWindowDimensions,
} from "react-native";
import { colors } from "../../libs/variables";
import defaultAvatar from "../../assets/default-avatar.png";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { UtilisateurContext } from "../context/UtilisateurContext";
export default function Profil(props) {
	const objet = useContext(UtilisateurContext);
	const size = useWindowDimensions();

	const prendreImage = async () => {
		const resultat = await ImagePicker.launchImageLibraryAsync();
		objet.setUtilisateur({ ...objet.utilisateur, avatar: resultat.assets[0] });
	};

  const goToCamera = ()=>{
    props.navigation.push("camera");
  }

	return (
		<View style={{width:300, height:300}}>
			<View>
				<Image
					style={{
						margin: "auto",
						width: size.width,
						height: size.width,
						maxWidth: 300,
						maxHeight: 300,
						borderRadius: 150,
					}}
					source={objet.utilisateur.avatar ? objet.utilisateur.avatar : defaultAvatar}
				/>
				<View style={styles.buttonsContainer}>
					<Pressable onPress={prendreImage}>
						<MaterialIcons name="photo-library" size={42} color={colors.primary_1} />
					</Pressable>
					<Pressable onPress={goToCamera}>
						<MaterialIcons name="photo-camera" size={42} color={colors.primary_1} />
					</Pressable>
				</View>
			</View>
			<View style={styles.infosContainer}>
				<View style={styles.infoContainer}>
					<Text style={styles.label}>Email:</Text>
					<Text>{objet.utilisateur.email}</Text>
				</View>

				<View style={styles.infoContainer}>
					<Text style={styles.label}>Username:</Text>
					<Text>{objet.utilisateur.username}</Text>
				</View>

				<View style={styles.infoContainer}>
					<Text style={styles.label}>Description:</Text>
					<Text>
						{objet.utilisateur.description
							? objet.utilisateur.description
							: "Veuillez entrez une description"}
					</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	infosContainer: {
		backgroundColor: colors.light_4,
		padding: 10,
		margin: "auto",
		borderTopColor: colors.primary_2,
		borderBottomColor: colors.primary_2,
		borderTopWidth: 2,
		borderBottomWidth: 2,
	},
	infoContainer: {
		borderBottomColor: colors.light_1,
		borderBottomWidth: 1,
		margin: 10,
		padding: 10,
	},
	label: {
		color: colors.primary_1,
		fontWeight: "bold",
	},
	buttonsContainer: {
		display: "flex",
		flexDirection: "row",
		margin: "auto",
		marginVertical: 20,
		gap: 50,
	},
});
