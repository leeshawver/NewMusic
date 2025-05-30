const stories = [
  {
    id: 1,
    steps: [
      { prompt: "A cracked doorway beckons under stormy skies.", options: [{ text: "Enter the ruins", next: 1 }, { text: "Walk the outer wall", next: 2 }] },
      { prompt: "Inside, vines glow with pulse-like rhythm.", options: [{ text: "Follow the vines", next: 3 }, { text: "Whisper to them", next: 4 }] },
      { prompt: "The wind whistles a familiar melody.", options: [{ text: "Hum along", next: 4 }, { text: "Clap to the beat", next: 3 }] },
      { prompt: "You trip over a stone — it shouts, 'Watch it!'", options: [{ text: "Apologize to the stone", next: 5 }, { text: "Kick it again", next: 5 }] },
      { prompt: "A secret door creaks open, revealing warmth.", options: [{ text: "Step through", next: 5 }, { text: "Knock politely", next: 5 }] },
      { prompt: "You find a chair, a glowing cube, and the perfect silence.", options: [{ text: "Sit and breathe it in", reveal: 1 }, { text: "Tap the cube", reveal: 1 }] }
    ]
  },
  {
    id: 3,
    steps: [
      { prompt: "A subway map flickers in neon. The lines shift.", options: [{ text: "Take the red line", next: 1 }, { text: "Take the green line", next: 2 }] },
      { prompt: "The tunnel lights flash like Morse code.", options: [{ text: "Decode the message", next: 3 }, { text: "Close your eyes", next: 4 }] },
      { prompt: "Your train car is filled with mannequins wearing headphones.", options: [{ text: "Take a selfie", next: 4 }, { text: "Offer them music", next: 3 }] },
      { prompt: "One mannequin nods at you.", options: [{ text: "Nod back", next: 5 }, { text: "Stare suspiciously", next: 5 }] },
      { prompt: "A speaker drops from the ceiling.", options: [{ text: "Catch it", next: 5 }, { text: "Let it play", next: 5 }] },
      { prompt: "The doors open into a glowing amphitheater.", options: [{ text: "Step into the sound", reveal: 3 }, { text: "Bow and enter", reveal: 3 }] }
    ]
  },
  {
    id: 4,
    steps: [
      { prompt: "A path of lanterns leads into the woods.", options: [{ text: "Follow the lights", next: 1 }, { text: "Climb a tree", next: 2 }] },
      { prompt: "An owl drops a cassette tape.", options: [{ text: "Play it", next: 3 }, { text: "Sniff it?", next: 4 }] },
      { prompt: "A raccoon offers you a boom box.", options: [{ text: "Trade your shoes for it", next: 3 }, { text: "Politely decline", next: 4 }] },
      { prompt: "The tape plays backwards. Your name is heard.", options: [{ text: "Record your voice", next: 5 }, { text: "Whistle along", next: 5 }] },
      { prompt: "A projector shines onto moss.", options: [{ text: "Watch the film", next: 5 }, { text: "Eat popcorn from your pocket", next: 5 }] },
      { prompt: "A mushroom circle glows with rhythm.", options: [{ text: "Dance inside it", reveal: 4 }, { text: "Lie in the center", reveal: 4 }] }
    ]
  },
  {
    id: 5,
    steps: [
      { prompt: "You enter a white room with floating chairs.", options: [{ text: "Sit in one", next: 1 }, { text: "Spin it wildly", next: 2 }] },
      { prompt: "Headphones lower from the ceiling.", options: [{ text: "Put them on", next: 3 }, { text: "Scream into them", next: 4 }] },
      { prompt: "A child appears and tells a joke in binary.", options: [{ text: "Laugh politely", next: 4 }, { text: "Translate it", next: 3 }] },
      { prompt: "A typewriter types in musical notation.", options: [{ text: "Hum the melody", next: 5 }, { text: "Play air piano", next: 5 }] },
      { prompt: "You float toward a stained glass speaker.", options: [{ text: "Press your ear to it", next: 5 }, { text: "Ask it for a story", next: 5 }] },
      { prompt: "A velvet box opens, revealing pulsing lights.", options: [{ text: "Touch the pattern", reveal: 5 }, { text: "Breathe in rhythm", reveal: 5 }] }
    ]
  },
  {
    id: 6,
    steps: [
      { prompt: "You wake in a greenhouse full of record plants.", options: [{ text: "Touch the leaves", next: 1 }, { text: "Whistle at a fern", next: 2 }] },
      { prompt: "The plants harmonize softly.", options: [{ text: "Conduct them", next: 3 }, { text: "Sing louder", next: 4 }] },
      { prompt: "A cactus DJ spins beats with thorns.", options: [{ text: "Compliment its mix", next: 3 }, { text: "Scratch the record", next: 4 }] },
      { prompt: "A vinyl vine wraps around your arm.", options: [{ text: "Let it pull you", next: 5 }, { text: "Follow it manually", next: 5 }] },
      { prompt: "You discover a watering can that vibrates.", options: [{ text: "Water the roots", next: 5 }, { text: "Drink from it", next: 5 }] },
      { prompt: "An organic subwoofer rises from the soil.", options: [{ text: "Stand inside", reveal: 6 }, { text: "Yell into it", reveal: 6 }] }
    ]
  },
  {
    id: 8,
    steps: [
      { prompt: "Endless doors echo your footsteps.", options: [{ text: "Open door 404", next: 1 }, { text: "Kick door 900", next: 2 }] },
      { prompt: "You enter a room full of tuning forks.", options: [{ text: "Tap them all", next: 3 }, { text: "Conduct their resonance", next: 4 }] },
      { prompt: "One fork glows red.", options: [{ text: "Stick it in your sock", next: 3 }, { text: "Ask it questions", next: 4 }] },
      { prompt: "The ceiling disappears. Stars sing.", options: [{ text: "Sing with them", next: 5 }, { text: "Record their melody", next: 5 }] },
      { prompt: "A harp drops from orbit.", options: [{ text: "Tune it by thought", next: 5 }, { text: "Play Wonderwall", next: 5 }] },
      { prompt: "An echo chamber waits with open arms.", options: [{ text: "Fall in backward", reveal: 8 }, { text: "Whistle on entry", reveal: 8 }] }
    ]
  },
  {
    id: 9,
    steps: [
      { prompt: "Sunrise hits a rooftop where amps grow like trees.", options: [{ text: "Climb one", next: 1 }, { text: "Record the hum", next: 2 }] },
      { prompt: "A radio tower sends Morse code laughter.", options: [{ text: "Laugh with it", next: 3 }, { text: "Respond in clicks", next: 4 }] },
      { prompt: "A bird lands on your shoulder and DJs live.", options: [{ text: "Offer requests", next: 3 }, { text: "Flap back", next: 4 }] },
      { prompt: "The rooftop shifts into a boat.", options: [{ text: "Set sail", next: 5 }, { text: "Grab the oars", next: 5 }] },
      { prompt: "A fog horn plays deep house.", options: [{ text: "Bass drop now", next: 5 }, { text: "Nod with approval", next: 5 }] },
      { prompt: "A disco ball sun rises again.", options: [{ text: "Spin under it", reveal: 9 }, { text: "Strike a pose", reveal: 9 }] }
    ]
  },
  {
    id: 10,
    steps: [
      { prompt: "You float down a river of sheet music.", options: [{ text: "Read the waves", next: 1 }, { text: "Write your own", next: 2 }] },
      { prompt: "A turtle paddles by humming jazz.", options: [{ text: "Join its trio", next: 3 }, { text: "Throw it a beat", next: 4 }] },
      { prompt: "A frog hands you a trumpet.", options: [{ text: "Solo time", next: 3 }, { text: "Eat the trumpet", next: 4 }] },
      { prompt: "Reeds along the bank hum like a choir.", options: [{ text: "Harmonize", next: 5 }, { text: "Yodel", next: 5 }] },
      { prompt: "The current speeds up, music intensifies.", options: [{ text: "Ride it", next: 5 }, { text: "Swim sideways", next: 5 }] },
      { prompt: "The river ends in a glowing concert shell.", options: [{ text: "Step into spotlight", reveal: 10 }, { text: "Echo your name", reveal: 10 }] }
    ]
  }
];

const albums = [
  {
    id: 1,
    title: "Free Love",
    artist: "Sylvan Esso",
    description: "Chill and innovative. Rather new to me. It's an album I know I will be revisiting because there are layers and folds awaiting my exploration. Recommended to me by my collaborative music buddy in CA, so maybe the upcoming album may have vibes like this one…",
    link: "https://music.youtube.com/playlist?list=OLAK5uy_m7tw7gdPanqzzjHNFQiGdtBtZ4PRyePhI&si=1465cMweO7b1HEv3",
    image: "cover-art/free love.jpg"
  },
  {
    id: 3,
    title: "The Devil and God are Raging Inside Me",
    artist: "Brand New",
    description: "I was hanging with a guy around 2005 who was way into emo. He introduced me to these guys and I really like their energy and melodic content. It may be tough to listen to if the whiny emo vibe rubs you the wrong way. Or I have swung and missed again (American baseball reference) and you are totally familiar with Brand New.",
    link: "https://music.youtube.com/playlist?list=OLAK5uy_kPMtWyLinzZqOAn6Q4rVuY4SPoosLKxTU&si=K8tUj5-25UNMleIp",
    image: "cover-art/the devil and god are raging inside me.jpg"
  },
  {
    id: 4,
    title: "The Moon & Antarctica",
    artist: "Modest Mouse",
    description: "Classic indie. I saw these guys twice in Chico, CA. Isaac Brock is one of my favorite songwriters. This album is probably in my top 20.",
    link: "https://music.youtube.com/playlist?list=OLAK5uy_k_w23C0sr-080Tbds3R647JjL4e3WwE8g&si=NVCeAK7TvLBhhIRQ",
    image: "cover-art/the mood and antarctica.jpg"
  },
  {
    id: 5,
    title: "W H O K I L L",
    artist: "Tune-Yards",
    description: "I have no idea how I found this album but I loved it immediately. A bit off kilter. Tight harmonies with unique melodies and song structure. A gem.",
    link: "https://music.youtube.com/playlist?list=OLAK5uy_mMROjKXZEPfxKOIhQN0-51Dk245Zmg6_A&si=Vac9TbsmEAvX3HOR",
    image: "cover-art/whokill.jpg"
  },
  {
    id: 6,
    title: "Muchacho",
    artist: "Phosphorescent",
    description: "I have no idea where I found this album. To me, it’s raw, tender, and moving. I have a feeling the artist has kinda faded into obscurity because I couldn’t find much else of his/theirs that I found compelling. Enjoy!",
    link: "https://music.youtube.com/playlist?list=OLAK5uy_nfHLY8s3REJV85uMkhbUuR-Qmb3T_iDfo&si=SFbvfmP9HeBJMpTF",
    image: "cover-art/muchacho.jpg"
  },
  {
    id: 8,
    title: "Sympathetique",
    artist: "Pink Martini",
    description: "Eiffel Tower on the cover. French title. Jazzy dance music. What’s not to love?! I saw them live in Portland, OR, circa 2000 – they blew the roof off the place and I don’t know if I’ve ever danced so hard in my life.",
    link: "https://music.youtube.com/playlist?list=OLAK5uy_mUzLaNic1LGKNZMoy3qJJKFhk6TISUoGQ&si=yfsgBIBeIi5By5Un",
    image: "cover-art/sympa.jpg"
  },
  {
    id: 9,
    title: "Prelude to Ecstasy",
    artist: "The Last Dinner Party",
    description: "Straight up female power rock. The drummer is next level – a temporary member of the band for this album, so I hear. They got into a bit of hot water recently for screening men at the door to their concerts and being a bit overtly sexist. Killer album! Enjoy!",
    link: "https://music.youtube.com/playlist?list=OLAK5uy_nQOlc3Mb-_m3Ttx8j6Ypx-4uzNeiNUDWs&si=1VnLIx-QaNLxM_4s",
    image: "cover-art/prelude.jpg"
  },
  {
    id: 10,
    title: "If I Can’t Have Love, I Want Power",
    artist: "Halsey",
    description: "2021 was a great year for music. This album is produced by Trent Reznor and his fingerprint is very overt in this album. Tasty production, intimate yet powerful lyrics. I return to this one quite often. Enjoy.",
    link: "https://music.youtube.com/playlist?list=OLAK5uy_k3KIeUKjZnz5nBzrxepbcNR9dsyDrCvHA&si=pk3_h4Fvy5n4-vfD",
    image: "cover-art/if I cant.jpg"
  }
];
