import React, { useState } from "react";
import { View, Text, Image, Linking } from "react-native";
import { styles } from "./style";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import ListItem from "../../../components/ListItem";
import EditableBox from "../../../components/EditableBox";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import Button from "../../../components/button";

const Settings = () => {
  const [editing, setEditing] = useState(false);
  const [values, setValues] = useState({
    name: "User",
    email: "user@mail.com",
  });

  const onChange = (key, value) => {
    setValues((v) => ({ ...v, [key]: value }));
  };

  const onEditPress = () => {
    console.log("Edit");
    setEditing(true);
  };
  const onSave = () => {
    setEditing(false);
  };

  const onItemPress = () => {
    Linking.openURL("https://www.google.com");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title="Settings" />
      <View style={styles.container}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Personal Infomation</Text>
          <Pressable onPress={onEditPress}>
            <Image
              source={require("../../../assets/edit.png")}
              style={styles.icon}
            />
          </Pressable>
        </View>
        <EditableBox
          onChangeText={(v) => onChange("name", v)}
          label="Name"
          value={values.name}
          editable={editing}
        />
        <EditableBox
          onChangeText={(v) => onChange("email", v)}
          label="Email"
          value={values.email}
          editable={editing}
        />
        {editing ? (
          <Button style={styles.button} onPress={onSave} title="Save" />
        ) : null}

        <Text style={styles.sectionTitle}> Help Center</Text>
        <ListItem style={styles.item} onPress={onItemPress} title="FAQ" />
        <ListItem
          style={styles.item}
          onPress={onItemPress}
          title="Contact Us"
        />
        <ListItem
          style={styles.item}
          onPress={onItemPress}
          title="Privacy Policy"
        />
      </View>
    </SafeAreaView>
  );
};

export default Settings;
