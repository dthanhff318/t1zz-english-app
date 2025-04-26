import { StyleSheet, Image, ScrollView, RefreshControl } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import TopicCard from "@/components/page/home/TopicCard";
import { useCallback, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function TabTwoScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const items = Array.from({ length: 10 }, (_, index) => `Item ${index + 1}`);
  return (
    <ThemedView style={styles.containerPage}>
      <Image
        source={require("@/assets/images/bg-theme.jpg")}
        style={styles.bgThumb}
      />
      <ThemedText type="title" style={styles.titlePage}>
        Gallery
      </ThemedText>
      <ThemedView style={styles.scrollWrapper}>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <ThemedView style={styles.gridContainer}>
            {items.map((item, index) => (
              <ThemedView key={index} style={styles.gridItem}>
                <TopicCard
                  thumbnail={require("@/assets/images/cardbg.jpg")}
                  title={"Playing game"}
                />
              </ThemedView>
            ))}
          </ThemedView>
        </ScrollView>
        <LinearGradient
          colors={["#00000000", "#000000"]} // Màu đen trong suốt -> Màu đen đậm
          start={{ x: 0, y: 0 }} // Bắt đầu từ trên
          end={{ x: 0, y: 1 }}
          style={styles.shadowBox}
        />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  containerPage: {
    flex: 1,
    position: "relative",
  },
  bgThumb: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
    opacity: 0.8,
  },
  titlePage: {
    position: "absolute",
    top: 20,
    left: 20,
    fontSize: 24,
    gap: 8,
    color: "white",
    textShadowColor: "rgba(137, 147, 108, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    paddingVertical: 10,
    paddingHorizontal: 5,
    gap: 10,
  },
  gridItem: {
    width: "45%",
    borderRadius: 10,
    overflow: "hidden",
  },
  scrollWrapper: {
    position: "relative",
    flex: 1,
  },
  shadowBox: {
    position: "absolute",
    bottom: 0,
    height: 10,
    width: "100%",
  },
});
