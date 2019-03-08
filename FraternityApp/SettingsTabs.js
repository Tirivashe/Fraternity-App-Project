/*
 * SettingsPageTabs
 * Miller Duke
 */

import React from 'react';
import {Text, View, Button, Image, StyleSheet, Switch} from 'react-native';

export default class SettingsTabs extends React.Component {
	static navigationOptions = {
		tabBarLabel: 'Settings',
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
	state = {
		toggled: true,
		toggled1: true,
		toggled2: true,
	};

	_handleToggleSwitch = () => this.setState(state => ({
		toggled: !state.toggled
	}));

	_handleToggleSwitch1 = () => this.setState(state => ({
		toggled1: !state.toggled1
	}));

	_handleToggleSwitch2 = () => this.setState(state => ({
		toggled2: !state.toggled2
	}));
	render(){
		return(
			<View style = {styles.accountContainer}>
				<View style = {styles.accountInfoContainer}>
					<Text style = {{fontSize: 30}}>
						Account Information
						</Text>
					<Text style = {styles.title}>Username</Text>
					<View style = {styles.logoContainer}>
						<Image style = {styles.logo}
							source = {require('./TabImages/UndefinedProfile.png')}>
						</Image>
					</View>
				</View>
				<View style = { styles.notificationContainer }>
					<Text style = {{fontSize: 30}}>
						Notifications
					</Text>
						<Text style = {styles.title}>
							Upcoming Events{"\n"}
						</Text>
						<Switch 
						  onValueChange={this._handleToggleSwitch} 
						  value={ this.state.toggled } 
						/>
							<Text style = {styles.title}>
								Payments{"\n"}
							</Text>
							<Switch 
							  onValueChange={this._handleToggleSwitch1} 
							  value={ this.state.toggled1 } 
							/>
								<Text style = {styles.title}>
									Vibration
								</Text>
								<Switch 
								  onValueChange={this._handleToggleSwitch2} 
								  value={ this.state.toggled2 } 
								/>
				</View>
			</View>
			)
	}
}

const styles = StyleSheet.create({
	accountContainer:{
		flex: 1,
		backgroundColor: '#FFFDD0',
	},
	accountInfoContainer:{
		flex: 1,
		padding: 20,
	},
	notificationContainer:{
		flex: 1,
		padding: 10,
	},
	logo: {
		height: 150,
		width: 150,
	},
	title: {
		marginLeft: 5,
		marginTop: 5,
		fontSize: 18,
		fontWeight: 'bold',
	},
	logoContainer: {
		alignItems: 'center',
		marginTop: 30,
		//justifyContent: 'center',
		flex: 1,
	}
})