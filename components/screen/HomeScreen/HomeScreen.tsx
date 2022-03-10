import { useNavigation } from '@react-navigation/native'
import React, { FC } from 'react'
import { Button, Text, View } from 'react-native'
import { Routes } from '../../../constants/config'
import styles from './HomeScreen.styles'

const HomeScreen: FC = () => {
    const navigation: any = useNavigation()
    return (
        <View style ={styles.wrapper}> 
            <Text>HomeScreen</Text>
            <Button
                title={'Color picker'}
                color = {'green'}
                onPress={()=> navigation.navigate(Routes.COLOR_PICKER_SCREEN)}
            />
        </View>
    )
}

export default HomeScreen
