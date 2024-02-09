import React from "react";
import { TouchableOpacity, View } from "react-native";
import { styles } from "./style";

const Checkbox = ({ checked, onCheck }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.container}
      onPress={() => onCheck(!checked)}
    >
      {checked ? (
        <View>
          <Image
            style={styles.checkIcon}
            source={require("../../assets/Check.png")}
          />
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default Checkbox;
