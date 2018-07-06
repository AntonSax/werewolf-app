import { createStackNavigator } from 'react-navigation';
import MainActivity from './MainActivity';
import NewGameActivity from './NewGameActivity';
import CharacterSelectionActivity from './CharacterSelectionActivity';
import RulesActivity from './RulesActivity';
import AboutActivity from './AboutActivity';
import SettingsActivity from './SettingsActivity';
import ActionActivity from './ActionActivity';
import LobbyActivity from './LobbyActivity';
import GameActivity from './GameActivity';

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