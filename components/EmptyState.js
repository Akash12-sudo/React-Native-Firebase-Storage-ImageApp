import { View, Text } from "react-native";
import SvgComponent from "../assets/SVG";

export default function EmptyState() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SvgComponent />
      <Text style={{ marginTop: 20, color: "gray" }}>
        No photo uploaded yet
      </Text>
    </View>
  );
}
