import { useNavigation } from '@react-navigation/native'
import React, { FC, useCallback } from 'react'
import { Text, View } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
import { WIDTH } from '../../../constants/constants'
import { ColorPicker } from '../../simple/ColorPicker'
import styles from './ColorPickerScreen.styles'


const COLORS = [
    'red',
    'purple',
    'blue',
    'cyan',
    'green',
    'yellow',
    'orange',
    'black',
    'white',
]

const PICKER_WIDTH = WIDTH * 0.9



const ColorPickerScreen: FC = () => {

    const navigation = useNavigation()

    const pickedColor = useSharedValue<string | number>(COLORS[0])

    const rStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: pickedColor.value
        }
    })


    const onColorChange = useCallback((color: string | number)=> {
        'worklet'

        pickedColor.value = color
    }, [])

    return (
        <>
            <View style={styles.topContainer} >
                <Animated.View style = {[styles.circle, rStyle]}/>    
            </View>
            <View style={styles.buttomContainer} >
                <ColorPicker 
                    maxWidth={PICKER_WIDTH}
                    colors = {COLORS}
                    style = {styles.linearGradientCore}
                    start = {[0,0]}
                    end = {[1,0]}
                    onColorChange = {onColorChange}
                />
            </View>
        </>
    )
}

export default ColorPickerScreen
