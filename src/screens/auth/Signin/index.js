import React from "react";
import { View, Text } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/input";
import { styles } from "./style";
import Button from "../../../components/button";
import Seperator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";

const Signin = () => {
  return (
    <View style={styles.container}>
      <AuthHeader title="Sign In" />
      <Input label="Email" placeholder={"example@gmail.com"} />
      <Input isPassword label="Password" placeholder={"*******"} />
      <Button title="Sign In" />
      <Seperator text="Or sign in with" />
      <GoogleLogin />
      <Text style={styles.footerText}>
        Don't have an account?
        <Text style={styles.footerLink}> Sign Up</Text>
      </Text>
    </View>
  );
};

export default Signin;
