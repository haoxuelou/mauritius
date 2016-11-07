import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Image,
    Navigator,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Button from './component/button';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    entry: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 10,
    },
    info: {
        margin: 10,
        textAlign: 'center',
        lineHeight: 30,
        fontSize: 16
    }
});

export default class Welcome extends Component {
    _jump = () => {
        this.props.navigator.push({
            index: 1,
            title: '首页',
            display: false,
            name: 'MainContainer'
        });
    }
    render() {
        return (
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <View style={styles.container}>
                    <Text style={styles.info}>
                        您是否曾想过自己能够：{'\n'}
                        不懂外语也轻松玩转毛求？{'\n'}
                        轻松获取有关毛求的简洁、官方、权威信息？{'\n'}
                        有高人指点出国前的准备事项？{'\n'}
                        碰到问题时迅速获得帮助？{'\n'}
                        “毛里求斯旅游小助手”让您梦想成真！
                    </Text>
                </View>
                <View style={styles.entry}>
                    <Button text="开始体验" onPress={this._jump}/>
                </View>
            </View>
        );
    }
}