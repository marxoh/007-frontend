// pantalla para que el usuario pueda añadir una tarea
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity, //efecto del btn al clic
} from "react-native";
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { addTask, getTask, editTask } from "../api";

const TaskFormScreen = ({ navigation, route }) => {
  const [Task, setTask] = useState({
    title: "",
    description: "",
  });

  const [editing, setEditing] = useState(false);

  // console.log(route.params);

  const handleChange = (name, value) => {
    setTask({ ...Task, [name]: value });
  };

  const handleSubmit = async () => {
    //solo como ejemplo try/catch
    try {
      if (!editing) {
        await addTask(Task);
        setEditing(false);
      } else {
        console.log(route.params.id, Task)
        await editTask(route.params.id, {...Task});
        setEditing(true);
      }
      navigation.navigate("HomeScreen");
    } catch (e) {
      console.error("perror: ",e);
    }
  };

  useEffect(() => {
    // console.log(route.params.id);
    if (route.params && route.params.id) {
      //cambiar el headerTitle
      navigation.setOptions({ headerTitle: "Editar Tarea" });
      setEditing(true);
      //de esta manera solo para poner el async que le falta al await
      //})(); y la funcion es inmediatamente invocada
      (async () => {
        const task = await getTask(route.params.id);
        // console.log(task)
        setTask({ title: task.title, description: task.description });
      })();
    }
  }, []);

  return (
    <Layout>
      <TextInput
        style={styles.input}
        placeholder="Hay una nueva tarea???"
        placeholderTextColor="#546574" //color bajo
        onChangeText={(text) => handleChange("title", text)}
        value={Task.title}
      />
      <TextInput
        style={styles.input}
        placeholder="De que se trata???"
        placeholderTextColor="#546574" //color bajo
        onChangeText={(text) => handleChange("description", text)}
        value={Task.description}
      />
      {/* <TouchableOpacity style={styles.btnGuardar} disabled> //disabled: para inabilitar */}
      {!editing ? (
        <TouchableOpacity style={styles.btnGuardar} onPress={handleSubmit}>
          <Text style={styles.btnText}>Guardar Tarea</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.btnActualizar} onPress={handleSubmit}>
          <Text style={styles.btnText}>Actualizar Tarea</Text>
        </TouchableOpacity>
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  //se declaran pero no se deben aplicar
  input: {
    width: "90%",
    height: 35,
    fontSize: 14,
    color: "#ffffff",
    borderColor: "#10ac84", //borde verde
    borderWidth: 1,
    margin: 10,
    padding: 10,
    textAlign: "center",
    borderRadius: 5,
  },
  btnGuardar: {
    width: "90%",
    height: 35,
    fontSize: 14,
    color: "#ffffff",
    backgroundColor: "#10ac84", //borde verde
    borderWidth: 1,
    margin: 10,
    padding: 5,
    textAlign: "center",
    borderRadius: 5,
  },
  btnActualizar: {
    width: "90%",
    height: 35,
    fontSize: 14,
    color: "#ffffff",
    backgroundColor: "#e58e26", //borde naranjo
    borderWidth: 1,
    margin: 10,
    padding: 5,
    textAlign: "center",
    borderRadius: 5,
  },
  btnText: {
    fontSize: 14,
    color: "#ffffff",
    textAlign: "center",
  },
});

export default TaskFormScreen;
