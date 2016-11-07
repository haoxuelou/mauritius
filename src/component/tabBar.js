/**
 * Created by lipeiwei on 16/10/2.
 * 自定义tabbar
 */

import React, {
  Component
} from 'react';

import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';

import IconFa from 'react-native-vector-icons/FontAwesome'

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: "#DADADA"
  },
  touchableContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50
  }
});

export default class TabBar extends Component {
  static propTypes = {
    tabBarResources: React.PropTypes.array.isRequired, //图片资源二维数组
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array
  };

  constructor(props) {
    super(props);
    if (props.tabBarResources.length !== props.tabs.length) {
      console.warn('ScrollableTabView TabBar config error, please check');
    }
  }

  render() {
    const {
      tabBarResources,
      activeTab,
      tabs,
      goToPage
    } = this.props;
    return (
      <View style={styles.container}>
        {
          tabs.map((tab, index) => {
            return (
              <TouchableOpacity style={styles.touchableContainer} key={index} onPress={() => {goToPage(index)}} activeOpacity={1}>
                <IconFa name={tabBarResources[index][0]} size={30} color={activeTab === index?'#3b5998':'#000000'}></IconFa>
                <Text style={[{fontSize:10}, (activeTab === index) && {color:'#3b5998'}]}>{tabBarResources[index][1]}</Text>
              </TouchableOpacity>
              
            );
          })
        }
      </View>
    );
  }

};