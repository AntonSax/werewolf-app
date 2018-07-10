import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button, Card, CardSection, Header, NumberInput } from './components/common';
import Item from './components/Item';
import ItemData from './components/ItemData';
import ItemCard from './components/ItemCard';
import ItemContainer from './components/ItemContainer';
const KEYS_TO_FILTERS_NEW = ['name'];

const data = ItemData

{/* https://www.npmjs.com/package/react-native-search-filter */}

export default class CharacterSelectionActivity extends React.Component {
  static navigationOptions = {
    title: 'Character Selection',
  };

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      playerCount: ''
    }
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }

  render() {
    const { navigate } = this.props.navigation;
    const filteredRoles = ItemData.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS_NEW))
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <SearchInput 
            onChangeText={(term) => { this.searchUpdated(term) }} 
            style={styles.searchInput}
            placeholder="Type a message to search"
            />
          <ScrollView>
            {filteredRoles.map(ItemData => {
              return (
                <View key={ItemData.id} style={(ItemData.index + 1 === data.length) ? styles.lastItemStyle : styles.containerStyle}>

                  <Image source={ItemData.image} style={styles.imageStyle} />
                  <View style={styles.textStyle}>
                    <Text style={{ color: '#2e2f30' }}>{ItemData.name}</Text>
                    {/*
                    <View style={priceStyle}>
                      <Text style={{ color: '#2e2f30', fontSize: 12 }}>${ItemData.price}</Text>
                    </View>
                    */}
                  </View>

                  <View style={styles.counterStyle}>
                    <Icon.Button 
                      name="md-remove" 
                      size={25} 
                      color='#fff' 
                      backgroundColor='#fff' 
                      style={{ borderRadius: 15, backgroundColor: '#bbb', height: 30, width: 30 }} 
                      iconStyle={{ marginRight: 0 }}
                      onPress={() => console.log('hello')}
                    />
                    <Text>{ItemData.amountTaken}</Text>
                    <Icon.Button 
                      name="md-add" 
                      size={25} 
                      color='#fff' 
                      backgroundColor='#fff' 
                      style={{ borderRadius: 15, backgroundColor: '#bbb', height: 30, width: 30 }} 
                      iconStyle={{ marginRight: 0 }}
                      onPress={() => console.log('hello')}
                    />
                  </View>

                </View>
              )
            })}
          </ScrollView>
        </View>

        <View style={{ flex: 1 }}>
          <ItemContainer/>

          <View style={styles.buttonViewStyle}>
            <Button 
            style={styles.buttonStyle}
            title="Char Selection"
            onPress={() =>
            navigate('Lobby')
            }>
              Create Lobby
            </Button>
          </View>
        </View>

      </View>
    );
  }
}

const styles = {
  activityViewStyle: {
    marginLeft: 40,
    marginRight: 40,
    flex: 1
  },
  buttonViewStyle: {
    height: 50,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start'
  },
  containerStyle: {
    flexDirection: 'row',
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#e2e2e2',
    padding: 10,
    paddingLeft: 15,
    backgroundColor: '#fff'
  },
  counterStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  imageStyle: {
    width: 50, 
    height: 50, 
    marginRight: 20
  },
  itemData:{
    padding: 0
  },
  itemSubject: {
    color: 'rgba(0,0,0,0.5)'
  },
  lastItemStyle: {
    flexDirection: 'row',
    flex: 1,
    padding: 10,
    paddingLeft: 15,
    backgroundColor: '#fff'
  },
  scrollViewStyle: {
    borderWidth: 1,
    paddingBottom: 20
  },
  searchInput:{
    padding: 10,
    borderColor: '#CCC',
    borderWidth: 1
  },
  textStyle: {
    flex: 2,
    justifyContent: 'center'
  },
}