/**
 * Created by scj on 2018/9/8.
 */
import {StyleSheet,Dimensions,Platform} from 'react-native';
const {width,height} = Dimensions.get('window');

export const navBarStyle = StyleSheet.create({
    headerContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor:'#F6F6F6'
    },
    backTouchStyle:{
        width: 60,
        height: 44,
        justifyContent: 'center',
        // marginLeft: 8,
    },
    backTextStyle:{
        fontSize: 20,
        color: '#333',
        // marginLeft: scaleSize(15),
    },
    backImgStyle:{
        height: 32,
        resizeMode: 'contain',
        // marginLeft: scaleSize(15),
    },

    titleStyle:{
        fontSize: 18,
        color: '#333',
        fontWeight: "bold"
    },

    rightBaseView:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    rightTouchStyle:{
        paddingTop: 10,
        paddingBottom: 10,
    },
    rightImgStyle:{
        marginLeft: 10,
        width:30,
        height:30,
    },
    rightTextStyle:{
        fontSize: 15,
        color: '#333',//GlobalColor.newMainColor,
        marginLeft: 10,
    }
})