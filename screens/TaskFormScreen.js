// pantalla para que el usuario pueda añadir una tarea
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity, //efecto del btn al clic
} from "react-native";
import React, { useState } from "react";
import Layout from "../components/Layout";
import { addTask } from "../api";

const TaskFormScreen = ({navigation}) => {

  const [Task, setTask] = useState({
    title: "",
    description: "",
  });

  const handleChange = (name, value) => {
    setTask({...Task, [name]: value });
  }

  const handleSubmit = () => {
    addTask(Task);
    navigation.navigate('HomeScreen')
  }

  return (
    <Layout>
      <TextInput
        style={styles.input}
        placeholder="Hay una nueva tarea???"
        placeholderTextColor="#546574" //color bajo
        onChangeText={(text)=> handleChange("title", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="De que se trata???"
        placeholderTextColor="#546574" //color bajo
        onChangeText={(text)=> handleChange("description", text)}
      />
      {/* <TouchableOpacity style={styles.btnGuardar} disabled> //disabled: para inabilitar */}
      <TouchableOpacity style={styles.btnGuardar} onPress={handleSubmit}>
        <Text style={styles.btnText}>Guardar Tarea</Text>
      </TouchableOpacity>
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
  btnText: {
    fontSize: 14,
    color: "#ffffff",
    textAlign: "center",
  },
});

export default TaskFormScreen;
