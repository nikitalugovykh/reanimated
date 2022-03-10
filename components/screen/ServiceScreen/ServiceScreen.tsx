import { useNavigation } from '@react-navigation/native'
import React, { FC } from 'react'
import { Text, View } from 'react-native'
import styles from './ServiceScreen.styles'

const ServiceScreen: FC = () => {
    const navigation = useNavigation()
    return (
        <View style ={styles.wrapper}> 
            <Text>ServiceScreen</Text>
        </View>
    )
}

export default ServiceScreen
