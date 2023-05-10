import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native"; //contenedor de rutas
import { createStackNavigator } from "@react-navigation/stack"; //navegador

//screens
import HomeScreen from "./screens/HomeScreen";
import TaskFormScreen from "./screens/TaskFormScreen";

const Stack = createStackNavigator();//para navegar entre pantallas

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* siempre se pinta el primero, encima del otro*/}
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        {/* <Stack.Screen name="TaskForm" component={TaskFormScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
