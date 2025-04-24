import { Image, StyleSheet, Platform, Button, View } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useRouter } from "expo-router";
export default function HomeScreen() {
  const router = useRouter();
  return (
    <ThemedView>
      <Image
        source={require("@/assets/images/me.jpg")}
        style={styles.bgThumb}
      />
      <Image source={require("@/assets/images/me.jpg")} style={styles.avatar} />

      <ThemedText type="title" style={styles.username}>
        t1zz on de mic
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  bgThumb: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },
  avatar: {
    marginTop: -70,
    marginLeft: 20,
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "white",
  },
  username: {
    fontSize: 18,
    marginTop: -70,
    marginLeft: 20 + 100 + 20,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});
