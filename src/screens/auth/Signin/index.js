import React from "react";
import { View, Text } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/input";
import { styles } from "./style";
import Button from "../../../components/button";
import Seperator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";
import { SafeAreaView } from "react-native-safe-area-context";

const Signin = ({ navigation }) => {
  const [checked, setChecked] = React.useState(false);

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <AuthHeader onBackPress={onBack} title="Sign In" />
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
    </SafeAreaView>
  );
};

export default Signin;
