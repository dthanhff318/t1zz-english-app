import { ThemedView } from "@/components/ThemedView";
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  ImageSourcePropType,
} from "react-native";

interface CardProps {
  thumbnail: string;
  title: string;
  description?: string;
  onPress?: () => void;
}

const TopicCard = ({ thumbnail, title, description, onPress }: CardProps) => {
  return (
    <ThemedView style={styles.card}>
      <Image
        source={thumbnail as ImageSourcePropType}
        style={styles.thumbnail}
      />
      <ThemedView style={styles.cardBody}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>Listen</Text>
        </Pressable>
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3, // Android shadow
    height: 250,
  },
  thumbnail: {
    width: "100%",
    height: "50%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardBody: {
    padding: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "#555",
  },
  button: {
    backgroundColor: "#3498db",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default TopicCard;
