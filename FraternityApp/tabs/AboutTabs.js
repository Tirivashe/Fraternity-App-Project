/*
 * AboutTabs
 * Miller Duke
 */

import React from 'react';
import {Text, View, Button, Image, StyleSheet, FlatList} from 'react-native';

export default class AboutTabs extends React.Component {
	static navigationOptions = {
		tabBarLabel: 'About',
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
					<View style = {styles.logoContainer}>
						<Text style = {styles.titleContainer}>
							About Kappa Alpha Psi
						</Text>
							<Image style = {styles.logo}
								source = {require('./TabImages/KAPLogo.png')}>
							</Image>
					</View>
				<View style = {styles.infoContainer}>
					        <FlatList
					          data={[
					            {key: 'Year Founded/Location: January 5, 1911, Bloomington, Indiana, USA'},
					            {key: 'Motto: "Achievement in Every Field of Human Endeavor"'},
					            {key: 'Colors: Crimson and Cream'},
					            {key: 'Flower: Red Carnation'},
					            {key: 'Symbol: Diamond'},
					            {key: 'Chapters: 721'},
					            {key: 'Nicknames: Kappas, Nupes, Pretty Boys'}
					          ]}
					          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
					        />
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
	titleContainer: {
		marginBottom: 15,
		fontSize: 30,
		textAlign: 'center',
		color: '#DC143C',
	},
	infoContainer: {
		marginTop: 10,
		bottom: 0,
		height: 340,
		padding: 10,
		color: '#DC143C',
	},
	logoContainer: {
		alignItems: 'center',
		marginTop: 10,
		//justifyContent: 'center',
		flex: 1,
	},
	logo: {
		width: 250,
		height: 200,
	},
	title: {
		color: '#BF0000',
		fontSize: 28,
		textAlign: 'center',
		marginTop: 10,
		fontWeight: 'bold',
	},
	item: {
		padding: 5,
	    fontSize: 14,
	    justifyContent: 'center',
	    alignItems: 'center',
	    color: '#DC143C',
	}
})