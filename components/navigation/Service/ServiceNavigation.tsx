// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import React, { FC } from 'react'
import { Routes } from "../../../constants/config";
import { ServiceScreen } from "../../screen/ServiceScreen";



const Stack = createStackNavigator()

const ServiceNavigation: FC = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardShadowEnabled: false,
            }}
        >

            <Stack.Screen
                name={Routes.SERVICE_SCREEN}
                component={ServiceScreen}
                options={{
                    ...TransitionPresets.ModalSlideFromBottomIOS
                }}
            />
           
            

        </Stack.Navigator>
    )
}

export default ServiceNavigation
