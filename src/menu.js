import React, {
	Component
} from 'react';

import {
	View,
	StyleSheet,
	ListView,
	Text,
} from 'react-native';

var Icon = require('react-native-vector-icons/FontAwesome');
import Button from './button';


export default class extends Component {
	constructor(props) {
		super(props);

		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 != r2
		});

		this.state = {
			dataSource: ds.cloneWithRows([
				'（一）国家概况',
				'（二）入境须知',
				'（三）安全防范',
				'（四）交通出行',
				'（五）物价医疗',
				'（六）实用信息',
				'（七）深度了解',

			]),
		};
	}

	goBack = () => {
		this.props.navigator.jumpBack();
	}

	render() {
		return (
			<ListView dataSource={this.state.dataSource} 
			renderRow={(rowData)=><Text>{rowData}</Text>} />
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});