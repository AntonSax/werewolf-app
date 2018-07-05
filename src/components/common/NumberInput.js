import React from 'react';
import { Text, TextInput, View } from 'react-native';

const NumberInput = ({ label, onChangeText, placeholder, secureTextEntry, value }) => {
	const { containerStyle, inputStyle, labelStyle } = styles;

	return (
		<View style={containerStyle}>
			<TextInput
				autoCorrect={false}
				onChangeText={onChangeText}
				placeholder={placeholder}
				secureTextEntry={secureTextEntry}
				style={inputStyle}
				value={value}
			/>
		</View>
	);
};

const styles = {
	inputStyle: {
		color: '#000000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 30,
		lineHeight: 40,
		flex: 1,
	},
	containerStyle: {
		height: 40,
		flexDirection: 'row',
		alignItems: 'center',
	}
};

export { NumberInput };