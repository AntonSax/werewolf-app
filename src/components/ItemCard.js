import React from 'react';
import { View } from 'react-native';

const ItemCard = (props) => {
	return (
		<View style={styles.containerStyle}>
			{props.children}
		</View>
	);
};

const styles = {
	containerStyle: {
		borderBottomWidth: 1,
		padding: 5,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderColor: "#DDDDDD",
		position: 'relative',
	}
};

export default ItemCard;