// InputScreen.js
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Alert, StyleSheet, Text } from 'react-native';

const InputScreen = () => {
  const [inputValue, setInputValue] = useState('');
  const [displayedValue, setDisplayedValue] = useState('');

  const handleButtonPress = () => {
    Alert.alert('Conteúdo do Input', inputValue);
    setDisplayedValue(inputValue); // Atualiza o conteúdo exibido
    setInputValue(''); // Limpa o espaço onde se escreve algo
  };

  return (
    <View style={styles.container}>
      <Text>Tela de Input</Text>
      <Text style={styles.displayedText}>{displayedValue}</Text>
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
  displayedText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default InputScreen;
