# 🏆 Jeopardy! Trivia Studio

An authentic, interactive, real-time multiplayer Jeopardy-style trivia game with a Quiz Master host screen and mobile phone client buzzers. Built with vanilla web standards, WebRTC peer-to-peer networking (PeerJS), live Wikipedia/IMDb scouring with exponential backoff rate limiting, and pure Web Audio API sound effects.

**Live Deployment**: [https://nanda-kr.github.io/jeopardy-trivia/](https://nanda-kr.github.io/jeopardy-trivia/)

---

## 🌟 Key Features

1. **Authentic Jeopardy Aesthetic**:
   - Iconic deep blue grid with gold-trimmed headers (`#060CE9`, `#FFCC00`).
   - Classic serif typography with high-contrast text and dollar values ($100, $200, $300, $400, $500).
   - Animated visual feedback: glowing green pulse on correct answer, shaking red animation on incorrect buzzes.
   - Synthesized Web Audio sound effects: buzzer, wrong "EH-EH", correct fanfare, Daily Double arpeggios, and countdown ticks.

2. **Server & Client Architecture (Desktop + Mobile Phones)**:
   - **Host / Quiz Master Screen (`index.html`)**: Displayed on a projector, TV, or desktop monitor. Coordinates game state, timers, scoring, and clue reveals.
   - **Player Mobile Screen (`client.html`)**: Scanned via QR code on mobile phone browsers. Features a tactile buzzer button, active-turn clue picker, and answer input field with countdown timer.
   - **Real-Time Communication**: Uses WebRTC DataChannels (PeerJS) for instant peer-to-peer synchronization across mobile devices without requiring third-party database keys. Includes local `BroadcastChannel` fallback for multi-tab testing.

3. **Complete Game Flow**:
   - **Team Setup**: Quiz Master selects the number of teams (2 to 8).
   - **QR Code Lobby**: Generates an individual QR code for each team. Players scan with their phone cameras, enter their team name, and connect.
   - **Category Selection**: Choose up to 6 categories from curated options (*Science & Cosmos*, *Film & IMDb Legends*, *World Geography*, *World History*, *Inventions & Tech*, *Sports*, etc.) or select *Random Mix*.
   - **Live Board Generation**: Generates 30 clues (5 per category, values $100 to $500 directly proportional to difficulty).
   - **Scouring Reliable Data with Exponential Backoff**: Scours and enriches facts from the Wikipedia REST API with an automated token bucket and exponential backoff retry engine (`delay = base * 2^attempt + jitter`) to prevent hitting API rate limits.
   - **Fair Buzzing & Turn Rotation**:
     - A random team is selected to start the game.
     - Only the active team sees controls on their phone to select a tile.
     - Once revealed on the host screen, buzzers unlock for all teams.
     - Atomic first-to-buzz lockout system ensures zero race conditions.
     - The buzzing team answers out loud, types their answer on their phone, and submits.
   - **Smart Answer Evaluation**:
     - Normalized Levenshtein distance and token parsing automatically handles Jeopardy phrasing (*"What is..."*, *"Who was..."*), articles (*"the"*, *"a"*), and minor spelling variations.
     - If correct or close enough: tile glows green, official answer is revealed, points are awarded, and that team retains board control.
     - If incorrect: tile shakes in red, points are deducted, and remaining teams can buzz in.

---

## 🕹️ Quick Start & Local Run

### Option 1: Live via GitHub Pages
Visit [https://nanda-kr.github.io/jeopardy-trivia/](https://nanda-kr.github.io/jeopardy-trivia/) directly in any browser.

### Option 2: Local Node.js Server
```bash
git clone https://github.com/nanda-kr/jeopardy-trivia.git
cd jeopardy-trivia
npm start
```
- Open `http://localhost:3000` for the Quiz Master Screen.
- Open `http://localhost:3000/client.html?room=JEP-1000&slot=1` for Mobile Clients.

### Option 3: Static Python Server
```bash
python -m http.server 8000
```
Visit `http://localhost:8000`.

---

## 🧪 Automated Testing

Run the built-in test suite covering fuzzy answer evaluation, exponential backoff pacing, and board generation:
```bash
npm test
```

---

## 🛠️ Architecture

```
jeopardy-trivia/
├── index.html                 # Main Host / Quiz Master View
├── client.html                # Mobile Buzzer Client View
├── css/
│   ├── jeopardy.css           # Core styling, grid layout & animations
│   └── mobile.css             # Mobile buzzer & touch interface styles
├── js/
│   ├── audio.js               # Web Audio API sound synthesizer
│   ├── rate-limiter.js        # Exponential backoff & TPS rate limiter
│   ├── trivia-scourer.js      # Wikipedia REST API scraper & clue builder
│   ├── trivia-data.js         # Curated authentic Jeopardy clue bank
│   ├── fuzzy-matcher.js       # Levenshtein distance & Jeopardy phrase parser
│   ├── peer-sync.js           # WebRTC DataChannel / BroadcastChannel sync
│   ├── host-app.js            # Host controller & game state machine
│   └── client-app.js          # Mobile client controller
├── vendor/
│   ├── peerjs.min.js          # PeerJS WebRTC library
│   ├── qrcode.min.js          # QR code generator library
│   └── confetti.min.js       # Canvas confetti celebrations
├── test/
│   └── test-engine.js         # Automated tests
├── server.js                  # Standalone Node.js static server
└── README.md
```

---

## 📄 License
MIT License. Created by [nanda-kr](https://github.com/nanda-kr).
