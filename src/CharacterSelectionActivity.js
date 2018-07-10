import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import { Button, Card, CardSection, Header, NumberInput } from './components/common';
import Item from './components/Item';
import ItemCard from './components/ItemCard';
import ItemContainer from './components/ItemContainer';
import emails from './react-native-search-filter/mails';
const KEYS_TO_FILTERS = ['user.name', 'subject', 'name'];

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
    const filteredEmails = emails.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    const filteredRoles = Item.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <SearchInput 
            onChangeText={(term) => { this.searchUpdated(term) }} 
            style={styles.searchInput}
            placeholder="Type a message to search"
            />
          <ScrollView>
            {filteredEmails.map(email => {
              return (
                <TouchableOpacity onPress={() => alert(email.user.name)} key={email.id} style={styles.emailItem}>
                  <View>
                    <Text>{email.user.name}</Text>
                    <Text style={styles.emailSubject}>{email.subject}</Text>
                  </View>
                </TouchableOpacity>
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
  emailItem:{
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.3)',
    padding: 10
  },
  emailSubject: {
    color: 'rgba(0,0,0,0.5)'
  },
  scrollViewStyle: {
    borderWidth: 1,
    paddingBottom: 20
  },
  searchInput:{
    padding: 10,
    borderColor: '#CCC',
    borderWidth: 1
  }
}