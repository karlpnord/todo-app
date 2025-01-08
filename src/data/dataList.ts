type Quote = {
  type: 'quote';
  text: string;
  author: string;
};

type Fact = {
  type: 'fact';
  text: string;
}

type Tip = {
  type: 'tip',
  text: string;
}

export type DataItem = Quote | Fact | Tip;

export const dataList: DataItem[] = [
  // Quotes
  { type: 'quote', text: 'The only way to do great work is to love what you do.', author: 'Steve Jobs' },
  { type: 'quote', text: 'Success is not final, failure is not fatal: It is the courage to continue that counts.', author: 'Winston Churchill' },
  { type: 'quote', text: "Believe you can and you're halfway there.", author: 'Theodore Roosevelt' },
  { type: 'quote', text: "It always seems impossible until it's done.", author: 'Nelson Mandela' },
  { type: 'quote', text: 'The best way to predict the future is to invent it.', author: 'Alan Kay' },
  { type: 'quote', text: 'You must be the change you wish to see in the world.', author: 'Mahatma Gandhi' },
  { type: 'quote', text: 'Success is not in what you have, but who you are.', author: 'Bo Bennett' },
  { type: 'quote', text: 'Do not watch the clock; do what it does. Keep going.', author: 'Sam Levenson' },
  { type: 'quote', text: 'The harder you work for something, the greater you will feel when you achieve it.', author: 'Anonymous' },
  { type: 'quote', text: 'Dream big and dare to fail.', author: 'Norman Vaughan' },

  // Fun Facts
  { type: 'fact', text: 'Did you know? Honey never spoils. Archaeologists have found pots of honey in ancient tombs that are over 3,000 years old and still safe to eat.' },
  { type: 'fact', text: 'Did you know? A day on Venus is longer than a year on Venus. It takes Venus longer to rotate once on its axis than to orbit the Sun.' },
  { type: 'fact', text: 'Did you know? An octopus has three hearts. Two pump blood to the gills, while the third pumps it to the rest of the body.' },
  { type: 'fact', text: 'Did you know? Bananas are berries, but strawberries are not. Botanically, a berry is a fruit produced from the ovary of a single flower.' },
  { type: 'fact', text: "Did you know? A cloud can weigh more than a million pounds. It's made up of water droplets or ice crystals that float in the air." },
  { type: 'fact', text: 'Did you know? The Eiffel Tower can grow by up to 6 inches in the summer because of the expansion of the iron due to heat.' },
  { type: 'fact', text: 'Did you know? Wombat poop is cube-shaped, which prevents it from rolling away and helps mark their territory.' },
  { type: 'fact', text: 'Did you know? Cows have best friends and can become stressed when they are separated from them.' },
  { type: 'fact', text: 'Did you know? The longest hiccuping spree lasted 68 years. Charles Osborne, an American, hiccupped continuously during this period.' },
  { type: 'fact', text: 'Did you know? The human nose can distinguish over 1 trillion different scents.' },

  // Health Tips
  { type: 'tip', text: 'Health Tip: Drink plenty of water throughout the day to stay hydrated. Water supports digestion and nutrient absorption.' },
  { type: 'tip', text: 'Health Tip: A balanced diet rich in fruits and vegetables can help improve your skin, energy, and overall well-being.' },
  { type: 'tip', text: 'Health Tip: Exercise regularly. Even a 30-minute walk each day can help maintain your cardiovascular health.' },
  { type: 'tip', text: 'Health Tip: Get enough sleep. Aim for 7-9 hours each night to promote brain function and physical recovery.' },
  { type: 'tip', text: 'Health Tip: Practice mindfulness or meditation to reduce stress and improve mental clarity.' },
  { type: 'tip', text: 'Health Tip: Make time for regular stretching to improve flexibility and reduce the risk of injury.' },
  { type: 'tip', text: 'Health Tip: Limit sugar intake to help maintain a healthy weight and prevent chronic diseases like diabetes.' },
  { type: 'tip', text: 'Health Tip: Prioritize your mental health. Set aside time for relaxation and activities that bring you joy.' },
  { type: 'tip', text: 'Health Tip: Avoid smoking and excessive alcohol consumption for long-term health benefits.' },
  { type: 'tip', text: 'Health Tip: Take short breaks during work or study sessions to prevent burnout and maintain focus.' }
];