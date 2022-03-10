import React, { useEffect, useState, FC } from 'react';
import Navigation from './components/navigation'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'

// Prevent AutoHide Globally
// SplashScreen.preventAutoHideAsync()

const Main: FC = () => {
    const [appIsReady, setAppIsReady] = useState(false)
    const [servicesIsReady, setServicesIsReady] = useState(false)
    const [servicesCategoriesIsReady, setServicesCategoriesIsReady] = useState(false)



    // Don't work at current time, reason why - undefined
    // Don't use the Montserrat font at the project now
    // const [fontsLoaded, error] = useFonts({
    //     Montserrat: {
    //         uri: require('./assets/fonts/Montserrat-Black.ttf'),
    //         display: FontDisplay.FALLBACK,
    //     }
    // })

    // Preparing app
    // useEffect(() => {
    //     const prepare = async () => {
    //         try {
    //             // Checking if exist token
    //             // Don't look at this please. Just move on:)
    //             // getValueKey('accessToken').then(async (accessToken) => {
    //             //     if (accessToken) {

    //             //         await dispatch(checkUser()).then(() => {
    //             //             setAppIsReady(true)
    //             //         })

    //             //     } else {
    //                     setAppIsReady(true)
    //             //     }
    //             // })

    //             // getValueKey(SHOW_ONBOARDING).then(value => {

    //             //     if (value) {
    //             //         dispatch(changeOnboardingStatus(false))
    //             //     } else {
    //             //         dispatch(changeOnboardingStatus(true))
    //             //     }
    //             // })
    //         } catch (error) {
    //             console.warn(error)
    //         } finally {
    //             console.log('Some to display')
    //         }


    //         // try {
    //         //     await dispatch(fetchServices())
    //         //     setServicesIsReady(true)

    //         //     await dispatch(fetchServicesCategories())
    //         //     setServicesCategoriesIsReady(true)
    //         // } catch (error) {
    //         //     console.warn(error)
    //         // }
    //     }
    //     prepare()
    // }, [])

    // // Hide SplashScreen when app is loaded
    // useEffect(() => {
    //     let hideSplashScreen = async () => {
    //         if (appIsReady) {
    //             await SplashScreen.hideAsync()
    //         }
    //     }
    //     hideSplashScreen()
    // }, [appIsReady, servicesIsReady, servicesCategoriesIsReady])

    return (
        // <View style={{ flex: 1 }}>
        <>
            <StatusBar style={'dark'} />
            <Navigation />
        </>
        // </View>
    )
}

export default Main
