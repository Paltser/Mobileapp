import React from "react";
import { Text, View, Image } from "react-native";
import { styles } from "./style";
import Button from "../../../components/button";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import Signin from "../Signin";
import Signup from "../Signup";

const Splash = ({ navigation }) => {
  const onSignUp = () => {
    navigation.navigate("Signup");
  };

  const onSignIn = () => {
    navigation.navigate("Signin");
  };

  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../../../assets/splash_image.png")}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>You'll Find</Text>
        <Text style={[styles.innerTitle, styles.title]}>All you need</Text>
        <Text style={styles.title}>Here!</Text>
      </View>

      <Button onPress={onSignUp} title="Sign Up" />

      <Pressable hitslop={20}>
        <Text onPress={onSignIn} style={styles.footerText}>
          Sign In
        </Text>
      </Pressable>
    </View>
  );
};

export default Splash;
