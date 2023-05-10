// lista de tareas que vamos a obtener del backend
import { View, Text, FlatList } from "react-native";
import React from "react";

const TaskList = ({tasks}) => {
  return (
    <FlatList
      data={tasks}
      //cada elemento hijo deberia ser unico, keyextractor es para los hijos en renderItem
      //la funcion espera un string y al concatenarlo con vacio item.id se vuelve string
      //ahora no es necesario al parecer porque no salio ningun error de este tipo
      keyExtractor={(item)=>item.id + ''}
      //{item}: con llaves solo para extraer el item del obj que llega
      renderItem={({ item }) => {
        //y luego necesita solo el title de esa propiedad
        return <Text>{item.title}</Text>;
      }}
    />
  );
};

export default TaskList;
