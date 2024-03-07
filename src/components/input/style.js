import { StyleSheet } from "react-native";

import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    flex: 1,
  },
  label: {
    marginVertical: 8,
    color: colors.blue,
    fontWeight: "500",
  },
  eye: {
    width: 24,
    height: 24,
    marginHorizontal: 16,
  },
  arrow: {
    width: 24,
    height: 24,
    marginHorizontal: 16,
    transform: [{ rotate: "90deg" }],
  },
  placeholder: {
    color: colors.lightGrey,
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  modalWrapper: {
    backgroundColor: "rgba(0,0,0,0.2)",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  modalContent: {
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 8,
    width: "80%",
  },
  optionTitle: {
    color: colors.black,
    fontSize: 16,
    marginBottom: 16,
  },
  optionText: {
    color: colors.black,
    fontSize: 15,
    paddingVertical: 4,
  },
  selectedOption: {
    backgroundColor: colors.blue,
    fontWeight: "bold",
  },
});
