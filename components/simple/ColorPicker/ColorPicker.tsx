import { useNavigation } from '@react-navigation/native'
import React, { FC } from 'react'
import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient'
import { StyleSheet, View } from 'react-native'
import { PanGestureHandler, PanGestureHandlerGestureEvent, TapGestureHandler, TapGestureHandlerGestureEvent } from 'react-native-gesture-handler'
import Animated, { interpolateColor, useAnimatedGestureHandler, useAnimatedStyle, useDerivedValue, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
import { WIDTH } from '../../../constants/constants'
// import Animated from 'react-native-reanimated'

interface ColorPickerTypes extends LinearGradientProps {
    maxWidth: number,
    onColorChange?: (color: string | number) => void
}

type ContextType = {
    x: number
}


const CIRCLE_SIZE = 45
const INTERNAL_CIRCLE_SIZE = CIRCLE_SIZE / 2

const ColorPicker: FC<ColorPickerTypes> = ({ colors, start, style, end, maxWidth, onColorChange }) => {
    const navigation = useNavigation()

    const translateX = useSharedValue(0)
    const translateY = useSharedValue(0)
    const scale = useSharedValue(1)

    const adjustedTranslateX = useDerivedValue(() => {

        return Math.min(Math.max(translateX.value, 0), maxWidth - CIRCLE_SIZE)
    })

    const panGestureHandler = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, ContextType>({
        onStart: (_, context) => {
            context.x = adjustedTranslateX.value

            // translateY.value = withSpring(-CIRCLE_SIZE)
            // scale.value = withSpring(1.2)
        },
        onActive: (ev, context) => {
            translateX.value = ev.translationX + context.x

        },
        onEnd: () => {

            translateY.value = withSpring(0)
            scale.value = withSpring(1)

        }
    })

    const tapGestureHandler = useAnimatedGestureHandler<TapGestureHandlerGestureEvent>({
        onStart: (ev) => {
            translateY.value = withSpring(-CIRCLE_SIZE)
            scale.value = withSpring(1.2)
            translateX.value = withTiming(ev.x - CIRCLE_SIZE)
        },
        onEnd: () => {
            translateY.value = withSpring(0)
            scale.value = withSpring(1)
            // translateX.value = ev.x
            

        }
    })




    const rStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: adjustedTranslateX.value },
                { translateY: translateY.value },
                { scale: scale.value }
            ]
        }
    })

    const rInternalPickerStyle = useAnimatedStyle(() => {


        const inputRange = colors.map((_, index) => (index / colors.length) * maxWidth)

        const backgroundColor = interpolateColor(translateX.value,
            inputRange,
            colors
        )

        onColorChange?.(backgroundColor)
        return {
            backgroundColor
        }
    })


    return (
        <TapGestureHandler onGestureEvent={tapGestureHandler}>
            <Animated.View>
                <PanGestureHandler onGestureEvent={panGestureHandler}>
                    <Animated.View style={styles.wrapper}>
                        <LinearGradient
                            colors={colors}
                            style={style}
                            start={start}
                            end={end}
                        />
                        <Animated.View style={[styles.dotPicker, rStyle]} >
                            <Animated.View style={[styles.internalPicker, rInternalPickerStyle]} />
                        </Animated.View>
                    </Animated.View>
                </PanGestureHandler>
            </Animated.View>
        </TapGestureHandler>
    )
}

export default React.memo(ColorPicker)


const styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'center',

    },
    dotPicker: {
        position: 'absolute',
        backgroundColor: '#fff',
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        borderRadius: CIRCLE_SIZE / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    internalPicker: {
        position: 'absolute',
        backgroundColor: '#fff',
        width: INTERNAL_CIRCLE_SIZE,
        height: INTERNAL_CIRCLE_SIZE,
        borderRadius: INTERNAL_CIRCLE_SIZE / 2,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.8)'
    }

})
