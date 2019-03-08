/*
 * PaymentsPageTabs
 * Miller Duke
 */

import React from 'react';
import {Text, View, Button, Image, StyleSheet} from 'react-native';

export default class PaymentsTabs extends React.Component {
	static navigationOptions = {
		tabBarLabel: 'Payments',
		tabBarOptions: {
			labelStyle: {
				fontSize: 12,
				padding: 14,
			},
			inactiveBackgroundColor: 'lightgray',
			activeBackgroundColor: '#DC143C',
			activeTintColor: '#FFFDD0',
			inactiveTintColor: '#DC143C',
			alignItems: 'center',
			justifyContent: 'center',
		},
	}
	render(){
		return(
			<View>
				<Text style = {{fontSize: 30}}>
					Payments
				</Text>
			</View>
			)
	}
}

