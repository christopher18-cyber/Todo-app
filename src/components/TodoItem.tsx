import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Todo } from '../types/index.ts'
import TodoEdit from './TodoEdit.tsx'

interface TodoItemsProps{
    todo: Todo,
    onDelete:()=>void,
    onToggle: ()=> void,
    onEdit : (newText:string) => void 
}

function TodoItem ({todo,onDelete,onToggle,onEdit}:TodoItemsProps) {


  function handleEdit(newText:string){
    onEdit(newText)
    setIsEditing(false)
  }


  const [isEditing, setIsEditing] = useState(false)
  if(isEditing){
    return <TodoEdit todo={todo} onSave={handleEdit} onCancel={()=> setIsEditing(false)}/>
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onToggle} style={styles.todoText}>
        <Text style={[styles.text, todo?.completed && styles.completedText]}>{todo.text}</Text>
      </TouchableOpacity>
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={()=> setIsEditing(true)} style={styles.editBtn}>
          <Text style={styles.btnText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete} style={styles.deleteBtn}>
          <Text style={styles.btnText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default TodoItem

const styles = StyleSheet.create({
  container:{
    flexDirection: "row",
    alignItems:"center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor:"#cccccc"
  },
  todoText:{
    flex: 1,
  },
  text:{
    fontSize:18
  },
  completedText:{
    textDecorationLine:"line-through",
    color:"#888"
  }, btnContainer:{
    flexDirection:"row",
  },
  editBtn:{
    backgroundColor:"#007aff",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 5
  },
  deleteBtn:{
    backgroundColor:"#ff3b30",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 5
  },
  btnText:{
    color:"#fff",
    fontSize: 15
  }
})