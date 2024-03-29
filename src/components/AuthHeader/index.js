import React from "react";
import { Pressable, Image, Text, View } from "react-native";
import { styles } from "./style";

const AuthHeader = ({ title, onBackPress }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onBackPress}>
        <Image
          style={styles.image}
          source={require("../../assets/back-icon.png")}
        />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default AuthHeader;
