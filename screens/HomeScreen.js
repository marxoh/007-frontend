// pantalla inicial
//flatlist: lista de elementos que recorre automaticamente
import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { getTasks } from "../api";
import Layout from "../components/Layout";
import TaskList from "../components/TaskList";

const HomeScreen = () => {
  const [tasks, setTasks] = useState([]);

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

  return (
    //se pone el children de Layout
    <Layout>
      <TaskList tasks={tasks} />
    </Layout>
  )
};

export default HomeScreen;
