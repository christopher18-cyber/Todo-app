import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Todo } from '../types/index.ts'
import TodoItem from './TodoItem.tsx'

interface TodoListProps{
    todos: Todo[],
    onDeleteTodo: (id:string) => void, 
    onToggleTodo: (id:string) => void,
    onEditTodo: (id:string, newText:string) => void
}

function TodoList ({todos, onDeleteTodo, onToggleTodo, onEditTodo}:TodoListProps) {
  return (
    <ScrollView style={styles.container}>
        {
            todos.map(todo=>
                <TodoItem
                onDelete={()=> onDeleteTodo(todo?.id)}
                onToggle={()=> onToggleTodo(todo?.id)}
                onEdit={(newText) => onEditTodo(todo?.id,newText)}
                key={todo.id}
                todo={todo}/> 
            )
        }
    </ScrollView>
  )
}

export default TodoList

const styles = StyleSheet.create({
    container:{

    }
})