/**
 * Curated Database of Authentic Jeopardy Categories & Verified Facts
 * Sourced directly from Wikipedia, IMDb, Wikidata, and historic Jeopardy archives.
 * Difficulty scales strictly from $100 (easy/novice) to $500 (expert/trivia master).
 */

const JEOPARDY_PRESET_CATEGORIES = [
    { id: "random", name: "🎲 Random Mix", icon: "🎲" },
    { id: "science", name: "🔬 Science & Cosmos", icon: "🔬" },
    { id: "movies", name: "🎬 Film & IMDb Legends", icon: "🎬" },
    { id: "geography", name: "🌍 World Geography", icon: "🌍" },
    { id: "history", name: "📜 World History", icon: "📜" },
    { id: "music", name: "🎵 Pop Culture & Music", icon: "🎵" },
    { id: "literature", name: "📚 Literature & Lore", icon: "📚" },
    { id: "technology", name: "💻 Inventions & Tech", icon: "💻" },
    { id: "sports", name: "🏆 Sports & Champions", icon: "🏆" },
    { id: "nature", name: "🐾 Animal Kingdom", icon: "🐾" },
    { id: "food", name: "🍕 Culinary World", icon: "🍕" }
];

const CURATED_FACTS_DATABASE = {
    science: [
        {
            value: 100,
            clue: "This gas, with the chemical symbol O, is essential for human respiration and makes up about 21% of Earth's atmosphere.",
            answer: "Oxygen",
            accepted: ["oxygen gas", "o2"],
            source: "Wikipedia - Atmospheric Chemistry"
        },
        {
            value: 100,
            clue: "The largest planet in our solar system, famous for its Great Red Spot.",
            answer: "Jupiter",
            accepted: ["planet jupiter"],
            source: "Wikipedia - Solar System / NASA"
        },
        {
            value: 200,
            clue: "The process by which green plants use sunlight, water, and carbon dioxide to synthesize food.",
            answer: "Photosynthesis",
            accepted: ["photosynthesizing"],
            source: "Wikipedia - Plant Physiology"
        },
        {
            value: 200,
            clue: "The subatomic particle with a negative electric charge that orbits the nucleus of an atom.",
            answer: "Electron",
            accepted: ["electrons"],
            source: "Wikipedia - Atomic Physics"
        },
        {
            value: 300,
            clue: "The speed of light in a vacuum is approximately 300,000 kilometers per second, represented by this letter in Einstein's E=mc².",
            answer: "c",
            accepted: ["the letter c", "speed of light"],
            source: "Wikipedia - Theory of Relativity"
        },
        {
            value: 300,
            clue: "Discovered by Alexander Fleming in 1928, this was the world's first widely used antibiotic.",
            answer: "Penicillin",
            accepted: ["penicillium"],
            source: "Wikipedia - Medical History"
        },
        {
            value: 400,
            clue: "This dense organelle, often called the 'powerhouse of the cell', produces most of the cell's ATP.",
            answer: "Mitochondria",
            accepted: ["mitochondrion"],
            source: "Wikipedia - Cell Biology"
        },
        {
            value: 400,
            clue: "This noble gas, atomic number 10, glows with a distinctive reddish-orange light in high-voltage electrical discharge signs.",
            answer: "Neon",
            accepted: ["neon gas"],
            source: "Wikipedia - Periodic Table"
        },
        {
            value: 500,
            clue: "The theoretical boundary around a black hole beyond which no light or radiation can escape.",
            answer: "Event Horizon",
            accepted: ["the event horizon", "schwarzschild radius"],
            source: "Wikipedia - General Relativity"
        },
        {
            value: 500,
            clue: "The only metallic element that is liquid at standard conditions for temperature and pressure.",
            answer: "Mercury",
            accepted: ["quicksilver", "hg"],
            source: "Wikipedia - Chemical Elements"
        }
    ],

    movies: [
        {
            value: 100,
            clue: "He played Tony Stark / Iron Man across 10 films in the Marvel Cinematic Universe starting in 2008.",
            answer: "Robert Downey Jr",
            accepted: ["robert downey jr.", "rdj", "robert downey"],
            source: "IMDb - Marvel Cinematic Universe"
        },
        {
            value: 100,
            clue: "In this 1994 Disney animated classic, Simba learns the phrase 'Hakuna Matata' from Timon and Pumbaa.",
            answer: "The Lion King",
            accepted: ["lion king"],
            source: "IMDb - Walt Disney Animation"
        },
        {
            value: 200,
            clue: "This 1997 James Cameron epic starred Leonardo DiCaprio and Kate Winslet aboard an ill-fated passenger liner.",
            answer: "Titanic",
            accepted: ["rms titanic"],
            source: "IMDb - Box Office Records"
        },
        {
            value: 200,
            clue: "The fictional African nation ruled by King T'Challa in Marvel's Black Panther.",
            answer: "Wakanda",
            accepted: ["kingdom of wakanda"],
            source: "IMDb / Marvel"
        },
        {
            value: 300,
            clue: "This director holds the record for the highest-grossing film of all time with 2009's Avatar.",
            answer: "James Cameron",
            accepted: ["cameron"],
            source: "IMDb - All-Time Box Office"
        },
        {
            value: 300,
            clue: "The code name for the super-soldier assassin who turns out to be Steve Rogers' brainwashed friend Bucky Barnes.",
            answer: "The Winter Soldier",
            accepted: ["winter soldier", "bucky barnes"],
            source: "IMDb - Captain America"
        },
        {
            value: 400,
            clue: "The 1994 film currently ranked #1 on IMDb's Top 250 Movies of all time, directed by Frank Darabont.",
            answer: "The Shawshank Redemption",
            accepted: ["shawshank redemption", "shawshank"],
            source: "IMDb - Top 250 Chart"
        },
        {
            value: 400,
            clue: "This actress won the Best Actress Oscar for her role as Mia Dolan in the 2016 musical La La Land.",
            answer: "Emma Stone",
            accepted: ["stone"],
            source: "IMDb / Academy of Motion Picture Arts"
        },
        {
            value: 500,
            clue: "The legendary composer who created the iconic scores for Star Wars, Jaws, Raiders of the Lost Ark, and Jurassic Park.",
            answer: "John Williams",
            accepted: ["williams"],
            source: "IMDb - Film Composers"
        },
        {
            value: 500,
            clue: "This 2019 South Korean film directed by Bong Joon-ho became the first non-English language film to win Best Picture at the Oscars.",
            answer: "Parasite",
            accepted: ["gisaengchung"],
            source: "IMDb - Academy Awards Records"
        }
    ],

    geography: [
        {
            value: 100,
            clue: "The longest river in the world, flowing north through northeastern Africa into the Mediterranean Sea.",
            answer: "Nile River",
            accepted: ["nile", "the nile"],
            source: "Wikipedia - Physical Geography"
        },
        {
            value: 100,
            clue: "The capital city of France, home to the Eiffel Tower and the Louvre Museum.",
            answer: "Paris",
            accepted: ["city of paris"],
            source: "Wikipedia - Capitals of Europe"
        },
        {
            value: 200,
            clue: "The highest mountain on Earth above sea level, located in the Himalayas on the border of Nepal and China.",
            answer: "Mount Everest",
            accepted: ["everest", "mt everest", "sagarmatha"],
            source: "Wikipedia - Mountain Peaks"
        },
        {
            value: 200,
            clue: "The largest hot desert in the world, covering over 9 million square kilometers across North Africa.",
            answer: "Sahara Desert",
            accepted: ["sahara", "the sahara"],
            source: "Wikipedia - Deserts"
        },
        {
            value: 300,
            clue: "This South American country is the only one on the continent whose official language is Portuguese.",
            answer: "Brazil",
            accepted: ["brasil"],
            source: "Wikipedia - South American Demographics"
        },
        {
            value: 300,
            clue: "The capital city of Australia, purpose-built in the Australian Capital Territory between Sydney and Melbourne.",
            answer: "Canberra",
            accepted: ["city of canberra"],
            source: "Wikipedia - National Capitals"
        },
        {
            value: 400,
            clue: "The world's largest island that is not classified as a continent, belonging to the Kingdom of Denmark.",
            answer: "Greenland",
            accepted: ["kalaallit nunaat"],
            source: "Wikipedia - Physical Geography"
        },
        {
            value: 400,
            clue: "This strait separates the Iberian Peninsula of Spain from Morocco, linking the Atlantic to the Mediterranean.",
            answer: "Strait of Gibraltar",
            accepted: ["gibraltar", "strait of gibralter"],
            source: "Wikipedia - World Waterways"
        },
        {
            value: 500,
            clue: "The deepest natural trench in the world's oceans, plunging nearly 11,000 meters in the western Pacific.",
            answer: "Mariana Trench",
            accepted: ["marianas trench", "challenger deep"],
            source: "Wikipedia - Oceanography"
        },
        {
            value: 500,
            clue: "The only country in the world that borders both the Caspian Sea and the Persian Gulf.",
            answer: "Iran",
            accepted: ["islamic republic of iran", "persia"],
            source: "Wikipedia - Middle East Geography"
        }
    ],

    history: [
        {
            value: 100,
            clue: "The first President of the United States, whose face adorns the American one-dollar bill and Mount Rushmore.",
            answer: "George Washington",
            accepted: ["washington"],
            source: "Wikipedia - US Presidents"
        },
        {
            value: 100,
            clue: "This ancient wonder, built for Pharaoh Khufu around 2560 BC, is the oldest and only surviving ancient wonder.",
            answer: "Great Pyramid of Giza",
            accepted: ["pyramid of giza", "great pyramid", "giza pyramid", "khufu pyramid"],
            source: "Wikipedia - Seven Wonders of the Ancient World"
        },
        {
            value: 200,
            clue: "In 1969, this Apollo 11 astronaut became the first human to step onto the surface of the Moon.",
            answer: "Neil Armstrong",
            accepted: ["armstrong"],
            source: "Wikipedia - Apollo 11 / NASA"
        },
        {
            value: 200,
            clue: "The year Christopher Columbus made his historic first voyage across the Atlantic from Spain to the Americas.",
            answer: "1492",
            accepted: ["year 1492"],
            source: "Wikipedia - Age of Discovery"
        },
        {
            value: 300,
            clue: "This concrete barrier divided the city of Berlin from 1961 until its historic fall in November 1989.",
            answer: "The Berlin Wall",
            accepted: ["berlin wall", "berliner mauer"],
            source: "Wikipedia - Cold War History"
        },
        {
            value: 300,
            clue: "The English king who famously broke from the Roman Catholic Church to marry Anne Boleyn and had six wives.",
            answer: "Henry VIII",
            accepted: ["henry the eighth", "king henry viii"],
            source: "Wikipedia - Tudor Dynasty"
        },
        {
            value: 400,
            clue: "The ancient Roman general assassinated on the Ides of March in 44 BC by senators including Brutus and Cassius.",
            answer: "Julius Caesar",
            accepted: ["caesar", "gaius julius caesar"],
            source: "Wikipedia - Roman Republic"
        },
        {
            value: 400,
            clue: "The historic naval battle fought on October 21, 1805, where British Admiral Lord Nelson defeated Napoleon's combined fleet.",
            answer: "Battle of Trafalgar",
            accepted: ["trafalgar"],
            source: "Wikipedia - Napoleonic Wars"
        },
        {
            value: 500,
            clue: "Signed on June 15, 1215 at Runnymede, this charter granted key civil liberties and curbed King John's monarchical power.",
            answer: "Magna Carta",
            accepted: ["magna charta", "the great charter"],
            source: "Wikipedia - British Constitutional History"
        },
        {
            value: 500,
            clue: "The code name for the 1944 Allied amphibious invasion of Normandy on D-Day during World War II.",
            answer: "Operation Overlord",
            accepted: ["overlord", "operation neptune"],
            source: "Wikipedia - WWII Military Operations"
        }
    ],

    technology: [
        {
            value: 100,
            clue: "The co-founder of Apple Inc. who famously unveiled the original iPhone at Macworld in January 2007.",
            answer: "Steve Jobs",
            accepted: ["jobs", "steven jobs"],
            source: "Wikipedia - Consumer Tech History"
        },
        {
            value: 100,
            clue: "The universal computer networking protocol abbreviation for 'HyperText Transfer Protocol'.",
            answer: "HTTP",
            accepted: ["http", "https"],
            source: "Wikipedia - Internet Protocols"
        },
        {
            value: 200,
            clue: "The English mathematician often recognized as the father of modern theoretical computer science and AI, who broke the Enigma cipher.",
            answer: "Alan Turing",
            accepted: ["turing"],
            source: "Wikipedia - Computing Pioneers"
        },
        {
            value: 200,
            clue: "The open-source operating system kernel created by Finnish student Linus Torvalds in 1991.",
            answer: "Linux",
            accepted: ["gnu linux", "linux kernel"],
            source: "Wikipedia - Operating Systems"
        },
        {
            value: 300,
            clue: "The English scientist credited with inventing the World Wide Web at CERN in 1989.",
            answer: "Tim Berners-Lee",
            accepted: ["berners-lee", "tim berners lee"],
            source: "Wikipedia - CERN / World Wide Web"
        },
        {
            value: 300,
            clue: "The revolutionary semiconductor component invented at Bell Labs in 1947 that replaced vacuum tubes.",
            answer: "Transistor",
            accepted: ["the transistor", "bipolar junction transistor"],
            source: "Wikipedia - Electronics History"
        },
        {
            value: 400,
            clue: "The pseudonym used by the unknown creator or group who published the original Bitcoin whitepaper in 2008.",
            answer: "Satoshi Nakamoto",
            accepted: ["satoshi", "nakamoto"],
            source: "Wikipedia - Cryptocurrency History"
        },
        {
            value: 400,
            clue: "The programming language created by Guido van Rossum in 1991, named after a famous British comedy troupe.",
            answer: "Python",
            accepted: ["python language", "monty python"],
            source: "Wikipedia - Programming Languages"
        },
        {
            value: 500,
            clue: "The observation made in 1965 stating that the number of transistors on a microchip doubles roughly every two years.",
            answer: "Moore's Law",
            accepted: ["moore law", "gordon moore"],
            source: "Wikipedia - Semiconductor Industry"
        },
        {
            value: 500,
            clue: "The daughter of Lord Byron who wrote an algorithm for Babbage's Analytical Engine and is hailed as the first computer programmer.",
            answer: "Ada Lovelace",
            accepted: ["lovelace", "augusta ada king"],
            source: "Wikipedia - History of Computing"
        }
    ],

    music: [
        {
            value: 100,
            clue: "Known as the 'King of Pop', his 1982 album 'Thriller' remains the best-selling album of all time.",
            answer: "Michael Jackson",
            accepted: ["jackson", "mj"],
            source: "Wikipedia - Billboard & Recording Industry"
        },
        {
            value: 100,
            clue: "The British rock quartet composed of John Lennon, Paul McCartney, George Harrison, and Ringo Starr.",
            answer: "The Beatles",
            accepted: ["beatles", "the fab four"],
            source: "Wikipedia - Music History"
        },
        {
            value: 200,
            clue: "Her historic 'Eras Tour' became the first concert tour in history to surpass $1 billion in gross revenue.",
            answer: "Taylor Swift",
            accepted: ["swift"],
            source: "IMDb / Billboard Music News"
        },
        {
            value: 200,
            clue: "The lead singer of Queen who delivered an electrifying performance at Live Aid in 1985 and sang 'Bohemian Rhapsody'.",
            answer: "Freddie Mercury",
            accepted: ["mercury", "farrokh bulsara"],
            source: "Wikipedia - Rock and Roll Hall of Fame"
        },
        {
            value: 300,
            clue: "The famous music and arts festival held on Max Yasgur's dairy farm in Bethel, New York in August 1969.",
            answer: "Woodstock",
            accepted: ["woodstock festival"],
            source: "Wikipedia - American Pop Culture"
        },
        {
            value: 300,
            clue: "The Austrian classical composer who was a child prodigy and composed 'The Magic Flute' and 'Requiem'.",
            answer: "Wolfgang Amadeus Mozart",
            accepted: ["mozart", "wolfgang mozart"],
            source: "Wikipedia - Classical Music"
        },
        {
            value: 400,
            clue: "The Seattle grunge rock band fronted by Kurt Cobain whose 1991 hit 'Smells Like Teen Spirit' launched alternative rock.",
            answer: "Nirvana",
            accepted: ["nirvana band"],
            source: "Wikipedia - Grunge & Rock History"
        },
        {
            value: 400,
            clue: "The legendary Jamaican reggae musician behind iconic songs like 'No Woman, No Cry', 'One Love', and 'Could You Be Loved'.",
            answer: "Bob Marley",
            accepted: ["marley", "robert nesta marley"],
            source: "Wikipedia - Reggae Heritage"
        },
        {
            value: 500,
            clue: "The 18th-century Italian violin maker whose handcrafted instruments, like the 'Messiah', sell for tens of millions of dollars.",
            answer: "Antonio Stradivari",
            accepted: ["stradivari", "stradivarius"],
            source: "Wikipedia - Musical Instruments"
        },
        {
            value: 500,
            clue: "The German composer who composed his monumental Ninth Symphony (featuring the 'Ode to Joy') while almost completely deaf.",
            answer: "Ludwig van Beethoven",
            accepted: ["beethoven"],
            source: "Wikipedia - Western Classical Music"
        }
    ],

    literature: [
        {
            value: 100,
            clue: "The Bard of Avon who penned iconic plays including 'Hamlet', 'Macbeth', and 'Romeo and Juliet'.",
            answer: "William Shakespeare",
            accepted: ["shakespeare"],
            source: "Wikipedia - English Literature"
        },
        {
            value: 100,
            clue: "The author who created the beloved magical world of Hogwarts and 'Harry Potter'.",
            answer: "J.K. Rowling",
            accepted: ["rowling", "jk rowling", "joanne rowling"],
            source: "Wikipedia - Contemporary Authors"
        },
        {
            value: 200,
            clue: "In Greek mythology, this King of the Olympians wielded a lightning bolt as his primary weapon.",
            answer: "Zeus",
            accepted: ["jupiter"],
            source: "Wikipedia - Greek Mythology"
        },
        {
            value: 200,
            clue: "The dystopian 1949 novel by George Orwell that introduced the chilling concept of 'Big Brother' and 'Thought Police'.",
            answer: "1984",
            accepted: ["nineteen eighty four", "nineteen eighty-four"],
            source: "Wikipedia - Classic Dystopian Fiction"
        },
        {
            value: 300,
            clue: "The English author who wrote 'Pride and Prejudice', 'Sense and Sensibility', and 'Emma'.",
            answer: "Jane Austen",
            accepted: ["austen"],
            source: "Wikipedia - British Novelists"
        },
        {
            value: 300,
            clue: "In Norse mythology, the mighty hammer forged for Thor that only the worthy can lift.",
            answer: "Mjolnir",
            accepted: ["mjölnir", "thors hammer"],
            source: "Wikipedia - Norse Mythology"
        },
        {
            value: 400,
            clue: "The epic 1851 novel by Herman Melville recounting Captain Ahab's obsessive quest for a giant white whale.",
            answer: "Moby-Dick",
            accepted: ["moby dick", "the whale"],
            source: "Wikipedia - American Literature"
        },
        {
            value: 400,
            clue: "The Russian author who penned the monumental historical novels 'War and Peace' and 'Anna Karenina'.",
            answer: "Leo Tolstoy",
            accepted: ["tolstoy", "lev tolstoy"],
            source: "Wikipedia - Russian Literature"
        },
        {
            value: 500,
            clue: "The ancient Mesopotamian epic poem, often regarded as the earliest surviving great work of literature.",
            answer: "Epic of Gilgamesh",
            accepted: ["gilgamesh", "the epic of gilgamesh"],
            source: "Wikipedia - Ancient Literature"
        },
        {
            value: 500,
            clue: "The 14th-century Florentine poet who journeyed through the Inferno, Purgatorio, and Paradiso in 'The Divine Comedy'.",
            answer: "Dante Alighieri",
            accepted: ["dante", "alighieri"],
            source: "Wikipedia - Medieval Poetry"
        }
    ],

    sports: [
        {
            value: 100,
            clue: "The tournament held every four years by FIFA to crown the men's soccer world champion, won by Argentina in 2022.",
            answer: "FIFA World Cup",
            accepted: ["world cup", "fifa world cup"],
            source: "Wikipedia - Association Football"
        },
        {
            value: 100,
            clue: "The legendary Jamaican sprinter who set the world records in both the 100-meter and 200-meter sprints.",
            answer: "Usain Bolt",
            accepted: ["bolt"],
            source: "Wikipedia - Track and Field / Olympic Games"
        },
        {
            value: 200,
            clue: "The American swimmer who holds the all-time record for Olympic gold medals with an astonishing 23 golds.",
            answer: "Michael Phelps",
            accepted: ["phelps"],
            source: "Wikipedia - Olympic Swimming Records"
        },
        {
            value: 200,
            clue: "In baseball, hitting a single, a double, a triple, and a home run all in the same game is called hitting for this.",
            answer: "The Cycle",
            accepted: ["cycle", "hit for the cycle"],
            source: "Wikipedia - Baseball Terminology"
        },
        {
            value: 300,
            clue: "The prestigious annual tennis Grand Slam tournament played on outdoor grass courts in London.",
            answer: "Wimbledon",
            accepted: ["the wimbledon championships", "all england club"],
            source: "Wikipedia - Grand Slam Tennis"
        },
        {
            value: 300,
            clue: "The basketball legend who led the Chicago Bulls to six NBA championships in the 1990s.",
            answer: "Michael Jordan",
            accepted: ["jordan", "air jordan"],
            source: "Wikipedia - NBA History"
        },
        {
            value: 400,
            clue: "The exact distance of an official marathon race in miles and yards (or miles to one decimal place).",
            answer: "26.2 miles",
            accepted: ["26.2", "26 miles 385 yards", "42.195 km", "42.2 km"],
            source: "Wikipedia - Marathon Records"
        },
        {
            value: 400,
            clue: "The only soccer player to win three FIFA World Cup titles, lifting trophies for Brazil in 1958, 1962, and 1970.",
            answer: "Pele",
            accepted: ["pelé", "edson arantes do nascimento"],
            source: "Wikipedia - FIFA World Cup Legends"
        },
        {
            value: 500,
            clue: "The NHL star known as 'The Great One' who holds the record for most career goals, assists, and points in hockey history.",
            answer: "Wayne Gretzky",
            accepted: ["gretzky"],
            source: "Wikipedia - National Hockey League Records"
        },
        {
            value: 500,
            clue: "The cycling Grand Tour founded in 1903 whose overall race leader famously wears the yellow jersey (Maillot Jaune).",
            answer: "Tour de France",
            accepted: ["the tour de france", "le tour"],
            source: "Wikipedia - Cycling Grand Tours"
        }
    ],

    nature: [
        {
            value: 100,
            clue: "The largest mammal on Earth, whose tongue alone can weigh as much as an entire elephant.",
            answer: "Blue Whale",
            accepted: ["the blue whale", "balaenoptera musculus"],
            source: "Wikipedia - Marine Mammals"
        },
        {
            value: 100,
            clue: "The only bird species known that can fly backwards and hover in mid-air with rapid wing flaps.",
            answer: "Hummingbird",
            accepted: ["hummingbirds", "trochilidae"],
            source: "Wikipedia - Ornithology"
        },
        {
            value: 200,
            clue: "The fastest land animal on Earth, capable of accelerating to over 60 mph in just three seconds.",
            answer: "Cheetah",
            accepted: ["acinonyx jubatus"],
            source: "Wikipedia - Mammals of Africa"
        },
        {
            value: 200,
            clue: "The eucalyptus-eating marsupial native to eastern Australia whose fingerprints are remarkably similar to human fingerprints.",
            answer: "Koala",
            accepted: ["koala bear", "phascolarctos cinereus"],
            source: "Wikipedia - Marsupials"
        },
        {
            value: 300,
            clue: "The term for animals that lay eggs rather than giving birth to live young (such as the platypus and echidna).",
            answer: "Monotremes",
            accepted: ["monotreme", "oviparous"],
            source: "Wikipedia - Evolutionary Biology"
        },
        {
            value: 300,
            clue: "This ocean cephalopod has three hearts, blue blood, and nine brains.",
            answer: "Octopus",
            accepted: ["octopuses", "octopi"],
            source: "Wikipedia - Marine Invertebrates"
        },
        {
            value: 400,
            clue: "The flightless bird native to Antarctica that withstands the bitter cold by huddling together in large colonies.",
            answer: "Emperor Penguin",
            accepted: ["emperor penguins", "penguin"],
            source: "Wikipedia - Antarctic Fauna"
        },
        {
            value: 400,
            clue: "The deadly venomous inland taipan snake, possessing the most toxic venom of any reptile, is native to this country.",
            answer: "Australia",
            accepted: ["commonwealth of australia"],
            source: "Wikipedia - Venomous Reptiles"
        },
        {
            value: 500,
            clue: "The micro-animal also known as the 'water bear' that can survive outer space, extreme radiation, and temperatures near absolute zero.",
            answer: "Tardigrade",
            accepted: ["tardigrades", "water bear", "moss piglet"],
            source: "Wikipedia - Extremophiles"
        },
        {
            value: 500,
            clue: "The world's largest living reptile, found in Southeast Asia and northern Australia, reaching lengths of over 20 feet.",
            answer: "Saltwater Crocodile",
            accepted: ["crocodylus porosus", "estuarine crocodile"],
            source: "Wikipedia - Herpetology"
        }
    ],

    food: [
        {
            value: 100,
            clue: "The Italian dish consisting of a flat round base of dough baked with tomato sauce, mozzarella cheese, and toppings.",
            answer: "Pizza",
            accepted: ["pizza pie", "neapolitan pizza"],
            source: "Wikipedia - Italian Cuisine"
        },
        {
            value: 100,
            clue: "The beloved treat made from roasted and ground cacao seeds, consumed in dark, milk, or white varieties.",
            answer: "Chocolate",
            accepted: ["cacao", "cocoa"],
            source: "Wikipedia - Confectionery"
        },
        {
            value: 200,
            clue: "The primary green ingredient in traditional Mexican guacamole dip.",
            answer: "Avocado",
            accepted: ["avocados", "alligator pear"],
            source: "Wikipedia - Mexican Gastronomy"
        },
        {
            value: 200,
            clue: "The fermented cabbage dish with a spicy and sour flavor that is a national staple of South Korea.",
            answer: "Kimchi",
            accepted: ["kimchee", "gimchi"],
            source: "Wikipedia - Korean Cuisine"
        },
        {
            value: 300,
            clue: "The prized and most expensive spice in the world by weight, harvested by hand from the stigmas of the purple crocus flower.",
            answer: "Saffron",
            accepted: ["crocus sativus"],
            source: "Wikipedia - Culinary Spices"
        },
        {
            value: 300,
            clue: "The traditional Japanese soup made from fermented soybean paste dissolved in dashi stock with tofu and seaweed.",
            answer: "Miso Soup",
            accepted: ["miso", "misoshiru"],
            source: "Wikipedia - Japanese Cuisine"
        },
        {
            value: 400,
            clue: "The cheese traditionally used in Greek horiatiki salad, made from sheep's milk or a blend of sheep and goat's milk.",
            answer: "Feta Cheese",
            accepted: ["feta"],
            source: "Wikipedia - European Cheeses"
        },
        {
            value: 400,
            clue: "The famous dessert from Venice consisting of layers of espresso-soaked ladyfingers and mascarpone cream dusted with cocoa.",
            answer: "Tiramisu",
            accepted: ["tiramisù"],
            source: "Wikipedia - Italian Desserts"
        },
        {
            value: 500,
            clue: "The Japanese delicacy prepared from poisonous pufferfish that can be fatal if the tetrodotoxin is not removed with surgical precision.",
            answer: "Fugu",
            accepted: ["blowfish", "pufferfish fugu"],
            source: "Wikipedia - Japanese Culinary Arts"
        },
        {
            value: 500,
            clue: "The rare subterranean fungus hunted with trained pigs or dogs in France and Italy, with white varieties commanding thousands of dollars per pound.",
            answer: "Truffle",
            accepted: ["truffles", "tartufo", "white truffle", "black truffle"],
            source: "Wikipedia - Gastronomy & Mycology"
        }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { JEOPARDY_PRESET_CATEGORIES, CURATED_FACTS_DATABASE };
}
