//lista de tareas que vamos a obtener del backend
//flatlist: lista de elementos que recorre automaticamente
import { FlatList, RefreshControl } from "react-native";
import React, { useEffect, useState } from "react";
import { getTasks } from "../api";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const loadTasks = async () => {
    //de getTasks() viene un json que contiene los datos de la api
    const data = await getTasks();
    // console.log(data);
    setTasks(data);
  };

  //al cargar la pagina, como el componentdidmount
  useEffect(() => {
    loadTasks();
  }, []);

  //{item}: con llaves solo para extraer el item del obj que llega
  const renderItem = ({ item }) => {
    //se va a querer retornar un componente TaskItem
    return <TaskItem task={item} />;
  };

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await loadTasks();
    setRefreshing(false);
  });

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
      //refreshControl:
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          colors={["#78408f"]}
          onRefresh={onRefresh}
        />
      }
    />
  );
};

export default TaskList;
