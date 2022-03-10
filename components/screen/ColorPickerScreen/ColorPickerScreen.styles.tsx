import { StyleSheet } from "react-native";
import { BACKGROUND_COLOR, WIDTH } from "../../../constants/constants";

export default StyleSheet.create({
    wrapper: {
        
    },
    topContainer: {
        flex: 3,
        backgroundColor: BACKGROUND_COLOR,
        justifyContent: 'center',
        alignItems:'center',
    },

    buttomContainer: {
        flex: 1,
        backgroundColor: BACKGROUND_COLOR,
        justifyContent: 'center',
        alignItems:'center',
    },
    linearGradientCore: {
        height: 50,
        width: WIDTH * 0.9,
        borderRadius: 25
    },
    circle: {
        width: WIDTH * 0.8,
        height: WIDTH * 0.8,
        borderRadius: (WIDTH * 0.8) / 2,
    }
})