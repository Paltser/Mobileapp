import React from "react";
import { Pressable, View, Text, Image } from "react-native";

import { styles } from "./style";

const FavoriteItem = ({ title, image, price, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
      <Image style={styles.icon} source={require("../../assets/close.png")} />
    </Pressable>
  );
};

export default React.memo(FavoriteItem);
