import {
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import React, { useState } from "react";
import { Checkbox, IconButton } from "react-native-paper";

console.log(Date.now().toString());

const TodoScreen = () => {
    // States
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);

    // Handle Add Todo
    const handleAddTodo = () => {
        // sturtcure of a single todo item
        // {
        //  id:
        //  title:
        // }

        if (todo === "") {
            return; // early return
        }

        setTodoList([...todoList, { id: Date.now().toString(), title: todo }]);
        setTodo("");
    };

    // Handle Delete
    const handleDeleteTodo = (id) => {
        const updatedTodoList = todoList.filter((todo) => todo.id !== id);

        setTodoList(updatedTodoList);
    };

    //Handle CheckBox
    const handleToggleCheckbox = (id) => {
        const updatedTodoList = todoList.map((todo) => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });

        setTodoList(updatedTodoList);
    };


    // Render todo
    const renderTodos = ({ item, index }) => {
        return (
            <View
                style={{
                    backgroundColor: "#1e90ff",
                    borderRadius: 6,
                    paddingHorizontal: 6,
                    paddingVertical: 8,
                    marginBottom: 12,
                    flexDirection: "row",
                    alignItems: "center"
                }}
            >

                <Checkbox
                    status={item.completed ? 'checked' : 'unchecked'} // Assuming you have a 'completed' property in your todo item
                    onPress={() => handleToggleCheckbox(item.id)}
                    uncheckedColor="#fff"
                    color="#fff"
                />
                <Text
                    style={{ color: "#fff", fontSize: 20, fontWeight: "800", flex: 1 }}
                >
                    {item.title}
                </Text>
                <IconButton
                    icon="trash-can"
                    iconColor="#fff"
                    onPress={() => handleDeleteTodo(item.id)}
                />
            </View>
        );
    };
    return (
        <View style={{ marginHorizontal: 16, marginTop: 30 }}>
            <Text style={{
                color: "#000",
                fontWeight: "bold",
                fontSize: 20,
                alignSelf: "center",
                marginBottom: 20
            }}>TodoList</Text>

            <TextInput
                style={{
                    borderWidth: 2,
                    borderColor: "#000",
                    borderRadius: 6,
                    paddingVertical: 8,
                    paddingHorizontal: 16,
                }}
                placeholder="Add a task"
                value={todo}
                onChangeText={(userText) => setTodo(userText)}
            />


            <TouchableOpacity
                style={{
                    backgroundColor: "#000",
                    borderRadius: 6,
                    paddingVertical: 12,
                    marginVertical: 20,
                    alignItems: "center",
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.8,
                    shadowRadius: 3,
                }}
                onPress={() => handleAddTodo()}
            >
                <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
                    Add
                </Text>
            </TouchableOpacity>


            {/* Render todo list  */}
            {todoList.length > 0 ? (<View style={{ display: "flex" }} >
                <Text style={{
                    color: "#000",
                    fontWeight: "bold",
                    fontSize: 20,
                    alignSelf: "center",
                    marginBottom: 20
                }} >Tasks</Text>
                <FlatList data={todoList} renderItem={renderTodos} scrollEnabled={true} />
            </View>
            ) : (
                <Text style={{
                    color: "#000",
                    fontWeight: "bold",
                    fontSize: 20,
                    alignSelf: "center",
                    marginBottom: 20
                }}>Add tasks</Text>
            )}
        </View>
    );
};

export default TodoScreen;

const styles = StyleSheet.create({});