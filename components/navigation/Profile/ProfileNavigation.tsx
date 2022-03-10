// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import React, { FC } from 'react'
import { Routes } from "../../../constants/config";
import { Colors } from "../../../constants/constants";
import { ProfileScreen } from "../../screen/ProfileScreen";




const Stack = createStackNavigator()

const ProfileNavigation: FC = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardShadowEnabled: false,
            }}
        >

            <Stack.Screen
                name={Routes.PROFILE_SCREEN}
                component = {ProfileScreen}
                options={{
                    ...TransitionPresets.ModalSlideFromBottomIOS
                }}
            />

        </Stack.Navigator>
    )
}

export default ProfileNavigation
