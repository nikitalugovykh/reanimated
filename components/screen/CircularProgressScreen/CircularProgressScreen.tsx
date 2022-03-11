import { useNavigation } from '@react-navigation/native'
import React, { FC, useEffect } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Animated, { useAnimatedProps, useDerivedValue, useSharedValue, withTiming } from 'react-native-reanimated'
import { ReText } from 'react-native-redash'
import Svg, { Circle, Path } from 'react-native-svg'
import { BACKGROUND_COLOR, Fonts, HEIGHT, WIDTH } from '../../../constants/constants'

const CircularProgressScreen: FC = () => {
    const navigation = useNavigation()

    const BACKGROUND_COLOR = '#444bf6'
    const BACKGROUND_STROKE_COLOR = '#303858'
    const STROKE_COLOR = '#a6e1fa'

    const CIRCLE_LENGTH = 1000
    const R = CIRCLE_LENGTH / (2 * Math.PI)


    const progress = useSharedValue(0)

    const AnimatedCircle = Animated.createAnimatedComponent(Circle)



    // useEffect(() => {
    //     progress.value = withTiming(1, { duration: 2000 })
    // }, [])

    const animatedProps = useAnimatedProps(() => ({
        strokeDashoffset: CIRCLE_LENGTH * (1 - progress.value)
    }))


    const progressText = useDerivedValue(() => {
        return `${Math.floor(progress.value * 100)}`
    })

    const onPressHandler = () => {
        if (progress.value === 0) {
            progress.value = withTiming(1, { duration: 2000 })
            return
        }
        if(progress.value === 1) {
            progress.value = withTiming(0, { duration: 2000 })
        }
    }

    return (
        <View style = {{flex: 1, backgroundColor: BACKGROUND_COLOR}}>

            <View style={styles.wrapper}>
                {/* <Text style = {styles.progressText}>{progressText.value}</Text> */}
                <ReText style={styles.progressText} text={progressText} />
                <Svg style={{ position: 'absolute', top: -80 }}>
                    <Circle
                        cx={WIDTH / 2}
                        cy={HEIGHT / 2}
                        r={R}
                        stroke={BACKGROUND_STROKE_COLOR}
                        strokeWidth={30}
                    />
                    <AnimatedCircle
                        cx={WIDTH / 2}
                        cy={HEIGHT / 2}
                        r={R}
                        stroke={STROKE_COLOR}
                        strokeWidth={15}
                        strokeDasharray={CIRCLE_LENGTH}
                        animatedProps={animatedProps}
                        // закругляет зпрогрес по краям
                        strokeLinecap={'round'}
                    />
                </Svg>

            </View>
            <Button title='Нажми' onPress={onPressHandler}/>

        </View>
    )
}

export default CircularProgressScreen


const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: BACKGROUND_COLOR,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    progressText: {
        color: '#fff000',
        fontSize: 80,
        fontWeight: '700'
    },
    
})