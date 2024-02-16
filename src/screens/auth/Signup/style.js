import { StyleSheet } from "react-native";

import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  agreeRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  agreeText: {
    color: colors.blue,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  agreeTextBold: {
    fontWeight: "bold",
  },
  Button: {
    marginVertical: 20,
  },
  footerText: {
    textAlign: "center",
    color: colors.blue,
    marginBottom: 56,
  },
  footerLink: {
    fontWeight: "bold",
  },
});
