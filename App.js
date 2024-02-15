import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import Splash from "./src/screens/auth/Splash";
import Signup from "./src/screens/auth/Signup";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

const WEB_CLIENT_ID =
  "724749197135-hl7nkteknlcdagqe2d1k66kg4dkisuq3.apps.googleusercontent.com";
const IOS_CLIENT_ID =
  "724749197135-c5sde1tr0qugnql2n2na574lnv8u91rk.apps.googleusercontent.com";
const REVERSED_CLIENT_ID =
  "com.googleusercontent.apps.724749197135-c5sde1tr0qugnql2n2na574lnv8u91rk";

const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ["https://www.googleapis.com/auth/drive.readonly"],
      webClientId: WEB_CLIENT_ID,
      offlineAccess: true,
      iosClientId: IOS_CLIENT_ID,
    });
  }, []);
  return (
    <SafeAreaView>
      <Signup />
    </SafeAreaView>
  );
};

export default App;
