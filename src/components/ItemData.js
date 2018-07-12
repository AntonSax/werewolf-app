const image1 = require('../images/moderator.png');
const image2 = require('../images/villager.jpg');
const image3 = require('../images/seer.jpg');
const image4 = require('../images/doctor.jpg');
const image5 = require('../images/werewolf.jpg');

export default [
{
  id: 1,
  image: image1,
  name: 'Moderator',
  price: 5,
  amountTaken: 3,
  description: "The Moderator does not play the game, but makes sure the other people playing the game know how to play."
}, {
  id: 2,
  image: image2,
  name: 'Villager',
  price: 5,
  amountTaken: 4,
  description: "The Villager votes during the day."
}, {
  id: 3,
  image: image3,
  name: 'Seer',
  price: 5,
  amountTaken: 2,
  description: "The Seer divines whether a player is a Werewolf or not."
}, {
  id: 4,
  image: image4,
  name: 'Doctor',
  price: 5,
  amountTaken: 3,
  description: "The Doctor heals another player each night if they are attacked."
}, {
  id: 5,
  image: image5,
  name: 'Werewolf',
  price: 10,
  amountTaken: 1,
  description: "The Werewolf teams up with other Werewolves and attacks Villagers at night."
}, {
  id: 6,
  name: 'Bodyguard',
  price: 20,
  amountTaken: 1,
  description: "The Bodyguard protects one person each night. They will kill, but also die to, the first person that tries to attack their client."
}, {
  id: 7,
  name: 'Vigilante',
  price: 6,
  amountTaken: 1,
  description: "The Vigilante may attack anyone they wish to at night."
}, {
  id: 8,
  name: 'Lycan',
  price: 25,
  amountTaken: 1,
  description: "The Lycan is a Villager that looks like a Werewolf."
}, {
  id: 9,
  name: 'Fool',
  price: 13,
  amountTaken: 1,
  description: "The Fool's goal is to be lynched. The game does not end if they are lynched."
}, {
  id: 10,
  name: 'Mindreader',
  price: 10,
  amountTaken: 1,
  description: "The Mindreader learns exactly who another person is."
}, {
  id: 11,
  name: 'Cupid',
  price: 30,
  amountTaken: 1,
  description: "Cupid picks two players to become lovers with a suicide-pact."
}, {
  id: 12,
  name: 'Witch',
  price: 40,
  amountTaken: 1,
  description: "The Witch controls another person at night."
}, {
  id: 13,
  name: 'Blob',
  price: 11,
  amountTaken: 1,
  description: "The Blob turns players adjacent to it into Blobs. They are collectively known as The Blob."
}, {
  id: 14,
  name: 'Werewolf Cub',
  price: 35,
  amountTaken: 1,
  description: "The Werewolf Cub turns into a Werewolf if all others Werewolves die. If a Werewolf Cub dies, Werewolves attack 2 people the following night."
}, {
  id: 15,
  name: 'Arsonist',
  price: 40,
  amountTaken: 1,
  description: "The Arsonist either douses a player in gasoline or lights all players doused on fire."
}, {
  id: 16,
  name: 'Spellcaster',
  price: 7,
  amountTaken: 1,
  description: "The Spellcaster silences one player from talking until the next night."
}, {
  id: 17,
  name: 'Town Whore',
  price: 69,
  amountTaken: 1,
  description: "The Town Whore can prevent one player from voting the following day."
}, {
  id: 18,
  name: 'Escort',
  price: 10,
  amountTaken: 1,
  description: "The Escort can prevent one person from performing their action that night."
}, {
  id: 19,
  name: 'Mimic',
  price: 25,
  amountTaken: 1,
  description: "The Mimic kills and becomes the first person they are visited by."
}, {
  id: 20,
  name: 'Mayor',
  price: 15,
  amountTaken: 1,
  description: "The Mayor can reveal themselves in order to double the count of his vote."
}, {
  id: 21,
  name: 'Medium',
  price: 10,
  amountTaken: 1,
  description: "The Medium can speak with the dead at night."
}, {
  id: 22,
  name: 'Veteran',
  price: 30,
  amountTaken: 1,
  description: "The Veteran can go on alert at night. If on alert the Veteran kills whomever visit them."
}, {
  id: 23,
  name: 'Amnesiac',
  price: 15,
  amountTaken: 1,
  description: "The Amnesiac remembers their role from the "
}, {
  id: 24,
  name: 'Serial Killer',
  price: 50,
  amountTaken: 1,
  description: "The Serial Killer wishes to kill everyone."
}, {
  id: 25,
  name: 'Transporter',
  price: 45,
  amountTaken: 1,
  description: "The Transporter can teleport two players during the night before other actions occur."
}, {
  id: 26,
  name: 'CopyCat',
  price: 45,
  amountTaken: 1,
  description: "The CopyCat decides their role after the second night."
}, {
  id: 27,
  name: 'Jester',
  price: 45,
  amountTaken: 1,
  description: "The Jester's only goal is to be lynched. The game ends if they are lynched."
}, {
  id: 28,
  name: 'Survivor',
  price: 45,
  amountTaken: 1,
  description: "The Survivor has protective vests that give them immunity at night."
}, {
  id: 29,
  name: 'Executioner',
  price: 45,
  amountTaken: 1,
  description: "The Executioner wins with the Villagers if he successfully lynches his target."
}, {
  id: 30,
  name: 'Mason',
  price: 45,
  amountTaken: 1,
  description: "The Mason's only goal is to get his target lynched. The game ends if the Mason wins."
}, 
];