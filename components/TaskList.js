// lista de tareas que vamos a obtener del backend
import { View, Text, FlatList } from "react-native";
import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks }) => {
  //{item}: con llaves solo para extraer el item del obj que llega
  const renderItem = ({ item }) => {
    //se va a querer retornar un componente TaskItem
    return <TaskItem task={item} />;
  };

  return (
    //FlatList: contenedor de cada uno de los items
    <FlatList
      style={{ width: "100%" }}
      data={tasks}
      //cada elemento hijo deberia ser unico, keyextractor es para los hijos en renderItem
      //la funcion espera un string y al concatenarlo con vacio item.id se vuelve string
      //ahora no es necesario al parecer porque no salio ningun error de este tipo
      keyExtractor={(item) => item.id + ""}
      //renderiza el elemento de la lista
      renderItem={renderItem}
    />
  );
};

export default TaskList;
