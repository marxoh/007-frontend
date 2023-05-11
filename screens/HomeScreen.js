// pantalla inicial con la lista de tareas
import React from "react";
import Layout from "../components/Layout";
import TaskList from "../components/TaskList";

const HomeScreen = () => (
  //se pone el children de Layout
  <Layout>
    <TaskList />
  </Layout>
);

export default HomeScreen;
