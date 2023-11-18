// InputScreen.js
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Alert, StyleSheet, Text } from 'react-native';

const InputScreen = () => {
  const [inputValue, setInputValue] = useState('');

  const handleButtonPress = () => {
    Alert.alert('Conteúdo do Input', inputValue);
  };

  return (
    <View style={styles.container}>
      <Text>Tela de Input</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite algo"
        onChangeText={(text) => setInputValue(text)}
        value={inputValue}
      />
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text>Exibir Conteúdo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    width: '80%',
  },
  button: {
    padding: 10,
    backgroundColor: 'lightblue',
  },
});

export default InputScreen;
