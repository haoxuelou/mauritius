import React, {
	Component
} from 'react';

import {
	View,
	StyleSheet,
	ListView,
	RefreshControl,
	Text,
} from 'react-native';

var Icon = require('react-native-vector-icons/FontAwesome');
import Button from './button';
import Util from './utils';


export default class extends Component {
	constructor(props) {
		super(props);

		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 != r2
		});

		this._data = [
			'（一）国家概况',
			'（二）入境须知',
			'（三）安全防范',
			'（四）交通出行',
			'（五）物价医疗',
			'（六）实用信息',
			'（七）深度了解',
		];

		this.state = {
			dataSource: ds.cloneWithRows(this._data),
			isRefreshing: false,
			ds
		};
	}

	_onRefresh() {
		this.setState({
			isRefreshing: true
		});

		setTimeout(() => {
			this._data = this._data.concat([
				'（一）国家概况',
				'（二）入境须知',
				'（三）安全防范',
				'（四）交通出行',
				'（五）物价医疗',
				'（六）实用信息',
				'（七）深度了解',
			]);
			this.setState({
				isRefreshing: false,
				dataSource: this.state.ds.cloneWithRows(this._data)
			})
		}, 5000);
	}

	goBack = () => {
		this.props.navigator.jumpBack();
	}

	render() {
		return ( < ListView dataSource = {
				this.state.dataSource
			}
			pageSize = {
				3
			}
			contentContainerStyle = {
				styles.grid
			}
			refreshControl = {
				<RefreshControl
		            refreshing={this.state.isRefreshing}
		            onRefresh={this._onRefresh.bind(this)}
		            tintColor="#ff0000"
		            title="Loading..."
		            titleColor="#00ff00"
		            colors={['#ff0000', '#00ff00', '#0000ff']}
		            progressBackgroundColor="#ffff00"/>
			}
			renderRow = {
				(rowData) => <View style={styles.itemLayout}><Text>{rowData}</Text></View>
			}
			/>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	itemLayout: {
		flex: 1,
		width: Util.size.width / 3,
		height: Util.size.width / 3,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: Util.pixel,
		borderColor: '#eaeaea'
	},
	grid: {
		justifyContent: 'space-around',
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
});