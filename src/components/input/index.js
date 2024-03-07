import React, { useState } from "react";
import {
  TextInput,
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  Modal,
} from "react-native";
import { styles } from "./style";

const Input = ({
  label,
  placeholder,
  isPassword,
  value,
  onChangeText,
  style,
  type,
  options,
  ...props
}) => {
  const [isPasswordVisible, setIsPasswordvisible] = useState(false);
  const [isPickerModalVisible, setIsPickerModalVisible] = useState(false);

  const onEyePress = () => {
    setIsPasswordvisible(!isPasswordVisible);
  };

  const onSelect = (opt) => {
    onChangeText(opt);
    setIsPickerModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {type === "picker" ? (
        <Pressable
          onPress={() => setIsPickerModalVisible(true)}
          style={styles.inputContainer}
        >
          {value ? (
            <Text style={styles.input}>{value?.title}</Text>
          ) : (
            <Text style={styles.input}>{placeholder}</Text>
          )}
          <Image
            style={styles.arrow}
            source={require("../../assets/arrow.png")}
          />
        </Pressable>
      ) : (
        <View style={styles.inputContainer}>
          <TextInput
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={isPassword && !isPasswordVisible}
            placeholder={placeholder}
            style={[styles.input, style]}
            {...props}
          />
          {isPassword ? (
            <Pressable onPress={onEyePress}>
              <Image
                style={styles.eye}
                source={
                  isPasswordVisible
                    ? require("../../assets/eye.png")
                    : require("../../assets/eye_closed.png")
                }
              />
            </Pressable>
          ) : null}
        </View>
      )}
      <Modal transparent visible={isPickerModalVisible}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setIsPickerModalVisible(false)}
          style={styles.modalWrapper}
        >
          <TouchableOpacity activeOpacity={1} style={styles.modalContent}>
            <Text>Select options</Text>
            {options?.map((opt) => {
              if (!opt?.id) {
                return null;
              }
              const selected = value?.id === opt?.id;

              return (
                <Text
                  onPress={() => onSelect(opt)}
                  style={[
                    styles.optionText,
                    selected ? styles.selectedOption : {},
                  ]}
                  key={opt?.title}
                >
                  {opt?.title}
                </Text>
              );
            })}
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default Input;
