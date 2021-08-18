import { Row } from "react-bootstrap";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 150,
  },
  bungBtn: {
    backgroundColor: "#4ECDC4",
    color: "#F7FFF7",
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
    backgroundColor: "#F7FFF7",
    borderColor: "#1A535C",
    textAlign: "right",
    color: "#1A535C",
  },
  scrollBung: {
    backgroundColor: "#F7FFF7",
  },
  bungContainer: {
    flex: 1,
    backgroundColor: "#F7FFF7",
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    height: "100%",
    padding: 5,
  },
  bung: {
    // flex: 1,
    padding: 15,
    // width: 165,
    height: 165,
    justifyContent: "center",
    borderColor: "#4ECDC4",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#1A535C",
    shadowColor: "#ccc",
    shadowRadius: 10,
  },
  bungRow: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  bungTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: "#4ECDC4",
    marginRight: 5,
    marginBottom: 5,
  },
  bungText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: "#4ECDC4",
    marginRight: 5,
    marginBottom: 5,
  },
  bungCalc: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFE66D",
    marginRight: 5,
    marginBottom: 5,
    textDecorationStyle: "double",
    textDecorationLine: "underline",
  },
});

export default styles;
