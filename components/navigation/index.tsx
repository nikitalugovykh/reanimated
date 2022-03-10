import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import React, { FC } from 'react'
import { Navigation_tabs } from '../../constants/config';


import MainApp from './Main';



const Navigation: FC = () => {


    const MainStack = createStackNavigator();
    // const MainStack = createNativeStackNavigator();
    // const MainStack = createBottomTabNavigator();

    return (
        <NavigationContainer
            theme={{
                ...DefaultTheme,
                colors: {
                    ...DefaultTheme.colors,

                }
            }}

        >
                <MainStack.Navigator
                    screenOptions={{
                        headerShown: false,
                        cardShadowEnabled: false,
                        cardStyle: {
                            backgroundColor: 'red'
                        }
                    }}
                >

                    <MainStack.Screen name={Navigation_tabs.MAIN_APP} component={MainApp} />


                    {/* <MainStack.Screen name={Navigation_tabs.MAIN_APP} component={MainApp} /> */}
                </MainStack.Navigator>
        </NavigationContainer>


    )
}

export default Navigation
