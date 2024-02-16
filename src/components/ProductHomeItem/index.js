import React from "react";
import { Pressable, View, Text, Image } from "react-native";
import { styles } from "./style";

const ProductHomeItem = ({ title, image, price, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
    </Pressable>
  );
};

export default React.memo(ProductHomeItem);
