import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {

	const [counter, setCounter] = useState(0); 
	
	return (
		<View style={{
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			margin: 5
		}}>
			<Button
				title="Increase"
				onPress={() => {
					setCounter(counter + 1);
				}}
			/>
			<Button
				title="Decrease"
				onPress={() => {
					setCounter(counter - 1);
				}}
			/>
			<Text style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				fontWeight: 'bold',
				marginTop: 15
			}}>Current Count: {counter} </Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default CounterScreen; 
