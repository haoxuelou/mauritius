import React, {
    Component
} from 'react';
import {
    AppRegistry,
    DeviceEventEmitter,
    Image,
    Navigator,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    View
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class extends Component {
    render() {
        return (
            <View>
                <View>
                    <Text>
                        您是否曾想过自己能够：{'\n'}
                        不懂外语也轻松玩转毛求？{'\n'}
                        轻松获取有关毛求的简洁、官方、权威信息？{'\n'}
                        有高人指点出国前的准备事项？{'\n'}
                        碰到问题时迅速获得帮助？{'\n'}
                        “毛里求斯旅游小助手”让您梦想成真！
                    </Text>
                </View>
                <View>
                    <Icon name="ios-stopwatch" size={24} color="#666">
                        点击进入
                    </Icon>
                </View>
            </View>
        );
    }
}