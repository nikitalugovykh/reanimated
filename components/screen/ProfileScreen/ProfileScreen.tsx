import { useNavigation } from '@react-navigation/native'
import React, { FC } from 'react'
import { Text, View } from 'react-native'
import styles from './ProfileScreen.styles'

const ProfileScreen: FC = () => {
    const navigation = useNavigation()
    return (
        <View style ={styles.wrapper}> 
            <Text>ProfileScreen</Text>
        </View>
    )
}

export default ProfileScreen
