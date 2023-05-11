//reutilizar porciones visuales como fondos y contenedores
//donde habran estilizaciones en comun

import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";

//esto va a envolver el marco de trabajo
const Layout = ({ children }) => {
  return (
    <View style={styles.container}>
      {/* en mi caso el statusbar no se ve pero tambien lo cambiaria de color*/}
      <StatusBar backgroundColor="#222f3e"/>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#222f3e",
    padding: 20,
    flex: 1, //para que abarque todo el alto de la aplicacion
    alignItems: "center",
    //justifyContent: "center",
  },
});

export default Layout;
