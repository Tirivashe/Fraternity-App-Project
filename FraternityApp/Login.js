/*
 *Login Page of Fraternity App
*/
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, StatusBar, TextInput, SafeAreView, Keyboard, TouchableOpacity, KeyboardAvoidingView} from 'react-native';

export default class Login extends Component{
	render() {
		return(
		<KeyboardAvoidingView behavior = 'padding' style = {styles.container}>
			<TouchableWithoutFeedback style = {styles.container} onPress = {Keyboard.dismiss}>
				<View style = {styles.container}>
					<View style = {styles.logoContainer}>
						<Image style = {styles.logo}
							source = {require('./images/KAPLogo.png')}>
							//Image Citation: https://en.wikipedia.org/wiki/Kappa_Alpha_Psi
						</Image>
						<Text style = {styles.title}>Kappa Alpha Psi</Text>
					</View>
					<View style = {styles.infoContainer}>
						<TextInput style = {styles.input}
							placeholder = 'Username'
							placeholderTextColor = '#BD0000'
							placeholderFontWeight = 'bold'
							autoCorrect = {false}
							onSubmitEditing={()=> this.refs.txtPassword.focus()}
						/>
						<TextInput style = {styles.input}
							placeholder = 'Password'
							placeholderTextColor = '#BD0000'
							placeholderFontWeight = 'bold'
							secureTextEntry
							autoCorrect = {false}
							ref = {'txtPassword'}
						/>
						<TouchableOpacity style={styles.buttonContainer}>
							<Text style = {styles.buttonText}> Sign In </Text>
						</TouchableOpacity>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
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
		marginTop: 30,
		//justifyContent: 'center',
		flex: 1,
	},
	logo: {
		width: 410,
		height: 330,
	},
	title: {
		color: '#BF0000',
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