import { Row } from 'react-bootstrap';
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    cornholio: {
      width: 200,
      height: 200,
      marginBottom: 20,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
      bungContainer: {
        flex: 6,
        backgroundColor: "#fff",
        // alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
      },
      bung: {
        //   flex: 2,
      }
  });

  export default styles