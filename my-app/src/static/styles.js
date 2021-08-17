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
    height: 30,
    width: 80,
    // margin: 12,
    borderWidth: 1,
    padding: 5,
    backgroundColor: "#fff",
  },
  bungContainer: {
    // flex: 4,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    height: "100%",
    padding: 10,
  },
  bung: {
    // flex: 1,
    padding: 10,
    width: 165,
    height: 165,
    borderColor: "#1A535C",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#4ECDC4",
  },
  bungRow: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  bungText: {
    fontSize: 16,
    color: "#1A535C",
  },
});

export default styles;
