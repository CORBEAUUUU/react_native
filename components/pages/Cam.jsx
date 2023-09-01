import { View, Text, StyleSheet, Pressable } from "react-native";
import { Camera, CameraType, FlashMode } from "expo-camera";
import { useContext, useEffect, useRef, useState } from "react";
import { useWindowDimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { UtilisateurContext } from "../context/UtilisateurContext";
// create a component
const Cam = (props) => {
	const [permission, demanderPermission] = Camera.useCameraPermissions();

	const [cameraType, setCameraType] = useState(CameraType.back);

	const cameraRef = useRef();

	const toggleCamera = () => {
		setCameraType(cameraType == CameraType.back ? CameraType.front : CameraType.back);
	};

	const size = useWindowDimensions();

	useEffect(() => {
		if (permission && permission.status == "undetermined") {
			demanderPermission();
		}
	});

	const objet = useContext(UtilisateurContext);

	const prendrePhoto = async () => {
		// Acceder au composant Camera pour utiliser takePictureAsync
		const resultat = await cameraRef.current.takePictureAsync();
		objet.setUtilisateur({ ...objet.utilisateur, avatar: resultat });
		props.navigation.goBack();
	};

	if (permission && permission.granted == false) {
		return <Text>Vous n'avez accepter l'utilisation de la camera</Text>;
	}

	return (
		<View style={styles.container}>
			<Camera
				ref={cameraRef}
				type={cameraType}
				ratio="16:9"
				style={{ width: size.width, height: (size.width * 16) / 9 }}
			>
				<View style={styles.buttons}>
					<Pressable onPress={toggleCamera}>
						<MaterialIcons name="flip-camera-android" size={42} color="green" />
					</Pressable>
					<Pressable onPress={prendrePhoto}>
						<MaterialIcons name="camera" size={42} color="red" />
					</Pressable>
				</View>
			</Camera>
		</View>
	);
};

// Exercice:
// Utiliser variables d'état et l'attribut type de la camera pour pertmetre a l'utilisateur de changer de camera

// define your styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
	},
	buttons: {
		display: "flex",
		flexDirection: "row",
		position: "absolute",
		bottom: 100,
		margin: "auto",
		alignSelf: "center",
		gap: 50,
	},
});

export default Cam;
