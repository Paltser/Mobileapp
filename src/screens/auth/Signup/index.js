import React, { useState } from "react";
import { View, Text } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/input";
import { styles } from "./style";
import Checkbox from "../../../components/Checkbox";
import Button from "../../../components/button";
import Seperator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";

const Signup = () => {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <AuthHeader title="Sign Up" />
      <Input label="Name" placeholder={"John Doe"} />
      <Input label="Email" placeholder={"example@gmail.com"} />
      <Input isPassword label="Password" placeholder={"*******"} />
      <View style={styles.agreeRow}>
        <Checkbox checked={checked} onCheck={setChecked} />
        <Text style={styles.agreeText}>
          I agree with <Text style={styles.agreeTextBold}>Terms</Text> &
          <Text style={styles.agreeTextBold}> Privacy</Text>
        </Text>
      </View>
      <Button style={styles.Button} title="Sign In" />
      <Seperator text="Or sign up with" />
      <GoogleLogin />
    </View>
  );
};

export default Signup;
