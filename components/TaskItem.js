// para poder tener un item dentro de la lista
//y poder definir como va a lucir dentro de la tarea
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import {useNavigation} from "@react-navigation/native";

const TaskItem = ({ task, deleteTaskHandler }) => {

  const navigation = useNavigation();

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={()=>navigation.navigate('TaskFormScreen')}>
        <Text style={styles.itemTitle}>{task.title}</Text>
        <Text style={styles.itemTitle}>{task.description}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          // backgroundColor: "#000000",
          borderWidth: 1,
          borderColor: "#9f1f00",
          padding: 7,
          borderRadius: 5 }}
          onPress={()=> {deleteTaskHandler(task.id)}}
      >
        <Text style={styles.itemX}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#333333",
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,
    // shadowColor: "#000",
    flexDirection: "row",
    justifyContent: "space-between",
    // alignContent: "center",
    // verticalAlign: "middle",
  },
  itemTitle: {
    color: "#ffffff",
    // fontSize: 16,
    // fontWeight: "bold",
    // textAlign
  },
  itemX: {
    color:  "#9f1f00",
    // alignContent: "center",
    // verticalAlign: "middle",
    // fontSize: 16,
    // fontWeight: "bold",
    // textAlign
  },
});

export default TaskItem;
