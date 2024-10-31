const BOOKS_DATA = [
  {
    title: "Percy Jackson & the Olympians: The Lightning Thief",
    author: "Rick Riordan",
    first_published: "2005",
    description: "Percy Jackson discovers he's a demigod and embarks on an epic journey to stop a war between the gods of Olympus.",
    categories: ["Fantasy", "Adventure", "Young Adult", "Mythology"],
    cover: {
      imgSrc: '/bookCovers/PercyJackson.jpg',
      alt: "Cover of Percy Jackson & the Olympians: The Lightning Thief by Rick Riordan featuring a young boy holding a sword while standing in the ocean.",
    },
  },
  {
    title: "The School for Good and Evil",
    author: "Soman Chainani",
    first_published: "2013",
    description: "Two best friends are taken to a magical school where they are trained to be either a hero or a villain in classic fairy tales.",
    categories: ["Fantasy", "Young Adult", "Adventure", "Magic"],
    cover: {
      imgSrc: '/bookCovers/the-school-for-good-and-evil.jpg',
      alt: "Cover of The School for Good and Evil by Soman Chainani with two characters, one in light clothing and one in dark, standing back-to-back.",
    },
  },
  {
    title: "Miss Peregrine's Home for Peculiar Children",
    author: "Ransom Riggs",
    first_published: "2011",
    description: "A mysterious orphanage filled with children who possess unusual abilities sets the stage for a dark, magical adventure.",
    categories: ["Fantasy", "Young Adult", "Mystery", "Adventure"],
    cover: {
      imgSrc: '/bookCovers/miss-peregrine-s-home-for-peculiar-children.jpg',
      alt: "Cover of Miss Peregrine's Home for Peculiar Children by Ransom Riggs showing a vintage photo of a girl levitating above the ground.",
    },
  },
  {
    title: "Artemis Fowl",
    author: "Eoin Colfer",
    first_published: "2001",
    description: "A young criminal mastermind, Artemis Fowl, uncovers the secret world of fairies and goes head-to-head with their magical forces.",
    categories: ["Fantasy", "Science Fiction", "Young Adult", "Adventure"],
    cover: {
      imgSrc: '/bookCovers/Artemis-Fowl.jpg',
      alt: "Cover of Artemis Fowl by Eoin Colfer, featuring a boy in a suit with glowing glasses and a mysterious golden background.",
    },
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    first_published: "1937",
    description: "Bilbo Baggins embarks on an unexpected journey filled with dwarves, dragons, and a mysterious ring, setting the stage for epic adventures.",
    categories: ["Fantasy", "Adventure", "Classics", "Epic"],
    cover: {
      imgSrc: '/bookCovers/the-hobbit.jpg',
      alt: "Cover of The Hobbit by J.R.R. Tolkien, depicting Bilbo Baggins walking through a lush, green landscape with mountains in the background.",
    },
  },
  {
    title: "Howl's Moving Castle",
    author: "Diana Wynne Jones",
    first_published: "1986",
    description: "Sophie, cursed to become an old woman, seeks help from the enigmatic wizard Howl, leading to an enchanting and magical journey.",
    categories: ["Fantasy", "Magic", "Young Adult", "Romance"],
    cover: {
      imgSrc: '/bookCovers/Howl-s-Moving-Castle.png',
      alt: "Cover of Howl's Moving Castle by Diana Wynne Jones showing a whimsical, steampunk-like castle with legs, moving through a magical landscape.",
    },
  },
  {
    title: "The Magicians",
    author: "Lev Grossman",
    first_published: "2009",
    description: "A modern take on magic and adventure, where a group of students discover the existence of a magical world—and the dark forces lurking within it.",
    categories: ["Fantasy", "Adventure", "Adult", "Magic"],
    cover: {
      imgSrc: '/bookCovers/the-magicians.jpg',
      alt: "Cover of The Magicians by Lev Grossman, showing a solitary tree against a foggy background, symbolizing mystery and magic.",
    },
  },
  {
    title: "Charlie and the Chocolate Factory",
    author: "Roald Dahl",
    first_published: "1964",
    description: "A whimsical tale of a young boy's adventure inside Willy Wonka's magical chocolate factory, filled with quirky characters and sweet surprises.",
    categories: ["Children's Fiction", "Fantasy", "Adventure", "Classics"],
    cover: {
      imgSrc: '/bookCovers/charlie-and-the-chocolate-factory.jpg',
      alt: "Cover of Charlie and the Chocolate Factory by Roald Dahl showing Willy Wonka and Charlie standing amidst a magical world of candy.",
    },
  },
  {
    title: "The House with Chicken Legs",
    author: "Sophie Anderson",
    first_published: "2018",
    description: "Marinka longs for a normal life, but her house has chicken legs and moves constantly, leading her into magical and mysterious adventures.",
    categories: ["Fantasy", "Young Adult", "Adventure", "Folklore"],
    cover: {
      imgSrc: '/bookCovers/The-House-with-Chicken-Legs.jpg',
      alt: "Cover of The House with Chicken Legs by Sophie Anderson showing a house with literal chicken legs standing in a magical, starry landscape.",
    },
  },
  {
    title: "Nevermoor: The Trials of Morrigan Crow",
    author: "Jessica Townsend",
    first_published: "2017",
    description: "Morrigan Crow, a cursed child, is whisked away to the magical world of Nevermoor where she must pass trials to stay in her new life of wonder and danger.",
    categories: ["Fantasy", "Young Adult", "Magic", "Adventure"],
    cover: {
      imgSrc: '/bookCovers/Nevermoor.jpg',
      alt: "Cover of Nevermoor: The Trials of Morrigan Crow by Jessica Townsend, featuring a young girl in a cloak standing in front of a whimsical, magical city.",
    },
  }
];

export default BOOKS_DATA