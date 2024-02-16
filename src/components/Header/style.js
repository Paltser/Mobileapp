import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: colors.black,
    fontSize: 16,
    fontWeight: "bold",
  },
  Icon: {
    width: 24,
    height: 24,
  },
  space: {
    width: 24,
  },
});
