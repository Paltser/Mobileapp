import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { styles } from "./style";

import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";

const GoogleLogin = () => {
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      // this.setState({ userInfo });
      console.log(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      } else if (error.code === statusCodes.IN_PROGRESS) {
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      } else {
      }
    }
  };

  return (
    <TouchableOpacity
      onPress={signIn}
      activeOpacity={0.6}
      style={styles.container}
    >
      <Image style={styles.image} source={require("../../assets/Gmail.png")} />
    </TouchableOpacity>
  );
};
export default React.memo(GoogleLogin);
