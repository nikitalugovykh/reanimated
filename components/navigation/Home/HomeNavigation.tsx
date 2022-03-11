// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import React, { FC } from 'react'
import { Routes } from "../../../constants/config";
import { CircularProgressScreen } from "../../screen/CircularProgressScreen";
import { ColorPickerScreen } from "../../screen/ColorPickerScreen";
import { HomeScreen } from "../../screen/HomeScreen";
import { ListScreen } from "../../screen/ListScreen";
import { RippleEffectScreen } from "../../screen/RippleEffectScreen";



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
            <Stack.Screen
                name={Routes.LIST_SCREEN}
                component={ListScreen}
                options={{
                    ...TransitionPresets.DefaultTransition
                }}
            />
            <Stack.Screen
                name={Routes.RIPPLE_EFFECT_SCREEN}
                component={RippleEffectScreen}
                options={{
                    ...TransitionPresets.DefaultTransition
                }}
            />
           
        </Stack.Navigator>
    )
}

export default HomeNavigation
