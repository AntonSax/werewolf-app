import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import ItemCard from './src/components/ItemCard';
import { Button, Card, CardSection, Header, NumberInput } from './src/components/common';

export default class App extends React.Component {
  state = { playerCount: '' };

  render() {
    return (
      <View style={styles.activityViewStyle}>
        <Header headerText={'Character Selection'}/>
        <ScrollView style={styles.scrollViewStyle}>
          <ItemCard>
            <Text>
              ItemCard
            </Text>
          </ItemCard>

          <ItemCard>
            <Text>
              ItemCard
            </Text>
          </ItemCard>

          <ItemCard>
            <Text>
              ItemCard
            </Text>
          </ItemCard>

          <ItemCard>
            <Text>
              ItemCard
            </Text>
          </ItemCard>

          <ItemCard>
            <Text>
              ItemCard
            </Text>
          </ItemCard>

          <ItemCard>
            <Text>
              ItemCard
            </Text>
          </ItemCard>

          <ItemCard>
            <Text>
              ItemCard
            </Text>
          </ItemCard>

          <ItemCard>
            <Text>
              ItemCard
            </Text>
          </ItemCard>

          <ItemCard>
            <Text>
              ItemCard
            </Text>
          </ItemCard>

        </ScrollView>
      </View>
    );
  }
}

const styles = {
  activityViewStyle: {
    flex: 1,
  },
  scrollViewStyle: {
    borderWidth: 1,
    paddingBottom: 20
  },
}