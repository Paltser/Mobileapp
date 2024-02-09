import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
  },
  innerTitle: {
    color: colors.orange,
    textDecorationLine: "underline",
  },
  container: {
    alignItems: "center",
    padding: 24,
    flexDirection: "column",
    height: "100%",
    borderWidth: 1,
  },
  titleContainer: {
    marginVertical: 54,
  },
  footerText: {
    color: colors.blue,
    textWeight: "bold",
    fontSize: 16,
    paddingVertical: 30,
  },
});
