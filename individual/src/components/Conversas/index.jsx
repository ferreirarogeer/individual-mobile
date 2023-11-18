import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Entypo, MaterialCommunityIcons, Ionicons, MaterialIcons } from '@expo/vector-icons';


const Conversas = () => {
  const navigation = useNavigation();

  const data = [
    { id: '1', name: 'Silvio', lastMessage: 'Oi, como você está?', photo: require('../../../assets/silvio.jpg') },
    { id: '2', name: 'Toni Ramos', lastMessage: 'Vamos marcar algo para o fim de semana?', photo: require('../../../assets/toni.jpeg') },
    { id: '3', name: 'Flávio Augusto', lastMessage: 'Quando irá lançar o livro?!', photo: require('../../../assets/flavio.jpg') },
    // Adicione mais dados de conversas conforme necessário
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.chatItem}
      onPress={() => navigation.navigate('InputScreen', { chatId: item.id, chatName: item.name })}
    >
      <Image source={item.photo} style={styles.chatPhoto} />
      <View style={styles.chatDetails}>
        <Text style={styles.chatName}>{item.name}</Text>
        <Text style={styles.lastMessage}>{item.lastMessage}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.whatsappContainer}>
        <Text style={styles.whatsapp}>Whatsapp</Text>
        <Entypo style={styles.lupa} name="magnifying-glass" />
        <MaterialCommunityIcons style={styles.pontos} name="dots-vertical" />
      </View>

      <View style={styles.tabBar}>
        <TouchableOpacity onPress={() => navigation.navigate('ConversasScreen')}>
          <Ionicons style={styles.tabCamera} name="camera" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ConversasScreen')}>
          <Text style={styles.tabConversas}>Conversas</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('StatusScreen')}>
          <Text style={styles.tabStatus}>Status</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ChamadasScreen')}>
          <Text style={styles.tabChamadas}>Chamadas</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={styles.chatList}
      />

      {/* Botão Flutuante */}
      <TouchableOpacity style={styles.floatingButton}>
        <View style={styles.floatingButtonInner}>
          <MaterialIcons style={styles.cruz} name="add-box" />
        </View>
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
  chatList: {
    width: '100%',
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  chatPhoto: {
    width: 35,
    height: 35,
    borderRadius: 25,
    marginRight: 16,
  },
  chatDetails: {
    flex: 1,
  },
  chatName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  lastMessage: {
    color: '#888',
    fontSize: 12,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#075C55',
    color: 'white',
    padding: 10,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },

  tabCamera: {
    fontSize: 20,
    color: "#82B3AF",
  },

  tabConversas: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    paddingBottom: 11,
    marginBottom: -10,
    paddingHorizontal: 10,
  },

  tabStatus: {
    fontSize: 16,
    color: '#82B3AF',
  },

  tabChamadas: {
    fontSize: 16,
    color: '#82B3AF',
  },

  whatsappContainer: {
    alignSelf: 'flex-start',
    padding: 20,
    paddingRight: 190,
    backgroundColor: '#075C55',
  },
  whatsapp: {
    fontSize: 20,
    color: 'white',
  },
  lupa: {
    fontSize:  18,
    color: 'white',
    alignSelf: 'flex start',
    right: 45,
    position: 'absolute',
  },
  pontos: {
    fontSize:  18,
    color: 'white',
    alignSelf: 'flex start',
    right: 20,
    position: 'absolute',
  },

  // Estilos para o botão flutuante
  floatingButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: '#075C55',
    borderRadius: 15,
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  floatingButtonInner: {
    width: 30,
    height: 30,
    borderRadius: 5,
    // backgroundColor: '#128C7E',
    justifyContent: 'center',
  },

  cruz: {
    fontSize: 24,
    fontWeight: 'bold',
    // justifyContent: 'center' ,
    margin: 3,
    color: "#ffffff",

  },



});

export default Conversas;
