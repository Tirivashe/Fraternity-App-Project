/*
 * ProfileTabs
 * Miller Duke
 //Image Citation: https://sites.google.com/site/outpostcharming/the-team
 */

import React from 'react';
import {Text, View, Button, ImageBackground,Image,StyleSheet, FlatList} from 'react-native';

export default class ProfileTabs extends React.Component {
	static navigationOptions = {
		tabBarLabel: 'Profile',
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
		}
	}
	render(){
		return(
			<View style = {styles.container}>
					<View style = {styles.logoContainer}>
						<Image style = {styles.logo}
							source = {require('./TabImages/UndefinedProfile.png')}>
						</Image>
						<Text style = {styles.title}>Johnny Appleseed</Text>
					</View>
						<View style = {styles.infoContainer}>
					        <FlatList
					          data={[
					            {key: 'Activity: Inactive'},
					            {key: 'Birthday: January 1, 1996'},
					            {key: 'Hometown: Asheville, NC'},
					            {key: 'Major: Mathematics'},
					            {key: 'Semester Initiated: Fall 2016'},
					            {key: 'Office: None'},
					          ]}
					          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
					        />				
						</View>
			</View>
			);
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
		height: 200,
		padding: 20,
		alignItems: 'center',
		justifyContent: 'center',
	},
	logoContainer: {
		alignItems: 'center',
		marginTop: 30,
		//justifyContent: 'center',
		flex: 1,
	},
	logo: {
		width: 410,
		height: 330,
	},
	title: {
		color: '#DC143C',
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
		color: '#DC143C',
		fontWeight: 'bold',
		fontSize: 18,
	},
	item: {
		padding: 10,
	    fontSize: 18,
	    height: 44,
	    justifyContent: 'center',
	    alignItems: 'center',
	}
})