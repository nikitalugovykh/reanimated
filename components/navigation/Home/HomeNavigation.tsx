// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import React, { FC } from 'react'
import { Routes } from "../../../constants/config";
import { CircularProgressScreen } from "../../screen/CircularProgressScreen";
import { ColorPickerScreen } from "../../screen/ColorPickerScreen";
import { HomeScreen } from "../../screen/HomeScreen";



const Stack = createStackNavigator();

const HomeNavigation: FC = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardShadowEnabled: false,
                cardStyle: {
                    // backgroundColor: 'red'
                }
            }}
        >

            <Stack.Screen
                name={Routes.HOME_SCREEN}
                component={HomeScreen}
                options={{
                    ...TransitionPresets.ModalSlideFromBottomIOS
                }}
            />
            <Stack.Screen
                name={Routes.COLOR_PICKER_SCREEN}
                component={ColorPickerScreen}
                options={{
                    ...TransitionPresets.SlideFromRightIOS
                }}
            />
            <Stack.Screen
                name={Routes.CIRCULAR_PROGRESS_SCREEN}
                component={CircularProgressScreen}
                options={{
                    ...TransitionPresets.ModalSlideFromBottomIOS
                }}
            />
           
        </Stack.Navigator>
    )
}

export default HomeNavigation
