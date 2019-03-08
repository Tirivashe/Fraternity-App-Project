/*
 * EventsPageTabs
 * Miller Duke
 */

import React from 'react';
import {Text, View, Button, Image, StyleSheet} from 'react-native';

export default class EventsTabs extends React.Component {
	static navigationOptions = {
		tabBarLabel: 'Events',
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
			<View style = {styles.container}>
				<Text style = {styles.EventText}>
					Events
				</Text>
				<Text style = {{fontSize: 18, marginLeft: 15, marginTop: 20}}>
					Past Events
				</Text>
					<View style={{height: 75, backgroundColor: '#FFFFFF', marginTop: 20, marginLeft: 15, marginRight: 15}}>
						<Text> Canoeing Prospective - Sept 23, 2018</Text>
						<Text> Hayride - Nov 1, 2018</Text>
					</View>
				<Text style = {{fontSize: 18, marginLeft: 15, marginTop: 20}}>
					Current Events
				</Text>
	        		<View style={{height: 75, backgroundColor: '#FFFFFF', marginTop: 20, marginLeft: 15, marginRight: 15}}>
	        			<Text> Semi-Formal - Dec 4, 2018</Text>

	        		</View>
				<Text style = {{fontSize: 18, marginLeft: 15, marginTop: 20}}>
					Future Events
				</Text>
	        		<View style={{height: 75, backgroundColor: '#FFFFFF', marginTop: 20, marginLeft: 15, marginRight: 15}}>
	        			<Text> Tacky Sweater Prospective - Dec 9, 2018</Text>
	        			<Text> Christmas Party - Dec 12, 2018</Text>
	        		</View>
			</View>
			)
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFDD0',
		flexDirection: 'column',
	},
	EventText: {
		textAlign: 'center',
		color: '#DC143C',
		fontWeight: 'bold',
		fontSize: 18,
	},
})