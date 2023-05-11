import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native"; //contenedor de rutas
import { createStackNavigator } from "@react-navigation/stack"; //navegador

//screens
import HomeScreen from "./screens/HomeScreen";
import TaskFormScreen from "./screens/TaskFormScreen";

const Stack = createStackNavigator(); //para navegar entre pantallas

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* siempre se pinta el primero, encima del otro*/}
        {/* options: objeto de propiedades que tendra el HomeScreen */}
        <Stack.Screen name="HomeScreen" component={HomeScreen}
          options={({navigation}) => ({
            title: "Tasks App",//el titulo es el que se muestra en la barra arriba
            headerStyle: { backgroundColor: "#222f3e" },
            headerTitleStyle: { color: "#ffffff" },
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('TaskFormScreen')}>
                <Text style={{ color: "#ffffff", marginRight:20, fontSize: 20 }}>Agregar</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name="TaskFormScreen" component={TaskFormScreen}
          options={{
            title: "Agregar tarea",
            headerStyle: { backgroundColor: "#222f3e" },
            headerTitleStyle: { color: "#ffffff" },
            headerTintColor: "#ffffff",//la flecha hacia atras
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
