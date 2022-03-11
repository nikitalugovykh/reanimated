import { useNavigation } from '@react-navigation/native'
import React, { FC, useCallback, useRef, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { ListItem } from '../../simple/ListItem'

const TITLES = [
    'Купить мясо',
    'Купить носки',
    'Купить какую-то хрень',
    'Купить телефон',
    'Купить Macbook',
    'Купить мясо',
    'Купить носки',
    'Купить какую-то хрень',
    'Купить телефон',
    'Купить Macbook',
]

export interface TaskInterface {
    title: string,
    index: number
}

const TASKS: TaskInterface[] = TITLES.map((title, index) => ({ title, index }))

const ListScreen: FC = () => {

    const [tasks, setTasks] = useState<TaskInterface[]>(TASKS)

    console.log(tasks.length)
    

    const onDismiss = useCallback((task: TaskInterface)=> {
       
        setTasks(prevState => {
            return prevState.filter((item)=> item.index !== task.index)
        })
    }, [])

    const scrollRef = useRef<ScrollView>(null)

    const navigation = useNavigation()
    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>TASKS</Text>
            <ScrollView 
                style = {{flex: 1}}
                ref = {scrollRef}
            >
                {tasks.map(item => {
                    return (
                        <ListItem simultaneousHandlers={scrollRef} onDismiss={onDismiss} key = {item.index} task={item}/>
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default ListScreen


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#f9f9f9'
    },
    title: {
        fontSize: 60,
        marginVertical: 20,
        paddingLeft: 24
    }
})
