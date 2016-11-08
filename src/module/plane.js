import React from 'react';

import {
	View,
	Text,
	StyleSheet,
	InteractionManager,
	ListView,
} from 'react-native';

import BaseComponent from '../base/baseContainer';

export default class Plane extends BaseComponent {
	constructor(props) {
	  super(props);

	  this.fetchData = this.fetchData.bind(this);

	  let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	
	  this.state = {
	  	ds
	  };

	  this._data = [];
	}

	getNavigatorBarProps() {
		return {
			hideLeftButton: true,
			title: '出国前准备'
		};
	}

	componentDidMount() {
		InteractionManager.runAfterInteractions(this.fetchData);
	}

	fetchData() {
		this._data = this._data.concat([
			'test',
			'test',
			'test',
			'test',
			'test',
			'test',
			'test',
			'test',
		]);

		this.setState({
			ds: this.state.ds.cloneWithRows(this._data)
		})
	}

	renderBody() {
		return (
			<ListView 
				dataSource={this.state.ds}
				renderRow={(rowData)=><Text>{rowData}</Text>}
			/>
		);
	}
}