import { createStackNavigator } from "@react-navigation/stack";
import Profil from "../pages/Profil";
import Cam from "../pages/Cam";
import { colors } from "../../libs/variables";

const Stack = createStackNavigator();

const ProfilSTack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: colors.primary_1,
				},
        headerTitleStyle:{
          color: colors.light_4
        },
        headerTintColor:colors.light_4
			}}
		>
			<Stack.Screen
				name="profil"
				component={Profil}
				options={{
					title: "Page de profil",
				}}
			/>
			<Stack.Screen
				name="camera"
				component={Cam}
				options={{
					title: "Prenez une photo",
				}}
			/>
		</Stack.Navigator>
	);
};
export default ProfilSTack;
