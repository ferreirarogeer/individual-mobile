import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Alert, StyleSheet, Text, FlatList, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {  useNavigation } from '@react-navigation/native';

const TelaConversa = () => {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);
  const navigation = useNavigation();

  const handleSend = () => {
    if (inputValue.trim() === '') {
      Alert.alert('Erro', 'Digite uma mensagem antes de enviar.');
      return;
    }

    const newMessage = {
      id: messages.length + 1,
      text: inputValue,
    };

    setMessages([...messages, newMessage]);
    setInputValue('');
  };

  const renderMessage = ({ item }) => (
    <View style={styles.messageContainer}>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={require('../../../assets/silvio.jpg')} 
          style={styles.avatar}
        />
      <TouchableOpacity>
        <MaterialCommunityIcons style={styles.pontos} name="dots-vertical" />
        </TouchableOpacity>
        <Text style={styles.contactName}>Silvio</Text>
      </View>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMessage}
        style={styles.messageList}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite sua mensagem"
          onChangeText={(text) => setInputValue(text)}
          value={inputValue}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#0a796f',
    paddingBottom: 14,
    marginBottom: -15,
    paddingHorizontal: 15,
  },
  avatar: {
    display: 'flex',
    marginTop: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 15,
    marginLeft: 30,
    paddingBottom: 14,
    marginBottom: -7,
    paddingHorizontal: 15,
  },
  contactName: {
    display: 'flex',
    marginTop: 15,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  messageList: {
    flex: 1,
    padding: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: 'white',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginRight: 8,
  },
  sendButton: {
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 4,
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  messageContainer: {
    backgroundColor: '#e6e6e6',
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
    maxWidth: '80%',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
  },
  pontos: {
    fontSize:  25,
    color: 'white',
    right: -285,
    marginTop: 1,
    position: 'absolute',

  }
});

export default TelaConversa;
