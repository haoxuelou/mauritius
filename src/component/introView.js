import React, {
	Component
} from 'react';

import {
	View,
	Text,
	StyleSheet,
	ListView,
} from 'react-native';

import BaseComponent from '../base/baseContainer'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10
	}
});

class IntroView extends BaseComponent {
	constructor(props) {
		super(props);

		let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

		this.state = {
			ds: ds.cloneWithRows([this.props.intro])
		};
	}

	getNavigatorBarProps() {
		return {
			title: this.props.title
		};
	}

	renderBody() {
		return (
			<ListView
				dataSource={this.state.ds}
				renderRow={(rowData)=><Text style={styles.container}>{rowData}</Text>}
			/>
		);
	};
}

export default IntroView;