//lista de tareas que vamos a obtener del backend
//flatlist: lista de elementos que recorre automaticamente
import { FlatList, RefreshControl } from "react-native";
import React, { useEffect, useState } from "react";
import { getTasks, deleteTask } from "../api";
import TaskItem from "./TaskItem";
import { useIsFocused } from "@react-navigation/native";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const isFocused = useIsFocused();//booleano para ver si el componente esta activo o no

  const loadTasks = async () => {
    //de getTasks() viene un json que contiene los datos de la api
    const data = await getTasks();
    // console.log(data);
    setTasks(data);
  };

  //al cargar la pagina, como el componentdidmount
  useEffect(() => {
    loadTasks();
  }, [isFocused]);

  const deleteTaskHandler = async (id) => {
    await deleteTask(id);
    await loadTasks();
  };

  //{item}: con llaves solo para extraer el item del obj que llega
  const renderItem = ({ item }) => {
    //se va a querer retornar un componente TaskItem
    return <TaskItem task={item} deleteTaskHandler={deleteTaskHandler}/>;
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
          progressBackgroundColor="#0a3d62"
        />
      }
    />
  );
};

export default TaskList;
