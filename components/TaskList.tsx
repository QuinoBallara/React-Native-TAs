import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList, SafeAreaView } from 'react-native'
import { Task } from '@/types/task';
import { styles } from '@/styles/appStyles';

type TaskListProps = {
    task: Task,
}

export const TaskList = ({ task }: TaskListProps) => {
    const [taskList, setTaskList] = useState<Task[]>([]);

    const addToTaskList = (task: Task) => {
        setTaskList([...taskList, task]);
    }

    const removeFromTaskList = (id: string) => {
        setTaskList(taskList.filter(task => task.id !== id));
    }

    useEffect(() => {
        if (task.description.length > 0 && task.title.length > 0) {
            task.id = taskList.length > 0 ? taskList[taskList.length - 1].id + 1 : "1";
            addToTaskList(task);
        }
    }, [task])

    const taskListStyles = StyleSheet.create({
        task: {
            padding: 30,
            marginVertical: 20,
            borderWidth: 1,
            minWidth: '80%',
            marginHorizontal: 'auto'
        },
        title: {
            fontSize: 30,
            fontWeight: "bold",
            marginTop: 10,
        },
        description: {
            fontSize: 20,
            marginVertical: 20,
            marginHorizontal: 0,
        },
    })

    return (
        <SafeAreaView style={{ width: '90%', flex: 1 }}>
            <FlatList
                data={taskList}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={taskListStyles.task}>
                        <Text style={taskListStyles.title}>{item.title}</Text>
                        <Text style={taskListStyles.description}>{item.description}</Text>
                        <TouchableOpacity onPress={() => removeFromTaskList(item.id)} style={styles.button}>
                            <Text style={styles.button}>Remove</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </SafeAreaView>
    )
}
