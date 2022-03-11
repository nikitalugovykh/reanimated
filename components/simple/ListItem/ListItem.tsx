import { useNavigation } from '@react-navigation/native'
import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { PanGestureHandler, PanGestureHandlerGestureEvent, PanGestureHandlerProps } from 'react-native-gesture-handler'
import Animated, { runOnJS, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
import { TaskInterface } from '../../screen/ListScreen/ListScreen'
import { AntDesign } from '@expo/vector-icons';
import { WIDTH } from '../../../constants/constants'


interface ListItemInterface extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'>{
    task: TaskInterface,
    onDismiss?: (task: TaskInterface) => void,
    
}

const ListItem: FC<ListItemInterface> = ({ task, onDismiss, simultaneousHandlers }) => {

    const navigation = useNavigation()

    const translateX = useSharedValue(0)

    const TRANSLATE_X_THRESHOLD = - WIDTH * 0.3
    const LIST_ITEM_HEIGHT = 70
    const itemHeight = useSharedValue(LIST_ITEM_HEIGHT)
    const marginVirtical = useSharedValue(10)
    const opacity = useSharedValue(1)

    const panGestureHandler = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
        onStart: () => { },
        onActive: (ev) => {
            translateX.value = ev.translationX
        },
        onEnd: () => {
            const shouldBeDissmissed = translateX.value < TRANSLATE_X_THRESHOLD

            if (shouldBeDissmissed) {
                translateX.value = withTiming(-WIDTH)
                itemHeight.value = withTiming(0)
                marginVirtical.value = withTiming(0)
                opacity.value = withTiming(0, undefined, (isFinished) => {
                    if(isFinished && onDismiss) {
                       runOnJS(onDismiss)(task)
                    }
                })

                
            } else {
                translateX.value = withTiming(0)
            }
        }
    })

    const rStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: translateX.value }]
        }
    })

    const rIconStyle = useAnimatedStyle(() => {

        const opacity = withTiming(translateX.value < TRANSLATE_X_THRESHOLD ? 1 : 0)
        return {
            opacity
        }
    })

    const rContainerStyle = useAnimatedStyle(() => {
        return {
            height: itemHeight.value,
            marginVertical: marginVirtical.value,
            opacity: opacity.value
        }
    })

    return (
        <Animated.View style={[styles.wrapper, rContainerStyle]}>
            <Animated.View style={[styles.removeIcon, rIconStyle]}>
                <AntDesign name="delete" size={24} color="red" />
            </Animated.View>
            <PanGestureHandler  simultaneousHandlers = {simultaneousHandlers} onGestureEvent = {panGestureHandler}>
                <Animated.View style={[styles.task, rStyle]}>
                    <Text style={styles.title}>{task.title}</Text>
                </Animated.View>
            </PanGestureHandler>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 10,
    },
    task: {
        borderRadius: 3,
        width: '90%',
        height: 70,
        justifyContent: 'center',
        paddingLeft: 20,
        backgroundColor: 'white',
        shadowOpacity: 0.08,
        shadowOffset: {
            width: 0,
            height: 20
        },
        shadowRadius: 10,
        elevation: 5
    },
    title: {
        fontSize: 16
    },
    removeIcon: {
        width: 70,
        height: 70,
        position: 'absolute',
        right: '5%',
        justifyContent: 'center',
        alignItems: 'center',
    }



})

export default ListItem
