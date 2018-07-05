import React from 'react';
import { Text, View } from 'react-native';
import { Button, Card, CardSection } from './components/common';

class MainActivity extends React.Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Button>
            New Game
          </Button>
        </CardSection>
        <CardSection>
          <Button>
            Join Game
          </Button>
        </CardSection>
        <CardSection>
          <Button>
            Rules
          </Button>
        </CardSection>
        <CardSection>
          <Button>
            Settings
          </Button>
        </CardSection>
        <CardSection>
          <Button>
            About
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default MainActivity