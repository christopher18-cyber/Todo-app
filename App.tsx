import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import TodoInput from './src/components/TodoInput'
import { Todo } from './src/types';
import TodoList from './src/components/TodoList';


function App (): React.JSX.Element {

  const [todoList, setTodoList] = useState<Todo[]>([])

  function addTodo(text:string){

    console.log(text);

    setTodoList([...todoList,{
      id: Date.now().toString(),
      text,
      completed: false
    }])
  }

  console.log(todoList);


  function deleteTodo(id:string){
    console.log(id);
    setTodoList(
      todoList.filter(item=> item.id !== id)
    )
  }

  function editTodo(id:string, newText: string){
    setTodoList(todoList.map(item=> item.id === id ? {
      ...item,
      text: newText
    }:item))
  }

  function toggleTodo(id:string){
    setTodoList(todoList.map(item=> item.id === id?{
      ...item,
      completed: !item.completed
    }:item))
  }
  

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Todo App</Text>
      <TodoInput onAddTodo={addTodo}/>
      <TodoList 
      onToggleTodo={toggleTodo} 
      onDeleteTodo={deleteTodo}
      onEditTodo={editTodo} 
      todos={todoList}/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20
  },
  headerText:{
    marginTop:30,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center"
  }
})