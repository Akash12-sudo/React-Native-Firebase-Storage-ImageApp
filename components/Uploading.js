import {
  Image,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Button,
} from "react-native";
import { Video } from "expo-av";
import ProgressBar from "./ProgressBar";
import { ProgressBarAndroidComponent } from "react-native";
// import { BlurView, VibrancyView } from "@react-native-community/blur";

export function Uploading({ image, video, progress }) {
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        { alignItems: "center", justifyContent: "center", zIndex: 1 },
      ]}
    >
      <View style={styles.blurOverlay}></View>
      <View
        style={{
          width: "70%",
          alignItems: "center",
          paddingVertical: 16,
          rowGap: 12,
          backgroundColor: "#eee",
          borderRadius: 15,
        }}
      >
        {image && (
          <Image
            source={{ uri: image }}
            style={{
              width: 100,
              height: 100,
              resizeMode: "contain",
              borderRadius: 6,
            }}
          />
        )}
        {video && (
          <Video
            source={{ uri: image }}
            videoStyle={{}}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="contain"
            style={{
              width: 200,
              height: 200,
            }}
            // useNativeControls
          />
        )}

        <Text style={{ fontSize: 12 }}>Uploading...</Text>
        <ProgressBar progress={ProgressBarAndroidComponent} />
        <View
          style={{
            height: 1,
            borderWidth: StyleSheet.hairlineWidth,
            width: "100%",
            borderColor: "#00000020",
          }}
        />
        <TouchableOpacity>
          <Text style={{ fontWeight: "500", color: "#3478F6", fontSize: 17 }}>
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  blurOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    zIndex: 100,
  },
});
