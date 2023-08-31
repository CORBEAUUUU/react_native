import { View, Text, StyleSheet } from "react-native";
import { Camera } from "expo-camera";
import { useEffect } from "react";
import { useWindowDimensions } from "react-native";
// create a component
const Cam = () => {
	const [permission, demanderPermission] = Camera.useCameraPermissions();

	const size = useWindowDimensions();

	useEffect(() => {
		if (permission && permission.status == "undetermined") {
			demanderPermission();
		}
	});

	if (permission && permission.granted == false) {
		return <Text>Vous n'avez accepter l'utilisation de la camera</Text>;
	}

	return (
		<View style={styles.container}>
			<Camera
				ratio="16:9"
				style={{ width: size.width, height: (size.width * 16) / 9 }}
			></Camera>
		</View>
	);
};

// define your styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
	},
});

export default Cam;
