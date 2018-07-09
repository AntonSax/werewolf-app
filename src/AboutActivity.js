import React from 'react';
import { Linking, Text, View } from 'react-native';

class AboutActivity extends React.Component {
  static navigationOptions = {
    title: 'About',
  };

  constructor(props){
    super(props);
    this.state ={}
  }


  componentDidMount(){
    {/*
    fetch('http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&page=Mafia_(party_game)&callback=?')  
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
    }
    */}
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>The About Page</Text>
        <Text 
          style={{color: 'blue'}}
          onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Mafia_(party_game)')}
        >
          Wikipedia
        </Text>
      </View>
    )
  }
}

export default AboutActivity;