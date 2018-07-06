import { createStackNavigator } from 'react-navigation';
import MainActivity from './src/MainActivity';
import NewGameActivity from './src/NewGameActivity';
import CharacterSelectionActivity from './src/CharacterSelectionActivity';
import RulesActivity from './src/RulesActivity';
import AboutActivity from './src/AboutActivity';
import SettingsActivity from './src/SettingsActivity';
import ActionActivity from './src/ActionActivity';
import LobbyActivity from './src/LobbyActivity';
import GameActivity from './src/GameActivity';


const App = createStackNavigator({
  Home: { screen: MainActivity },
  NewGame: { screen: NewGameActivity },
  CharacterSelection: { screen: CharacterSelectionActivity },
  Rules: { screen: RulesActivity },
  About: { screen: AboutActivity },
  Settings: { screen: SettingsActivity },
  Action: { screen: ActionActivity },
  Lobby: { screen: LobbyActivity },
  Game: { screen: GameActivity }
});

export default App;