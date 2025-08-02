function breakBond() {
  const name1 = document.getElementById("name1").value.trim();
  const name2 = document.getElementById("name2").value.trim();
  const result = document.getElementById("result");

  if (!name1 || !name2) {
    result.innerText = "Please enter both names to break this tragedy!";
    return;
  }

  const reasons = [
    "They argue over pineapple on pizza 🍍🍕",
    "One likes cats, the other is a dog person 🐱🐶",
    "Horoscopes said: Nope ❌",
    "Netflix fights: One loves horror, the other wants romcom 😬",
    "They couldn’t even agree on a couple name 😂",
    "Their last date ended with ‘Let’s just be friends’ 🥲",
    "One says 'data', the other says 'daataa' 📢😑"
  ];

  const random = Math.floor(Math.random() * reasons.length);
  result.innerText = ${name1} & ${name2}? ${reasons[random]};
}

function matchThem() {
  const name1 = document.getElementById("name1").value.trim();
  const name2 = document.getElementById("name2").value.trim();
  const result = document.getElementById("result");

  if (!name1 || !name2) {
    result.innerText = "We need both names for love to blossom 💐";
    return;
  }

  const matches = [
    "They finish each other's... sandwiches 🥪",
    "When they look into each other’s eyes, WiFi connects instantly 📶💘",
    "Their love story is powered by memes & Maggi 🍜😂",
    "Perfect match: One forgets, the other reminds 💡",
    "Even their Spotify playlists love each other 🎧💖",
    "They met in a bug fix and stayed for the patch notes 🐞💾",
    "When they hug, the world resets to factory settings 💞"
  ];

  const random = Math.floor(Math.random() * matches.length);
  result.innerText = ${name1} & ${name2}? ${matches[random]};
}