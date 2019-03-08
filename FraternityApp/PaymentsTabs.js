/*
 * PaymentsPageTabs
 * Miller Duke
 */

import React from 'react';
import {Text, View, Button, Image, StyleSheet} from 'react-native';

export default class PaymentsTabs extends React.Component {
	//Tab styles for the tab controller on the bottom
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
		/*
		-In my social club, we use venmo and cashapp to pay for things and goes straight to the club's debit card
		-Stripe was out of date for react-native and had present bugs and foreseeable bugs for the app
		-Cashapp and Venmo are both up and coming secure banking apps to allow for easy payments throughout anywhere in the world
		*/
		return(
			<View style = {styles.container}>
				<View style = {styles.logoContainer}>
					<Text style = {styles.title}>Venmo</Text>
					<Image style = {styles.logo}
						source = {require('./TabImages/Venmo.png')}>
					</Image>
					<Text> @Kappa-Alpha-Psi </Text>
				</View>
				<View style = {styles.logoContainer1}>
					<Text style = {styles.title}>Cash App</Text>
					<Image style = {styles.logo}
						source = {require('./TabImages/CashApp.png')}>
					</Image>
					<Text> $Kappa-Alpha-Psi </Text>
				</View>
				<Text style = {{fontSize: 16, color: '#DC143C'}}> Upcoming Payments</Text>
					<View style={{height: 75, backgroundColor: '#FFFFFF', marginTop: 20, marginLeft: 15, marginRight: 15}}>
						<Text style = {{color: '#DC143C'}}> Regional Dues - $250 - Dec 10, 2018</Text>
						<Text style = {{color: '#DC143C'}}> National Dues - $150 - Dec 31, 2018</Text>
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
	input: {
		height: 50,
		backgroundColor: '#FFFFFF',
		paddingHorizontal: 10,
		marginBottom: 20,
	},
	infoContainer: {
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0,
		height: 250,
		padding: 20,
	},
	logoContainer: {
		alignItems: 'center',
		marginTop: 5,
		//justifyContent: 'center',
		flex: 1,
	},
	logoContainer1: {
		alignItems: 'center',
		marginTop: 5,
		//justifyContent: 'center',
		flex: 1,
	},
	logo: {
		width: 150,
		height: 150,
	},
	title: {
		color: '#000000',
		fontSize: 28,
		textAlign: 'center',
		marginTop: 10,
		fontWeight: 'bold',
	},
	buttonContainer: {
		backgroundColor: '#BF0000',
		paddingVertical: 20,
		width: 100,
		marginLeft: 137,
		borderRadius: 10,
	},
	buttonText: {
		textAlign: 'center',
		color: '#FFFDD0',
		fontWeight: 'bold',
		fontSize: 18,
	}
})