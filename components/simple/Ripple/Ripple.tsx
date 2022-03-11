import { useNavigation } from '@react-navigation/native'
import React, { FC } from 'react'
import { View, ViewStyle, StyleProp, StyleSheet } from 'react-native'
import { TapGestureHandler, TapGestureHandlerGestureEvent } from 'react-native-gesture-handler'
import Animated, { measure, runOnJS, useAnimatedGestureHandler, useAnimatedRef, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

interface RippleProps {
    style?: StyleProp<ViewStyle>
    onTap?: () => void
}

const Ripple: FC<RippleProps> = ({ style, onTap, children }) => {
    const navigation = useNavigation()

    const centerX = useSharedValue(0)
    const centerY = useSharedValue(0)
    const scale = useSharedValue(0)

    const aRef = useAnimatedRef<View>()

    const width = useSharedValue(0)
    const height = useSharedValue(0)


    const rippleOpacity = useSharedValue(0)

    const tapGestureHandler = useAnimatedGestureHandler<TapGestureHandlerGestureEvent>({
        onStart: (ev) => {

            const layout = measure(aRef)
            width.value = layout.width
            height.value = layout.height

            centerX.value = ev.x
            centerY.value = ev.y
            rippleOpacity.value = 1
            scale.value = 0
            scale.value = withTiming(1, { duration: 1000 })
        },
        onActive: () => {
            onTap && runOnJS(onTap)()
        },
        onFinish: () => {
            rippleOpacity.value = withTiming(0)
        }
    })

    const rStyleCircle = useAnimatedStyle(() => {



        const radiusCircle = Math.sqrt(width.value ** 2 + height.value ** 2)
        const translateX = centerX.value - radiusCircle
        const translateY = centerY.value - radiusCircle

        return {
            width: radiusCircle * 2,
            height: radiusCircle * 2,
            borderRadius: radiusCircle,
            backgroundColor: 'rgba(0,0,0,0.2)',
            position: 'absolute',
            top: 0,
            left: 0,
            transform: [{ translateX }, { translateY }, { scale: scale.value }, ],
            opacity: rippleOpacity.value
        }
    })


    return (
        <View ref={aRef} style = {style}>

            <TapGestureHandler onGestureEvent={tapGestureHandler}>
                <Animated.View style={[style, {overflow: 'hidden'}]}>
                    <View >
                        {children}
                    </View>
                    <Animated.View style={[styles.circle, rStyleCircle]} />
                </Animated.View>
            </TapGestureHandler>
        </View>
    )
}

const styles = StyleSheet.create({
    circle: {

    }
})

export default Ripple
