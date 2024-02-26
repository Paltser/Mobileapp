import { StyleSheet } from "react-native";

import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
  },
  item: {
    marginVertical: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  sectionTitle: {
    fontWeight: "500",
    fontSize: 16,
    color: colors.grey,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    width: 32,
    height: 32,
  },
  button: {
    paddingVertical: 12,
    margintop: 16,
  },
});
