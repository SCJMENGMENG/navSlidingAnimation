import React, {Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Dimensions,
    Platform,
    FlatList,
    Animated,
} from 'react-native'

import ClubNavBarModule from './clubNavBarModule';
const {width, height} = Dimensions.get('window');

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            scrollY: new Animated.Value(0),
        }
    }

    isIPhoneXTop() {
        return (
            Platform.OS === 'ios' && height > 800
        )
    }

    render() {

        // alert(width + '-' + height);
        return (
            <ClubNavBarModule
                navigation={this.props.navigation}
                _header={this._header.bind(this)}
                _renderItem={this._renderItem.bind(this)}
            />
        )
    }

    _header() {
        return (
            <View style={{alignItems: 'center'}}>
                <View style={{
                    width: width - 16,
                    marginTop: this.isIPhoneXTop() ? 105 : 81,
                }}>
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            marginLeft: 20,
                            zIndex: 1
                        }}
                        onPress={() => {
                            alert(111)
                        }}
                    >
                        <Image
                            style={{
                                width: 54,
                                height: 54,
                                borderRadius: 27,
                                borderWidth: 3,
                                borderColor: 'white',
                            }}
                            source={{uri: 'http://img.25pp.com/uploadfile/soft/images/2014/0721/20140721040104673.jpg'}}
                        />
                    </TouchableOpacity>
                    <View style={{
                        marginTop: 30,
                        borderRadius: 8,
                        backgroundColor: '#FFFFFF',
                        width: width - 16,
                    }}>
                        <Text style={{
                            fontWeight: 'bold',
                            paddingLeft: 12,
                            fontSize: 15,
                            marginTop: 42,
                        }}>俱乐部名</Text>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            paddingLeft: 12,
                            paddingRight: 12
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                                {this._headLittleImg(0,4,'http://img.zcool.cn/community/01c14859ec5c4ea801216a4b28497c.jpg@3000w_1l_2o_100sh.jpg')}
                                {this._headLittleImg(width * 0.036,3,'http://i2.hdslb.com/bfs/archive/739e282a4db2ad41aaaaa20ca95cfe1ab293fe86.jpg')}
                                {this._headLittleImg(width * 0.072,2,'http://img.zcool.cn/community/014801574e37e46ac72525aeafcba7.jpg@3000w_1l_2o_100sh.jpg')}
                                {this._headLittleImg(width * 0.108,1,'http://i2.hdslb.com/bfs/archive/739e282a4db2ad41aaaaa20ca95cfe1ab293fe86.jpg')}
                                <TouchableOpacity
                                    onPress={() => {
                                        alert(111)
                                    }}
                                >
                                    <Image
                                        style={{width: 40, height: 15, marginLeft: 77}}
                                        resizeMode={'contain'}
                                        source={require('./images/Invitation.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity
                                onPress={() => {
                                    alert(111)
                                }}
                            >
                                <Image
                                    style={{
                                        width: width * 0.224
                                    }}
                                    resizeMode={'contain'}
                                    source={require('./images/addClub.png')}
                                />
                            </TouchableOpacity>
                        </View>
                        <Text style={{
                            color: '#999999',
                            fontSize: 10,
                            fontWeight: 'bold',
                            paddingLeft: 12,
                            paddingRight: 12
                        }}>1999个成员</Text>
                        <TouchableOpacity style={{
                            marginTop: 14,
                            borderTopColor: '#EDEDED',
                            borderTopWidth: 1,
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            paddingLeft: 18,
                            paddingRight: 10,
                            paddingTop: 14,
                            paddingBottom: 14,
                        }}>
                            <Text style={{
                                color: '#333333',
                                fontSize: 12,
                                fontWeight: 'bold',
                            }}>公告</Text>
                            <Text style={{
                                fontWeight: 'normal',
                                fontSize: 12,
                                width: width * 5 / 7,
                                marginLeft:10,
                            }}
                                  numberOfLines={3}
                            >10月30日，活动全面开展！10月30！10月30日，活动全面开展！10月30！</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{
                    marginTop: 10,//94,
                    height: 214 - 60,
                    borderRadius: 8,
                    justifyContent: 'space-between',
                    backgroundColor: '#FFFFFF',
                    width: width - 16,
                }}>
                    <Text style={{
                        marginTop: 15,
                        paddingLeft: 12,
                        color: '#333333',
                        fontSize: 12,
                        fontWeight: 'bold',
                    }}>最新活动</Text>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        paddingLeft: 12,
                        paddingRight: 24,
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <View style={{justifyContent:'flex-end',alignItems:'center'}}>
                                <Image
                                    style={{width: width * 0.144, height: width * 0.144}}
                                    source={{uri: 'http://pic34.nipic.com/20131019/2531170_123416421000_2.jpg'}}
                                />
                                <View style={{position:'absolute',backgroundColor:'rgba(0,0,0,0.3)'}}>
                                    <Text style={{
                                        color:'white',
                                        fontSize:10,
                                        width:width *0.144,
                                        textAlign:'center',
                                        padding: 3,
                                    }}>招募中</Text>
                                </View>
                            </View>
                            <View style={{marginLeft: 7}}>
                                <Text style={{color: '#333333', fontSize: 13, fontWeight: 'bold'}}>北京到新疆七天自驾哦行</Text>
                                <Text style={{
                                    color: '#999999',
                                    fontSize: 13,
                                    marginTop: 6,
                                    marginBottom: 6,
                                    fontWeight: 'bold'
                                }}>2018.09.23-2018.09.29</Text>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    width: width *0.856 - 56,
                                }}>
                                    <Text style={{color: '#26D0CA', fontSize: 13, fontWeight: 'bold'}}>￥<Text style={{fontSize:16}}>690</Text>/人</Text>
                                    <Text
                                        style={{color: '#EE8B6A', fontSize: 13}}>剩余名额：4车/20人</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        borderTopColor: '#F6F6F6',
                        borderTopWidth: 1,
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingLeft: 12,
                        paddingRight: 12,
                    }}>
                        <TouchableOpacity
                            style={{paddingTop:17,paddingBottom:17}}
                            onPress={() =>{alert(111)}}
                        >
                            <Text style={{color: '#999999', fontWeight: 'bold', fontSize: 12}}>更多活动招募中</Text>
                        </TouchableOpacity><TouchableOpacity
                        style={{paddingTop:17,paddingBottom:17}}
                        onPress={() =>{alert(111)}}
                    >
                        <Text style={{color: '#999999', fontWeight: 'bold', fontSize: 12}}>活动进行中</Text>
                    </TouchableOpacity><TouchableOpacity
                        style={{paddingTop:17,paddingBottom:17}}
                        onPress={() =>{alert(111)}}
                    >
                        <Text style={{color: '#999999', fontWeight: 'bold', fontSize: 12}}>历史活动</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    _renderItem({item, index}) {
        return (
            <TouchableOpacity style={{
                borderRadius: 8,
                backgroundColor: 'white',
                padding: 15,
                marginTop: 10,
                marginLeft: 8,
                width: width - 16,
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Image
                            style={{width: 38, height: 38, marginRight: 10}}
                            source={{uri: 'http://img.zcool.cn/community/043a69565d14730000014a6c521fe6.jpg'}}
                        />
                        <View>
                            <Text
                                style={{fontSize: 15, color: '#333333', fontWeight: 'bold', marginBottom: 5}}>林克</Text>
                            <Text style={{fontSize: 12, color: '#999999'}}>10 月 20 日</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={{padding:5}}
                        onPress={() =>{alert('设置')}}
                    >
                        <Text style={{color:'#333',fontSize:12}}>设置</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{fontSize: 12, color: '#333', marginTop: 10, marginBottom: 10}}>蓝蓝的天空？来自青海湖的邀请</Text>
                <TouchableOpacity
                    style={{width: 232, height: 309}}
                >
                    <Image
                        style={{width: 232, height: 309, borderRadius: 4}}
                        source={{uri: 'http://img.zcool.cn/community/012596564984e332f87512f6255090.jpg@900w_1l_2o_100sh.jpg'}}
                    />
                </TouchableOpacity>
                <Text style={{fontSize: 12, color: '#999', marginTop: 10, marginBottom: 10}}>666 次观看</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: width * 3 / 5}}>
                    <TouchableOpacity
                        style={{flexDirection: 'row', alignItems: 'center'}}
                    >
                        <Image
                            style={{width: 13, height: 13}}
                            source={require('./images/Forward.png')}
                        />
                        <Text style={{fontSize: 12, color: '#999', fontWeight: 'bold', marginLeft: 10}}>分享</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{flexDirection: 'row', alignItems: 'center'}}
                    >
                        <Image
                            style={{width: 18, height: 18}}
                            source={require('./images/comment.png')}
                        />
                        <Text style={{fontSize: 12, color: '#999', fontWeight: 'bold', marginLeft: 10}}>评论</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{flexDirection: 'row', alignItems: 'center'}}
                    >
                        <Image
                            style={{width: 18, height: 18}}
                            source={require('./images/enjoy.png')}
                        />
                        <Text style={{fontSize: 12, color: '#999', fontWeight: 'bold', marginLeft: 10}}>点赞</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        )
    }

    _headLittleImg(magLeft,zIn,img) {
        return(
            <Image
                style={{
                    position: 'absolute',
                    width: width * 0.048,
                    height: width * 0.048,
                    borderRadius: width * 0.024,
                    borderWidth: 1,
                    borderColor: 'white',
                    marginLeft: magLeft,
                    zIndex: zIn
                }}
                source={{uri: img}}
            />
        )
    }
}

export default App