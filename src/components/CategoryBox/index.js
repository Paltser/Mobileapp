import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { styles } from "./style";
import { colors } from "../../utils/colors";

const CategoryBox = ({ title, image, onPress, isSelected }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View
        style={[
          styles.imagecontainer,
          isSelected ? { backgroundColor: colors.black } : {},
        ]}
      >
        <Image style={styles.image} source={{ uri: image }} />
      </View>
      <Text
        style={[
          styles.title,
          isSelected ? { color: colors.blue, fontWeight: "500" } : {},
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default CategoryBox;
