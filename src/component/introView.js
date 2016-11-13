import React, {
	Component
} from 'react';

import {
	View,
	Text,
	StyleSheet,
} from 'react-native';

import BaseComponent from '../base/baseContainer'
import WebViewPage from './webViewPage';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		lineHeight: 21,
	}
});

class IntroView extends BaseComponent {
	constructor(props) {
		super(props);
	}

	getNavigatorBarProps() {
		return {
			title: this.props.title
		};
	}

	renderBody() {
		return (
			<WebViewPage uri={this.props.intro}/>
		);
	};
}

export default IntroView; 