let games = [
  {
    id: "1",
    title: "The Witcher 3: Wild Hunt",
    platform: ["PC", "PlayStation 4", "Xbox One"],
  },
  {
    id: "2",
    title: "Grand Theft Auto V",
    platform: ["PC", "PlayStation 4", "Xbox One"],
  },
  {
    id: "3",
    title: "The Legend of Zelda: Breath of the Wild",
    platform: ["Nintendo Switch", "Wii U"],
  },
  {
    id: "4",
    title: "Red Dead Redemption 2",
    platform: ["PC", "PlayStation 4", "Xbox One"],
  },
];

let authors = [
  { id: "1", name: "John Doe", verified: true },
  { id: "2", name: "Jane Smith", verified: true },
  { id: "3", name: "Alice Johnson", verified: false },
  { id: "4", name: "Bob Brown", verified: true },
];

let reviews = [
  {
    id: "1",
    rating: 5,
    content: "Amazing game, highly recommended!",
    author_id: "1",
    game_id: "1",
  },
  {
    id: "2",
    rating: 4,
    content: "Good but could use some improvements.",
    author_id: "2",
    game_id: "4",
  },
  {
    id: "3",
    rating: 5,
    content: "One of the best open-world games I've played.",
    author_id: "3",
    game_id: "3",
  },
  {
    id: "4",
    rating: 3,
    content: "Decent game, but overrated in my opinion.",
    author_id: "4",
    game_id: "2",
  },
];

export default { games, authors, reviews };
