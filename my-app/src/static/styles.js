import { Row } from "react-bootstrap";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bungBtn: {
    backgroundColor: "#4ECDC4",
  },
  cornholio: {
    width: 200,
    height: 200,
    marginLeft: 30,
    marginBottom: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  bungContainer: {
    // flex: 4,
    backgroundColor: "#fff",
    alignItems: "baseline",
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    height: "100%",
    padding: 20,
  },
  bung: {
    // flex: 1,
    padding: 20,
    width: 150,
    height: 150,
    borderColor: "black",
  },
  bungText: {
    fontSize: 16,
  },
});

export default styles;
