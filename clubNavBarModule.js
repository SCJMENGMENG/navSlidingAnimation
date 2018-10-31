import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Dimensions,
    Platform,
    FlatList,
    Animated,
} from 'react-native';
import {navBarStyle} from "./NavBar.style";

const {width, height} = Dimensions.get('window');

const _isIPhoneXTop = () => {
    return (
        Platform.OS === 'ios' && height > 800
    )
}

const _navBtnModule = (img,leftBool,action) => {

        return(
            <TouchableOpacity
                activeOpacity={1}
                onPress={action}
                style={[{
                    width: 30,
                    height: 42,
                    justifyContent: 'center',
                    alignItems: leftBool ? 'flex-start' : 'flex-end'
                }]}
            >
                <Image
                    style={[{
                        height: 32,
                        resizeMode: 'contain',
                    }]}
                    source={img}
                />
            </TouchableOpacity>
        )
}

const _navBarModule = (that) => {

        return (
            <View style={{
                flexDirection: 'row',
                width: width,
                height: _isIPhoneXTop() ? 88 : 64,
                paddingTop: _isIPhoneXTop() ? 44 : 24,
                alignItems: 'center',
                justifyContent: 'space-between',
                position: 'absolute',
                zIndex: 9999,
                paddingLeft: 15,
                paddingRight: 15,
            }}>
                {_navBtnModule(require('./images/backImg.png'),true,() => {
                    // that.props.navigation.goBack()
                    alert(111)
                })}
                {_navBtnModule(require('./images/slices_white.png'),false,() => {
                    alert(111)
                })}
            </View>
        )
}

const _renderNavBarModule = (that) => {

    let scrollY = that.state.scrollY;

    return (
        <Animated.View style={{
            flexDirection: 'row',
            paddingTop: _isIPhoneXTop() ? 44 : 24,
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomWidth: 1,
            borderBottomColor: '#F6F6F6',
            position: 'absolute',
            zIndex: 9999,
            paddingLeft: 15,
            paddingRight: 15,
            top: 0,
            width: width,
            height: _isIPhoneXTop() ? 88 : 64,
            backgroundColor: 'white',
            opacity: scrollY.interpolate({
                inputRange: [-255, 0, 255 - 30, 255],
                outputRange: [0, 0, 1, 1]
            })
        }}>
            {_navBtnModule(require('./images/back.png'),true,() => {
                // that.props.navigation.goBack()
                alert(111)
            })}
            <Text style={navBarStyle.titleStyle}>俱乐部名称</Text>
            {_navBtnModule(require('./images/slices_black.png'),false,() => {alert(111)})}
        </Animated.View>
    )
}

const _renderHeaderParallaxImage = (that) => {

    let scrollY = that.state.scrollY;

    let IMAGE_URL = 'http://www.sebio.net.cn/cfiles/images/ssdff.jpg'


    return (
        <Animated.Image
            pointerEvents='none'
            style={[{width: width, position: 'absolute', zIndex: 0}, {
                height: _isIPhoneXTop() ? 210 : 187,
                transform: [{
                    translateY: scrollY.interpolate({
                        inputRange: [(_isIPhoneXTop() ? -210 : -186), 0, (_isIPhoneXTop() ? 210 : 186)],
                        outputRange: [(_isIPhoneXTop() ? 210 / 2 : 186 / 2), 0, (_isIPhoneXTop() ? -210 / 3 : -186 / 3)],
                    })
                }, {
                    scale: scrollY.interpolate({
                        inputRange: [(_isIPhoneXTop() ? -210 : -186), 0, (_isIPhoneXTop() ? 210 : 186)],
                        outputRange: [2, 1, 1],
                    })
                }]
            }]}
            source={{uri: IMAGE_URL}}
        />
    )
}

class renderNavBarModule extends Component{

    constructor(props) {
        super(props);
        this.state = {
            scrollY: new Animated.Value(0),
        }
    }

    render() {
        return(
            <View style={{flex: 1, backgroundColor: '#EDEDED', paddingBottom: _isIPhoneXTop() ? 34 : 0}}>
                {_navBarModule(this)}
                {_renderNavBarModule(this)}
                {_renderHeaderParallaxImage(this)}
                <FlatList
                    ListHeaderComponent={this.props._header}
                    renderItem={this.props._renderItem}
                    data={[1, 2, 3, 4, 5]}
                    keyExtractor={this._keyExtractor}
                    extraData={this.state}
                    showsVerticalScrollIndicator={false}
                    onScroll={Animated.event([{nativeEvent: {contentOffset: {y: this.state.scrollY}}}])}
                />
            </View>
        )
    }

    _keyExtractor = (item, index) => index.toString();
}

export default renderNavBarModule