import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.blue,
    paddingVertical: 20,
    paddingHorizontal: 8,
    width: "100%",
    borderRadius: 10,
  },
  title: {
    color: colors.white,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
