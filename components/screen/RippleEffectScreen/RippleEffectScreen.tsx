import { useNavigation } from '@react-navigation/native'
import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TapGestureHandler } from 'react-native-gesture-handler'
import { useAnimatedGestureHandler } from 'react-native-reanimated'
import { Ripple } from '../../simple/Ripple'

const RippleEffectScreen: FC = () => {
    const navigation = useNavigation()

    const onTapHandler = () => {
        
        console.log('tap');
        
    }


    return (
       
            <View style={styles.wrapper}>
                <Ripple onTap={onTapHandler} style={styles.ripple}>
                    <Text style={styles.text}>Tap</Text>
                </Ripple>
            </View>
      
    )
}


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ripple: {
        width: 200,
        height: 200,
        backgroundColor: '#bbb9F6',
        borderRadius: 3,
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 15,
        shadowOpacity: 0.3,

        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '700',
    }
})



export default RippleEffectScreen

