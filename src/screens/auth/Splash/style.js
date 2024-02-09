import { StyleSheet } from "react-native";

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
    color: "#FCA34D",
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
    color: "#4f63AC",
    textWeight: "bold",
    fontSize: 16,
    paddingVertical: 30,
  },
});
