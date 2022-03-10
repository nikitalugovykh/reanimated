import React, { FC } from 'react'
import { Platform, StatusBar, StyleSheet, View, ViewStyle } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from '../../constants/constants';

import HomeNavigation from './Home/HomeNavigation';
import { TabsName } from '../../constants/config';
import ProfileNavigation from './Profile/ProfileNavigation';
import ServiceNavigation from './Service/ServiceNavigation';


const styles = StyleSheet.create({
    AndroidSafeArea: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex: 1,
        // backgroundColor: Colors.White,
    }
});




// const mainStyleTabs: ViewStyle = {
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: 45,
//     height: 45,
//     borderRadius: 15,
//     // borderColor: Colors.WHITE,
//     borderWidth: 1,
// }
const iconWrapStyle: ViewStyle = {
    width: 32,
    height: 32,
    borderRadius: 4,
    // backgroundColor: Colors.Red,
    justifyContent: 'center',
    alignItems: 'center',
}

const IconWrap = (children: JSX.Element) => {
    return (
        <View style = {iconWrapStyle}>
            {children}
        </View>
    )
}


const MainApp: FC = () => {

    const Tab = createBottomTabNavigator();


    return (
        // <SafeAreaView
        //     edges={['right', 'top', 'left']}
        //     style={{ flex: 1 }}>

        <Tab.Navigator
            initialRouteName={TabsName.HOME}
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    // position: 'absolute',
                    // paddingTop: 20,
                    // height: 70,
                    // backgroundColor: Colors.White,
                    // borderRadius: 40,
                    // ...ifIphoneX({
                    //   height: 80,
                    //   paddingTop: 20,
                    // elevation: 0,
                    //   paddingBottom: 10,
                    // })
                    // borderTopWidth: 0,
                },
                tabBarShowLabel: false,
                // tabBarBackground: () => (
                //     <View style={[StyleSheet.absoluteFill, { borderTopRightRadius: 30, borderTopLeftRadius: 30, overflow: 'hidden', }]}>
                //         <BlurView tint='light' intensity={100} style={StyleSheet.absoluteFillObject} />
                //     </View>


                // ),


            }}

        >
            <Tab.Screen
                name={TabsName.HOME}
                component={HomeNavigation}
                // options={{
                //     tabBarIcon: ({ focused }) => {
                //         return focused
                //             ?
                //             IconWrap(<HomeIcon fill={Colors.White} />)
                //             :
                //             <HomeIcon fill={Colors.TextBlack} />
                //     }
                // }}
            />
            <Tab.Screen
                name={TabsName.PROFILE}
                component={ProfileNavigation}
                // options={{
                //     tabBarIcon: ({ focused }) => {
                //         return focused
                //             ?
                //             IconWrap(<HeartIcon fill={Colors.White} />)
                //             :
                //             <HeartIcon fill={Colors.TextBlack} />
                //     }
                // }}
            />
            <Tab.Screen
                name={TabsName.SERVICE}
                component={ServiceNavigation}
                // options={{
                //     tabBarIcon: ({ focused }) => {
                //         return focused
                //             ?
                //             IconWrap(<CartIcon fill={Colors.White} />)
                //             :
                //             <CartIcon fill={Colors.TextBlack} />
                //     }
                // }}
            />
        </Tab.Navigator>

        // </SafeAreaView>

    )


}

export default MainApp



