import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Entypo, MaterialCommunityIcons, Ionicons, MaterialIcons } from '@expo/vector-icons';



const Conversas = () => {
  const navigation = useNavigation();

  const data = [
    { id: '1', name: 'Silvio', lastMessage: 'Oi, como você está? Vamos nos ver!', photo: require('../../../assets/silvio.jpg') },
    { id: '2', name: 'Toni Ramos', lastMessage: 'Vamos marcar algo para o fim de semana?', photo: require('../../../assets/toni.jpeg') },
    { id: '3', name: 'Flávio Augusto', lastMessage: 'Quando irá lançar o livro?!', photo: require('../../../assets/flavio.jpg') },
    // Adicione mais dados de conversas conforme necessário
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.chatItem}
      onPress={() => navigation.navigate('TelaConversa', { chatId: item.id, chatName: item.name })}
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
        <TouchableOpacity>
        <Entypo style={styles.lupa} name="magnifying-glass" />
        </TouchableOpacity>
        <TouchableOpacity>
        <MaterialCommunityIcons style={styles.pontos} name="dots-vertical" />
        </TouchableOpacity>
      </View>

      <View style={styles.tabBar}>
        <TouchableOpacity onPress={() => navigation.navigate('CameraScreen')}>
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
      <TouchableOpacity style={styles.botaoFlutuante}>
        <View style={styles.botaoFlutuanteDentro}>
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
    width: 45,
    height: 45,
    borderRadius: 25,
    marginRight: 16,
  },
  chatDetails: {
    flex: 1,
  },
  chatName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  lastMessage: {
    color: '#888',
    fontSize: 15,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#0a796f',
    color: 'white',
    padding: 10,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },

  tabCamera: {
    fontSize: 24,
    color: "#82B3AF",
  },

  tabConversas: {
    fontSize: 20,
    // fontWeight: 'bold',
    color: '#ffffff',
    borderBottomWidth: 3,
    borderBottomColor: 'white',
    paddingBottom: 14,
    marginBottom: -15,
    paddingHorizontal: 15,
  },

  tabStatus: {
    fontSize: 20,
    color: '#82B3AF',
  },

  tabChamadas: {
    fontSize: 20,
    color: '#82B3AF',
  },

  whatsappContainer: {
    // alignSelf: 'flex-start',
    padding: 30,
    width: '100%',
    
    // paddingEnd: 350,
    backgroundColor: '#0a796f',
  },
  whatsapp: {
    fontSize: 30,
    color: 'white',
    marginTop: 20,
    fontWeight: 'bold',
    marginStart: -7, 

  },
  lupa: {
    fontSize:  25,
    color: 'white',
    alignSelf: 'flex start',
    right: 20,
    marginTop: -25,
    position: 'absolute',
  },
  pontos: {
    fontSize:  25,
    color: 'white',
    alignSelf: 'flex start',
    right: -15,
    marginTop: -25,
    position: 'absolute',
  },

  botaoFlutuante: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: '#0a796f',
    borderRadius: 15,
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  botaoFlutuanteDentro: {
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
