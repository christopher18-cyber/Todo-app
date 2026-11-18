import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

interface TodoInputProps {
    onAddTodo : (text:string)=> void
}

function TodoInput ({ onAddTodo }: TodoInputProps) {

  const [text, setText] = useState("")  

  function handleAddTodo(){
    if(text.trim()){
        onAddTodo(text)
        setText("")
    }
  }

  return (
    <View style={styles.container}>
        <TextInput   
        value={text}
        onChangeText={setText}
        style={styles.input}
        placeholder='Add a new Todo'/>
        <TouchableOpacity onPress={handleAddTodo} style={styles.addTodoBtn}>
            <Text style={styles.addTodoBtnText}>Add</Text>
        </TouchableOpacity>
    </View>
  )
}

export default TodoInput

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        marginBottom: 20
    },
    input:{
        flex: 1,
        borderWidth: 1,
        borderColor: "#cccccc",
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10
    },
    addTodoBtn:{
        backgroundColor:"#007aff",
        paddingHorizontal: 15,
        paddingVertical: 5,
        justifyContent:"center",
        alignItems:"center"
    },
    addTodoBtnText:{
        color:"#fff",
        fontWeight:"bold",
    }
})