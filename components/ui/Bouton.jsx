import { TouchableOpacity } from "react-native";

export default function Bouton({action, children}){
  return(
    <TouchableOpacity onPress={action}>
      {children}
    </TouchableOpacity>
  )
}