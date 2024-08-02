import { Text } from "react-native";
import { globalStyles } from "../../styles/gobalStyles";
import { useUser } from "../../context/UserContext";

export default function MyProfilePage() {
  const { user } = useUser();
  return (
    <>
      <Text style={globalStyles.heading}>My Profile</Text>
      <Text>Hi {user}</Text>
    </>
  );
}
