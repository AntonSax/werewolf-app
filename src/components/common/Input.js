import React from 'react';
import { Text, TextInput, View } from 'react-native';

const Input = ({ label, onChangeText, placeholder, secureTextEntry, value }) => {
	const { containerStyle, inputStyle, labelStyle } = styles;

	return (
		<View style={containerStyle}>
			<Text style={labelStyle}>
				{label}
			</Text>
			<TextInput
				autoCorrect={false}
				onChangeText={onChangeText}
				placeholder={placeholder}
				secureTextEntry={secureTextEntry}
				style={inputStyle}
				value={value}
				underlineColorAndroid='transparent'
			/>
		</View>
	);
};

const styles = {
	inputStyle: {
		color: '#000000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 2
	},
	labelStyle: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 1
	},
	containerStyle: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	}
};

export { Input };