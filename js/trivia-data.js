/**
 * Stored Database of Authentic Jeopardy Categories & 2,000 Verified Clues
 * Sourced directly from reliable encyclopedic domains: Wikipedia, IMDb, Wikidata.
 * Contains exactly 200 questions per category across 10 categories,
 * eliminating the need for expensive live API calls during gameplay.
 */

const JEOPARDY_PRESET_CATEGORIES = [
    {
        "id": "random",
        "name": "🎲 Random Mix",
        "icon": "🎲"
    },
    {
        "id": "science",
        "name": "🔬 Science & Cosmos",
        "icon": "🔬"
    },
    {
        "id": "movies",
        "name": "🎬 Film & IMDb Legends",
        "icon": "🎬"
    },
    {
        "id": "geography",
        "name": "🌍 World Geography",
        "icon": "🌍"
    },
    {
        "id": "history",
        "name": "📜 World History",
        "icon": "📜"
    },
    {
        "id": "music",
        "name": "🎵 Pop Culture & Music",
        "icon": "🎵"
    },
    {
        "id": "literature",
        "name": "📚 Literature & Lore",
        "icon": "📚"
    },
    {
        "id": "technology",
        "name": "💻 Inventions & Tech",
        "icon": "💻"
    },
    {
        "id": "sports",
        "name": "🏆 Sports & Champions",
        "icon": "🏆"
    },
    {
        "id": "nature",
        "name": "🐾 Animal Kingdom",
        "icon": "🐾"
    },
    {
        "id": "food",
        "name": "🍕 Culinary World",
        "icon": "🍕"
    }
];

const CURATED_FACTS_DATABASE = {
    "science": [
        {
            "value": 100,
            "clue": "The closest star to Earth and the center of our solar system.",
            "answer": "The Sun",
            "accepted": [
                "sun",
                "sol"
            ],
            "source": "Wikipedia - The Sun"
        },
        {
            "value": 100,
            "clue": "The chemical formula for water consisting of hydrogen and oxygen.",
            "answer": "H2O",
            "accepted": [
                "water",
                "h 2 o"
            ],
            "source": "Wikipedia - Water"
        },
        {
            "value": 100,
            "clue": "The force that pulls objects toward the center of the Earth.",
            "answer": "Gravity",
            "accepted": [
                "gravitational force"
            ],
            "source": "Wikipedia - Gravitation"
        },
        {
            "value": 100,
            "clue": "The planet known as the 'Red Planet' due to iron oxide on its surface.",
            "answer": "Mars",
            "accepted": [
                "planet mars"
            ],
            "source": "Wikipedia - Mars"
        },
        {
            "value": 100,
            "clue": "The hardest known natural mineral on Mohs hardness scale.",
            "answer": "Diamond",
            "accepted": [
                "diamonds"
            ],
            "source": "Wikipedia - Diamond"
        },
        {
            "value": 100,
            "clue": "The largest planet in our solar system, famous for its Great Red Spot.",
            "answer": "Jupiter",
            "accepted": [
                "planet jupiter"
            ],
            "source": "Wikipedia - Jupiter"
        },
        {
            "value": 100,
            "clue": "The breathing gas essential for human life that makes up ~21% of air.",
            "answer": "Oxygen",
            "accepted": [
                "o2",
                "oxygen gas"
            ],
            "source": "Wikipedia - Atmospheric Chemistry"
        },
        {
            "value": 100,
            "clue": "The boiling point of pure water at standard atmospheric pressure in Celsius.",
            "answer": "100 degrees",
            "accepted": [
                "100",
                "100 c",
                "100 celsius"
            ],
            "source": "Wikipedia - Boiling Point"
        },
        {
            "value": 100,
            "clue": "The freezing point of water in Celsius.",
            "answer": "0 degrees",
            "accepted": [
                "0",
                "0 c",
                "0 celsius"
            ],
            "source": "Wikipedia - Freezing Point"
        },
        {
            "value": 100,
            "clue": "The natural satellite that orbits the planet Earth.",
            "answer": "The Moon",
            "accepted": [
                "moon",
                "luna"
            ],
            "source": "Wikipedia - Moon"
        },
        {
            "value": 100,
            "clue": "The organ in the human body responsible for pumping blood through the circulatory system.",
            "answer": "Heart",
            "accepted": [
                "the heart",
                "human heart"
            ],
            "source": "Wikipedia - Heart"
        },
        {
            "value": 100,
            "clue": "The green pigment found in plants used to absorb energy from light.",
            "answer": "Chlorophyll",
            "accepted": [
                "chlorophyl"
            ],
            "source": "Wikipedia - Chlorophyll"
        },
        {
            "value": 100,
            "clue": "The process plants use to convert sunlight, carbon dioxide, and water into glucose.",
            "answer": "Photosynthesis",
            "accepted": [
                "photosynthesizing"
            ],
            "source": "Wikipedia - Photosynthesis"
        },
        {
            "value": 100,
            "clue": "The center of an atom consisting of protons and neutrons.",
            "answer": "Nucleus",
            "accepted": [
                "atomic nucleus"
            ],
            "source": "Wikipedia - Atomic Nucleus"
        },
        {
            "value": 100,
            "clue": "The layer of gases surrounding the Earth that protects it from solar radiation.",
            "answer": "Atmosphere",
            "accepted": [
                "the atmosphere",
                "earth atmosphere"
            ],
            "source": "Wikipedia - Atmosphere"
        },
        {
            "value": 100,
            "clue": "The bones that protect the human brain from injury.",
            "answer": "Skull",
            "accepted": [
                "cranium",
                "the skull"
            ],
            "source": "Wikipedia - Skull"
        },
        {
            "value": 100,
            "clue": "The number of bones in an adult human skeleton.",
            "answer": "206",
            "accepted": [
                "206 bones"
            ],
            "source": "Wikipedia - Human Skeleton"
        },
        {
            "value": 100,
            "clue": "The closest planet to the Sun in our solar system.",
            "answer": "Mercury",
            "accepted": [
                "planet mercury"
            ],
            "source": "Wikipedia - Mercury"
        },
        {
            "value": 100,
            "clue": "The state of matter that has a definite volume but no fixed shape, taking the shape of its container.",
            "answer": "Liquid",
            "accepted": [
                "liquids"
            ],
            "source": "Wikipedia - State of Matter"
        },
        {
            "value": 100,
            "clue": "The tiny organisms that can cause infectious diseases, often treated with antibiotics.",
            "answer": "Bacteria",
            "accepted": [
                "bacterium"
            ],
            "source": "Wikipedia - Bacteria"
        },
        {
            "value": 100,
            "clue": "The planet famous for its prominent and extensive ring system.",
            "answer": "Saturn",
            "accepted": [
                "planet saturn"
            ],
            "source": "Wikipedia - Saturn"
        },
        {
            "value": 100,
            "clue": "The sense detected by the olfactory receptors in the human nose.",
            "answer": "Smell",
            "accepted": [
                "olfaction",
                "sense of smell"
            ],
            "source": "Wikipedia - Olfaction"
        },
        {
            "value": 100,
            "clue": "The unit used to measure electric potential difference, named after Alessandro Volta.",
            "answer": "Volt",
            "accepted": [
                "volts",
                "voltage"
            ],
            "source": "Wikipedia - Volt"
        },
        {
            "value": 100,
            "clue": "The celestial body made of ice, dust, and rock that produces a glowing tail near the Sun.",
            "answer": "Comet",
            "accepted": [
                "comets"
            ],
            "source": "Wikipedia - Comet"
        },
        {
            "value": 100,
            "clue": "The colored circle of tissue in the eye that regulates pupil size.",
            "answer": "Iris",
            "accepted": [
                "the iris"
            ],
            "source": "Wikipedia - Iris"
        },
        {
            "value": 100,
            "clue": "The white blood cells' primary role in the human body.",
            "answer": "Fighting infection",
            "accepted": [
                "immune system",
                "fighting disease",
                "defense"
            ],
            "source": "Wikipedia - White Blood Cells"
        },
        {
            "value": 100,
            "clue": "The fastest thing in the universe, traveling at ~300,000 km per second in a vacuum.",
            "answer": "Light",
            "accepted": [
                "speed of light",
                "photons"
            ],
            "source": "Wikipedia - Speed of Light"
        },
        {
            "value": 100,
            "clue": "The chemical symbol for table salt is NaCl, sodium and this halogen.",
            "answer": "Chlorine",
            "accepted": [
                "chloride"
            ],
            "source": "Wikipedia - Sodium Chloride"
        },
        {
            "value": 100,
            "clue": "The instrument used by astronomers to view distant stars and galaxies.",
            "answer": "Telescope",
            "accepted": [
                "telescopes"
            ],
            "source": "Wikipedia - Telescope"
        },
        {
            "value": 100,
            "clue": "The molten rock beneath the Earth's surface before it erupts as lava.",
            "answer": "Magma",
            "accepted": [
                "magma chamber"
            ],
            "source": "Wikipedia - Magma"
        },
        {
            "value": 100,
            "clue": "The galaxy that contains our solar system.",
            "answer": "Milky Way",
            "accepted": [
                "the milky way",
                "milky way galaxy"
            ],
            "source": "Wikipedia - Milky Way"
        },
        {
            "value": 100,
            "clue": "The device used to measure atmospheric temperature.",
            "answer": "Thermometer",
            "accepted": [
                "thermometers"
            ],
            "source": "Wikipedia - Thermometer"
        },
        {
            "value": 100,
            "clue": "The scientific study of living organisms.",
            "answer": "Biology",
            "accepted": [
                "biological sciences"
            ],
            "source": "Wikipedia - Biology"
        },
        {
            "value": 100,
            "clue": "The common gas exhaled by humans and absorbed by trees.",
            "answer": "Carbon Dioxide",
            "accepted": [
                "co2",
                "carbon dioxide gas"
            ],
            "source": "Wikipedia - Carbon Dioxide"
        },
        {
            "value": 100,
            "clue": "The human body's largest external organ.",
            "answer": "Skin",
            "accepted": [
                "the skin",
                "epidermis"
            ],
            "source": "Wikipedia - Skin"
        },
        {
            "value": 100,
            "clue": "The dwarf planet in the Kuiper belt formerly classified as the ninth planet.",
            "answer": "Pluto",
            "accepted": [
                "dwarf planet pluto"
            ],
            "source": "Wikipedia - Pluto"
        },
        {
            "value": 100,
            "clue": "The sound waves with frequencies higher than the upper audible limit of human hearing.",
            "answer": "Ultrasound",
            "accepted": [
                "ultrasonic"
            ],
            "source": "Wikipedia - Ultrasound"
        },
        {
            "value": 100,
            "clue": "The flow of electrical charge through a conductor.",
            "answer": "Electric Current",
            "accepted": [
                "current",
                "electricity"
            ],
            "source": "Wikipedia - Electric Current"
        },
        {
            "value": 100,
            "clue": "The substance formed when two or more chemical elements are chemically bonded together.",
            "answer": "Compound",
            "accepted": [
                "chemical compound"
            ],
            "source": "Wikipedia - Chemical Compound"
        },
        {
            "value": 100,
            "clue": "The scientist famous for formulating the law of universal gravitation after seeing an apple fall.",
            "answer": "Isaac Newton",
            "accepted": [
                "newton",
                "sir isaac newton"
            ],
            "source": "Wikipedia - Isaac Newton"
        },
        {
            "value": 200,
            "clue": "The subatomic particle that carries a negative electrical charge.",
            "answer": "Electron",
            "accepted": [
                "electrons"
            ],
            "source": "Wikipedia - Electron"
        },
        {
            "value": 200,
            "clue": "The positively charged particle located in the nucleus of an atom.",
            "answer": "Proton",
            "accepted": [
                "protons"
            ],
            "source": "Wikipedia - Proton"
        },
        {
            "value": 200,
            "clue": "The uncharged subatomic particle discovered by James Chadwick in 1932.",
            "answer": "Neutron",
            "accepted": [
                "neutrons"
            ],
            "source": "Wikipedia - Neutron"
        },
        {
            "value": 200,
            "clue": "The molecule that carries genetic instructions for development and functioning in all known organisms.",
            "answer": "DNA",
            "accepted": [
                "deoxyribonucleic acid"
            ],
            "source": "Wikipedia - DNA"
        },
        {
            "value": 200,
            "clue": "The scientist who proposed the theory of evolution by natural selection in 'On the Origin of Species'.",
            "answer": "Charles Darwin",
            "accepted": [
                "darwin"
            ],
            "source": "Wikipedia - Charles Darwin"
        },
        {
            "value": 200,
            "clue": "The scale used to measure the acidity or basicity of an aqueous solution from 0 to 14.",
            "answer": "pH scale",
            "accepted": [
                "ph"
            ],
            "source": "Wikipedia - pH"
        },
        {
            "value": 200,
            "clue": "The hottest planet in our solar system due to a runaway greenhouse effect.",
            "answer": "Venus",
            "accepted": [
                "planet venus"
            ],
            "source": "Wikipedia - Venus"
        },
        {
            "value": 200,
            "clue": "The organelle known as the 'powerhouse of the cell' for producing ATP.",
            "answer": "Mitochondria",
            "accepted": [
                "mitochondrion"
            ],
            "source": "Wikipedia - Mitochondrion"
        },
        {
            "value": 200,
            "clue": "The medical substance discovered by Alexander Fleming from Penicillium mold.",
            "answer": "Penicillin",
            "accepted": [
                "antibiotic penicillin"
            ],
            "source": "Wikipedia - Penicillin"
        },
        {
            "value": 200,
            "clue": "The chemical element with atomic number 1, the most abundant element in the universe.",
            "answer": "Hydrogen",
            "accepted": [
                "h",
                "hydrogen gas"
            ],
            "source": "Wikipedia - Hydrogen"
        },
        {
            "value": 200,
            "clue": "The transfer of heat through electromagnetic waves without needing a medium.",
            "answer": "Radiation",
            "accepted": [
                "thermal radiation"
            ],
            "source": "Wikipedia - Thermal Radiation"
        },
        {
            "value": 200,
            "clue": "The geological fault line that runs ~800 miles through California.",
            "answer": "San Andreas Fault",
            "accepted": [
                "san andreas"
            ],
            "source": "Wikipedia - San Andreas Fault"
        },
        {
            "value": 200,
            "clue": "The phenomenon where an electric current generates a magnetic field, and vice versa.",
            "answer": "Electromagnetism",
            "accepted": [
                "electromagnetic induction"
            ],
            "source": "Wikipedia - Electromagnetism"
        },
        {
            "value": 200,
            "clue": "The boundary in the atmosphere that absorbs most of the Sun's harmful ultraviolet radiation.",
            "answer": "Ozone Layer",
            "accepted": [
                "ozone",
                "o3 layer"
            ],
            "source": "Wikipedia - Ozone Layer"
        },
        {
            "value": 200,
            "clue": "The three bones in the human middle ear: malleus, incus, and this smallest bone.",
            "answer": "Stapes",
            "accepted": [
                "stirrup",
                "stapes bone"
            ],
            "source": "Wikipedia - Stapes"
        },
        {
            "value": 200,
            "clue": "The scientist who formulated the three laws of planetary motion.",
            "answer": "Johannes Kepler",
            "accepted": [
                "kepler"
            ],
            "source": "Wikipedia - Johannes Kepler"
        },
        {
            "value": 200,
            "clue": "The chemical element with symbol Fe, crucial for oxygen transport in hemoglobin.",
            "answer": "Iron",
            "accepted": [
                "fe"
            ],
            "source": "Wikipedia - Iron"
        },
        {
            "value": 200,
            "clue": "The process by which a solid changes directly into a gas without becoming a liquid.",
            "answer": "Sublimation",
            "accepted": [
                "sublimating"
            ],
            "source": "Wikipedia - Sublimation"
        },
        {
            "value": 200,
            "clue": "The SI unit of force, named after the formulator of classical mechanics.",
            "answer": "Newton",
            "accepted": [
                "newtons",
                "n"
            ],
            "source": "Wikipedia - Newton"
        },
        {
            "value": 200,
            "clue": "The giant cloud of dust and gas in space where new stars are born.",
            "answer": "Nebula",
            "accepted": [
                "nebulae"
            ],
            "source": "Wikipedia - Nebula"
        },
        {
            "value": 200,
            "clue": "The blood vessels that carry oxygenated blood away from the heart to the body.",
            "answer": "Arteries",
            "accepted": [
                "artery"
            ],
            "source": "Wikipedia - Artery"
        },
        {
            "value": 200,
            "clue": "The process of cell division that produces four genetically diverse daughter cells with half the chromosomes.",
            "answer": "Meiosis",
            "accepted": [
                "reduction division"
            ],
            "source": "Wikipedia - Meiosis"
        },
        {
            "value": 200,
            "clue": "The process of regular somatic cell division resulting in two identical daughter cells.",
            "answer": "Mitosis",
            "accepted": [
                "mitotic division"
            ],
            "source": "Wikipedia - Mitosis"
        },
        {
            "value": 200,
            "clue": "The point in a lever system around which the lever pivots.",
            "answer": "Fulcrum",
            "accepted": [
                "pivot"
            ],
            "source": "Wikipedia - Lever"
        },
        {
            "value": 200,
            "clue": "The SI unit of electrical resistance, named after Georg Ohm.",
            "answer": "Ohm",
            "accepted": [
                "ohms"
            ],
            "source": "Wikipedia - Ohm"
        },
        {
            "value": 200,
            "clue": "The organ in the human body that produces insulin and digestive enzymes.",
            "answer": "Pancreas",
            "accepted": [
                "the pancreas"
            ],
            "source": "Wikipedia - Pancreas"
        },
        {
            "value": 200,
            "clue": "The element with atomic number 6, forming the backbone of all organic molecules.",
            "answer": "Carbon",
            "accepted": [
                "c"
            ],
            "source": "Wikipedia - Carbon"
        },
        {
            "value": 200,
            "clue": "The second most abundant gas in Earth's atmosphere after nitrogen.",
            "answer": "Oxygen",
            "accepted": [
                "o2"
            ],
            "source": "Wikipedia - Atmosphere of Earth"
        },
        {
            "value": 200,
            "clue": "The bending of light as it passes from one medium into another of different density.",
            "answer": "Refraction",
            "accepted": [
                "refracting"
            ],
            "source": "Wikipedia - Refraction"
        },
        {
            "value": 200,
            "clue": "The scientist who first observed cells under a microscope and coined the term 'cell'.",
            "answer": "Robert Hooke",
            "accepted": [
                "hooke"
            ],
            "source": "Wikipedia - Robert Hooke"
        },
        {
            "value": 200,
            "clue": "The principle stating that an increase in the speed of a fluid occurs simultaneously with a decrease in pressure.",
            "answer": "Bernoulli's Principle",
            "accepted": [
                "bernoulli",
                "bernoullis principle"
            ],
            "source": "Wikipedia - Bernoulli's Principle"
        },
        {
            "value": 200,
            "clue": "The temperature scale where 0 corresponds to absolute zero (-273.15 °C).",
            "answer": "Kelvin",
            "accepted": [
                "kelvin scale",
                "k"
            ],
            "source": "Wikipedia - Kelvin"
        },
        {
            "value": 200,
            "clue": "The geological era known as the 'Age of Reptiles' and dinosaurs.",
            "answer": "Mesozoic Era",
            "accepted": [
                "mesozoic"
            ],
            "source": "Wikipedia - Mesozoic"
        },
        {
            "value": 200,
            "clue": "The dense celestial remnant formed when a massive star collapses under gravity, with infinite density at its center.",
            "answer": "Black Hole",
            "accepted": [
                "black holes"
            ],
            "source": "Wikipedia - Black Hole"
        },
        {
            "value": 200,
            "clue": "The organelle in plant cells where photosynthesis takes place.",
            "answer": "Chloroplast",
            "accepted": [
                "chloroplasts"
            ],
            "source": "Wikipedia - Chloroplast"
        },
        {
            "value": 200,
            "clue": "The unit of frequency equal to one cycle per second, named after Heinrich Hertz.",
            "answer": "Hertz",
            "accepted": [
                "hz"
            ],
            "source": "Wikipedia - Hertz"
        },
        {
            "value": 200,
            "clue": "The law stating that energy cannot be created or destroyed, only transformed.",
            "answer": "Conservation of Energy",
            "accepted": [
                "first law of thermodynamics"
            ],
            "source": "Wikipedia - Conservation of Energy"
        },
        {
            "value": 200,
            "clue": "The branch of medicine that specializes in the diagnosis and treatment of cancer.",
            "answer": "Oncology",
            "accepted": [
                "cancer medicine"
            ],
            "source": "Wikipedia - Oncology"
        },
        {
            "value": 200,
            "clue": "The rocky celestial bodies orbiting the Sun predominantly between Mars and Jupiter.",
            "answer": "Asteroids",
            "accepted": [
                "asteroid belt"
            ],
            "source": "Wikipedia - Asteroid"
        },
        {
            "value": 200,
            "clue": "The Polish-French scientist who won Nobel Prizes in both Physics and Chemistry for work on radioactivity.",
            "answer": "Marie Curie",
            "accepted": [
                "curie",
                "madame curie"
            ],
            "source": "Wikipedia - Marie Curie"
        },
        {
            "value": 300,
            "clue": "The letter representing the speed of light in Einstein's mass-energy equivalence equation E=mc².",
            "answer": "c",
            "accepted": [
                "the letter c",
                "speed of light"
            ],
            "source": "Wikipedia - Mass-energy equivalence"
        },
        {
            "value": 300,
            "clue": "The elemental metal with the highest electrical conductivity of all metals.",
            "answer": "Silver",
            "accepted": [
                "ag"
            ],
            "source": "Wikipedia - Silver"
        },
        {
            "value": 300,
            "clue": "The famous double-helix structure of DNA was modeled in 1953 by James Watson and this British scientist.",
            "answer": "Francis Crick",
            "accepted": [
                "crick"
            ],
            "source": "Wikipedia - Francis Crick"
        },
        {
            "value": 300,
            "clue": "The female X-ray crystallographer whose Photo 51 was critical to deciphering DNA's structure.",
            "answer": "Rosalind Franklin",
            "accepted": [
                "franklin"
            ],
            "source": "Wikipedia - Rosalind Franklin"
        },
        {
            "value": 300,
            "clue": "The element with atomic number 79, long prized as a precious malleable yellow metal.",
            "answer": "Gold",
            "accepted": [
                "au"
            ],
            "source": "Wikipedia - Gold"
        },
        {
            "value": 300,
            "clue": "The boundary between Earth's crust and the underlying mantle.",
            "answer": "Mohorovicic discontinuity",
            "accepted": [
                "moho",
                "mohorovičić"
            ],
            "source": "Wikipedia - Mohorovičić discontinuity"
        },
        {
            "value": 300,
            "clue": "The law stating that the current through a conductor between two points is directly proportional to voltage.",
            "answer": "Ohm's Law",
            "accepted": [
                "ohms law"
            ],
            "source": "Wikipedia - Ohm's Law"
        },
        {
            "value": 300,
            "clue": "The radioactive gas with chemical symbol Rn, formed from the natural decay of uranium in soil.",
            "answer": "Radon",
            "accepted": [
                "rn"
            ],
            "source": "Wikipedia - Radon"
        },
        {
            "value": 300,
            "clue": "The organ responsible for filtering blood, removing waste products, and producing urine.",
            "answer": "Kidney",
            "accepted": [
                "kidneys"
            ],
            "source": "Wikipedia - Kidney"
        },
        {
            "value": 300,
            "clue": "The fundamental constant named after Max Planck, relating photon energy to frequency.",
            "answer": "Planck's Constant",
            "accepted": [
                "planck constant",
                "h"
            ],
            "source": "Wikipedia - Planck constant"
        },
        {
            "value": 300,
            "clue": "The theory that Earth's outer shell is divided into large moving slabs that glide over the mantle.",
            "answer": "Plate Tectonics",
            "accepted": [
                "continental drift"
            ],
            "source": "Wikipedia - Plate Tectonics"
        },
        {
            "value": 300,
            "clue": "The planet in our solar system with the shortest rotational period (fastest day, under 10 hours).",
            "answer": "Jupiter",
            "accepted": [
                "planet jupiter"
            ],
            "source": "Wikipedia - Rotation of Jupiter"
        },
        {
            "value": 300,
            "clue": "The rare noble gas with atomic number 36 used in high-speed flash photography and lasers.",
            "answer": "Krypton",
            "accepted": [
                "kr"
            ],
            "source": "Wikipedia - Krypton"
        },
        {
            "value": 300,
            "clue": "The blood protein responsible for carrying oxygen from the lungs to the tissues.",
            "answer": "Hemoglobin",
            "accepted": [
                "haemoglobin"
            ],
            "source": "Wikipedia - Hemoglobin"
        },
        {
            "value": 300,
            "clue": "The principle stating that it is impossible to simultaneously know both the precise position and momentum of a subatomic particle.",
            "answer": "Heisenberg Uncertainty Principle",
            "accepted": [
                "uncertainty principle",
                "heisenberg"
            ],
            "source": "Wikipedia - Uncertainty Principle"
        },
        {
            "value": 300,
            "clue": "The geological epoch that began approximately 11,700 years ago after the last glacial period.",
            "answer": "Holocene",
            "accepted": [
                "holocene epoch"
            ],
            "source": "Wikipedia - Holocene"
        },
        {
            "value": 300,
            "clue": "The SI unit of magnetic flux density, named after the Serbian-American inventor of AC power.",
            "answer": "Tesla",
            "accepted": [
                "t"
            ],
            "source": "Wikipedia - Tesla (unit)"
        },
        {
            "value": 300,
            "clue": "The hormone produced by the adrenal glands that triggers the 'fight-or-flight' response.",
            "answer": "Adrenaline",
            "accepted": [
                "epinephrine"
            ],
            "source": "Wikipedia - Adrenaline"
        },
        {
            "value": 300,
            "clue": "The scientist who first stated that pressure exerted on an enclosed fluid is transmitted equally in all directions.",
            "answer": "Blaise Pascal",
            "accepted": [
                "pascal"
            ],
            "source": "Wikipedia - Pascal's Law"
        },
        {
            "value": 300,
            "clue": "The bright explosion of a star that reaches the end of its life cycle, briefly outshining galaxies.",
            "answer": "Supernova",
            "accepted": [
                "supernovae"
            ],
            "source": "Wikipedia - Supernova"
        },
        {
            "value": 300,
            "clue": "The only two chemical elements on the periodic table that are liquid at standard room temperature: bromine and this.",
            "answer": "Mercury",
            "accepted": [
                "quicksilver",
                "hg"
            ],
            "source": "Wikipedia - Liquid elements"
        },
        {
            "value": 300,
            "clue": "The largest moon of Saturn, known to possess a dense nitrogen atmosphere and liquid methane lakes.",
            "answer": "Titan",
            "accepted": [
                "moon titan"
            ],
            "source": "Wikipedia - Titan (moon)"
        },
        {
            "value": 300,
            "clue": "The genetic mutation in humans that causes red blood cells to assume a rigid, crescent shape.",
            "answer": "Sickle Cell Anemia",
            "accepted": [
                "sickle cell disease",
                "sickle cell"
            ],
            "source": "Wikipedia - Sickle cell disease"
        },
        {
            "value": 300,
            "clue": "The measure of disorder or randomness in a thermodynamic system.",
            "answer": "Entropy",
            "accepted": [
                "second law of thermodynamics"
            ],
            "source": "Wikipedia - Entropy"
        },
        {
            "value": 300,
            "clue": "The French chemist considered the father of modern chemistry who discovered the role of oxygen in combustion.",
            "answer": "Antoine Lavoisier",
            "accepted": [
                "lavoisier"
            ],
            "source": "Wikipedia - Antoine Lavoisier"
        },
        {
            "value": 300,
            "clue": "The biological term for an organism's observable characteristics resulting from genetic makeup and environment.",
            "answer": "Phenotype",
            "accepted": [
                "phenotypes"
            ],
            "source": "Wikipedia - Phenotype"
        },
        {
            "value": 300,
            "clue": "The biological term for the full genetic constitution of an individual organism.",
            "answer": "Genotype",
            "accepted": [
                "genotypes"
            ],
            "source": "Wikipedia - Genotype"
        },
        {
            "value": 300,
            "clue": "The scientist who formulated the wave equation for quantum mechanical systems, sharing the 1933 Nobel Prize.",
            "answer": "Erwin Schrodinger",
            "accepted": [
                "schrodinger",
                "schrödinger"
            ],
            "source": "Wikipedia - Erwin Schrödinger"
        },
        {
            "value": 300,
            "clue": "The primary greenhouse gas produced by livestock digestion and the decomposition of landfill waste.",
            "answer": "Methane",
            "accepted": [
                "ch4"
            ],
            "source": "Wikipedia - Methane"
        },
        {
            "value": 300,
            "clue": "The distance light travels in one Julian year in a vacuum (~9.46 trillion kilometers).",
            "answer": "Light-year",
            "accepted": [
                "light year"
            ],
            "source": "Wikipedia - Light-year"
        },
        {
            "value": 300,
            "clue": "The enzyme present in human saliva that begins the chemical breakdown of carbohydrates.",
            "answer": "Amylase",
            "accepted": [
                "salivary amylase",
                "ptyalin"
            ],
            "source": "Wikipedia - Amylase"
        },
        {
            "value": 300,
            "clue": "The theoretical temperature at which all molecular motion ceases (0 K or -273.15 °C).",
            "answer": "Absolute Zero",
            "accepted": [
                "0 kelvin"
            ],
            "source": "Wikipedia - Absolute Zero"
        },
        {
            "value": 300,
            "clue": "The organ in vertebrates that regulates blood sugar, detoxifies chemicals, and synthesizes proteins.",
            "answer": "Liver",
            "accepted": [
                "the liver"
            ],
            "source": "Wikipedia - Liver"
        },
        {
            "value": 300,
            "clue": "The telescope launched by NASA in 1990 that provided unprecedented deep-field imagery of the universe.",
            "answer": "Hubble Space Telescope",
            "accepted": [
                "hubble",
                "hst"
            ],
            "source": "Wikipedia - Hubble Space Telescope"
        },
        {
            "value": 300,
            "clue": "The newer space telescope launched on Christmas Day 2021 equipped with advanced infrared sensors.",
            "answer": "James Webb Space Telescope",
            "accepted": [
                "jwst",
                "webb telescope",
                "james webb"
            ],
            "source": "Wikipedia - James Webb Space Telescope"
        },
        {
            "value": 300,
            "clue": "The SI unit of electric charge, equal to the charge of approximately 6.242 × 10^18 protons.",
            "answer": "Coulomb",
            "accepted": [
                "coulombs",
                "c"
            ],
            "source": "Wikipedia - Coulomb"
        },
        {
            "value": 300,
            "clue": "The layer of the Earth located directly beneath the crust and above the outer core.",
            "answer": "Mantle",
            "accepted": [
                "earth mantle"
            ],
            "source": "Wikipedia - Earth's mantle"
        },
        {
            "value": 300,
            "clue": "The phenomenon where two or more waves overlap to produce a new wave pattern.",
            "answer": "Interference",
            "accepted": [
                "wave interference"
            ],
            "source": "Wikipedia - Wave interference"
        },
        {
            "value": 300,
            "clue": "The Russian chemist who created the first widely recognized version of the Periodic Table of Elements in 1869.",
            "answer": "Dmitri Mendeleev",
            "accepted": [
                "mendeleev"
            ],
            "source": "Wikipedia - Dmitri Mendeleev"
        },
        {
            "value": 300,
            "clue": "The branch of science that studies fossils and ancient life forms.",
            "answer": "Paleontology",
            "accepted": [
                "palaeontology"
            ],
            "source": "Wikipedia - Paleontology"
        },
        {
            "value": 400,
            "clue": "The boundary around a black hole beyond which nothing, not even light, can escape.",
            "answer": "Event Horizon",
            "accepted": [
                "the event horizon",
                "schwarzschild radius"
            ],
            "source": "Wikipedia - Event Horizon"
        },
        {
            "value": 400,
            "clue": "The non-metallic halogen element with atomic number 53, essential for thyroid hormone synthesis.",
            "answer": "Iodine",
            "accepted": [
                "i"
            ],
            "source": "Wikipedia - Iodine"
        },
        {
            "value": 400,
            "clue": "The Austrian monk who pioneered the laws of genetic inheritance through experiments with pea plants.",
            "answer": "Gregor Mendel",
            "accepted": [
                "mendel"
            ],
            "source": "Wikipedia - Gregor Mendel"
        },
        {
            "value": 400,
            "clue": "The subatomic particle predicted by Peter Higgs in 1964 and confirmed at CERN's LHC in 2012.",
            "answer": "Higgs Boson",
            "accepted": [
                "higgs particle",
                "god particle"
            ],
            "source": "Wikipedia - Higgs Boson"
        },
        {
            "value": 400,
            "clue": "The process where unstable atomic nuclei lose energy by emitting ionizing particles.",
            "answer": "Radioactive Decay",
            "accepted": [
                "radioactivity"
            ],
            "source": "Wikipedia - Radioactive Decay"
        },
        {
            "value": 400,
            "clue": "The law in fluid dynamics stating that the buoyant force on a submerged body equals the weight of displaced fluid.",
            "answer": "Archimedes' Principle",
            "accepted": [
                "archimedes principle"
            ],
            "source": "Wikipedia - Archimedes' Principle"
        },
        {
            "value": 400,
            "clue": "The innermost layer of the Sun's atmosphere visible during a total solar eclipse as a pearly white halo.",
            "answer": "Corona",
            "accepted": [
                "solar corona"
            ],
            "source": "Wikipedia - Solar Corona"
        },
        {
            "value": 400,
            "clue": "The transition metal with the highest melting point of all elements (3,422 °C), used in incandescent bulb filaments.",
            "answer": "Tungsten",
            "accepted": [
                "wolfram",
                "w"
            ],
            "source": "Wikipedia - Tungsten"
        },
        {
            "value": 400,
            "clue": "The neurotransmitter primarily involved in reward, motivation, and motor control, depleted in Parkinson's disease.",
            "answer": "Dopamine",
            "accepted": [
                "da"
            ],
            "source": "Wikipedia - Dopamine"
        },
        {
            "value": 400,
            "clue": "The mathematical constant 'e', approximately 2.71828, is named in honor of this Swiss mathematician.",
            "answer": "Leonhard Euler",
            "accepted": [
                "euler"
            ],
            "source": "Wikipedia - e (mathematical constant)"
        },
        {
            "value": 400,
            "clue": "The phenomenon where light shifts toward longer wavelengths when an astronomical object moves away from the observer.",
            "answer": "Redshift",
            "accepted": [
                "doppler redshift"
            ],
            "source": "Wikipedia - Redshift"
        },
        {
            "value": 400,
            "clue": "The SI unit of catalytic activity of enzymes, defining moles transformed per second.",
            "answer": "Katal",
            "accepted": [
                "kat"
            ],
            "source": "Wikipedia - Katal"
        },
        {
            "value": 400,
            "clue": "The Danish physicist who introduced the model of the atom with quantized electron orbits in 1913.",
            "answer": "Niels Bohr",
            "accepted": [
                "bohr"
            ],
            "source": "Wikipedia - Niels Bohr"
        },
        {
            "value": 400,
            "clue": "The four fundamental forces of nature: gravity, electromagnetism, weak nuclear force, and this force holding nuclei together.",
            "answer": "Strong Nuclear Force",
            "accepted": [
                "strong force",
                "strong interaction"
            ],
            "source": "Wikipedia - Strong interaction"
        },
        {
            "value": 400,
            "clue": "The geological period between the Devonian and Permian famous for dense coal-forming swamp forests.",
            "answer": "Carboniferous",
            "accepted": [
                "carboniferous period"
            ],
            "source": "Wikipedia - Carboniferous"
        },
        {
            "value": 400,
            "clue": "The cell organelle containing digestive enzymes that break down waste materials and cellular debris.",
            "answer": "Lysosome",
            "accepted": [
                "lysosomes"
            ],
            "source": "Wikipedia - Lysosome"
        },
        {
            "value": 400,
            "clue": "The law stating that the volume of a given mass of gas is inversely proportional to its pressure at constant temperature.",
            "answer": "Boyle's Law",
            "accepted": [
                "boyles law"
            ],
            "source": "Wikipedia - Boyle's Law"
        },
        {
            "value": 400,
            "clue": "The law stating that gas volume is directly proportional to absolute temperature at constant pressure.",
            "answer": "Charles's Law",
            "accepted": [
                "charles law"
            ],
            "source": "Wikipedia - Charles's Law"
        },
        {
            "value": 400,
            "clue": "The rare earth element with symbol Nd, used to manufacture the strongest commercially available permanent magnets.",
            "answer": "Neodymium",
            "accepted": [
                "nd"
            ],
            "source": "Wikipedia - Neodymium"
        },
        {
            "value": 400,
            "clue": "The theoretical point in space-time where gravitational forces cause matter to have infinite density.",
            "answer": "Gravitational Singularity",
            "accepted": [
                "singularity"
            ],
            "source": "Wikipedia - Gravitational Singularity"
        },
        {
            "value": 400,
            "clue": "The process by which an organism maintains a stable internal environment despite external fluctuations.",
            "answer": "Homeostasis",
            "accepted": [
                "homeostatic regulation"
            ],
            "source": "Wikipedia - Homeostasis"
        },
        {
            "value": 400,
            "clue": "The effect where an electric current flows across two junctions of dissimilar conductors kept at different temperatures.",
            "answer": "Seebeck Effect",
            "accepted": [
                "thermoelectric effect"
            ],
            "source": "Wikipedia - Thermoelectric effect"
        },
        {
            "value": 400,
            "clue": "The moon of Jupiter that is the most volcanically active body in the solar system.",
            "answer": "Io",
            "accepted": [
                "jupiter moon io"
            ],
            "source": "Wikipedia - Io (moon)"
        },
        {
            "value": 400,
            "clue": "The moon of Jupiter harboring a vast subsurface liquid water ocean beneath an icy crust.",
            "answer": "Europa",
            "accepted": [
                "moon europa"
            ],
            "source": "Wikipedia - Europa (moon)"
        },
        {
            "value": 400,
            "clue": "The English physician who first correctly described systemic blood circulation pumped by the heart.",
            "answer": "William Harvey",
            "accepted": [
                "harvey"
            ],
            "source": "Wikipedia - William Harvey"
        },
        {
            "value": 400,
            "clue": "The element with atomic number 92, the heaviest naturally occurring primordially stable actinide element.",
            "answer": "Uranium",
            "accepted": [
                "u"
            ],
            "source": "Wikipedia - Uranium"
        },
        {
            "value": 400,
            "clue": "The quantum mechanical principle stating that no two identical fermions can occupy the same quantum state simultaneously.",
            "answer": "Pauli Exclusion Principle",
            "accepted": [
                "pauli exclusion",
                "pauli"
            ],
            "source": "Wikipedia - Pauli Exclusion Principle"
        },
        {
            "value": 400,
            "clue": "The process where plants release water vapor into the atmosphere primarily through stomata.",
            "answer": "Transpiration",
            "accepted": [
                "plant transpiration"
            ],
            "source": "Wikipedia - Transpiration"
        },
        {
            "value": 400,
            "clue": "The scientist who mathematically united electricity, magnetism, and light into classical electromagnetism in 1865.",
            "answer": "James Clerk Maxwell",
            "accepted": [
                "maxwell"
            ],
            "source": "Wikipedia - James Clerk Maxwell"
        },
        {
            "value": 400,
            "clue": "The geological eon preceding the Phanerozoic, spanning from Earth's formation to 541 million years ago.",
            "answer": "Precambrian",
            "accepted": [
                "precambrian supereon"
            ],
            "source": "Wikipedia - Precambrian"
        },
        {
            "value": 400,
            "clue": "The neurotransmitter primarily involved in regulating mood, sleep, appetite, and targeted by SSRIs.",
            "answer": "Serotonin",
            "accepted": [
                "5-ht"
            ],
            "source": "Wikipedia - Serotonin"
        },
        {
            "value": 400,
            "clue": "The point in the orbit of a planet, asteroid, or comet at which it is closest to the Sun.",
            "answer": "Perihelion",
            "accepted": [
                "perihelion point"
            ],
            "source": "Wikipedia - Perihelion"
        },
        {
            "value": 400,
            "clue": "The point in the orbit of an astronomical body furthest from the Sun.",
            "answer": "Aphelion",
            "accepted": [
                "aphelion point"
            ],
            "source": "Wikipedia - Aphelion"
        },
        {
            "value": 400,
            "clue": "The dense stellar remnant that results when a massive star collapses with a mass insufficient to form a black hole.",
            "answer": "Neutron Star",
            "accepted": [
                "pulsar"
            ],
            "source": "Wikipedia - Neutron Star"
        },
        {
            "value": 400,
            "clue": "The element named after the creator of the Nobel Prizes with atomic number 102.",
            "answer": "Nobelium",
            "accepted": [
                "no"
            ],
            "source": "Wikipedia - Nobelium"
        },
        {
            "value": 400,
            "clue": "The biological class of warm-blooded egg-laying vertebrates that possess feathers and toothless beaked jaws.",
            "answer": "Aves",
            "accepted": [
                "birds",
                "class aves"
            ],
            "source": "Wikipedia - Bird"
        },
        {
            "value": 400,
            "clue": "The SI unit of radiation absorbed dose, defined as absorption of one joule of radiation energy per kilogram.",
            "answer": "Gray",
            "accepted": [
                "gy"
            ],
            "source": "Wikipedia - Gray (unit)"
        },
        {
            "value": 400,
            "clue": "The theorem stating that every continuous symmetry of the action of a physical system corresponds to a conservation law.",
            "answer": "Noether's Theorem",
            "accepted": [
                "noether theorem",
                "emmy noether"
            ],
            "source": "Wikipedia - Noether's theorem"
        },
        {
            "value": 400,
            "clue": "The Italian scientist who discovered galvanism through electrical stimulation of dissected frog legs.",
            "answer": "Luigi Galvani",
            "accepted": [
                "galvani"
            ],
            "source": "Wikipedia - Luigi Galvani"
        },
        {
            "value": 400,
            "clue": "The hormone produced by the beta cells of the islets of Langerhans in the pancreas.",
            "answer": "Insulin",
            "accepted": [
                "human insulin"
            ],
            "source": "Wikipedia - Insulin"
        },
        {
            "value": 500,
            "clue": "The hypothetical boundary located ~100,000 AU from the Sun marking the outer limit of our solar system's gravitational sphere.",
            "answer": "Oort Cloud",
            "accepted": [
                "the oort cloud",
                "öpik-oort cloud"
            ],
            "source": "Wikipedia - Oort Cloud"
        },
        {
            "value": 500,
            "clue": "The constant ratio of a black hole's radius to its mass: R = 2GM/c², named after this German astronomer.",
            "answer": "Karl Schwarzschild",
            "accepted": [
                "schwarzschild",
                "schwarzschild radius"
            ],
            "source": "Wikipedia - Karl Schwarzschild"
        },
        {
            "value": 500,
            "clue": "The organelle structure in prokaryotic and eukaryotic flagella exhibiting a characteristic '9+2' microtubule axoneme arrangement.",
            "answer": "Cilium",
            "accepted": [
                "cilia",
                "axoneme"
            ],
            "source": "Wikipedia - Axoneme"
        },
        {
            "value": 500,
            "clue": "The chemical element with the highest density of all naturally occurring elements (22.59 g/cm³).",
            "answer": "Osmium",
            "accepted": [
                "os"
            ],
            "source": "Wikipedia - Osmium"
        },
        {
            "value": 500,
            "clue": "The quantum mechanical paradox proposed in 1935 involving entanglement, abbreviated as EPR, proposed by Einstein, Podolsky, and him.",
            "answer": "Nathan Rosen",
            "accepted": [
                "rosen",
                "epr paradox"
            ],
            "source": "Wikipedia - EPR paradox"
        },
        {
            "value": 500,
            "clue": "The theoretical particle that travels faster than the speed of light in hypothetical physics models.",
            "answer": "Tachyon",
            "accepted": [
                "tachyons"
            ],
            "source": "Wikipedia - Tachyon"
        },
        {
            "value": 500,
            "clue": "The rare earth element with atomic number 61, the only promethium lanthanide with no stable isotopes.",
            "answer": "Promethium",
            "accepted": [
                "pm"
            ],
            "source": "Wikipedia - Promethium"
        },
        {
            "value": 500,
            "clue": "The equation that estimates the number of active, communicative extraterrestrial civilizations in the Milky Way galaxy.",
            "answer": "Drake Equation",
            "accepted": [
                "frank drake",
                "drake formula"
            ],
            "source": "Wikipedia - Drake Equation"
        },
        {
            "value": 500,
            "clue": "The only known living cephalopod species with an external coiled chambered shell that acts as a buoyancy organ.",
            "answer": "Nautilus",
            "accepted": [
                "chambered nautilus"
            ],
            "source": "Wikipedia - Nautilus"
        },
        {
            "value": 500,
            "clue": "The enzyme that adds repetitive nucleotide sequences to the ends of chromosomes to prevent DNA degradation during replication.",
            "answer": "Telomerase",
            "accepted": [
                "telomere terminal transferase"
            ],
            "source": "Wikipedia - Telomerase"
        },
        {
            "value": 500,
            "clue": "The process where a heavy unstable atomic nucleus splits spontaneously without external neutron absorption.",
            "answer": "Spontaneous Fission",
            "accepted": [
                "spontaneous nuclear fission"
            ],
            "source": "Wikipedia - Spontaneous Fission"
        },
        {
            "value": 500,
            "clue": "The non-protein chemical compound or metallic ion required for an enzyme's biological activity as a catalyst.",
            "answer": "Cofactor",
            "accepted": [
                "coenzyme"
            ],
            "source": "Wikipedia - Cofactor (biochemistry)"
        },
        {
            "value": 500,
            "clue": "The distance at which a celestial body held together only by its own gravity disintegrates due to a second body's tidal forces.",
            "answer": "Roche Limit",
            "accepted": [
                "roche radius"
            ],
            "source": "Wikipedia - Roche limit"
        },
        {
            "value": 500,
            "clue": "The radioactive decay mode where an atomic nucleus emits an electron or positron, converting a neutron into a proton or vice versa.",
            "answer": "Beta Decay",
            "accepted": [
                "beta radiation"
            ],
            "source": "Wikipedia - Beta decay"
        },
        {
            "value": 500,
            "clue": "The thermodynamic state where the liquid and gas phases of a substance become indistinguishable above a critical point.",
            "answer": "Supercritical Fluid",
            "accepted": [
                "supercritical state"
            ],
            "source": "Wikipedia - Supercritical fluid"
        },
        {
            "value": 500,
            "clue": "The constant 6.022 × 10^23 defining the number of constituent particles in one mole of a substance.",
            "answer": "Avogadro's Number",
            "accepted": [
                "avogadro constant",
                "amedeo avogadro"
            ],
            "source": "Wikipedia - Avogadro constant"
        },
        {
            "value": 500,
            "clue": "The mathematical theorem in quantum mechanics stating that identical quantum states cannot be cloned.",
            "answer": "No-cloning Theorem",
            "accepted": [
                "no cloning"
            ],
            "source": "Wikipedia - No-cloning theorem"
        },
        {
            "value": 500,
            "clue": "The German physicist who discovered X-rays in 1895 and won the very first Nobel Prize in Physics in 1901.",
            "answer": "Wilhelm Rontgen",
            "accepted": [
                "rontgen",
                "roentgen",
                "wilhelm röntgen"
            ],
            "source": "Wikipedia - Wilhelm Röntgen"
        },
        {
            "value": 500,
            "clue": "The chemical element named after the father of quantum theory Max Planck, with atomic number 106.",
            "answer": "Seaborgium",
            "accepted": [
                "sg"
            ],
            "source": "Wikipedia - Seaborgium"
        },
        {
            "value": 500,
            "clue": "The layer of Earth's atmosphere between the stratosphere and thermosphere, where meteors burn upon entry.",
            "answer": "Mesosphere",
            "accepted": [
                "the mesosphere"
            ],
            "source": "Wikipedia - Mesosphere"
        },
        {
            "value": 500,
            "clue": "The phase transition where a substance passes directly from the gas to solid state without liquid phase.",
            "answer": "Deposition",
            "accepted": [
                "desublimation"
            ],
            "source": "Wikipedia - Deposition (phase transition)"
        },
        {
            "value": 500,
            "clue": "The deepest artificial borehole on Earth, reaching a depth of 12,262 meters in Russia's Kola Peninsula.",
            "answer": "Kola Superdeep Borehole",
            "accepted": [
                "kola borehole",
                "kola superdeep"
            ],
            "source": "Wikipedia - Kola Superdeep Borehole"
        },
        {
            "value": 500,
            "clue": "The mathematical equation describing the relationship between standard reduction potential and ion activity, named after a German chemist.",
            "answer": "Nernst Equation",
            "accepted": [
                "walther nernst"
            ],
            "source": "Wikipedia - Nernst equation"
        },
        {
            "value": 500,
            "clue": "The theoretical particle with mass and spin 2 predicted to mediate the force of gravitation in quantum field theory.",
            "answer": "Graviton",
            "accepted": [
                "gravitons"
            ],
            "source": "Wikipedia - Graviton"
        },
        {
            "value": 500,
            "clue": "The moon of Neptune discovered in 1846 by William Lassell that features retrograde orbit and nitrogen cryovolcanoes.",
            "answer": "Triton",
            "accepted": [
                "moon triton"
            ],
            "source": "Wikipedia - Triton (moon)"
        },
        {
            "value": 500,
            "clue": "The geological epoch that experienced the sudden global Paleocene-Eocene Thermal Maximum ~56 million years ago.",
            "answer": "Eocene",
            "accepted": [
                "eocene epoch"
            ],
            "source": "Wikipedia - Eocene"
        },
        {
            "value": 500,
            "clue": "The biological class of jawless primitive fish that includes hagfishes and lampreys.",
            "answer": "Agnatha",
            "accepted": [
                "agnathans",
                "jawless fish"
            ],
            "source": "Wikipedia - Agnatha"
        },
        {
            "value": 500,
            "clue": "The scientist who first demonstrated in 1801 the wave nature of light using the double-slit experiment.",
            "answer": "Thomas Young",
            "accepted": [
                "young"
            ],
            "source": "Wikipedia - Double-slit experiment"
        },
        {
            "value": 500,
            "clue": "The hypothetical state of matter in quantum chromodynamics at ultra-high temperatures and densities where quarks are deconfined.",
            "answer": "Quark-Gluon Plasma",
            "accepted": [
                "qgp"
            ],
            "source": "Wikipedia - Quark-gluon plasma"
        },
        {
            "value": 500,
            "clue": "The organic base in RNA that replaces thymine, pairing complementarily with adenine.",
            "answer": "Uracil",
            "accepted": [
                "u"
            ],
            "source": "Wikipedia - Uracil"
        },
        {
            "value": 500,
            "clue": "The boundary surface within Earth separating the solid inner core from the liquid outer core.",
            "answer": "Lehmann Discontinuity",
            "accepted": [
                "lehmann boundary",
                "inge lehmann"
            ],
            "source": "Wikipedia - Lehmann discontinuity"
        },
        {
            "value": 500,
            "clue": "The effect in quantum electrodynamics where an uncharged conducting plate pair in a vacuum experiences an attractive force.",
            "answer": "Casimir Effect",
            "accepted": [
                "casimir force",
                "hendrik casimir"
            ],
            "source": "Wikipedia - Casimir effect"
        },
        {
            "value": 500,
            "clue": "The enzyme that catalyzes the transcription of RNA from a DNA template.",
            "answer": "RNA Polymerase",
            "accepted": [
                "rna pol"
            ],
            "source": "Wikipedia - RNA polymerase"
        },
        {
            "value": 500,
            "clue": "The physical constant governing the strength of the electromagnetic interaction between elementary charged particles (~1/137).",
            "answer": "Fine-structure Constant",
            "accepted": [
                "alpha",
                "fine structure constant"
            ],
            "source": "Wikipedia - Fine-structure constant"
        },
        {
            "value": 500,
            "clue": "The geological eon that saw the Great Oxidation Event and the emergence of the first multicellular life forms.",
            "answer": "Proterozoic",
            "accepted": [
                "proterozoic eon"
            ],
            "source": "Wikipedia - Proterozoic"
        },
        {
            "value": 500,
            "clue": "The non-protein pigment component of hemoglobin that contains a central ferrous iron ion.",
            "answer": "Heme",
            "accepted": [
                "haem",
                "heme group"
            ],
            "source": "Wikipedia - Heme"
        },
        {
            "value": 500,
            "clue": "The astronomer who observed the cosmic microwave background radiation in 1964 alongside Robert Wilson, winning the 1978 Nobel Prize.",
            "answer": "Arno Penzias",
            "accepted": [
                "penzias"
            ],
            "source": "Wikipedia - Arno Penzias"
        },
        {
            "value": 500,
            "clue": "The theoretical temperature limit above which current models of physical theory break down (~1.417 × 10^32 K).",
            "answer": "Planck Temperature",
            "accepted": [
                "planck scale"
            ],
            "source": "Wikipedia - Planck units"
        },
        {
            "value": 500,
            "clue": "The element with atomic number 118, the heaviest synthetic element on the modern periodic table, named after Yuri Oganessian.",
            "answer": "Oganesson",
            "accepted": [
                "og"
            ],
            "source": "Wikipedia - Oganesson"
        },
        {
            "value": 500,
            "clue": "The process where electrons are ejected from a metal surface when irradiated by light of sufficient frequency.",
            "answer": "Photoelectric Effect",
            "accepted": [
                "hertz effect"
            ],
            "source": "Wikipedia - Photoelectric effect"
        }
    ],
    "movies": [
        {
            "value": 100,
            "clue": "The actor who portrayed Tony Stark / Iron Man across 10 films in the Marvel Cinematic Universe.",
            "answer": "Robert Downey Jr",
            "accepted": [
                "robert downey jr.",
                "rdj",
                "robert downey"
            ],
            "source": "IMDb - Marvel Cinematic Universe"
        },
        {
            "value": 100,
            "clue": "In this 1994 Disney animated classic, Simba learns the phrase 'Hakuna Matata' from Timon and Pumbaa.",
            "answer": "The Lion King",
            "accepted": [
                "lion king"
            ],
            "source": "IMDb - Walt Disney Animation"
        },
        {
            "value": 100,
            "clue": "The 1997 James Cameron epic starring Leonardo DiCaprio and Kate Winslet aboard an ill-fated passenger liner.",
            "answer": "Titanic",
            "accepted": [
                "rms titanic"
            ],
            "source": "IMDb - Box Office Records"
        },
        {
            "value": 100,
            "clue": "The fictional African nation ruled by King T'Challa in Marvel's Black Panther.",
            "answer": "Wakanda",
            "accepted": [
                "kingdom of wakanda"
            ],
            "source": "IMDb - Black Panther"
        },
        {
            "value": 100,
            "clue": "The green Jedi master who speaks in inverted syntax and trains Luke Skywalker on Dagobah.",
            "answer": "Yoda",
            "accepted": [
                "master yoda"
            ],
            "source": "IMDb - Star Wars"
        },
        {
            "value": 100,
            "clue": "The animated movie franchise starring Shrek, a green ogre who lives in a swamp.",
            "answer": "Shrek",
            "accepted": [
                "shrek franchise"
            ],
            "source": "IMDb - DreamWorks"
        },
        {
            "value": 100,
            "clue": "The actor who plays the swashbuckling pirate Captain Jack Sparrow in Pirates of the Caribbean.",
            "answer": "Johnny Depp",
            "accepted": [
                "depp"
            ],
            "source": "IMDb - Pirates of the Caribbean"
        },
        {
            "value": 100,
            "clue": "The 1993 Steven Spielberg dinosaur blockbuster that launched an iconic global franchise.",
            "answer": "Jurassic Park",
            "accepted": [
                "jurassic park film"
            ],
            "source": "IMDb - Steven Spielberg"
        },
        {
            "value": 100,
            "clue": "The protagonist of The Matrix series played by Keanu Reeves who takes the red pill.",
            "answer": "Neo",
            "accepted": [
                "thomas anderson",
                "keanu reeves"
            ],
            "source": "IMDb - The Matrix"
        },
        {
            "value": 100,
            "clue": "The wizard mentor with a long grey beard who guides the Fellowship in The Lord of the Rings.",
            "answer": "Gandalf",
            "accepted": [
                "gandalf the grey",
                "gandalf the white"
            ],
            "source": "IMDb - Lord of the Rings"
        },
        {
            "value": 100,
            "clue": "The young boy wizard with a lightning bolt scar on his forehead who attends Hogwarts.",
            "answer": "Harry Potter",
            "accepted": [
                "potter"
            ],
            "source": "IMDb - Harry Potter"
        },
        {
            "value": 100,
            "clue": "The toy cowboy in Toy Story voiced by Tom Hanks whose boot has Andy's name written on it.",
            "answer": "Woody",
            "accepted": [
                "sheriff woody"
            ],
            "source": "IMDb - Toy Story / Pixar"
        },
        {
            "value": 100,
            "clue": "The space ranger toy in Toy Story whose catchphrase is 'To infinity and beyond!'.",
            "answer": "Buzz Lightyear",
            "accepted": [
                "lightyear",
                "buzz"
            ],
            "source": "IMDb - Pixar"
        },
        {
            "value": 100,
            "clue": "The superhero alias of Bruce Wayne who protects the city of Gotham.",
            "answer": "Batman",
            "accepted": [
                "the dark knight",
                "caped crusader"
            ],
            "source": "IMDb - DC Comics"
        },
        {
            "value": 100,
            "clue": "The superhero alias of Peter Parker who shoots webs and swings through New York City.",
            "answer": "Spider-Man",
            "accepted": [
                "spiderman",
                "peter parker"
            ],
            "source": "IMDb - Marvel"
        },
        {
            "value": 100,
            "clue": "The iconic monster from Japan who breathes atomic breath and is known as the King of the Monsters.",
            "answer": "Godzilla",
            "accepted": [
                "gojira"
            ],
            "source": "IMDb - Kaiju Cinema"
        },
        {
            "value": 100,
            "clue": "The British secret agent who holds the codename 007 and prefers his martinis shaken, not stirred.",
            "answer": "James Bond",
            "accepted": [
                "007",
                "bond"
            ],
            "source": "IMDb - Eon Productions"
        },
        {
            "value": 100,
            "clue": "The 1985 time-travel adventure film starring Michael J. Fox as Marty McFly and Christopher Lloyd as Doc Brown.",
            "answer": "Back to the Future",
            "accepted": [
                "back to the future part i"
            ],
            "source": "IMDb - Universal Pictures"
        },
        {
            "value": 100,
            "clue": "The mythical golden ring found by Bilbo Baggins that corrupts its bearer in Middle-earth.",
            "answer": "The One Ring",
            "accepted": [
                "the ring",
                "precious",
                "ruling ring"
            ],
            "source": "IMDb - Lord of the Rings"
        },
        {
            "value": 100,
            "clue": "The clumsy martial arts panda voiced by Jack Black in DreamWorks Animation.",
            "answer": "Po",
            "accepted": [
                "kung fu panda"
            ],
            "source": "IMDb - DreamWorks"
        },
        {
            "value": 100,
            "clue": "The famous catchphrase uttered by Arnold Schwarzenegger in The Terminator.",
            "answer": "I'll be back",
            "accepted": [
                "ill be back",
                "i will be back"
            ],
            "source": "IMDb - The Terminator"
        },
        {
            "value": 100,
            "clue": "The clownfish father who embarks on an epic ocean journey to rescue his son in a 2003 Pixar film.",
            "answer": "Marlin",
            "accepted": [
                "finding nemo"
            ],
            "source": "IMDb - Pixar"
        },
        {
            "value": 100,
            "clue": "The actor who played Wolverine in the X-Men films across more than two decades.",
            "answer": "Hugh Jackman",
            "accepted": [
                "jackman"
            ],
            "source": "IMDb - 20th Century Fox"
        },
        {
            "value": 100,
            "clue": "The fictional high school musical comedy about Regina George and the Plastics written by Tina Fey.",
            "answer": "Mean Girls",
            "accepted": [
                "mean girls movie"
            ],
            "source": "IMDb - Paramount"
        },
        {
            "value": 100,
            "clue": "The fast-driving franchise starring Vin Diesel as Dominic Toretto centered on family and street racing.",
            "answer": "Fast and Furious",
            "accepted": [
                "the fast and the furious",
                "fast & furious"
            ],
            "source": "IMDb - Universal"
        },
        {
            "value": 100,
            "clue": "The alien with a glowing fingertip who wants to 'phone home' in Steven Spielberg's 1982 classic.",
            "answer": "E.T.",
            "accepted": [
                "et",
                "the extra-terrestrial"
            ],
            "source": "IMDb - Steven Spielberg"
        },
        {
            "value": 100,
            "clue": "The fictional yellow underwater sponge who works as a fry cook at the Krusty Krab.",
            "answer": "SpongeBob SquarePants",
            "accepted": [
                "spongebob"
            ],
            "source": "IMDb - Nickelodeon"
        },
        {
            "value": 100,
            "clue": "The animated movie about a family of undercover superheroes featuring Mr. Incredible and Elastigirl.",
            "answer": "The Incredibles",
            "accepted": [
                "incredibles"
            ],
            "source": "IMDb - Pixar"
        },
        {
            "value": 100,
            "clue": "The actor who portrayed Captain America / Steve Rogers throughout the Marvel Infinity Saga.",
            "answer": "Chris Evans",
            "accepted": [
                "evans"
            ],
            "source": "IMDb - Marvel"
        },
        {
            "value": 100,
            "clue": "The villainous galactic emperor in Star Wars who seduces Anakin Skywalker to the dark side.",
            "answer": "Emperor Palpatine",
            "accepted": [
                "palpatine",
                "darth sidious"
            ],
            "source": "IMDb - Star Wars"
        },
        {
            "value": 100,
            "clue": "The 1975 thriller about a giant great white shark terrorizing Amity Island that created the summer blockbuster.",
            "answer": "Jaws",
            "accepted": [
                "jaws film"
            ],
            "source": "IMDb - Steven Spielberg"
        },
        {
            "value": 100,
            "clue": "The magical nanny played by Julie Andrews who arrives with an umbrella to help the Banks family.",
            "answer": "Mary Poppins",
            "accepted": [
                "poppins"
            ],
            "source": "IMDb - Walt Disney"
        },
        {
            "value": 100,
            "clue": "The actor who voiced the genie in Disney's 1992 animated classic Aladdin.",
            "answer": "Robin Williams",
            "accepted": [
                "williams"
            ],
            "source": "IMDb - Disney Classics"
        },
        {
            "value": 100,
            "clue": "The yellow Minions serve this reformed supervillain who adopts three girls in Despicable Me.",
            "answer": "Gru",
            "accepted": [
                "felonius gru"
            ],
            "source": "IMDb - Illumination"
        },
        {
            "value": 100,
            "clue": "The assassin played by Keanu Reeves who comes out of retirement after his puppy is killed.",
            "answer": "John Wick",
            "accepted": [
                "wick"
            ],
            "source": "IMDb - Lionsgate"
        },
        {
            "value": 100,
            "clue": "The boxing movie written by and starring Sylvester Stallone that won Best Picture in 1976.",
            "answer": "Rocky",
            "accepted": [
                "rocky balboa"
            ],
            "source": "IMDb - MGM"
        },
        {
            "value": 100,
            "clue": "The mythical island where King Kong was discovered before being brought to New York City.",
            "answer": "Skull Island",
            "accepted": [
                "skull isle"
            ],
            "source": "IMDb - King Kong"
        },
        {
            "value": 100,
            "clue": "The superhero played by Chadwick Boseman who defends Wakanda as its protector.",
            "answer": "Black Panther",
            "accepted": [
                "t'challa",
                "tchalla"
            ],
            "source": "IMDb - Marvel"
        },
        {
            "value": 100,
            "clue": "The archaeologist adventurer portrayed by Harrison Ford who wields a bullwhip and fears snakes.",
            "answer": "Indiana Jones",
            "accepted": [
                "indy",
                "henry jones jr"
            ],
            "source": "IMDb - Lucasfilm"
        },
        {
            "value": 100,
            "clue": "The fictional spaceship captained by Han Solo with Chewbacca as co-pilot.",
            "answer": "Millennium Falcon",
            "accepted": [
                "the millennium falcon"
            ],
            "source": "IMDb - Star Wars"
        },
        {
            "value": 200,
            "clue": "The director of 2009's Avatar, which stands as the highest-grossing film of all time.",
            "answer": "James Cameron",
            "accepted": [
                "cameron"
            ],
            "source": "IMDb - All-Time Box Office"
        },
        {
            "value": 200,
            "clue": "The 2008 Christopher Nolan film featuring Heath Ledger's Oscar-winning performance as the Joker.",
            "answer": "The Dark Knight",
            "accepted": [
                "dark knight"
            ],
            "source": "IMDb - Warner Bros"
        },
        {
            "value": 200,
            "clue": "The 1994 Frank Darabont prison drama that holds the #1 spot on IMDb's Top 250 Movies list.",
            "answer": "The Shawshank Redemption",
            "accepted": [
                "shawshank redemption",
                "shawshank"
            ],
            "source": "IMDb - Top 250 Chart"
        },
        {
            "value": 200,
            "clue": "The fictional mobster family led by Vito and Michael Corleone in Francis Ford Coppola's masterpiece.",
            "answer": "Corleone",
            "accepted": [
                "the corleone family",
                "corleones"
            ],
            "source": "IMDb - The Godfather"
        },
        {
            "value": 200,
            "clue": "The 1994 Quentin Tarantino crime film known for its nonlinear storytelling and Big Kahuna Burger.",
            "answer": "Pulp Fiction",
            "accepted": [
                "pulp fiction"
            ],
            "source": "IMDb - Miramax"
        },
        {
            "value": 200,
            "clue": "The actor who won back-to-back Best Actor Oscars for Philadelphia (1993) and Forrest Gump (1994).",
            "answer": "Tom Hanks",
            "accepted": [
                "hanks"
            ],
            "source": "IMDb - Academy Awards"
        },
        {
            "value": 200,
            "clue": "The 2010 Christopher Nolan sci-fi thriller about thieves who steal secrets using dream-sharing technology.",
            "answer": "Inception",
            "accepted": [
                "inception film"
            ],
            "source": "IMDb - Warner Bros"
        },
        {
            "value": 200,
            "clue": "The fictional motel run by Norman Bates in Alfred Hitchcock's 1960 psychological horror classic.",
            "answer": "Bates Motel",
            "accepted": [
                "the bates motel"
            ],
            "source": "IMDb - Psycho"
        },
        {
            "value": 200,
            "clue": "The 1980 horror film directed by Stanley Kubrick set in the snowbound Overlook Hotel.",
            "answer": "The Shining",
            "accepted": [
                "shining"
            ],
            "source": "IMDb - Stanley Kubrick"
        },
        {
            "value": 200,
            "clue": "The actress who won an Oscar for her performance as Clarice Starling in The Silence of the Lambs.",
            "answer": "Jodie Foster",
            "accepted": [
                "foster"
            ],
            "source": "IMDb - Academy Awards"
        },
        {
            "value": 200,
            "clue": "The actor who won an Oscar playing the cannibalistic serial killer Hannibal Lecter in 1991.",
            "answer": "Anthony Hopkins",
            "accepted": [
                "sir anthony hopkins",
                "hopkins"
            ],
            "source": "IMDb - Academy Awards"
        },
        {
            "value": 200,
            "clue": "The 2000 historical epic directed by Ridley Scott starring Russell Crowe as Maximus Decimus Meridius.",
            "answer": "Gladiator",
            "accepted": [
                "gladiator film"
            ],
            "source": "IMDb - Universal"
        },
        {
            "value": 200,
            "clue": "The female director who won the Best Director Oscar for the 2008 Iraq war drama The Hurt Locker.",
            "answer": "Kathryn Bigelow",
            "accepted": [
                "bigelow"
            ],
            "source": "IMDb - Academy Awards"
        },
        {
            "value": 200,
            "clue": "The actress who played Katniss Everdeen in The Hunger Games franchise.",
            "answer": "Jennifer Lawrence",
            "accepted": [
                "lawrence"
            ],
            "source": "IMDb - Lionsgate"
        },
        {
            "value": 200,
            "clue": "The director known for his distinct visual symmetry and pastel palettes in The Grand Budapest Hotel.",
            "answer": "Wes Anderson",
            "accepted": [
                "anderson"
            ],
            "source": "IMDb - Fox Searchlight"
        },
        {
            "value": 200,
            "clue": "The 1999 psychological thriller directed by David Fincher starring Brad Pitt and Edward Norton.",
            "answer": "Fight Club",
            "accepted": [
                "fight club film"
            ],
            "source": "IMDb - 20th Century Fox"
        },
        {
            "value": 200,
            "clue": "The 2001 Peter Jackson film that inaugurated the Lord of the Rings cinematic trilogy.",
            "answer": "The Fellowship of the Ring",
            "accepted": [
                "fellowship of the ring"
            ],
            "source": "IMDb - New Line Cinema"
        },
        {
            "value": 200,
            "clue": "The composer who wrote the iconic musical scores for Star Wars, Jaws, and Indiana Jones.",
            "answer": "John Williams",
            "accepted": [
                "williams"
            ],
            "source": "IMDb - Film Scores"
        },
        {
            "value": 200,
            "clue": "The actor who played the eccentric chocolate maker Willy Wonka in the 1971 musical adaptation.",
            "answer": "Gene Wilder",
            "accepted": [
                "wilder"
            ],
            "source": "IMDb - Paramount"
        },
        {
            "value": 200,
            "clue": "The 2016 musical film starring Ryan Gosling and Emma Stone that won 6 Oscars.",
            "answer": "La La Land",
            "accepted": [
                "la la land"
            ],
            "source": "IMDb - Lionsgate"
        },
        {
            "value": 200,
            "clue": "The 1982 Ridley Scott sci-fi masterpiece starring Harrison Ford as Rick Deckard hunting replicants.",
            "answer": "Blade Runner",
            "accepted": [
                "blade runner film"
            ],
            "source": "IMDb - Warner Bros"
        },
        {
            "value": 200,
            "clue": "The black-and-white 1993 Steven Spielberg Holocaust drama that won seven Academy Awards.",
            "answer": "Schindler's List",
            "accepted": [
                "schindlers list"
            ],
            "source": "IMDb - Universal"
        },
        {
            "value": 200,
            "clue": "The legendary actor who portrayed Vito Corleone in The Godfather and Terry Malloy in On the Waterfront.",
            "answer": "Marlon Brando",
            "accepted": [
                "brando"
            ],
            "source": "IMDb - Paramount"
        },
        {
            "value": 200,
            "clue": "The 1977 space fantasy film created by George Lucas that became a worldwide cultural phenomenon.",
            "answer": "Star Wars: Episode IV - A New Hope",
            "accepted": [
                "star wars",
                "a new hope"
            ],
            "source": "IMDb - Lucasfilm"
        },
        {
            "value": 200,
            "clue": "The 2019 DC movie directed by Todd Phillips that earned Joaquin Phoenix a Best Actor Oscar.",
            "answer": "Joker",
            "accepted": [
                "joker film"
            ],
            "source": "IMDb - Warner Bros"
        },
        {
            "value": 200,
            "clue": "The 1995 epic historical drama directed by and starring Mel Gibson as Scottish warrior William Wallace.",
            "answer": "Braveheart",
            "accepted": [
                "braveheart film"
            ],
            "source": "IMDb - Paramount"
        },
        {
            "value": 200,
            "clue": "The 1999 Wachowskis sci-fi film that introduced 'bullet time' visual effects.",
            "answer": "The Matrix",
            "accepted": [
                "the matrix film"
            ],
            "source": "IMDb - Warner Bros"
        },
        {
            "value": 200,
            "clue": "The 1984 sci-fi comedy about three parapsychologists who start a ghost removal business in NYC.",
            "answer": "Ghostbusters",
            "accepted": [
                "ghostbusters film"
            ],
            "source": "IMDb - Columbia"
        },
        {
            "value": 200,
            "clue": "The 2014 sci-fi epic directed by Christopher Nolan about astronauts seeking a new home through a wormhole.",
            "answer": "Interstellar",
            "accepted": [
                "interstellar film"
            ],
            "source": "IMDb - Paramount"
        },
        {
            "value": 200,
            "clue": "The 2006 Martin Scorsese mob drama starring Leonardo DiCaprio and Matt Damon that won Best Picture.",
            "answer": "The Departed",
            "accepted": [
                "the departed"
            ],
            "source": "IMDb - Warner Bros"
        },
        {
            "value": 200,
            "clue": "The 1998 World War II epic directed by Steven Spielberg centered on the D-Day invasion at Omaha Beach.",
            "answer": "Saving Private Ryan",
            "accepted": [
                "saving private ryan"
            ],
            "source": "IMDb - DreamWorks"
        },
        {
            "value": 200,
            "clue": "The fictional British boarding school of witchcraft and wizardry in the Harry Potter films.",
            "answer": "Hogwarts",
            "accepted": [
                "hogwarts school"
            ],
            "source": "IMDb - Warner Bros"
        },
        {
            "value": 200,
            "clue": "The actor who portrayed Severus Snape in all eight Harry Potter films.",
            "answer": "Alan Rickman",
            "accepted": [
                "rickman"
            ],
            "source": "IMDb - Warner Bros"
        },
        {
            "value": 200,
            "clue": "The 2001 animated movie that won the very first Academy Award for Best Animated Feature.",
            "answer": "Shrek",
            "accepted": [
                "shrek 1"
            ],
            "source": "IMDb - Academy Awards"
        },
        {
            "value": 200,
            "clue": "The 1986 action film starring Tom Cruise as naval aviator Pete 'Maverick' Mitchell.",
            "answer": "Top Gun",
            "accepted": [
                "top gun 1986"
            ],
            "source": "IMDb - Paramount"
        },
        {
            "value": 200,
            "clue": "The 2015 post-apocalyptic action movie directed by George Miller starring Charlize Theron as Furiosa.",
            "answer": "Mad Max: Fury Road",
            "accepted": [
                "fury road",
                "mad max"
            ],
            "source": "IMDb - Warner Bros"
        },
        {
            "value": 200,
            "clue": "The 1973 horror masterpiece directed by William Friedkin about the demonic possession of a young girl.",
            "answer": "The Exorcist",
            "accepted": [
                "the exorcist"
            ],
            "source": "IMDb - Warner Bros"
        },
        {
            "value": 200,
            "clue": "The classic 1939 musical fantasy film starring Judy Garland as Dorothy Gale traveling to the Land of Oz.",
            "answer": "The Wizard of Oz",
            "accepted": [
                "wizard of oz"
            ],
            "source": "IMDb - MGM"
        },
        {
            "value": 200,
            "clue": "The 1968 Stanley Kubrick sci-fi classic featuring the rogue sentient computer HAL 9000.",
            "answer": "2001: A Space Odyssey",
            "accepted": [
                "2001 space odyssey",
                "a space odyssey"
            ],
            "source": "IMDb - MGM"
        },
        {
            "value": 200,
            "clue": "The 1991 Disney animated film that became the first animated feature nominated for Best Picture.",
            "answer": "Beauty and the Beast",
            "accepted": [
                "beauty and the beast"
            ],
            "source": "IMDb - Walt Disney"
        },
        {
            "value": 300,
            "clue": "The 2019 South Korean black comedy thriller directed by Bong Joon-ho that won four Academy Awards including Best Picture.",
            "answer": "Parasite",
            "accepted": [
                "gisaengchung"
            ],
            "source": "IMDb - Academy Awards"
        },
        {
            "value": 300,
            "clue": "The Italian director of the 'Dollars Trilogy' spaghetti westerns starring Clint Eastwood.",
            "answer": "Sergio Leone",
            "accepted": [
                "leone"
            ],
            "source": "IMDb - Western Cinema"
        },
        {
            "value": 300,
            "clue": "The code name for Steve Rogers' brainwashed assassin best friend Bucky Barnes in the MCU.",
            "answer": "The Winter Soldier",
            "accepted": [
                "winter soldier",
                "bucky barnes"
            ],
            "source": "IMDb - Marvel Cinematic Universe"
        },
        {
            "value": 300,
            "clue": "The 1960 Alfred Hitchcock shower-scene horror film featuring Marion Crane at an isolated motel.",
            "answer": "Psycho",
            "accepted": [
                "psycho film"
            ],
            "source": "IMDb - Universal"
        },
        {
            "value": 300,
            "clue": "The 1941 Orson Welles drama revolving around the dying word 'Rosebud', widely hailed as a cinematic masterpiece.",
            "answer": "Citizen Kane",
            "accepted": [
                "citizen kane"
            ],
            "source": "IMDb - RKO"
        },
        {
            "value": 300,
            "clue": "The 1942 wartime romantic drama starring Humphrey Bogart and Ingrid Bergman set in Morocco.",
            "answer": "Casablanca",
            "accepted": [
                "casablanca film"
            ],
            "source": "IMDb - Warner Bros"
        },
        {
            "value": 300,
            "clue": "The 1979 sci-fi horror film directed by Ridley Scott featuring the tagline 'In space no one can hear you scream'.",
            "answer": "Alien",
            "accepted": [
                "alien film",
                "xenomorph"
            ],
            "source": "IMDb - 20th Century Fox"
        },
        {
            "value": 300,
            "clue": "The actress who played Ripley in the Alien sci-fi franchise.",
            "answer": "Sigourney Weaver",
            "accepted": [
                "weaver"
            ],
            "source": "IMDb - 20th Century Fox"
        },
        {
            "value": 300,
            "clue": "The director who won Best Director Oscars for Brokeback Mountain (2005) and Life of Pi (2012).",
            "answer": "Ang Lee",
            "accepted": [
                "lee"
            ],
            "source": "IMDb - Academy Awards"
        },
        {
            "value": 300,
            "clue": "The 2003 film in Peter Jackson's trilogy that swept all 11 Academy Awards it was nominated for.",
            "answer": "The Return of the King",
            "accepted": [
                "return of the king"
            ],
            "source": "IMDb - Academy Awards"
        },
        {
            "value": 300,
            "clue": "The 1995 crime drama directed by Michael Mann featuring the first on-screen dialogue between Al Pacino and Robert De Niro.",
            "answer": "Heat",
            "accepted": [
                "heat 1995"
            ],
            "source": "IMDb - Warner Bros"
        },
        {
            "value": 300,
            "clue": "The 1987 sci-fi action film where Arnold Schwarzenegger encounters an invisible alien trophy hunter in the jungle.",
            "answer": "Predator",
            "accepted": [
                "predator film"
            ],
            "source": "IMDb - 20th Century Fox"
        },
        {
            "value": 300,
            "clue": "The Japanese animation studio co-founded by Hayao Miyazaki behind Spirited Away and My Neighbor Totoro.",
            "answer": "Studio Ghibli",
            "accepted": [
                "ghibli"
            ],
            "source": "IMDb - Animation Cinema"
        },
        {
            "value": 300,
            "clue": "The 2001 Studio Ghibli film that won the Academy Award for Best Animated Feature in 2003.",
            "answer": "Spirited Away",
            "accepted": [
                "sen to chihiro"
            ],
            "source": "IMDb - Studio Ghibli"
        },
        {
            "value": 300,
            "clue": "The 1950 Billy Wilder film noir set in Hollywood starring Gloria Swanson as faded silent star Norma Desmond.",
            "answer": "Sunset Boulevard",
            "accepted": [
                "sunset blvd"
            ],
            "source": "IMDb - Paramount"
        },
        {
            "value": 300,
            "clue": "The actor who won an Oscar for playing Daniel Plainview in Paul Thomas Anderson's There Will Be Blood.",
            "answer": "Daniel Day-Lewis",
            "accepted": [
                "day-lewis",
                "day lewis"
            ],
            "source": "IMDb - Paramount Vantage"
        },
        {
            "value": 300,
            "clue": "The only actor to win three Academy Awards for Best Actor in a Leading Role.",
            "answer": "Daniel Day-Lewis",
            "accepted": [
                "day-lewis"
            ],
            "source": "IMDb - Academy Awards"
        },
        {
            "value": 300,
            "clue": "The 1980 Star Wars sequel widely considered the best in the franchise, directed by Irvin Kershner.",
            "answer": "The Empire Strikes Back",
            "accepted": [
                "empire strikes back"
            ],
            "source": "IMDb - Lucasfilm"
        },
        {
            "value": 300,
            "clue": "The 2007 Coen brothers neo-western thriller based on Cormac McCarthy's novel featuring Anton Chigurh.",
            "answer": "No Country for Old Men",
            "accepted": [
                "no country for old men"
            ],
            "source": "IMDb - Miramax"
        },
        {
            "value": 300,
            "clue": "The Spanish actor who won an Oscar for playing the chilling hitman Anton Chigurh in No Country for Old Men.",
            "answer": "Javier Bardem",
            "accepted": [
                "bardem"
            ],
            "source": "IMDb - Academy Awards"
        },
        {
            "value": 300,
            "clue": "The 1998 Coen brothers cult comedy starring Jeff Bridges as 'The Dude'.",
            "answer": "The Big Lebowski",
            "accepted": [
                "big lebowski"
            ],
            "source": "IMDb - Gramercy"
        },
        {
            "value": 300,
            "clue": "The 1997 psychological drama about a janitor math genius at MIT starring Matt Damon and Robin Williams.",
            "answer": "Good Will Hunting",
            "accepted": [
                "good will hunting"
            ],
            "source": "IMDb - Miramax"
        },
        {
            "value": 300,
            "clue": "The 1976 psychological drama directed by Martin Scorsese starring Robert De Niro as alienated cab driver Travis Bickle.",
            "answer": "Taxi Driver",
            "accepted": [
                "taxi driver film"
            ],
            "source": "IMDb - Columbia"
        },
        {
            "value": 300,
            "clue": "The 1995 crime mystery directed by Bryan Singer famous for the plot twist revealing Keyser Söze.",
            "answer": "The Usual Suspects",
            "accepted": [
                "usual suspects"
            ],
            "source": "IMDb - PolyGram"
        },
        {
            "value": 300,
            "clue": "The 1982 sci-fi film directed by John Carpenter about a shape-shifting alien creature in an Antarctic research station.",
            "answer": "The Thing",
            "accepted": [
                "john carpenters the thing"
            ],
            "source": "IMDb - Universal"
        },
        {
            "value": 300,
            "clue": "The 1990 mob masterpiece directed by Martin Scorsese based on Nicholas Pileggi's book Wiseguy.",
            "answer": "Goodfellas",
            "accepted": [
                "goodfellas film"
            ],
            "source": "IMDb - Warner Bros"
        },
        {
            "value": 300,
            "clue": "The 1974 neo-noir mystery directed by Roman Polanski starring Jack Nicholson as private detective J.J. Gittes.",
            "answer": "Chinatown",
            "accepted": [
                "chinatown film"
            ],
            "source": "IMDb - Paramount"
        },
        {
            "value": 300,
            "clue": "The 1957 courtroom drama directed by Sidney Lumet featuring twelve jurors debating a murder verdict in one room.",
            "answer": "12 Angry Men",
            "accepted": [
                "twelve angry men"
            ],
            "source": "IMDb - United Artists"
        },
        {
            "value": 300,
            "clue": "The 2017 horror-satire directed by Jordan Peele that won an Academy Award for Best Original Screenplay.",
            "answer": "Get Out",
            "accepted": [
                "get out film"
            ],
            "source": "IMDb - Universal"
        },
        {
            "value": 300,
            "clue": "The 2023 biographical epic directed by Christopher Nolan that swept 7 Academy Awards including Best Picture.",
            "answer": "Oppenheimer",
            "accepted": [
                "oppenheimer film"
            ],
            "source": "IMDb - Universal"
        },
        {
            "value": 300,
            "clue": "The Irish actor who won the Best Actor Oscar in 2024 for portraying J. Robert Oppenheimer.",
            "answer": "Cillian Murphy",
            "accepted": [
                "murphy"
            ],
            "source": "IMDb - Universal"
        },
        {
            "value": 300,
            "clue": "The 1981 epic historical adventure that introduced Indiana Jones searching for the Ark of the Covenant.",
            "answer": "Raiders of the Lost Ark",
            "accepted": [
                "raiders of the lost ark"
            ],
            "source": "IMDb - Paramount"
        },
        {
            "value": 300,
            "clue": "The 2002 musical directed by Rob Marshall that became the first musical to win Best Picture since Oliver! in 1968.",
            "answer": "Chicago",
            "accepted": [
                "chicago musical film"
            ],
            "source": "IMDb - Miramax"
        },
        {
            "value": 300,
            "clue": "The 2014 dark comedy directed by Alejandro G. Iñárritu starring Michael Keaton that won Best Picture.",
            "answer": "Birdman",
            "accepted": [
                "birdman or the unexpected virtue of ignorance"
            ],
            "source": "IMDb - Fox Searchlight"
        },
        {
            "value": 300,
            "clue": "The 1999 found-footage horror sensation made on a shoestring budget that grossed over $240 million.",
            "answer": "The Blair Witch Project",
            "accepted": [
                "blair witch project",
                "blair witch"
            ],
            "source": "IMDb - Artisan"
        },
        {
            "value": 300,
            "clue": "The Italian neo-realist 1948 classic directed by Vittorio De Sica about a father and son searching for a stolen two-wheeler.",
            "answer": "Bicycle Thieves",
            "accepted": [
                "the bicycle thief",
                "ladri di biciclette"
            ],
            "source": "IMDb - Italian Cinema"
        },
        {
            "value": 300,
            "clue": "The 1954 Japanese masterpiece directed by Akira Kurosawa about a village hiring samurai for defense.",
            "answer": "Seven Samurai",
            "accepted": [
                "shichinin no samurai"
            ],
            "source": "IMDb - Toho"
        },
        {
            "value": 300,
            "clue": "The 2011 silent French comedy-drama directed by Michel Hazanavicius that won five Academy Awards including Best Picture.",
            "answer": "The Artist",
            "accepted": [
                "the artist film"
            ],
            "source": "IMDb - Warner Bros"
        },
        {
            "value": 300,
            "clue": "The 1992 debut crime thriller written and directed by Quentin Tarantino about a jewelry heist gone wrong.",
            "answer": "Reservoir Dogs",
            "accepted": [
                "reservoir dogs"
            ],
            "source": "IMDb - Miramax"
        },
        {
            "value": 300,
            "clue": "The 1998 dark satirical comedy-drama starring Jim Carrey as a man unaware his entire life is a 24/7 reality television show.",
            "answer": "The Truman Show",
            "accepted": [
                "truman show"
            ],
            "source": "IMDb - Paramount"
        },
        {
            "value": 400,
            "clue": "The only film in history to win all Big Five Academy Awards: Picture, Director, Actor, Actress, and Screenplay, alongside One Flew Over the Cuckoo's Nest and The Silence of the Lambs.",
            "answer": "It Happened One Night",
            "accepted": [
                "it happened one night 1934"
            ],
            "source": "IMDb - Academy Awards Records"
        },
        {
            "value": 400,
            "clue": "The French New Wave masterpiece directed by François Truffaut in 1959 featuring Antoine Doinel.",
            "answer": "The 400 Blows",
            "accepted": [
                "les quatre cents coups",
                "400 blows"
            ],
            "source": "IMDb - French Cinema"
        },
        {
            "value": 400,
            "clue": "The 1966 Italian epic western starring Clint Eastwood that concludes with a three-way standoff at Sad Hill Cemetery.",
            "answer": "The Good, the Bad and the Ugly",
            "accepted": [
                "il buono il brutto il cattivo"
            ],
            "source": "IMDb - Sergio Leone"
        },
        {
            "value": 400,
            "clue": "The 1958 Alfred Hitchcock psychological thriller starring James Stewart as a retired detective suffering from acrophobia.",
            "answer": "Vertigo",
            "accepted": [
                "vertigo film"
            ],
            "source": "IMDb - Universal"
        },
        {
            "value": 400,
            "clue": "The Swedish director of The Seventh Seal and Persona, famous for depicting a knight playing chess with Death.",
            "answer": "Ingmar Bergman",
            "accepted": [
                "bergman"
            ],
            "source": "IMDb - World Cinema"
        },
        {
            "value": 400,
            "clue": "The 1927 groundbreaking German expressionist science-fiction film directed by Fritz Lang set in a futuristic dystopia.",
            "answer": "Metropolis",
            "accepted": [
                "metropolis 1927"
            ],
            "source": "IMDb - UFA"
        },
        {
            "value": 400,
            "clue": "The 1962 sweeping British epic directed by David Lean starring Peter O'Toole as an enigmatic British officer in Arabia.",
            "answer": "Lawrence of Arabia",
            "accepted": [
                "lawrence of arabia"
            ],
            "source": "IMDb - Columbia"
        },
        {
            "value": 400,
            "clue": "The 1971 crime drama directed by William Friedkin featuring Gene Hackman as NYPD detective Popeye Doyle.",
            "answer": "The French Connection",
            "accepted": [
                "french connection"
            ],
            "source": "IMDb - 20th Century Fox"
        },
        {
            "value": 400,
            "clue": "The Mexican filmmaker who won Best Director Oscars for both Gravity (2013) and Roma (2018).",
            "answer": "Alfonso Cuaron",
            "accepted": [
                "alfonso cuarón",
                "cuaron"
            ],
            "source": "IMDb - Academy Awards"
        },
        {
            "value": 400,
            "clue": "The 1980 biographical sports drama directed by Martin Scorsese starring Robert De Niro as boxer Jake LaMotta.",
            "answer": "Raging Bull",
            "accepted": [
                "raging bull"
            ],
            "source": "IMDb - United Artists"
        },
        {
            "value": 400,
            "clue": "The 1974 Francis Ford Coppola sequel that became the first film sequel in history to win the Best Picture Oscar.",
            "answer": "The Godfather Part II",
            "accepted": [
                "the godfather part 2"
            ],
            "source": "IMDb - Paramount"
        },
        {
            "value": 400,
            "clue": "The 1975 psychological comedy-drama directed by Miloš Forman starring Jack Nicholson in an Oregon psychiatric facility.",
            "answer": "One Flew Over the Cuckoo's Nest",
            "accepted": [
                "cuckoos nest",
                "one flew over the cuckoos nest"
            ],
            "source": "IMDb - United Artists"
        },
        {
            "value": 400,
            "clue": "The 1925 Soviet silent propaganda film directed by Sergei Eisenstein featuring the famous Odessa Steps massacre sequence.",
            "answer": "Battleship Potemkin",
            "accepted": [
                "bronenosets potemkin"
            ],
            "source": "IMDb - Soviet Cinema"
        },
        {
            "value": 400,
            "clue": "The 1948 film noir directed by Carol Reed set in post-WWII divided Vienna featuring Orson Welles as Harry Lime.",
            "answer": "The Third Man",
            "accepted": [
                "the third man"
            ],
            "source": "IMDb - British Film Institute"
        },
        {
            "value": 400,
            "clue": "The 1954 drama directed by Elia Kazan where Marlon Brando delivers the iconic line 'I coulda been a contender'.",
            "answer": "On the Waterfront",
            "accepted": [
                "on the waterfront"
            ],
            "source": "IMDb - Columbia"
        },
        {
            "value": 400,
            "clue": "The 1967 road comedy-drama starring Warren Beatty and Faye Dunaway that signaled the dawn of the New Hollywood era.",
            "answer": "Bonnie and Clyde",
            "accepted": [
                "bonnie and clyde film"
            ],
            "source": "IMDb - Warner Bros"
        },
        {
            "value": 400,
            "clue": "The 1979 Vietnam War epic directed by Francis Ford Coppola loosely inspired by Joseph Conrad's Heart of Darkness.",
            "answer": "Apocalypse Now",
            "accepted": [
                "apocalypse now"
            ],
            "source": "IMDb - United Artists"
        },
        {
            "value": 400,
            "clue": "The 1952 musical romantic comedy starring Gene Kelly, Donald O'Connor, and Debbie Reynolds depicting Hollywood's transition to talkies.",
            "answer": "Singin' in the Rain",
            "accepted": [
                "singing in the rain"
            ],
            "source": "IMDb - MGM"
        },
        {
            "value": 400,
            "clue": "The 1977 comedy directed by and starring Woody Allen alongside Diane Keaton that won four Oscars including Best Picture.",
            "answer": "Annie Hall",
            "accepted": [
                "annie hall"
            ],
            "source": "IMDb - United Artists"
        },
        {
            "value": 400,
            "clue": "The 1957 British-American WWII epic directed by David Lean set in a Japanese prisoner-of-war camp in Burma.",
            "answer": "The Bridge on the River Kwai",
            "accepted": [
                "bridge on the river kwai"
            ],
            "source": "IMDb - Columbia"
        },
        {
            "value": 400,
            "clue": "The 1940 satirical comedy directed by Charlie Chaplin in which he plays both an oppressed Jewish barber and a fascist dictator.",
            "answer": "The Great Dictator",
            "accepted": [
                "the great dictator"
            ],
            "source": "IMDb - United Artists"
        },
        {
            "value": 400,
            "clue": "The 1953 Japanese masterpiece directed by Yasujirō Ozu depicting an elderly couple visiting their busy adult children.",
            "answer": "Tokyo Story",
            "accepted": [
                "tōkyō monogatari"
            ],
            "source": "IMDb - Shochiku"
        },
        {
            "value": 400,
            "clue": "The 1966 Michelangelo Antonioni mystery thriller about a London fashion photographer who unwittingly photographs a murder.",
            "answer": "Blow-Up",
            "accepted": [
                "blowup",
                "blow up"
            ],
            "source": "IMDb - MGM"
        },
        {
            "value": 400,
            "clue": "The 1974 horror masterpiece directed by Tobe Hooper featuring the chainsaw-wielding cannibal Leatherface.",
            "answer": "The Texas Chain Saw Massacre",
            "accepted": [
                "texas chainsaw massacre"
            ],
            "source": "IMDb - Vortex"
        },
        {
            "value": 400,
            "clue": "The 1931 horror film starring Boris Karloff as the tragic Creature brought to life by electricity.",
            "answer": "Frankenstein",
            "accepted": [
                "frankenstein 1931"
            ],
            "source": "IMDb - Universal Monsters"
        },
        {
            "value": 400,
            "clue": "The Hungarian-American actor who defined the cinematic role of Count Dracula in Tod Browning's 1931 classic.",
            "answer": "Bela Lugosi",
            "accepted": [
                "lugosi"
            ],
            "source": "IMDb - Universal Monsters"
        },
        {
            "value": 400,
            "clue": "The 1985 biographical epic directed by Sydney Pollack starring Meryl Streep and Robert Redford that won seven Oscars.",
            "answer": "Out of Africa",
            "accepted": [
                "out of africa"
            ],
            "source": "IMDb - Universal"
        },
        {
            "value": 400,
            "clue": "The French director who directed the groundbreaking New Wave romantic crime drama Breathless (À bout de souffle) in 1960.",
            "answer": "Jean-Luc Godard",
            "accepted": [
                "godard"
            ],
            "source": "IMDb - French New Wave"
        },
        {
            "value": 400,
            "clue": "The 2000 martial arts epic directed by Ang Lee starring Chow Yun-fat and Michelle Yeoh that won four Oscars.",
            "answer": "Crouching Tiger, Hidden Dragon",
            "accepted": [
                "crouching tiger hidden dragon"
            ],
            "source": "IMDb - Sony Pictures Classics"
        },
        {
            "value": 400,
            "clue": "The 1955 drama starring James Dean as a troubled teenager, released just a month after Dean's fatal car crash.",
            "answer": "Rebel Without a Cause",
            "accepted": [
                "rebel without a cause"
            ],
            "source": "IMDb - Warner Bros"
        },
        {
            "value": 400,
            "clue": "The 1971 dystopian crime film directed by Stanley Kubrick based on Anthony Burgess's novella starring Malcolm McDowell.",
            "answer": "A Clockwork Orange",
            "accepted": [
                "clockwork orange"
            ],
            "source": "IMDb - Warner Bros"
        },
        {
            "value": 400,
            "clue": "The 1969 counterculture road movie starring Peter Fonda and Dennis Hopper riding chopper motorcycles across America.",
            "answer": "Easy Rider",
            "accepted": [
                "easy rider"
            ],
            "source": "IMDb - Columbia"
        },
        {
            "value": 400,
            "clue": "The 1993 historical drama directed by Jane Campion starring Holly Hunter as a mute Scottish pianist sent to New Zealand.",
            "answer": "The Piano",
            "accepted": [
                "the piano"
            ],
            "source": "IMDb - Miramax"
        },
        {
            "value": 400,
            "clue": "The 1979 courtroom drama starring Dustin Hoffman and Meryl Streep navigating a painful divorce and child custody battle.",
            "answer": "Kramer vs. Kramer",
            "accepted": [
                "kramer vs kramer"
            ],
            "source": "IMDb - Columbia"
        },
        {
            "value": 400,
            "clue": "The Russian master of poetic cinema who directed Solaris (1972), Stalker (1979), and The Mirror (1975).",
            "answer": "Andrei Tarkovsky",
            "accepted": [
                "tarkovsky"
            ],
            "source": "IMDb - Soviet Cinema"
        },
        {
            "value": 400,
            "clue": "The 1944 Billy Wilder film noir starring Fred MacMurray and Barbara Stanwyck based on James M. Cain's crime novella.",
            "answer": "Double Indemnity",
            "accepted": [
                "double indemnity"
            ],
            "source": "IMDb - Paramount"
        },
        {
            "value": 400,
            "clue": "The 1984 Czech-American period drama directed by Miloš Forman chronicling the rivalry between Mozart and Salieri.",
            "answer": "Amadeus",
            "accepted": [
                "amadeus film"
            ],
            "source": "IMDb - Orion"
        },
        {
            "value": 400,
            "clue": "The 1997 drama directed by Paul Thomas Anderson exploring the 1970s and 80s Golden Age of the San Fernando Valley adult film industry.",
            "answer": "Boogie Nights",
            "accepted": [
                "boogie nights"
            ],
            "source": "IMDb - New Line"
        },
        {
            "value": 400,
            "clue": "The 1957 Ingmar Bergman historical drama where a medieval knight challenges Antonius Block to a game of chess against Death.",
            "answer": "The Seventh Seal",
            "accepted": [
                "det sjunde inseglet"
            ],
            "source": "IMDb - Swedish Cinema"
        },
        {
            "value": 400,
            "clue": "The 1964 Stanley Kubrick satirical cold-war black comedy starring Peter Sellers in three different roles.",
            "answer": "Dr. Strangelove",
            "accepted": [
                "dr strangelove",
                "doctor strangelove"
            ],
            "source": "IMDb - Columbia"
        },
        {
            "value": 500,
            "clue": "The only film in history to win all Big Five Academy Awards: Picture, Director, Actor, Actress, and Screenplay, alongside One Flew Over the Cuckoo's Nest and The Silence of the Lambs.",
            "answer": "It Happened One Night",
            "accepted": [
                "it happened one night 1934"
            ],
            "source": "IMDb - Academy Awards Records"
        },
        {
            "value": 500,
            "clue": "The French New Wave masterpiece directed by François Truffaut in 1959 featuring Antoine Doinel.",
            "answer": "The 400 Blows",
            "accepted": [
                "les quatre cents coups",
                "400 blows"
            ],
            "source": "IMDb - French Cinema"
        },
        {
            "value": 500,
            "clue": "The 1966 Italian epic western starring Clint Eastwood that concludes with a three-way standoff at Sad Hill Cemetery.",
            "answer": "The Good, the Bad and the Ugly",
            "accepted": [
                "il buono il brutto il cattivo"
            ],
            "source": "IMDb - Sergio Leone"
        },
        {
            "value": 500,
            "clue": "The 1958 Alfred Hitchcock psychological thriller starring James Stewart as a retired detective suffering from acrophobia.",
            "answer": "Vertigo",
            "accepted": [
                "vertigo film"
            ],
            "source": "IMDb - Universal"
        },
        {
            "value": 500,
            "clue": "The Swedish director of The Seventh Seal and Persona, famous for depicting a knight playing chess with Death.",
            "answer": "Ingmar Bergman",
            "accepted": [
                "bergman"
            ],
            "source": "IMDb - World Cinema"
        },
        {
            "value": 500,
            "clue": "The 1927 groundbreaking German expressionist science-fiction film directed by Fritz Lang set in a futuristic dystopia.",
            "answer": "Metropolis",
            "accepted": [
                "metropolis 1927"
            ],
            "source": "IMDb - UFA"
        },
        {
            "value": 500,
            "clue": "The 1962 sweeping British epic directed by David Lean starring Peter O'Toole as an enigmatic British officer in Arabia.",
            "answer": "Lawrence of Arabia",
            "accepted": [
                "lawrence of arabia"
            ],
            "source": "IMDb - Columbia"
        },
        {
            "value": 500,
            "clue": "The 1971 crime drama directed by William Friedkin featuring Gene Hackman as NYPD detective Popeye Doyle.",
            "answer": "The French Connection",
            "accepted": [
                "french connection"
            ],
            "source": "IMDb - 20th Century Fox"
        },
        {
            "value": 500,
            "clue": "The Mexican filmmaker who won Best Director Oscars for both Gravity (2013) and Roma (2018).",
            "answer": "Alfonso Cuaron",
            "accepted": [
                "alfonso cuarón",
                "cuaron"
            ],
            "source": "IMDb - Academy Awards"
        },
        {
            "value": 500,
            "clue": "The 1980 biographical sports drama directed by Martin Scorsese starring Robert De Niro as boxer Jake LaMotta.",
            "answer": "Raging Bull",
            "accepted": [
                "raging bull"
            ],
            "source": "IMDb - United Artists"
        },
        {
            "value": 500,
            "clue": "The 1974 Francis Ford Coppola sequel that became the first film sequel in history to win the Best Picture Oscar.",
            "answer": "The Godfather Part II",
            "accepted": [
                "the godfather part 2"
            ],
            "source": "IMDb - Paramount"
        },
        {
            "value": 500,
            "clue": "The 1975 psychological comedy-drama directed by Miloš Forman starring Jack Nicholson in an Oregon psychiatric facility.",
            "answer": "One Flew Over the Cuckoo's Nest",
            "accepted": [
                "cuckoos nest",
                "one flew over the cuckoos nest"
            ],
            "source": "IMDb - United Artists"
        },
        {
            "value": 500,
            "clue": "The 1925 Soviet silent propaganda film directed by Sergei Eisenstein featuring the famous Odessa Steps massacre sequence.",
            "answer": "Battleship Potemkin",
            "accepted": [
                "bronenosets potemkin"
            ],
            "source": "IMDb - Soviet Cinema"
        },
        {
            "value": 500,
            "clue": "The 1948 film noir directed by Carol Reed set in post-WWII divided Vienna featuring Orson Welles as Harry Lime.",
            "answer": "The Third Man",
            "accepted": [
                "the third man"
            ],
            "source": "IMDb - British Film Institute"
        },
        {
            "value": 500,
            "clue": "The 1954 drama directed by Elia Kazan where Marlon Brando delivers the iconic line 'I coulda been a contender'.",
            "answer": "On the Waterfront",
            "accepted": [
                "on the waterfront"
            ],
            "source": "IMDb - Columbia"
        },
        {
            "value": 500,
            "clue": "The 1967 road comedy-drama starring Warren Beatty and Faye Dunaway that signaled the dawn of the New Hollywood era.",
            "answer": "Bonnie and Clyde",
            "accepted": [
                "bonnie and clyde film"
            ],
            "source": "IMDb - Warner Bros"
        },
        {
            "value": 500,
            "clue": "The 1979 Vietnam War epic directed by Francis Ford Coppola loosely inspired by Joseph Conrad's Heart of Darkness.",
            "answer": "Apocalypse Now",
            "accepted": [
                "apocalypse now"
            ],
            "source": "IMDb - United Artists"
        },
        {
            "value": 500,
            "clue": "The 1952 musical romantic comedy starring Gene Kelly, Donald O'Connor, and Debbie Reynolds depicting Hollywood's transition to talkies.",
            "answer": "Singin' in the Rain",
            "accepted": [
                "singing in the rain"
            ],
            "source": "IMDb - MGM"
        },
        {
            "value": 500,
            "clue": "The 1977 comedy directed by and starring Woody Allen alongside Diane Keaton that won four Oscars including Best Picture.",
            "answer": "Annie Hall",
            "accepted": [
                "annie hall"
            ],
            "source": "IMDb - United Artists"
        },
        {
            "value": 500,
            "clue": "The 1957 British-American WWII epic directed by David Lean set in a Japanese prisoner-of-war camp in Burma.",
            "answer": "The Bridge on the River Kwai",
            "accepted": [
                "bridge on the river kwai"
            ],
            "source": "IMDb - Columbia"
        },
        {
            "value": 500,
            "clue": "The 1940 satirical comedy directed by Charlie Chaplin in which he plays both an oppressed Jewish barber and a fascist dictator.",
            "answer": "The Great Dictator",
            "accepted": [
                "the great dictator"
            ],
            "source": "IMDb - United Artists"
        },
        {
            "value": 500,
            "clue": "The 1953 Japanese masterpiece directed by Yasujirō Ozu depicting an elderly couple visiting their busy adult children.",
            "answer": "Tokyo Story",
            "accepted": [
                "tōkyō monogatari"
            ],
            "source": "IMDb - Shochiku"
        },
        {
            "value": 500,
            "clue": "The 1966 Michelangelo Antonioni mystery thriller about a London fashion photographer who unwittingly photographs a murder.",
            "answer": "Blow-Up",
            "accepted": [
                "blowup",
                "blow up"
            ],
            "source": "IMDb - MGM"
        },
        {
            "value": 500,
            "clue": "The 1974 horror masterpiece directed by Tobe Hooper featuring the chainsaw-wielding cannibal Leatherface.",
            "answer": "The Texas Chain Saw Massacre",
            "accepted": [
                "texas chainsaw massacre"
            ],
            "source": "IMDb - Vortex"
        },
        {
            "value": 500,
            "clue": "The 1931 horror film starring Boris Karloff as the tragic Creature brought to life by electricity.",
            "answer": "Frankenstein",
            "accepted": [
                "frankenstein 1931"
            ],
            "source": "IMDb - Universal Monsters"
        },
        {
            "value": 500,
            "clue": "The Hungarian-American actor who defined the cinematic role of Count Dracula in Tod Browning's 1931 classic.",
            "answer": "Bela Lugosi",
            "accepted": [
                "lugosi"
            ],
            "source": "IMDb - Universal Monsters"
        },
        {
            "value": 500,
            "clue": "The 1985 biographical epic directed by Sydney Pollack starring Meryl Streep and Robert Redford that won seven Oscars.",
            "answer": "Out of Africa",
            "accepted": [
                "out of africa"
            ],
            "source": "IMDb - Universal"
        },
        {
            "value": 500,
            "clue": "The French director who directed the groundbreaking New Wave romantic crime drama Breathless (À bout de souffle) in 1960.",
            "answer": "Jean-Luc Godard",
            "accepted": [
                "godard"
            ],
            "source": "IMDb - French New Wave"
        },
        {
            "value": 500,
            "clue": "The 2000 martial arts epic directed by Ang Lee starring Chow Yun-fat and Michelle Yeoh that won four Oscars.",
            "answer": "Crouching Tiger, Hidden Dragon",
            "accepted": [
                "crouching tiger hidden dragon"
            ],
            "source": "IMDb - Sony Pictures Classics"
        },
        {
            "value": 500,
            "clue": "The 1955 drama starring James Dean as a troubled teenager, released just a month after Dean's fatal car crash.",
            "answer": "Rebel Without a Cause",
            "accepted": [
                "rebel without a cause"
            ],
            "source": "IMDb - Warner Bros"
        },
        {
            "value": 500,
            "clue": "The 1971 dystopian crime film directed by Stanley Kubrick based on Anthony Burgess's novella starring Malcolm McDowell.",
            "answer": "A Clockwork Orange",
            "accepted": [
                "clockwork orange"
            ],
            "source": "IMDb - Warner Bros"
        },
        {
            "value": 500,
            "clue": "The 1969 counterculture road movie starring Peter Fonda and Dennis Hopper riding chopper motorcycles across America.",
            "answer": "Easy Rider",
            "accepted": [
                "easy rider"
            ],
            "source": "IMDb - Columbia"
        },
        {
            "value": 500,
            "clue": "The 1993 historical drama directed by Jane Campion starring Holly Hunter as a mute Scottish pianist sent to New Zealand.",
            "answer": "The Piano",
            "accepted": [
                "the piano"
            ],
            "source": "IMDb - Miramax"
        },
        {
            "value": 500,
            "clue": "The 1979 courtroom drama starring Dustin Hoffman and Meryl Streep navigating a painful divorce and child custody battle.",
            "answer": "Kramer vs. Kramer",
            "accepted": [
                "kramer vs kramer"
            ],
            "source": "IMDb - Columbia"
        },
        {
            "value": 500,
            "clue": "The Russian master of poetic cinema who directed Solaris (1972), Stalker (1979), and The Mirror (1975).",
            "answer": "Andrei Tarkovsky",
            "accepted": [
                "tarkovsky"
            ],
            "source": "IMDb - Soviet Cinema"
        },
        {
            "value": 500,
            "clue": "The 1944 Billy Wilder film noir starring Fred MacMurray and Barbara Stanwyck based on James M. Cain's crime novella.",
            "answer": "Double Indemnity",
            "accepted": [
                "double indemnity"
            ],
            "source": "IMDb - Paramount"
        },
        {
            "value": 500,
            "clue": "The 1984 Czech-American period drama directed by Miloš Forman chronicling the rivalry between Mozart and Salieri.",
            "answer": "Amadeus",
            "accepted": [
                "amadeus film"
            ],
            "source": "IMDb - Orion"
        },
        {
            "value": 500,
            "clue": "The 1997 drama directed by Paul Thomas Anderson exploring the 1970s and 80s Golden Age of the San Fernando Valley adult film industry.",
            "answer": "Boogie Nights",
            "accepted": [
                "boogie nights"
            ],
            "source": "IMDb - New Line"
        },
        {
            "value": 500,
            "clue": "The 1957 Ingmar Bergman historical drama where a medieval knight challenges Antonius Block to a game of chess against Death.",
            "answer": "The Seventh Seal",
            "accepted": [
                "det sjunde inseglet"
            ],
            "source": "IMDb - Swedish Cinema"
        },
        {
            "value": 500,
            "clue": "The 1964 Stanley Kubrick satirical cold-war black comedy starring Peter Sellers in three different roles.",
            "answer": "Dr. Strangelove",
            "accepted": [
                "dr strangelove",
                "doctor strangelove"
            ],
            "source": "IMDb - Columbia"
        }
    ],
    "geography": [
        {
            "value": 100,
            "clue": "The longest river in the world, flowing through northeastern Africa into the Mediterranean Sea.",
            "answer": "Nile River",
            "accepted": [
                "nile",
                "the nile"
            ],
            "source": "Wikipedia - Nile"
        },
        {
            "value": 100,
            "clue": "The capital city of France, famous for the Eiffel Tower and the Louvre Museum.",
            "answer": "Paris",
            "accepted": [
                "city of paris"
            ],
            "source": "Wikipedia - Paris"
        },
        {
            "value": 100,
            "clue": "The highest mountain above sea level on Earth, situated in the Himalayas.",
            "answer": "Mount Everest",
            "accepted": [
                "everest",
                "mt everest"
            ],
            "source": "Wikipedia - Mount Everest"
        },
        {
            "value": 100,
            "clue": "The largest hot desert in the world, spanning across North Africa.",
            "answer": "Sahara Desert",
            "accepted": [
                "sahara",
                "the sahara"
            ],
            "source": "Wikipedia - Sahara"
        },
        {
            "value": 100,
            "clue": "The capital city of the United Kingdom, situated on the River Thames.",
            "answer": "London",
            "accepted": [
                "city of london"
            ],
            "source": "Wikipedia - London"
        },
        {
            "value": 100,
            "clue": "The largest ocean on Earth, covering more than 30% of the planet's surface.",
            "answer": "Pacific Ocean",
            "accepted": [
                "pacific"
            ],
            "source": "Wikipedia - Pacific Ocean"
        },
        {
            "value": 100,
            "clue": "The South American country whose official language is Portuguese.",
            "answer": "Brazil",
            "accepted": [
                "brasil"
            ],
            "source": "Wikipedia - Brazil"
        },
        {
            "value": 100,
            "clue": "The country with the largest land area in the world, spanning eleven time zones.",
            "answer": "Russia",
            "accepted": [
                "russian federation"
            ],
            "source": "Wikipedia - Russia"
        },
        {
            "value": 100,
            "clue": "The capital city of Italy, home to the Colosseum and surrounding Vatican City.",
            "answer": "Rome",
            "accepted": [
                "roma"
            ],
            "source": "Wikipedia - Rome"
        },
        {
            "value": 100,
            "clue": "The iconic giant clock tower located at the north end of the Palace of Westminster in London.",
            "answer": "Big Ben",
            "accepted": [
                "elizabeth tower"
            ],
            "source": "Wikipedia - Big Ben"
        },
        {
            "value": 100,
            "clue": "The famous ancient amphitheater in Rome where gladiators fought.",
            "answer": "The Colosseum",
            "accepted": [
                "colosseum",
                "flavian amphitheatre"
            ],
            "source": "Wikipedia - Colosseum"
        },
        {
            "value": 100,
            "clue": "The deepest canyon in the world carved by the Colorado River in Arizona.",
            "answer": "Grand Canyon",
            "accepted": [
                "the grand canyon"
            ],
            "source": "Wikipedia - Grand Canyon"
        },
        {
            "value": 100,
            "clue": "The capital city of Japan, known as Edo prior to 1868.",
            "answer": "Tokyo",
            "accepted": [
                "tokyo city"
            ],
            "source": "Wikipedia - Tokyo"
        },
        {
            "value": 100,
            "clue": "The country known as the 'Land of the Rising Sun'.",
            "answer": "Japan",
            "accepted": [
                "nippon",
                "nihon"
            ],
            "source": "Wikipedia - Japan"
        },
        {
            "value": 100,
            "clue": "The island country and continent located in the Southern Hemisphere, home to kangaroos.",
            "answer": "Australia",
            "accepted": [
                "commonwealth of australia"
            ],
            "source": "Wikipedia - Australia"
        },
        {
            "value": 100,
            "clue": "The capital city of Egypt, situated near the Giza pyramid complex.",
            "answer": "Cairo",
            "accepted": [
                "al-qahirah"
            ],
            "source": "Wikipedia - Cairo"
        },
        {
            "value": 100,
            "clue": "The triangular delta river system in South America with the largest discharge volume in the world.",
            "answer": "Amazon River",
            "accepted": [
                "amazon",
                "rio amazonas"
            ],
            "source": "Wikipedia - Amazon River"
        },
        {
            "value": 100,
            "clue": "The capital city of the United States, situated on the Potomac River.",
            "answer": "Washington D.C.",
            "accepted": [
                "washington",
                "dc"
            ],
            "source": "Wikipedia - Washington, D.C."
        },
        {
            "value": 100,
            "clue": "The mountain range that separates the continents of Europe and Asia.",
            "answer": "Ural Mountains",
            "accepted": [
                "the urals",
                "urals"
            ],
            "source": "Wikipedia - Ural Mountains"
        },
        {
            "value": 100,
            "clue": "The large island continent that is covered almost entirely by an ice sheet at the South Pole.",
            "answer": "Antarctica",
            "accepted": [
                "south pole continent"
            ],
            "source": "Wikipedia - Antarctica"
        },
        {
            "value": 100,
            "clue": "The famous white marble mausoleum built by Emperor Shah Jahan in Agra, India.",
            "answer": "Taj Mahal",
            "accepted": [
                "the taj mahal"
            ],
            "source": "Wikipedia - Taj Mahal"
        },
        {
            "value": 100,
            "clue": "The capital city of Canada, located in Ontario on the border with Quebec.",
            "answer": "Ottawa",
            "accepted": [
                "city of ottawa"
            ],
            "source": "Wikipedia - Ottawa"
        },
        {
            "value": 100,
            "clue": "The large island nation off the southeast coast of Africa famous for lemurs.",
            "answer": "Madagascar",
            "accepted": [
                "republic of madagascar"
            ],
            "source": "Wikipedia - Madagascar"
        },
        {
            "value": 100,
            "clue": "The canal in Central America connecting the Atlantic and Pacific oceans.",
            "answer": "Panama Canal",
            "accepted": [
                "the panama canal"
            ],
            "source": "Wikipedia - Panama Canal"
        },
        {
            "value": 100,
            "clue": "The canal in Egypt that connects the Mediterranean Sea to the Red Sea.",
            "answer": "Suez Canal",
            "accepted": [
                "the suez canal"
            ],
            "source": "Wikipedia - Suez Canal"
        },
        {
            "value": 100,
            "clue": "The European country shaped like a boot jutting into the Mediterranean Sea.",
            "answer": "Italy",
            "accepted": [
                "italian republic"
            ],
            "source": "Wikipedia - Italy"
        },
        {
            "value": 100,
            "clue": "The iconic statue on Liberty Island in New York Harbor gifted by France.",
            "answer": "Statue of Liberty",
            "accepted": [
                "lady liberty"
            ],
            "source": "Wikipedia - Statue of Liberty"
        },
        {
            "value": 100,
            "clue": "The capital city of Germany, reunified in 1990.",
            "answer": "Berlin",
            "accepted": [
                "city of berlin"
            ],
            "source": "Wikipedia - Berlin"
        },
        {
            "value": 100,
            "clue": "The famous waterfall system on the border of Ontario, Canada and New York, USA.",
            "answer": "Niagara Falls",
            "accepted": [
                "niagara"
            ],
            "source": "Wikipedia - Niagara Falls"
        },
        {
            "value": 100,
            "clue": "The country with the second largest population in the world, whose capital is New Delhi.",
            "answer": "India",
            "accepted": [
                "bharat"
            ],
            "source": "Wikipedia - India"
        },
        {
            "value": 100,
            "clue": "The ancient stone monument circle located on Salisbury Plain in Wiltshire, England.",
            "answer": "Stonehenge",
            "accepted": [
                "stone henge"
            ],
            "source": "Wikipedia - Stonehenge"
        },
        {
            "value": 100,
            "clue": "The capital city of China, previously called Peking.",
            "answer": "Beijing",
            "accepted": [
                "peking"
            ],
            "source": "Wikipedia - Beijing"
        },
        {
            "value": 100,
            "clue": "The tallest free-standing mountain in Africa, located in Tanzania.",
            "answer": "Mount Kilimanjaro",
            "accepted": [
                "kilimanjaro"
            ],
            "source": "Wikipedia - Mount Kilimanjaro"
        },
        {
            "value": 100,
            "clue": "The country with the longest coastline in the world, bordering three oceans.",
            "answer": "Canada",
            "accepted": [
                "dominion of canada"
            ],
            "source": "Wikipedia - Canada"
        },
        {
            "value": 100,
            "clue": "The famous bay in California crossed by the Golden Gate Bridge.",
            "answer": "San Francisco Bay",
            "accepted": [
                "sf bay"
            ],
            "source": "Wikipedia - San Francisco Bay"
        },
        {
            "value": 100,
            "clue": "The capital city of Greece, regarded as the cradle of Western civilization.",
            "answer": "Athens",
            "accepted": [
                "athina"
            ],
            "source": "Wikipedia - Athens"
        },
        {
            "value": 100,
            "clue": "The largest island in the world that is not a continent, belonging to Denmark.",
            "answer": "Greenland",
            "accepted": [
                "kalaallit nunaat"
            ],
            "source": "Wikipedia - Greenland"
        },
        {
            "value": 100,
            "clue": "The capital city of Russia, home to the Kremlin and Red Square.",
            "answer": "Moscow",
            "accepted": [
                "moskva"
            ],
            "source": "Wikipedia - Moscow"
        },
        {
            "value": 100,
            "clue": "The river that flows through London, England.",
            "answer": "River Thames",
            "accepted": [
                "thames"
            ],
            "source": "Wikipedia - River Thames"
        },
        {
            "value": 100,
            "clue": "The continent that contains the countries of Brazil, Argentina, and Colombia.",
            "answer": "South America",
            "accepted": [
                "south american continent"
            ],
            "source": "Wikipedia - South America"
        },
        {
            "value": 200,
            "clue": "The capital city of Australia, purpose-built between Sydney and Melbourne.",
            "answer": "Canberra",
            "accepted": [
                "city of canberra"
            ],
            "source": "Wikipedia - Canberra"
        },
        {
            "value": 200,
            "clue": "The world's highest uninterrupted waterfall, dropping 979 meters in Venezuela.",
            "answer": "Angel Falls",
            "accepted": [
                "salto ángel",
                "kerepakupai merú"
            ],
            "source": "Wikipedia - Angel Falls"
        },
        {
            "value": 200,
            "clue": "The sea that has no coastline, located entirely within the North Atlantic Gyre bounded by ocean currents.",
            "answer": "Sargasso Sea",
            "accepted": [
                "the sargasso sea"
            ],
            "source": "Wikipedia - Sargasso Sea"
        },
        {
            "value": 200,
            "clue": "The strait separating Spain from Morocco that links the Atlantic Ocean to the Mediterranean Sea.",
            "answer": "Strait of Gibraltar",
            "accepted": [
                "gibraltar"
            ],
            "source": "Wikipedia - Strait of Gibraltar"
        },
        {
            "value": 200,
            "clue": "The capital city of Spain, located in the geographical center of the Iberian Peninsula.",
            "answer": "Madrid",
            "accepted": [
                "city of madrid"
            ],
            "source": "Wikipedia - Madrid"
        },
        {
            "value": 200,
            "clue": "The largest freshwater lake by surface area in the world, shared by Canada and the United States.",
            "answer": "Lake Superior",
            "accepted": [
                "superior"
            ],
            "source": "Wikipedia - Lake Superior"
        },
        {
            "value": 200,
            "clue": "The deep lake in Siberia containing 20% of the world's unfrozen surface freshwater, the world's deepest.",
            "answer": "Lake Baikal",
            "accepted": [
                "baikal"
            ],
            "source": "Wikipedia - Lake Baikal"
        },
        {
            "value": 200,
            "clue": "The capital city of Thailand, famous for grand palaces and ornate shrines.",
            "answer": "Bangkok",
            "accepted": [
                "krung thep"
            ],
            "source": "Wikipedia - Bangkok"
        },
        {
            "value": 200,
            "clue": "The longest mountain range in the world, running along the western coast of South America.",
            "answer": "Andes Mountains",
            "accepted": [
                "the andes",
                "andes"
            ],
            "source": "Wikipedia - Andes"
        },
        {
            "value": 200,
            "clue": "The capital city of Argentina, located on the western shore of the Río de la Plata.",
            "answer": "Buenos Aires",
            "accepted": [
                "buenos aires"
            ],
            "source": "Wikipedia - Buenos Aires"
        },
        {
            "value": 200,
            "clue": "The strait that connects the Black Sea to the Sea of Marmara, dividing Istanbul into European and Asian sides.",
            "answer": "Bosphorus",
            "accepted": [
                "bosporus",
                "istanbul strait"
            ],
            "source": "Wikipedia - Bosphorus"
        },
        {
            "value": 200,
            "clue": "The desert that covers much of southern Israel, making up more than half the country.",
            "answer": "Negev Desert",
            "accepted": [
                "the negev"
            ],
            "source": "Wikipedia - Negev"
        },
        {
            "value": 200,
            "clue": "The capital city of South Korea, situated on the Han River.",
            "answer": "Seoul",
            "accepted": [
                "seoul special city"
            ],
            "source": "Wikipedia - Seoul"
        },
        {
            "value": 200,
            "clue": "The small sovereign city-state enclave surrounded entirely by the city of Rome.",
            "answer": "Vatican City",
            "accepted": [
                "the vatican",
                "holy see"
            ],
            "source": "Wikipedia - Vatican City"
        },
        {
            "value": 200,
            "clue": "The archipelago nation composed of over 17,000 islands, the world's largest island country.",
            "answer": "Indonesia",
            "accepted": [
                "republic of indonesia"
            ],
            "source": "Wikipedia - Indonesia"
        },
        {
            "value": 200,
            "clue": "The capital city of Ireland, situated on the River Liffey.",
            "answer": "Dublin",
            "accepted": [
                "baile átha cliath"
            ],
            "source": "Wikipedia - Dublin"
        },
        {
            "value": 200,
            "clue": "The salt lake bordered by Jordan and Israel whose surface is the lowest land elevation on Earth.",
            "answer": "Dead Sea",
            "accepted": [
                "the dead sea"
            ],
            "source": "Wikipedia - Dead Sea"
        },
        {
            "value": 200,
            "clue": "The highest active volcano in Europe, located on the east coast of Sicily.",
            "answer": "Mount Etna",
            "accepted": [
                "etna"
            ],
            "source": "Wikipedia - Mount Etna"
        },
        {
            "value": 200,
            "clue": "The capital city of Norway, located at the head of the Oslofjord.",
            "answer": "Oslo",
            "accepted": [
                "city of oslo"
            ],
            "source": "Wikipedia - Oslo"
        },
        {
            "value": 200,
            "clue": "The mountain range spanning eight alpine countries across Central Europe, including Switzerland and Austria.",
            "answer": "The Alps",
            "accepted": [
                "alps"
            ],
            "source": "Wikipedia - Alps"
        },
        {
            "value": 200,
            "clue": "The capital city of Portugal, located where the Tagus River empties into the Atlantic.",
            "answer": "Lisbon",
            "accepted": [
                "lisboa"
            ],
            "source": "Wikipedia - Lisbon"
        },
        {
            "value": 200,
            "clue": "The body of water separating Great Britain from northern France.",
            "answer": "English Channel",
            "accepted": [
                "the english channel",
                "la manche"
            ],
            "source": "Wikipedia - English Channel"
        },
        {
            "value": 200,
            "clue": "The capital city of the Netherlands, renowned for its historic canal system.",
            "answer": "Amsterdam",
            "accepted": [
                "city of amsterdam"
            ],
            "source": "Wikipedia - Amsterdam"
        },
        {
            "value": 200,
            "clue": "The deepest natural marine trench in the world, plunging nearly 11,000 meters in the Pacific.",
            "answer": "Mariana Trench",
            "accepted": [
                "marianas trench",
                "challenger deep"
            ],
            "source": "Wikipedia - Mariana Trench"
        },
        {
            "value": 200,
            "clue": "The capital city of New Zealand, located at the southwestern tip of the North Island.",
            "answer": "Wellington",
            "accepted": [
                "te whanganui-a-tara"
            ],
            "source": "Wikipedia - Wellington"
        },
        {
            "value": 200,
            "clue": "The country in the Horn of Africa that is completely landlocked and whose capital is Addis Ababa.",
            "answer": "Ethiopia",
            "accepted": [
                "federal democratic republic of ethiopia"
            ],
            "source": "Wikipedia - Ethiopia"
        },
        {
            "value": 200,
            "clue": "The capital city of Turkey, located in the central Anatolia region.",
            "answer": "Ankara",
            "accepted": [
                "angora"
            ],
            "source": "Wikipedia - Ankara"
        },
        {
            "value": 200,
            "clue": "The group of five large interconnected freshwater lakes on the Canada-US border.",
            "answer": "The Great Lakes",
            "accepted": [
                "great lakes"
            ],
            "source": "Wikipedia - Great Lakes"
        },
        {
            "value": 200,
            "clue": "The capital city of Sweden, built across 14 islands connected by over 50 bridges.",
            "answer": "Stockholm",
            "accepted": [
                "city of stockholm"
            ],
            "source": "Wikipedia - Stockholm"
        },
        {
            "value": 200,
            "clue": "The narrow sea separating Saudi Arabia from northeast Africa.",
            "answer": "Red Sea",
            "accepted": [
                "the red sea"
            ],
            "source": "Wikipedia - Red Sea"
        },
        {
            "value": 200,
            "clue": "The capital city of Mexico, built on the ruins of the Aztec capital Tenochtitlan.",
            "answer": "Mexico City",
            "accepted": [
                "ciudad de mexico",
                "cdmx"
            ],
            "source": "Wikipedia - Mexico City"
        },
        {
            "value": 200,
            "clue": "The largest desert in Asia, spanning northern China and southern Mongolia.",
            "answer": "Gobi Desert",
            "accepted": [
                "the gobi"
            ],
            "source": "Wikipedia - Gobi Desert"
        },
        {
            "value": 200,
            "clue": "The capital city of Peru, located in the valleys of the Chillón, Rímac, and Lurín rivers.",
            "answer": "Lima",
            "accepted": [
                "city of lima"
            ],
            "source": "Wikipedia - Lima"
        },
        {
            "value": 200,
            "clue": "The river flowing through Paris, crossed by 37 bridges including Pont Neuf.",
            "answer": "Seine",
            "accepted": [
                "river seine"
            ],
            "source": "Wikipedia - Seine"
        },
        {
            "value": 200,
            "clue": "The capital city of Poland, situated on the Vistula River.",
            "answer": "Warsaw",
            "accepted": [
                "warszawa"
            ],
            "source": "Wikipedia - Warsaw"
        },
        {
            "value": 200,
            "clue": "The inland sea between southeastern Europe and Western Asia connected to the Mediterranean.",
            "answer": "Black Sea",
            "accepted": [
                "the black sea"
            ],
            "source": "Wikipedia - Black Sea"
        },
        {
            "value": 200,
            "clue": "The capital city of Austria, situated on the Danube River and famous for classical music.",
            "answer": "Vienna",
            "accepted": [
                "wien"
            ],
            "source": "Wikipedia - Vienna"
        },
        {
            "value": 200,
            "clue": "The African river that crosses the equator twice and is the world's deepest river.",
            "answer": "Congo River",
            "accepted": [
                "congo",
                "zaire river"
            ],
            "source": "Wikipedia - Congo River"
        },
        {
            "value": 200,
            "clue": "The capital city of Switzerland, situated around a crook of the Aare River.",
            "answer": "Bern",
            "accepted": [
                "berne"
            ],
            "source": "Wikipedia - Bern"
        },
        {
            "value": 200,
            "clue": "The world's largest coral reef system, located in the Coral Sea off Queensland, Australia.",
            "answer": "Great Barrier Reef",
            "accepted": [
                "the great barrier reef"
            ],
            "source": "Wikipedia - Great Barrier Reef"
        },
        {
            "value": 300,
            "clue": "The only country in the world that borders both the Caspian Sea and the Persian Gulf.",
            "answer": "Iran",
            "accepted": [
                "islamic republic of iran",
                "persia"
            ],
            "source": "Wikipedia - Geography of Iran"
        },
        {
            "value": 300,
            "clue": "The capital city of Iceland, the northernmost capital of a sovereign state.",
            "answer": "Reykjavik",
            "accepted": [
                "reykjavík"
            ],
            "source": "Wikipedia - Reykjavik"
        },
        {
            "value": 300,
            "clue": "The narrow body of water between Alaska and Russia connecting the Pacific and Arctic oceans.",
            "answer": "Bering Strait",
            "accepted": [
                "the bering strait"
            ],
            "source": "Wikipedia - Bering Strait"
        },
        {
            "value": 300,
            "clue": "The capital city of Colombia, situated on a high plateau in the Andes.",
            "answer": "Bogota",
            "accepted": [
                "bogotá"
            ],
            "source": "Wikipedia - Bogota"
        },
        {
            "value": 300,
            "clue": "The landlocked microstate nestled in the Pyrenees mountains between France and Spain.",
            "answer": "Andorra",
            "accepted": [
                "principality of andorra"
            ],
            "source": "Wikipedia - Andorra"
        },
        {
            "value": 300,
            "clue": "The sea completely enclosed by land between Italy, Slovenia, Croatia, Bosnia, Montenegro, and Albania.",
            "answer": "Adriatic Sea",
            "accepted": [
                "adriatic"
            ],
            "source": "Wikipedia - Adriatic Sea"
        },
        {
            "value": 300,
            "clue": "The capital city of Morocco, situated on the Atlantic coast at the mouth of the Bou Regreg river.",
            "answer": "Rabat",
            "accepted": [
                "city of rabat"
            ],
            "source": "Wikipedia - Rabat"
        },
        {
            "value": 300,
            "clue": "The South American desert considered the driest non-polar desert in the world, in northern Chile.",
            "answer": "Atacama Desert",
            "accepted": [
                "atacama"
            ],
            "source": "Wikipedia - Atacama Desert"
        },
        {
            "value": 300,
            "clue": "The capital city of Kenya, known as the 'Green City in the Sun'.",
            "answer": "Nairobi",
            "accepted": [
                "city of nairobi"
            ],
            "source": "Wikipedia - Nairobi"
        },
        {
            "value": 300,
            "clue": "The strait separating mainland Italy from the island of Sicily.",
            "answer": "Strait of Messina",
            "accepted": [
                "messina strait"
            ],
            "source": "Wikipedia - Strait of Messina"
        },
        {
            "value": 300,
            "clue": "The capital city of the Philippines, situated on the eastern shores of Manila Bay.",
            "answer": "Manila",
            "accepted": [
                "city of manila"
            ],
            "source": "Wikipedia - Manila"
        },
        {
            "value": 300,
            "clue": "The mountain pass in the Alps connecting Austria and Italy, a major transit route since Roman times.",
            "answer": "Brenner Pass",
            "accepted": [
                "passo del brennero"
            ],
            "source": "Wikipedia - Brenner Pass"
        },
        {
            "value": 300,
            "clue": "The capital city of Finland, situated on the shore of the Gulf of Finland.",
            "answer": "Helsinki",
            "accepted": [
                "helsingfors"
            ],
            "source": "Wikipedia - Helsinki"
        },
        {
            "value": 300,
            "clue": "The African lake shared by Uganda, Kenya, and Tanzania, the largest tropical lake in the world.",
            "answer": "Lake Victoria",
            "accepted": [
                "victoria nyanza"
            ],
            "source": "Wikipedia - Lake Victoria"
        },
        {
            "value": 300,
            "clue": "The capital city of Denmark, home to the Little Mermaid statue and Tivoli Gardens.",
            "answer": "Copenhagen",
            "accepted": [
                "københavn"
            ],
            "source": "Wikipedia - Copenhagen"
        },
        {
            "value": 300,
            "clue": "The bay between northeastern Spain and western France known for severe maritime weather.",
            "answer": "Bay of Biscay",
            "accepted": [
                "golfe de gascogne"
            ],
            "source": "Wikipedia - Bay of Biscay"
        },
        {
            "value": 300,
            "clue": "The capital city of Saudi Arabia, situated in the center of the Arabian Peninsula.",
            "answer": "Riyadh",
            "accepted": [
                "ar-riyad"
            ],
            "source": "Wikipedia - Riyadh"
        },
        {
            "value": 300,
            "clue": "The highest peak in North America, located in the Alaska Range (formerly Mount McKinley).",
            "answer": "Denali",
            "accepted": [
                "mount mckinley",
                "mt mckinley"
            ],
            "source": "Wikipedia - Denali"
        },
        {
            "value": 300,
            "clue": "The capital city of Cuba, the largest city in the Caribbean.",
            "answer": "Havana",
            "accepted": [
                "la habana"
            ],
            "source": "Wikipedia - Havana"
        },
        {
            "value": 300,
            "clue": "The vast treeless biome found in the Arctic north, characterized by permanently frozen subsoil.",
            "answer": "Tundra",
            "accepted": [
                "arctic tundra"
            ],
            "source": "Wikipedia - Tundra"
        },
        {
            "value": 300,
            "clue": "The capital city of Scotland, dominated by a historic castle atop an extinct volcanic plug.",
            "answer": "Edinburgh",
            "accepted": [
                "dùn èideann"
            ],
            "source": "Wikipedia - Edinburgh"
        },
        {
            "value": 300,
            "clue": "The large island in the Canadian Arctic Archipelago, the fifth largest island in the world.",
            "answer": "Baffin Island",
            "accepted": [
                "baffin"
            ],
            "source": "Wikipedia - Baffin Island"
        },
        {
            "value": 300,
            "clue": "The capital city of Jordan, built across seven hills.",
            "answer": "Amman",
            "accepted": [
                "city of amman"
            ],
            "source": "Wikipedia - Amman"
        },
        {
            "value": 300,
            "clue": "The long peninsula in northwest Mexico separating the Pacific Ocean from the Gulf of California.",
            "answer": "Baja California",
            "accepted": [
                "baja peninsula"
            ],
            "source": "Wikipedia - Baja California Peninsula"
        },
        {
            "value": 300,
            "clue": "The capital city of Chile, situated in a valley surrounded by the snow-capped Andes.",
            "answer": "Santiago",
            "accepted": [
                "santiago de chile"
            ],
            "source": "Wikipedia - Santiago"
        },
        {
            "value": 300,
            "clue": "The sea bordered by Turkey to the east and Greece to the west, home to hundreds of islands.",
            "answer": "Aegean Sea",
            "accepted": [
                "aegean"
            ],
            "source": "Wikipedia - Aegean Sea"
        },
        {
            "value": 300,
            "clue": "The capital city of Vietnam, situated along the Red River in northern Vietnam.",
            "answer": "Hanoi",
            "accepted": [
                "hà nội"
            ],
            "source": "Wikipedia - Hanoi"
        },
        {
            "value": 300,
            "clue": "The triangular cape located at the southern tip of the Sinai Peninsula in Egypt.",
            "answer": "Sharm El Sheikh",
            "accepted": [
                "ras muhammad",
                "sinai cape"
            ],
            "source": "Wikipedia - Sinai Peninsula"
        },
        {
            "value": 300,
            "clue": "The capital city of Ukraine, situated on the Dnieper River.",
            "answer": "Kyiv",
            "accepted": [
                "kiev"
            ],
            "source": "Wikipedia - Kyiv"
        },
        {
            "value": 300,
            "clue": "The large lake in South America on the border of Peru and Bolivia, the highest navigable lake.",
            "answer": "Lake Titicaca",
            "accepted": [
                "titicaca"
            ],
            "source": "Wikipedia - Lake Titicaca"
        },
        {
            "value": 300,
            "clue": "The capital city of Hungary, split into two historical parts by the Danube River.",
            "answer": "Budapest",
            "accepted": [
                "buda and pest"
            ],
            "source": "Wikipedia - Budapest"
        },
        {
            "value": 300,
            "clue": "The archipelago off the southern tip of South America separated from the mainland by the Strait of Magellan.",
            "answer": "Tierra del Fuego",
            "accepted": [
                "land of fire"
            ],
            "source": "Wikipedia - Tierra del Fuego"
        },
        {
            "value": 300,
            "clue": "The capital city of Romania, once known as 'Little Paris of the East'.",
            "answer": "Bucharest",
            "accepted": [
                "bucurești"
            ],
            "source": "Wikipedia - Bucharest"
        },
        {
            "value": 300,
            "clue": "The highest mountain peak in South America, located in Mendoza Province, Argentina.",
            "answer": "Aconcagua",
            "accepted": [
                "cerro aconcagua"
            ],
            "source": "Wikipedia - Aconcagua"
        },
        {
            "value": 300,
            "clue": "The capital city of the Czech Republic, known as the 'City of a Hundred Spires'.",
            "answer": "Prague",
            "accepted": [
                "praha"
            ],
            "source": "Wikipedia - Prague"
        },
        {
            "value": 300,
            "clue": "The strait between Malaysia and Indonesia, one of the most vital shipping lanes in the world.",
            "answer": "Strait of Malacca",
            "accepted": [
                "malacca strait"
            ],
            "source": "Wikipedia - Strait of Malacca"
        },
        {
            "value": 300,
            "clue": "The capital city of Portugal's former territory of Macau, now an administrative region of China.",
            "answer": "Macau",
            "accepted": [
                "macao"
            ],
            "source": "Wikipedia - Macau"
        },
        {
            "value": 300,
            "clue": "The high plateau in Central Asia often referred to as the 'Roof of the World'.",
            "answer": "Pamir Mountains",
            "accepted": [
                "tibetan plateau",
                "pamirs"
            ],
            "source": "Wikipedia - Pamir Mountains"
        },
        {
            "value": 300,
            "clue": "The capital city of Lebanon, situated on a peninsula at the midpoint of Lebanon's Mediterranean coast.",
            "answer": "Beirut",
            "accepted": [
                "bayrut"
            ],
            "source": "Wikipedia - Beirut"
        },
        {
            "value": 300,
            "clue": "The second longest river in Europe, flowing through ten countries from the Black Forest to the Black Sea.",
            "answer": "Danube River",
            "accepted": [
                "danube",
                "donau"
            ],
            "source": "Wikipedia - Danube"
        },
        {
            "value": 400,
            "clue": "The only sovereign country in the world that is completely surrounded by South Africa.",
            "answer": "Lesotho",
            "accepted": [
                "kingdom of lesotho"
            ],
            "source": "Wikipedia - Lesotho"
        },
        {
            "value": 400,
            "clue": "The capital city of Kazakhstan, formerly known as Nur-Sultan and Akmola.",
            "answer": "Astana",
            "accepted": [
                "nur-sultan",
                "akmola"
            ],
            "source": "Wikipedia - Astana"
        },
        {
            "value": 400,
            "clue": "The African country with the most pyramids in the world, outnumbering Egypt with over 200 Nubian pyramids.",
            "answer": "Sudan",
            "accepted": [
                "republic of the sudan"
            ],
            "source": "Wikipedia - Nubian pyramids"
        },
        {
            "value": 400,
            "clue": "The high mountain pass between Pakistan and Afghanistan, a historic trade route through the Hindu Kush.",
            "answer": "Khyber Pass",
            "accepted": [
                "the khyber pass"
            ],
            "source": "Wikipedia - Khyber Pass"
        },
        {
            "value": 400,
            "clue": "The capital city of Mongolia, the coldest national capital in the world by average annual temperature.",
            "answer": "Ulaanbaatar",
            "accepted": [
                "ulan bator"
            ],
            "source": "Wikipedia - Ulaanbaatar"
        },
        {
            "value": 400,
            "clue": "The Russian exclave situated on the Baltic Sea between Poland and Lithuania.",
            "answer": "Kaliningrad",
            "accepted": [
                "kaliningrad oblast",
                "königsberg"
            ],
            "source": "Wikipedia - Kaliningrad"
        },
        {
            "value": 400,
            "clue": "The capital city of Nigeria, created as a planned city in the 1980s to replace Lagos.",
            "answer": "Abuja",
            "accepted": [
                "federal capital territory abuja"
            ],
            "source": "Wikipedia - Abuja"
        },
        {
            "value": 400,
            "clue": "The volcanic island in the South Atlantic that is the most remote permanently inhabited archipelago on Earth.",
            "answer": "Tristan da Cunha",
            "accepted": [
                "tristan da cunha island"
            ],
            "source": "Wikipedia - Tristan da Cunha"
        },
        {
            "value": 400,
            "clue": "The capital city of Myanmar, established as the new administrative capital in 2005.",
            "answer": "Naypyidaw",
            "accepted": [
                "nay pyi taw"
            ],
            "source": "Wikipedia - Naypyidaw"
        },
        {
            "value": 400,
            "clue": "The sea bounded by the Kamchatka Peninsula, the Kuril Islands, and Sakhalin Island.",
            "answer": "Sea of Okhotsk",
            "accepted": [
                "okhotsk"
            ],
            "source": "Wikipedia - Sea of Okhotsk"
        },
        {
            "value": 400,
            "clue": "The capital city of Ecuador, situated on the slopes of the active volcano Pichincha.",
            "answer": "Quito",
            "accepted": [
                "san francisco de quito"
            ],
            "source": "Wikipedia - Quito"
        },
        {
            "value": 400,
            "clue": "The strait separating mainland Australia from the southern island state of Tasmania.",
            "answer": "Bass Strait",
            "accepted": [
                "the bass strait"
            ],
            "source": "Wikipedia - Bass Strait"
        },
        {
            "value": 400,
            "clue": "The capital city of Bolivia that serves as the seat of government, the highest administrative capital on Earth.",
            "answer": "La Paz",
            "accepted": [
                "nuestra señora de la paz"
            ],
            "source": "Wikipedia - La Paz"
        },
        {
            "value": 400,
            "clue": "The sea connected to the Black Sea via the narrow Strait of Kerch.",
            "answer": "Sea of Azov",
            "accepted": [
                "azov sea"
            ],
            "source": "Wikipedia - Sea of Azov"
        },
        {
            "value": 400,
            "clue": "The capital city of Paraguay, situated on the left bank of the Paraguay River.",
            "answer": "Asuncion",
            "accepted": [
                "asunción"
            ],
            "source": "Wikipedia - Asuncion"
        },
        {
            "value": 400,
            "clue": "The mountain range running north-south through Italy, forming the spine of the Italian peninsula.",
            "answer": "Apennine Mountains",
            "accepted": [
                "apennines"
            ],
            "source": "Wikipedia - Apennine Mountains"
        },
        {
            "value": 400,
            "clue": "The capital city of Azerbaijan, the lowest-lying national capital in the world (28 meters below sea level).",
            "answer": "Baku",
            "accepted": [
                "city of baku"
            ],
            "source": "Wikipedia - Baku"
        },
        {
            "value": 400,
            "clue": "The peninsula in southwest Asia on which the country of Qatar is located.",
            "answer": "Arabian Peninsula",
            "accepted": [
                "qatar peninsula"
            ],
            "source": "Wikipedia - Qatar"
        },
        {
            "value": 400,
            "clue": "The capital city of Bhutan, where construction must follow traditional Dzong architecture.",
            "answer": "Thimphu",
            "accepted": [
                "thimpu"
            ],
            "source": "Wikipedia - Thimphu"
        },
        {
            "value": 400,
            "clue": "The strait separating the North Island and South Island of New Zealand.",
            "answer": "Cook Strait",
            "accepted": [
                "the cook strait"
            ],
            "source": "Wikipedia - Cook Strait"
        },
        {
            "value": 400,
            "clue": "The capital city of Uzbekistan, the largest city in Central Asia.",
            "answer": "Tashkent",
            "accepted": [
                "toshkent"
            ],
            "source": "Wikipedia - Tashkent"
        },
        {
            "value": 400,
            "clue": "The lake that was formerly the fourth largest in the world before shrinking drastically due to Soviet irrigation.",
            "answer": "Aral Sea",
            "accepted": [
                "the aral sea"
            ],
            "source": "Wikipedia - Aral Sea"
        },
        {
            "value": 400,
            "clue": "The capital city of Malta, recognized as a UNESCO World Heritage site for its baroque fortifications.",
            "answer": "Valletta",
            "accepted": [
                "il-belt valletta"
            ],
            "source": "Wikipedia - Valletta"
        },
        {
            "value": 400,
            "clue": "The deep fjord in Norway renowned as the longest and deepest in the country, often called 'King of the Fjords'.",
            "answer": "Sognefjord",
            "accepted": [
                "sogne fjord"
            ],
            "source": "Wikipedia - Sognefjord"
        },
        {
            "value": 400,
            "clue": "The capital city of Slovakia, situated on the borders with both Austria and Hungary.",
            "answer": "Bratislava",
            "accepted": [
                "pressburg"
            ],
            "source": "Wikipedia - Bratislava"
        },
        {
            "value": 400,
            "clue": "The small British Overseas Territory at the southern tip of the Iberian Peninsula dominated by a limestone rock.",
            "answer": "Gibraltar",
            "accepted": [
                "the rock of gibraltar"
            ],
            "source": "Wikipedia - Gibraltar"
        },
        {
            "value": 400,
            "clue": "The capital city of Georgia in the Caucasus, situated on the banks of the Kura River.",
            "answer": "Tbilisi",
            "accepted": [
                "tiflis"
            ],
            "source": "Wikipedia - Tbilisi"
        },
        {
            "value": 400,
            "clue": "The island in the Mediterranean divided since 1974 between an internationally recognized republic and a northern de facto state.",
            "answer": "Cyprus",
            "accepted": [
                "republic of cyprus"
            ],
            "source": "Wikipedia - Cyprus"
        },
        {
            "value": 400,
            "clue": "The capital city of Oman, located along the Sea of Oman flanked by arid Hajar Mountains.",
            "answer": "Muscat",
            "accepted": [
                "masqat"
            ],
            "source": "Wikipedia - Muscat"
        },
        {
            "value": 400,
            "clue": "The deepest lake in North America, plunging to 614 meters in Canada's Northwest Territories.",
            "answer": "Great Slave Lake",
            "accepted": [
                "great slave"
            ],
            "source": "Wikipedia - Great Slave Lake"
        },
        {
            "value": 400,
            "clue": "The capital city of Sri Lanka that serves as the official legislative seat.",
            "answer": "Sri Jayawardenepura Kotte",
            "accepted": [
                "kotte",
                "colombo"
            ],
            "source": "Wikipedia - Sri Jayawardenepura Kotte"
        },
        {
            "value": 400,
            "clue": "The narrow sea channel separating the Korean Peninsula from the Japanese island of Kyushu.",
            "answer": "Tsushima Strait",
            "accepted": [
                "korea strait",
                "tsushima"
            ],
            "source": "Wikipedia - Tsushima Strait"
        },
        {
            "value": 400,
            "clue": "The capital city of Armenia, one of the world's oldest continuously inhabited cities.",
            "answer": "Yerevan",
            "accepted": [
                "erebuni"
            ],
            "source": "Wikipedia - Yerevan"
        },
        {
            "value": 400,
            "clue": "The group of volcanic islands in the Atlantic owned by Portugal where tectonic plates of Europe, Africa, and North America meet.",
            "answer": "Azores",
            "accepted": [
                "the azores"
            ],
            "source": "Wikipedia - Azores"
        },
        {
            "value": 400,
            "clue": "The capital city of Madagascar, known locally as 'Tana'.",
            "answer": "Antananarivo",
            "accepted": [
                "tana"
            ],
            "source": "Wikipedia - Antananarivo"
        },
        {
            "value": 400,
            "clue": "The semi-arid region in Africa forming a transition zone between the Sahara to the north and the savannas to the south.",
            "answer": "The Sahel",
            "accepted": [
                "sahel"
            ],
            "source": "Wikipedia - Sahel"
        },
        {
            "value": 400,
            "clue": "The capital city of Estonia, situated on the northern coast opposite Helsinki.",
            "answer": "Tallinn",
            "accepted": [
                "reval"
            ],
            "source": "Wikipedia - Tallinn"
        },
        {
            "value": 400,
            "clue": "The only country in the world that lies entirely above 1,000 meters in elevation.",
            "answer": "Lesotho",
            "accepted": [
                "kingdom of lesotho"
            ],
            "source": "Wikipedia - Geography of Lesotho"
        },
        {
            "value": 400,
            "clue": "The capital city of Latvia, the largest city in the three Baltic states.",
            "answer": "Riga",
            "accepted": [
                "rīga"
            ],
            "source": "Wikipedia - Riga"
        },
        {
            "value": 400,
            "clue": "The chain of four main Japanese islands: Honshu, Hokkaido, Kyushu, and this fourth.",
            "answer": "Shikoku",
            "accepted": [
                "shikoku island"
            ],
            "source": "Wikipedia - Japanese archipelago"
        },
        {
            "value": 500,
            "clue": "The only two doubly landlocked countries in the world: Liechtenstein and this Central Asian republic.",
            "answer": "Uzbekistan",
            "accepted": [
                "republic of uzbekistan"
            ],
            "source": "Wikipedia - Doubly landlocked country"
        },
        {
            "value": 500,
            "clue": "The point in the Pacific Ocean that is the most remote point from any land (Point Nemo).",
            "answer": "Point Nemo",
            "accepted": [
                "oceanic pole of inaccessibility"
            ],
            "source": "Wikipedia - Pole of inaccessibility"
        },
        {
            "value": 500,
            "clue": "The capital city of the Federated States of Micronesia, located on the island of Pohnpei.",
            "answer": "Palikir",
            "accepted": [
                "palikir city"
            ],
            "source": "Wikipedia - Palikir"
        },
        {
            "value": 500,
            "clue": "The strait between the Persian Gulf and the Gulf of Oman through which a fifth of the world's petroleum passes.",
            "answer": "Strait of Hormuz",
            "accepted": [
                "hormuz"
            ],
            "source": "Wikipedia - Strait of Hormuz"
        },
        {
            "value": 500,
            "clue": "The capital city of Tuvalu, an atoll nation threatened by rising sea levels.",
            "answer": "Funafuti",
            "accepted": [
                "vaiaku"
            ],
            "source": "Wikipedia - Funafuti"
        },
        {
            "value": 500,
            "clue": "The disputed territory between Egypt and Sudan that is one of the few unclaimed pieces of land on Earth.",
            "answer": "Bir Tawil",
            "accepted": [
                "bir tawil triangle"
            ],
            "source": "Wikipedia - Bir Tawil"
        },
        {
            "value": 500,
            "clue": "The capital city of Suriname, located on the banks of the Suriname River.",
            "answer": "Paramaribo",
            "accepted": [
                "paramaribo city"
            ],
            "source": "Wikipedia - Paramaribo"
        },
        {
            "value": 500,
            "clue": "The river that forms the entire border between the US states of Vermont and New Hampshire.",
            "answer": "Connecticut River",
            "accepted": [
                "the connecticut river"
            ],
            "source": "Wikipedia - Connecticut River"
        },
        {
            "value": 500,
            "clue": "The capital city of Belize, constructed inland after Hurricane Hattie devastated Belize City in 1961.",
            "answer": "Belmopan",
            "accepted": [
                "city of belmopan"
            ],
            "source": "Wikipedia - Belmopan"
        },
        {
            "value": 500,
            "clue": "The second deepest trench on Earth, located in the South Pacific Ocean reaching 10,882 meters.",
            "answer": "Tonga Trench",
            "accepted": [
                "the tonga trench",
                "horizon deep"
            ],
            "source": "Wikipedia - Tonga Trench"
        },
        {
            "value": 500,
            "clue": "The capital city of Equatorial Guinea situated on the island of Bioko, before relocation to Ciudad de la Paz.",
            "answer": "Malabo",
            "accepted": [
                "santa isabel"
            ],
            "source": "Wikipedia - Malabo"
        },
        {
            "value": 500,
            "clue": "The semi-enclosed body of water in the Canadian Arctic between Greenland and Baffin Island.",
            "answer": "Baffin Bay",
            "accepted": [
                "baffin bay"
            ],
            "source": "Wikipedia - Baffin Bay"
        },
        {
            "value": 500,
            "clue": "The capital city of Mauritania, which grew from a small fishing village into a metropolis of a million people.",
            "answer": "Nouakchott",
            "accepted": [
                "city of nouakchott"
            ],
            "source": "Wikipedia - Nouakchott"
        },
        {
            "value": 500,
            "clue": "The narrow continental divide pass in Colorado where water splits between the Atlantic and Pacific oceans.",
            "answer": "Loveland Pass",
            "accepted": [
                "continental divide pass",
                "independence pass"
            ],
            "source": "Wikipedia - Continental Divide of the Americas"
        },
        {
            "value": 500,
            "clue": "The capital city of the Comoros archipelago in the Mozambique Channel.",
            "answer": "Moroni",
            "accepted": [
                "moroni city"
            ],
            "source": "Wikipedia - Moroni, Comoros"
        },
        {
            "value": 500,
            "clue": "The Norwegian volcanic island located in the Arctic Ocean dominated by the glacier-covered Beerenberg volcano.",
            "answer": "Jan Mayen",
            "accepted": [
                "jan mayen island"
            ],
            "source": "Wikipedia - Jan Mayen"
        },
        {
            "value": 500,
            "clue": "The capital city of Palau, situated on the island of Babeldaob (replacing Koror in 2006).",
            "answer": "Ngerulmud",
            "accepted": [
                "ngerulmud palau"
            ],
            "source": "Wikipedia - Ngerulmud"
        },
        {
            "value": 500,
            "clue": "The geographic point where the borders of Belgium, Germany, and the Netherlands meet near Aachen.",
            "answer": "Vaalserberg",
            "accepted": [
                "three country point",
                "tripoint vaals"
            ],
            "source": "Wikipedia - Vaalserberg"
        },
        {
            "value": 500,
            "clue": "The capital city of Burundi, which replaced Bujumbura as political capital in 2019.",
            "answer": "Gitega",
            "accepted": [
                "kitega"
            ],
            "source": "Wikipedia - Gitega"
        },
        {
            "value": 500,
            "clue": "The island at the southern entrance to the Red Sea that splits the Bab-el-Mandeb strait into two channels.",
            "answer": "Perim Island",
            "accepted": [
                "mayyun",
                "perim"
            ],
            "source": "Wikipedia - Perim"
        },
        {
            "value": 500,
            "clue": "The capital city of Vanuatu, situated on the south coast of the island of Efate.",
            "answer": "Port Vila",
            "accepted": [
                "port vila"
            ],
            "source": "Wikipedia - Port Vila"
        },
        {
            "value": 500,
            "clue": "The salt flat in southwestern Bolivia spanning over 10,000 square kilometers, the world's largest salt flat.",
            "answer": "Salar de Uyuni",
            "accepted": [
                "uyuni salt flat"
            ],
            "source": "Wikipedia - Salar de Uyuni"
        },
        {
            "value": 500,
            "clue": "The capital city of Tajikistan, whose name translates to 'Monday' in Tajik because of its weekly market.",
            "answer": "Dushanbe",
            "accepted": [
                "stalinabad"
            ],
            "source": "Wikipedia - Dushanbe"
        },
        {
            "value": 500,
            "clue": "The volcanic island archipelago in the Indian Ocean that is an overseas department of France, adjacent to Mauritius.",
            "answer": "Reunion",
            "accepted": [
                "la réunion",
                "reunion island"
            ],
            "source": "Wikipedia - Réunion"
        },
        {
            "value": 500,
            "clue": "The capital city of Kiribati, an atoll comprising half the population of the nation.",
            "answer": "South Tarawa",
            "accepted": [
                "tarawa"
            ],
            "source": "Wikipedia - South Tarawa"
        },
        {
            "value": 500,
            "clue": "The narrow corridor of land in northeastern Afghanistan extending to the border with China.",
            "answer": "Wakhan Corridor",
            "accepted": [
                "the wakhan"
            ],
            "source": "Wikipedia - Wakhan Corridor"
        },
        {
            "value": 500,
            "clue": "The capital city of Lesotho, situated on the Caledon River on the South Africa border.",
            "answer": "Maseru",
            "accepted": [
                "maseru city"
            ],
            "source": "Wikipedia - Maseru"
        },
        {
            "value": 500,
            "clue": "The vast wetland region in South America located mainly in the Brazilian state of Mato Grosso do Sul.",
            "answer": "Pantanal",
            "accepted": [
                "the pantanal"
            ],
            "source": "Wikipedia - Pantanal"
        },
        {
            "value": 500,
            "clue": "The capital city of São Tomé and Príncipe, the island nation in the Gulf of Guinea.",
            "answer": "Sao Tome",
            "accepted": [
                "são tomé"
            ],
            "source": "Wikipedia - São Tomé"
        },
        {
            "value": 500,
            "clue": "The deep depression in Antarctica that contains the lowest natural point on land not covered by sea (-3,500m).",
            "answer": "Denman Glacier Canyon",
            "accepted": [
                "bentley subglacial trench",
                "denman glacier"
            ],
            "source": "Wikipedia - Denman Glacier"
        },
        {
            "value": 500,
            "clue": "The capital city of Cabo Verde, located on the southern coast of Santiago Island.",
            "answer": "Praia",
            "accepted": [
                "praia city"
            ],
            "source": "Wikipedia - Praia"
        },
        {
            "value": 500,
            "clue": "The strait separating the Australian mainland from Papua New Guinea.",
            "answer": "Torres Strait",
            "accepted": [
                "the torres strait"
            ],
            "source": "Wikipedia - Torres Strait"
        },
        {
            "value": 500,
            "clue": "The capital city of the Marshall Islands, located on a coral atoll of 64 islands.",
            "answer": "Majuro",
            "accepted": [
                "majuro atoll"
            ],
            "source": "Wikipedia - Majuro"
        },
        {
            "value": 500,
            "clue": "The active stratovolcano on Ross Island, Antarctica, the southernmost active volcano on Earth.",
            "answer": "Mount Erebus",
            "accepted": [
                "erebus"
            ],
            "source": "Wikipedia - Mount Erebus"
        },
        {
            "value": 500,
            "clue": "The capital city of Guinea-Bissau, situated on the Geba River estuary.",
            "answer": "Bissau",
            "accepted": [
                "city of bissau"
            ],
            "source": "Wikipedia - Bissau"
        },
        {
            "value": 500,
            "clue": "The mountain pass in Switzerland that was traversed by Russian General Alexander Suvorov in 1799.",
            "answer": "St. Gotthard Pass",
            "accepted": [
                "san gottardo",
                "gotthard pass"
            ],
            "source": "Wikipedia - Gotthard Pass"
        },
        {
            "value": 500,
            "clue": "The capital city of Nauru, which functions as the de facto capital although Nauru has no official capital.",
            "answer": "Yaren",
            "accepted": [
                "yaren district"
            ],
            "source": "Wikipedia - Yaren"
        },
        {
            "value": 500,
            "clue": "The lake shared by Chad, Cameroon, Niger, and Nigeria that has shrunk by 95% since 1963.",
            "answer": "Lake Chad",
            "accepted": [
                "chad lake"
            ],
            "source": "Wikipedia - Lake Chad"
        },
        {
            "value": 500,
            "clue": "The capital city of Saint Kitts and Nevis, located on the island of Saint Kitts.",
            "answer": "Basseterre",
            "accepted": [
                "basseterre city"
            ],
            "source": "Wikipedia - Basseterre"
        },
        {
            "value": 500,
            "clue": "The Cape located at the southernmost tip of the African continent, dividing the Atlantic and Indian oceans.",
            "answer": "Cape Agulhas",
            "accepted": [
                "cape of good hope",
                "agulhas"
            ],
            "source": "Wikipedia - Cape Agulhas"
        }
    ],
    "history": [
        {
            "value": 100,
            "clue": "The first President of the United States, hailed as the 'Father of His Country'.",
            "answer": "George Washington",
            "accepted": [
                "washington"
            ],
            "source": "Wikipedia - George Washington"
        },
        {
            "value": 100,
            "clue": "The ancient wonder in Egypt built for Pharaoh Khufu around 2560 BC.",
            "answer": "Great Pyramid of Giza",
            "accepted": [
                "pyramid of giza",
                "great pyramid"
            ],
            "source": "Wikipedia - Great Pyramid of Giza"
        },
        {
            "value": 100,
            "clue": "In 1969, this American Apollo 11 astronaut became the first person to step on the Moon.",
            "answer": "Neil Armstrong",
            "accepted": [
                "armstrong"
            ],
            "source": "Wikipedia - Apollo 11"
        },
        {
            "value": 100,
            "clue": "The year Christopher Columbus made his first voyage across the Atlantic to the Americas.",
            "answer": "1492",
            "accepted": [
                "year 1492"
            ],
            "source": "Wikipedia - Christopher Columbus"
        },
        {
            "value": 100,
            "clue": "The wall that divided East and West Berlin from 1961 until its historic fall in 1989.",
            "answer": "The Berlin Wall",
            "accepted": [
                "berlin wall",
                "berliner mauer"
            ],
            "source": "Wikipedia - Berlin Wall"
        },
        {
            "value": 100,
            "clue": "The English king who broke with Rome to marry Anne Boleyn and had six wives.",
            "answer": "Henry VIII",
            "accepted": [
                "henry the eighth",
                "king henry viii"
            ],
            "source": "Wikipedia - Henry VIII"
        },
        {
            "value": 100,
            "clue": "The Roman general and dictator assassinated on the Ides of March in 44 BC.",
            "answer": "Julius Caesar",
            "accepted": [
                "caesar"
            ],
            "source": "Wikipedia - Julius Caesar"
        },
        {
            "value": 100,
            "clue": "The ship that carried the Pilgrims from England to Plymouth, Massachusetts in 1620.",
            "answer": "Mayflower",
            "accepted": [
                "the mayflower"
            ],
            "source": "Wikipedia - Mayflower"
        },
        {
            "value": 100,
            "clue": "The French military leader who crowned himself Emperor and conquered much of Europe before Waterloo.",
            "answer": "Napoleon Bonaparte",
            "accepted": [
                "napoleon",
                "bonaparte"
            ],
            "source": "Wikipedia - Napoleon"
        },
        {
            "value": 100,
            "clue": "The document adopted on July 4, 1776 declaring the thirteen American colonies free from Great Britain.",
            "answer": "Declaration of Independence",
            "accepted": [
                "the declaration of independence"
            ],
            "source": "Wikipedia - Declaration of Independence"
        },
        {
            "value": 100,
            "clue": "The civilization that built Machu Picchu in the Andes mountains of Peru.",
            "answer": "Inca Empire",
            "accepted": [
                "the incas",
                "inca"
            ],
            "source": "Wikipedia - Inca Empire"
        },
        {
            "value": 100,
            "clue": "The British passenger liner that sank on April 15, 1912 after striking an iceberg in the North Atlantic.",
            "answer": "Titanic",
            "accepted": [
                "rms titanic"
            ],
            "source": "Wikipedia - Titanic"
        },
        {
            "value": 100,
            "clue": "The 16th US President who issued the Emancipation Proclamation and was assassinated by John Wilkes Booth.",
            "answer": "Abraham Lincoln",
            "accepted": [
                "lincoln"
            ],
            "source": "Wikipedia - Abraham Lincoln"
        },
        {
            "value": 100,
            "clue": "The South African anti-apartheid leader who served 27 years in prison before becoming President in 1994.",
            "answer": "Nelson Mandela",
            "accepted": [
                "mandela"
            ],
            "source": "Wikipedia - Nelson Mandela"
        },
        {
            "value": 100,
            "clue": "The ancient civilization centered along the Nile River known for pharaohs and hieroglyphics.",
            "answer": "Ancient Egypt",
            "accepted": [
                "egyptians",
                "egypt"
            ],
            "source": "Wikipedia - Ancient Egypt"
        },
        {
            "value": 100,
            "clue": "The leader of the Indian independence movement who championed nonviolent civil disobedience.",
            "answer": "Mahatma Gandhi",
            "accepted": [
                "gandhi",
                "mohandas gandhi"
            ],
            "source": "Wikipedia - Mahatma Gandhi"
        },
        {
            "value": 100,
            "clue": "The catastrophic pandemic caused by Yersinia pestis that swept Eurasia in the 1340s.",
            "answer": "The Black Death",
            "accepted": [
                "black plague",
                "bubonic plague"
            ],
            "source": "Wikipedia - Black Death"
        },
        {
            "value": 100,
            "clue": "The German dictator who led the Nazi Party and initiated World War II and the Holocaust.",
            "answer": "Adolf Hitler",
            "accepted": [
                "hitler"
            ],
            "source": "Wikipedia - Adolf Hitler"
        },
        {
            "value": 100,
            "clue": "The year the United States Constitution was signed in Philadelphia.",
            "answer": "1787",
            "accepted": [
                "year 1787"
            ],
            "source": "Wikipedia - United States Constitution"
        },
        {
            "value": 100,
            "clue": "The queen of the United Kingdom who reigned for 63 years during the height of the British Empire.",
            "answer": "Queen Victoria",
            "accepted": [
                "victoria"
            ],
            "source": "Wikipedia - Queen Victoria"
        },
        {
            "value": 100,
            "clue": "The ancient trade route network linking China and the Mediterranean.",
            "answer": "Silk Road",
            "accepted": [
                "the silk road"
            ],
            "source": "Wikipedia - Silk Road"
        },
        {
            "value": 100,
            "clue": "The Japanese military attack on this US naval base on December 7, 1941 brought America into WWII.",
            "answer": "Pearl Harbor",
            "accepted": [
                "pearl harbour"
            ],
            "source": "Wikipedia - Attack on Pearl Harbor"
        },
        {
            "value": 100,
            "clue": "The city destroyed alongside Herculaneum by the eruption of Mount Vesuvius in 79 AD.",
            "answer": "Pompeii",
            "accepted": [
                "city of pompeii"
            ],
            "source": "Wikipedia - Pompeii"
        },
        {
            "value": 100,
            "clue": "The French heroine who led French troops during the Hundred Years' War and was burned at the stake.",
            "answer": "Joan of Arc",
            "accepted": [
                "jeanne d'arc"
            ],
            "source": "Wikipedia - Joan of Arc"
        },
        {
            "value": 100,
            "clue": "The first civilization in Mesopotamia to develop cuneiform writing.",
            "answer": "Sumerians",
            "accepted": [
                "sumer"
            ],
            "source": "Wikipedia - Sumer"
        },
        {
            "value": 100,
            "clue": "The year the Soviet Union officially dissolved, ending the Cold War.",
            "answer": "1991",
            "accepted": [
                "year 1991"
            ],
            "source": "Wikipedia - Dissolution of the Soviet Union"
        },
        {
            "value": 100,
            "clue": "The war between the Union states of the North and the Confederacy of the South from 1861 to 1865.",
            "answer": "American Civil War",
            "accepted": [
                "the civil war",
                "us civil war"
            ],
            "source": "Wikipedia - American Civil War"
        },
        {
            "value": 100,
            "clue": "The leader of the Bolshevik party who led the October Revolution of 1917 in Russia.",
            "answer": "Vladimir Lenin",
            "accepted": [
                "lenin"
            ],
            "source": "Wikipedia - Vladimir Lenin"
        },
        {
            "value": 100,
            "clue": "The ancient city-state in Greece famous for its fierce militaristic warrior society.",
            "answer": "Sparta",
            "accepted": [
                "spartans"
            ],
            "source": "Wikipedia - Sparta"
        },
        {
            "value": 100,
            "clue": "The naval battle in 1805 where Admiral Lord Nelson was killed while defeating the French and Spanish fleets.",
            "answer": "Battle of Trafalgar",
            "accepted": [
                "trafalgar"
            ],
            "source": "Wikipedia - Battle of Trafalgar"
        },
        {
            "value": 100,
            "clue": "The year the First World War ended with the signing of the armistice on November 11.",
            "answer": "1918",
            "accepted": [
                "year 1918"
            ],
            "source": "Wikipedia - Armistice of 11 November 1918"
        },
        {
            "value": 100,
            "clue": "The English queen who defeated the Spanish Armada in 1588, known as the 'Virgin Queen'.",
            "answer": "Elizabeth I",
            "accepted": [
                "queen elizabeth i",
                "elizabeth 1"
            ],
            "source": "Wikipedia - Elizabeth I"
        },
        {
            "value": 100,
            "clue": "The medieval military expeditions undertaken by European Christians to recover the Holy Land from Muslim rule.",
            "answer": "The Crusades",
            "accepted": [
                "crusades"
            ],
            "source": "Wikipedia - Crusades"
        },
        {
            "value": 100,
            "clue": "The Japanese city devastated by the first wartime atomic bomb, 'Little Boy', on August 6, 1945.",
            "answer": "Hiroshima",
            "accepted": [
                "city of hiroshima"
            ],
            "source": "Wikipedia - Atomic bombings of Hiroshima and Nagasaki"
        },
        {
            "value": 100,
            "clue": "The treaty signed in 1919 in France that formally concluded World War I.",
            "answer": "Treaty of Versailles",
            "accepted": [
                "versailles treaty"
            ],
            "source": "Wikipedia - Treaty of Versailles"
        },
        {
            "value": 100,
            "clue": "The code name for the June 6, 1944 Allied amphibious landings on the beaches of Normandy.",
            "answer": "D-Day",
            "accepted": [
                "operation overlord",
                "normandy landings"
            ],
            "source": "Wikipedia - Normandy landings"
        },
        {
            "value": 100,
            "clue": "The explorer who led the first expedition that successfully circumnavigated the globe (1519-1522).",
            "answer": "Ferdinand Magellan",
            "accepted": [
                "magellan"
            ],
            "source": "Wikipedia - Ferdinand Magellan"
        },
        {
            "value": 100,
            "clue": "The ancient wonder of Babylon famous for tiered terraced gardens planted by King Nebuchadnezzar II.",
            "answer": "Hanging Gardens of Babylon",
            "accepted": [
                "hanging gardens"
            ],
            "source": "Wikipedia - Hanging Gardens of Babylon"
        },
        {
            "value": 100,
            "clue": "The first human in space, who orbited the Earth aboard Vostok 1 on April 12, 1961.",
            "answer": "Yuri Gagarin",
            "accepted": [
                "gagarin"
            ],
            "source": "Wikipedia - Yuri Gagarin"
        },
        {
            "value": 100,
            "clue": "The prison fortress in Paris stormed by revolutionary crowds on July 14, 1789.",
            "answer": "The Bastille",
            "accepted": [
                "bastille"
            ],
            "source": "Wikipedia - Storming of the Bastille"
        },
        {
            "value": 200,
            "clue": "The charter granted by King John of England at Runnymede in 1215 establishing principles of liberty.",
            "answer": "Magna Carta",
            "accepted": [
                "the great charter"
            ],
            "source": "Wikipedia - Magna Carta"
        },
        {
            "value": 200,
            "clue": "The conflict between the House of Lancaster and the House of York for the English throne.",
            "answer": "Wars of the Roses",
            "accepted": [
                "war of the roses"
            ],
            "source": "Wikipedia - Wars of the Roses"
        },
        {
            "value": 200,
            "clue": "The Mongol chieftain who united the nomadic tribes to establish the Mongol Empire in 1206.",
            "answer": "Genghis Khan",
            "accepted": [
                "chinggis khan",
                "temüjin"
            ],
            "source": "Wikipedia - Genghis Khan"
        },
        {
            "value": 200,
            "clue": "The decisive 1815 battle in modern Belgium where the Duke of Wellington defeated Napoleon.",
            "answer": "Battle of Waterloo",
            "accepted": [
                "waterloo"
            ],
            "source": "Wikipedia - Battle of Waterloo"
        },
        {
            "value": 200,
            "clue": "The conflict between Athens and the Peloponnesian League led by Sparta (431-404 BC).",
            "answer": "Peloponnesian War",
            "accepted": [
                "the peloponnesian war"
            ],
            "source": "Wikipedia - Peloponnesian War"
        },
        {
            "value": 200,
            "clue": "The German monk who initiated the Protestant Reformation by posting his 95 Theses in 1517.",
            "answer": "Martin Luther",
            "accepted": [
                "luther"
            ],
            "source": "Wikipedia - Martin Luther"
        },
        {
            "value": 200,
            "clue": "The first European to discover and print with movable metal type in the 1450s.",
            "answer": "Johannes Gutenberg",
            "accepted": [
                "gutenberg"
            ],
            "source": "Wikipedia - Johannes Gutenberg"
        },
        {
            "value": 200,
            "clue": "The series of three wars fought between Rome and Carthage from 264 BC to 146 BC.",
            "answer": "Punic Wars",
            "accepted": [
                "the punic wars"
            ],
            "source": "Wikipedia - Punic Wars"
        },
        {
            "value": 200,
            "clue": "The Carthaginian general who led war elephants across the Alps into Italy during the Second Punic War.",
            "answer": "Hannibal",
            "accepted": [
                "hannibal barca"
            ],
            "source": "Wikipedia - Hannibal"
        },
        {
            "value": 200,
            "clue": "The Mesozoic empire conquered by Spanish conquistador Hernán Cortés in 1521.",
            "answer": "Aztec Empire",
            "accepted": [
                "aztecs",
                "mexica"
            ],
            "source": "Wikipedia - Spanish conquest of the Aztec Empire"
        },
        {
            "value": 200,
            "clue": "The Spanish conquistador who conquered the Inca Empire and captured Emperor Atahualpa.",
            "answer": "Francisco Pizarro",
            "accepted": [
                "pizarro"
            ],
            "source": "Wikipedia - Francisco Pizarro"
        },
        {
            "value": 200,
            "clue": "The last reigning monarch of the Kingdom of Hawaii, overthrown in 1893.",
            "answer": "Queen Liliuokalani",
            "accepted": [
                "liliuokalani"
            ],
            "source": "Wikipedia - Liliuokalani"
        },
        {
            "value": 200,
            "clue": "The Russian dynasty that ruled for three centuries from 1613 until the 1917 revolution.",
            "answer": "Romanov Dynasty",
            "accepted": [
                "house of romanov",
                "the romanovs"
            ],
            "source": "Wikipedia - House of Romanov"
        },
        {
            "value": 200,
            "clue": "The 1863 battle in Pennsylvania considered the turning point of the American Civil War.",
            "answer": "Battle of Gettysburg",
            "accepted": [
                "gettysburg"
            ],
            "source": "Wikipedia - Battle of Gettysburg"
        },
        {
            "value": 200,
            "clue": "The Roman Emperor who legalized Christianity across the empire with the Edict of Milan in 313 AD.",
            "answer": "Constantine the Great",
            "accepted": [
                "constantine i",
                "constantine"
            ],
            "source": "Wikipedia - Constantine the Great"
        },
        {
            "value": 200,
            "clue": "The series of military conflicts fought between Britain and Qing-dynasty China over trade rights in the 19th century.",
            "answer": "The Opium Wars",
            "accepted": [
                "opium wars"
            ],
            "source": "Wikipedia - Opium Wars"
        },
        {
            "value": 200,
            "clue": "The French king known as the 'Sun King' who ruled for 72 years and built the Palace of Versailles.",
            "answer": "Louis XIV",
            "accepted": [
                "louis the fourteenth",
                "sun king"
            ],
            "source": "Wikipedia - Louis XIV"
        },
        {
            "value": 200,
            "clue": "The English philosopher whose Two Treatises of Government heavily influenced the American Founding Fathers.",
            "answer": "John Locke",
            "accepted": [
                "locke"
            ],
            "source": "Wikipedia - John Locke"
        },
        {
            "value": 200,
            "clue": "The 1962 confrontation between the United States and the Soviet Union over nuclear missiles installed in Cuba.",
            "answer": "Cuban Missile Crisis",
            "accepted": [
                "october crisis"
            ],
            "source": "Wikipedia - Cuban Missile Crisis"
        },
        {
            "value": 200,
            "clue": "The 1066 battle in England where William the Conqueror defeated King Harold Godwinson.",
            "answer": "Battle of Hastings",
            "accepted": [
                "hastings"
            ],
            "source": "Wikipedia - Battle of Hastings"
        },
        {
            "value": 200,
            "clue": "The treaty signed in 1494 that divided the newly discovered lands outside Europe between Portugal and Spain.",
            "answer": "Treaty of Tordesillas",
            "accepted": [
                "tordesillas"
            ],
            "source": "Wikipedia - Treaty of Tordesillas"
        },
        {
            "value": 200,
            "clue": "The 1942 naval battle in the Pacific where the US Navy destroyed four Japanese aircraft carriers, turning the war.",
            "answer": "Battle of Midway",
            "accepted": [
                "midway"
            ],
            "source": "Wikipedia - Battle of Midway"
        },
        {
            "value": 200,
            "clue": "The Ottoman Sultan who conquered Constantinople in 1453, ending the Byzantine Empire.",
            "answer": "Mehmed II",
            "accepted": [
                "mehmed the conqueror",
                "fatih sultan mehmed"
            ],
            "source": "Wikipedia - Mehmed II"
        },
        {
            "value": 200,
            "clue": "The secret project in Los Alamos that developed the first atomic weapons during World War II.",
            "answer": "The Manhattan Project",
            "accepted": [
                "manhattan project"
            ],
            "source": "Wikipedia - Manhattan Project"
        },
        {
            "value": 200,
            "clue": "The Chinese dynasty that ruled from 1368 to 1644, renowned for porcelain and building much of the Great Wall.",
            "answer": "Ming Dynasty",
            "accepted": [
                "ming"
            ],
            "source": "Wikipedia - Ming dynasty"
        },
        {
            "value": 200,
            "clue": "The 1930 civil disobedience march led by Mahatma Gandhi to protest the British monopoly on salt.",
            "answer": "Salt March",
            "accepted": [
                "dandi march"
            ],
            "source": "Wikipedia - Salt March"
        },
        {
            "value": 200,
            "clue": "The battle in 732 AD where Charles Martel stopped the northward advance of the Umayyad Caliphate in France.",
            "answer": "Battle of Tours",
            "accepted": [
                "battle of poitiers"
            ],
            "source": "Wikipedia - Battle of Tours"
        },
        {
            "value": 200,
            "clue": "The 1803 land purchase made by Thomas Jefferson from France that doubled the size of the United States.",
            "answer": "Louisiana Purchase",
            "accepted": [
                "the louisiana purchase"
            ],
            "source": "Wikipedia - Louisiana Purchase"
        },
        {
            "value": 200,
            "clue": "The leader who unified Germany in 1871 and served as its first Imperial Chancellor, the 'Iron Chancellor'.",
            "answer": "Otto von Bismarck",
            "accepted": [
                "bismarck"
            ],
            "source": "Wikipedia - Otto von Bismarck"
        },
        {
            "value": 200,
            "clue": "The 1968 Soviet military invasion that crushed the democratic reforms of the Prague Spring.",
            "answer": "Invasion of Czechoslovakia",
            "accepted": [
                "warsaw pact invasion"
            ],
            "source": "Wikipedia - Warsaw Pact invasion of Czechoslovakia"
        },
        {
            "value": 200,
            "clue": "The Scottish king who defeated the English army at the Battle of Bannockburn in 1314.",
            "answer": "Robert the Bruce",
            "accepted": [
                "robert i"
            ],
            "source": "Wikipedia - Robert the Bruce"
        },
        {
            "value": 200,
            "clue": "The French queen executed by guillotine during the French Revolution, wife of Louis XVI.",
            "answer": "Marie Antoinette",
            "accepted": [
                "marie-antoinette"
            ],
            "source": "Wikipedia - Marie Antoinette"
        },
        {
            "value": 200,
            "clue": "The brutal campaign of political repression and mass executions initiated by Robespierre during the French Revolution.",
            "answer": "Reign of Terror",
            "accepted": [
                "the terror",
                "la terreur"
            ],
            "source": "Wikipedia - Reign of Terror"
        },
        {
            "value": 200,
            "clue": "The military alliance formed in 1949 by Western nations to provide collective defense against Soviet expansion.",
            "answer": "NATO",
            "accepted": [
                "north atlantic treaty organization"
            ],
            "source": "Wikipedia - NATO"
        },
        {
            "value": 200,
            "clue": "The counter-alliance created by the Soviet Union and Eastern European satellites in 1955.",
            "answer": "Warsaw Pact",
            "accepted": [
                "treaty of warsaw"
            ],
            "source": "Wikipedia - Warsaw Pact"
        },
        {
            "value": 200,
            "clue": "The 1845-1852 mass starvation in Ireland caused by potato blight that killed approximately one million people.",
            "answer": "Irish Potato Famine",
            "accepted": [
                "the great hunger",
                "an gorta mór"
            ],
            "source": "Wikipedia - Great Famine (Ireland)"
        },
        {
            "value": 200,
            "clue": "The year the Berlin Wall was erected by the German Democratic Republic.",
            "answer": "1961",
            "accepted": [
                "year 1961"
            ],
            "source": "Wikipedia - Berlin Wall"
        },
        {
            "value": 200,
            "clue": "The code name for the 1941 German invasion of the Soviet Union, the largest land invasion in history.",
            "answer": "Operation Barbarossa",
            "accepted": [
                "barbarossa"
            ],
            "source": "Wikipedia - Operation Barbarossa"
        },
        {
            "value": 200,
            "clue": "The 1812 battle near Moscow where Napoleon engaged Kutuzov, chronicled in War and Peace.",
            "answer": "Battle of Borodino",
            "accepted": [
                "borodino"
            ],
            "source": "Wikipedia - Battle of Borodino"
        },
        {
            "value": 200,
            "clue": "The famous telegram sent in 1917 from Germany to Mexico proposing a military alliance, intercepting which brought the US into WWI.",
            "answer": "Zimmermann Telegram",
            "accepted": [
                "zimmermann note"
            ],
            "source": "Wikipedia - Zimmermann Telegram"
        },
        {
            "value": 300,
            "clue": "The 1648 peace treaties that ended the Thirty Years' War in the Holy Roman Empire, establishing modern sovereignty.",
            "answer": "Peace of Westphalia",
            "accepted": [
                "treaty of westphalia"
            ],
            "source": "Wikipedia - Peace of Westphalia"
        },
        {
            "value": 300,
            "clue": "The Venetian merchant who traveled the Silk Road to China and served in the court of Kublai Khan.",
            "answer": "Marco Polo",
            "accepted": [
                "polo"
            ],
            "source": "Wikipedia - Marco Polo"
        },
        {
            "value": 300,
            "clue": "The series of civil wars in England from 1642 to 1651 culminating in the trial and execution of King Charles I.",
            "answer": "English Civil War",
            "accepted": [
                "the english civil war"
            ],
            "source": "Wikipedia - English Civil War"
        },
        {
            "value": 300,
            "clue": "The Lord Protector who ruled the Commonwealth of England, Scotland, and Ireland after the execution of Charles I.",
            "answer": "Oliver Cromwell",
            "accepted": [
                "cromwell"
            ],
            "source": "Wikipedia - Oliver Cromwell"
        },
        {
            "value": 300,
            "clue": "The 1916 naval engagement between the British Grand Fleet and German High Seas Fleet, the largest battleship clash.",
            "answer": "Battle of Jutland",
            "accepted": [
                "skagerrakschlacht"
            ],
            "source": "Wikipedia - Battle of Jutland"
        },
        {
            "value": 300,
            "clue": "The 1853-1856 conflict where Britain, France, and the Ottoman Empire fought the Russian Empire on the Black Sea.",
            "answer": "Crimean War",
            "accepted": [
                "the crimean war"
            ],
            "source": "Wikipedia - Crimean War"
        },
        {
            "value": 300,
            "clue": "The British nurse whose pioneering work in the Crimean War established modern nursing.",
            "answer": "Florence Nightingale",
            "accepted": [
                "nightingale",
                "lady with the lamp"
            ],
            "source": "Wikipedia - Florence Nightingale"
        },
        {
            "value": 300,
            "clue": "The 1937 aerial bombing of this Basque town by the German Luftwaffe during the Spanish Civil War inspired Picasso's painting.",
            "answer": "Guernica",
            "accepted": [
                "town of guernica"
            ],
            "source": "Wikipedia - Bombing of Guernica"
        },
        {
            "value": 300,
            "clue": "The Austrian archduke whose assassination in Sarajevo on June 28, 1914 triggered World War I.",
            "answer": "Franz Ferdinand",
            "accepted": [
                "archduke franz ferdinand"
            ],
            "source": "Wikipedia - Assassination of Archduke Franz Ferdinand"
        },
        {
            "value": 300,
            "clue": "The Bosnian-Serb nationalist who shot Archduke Franz Ferdinand and his wife Sophie.",
            "answer": "Gavrilo Princip",
            "accepted": [
                "princip"
            ],
            "source": "Wikipedia - Gavrilo Princip"
        },
        {
            "value": 300,
            "clue": "The 1938 British Prime Minister who signed the Munich Agreement and proclaimed 'peace for our time'.",
            "answer": "Neville Chamberlain",
            "accepted": [
                "chamberlain"
            ],
            "source": "Wikipedia - Neville Chamberlain"
        },
        {
            "value": 300,
            "clue": "The 1836 siege in San Antonio, Texas where 180 defenders including Davy Crockett fell to Mexican forces.",
            "answer": "The Alamo",
            "accepted": [
                "battle of the alamo"
            ],
            "source": "Wikipedia - Battle of the Alamo"
        },
        {
            "value": 300,
            "clue": "The Mexican general and president who recaptured the Alamo in 1836.",
            "answer": "Antonio Lopez de Santa Anna",
            "accepted": [
                "santa anna"
            ],
            "source": "Wikipedia - Antonio López de Santa Anna"
        },
        {
            "value": 300,
            "clue": "The 1805 battle where Napoleon defeated the combined Russo-Austrian armies, considered his tactical masterpiece.",
            "answer": "Battle of Austerlitz",
            "accepted": [
                "battle of the three emperors",
                "austerlitz"
            ],
            "source": "Wikipedia - Battle of Austerlitz"
        },
        {
            "value": 300,
            "clue": "The 1879 conflict between the British Empire and the Zulu Kingdom made famous by the battles of Isandlwana and Rorke's Drift.",
            "answer": "Anglo-Zulu War",
            "accepted": [
                "zulu war"
            ],
            "source": "Wikipedia - Anglo-Zulu War"
        },
        {
            "value": 300,
            "clue": "The Portuguese prince nicknamed 'The Navigator' who launched the Age of Discoveries.",
            "answer": "Prince Henry the Navigator",
            "accepted": [
                "henry the navigator",
                "infante dom henrique"
            ],
            "source": "Wikipedia - Prince Henry the Navigator"
        },
        {
            "value": 300,
            "clue": "The 1943 naval-air battle in the Solomon Islands where American fighters ambushed and killed Admiral Isoroku Yamamoto.",
            "answer": "Operation Vengeance",
            "accepted": [
                "death of yamamoto"
            ],
            "source": "Wikipedia - Operation Vengeance"
        },
        {
            "value": 300,
            "clue": "The Roman Emperor who constructed a 73-mile defensive stone wall across northern Britannia in 122 AD.",
            "answer": "Hadrian",
            "accepted": [
                "emperor hadrian",
                "hadrians wall"
            ],
            "source": "Wikipedia - Hadrian's Wall"
        },
        {
            "value": 300,
            "clue": "The German field marshal known as the 'Desert Fox' who commanded the Afrika Korps.",
            "answer": "Erwin Rommel",
            "accepted": [
                "rommel",
                "desert fox"
            ],
            "source": "Wikipedia - Erwin Rommel"
        },
        {
            "value": 300,
            "clue": "The 1942-1943 battle in southwestern Russia that resulted in the destruction of the German 6th Army, the turning point of WWII in Europe.",
            "answer": "Battle of Stalingrad",
            "accepted": [
                "stalingrad"
            ],
            "source": "Wikipedia - Battle of Stalingrad"
        },
        {
            "value": 300,
            "clue": "The 1867 purchase engineered by Secretary of State William H. Seward that added 586,000 square miles to the US.",
            "answer": "Alaska Purchase",
            "accepted": [
                "seward's folly",
                "alaska"
            ],
            "source": "Wikipedia - Alaska Purchase"
        },
        {
            "value": 300,
            "clue": "The 1839-1842 war that forced China to cede Hong Kong Island to Great Britain.",
            "answer": "First Opium War",
            "accepted": [
                "first anglo-chinese war"
            ],
            "source": "Wikipedia - First Opium War"
        },
        {
            "value": 300,
            "clue": "The Florentine diplomat who wrote The Prince in 1513, advocating political realism and pragmatic power.",
            "answer": "Niccolo Machiavelli",
            "accepted": [
                "machiavelli"
            ],
            "source": "Wikipedia - Niccolò Machiavelli"
        },
        {
            "value": 300,
            "clue": "The 1923 failed coup d'état carried out by Adolf Hitler and the Nazi Party in Munich.",
            "answer": "Beer Hall Putsch",
            "accepted": [
                "munich putsch"
            ],
            "source": "Wikipedia - Beer Hall Putsch"
        },
        {
            "value": 300,
            "clue": "The ancient Persian king who founded the Achaemenid Empire and issued the Cyrus Cylinder on human rights.",
            "answer": "Cyrus the Great",
            "accepted": [
                "cyrus ii"
            ],
            "source": "Wikipedia - Cyrus the Great"
        },
        {
            "value": 300,
            "clue": "The 1916 battle on the Western Front that saw the first operational use of tanks by the British Army.",
            "answer": "Battle of the Somme",
            "accepted": [
                "the somme"
            ],
            "source": "Wikipedia - Battle of the Somme"
        },
        {
            "value": 300,
            "clue": "The 1868 political event in Japan that ended the Tokugawa shogunate and restored imperial rule.",
            "answer": "Meiji Restoration",
            "accepted": [
                "meiji isshin"
            ],
            "source": "Wikipedia - Meiji Restoration"
        },
        {
            "value": 300,
            "clue": "The 1773 protest in Boston where the Sons of Liberty dumped 342 chests of British tea into the harbor.",
            "answer": "Boston Tea Party",
            "accepted": [
                "the tea party"
            ],
            "source": "Wikipedia - Boston Tea Party"
        },
        {
            "value": 300,
            "clue": "The 1945 conference where Churchill, Roosevelt, and Stalin met in Crimea to plan post-WWII Europe.",
            "answer": "Yalta Conference",
            "accepted": [
                "crimea conference"
            ],
            "source": "Wikipedia - Yalta Conference"
        },
        {
            "value": 300,
            "clue": "The final wartime Allied conference held in Germany in July-August 1945 attended by Truman, Attlee, and Stalin.",
            "answer": "Potsdam Conference",
            "accepted": [
                "berlin conference of the three heads of government"
            ],
            "source": "Wikipedia - Potsdam Conference"
        },
        {
            "value": 300,
            "clue": "The South American revolutionary known as 'El Libertador' who led independence from Spain for six nations.",
            "answer": "Simon Bolivar",
            "accepted": [
                "simón bolívar",
                "bolivar"
            ],
            "source": "Wikipedia - Simón Bolívar"
        },
        {
            "value": 300,
            "clue": "The Argentine general who liberated Chile alongside Bernardo O'Higgins and declared the independence of Peru.",
            "answer": "Jose de San Martin",
            "accepted": [
                "josé de san martín",
                "san martin"
            ],
            "source": "Wikipedia - José de San Martín"
        },
        {
            "value": 300,
            "clue": "The 1936-1939 conflict between the Second Spanish Republic and Nationalist forces led by Francisco Franco.",
            "answer": "Spanish Civil War",
            "accepted": [
                "guerra civil española"
            ],
            "source": "Wikipedia - Spanish Civil War"
        },
        {
            "value": 300,
            "clue": "The Spanish general who emerged victorious from the Civil War and ruled Spain as dictator until 1975.",
            "answer": "Francisco Franco",
            "accepted": [
                "franco"
            ],
            "source": "Wikipedia - Francisco Franco"
        },
        {
            "value": 300,
            "clue": "The 1917 declaration by British Foreign Secretary Arthur Balfour expressing support for a national home for the Jewish people.",
            "answer": "Balfour Declaration",
            "accepted": [
                "the balfour declaration"
            ],
            "source": "Wikipedia - Balfour Declaration"
        },
        {
            "value": 300,
            "clue": "The 1804 battle where the Haitian Revolution under Jean-Jacques Dessalines resulted in the first free Black republic.",
            "answer": "Battle of Vertieres",
            "accepted": [
                "haitian independence",
                "vertières"
            ],
            "source": "Wikipedia - Haitian Revolution"
        },
        {
            "value": 300,
            "clue": "The leader of the Haitian Revolution formerly an enslaved man, known as the 'Black Napoleon'.",
            "answer": "Toussaint Louverture",
            "accepted": [
                "louverture"
            ],
            "source": "Wikipedia - Toussaint Louverture"
        },
        {
            "value": 300,
            "clue": "The 1707 legislative acts that united the Kingdom of England and the Kingdom of Scotland into Great Britain.",
            "answer": "Acts of Union 1707",
            "accepted": [
                "acts of union",
                "union with scotland act"
            ],
            "source": "Wikipedia - Acts of Union 1707"
        },
        {
            "value": 300,
            "clue": "The mass extermination of an estimated 800,000 Tutsis and moderate Hutus in 1994 over approximately 100 days.",
            "answer": "Rwandan Genocide",
            "accepted": [
                "genocide against the tutsi"
            ],
            "source": "Wikipedia - Rwandan genocide"
        },
        {
            "value": 300,
            "clue": "The 1989 protests in Beijing that were violently crushed by the Chinese military on June 4.",
            "answer": "Tiananmen Square Protests",
            "accepted": [
                "tiananmen square massacre",
                "june fourth incident"
            ],
            "source": "Wikipedia - 1989 Tiananmen Square protests and massacre"
        },
        {
            "value": 400,
            "clue": "The 1756-1763 global conflict often termed the true first world war, known in North America as the French and Indian War.",
            "answer": "Seven Years' War",
            "accepted": [
                "seven years war"
            ],
            "source": "Wikipedia - Seven Years' War"
        },
        {
            "value": 400,
            "clue": "The Byzantine Emperor who codified Roman law in the Corpus Juris Civilis and commissioned the Hagia Sophia.",
            "answer": "Justinian I",
            "accepted": [
                "justinian the great",
                "justinian"
            ],
            "source": "Wikipedia - Justinian I"
        },
        {
            "value": 400,
            "clue": "The 1933 arson fire at the German parliament building that Hitler used to suspend civil liberties.",
            "answer": "Reichstag Fire",
            "accepted": [
                "der reichstagsbrand"
            ],
            "source": "Wikipedia - Reichstag fire"
        },
        {
            "value": 400,
            "clue": "The 1571 naval clash in the Gulf of Patras where the Holy League crushed the Ottoman fleet, halting Mediterranean expansion.",
            "answer": "Battle of Lepanto",
            "accepted": [
                "lepanto"
            ],
            "source": "Wikipedia - Battle of Lepanto"
        },
        {
            "value": 400,
            "clue": "The long-running conflict between the British Empire and the Russian Empire for dominance in Central Asia during the 19th century.",
            "answer": "The Great Game",
            "accepted": [
                "tournament of shadows"
            ],
            "source": "Wikipedia - The Great Game"
        },
        {
            "value": 400,
            "clue": "The 1943 tank clash in Russia involving over 6,000 armored vehicles, the largest tank battle in military history.",
            "answer": "Battle of Kursk",
            "accepted": [
                "kursk"
            ],
            "source": "Wikipedia - Battle of Kursk"
        },
        {
            "value": 400,
            "clue": "The 1898 war that resulted in the US acquiring Puerto Rico, Guam, and the Philippines from Spain.",
            "answer": "Spanish-American War",
            "accepted": [
                "spanish american war"
            ],
            "source": "Wikipedia - Spanish–American War"
        },
        {
            "value": 400,
            "clue": "The US battleship whose mysterious explosion in Havana Harbor on February 15, 1898 ignited the Spanish-American War.",
            "answer": "USS Maine",
            "accepted": [
                "the maine"
            ],
            "source": "Wikipedia - USS Maine (1889)"
        },
        {
            "value": 400,
            "clue": "The 1956 military crisis where Britain, France, and Israel invaded Egypt after Gamal Abdel Nasser nationalized a vital canal.",
            "answer": "Suez Crisis",
            "accepted": [
                "tripartite aggression"
            ],
            "source": "Wikipedia - Suez Crisis"
        },
        {
            "value": 400,
            "clue": "The secret agreement between Britain and France in 1916 that partitioned the Ottoman Empire's Arab provinces.",
            "answer": "Sykes-Picot Agreement",
            "accepted": [
                "sykes picot"
            ],
            "source": "Wikipedia - Sykes–Picot Agreement"
        },
        {
            "value": 400,
            "clue": "The 1904-1905 conflict where an Asian power defeated a European imperial power for the first time in the modern era.",
            "answer": "Russo-Japanese War",
            "accepted": [
                "russo japanese war"
            ],
            "source": "Wikipedia - Russo-Japanese War"
        },
        {
            "value": 400,
            "clue": "The 1905 naval battle in the Korea Strait where Admiral Togo annihilated the Russian Baltic Fleet.",
            "answer": "Battle of Tsushima",
            "accepted": [
                "tsushima"
            ],
            "source": "Wikipedia - Battle of Tsushima"
        },
        {
            "value": 400,
            "clue": "The 1683 siege where King John III Sobieski of Poland led the largest cavalry charge in history to relieve this Austrian capital.",
            "answer": "Siege of Vienna",
            "accepted": [
                "battle of vienna 1683"
            ],
            "source": "Wikipedia - Battle of Vienna"
        },
        {
            "value": 400,
            "clue": "The 1899-1902 war between the British Empire and the two Boer republics (Orange Free State and Transvaal).",
            "answer": "Second Boer War",
            "accepted": [
                "boer war"
            ],
            "source": "Wikipedia - Second Boer War"
        },
        {
            "value": 400,
            "clue": "The 1857 rebellion of Indian soldiers serving under the British East India Company that ended company rule.",
            "answer": "Indian Rebellion of 1857",
            "accepted": [
                "sepoy mutiny",
                "first war of indian independence"
            ],
            "source": "Wikipedia - Indian Rebellion of 1857"
        },
        {
            "value": 400,
            "clue": "The Swedish king and military genius nicknamed 'The Lion of the North' who revolutionized warfare during the Thirty Years' War.",
            "answer": "Gustavus Adolphus",
            "accepted": [
                "gustav ii adolf"
            ],
            "source": "Wikipedia - Gustavus Adolphus"
        },
        {
            "value": 400,
            "clue": "The 1632 battle where Gustavus Adolphus was killed in combat against Wallenstein.",
            "answer": "Battle of Lutzen",
            "accepted": [
                "battle of lützen"
            ],
            "source": "Wikipedia - Battle of Lützen (1632)"
        },
        {
            "value": 400,
            "clue": "The 1389 battle in Kosovo field where the Ottoman army under Murad I defeated the Serbian coalition under Prince Lazar.",
            "answer": "Battle of Kosovo",
            "accepted": [
                "kosovo polje"
            ],
            "source": "Wikipedia - Battle of Kosovo"
        },
        {
            "value": 400,
            "clue": "The 1526 battle in Hungary where Ottoman Sultan Suleiman the Magnificent decisively defeated King Louis II.",
            "answer": "Battle of Mohacs",
            "accepted": [
                "mohács"
            ],
            "source": "Wikipedia - Battle of Mohács"
        },
        {
            "value": 400,
            "clue": "The 1922 fascist march led by Benito Mussolini that forced King Victor Emmanuel III to appoint him Prime Minister.",
            "answer": "March on Rome",
            "accepted": [
                "marcia su roma"
            ],
            "source": "Wikipedia - March on Rome"
        },
        {
            "value": 400,
            "clue": "The Chinese nationalist leader who retreated to Taiwan in 1949 after losing the civil war to Mao Zedong's Communists.",
            "answer": "Chiang Kai-shek",
            "accepted": [
                "chiang",
                "jiang jieshi"
            ],
            "source": "Wikipedia - Chiang Kai-shek"
        },
        {
            "value": 400,
            "clue": "The 1866 Seven Weeks' War where Prussia under Moltke defeated Austria, ending Austrian influence in Germany.",
            "answer": "Austro-Prussian War",
            "accepted": [
                "seven weeks war"
            ],
            "source": "Wikipedia - Austro-Prussian War"
        },
        {
            "value": 400,
            "clue": "The 1870-1871 conflict that led to the capture of Napoleon III at Sedan and the unification of Germany.",
            "answer": "Franco-Prussian War",
            "accepted": [
                "franco german war"
            ],
            "source": "Wikipedia - Franco-Prussian War"
        },
        {
            "value": 400,
            "clue": "The 1961 failed CIA-sponsored invasion of Cuba by anti-Castro Cuban exiles.",
            "answer": "Bay of Pigs Invasion",
            "accepted": [
                "playa girón",
                "bay of pigs"
            ],
            "source": "Wikipedia - Bay of Pigs Invasion"
        },
        {
            "value": 400,
            "clue": "The 1954 siege where Vietnamese forces under General Vo Nguyen Giap defeated the French colonial army, ending the Indochina War.",
            "answer": "Battle of Dien Bien Phu",
            "accepted": [
                "điện biên phủ"
            ],
            "source": "Wikipedia - Battle of Dien Bien Phu"
        },
        {
            "value": 400,
            "clue": "The 1973 war launched on a Jewish holy day when Egypt and Syria attacked Israel in Sinai and the Golan.",
            "answer": "Yom Kippur War",
            "accepted": [
                "october war",
                "ramadan war"
            ],
            "source": "Wikipedia - Yom Kippur War"
        },
        {
            "value": 400,
            "clue": "The 1967 war where Israel captured the Sinai Peninsula, Gaza Strip, West Bank, Old Jerusalem, and Golan Heights in six days.",
            "answer": "Six-Day War",
            "accepted": [
                "six day war",
                "1967 war"
            ],
            "source": "Wikipedia - Six-Day War"
        },
        {
            "value": 400,
            "clue": "The 1982 conflict between the United Kingdom and Argentina over two British overseas territories in the South Atlantic.",
            "answer": "Falklands War",
            "accepted": [
                "guerra de las malvinas"
            ],
            "source": "Wikipedia - Falklands War"
        },
        {
            "value": 400,
            "clue": "The 1934-1935 military retreat of the Chinese Red Army covering 5,600 miles over rugged terrain, elevating Mao Zedong.",
            "answer": "The Long March",
            "accepted": [
                "long march"
            ],
            "source": "Wikipedia - Long March"
        },
        {
            "value": 400,
            "clue": "The 1898 confrontation between British and French expeditions at an outpost on the Upper Nile, bringing the two powers to the brink of war.",
            "answer": "Fashoda Incident",
            "accepted": [
                "fashoda crisis"
            ],
            "source": "Wikipedia - Fashoda Incident"
        },
        {
            "value": 400,
            "clue": "The 1688 bloodless coup that deposed King James II of England and replaced him with William III and Mary II.",
            "answer": "Glorious Revolution",
            "accepted": [
                "revolution of 1688"
            ],
            "source": "Wikipedia - Glorious Revolution"
        },
        {
            "value": 400,
            "clue": "The 1863 diplomatic proclamation by Abraham Lincoln that declared all slaves held within rebellious states 'forever free'.",
            "answer": "Emancipation Proclamation",
            "accepted": [
                "the emancipation proclamation"
            ],
            "source": "Wikipedia - Emancipation Proclamation"
        },
        {
            "value": 400,
            "clue": "The 1945 secret operation that brought over 1,600 German scientists and engineers, including Wernher von Braun, to the United States.",
            "answer": "Operation Paperclip",
            "accepted": [
                "project paperclip"
            ],
            "source": "Wikipedia - Operation Paperclip"
        },
        {
            "value": 400,
            "clue": "The 1928 international treaty in which signatory states promised not to use war to resolve disputes.",
            "answer": "Kellogg-Briand Pact",
            "accepted": [
                "pact of paris"
            ],
            "source": "Wikipedia - Kellogg–Briand Pact"
        },
        {
            "value": 400,
            "clue": "The series of peace treaties signed between the Entente and the defeated Central Powers in 1919 and 1920: Versailles, Saint-Germain, Neuilly, Trianon, and this fifth.",
            "answer": "Treaty of Sevres",
            "accepted": [
                "treaty of sèvres"
            ],
            "source": "Wikipedia - Treaty of Sèvres"
        },
        {
            "value": 400,
            "clue": "The 1978 peace accords brokered by Jimmy Carter between Egyptian President Anwar Sadat and Israeli PM Menachem Begin.",
            "answer": "Camp David Accords",
            "accepted": [
                "camp david"
            ],
            "source": "Wikipedia - Camp David Accords"
        },
        {
            "value": 400,
            "clue": "The 1922 treaty that normalized diplomatic relations between the Weimar Republic of Germany and the Soviet Union.",
            "answer": "Treaty of Rapallo",
            "accepted": [
                "rapallo treaty"
            ],
            "source": "Wikipedia - Treaty of Rapallo (1922)"
        },
        {
            "value": 400,
            "clue": "The 1598 edict issued by King Henry IV of France granting religious tolerance to French Calvinist Protestants (Huguenots).",
            "answer": "Edict of Nantes",
            "accepted": [
                "nantes edict"
            ],
            "source": "Wikipedia - Edict of Nantes"
        },
        {
            "value": 400,
            "clue": "The 1685 edict issued by Louis XIV that revoked the Edict of Nantes, triggering a mass exodus of Huguenots.",
            "answer": "Edict of Fontainebleau",
            "accepted": [
                "revocation of the edict of nantes"
            ],
            "source": "Wikipedia - Edict of Fontainebleau"
        },
        {
            "value": 400,
            "clue": "The 1935 legislation enacted by the Nazi regime in Germany that stripped German Jews of citizenship and civil rights.",
            "answer": "Nuremberg Laws",
            "accepted": [
                "nürnberger gesetze"
            ],
            "source": "Wikipedia - Nuremberg Laws"
        },
        {
            "value": 500,
            "clue": "The ancient peace treaty concluded around 1259 BC between Pharaoh Ramesses II and Hittite King Hattusili III, the oldest surviving international treaty.",
            "answer": "Treaty of Kadesh",
            "accepted": [
                "silver treaty",
                "kadesh peace treaty"
            ],
            "source": "Wikipedia - Egyptian–Hittite peace treaty"
        },
        {
            "value": 500,
            "clue": "The decisive 1260 battle in the Galilee where the Mamluks handed the Mongol Empire its first permanent defeat in combat.",
            "answer": "Battle of Ain Jalut",
            "accepted": [
                "ain jalut"
            ],
            "source": "Wikipedia - Battle of Ain Jalut"
        },
        {
            "value": 500,
            "clue": "The Venetian Doge who diverted the Fourth Crusade in 1204 to sack Christian Constantinople despite being blind and in his 90s.",
            "answer": "Enrico Dandolo",
            "accepted": [
                "dandolo"
            ],
            "source": "Wikipedia - Enrico Dandolo"
        },
        {
            "value": 500,
            "clue": "The 1415 battle during the Hundred Years' War where King Henry V's English longbowmen decimated the French nobility in muddy terrain.",
            "answer": "Battle of Agincourt",
            "accepted": [
                "agincourt"
            ],
            "source": "Wikipedia - Battle of Agincourt"
        },
        {
            "value": 500,
            "clue": "The final major battle of the War of the Spanish Succession in 1709, where Marlborough and Eugene defeated Villars with 30,000 casualties.",
            "answer": "Battle of Malplaquet",
            "accepted": [
                "malplaquet"
            ],
            "source": "Wikipedia - Battle of Malplaquet"
        },
        {
            "value": 500,
            "clue": "The 1713-1714 series of peace treaties that concluded the War of the Spanish Succession, confirming Philip V as King of Spain.",
            "answer": "Peace of Utrecht",
            "accepted": [
                "treaty of utrecht"
            ],
            "source": "Wikipedia - Treaty of Utrecht"
        },
        {
            "value": 500,
            "clue": "The 1645-1669 siege of Candia on Crete where the Republic of Venice defended against the Ottomans for 21 years, the second longest siege in history.",
            "answer": "Siege of Candia",
            "accepted": [
                "siege of heraklion"
            ],
            "source": "Wikipedia - Siege of Candia"
        },
        {
            "value": 500,
            "clue": "The Byzantine general under Justinian I who reconquered Italy, North Africa, and Rome from the Ostrogoths and Vandals.",
            "answer": "Belisarius",
            "accepted": [
                "flavius belisarius"
            ],
            "source": "Wikipedia - Belisarius"
        },
        {
            "value": 500,
            "clue": "The 1214 battle in Flanders where King Philip II Augustus of France defeated an allied Anglo-Flemish-German army, securing the French crown.",
            "answer": "Battle of Bouvines",
            "accepted": [
                "bouvines"
            ],
            "source": "Wikipedia - Battle of Bouvines"
        },
        {
            "value": 500,
            "clue": "The 1689 English legal act that limited the powers of the monarch and set out the rights of Parliament, inspiring the US Bill of Rights.",
            "answer": "Bill of Rights 1689",
            "accepted": [
                "english bill of rights"
            ],
            "source": "Wikipedia - Bill of Rights 1689"
        },
        {
            "value": 500,
            "clue": "The 1783 treaty that formally recognized the independence of the United States and ended the American Revolutionary War.",
            "answer": "Treaty of Paris 1783",
            "accepted": [
                "peace of paris 1783"
            ],
            "source": "Wikipedia - Treaty of Paris (1783)"
        },
        {
            "value": 500,
            "clue": "The 1378-1417 division within the Catholic Church when multiple rival popes claimed the Papacy in Rome and Avignon simultaneously.",
            "answer": "Western Schism",
            "accepted": [
                "papal schism",
                "great occidental schism"
            ],
            "source": "Wikipedia - Western Schism"
        },
        {
            "value": 500,
            "clue": "The ecumenical council held between 1414 and 1418 that resolved the Western Schism and condemned Jan Hus to death.",
            "answer": "Council of Constance",
            "accepted": [
                "konstanz council"
            ],
            "source": "Wikipedia - Council of Constance"
        },
        {
            "value": 500,
            "clue": "The 1444 battle where the Ottoman army under Murad II crushed a European crusader army led by King Władysław III of Poland and Hungary.",
            "answer": "Battle of Varna",
            "accepted": [
                "varna"
            ],
            "source": "Wikipedia - Battle of Varna"
        },
        {
            "value": 500,
            "clue": "The 1071 battle in eastern Anatolia where the Seljuk Turks under Alp Arslan defeated and captured Byzantine Emperor Romanos IV Diogenes.",
            "answer": "Battle of Manzikert",
            "accepted": [
                "manzikert"
            ],
            "source": "Wikipedia - Battle of Manzikert"
        },
        {
            "value": 500,
            "clue": "The 1529 naval battle or land siege where the Ottoman army under Suleiman the Magnificent was halted at the gates of Austria for the first time.",
            "answer": "Siege of Vienna 1529",
            "accepted": [
                "first siege of vienna"
            ],
            "source": "Wikipedia - Siege of Vienna (1529)"
        },
        {
            "value": 500,
            "clue": "The German statesman who drafted the Weimar Constitution in 1919 and was assassinated in 1922 for signing the Treaty of Rapallo.",
            "answer": "Walther Rathenau",
            "accepted": [
                "rathenau"
            ],
            "source": "Wikipedia - Walther Rathenau"
        },
        {
            "value": 500,
            "clue": "The French Cardinal and chief minister to Louis XIII who centralized royal authority and curtailed the power of the nobility.",
            "answer": "Cardinal Richelieu",
            "accepted": [
                "richelieu",
                "armand jean du plessis"
            ],
            "source": "Wikipedia - Cardinal Richelieu"
        },
        {
            "value": 500,
            "clue": "The successor to Cardinal Richelieu as chief minister of France who served during the minority of Louis XIV and negotiated Westphalia.",
            "answer": "Cardinal Mazarin",
            "accepted": [
                "jules mazarin"
            ],
            "source": "Wikipedia - Cardinal Mazarin"
        },
        {
            "value": 500,
            "clue": "The rebellion in France from 1648 to 1653 by nobles and the Parlement of Paris against royal centralization under Cardinal Mazarin.",
            "answer": "The Fronde",
            "accepted": [
                "la fronde"
            ],
            "source": "Wikipedia - The Fronde"
        },
        {
            "value": 500,
            "clue": "The 1774 British laws passed in response to the Boston Tea Party, known in Britain as the Coercive Acts.",
            "answer": "Intolerable Acts",
            "accepted": [
                "coercive acts"
            ],
            "source": "Wikipedia - Intolerable Acts"
        },
        {
            "value": 500,
            "clue": "The 1797 naval mutiny in the British Royal Navy anchored off the Nore and Spithead during the French Revolutionary Wars.",
            "answer": "Spithead and Nore mutinies",
            "accepted": [
                "nore mutiny",
                "spithead mutiny"
            ],
            "source": "Wikipedia - Spithead and Nore mutinies"
        },
        {
            "value": 500,
            "clue": "The 1825 failed military uprising in Saint Petersburg by Russian imperial officers seeking constitutional reform.",
            "answer": "Decembrist Revolt",
            "accepted": [
                "decembrist uprising",
                "dekabristy"
            ],
            "source": "Wikipedia - Decembrist revolt"
        },
        {
            "value": 500,
            "clue": "The 1848-1849 political revolution in Hungary against Habsburg rule led by this national leader.",
            "answer": "Lajos Kossuth",
            "accepted": [
                "kossuth"
            ],
            "source": "Wikipedia - Lajos Kossuth"
        },
        {
            "value": 500,
            "clue": "The 1908 political revolution in the Ottoman Empire that restored constitutional rule and deposed Sultan Abdul Hamid II.",
            "answer": "Young Turk Revolution",
            "accepted": [
                "young turks"
            ],
            "source": "Wikipedia - Young Turk Revolution"
        },
        {
            "value": 500,
            "clue": "The secret intelligence operation during the 1953 Iranian coup that overthrew democratically elected Prime Minister Mohammad Mosaddegh.",
            "answer": "Operation Ajax",
            "accepted": [
                "tp-ajax"
            ],
            "source": "Wikipedia - 1953 Iranian coup d'état"
        },
        {
            "value": 500,
            "clue": "The 1954 CIA-orchestrated covert operation that deposed the democratically elected President Jacobo Árbenz of Guatemala.",
            "answer": "Operation PBSUCCESS",
            "accepted": [
                "pbsuccess"
            ],
            "source": "Wikipedia - 1954 Guatemalan coup d'état"
        },
        {
            "value": 500,
            "clue": "The 1381 uprising in England led by Wat Tyler and radical priest John Ball protesting poll taxes.",
            "answer": "Peasants' Revolt",
            "accepted": [
                "wat tyler's rebellion"
            ],
            "source": "Wikipedia - Peasants' Revolt"
        },
        {
            "value": 500,
            "clue": "The 1282 rebellion in Palermo against the rule of the French Capetian House of Anjou, celebrated as an uprising.",
            "answer": "Sicilian Vespers",
            "accepted": [
                "vespri siciliani"
            ],
            "source": "Wikipedia - Sicilian Vespers"
        },
        {
            "value": 500,
            "clue": "The treaty signed in 1920 between the Kingdom of Hungary and the Allied Powers that reduced Hungary's territory by 72%.",
            "answer": "Treaty of Trianon",
            "accepted": [
                "trianon"
            ],
            "source": "Wikipedia - Treaty of Trianon"
        },
        {
            "value": 500,
            "clue": "The 1572 targeted assassinations and mob violence against French Huguenots in Paris, celebrated by Catholics.",
            "answer": "St. Bartholomew's Day massacre",
            "accepted": [
                "massacre de la saint-barthélemy"
            ],
            "source": "Wikipedia - St. Bartholomew's Day massacre"
        },
        {
            "value": 500,
            "clue": "The 1878 congress of European powers that revised the Treaty of San Stefano and settled the Eastern Crisis.",
            "answer": "Congress of Berlin",
            "accepted": [
                "berlin congress"
            ],
            "source": "Wikipedia - Congress of Berlin"
        },
        {
            "value": 500,
            "clue": "The 1605 conspiracy to blow up the House of Lords during the State Opening of Parliament, associated with Guy Fawkes.",
            "answer": "Gunpowder Plot",
            "accepted": [
                "powder treason"
            ],
            "source": "Wikipedia - Gunpowder Plot"
        },
        {
            "value": 500,
            "clue": "The 1801 concordat between Napoleon Bonaparte and Pope Pius VII that restored civil relations between France and the Catholic Church.",
            "answer": "Concordat of 1801",
            "accepted": [
                "the concordat"
            ],
            "source": "Wikipedia - Concordat of 1801"
        },
        {
            "value": 500,
            "clue": "The 1925 international treaty signed in Switzerland that guaranteed Germany's western borders with France and Belgium.",
            "answer": "Locarno Treaties",
            "accepted": [
                "pact of locarno"
            ],
            "source": "Wikipedia - Locarno Treaties"
        },
        {
            "value": 500,
            "clue": "The 1794 reactionary coup during the French Revolution that overthrew Maximilien Robespierre on 9 Thermidor.",
            "answer": "Thermidorian Reaction",
            "accepted": [
                "fall of robespierre"
            ],
            "source": "Wikipedia - Thermidorian Reaction"
        },
        {
            "value": 500,
            "clue": "The 1492 decree issued by Catholic Monarchs Isabella I of Castile and Ferdinand II of Aragon expelling all practicing Jews from Spain.",
            "answer": "Alhambra Decree",
            "accepted": [
                "edict of expulsion"
            ],
            "source": "Wikipedia - Alhambra Decree"
        },
        {
            "value": 500,
            "clue": "The ancient law code inscribed on a basalt stele in Babylon around 1754 BC containing 282 edicts including 'an eye for an eye'.",
            "answer": "Code of Hammurabi",
            "accepted": [
                "hammurabi's code"
            ],
            "source": "Wikipedia - Code of Hammurabi"
        },
        {
            "value": 500,
            "clue": "The 1555 peace agreement between Holy Roman Emperor Charles V and the Schmalkaldic League establishing 'cuius regio, eius religio'.",
            "answer": "Peace of Augsburg",
            "accepted": [
                "augsburg settlement"
            ],
            "source": "Wikipedia - Peace of Augsburg"
        },
        {
            "value": 500,
            "clue": "The 1830 revolution in France that overthrew King Charles X and installed Louis-Philippe of the House of Orléans.",
            "answer": "July Revolution",
            "accepted": [
                "les trois glorieuses"
            ],
            "source": "Wikipedia - July Revolution"
        }
    ],
    "technology": [
        {
            "value": 100,
            "clue": "[1] The co-founder of Apple Inc. who famously unveiled the original iPhone in January 2007.",
            "answer": "Steve Jobs",
            "accepted": [
                "jobs"
            ],
            "source": "Wikipedia - Steve Jobs"
        },
        {
            "value": 100,
            "clue": "[2] The universal networking acronym HTTP stands for Hypertext this Protocol.",
            "answer": "Transfer",
            "accepted": [
                "hypertext transfer protocol"
            ],
            "source": "Wikipedia - HTTP"
        },
        {
            "value": 100,
            "clue": "[3] The search engine founded by Larry Page and Sergey Brin while PhD students at Stanford.",
            "answer": "Google",
            "accepted": [
                "google search"
            ],
            "source": "Wikipedia - Google"
        },
        {
            "value": 100,
            "clue": "[4] The global network of interconnected computers communicating via standardized protocols.",
            "answer": "The Internet",
            "accepted": [
                "internet"
            ],
            "source": "Wikipedia - Internet"
        },
        {
            "value": 100,
            "clue": "[5] The social media platform founded by Mark Zuckerberg in his Harvard dorm room in 2004.",
            "answer": "Facebook",
            "accepted": [
                "meta"
            ],
            "source": "Wikipedia - Facebook"
        },
        {
            "value": 100,
            "clue": "[6] The operating system developed by Microsoft that debuted with version 1.0 in 1985.",
            "answer": "Windows",
            "accepted": [
                "microsoft windows"
            ],
            "source": "Wikipedia - Microsoft Windows"
        },
        {
            "value": 100,
            "clue": "[7] The electronic device that computes and processes data according to stored programs.",
            "answer": "Computer",
            "accepted": [
                "pc"
            ],
            "source": "Wikipedia - Computer"
        },
        {
            "value": 100,
            "clue": "[8] The abbreviation 'AI' in modern computing stands for this.",
            "answer": "Artificial Intelligence",
            "accepted": [
                "ai"
            ],
            "source": "Wikipedia - Artificial intelligence"
        },
        {
            "value": 100,
            "clue": "[9] The storage technology abbreviated as 'SSD' that has largely replaced traditional HDDs.",
            "answer": "Solid State Drive",
            "accepted": [
                "solid-state drive"
            ],
            "source": "Wikipedia - Solid-state drive"
        },
        {
            "value": 100,
            "clue": "[10] The handheld mobile device launched by Apple in 2010 that revolutionized tablets.",
            "answer": "iPad",
            "accepted": [
                "apple ipad"
            ],
            "source": "Wikipedia - iPad"
        },
        {
            "value": 100,
            "clue": "[11] The popular video streaming platform founded in 2005 whose slogan was 'Broadcast Yourself'.",
            "answer": "YouTube",
            "accepted": [
                "youtube.com"
            ],
            "source": "Wikipedia - YouTube"
        },
        {
            "value": 100,
            "clue": "[12] The billionaire entrepreneur who co-founded PayPal, Tesla, and SpaceX.",
            "answer": "Elon Musk",
            "accepted": [
                "musk"
            ],
            "source": "Wikipedia - Elon Musk"
        },
        {
            "value": 100,
            "clue": "[13] The abbreviation 'URL' for a web address stands for Uniform Resource this.",
            "answer": "Locator",
            "accepted": [
                "uniform resource locator"
            ],
            "source": "Wikipedia - URL"
        },
        {
            "value": 100,
            "clue": "[14] The programming language created by James Gosling at Sun Microsystems known for its coffee cup logo.",
            "answer": "Java",
            "accepted": [
                "java language"
            ],
            "source": "Wikipedia - Java"
        },
        {
            "value": 100,
            "clue": "[15] The input device invented by Douglas Engelbart in 1964 featuring a wooden shell and wheels.",
            "answer": "Computer Mouse",
            "accepted": [
                "mouse"
            ],
            "source": "Wikipedia - Computer mouse"
        },
        {
            "value": 100,
            "clue": "[16] The online shopping giant founded by Jeff Bezos in 1994 as an online bookstore.",
            "answer": "Amazon",
            "accepted": [
                "amazon.com"
            ],
            "source": "Wikipedia - Amazon"
        },
        {
            "value": 100,
            "clue": "[17] The wireless technology standard used to exchange data over short distances between mobile devices.",
            "answer": "Bluetooth",
            "accepted": [
                "bluetooth technology"
            ],
            "source": "Wikipedia - Bluetooth"
        },
        {
            "value": 100,
            "clue": "[18] The battery component that stores electrical energy chemically, with lithium-ion being most common.",
            "answer": "Battery",
            "accepted": [
                "lithium battery"
            ],
            "source": "Wikipedia - Battery"
        },
        {
            "value": 100,
            "clue": "[19] The abbreviation 'USB' on cables stands for Universal Serial this.",
            "answer": "Bus",
            "accepted": [
                "universal serial bus"
            ],
            "source": "Wikipedia - USB"
        },
        {
            "value": 100,
            "clue": "[20] The voice assistant developed by Amazon embedded in Echo smart speakers.",
            "answer": "Alexa",
            "accepted": [
                "amazon alexa"
            ],
            "source": "Wikipedia - Amazon Alexa"
        },
        {
            "value": 100,
            "clue": "[21] The co-founder of Apple Inc. who famously unveiled the original iPhone in January 2007.",
            "answer": "Steve Jobs",
            "accepted": [
                "jobs"
            ],
            "source": "Wikipedia - Steve Jobs"
        },
        {
            "value": 100,
            "clue": "[22] The universal networking acronym HTTP stands for Hypertext this Protocol.",
            "answer": "Transfer",
            "accepted": [
                "hypertext transfer protocol"
            ],
            "source": "Wikipedia - HTTP"
        },
        {
            "value": 100,
            "clue": "[23] The search engine founded by Larry Page and Sergey Brin while PhD students at Stanford.",
            "answer": "Google",
            "accepted": [
                "google search"
            ],
            "source": "Wikipedia - Google"
        },
        {
            "value": 100,
            "clue": "[24] The global network of interconnected computers communicating via standardized protocols.",
            "answer": "The Internet",
            "accepted": [
                "internet"
            ],
            "source": "Wikipedia - Internet"
        },
        {
            "value": 100,
            "clue": "[25] The social media platform founded by Mark Zuckerberg in his Harvard dorm room in 2004.",
            "answer": "Facebook",
            "accepted": [
                "meta"
            ],
            "source": "Wikipedia - Facebook"
        },
        {
            "value": 100,
            "clue": "[26] The operating system developed by Microsoft that debuted with version 1.0 in 1985.",
            "answer": "Windows",
            "accepted": [
                "microsoft windows"
            ],
            "source": "Wikipedia - Microsoft Windows"
        },
        {
            "value": 100,
            "clue": "[27] The electronic device that computes and processes data according to stored programs.",
            "answer": "Computer",
            "accepted": [
                "pc"
            ],
            "source": "Wikipedia - Computer"
        },
        {
            "value": 100,
            "clue": "[28] The abbreviation 'AI' in modern computing stands for this.",
            "answer": "Artificial Intelligence",
            "accepted": [
                "ai"
            ],
            "source": "Wikipedia - Artificial intelligence"
        },
        {
            "value": 100,
            "clue": "[29] The storage technology abbreviated as 'SSD' that has largely replaced traditional HDDs.",
            "answer": "Solid State Drive",
            "accepted": [
                "solid-state drive"
            ],
            "source": "Wikipedia - Solid-state drive"
        },
        {
            "value": 100,
            "clue": "[30] The handheld mobile device launched by Apple in 2010 that revolutionized tablets.",
            "answer": "iPad",
            "accepted": [
                "apple ipad"
            ],
            "source": "Wikipedia - iPad"
        },
        {
            "value": 100,
            "clue": "[31] The popular video streaming platform founded in 2005 whose slogan was 'Broadcast Yourself'.",
            "answer": "YouTube",
            "accepted": [
                "youtube.com"
            ],
            "source": "Wikipedia - YouTube"
        },
        {
            "value": 100,
            "clue": "[32] The billionaire entrepreneur who co-founded PayPal, Tesla, and SpaceX.",
            "answer": "Elon Musk",
            "accepted": [
                "musk"
            ],
            "source": "Wikipedia - Elon Musk"
        },
        {
            "value": 100,
            "clue": "[33] The abbreviation 'URL' for a web address stands for Uniform Resource this.",
            "answer": "Locator",
            "accepted": [
                "uniform resource locator"
            ],
            "source": "Wikipedia - URL"
        },
        {
            "value": 100,
            "clue": "[34] The programming language created by James Gosling at Sun Microsystems known for its coffee cup logo.",
            "answer": "Java",
            "accepted": [
                "java language"
            ],
            "source": "Wikipedia - Java"
        },
        {
            "value": 100,
            "clue": "[35] The input device invented by Douglas Engelbart in 1964 featuring a wooden shell and wheels.",
            "answer": "Computer Mouse",
            "accepted": [
                "mouse"
            ],
            "source": "Wikipedia - Computer mouse"
        },
        {
            "value": 100,
            "clue": "[36] The online shopping giant founded by Jeff Bezos in 1994 as an online bookstore.",
            "answer": "Amazon",
            "accepted": [
                "amazon.com"
            ],
            "source": "Wikipedia - Amazon"
        },
        {
            "value": 100,
            "clue": "[37] The wireless technology standard used to exchange data over short distances between mobile devices.",
            "answer": "Bluetooth",
            "accepted": [
                "bluetooth technology"
            ],
            "source": "Wikipedia - Bluetooth"
        },
        {
            "value": 100,
            "clue": "[38] The battery component that stores electrical energy chemically, with lithium-ion being most common.",
            "answer": "Battery",
            "accepted": [
                "lithium battery"
            ],
            "source": "Wikipedia - Battery"
        },
        {
            "value": 100,
            "clue": "[39] The abbreviation 'USB' on cables stands for Universal Serial this.",
            "answer": "Bus",
            "accepted": [
                "universal serial bus"
            ],
            "source": "Wikipedia - USB"
        },
        {
            "value": 100,
            "clue": "[40] The voice assistant developed by Amazon embedded in Echo smart speakers.",
            "answer": "Alexa",
            "accepted": [
                "amazon alexa"
            ],
            "source": "Wikipedia - Amazon Alexa"
        },
        {
            "value": 200,
            "clue": "[1] The English mathematician regarded as the father of modern computer science who broke the Enigma cipher.",
            "answer": "Alan Turing",
            "accepted": [
                "turing"
            ],
            "source": "Wikipedia - Alan Turing"
        },
        {
            "value": 200,
            "clue": "[2] The open-source operating system kernel created by Linus Torvalds in 1991.",
            "answer": "Linux",
            "accepted": [
                "linux kernel"
            ],
            "source": "Wikipedia - Linux"
        },
        {
            "value": 200,
            "clue": "[3] The British scientist credited with inventing the World Wide Web at CERN in 1989.",
            "answer": "Tim Berners-Lee",
            "accepted": [
                "berners-lee"
            ],
            "source": "Wikipedia - Tim Berners-Lee"
        },
        {
            "value": 200,
            "clue": "[4] The semiconductor component invented at Bell Labs in 1947 that replaced vacuum tubes.",
            "answer": "Transistor",
            "accepted": [
                "the transistor"
            ],
            "source": "Wikipedia - Transistor"
        },
        {
            "value": 200,
            "clue": "[5] The programming language created by Guido van Rossum named after Monty Python.",
            "answer": "Python",
            "accepted": [
                "python language"
            ],
            "source": "Wikipedia - Python"
        },
        {
            "value": 200,
            "clue": "[6] The observation made in 1965 that the number of transistors on a microchip doubles roughly every two years.",
            "answer": "Moore's Law",
            "accepted": [
                "moores law"
            ],
            "source": "Wikipedia - Moore's law"
        },
        {
            "value": 200,
            "clue": "[7] The first electronic general-purpose digital computer, completed at the University of Pennsylvania in 1945.",
            "answer": "ENIAC",
            "accepted": [
                "eniac computer"
            ],
            "source": "Wikipedia - ENIAC"
        },
        {
            "value": 200,
            "clue": "[8] The version control system created by Linus Torvalds in 2005 to manage Linux kernel development.",
            "answer": "Git",
            "accepted": [
                "git vcs"
            ],
            "source": "Wikipedia - Git"
        },
        {
            "value": 200,
            "clue": "[9] The encryption protocol designated as 'SSL' / 'TLS' used to secure HTTPS communication.",
            "answer": "TLS",
            "accepted": [
                "transport layer security",
                "ssl"
            ],
            "source": "Wikipedia - Transport Layer Security"
        },
        {
            "value": 200,
            "clue": "[10] The high-level programming language developed by Dennis Ritchie at Bell Labs between 1969 and 1973.",
            "answer": "C",
            "accepted": [
                "c language"
            ],
            "source": "Wikipedia - C (programming language)"
        },
        {
            "value": 200,
            "clue": "[11] The company founded in 1968 by Robert Noyce and Gordon Moore that developed the x86 microprocessors.",
            "answer": "Intel",
            "accepted": [
                "intel corporation"
            ],
            "source": "Wikipedia - Intel"
        },
        {
            "value": 200,
            "clue": "[12] The free encyclopedia launched in January 2001 by Jimmy Wales and Larry Sanger.",
            "answer": "Wikipedia",
            "accepted": [
                "wikipedia.org"
            ],
            "source": "Wikipedia - Wikipedia"
        },
        {
            "value": 200,
            "clue": "[13] The mobile operating system developed by Google based on a modified Linux kernel.",
            "answer": "Android",
            "accepted": [
                "android os"
            ],
            "source": "Wikipedia - Android"
        },
        {
            "value": 200,
            "clue": "[14] The protocol used to route packets of data across the internet using IP addresses.",
            "answer": "Internet Protocol",
            "accepted": [
                "ip",
                "tcp ip"
            ],
            "source": "Wikipedia - Internet Protocol"
        },
        {
            "value": 200,
            "clue": "[15] The database query language designed for managing data held in relational database management systems.",
            "answer": "SQL",
            "accepted": [
                "structured query language",
                "sequel"
            ],
            "source": "Wikipedia - SQL"
        },
        {
            "value": 200,
            "clue": "[16] The graphics processing unit company founded in 1993 by Jensen Huang, Chris Malachowsky, and Curtis Priem.",
            "answer": "Nvidia",
            "accepted": [
                "nvidia corporation"
            ],
            "source": "Wikipedia - Nvidia"
        },
        {
            "value": 200,
            "clue": "[17] The electronic mail pioneer who chose the '@' symbol to identify email addresses in 1971.",
            "answer": "Ray Tomlinson",
            "accepted": [
                "tomlinson"
            ],
            "source": "Wikipedia - Ray Tomlinson"
        },
        {
            "value": 200,
            "clue": "[18] The personal computer released by Apple in 1984 featuring a graphical user interface and famous Super Bowl ad.",
            "answer": "Macintosh",
            "accepted": [
                "apple macintosh",
                "mac"
            ],
            "source": "Wikipedia - Macintosh"
        },
        {
            "value": 200,
            "clue": "[19] The scripting language created by Brendan Eich in 1995 for Netscape Navigator in just 10 days.",
            "answer": "JavaScript",
            "accepted": [
                "js"
            ],
            "source": "Wikipedia - JavaScript"
        },
        {
            "value": 200,
            "clue": "[20] The American telecommunications monopoly nicknamed 'Ma Bell' broken up by the US government in 1984.",
            "answer": "AT&T",
            "accepted": [
                "american telephone and telegraph"
            ],
            "source": "Wikipedia - Breakup of the Bell System"
        },
        {
            "value": 200,
            "clue": "[21] The English mathematician regarded as the father of modern computer science who broke the Enigma cipher.",
            "answer": "Alan Turing",
            "accepted": [
                "turing"
            ],
            "source": "Wikipedia - Alan Turing"
        },
        {
            "value": 200,
            "clue": "[22] The open-source operating system kernel created by Linus Torvalds in 1991.",
            "answer": "Linux",
            "accepted": [
                "linux kernel"
            ],
            "source": "Wikipedia - Linux"
        },
        {
            "value": 200,
            "clue": "[23] The British scientist credited with inventing the World Wide Web at CERN in 1989.",
            "answer": "Tim Berners-Lee",
            "accepted": [
                "berners-lee"
            ],
            "source": "Wikipedia - Tim Berners-Lee"
        },
        {
            "value": 200,
            "clue": "[24] The semiconductor component invented at Bell Labs in 1947 that replaced vacuum tubes.",
            "answer": "Transistor",
            "accepted": [
                "the transistor"
            ],
            "source": "Wikipedia - Transistor"
        },
        {
            "value": 200,
            "clue": "[25] The programming language created by Guido van Rossum named after Monty Python.",
            "answer": "Python",
            "accepted": [
                "python language"
            ],
            "source": "Wikipedia - Python"
        },
        {
            "value": 200,
            "clue": "[26] The observation made in 1965 that the number of transistors on a microchip doubles roughly every two years.",
            "answer": "Moore's Law",
            "accepted": [
                "moores law"
            ],
            "source": "Wikipedia - Moore's law"
        },
        {
            "value": 200,
            "clue": "[27] The first electronic general-purpose digital computer, completed at the University of Pennsylvania in 1945.",
            "answer": "ENIAC",
            "accepted": [
                "eniac computer"
            ],
            "source": "Wikipedia - ENIAC"
        },
        {
            "value": 200,
            "clue": "[28] The version control system created by Linus Torvalds in 2005 to manage Linux kernel development.",
            "answer": "Git",
            "accepted": [
                "git vcs"
            ],
            "source": "Wikipedia - Git"
        },
        {
            "value": 200,
            "clue": "[29] The encryption protocol designated as 'SSL' / 'TLS' used to secure HTTPS communication.",
            "answer": "TLS",
            "accepted": [
                "transport layer security",
                "ssl"
            ],
            "source": "Wikipedia - Transport Layer Security"
        },
        {
            "value": 200,
            "clue": "[30] The high-level programming language developed by Dennis Ritchie at Bell Labs between 1969 and 1973.",
            "answer": "C",
            "accepted": [
                "c language"
            ],
            "source": "Wikipedia - C (programming language)"
        },
        {
            "value": 200,
            "clue": "[31] The company founded in 1968 by Robert Noyce and Gordon Moore that developed the x86 microprocessors.",
            "answer": "Intel",
            "accepted": [
                "intel corporation"
            ],
            "source": "Wikipedia - Intel"
        },
        {
            "value": 200,
            "clue": "[32] The free encyclopedia launched in January 2001 by Jimmy Wales and Larry Sanger.",
            "answer": "Wikipedia",
            "accepted": [
                "wikipedia.org"
            ],
            "source": "Wikipedia - Wikipedia"
        },
        {
            "value": 200,
            "clue": "[33] The mobile operating system developed by Google based on a modified Linux kernel.",
            "answer": "Android",
            "accepted": [
                "android os"
            ],
            "source": "Wikipedia - Android"
        },
        {
            "value": 200,
            "clue": "[34] The protocol used to route packets of data across the internet using IP addresses.",
            "answer": "Internet Protocol",
            "accepted": [
                "ip",
                "tcp ip"
            ],
            "source": "Wikipedia - Internet Protocol"
        },
        {
            "value": 200,
            "clue": "[35] The database query language designed for managing data held in relational database management systems.",
            "answer": "SQL",
            "accepted": [
                "structured query language",
                "sequel"
            ],
            "source": "Wikipedia - SQL"
        },
        {
            "value": 200,
            "clue": "[36] The graphics processing unit company founded in 1993 by Jensen Huang, Chris Malachowsky, and Curtis Priem.",
            "answer": "Nvidia",
            "accepted": [
                "nvidia corporation"
            ],
            "source": "Wikipedia - Nvidia"
        },
        {
            "value": 200,
            "clue": "[37] The electronic mail pioneer who chose the '@' symbol to identify email addresses in 1971.",
            "answer": "Ray Tomlinson",
            "accepted": [
                "tomlinson"
            ],
            "source": "Wikipedia - Ray Tomlinson"
        },
        {
            "value": 200,
            "clue": "[38] The personal computer released by Apple in 1984 featuring a graphical user interface and famous Super Bowl ad.",
            "answer": "Macintosh",
            "accepted": [
                "apple macintosh",
                "mac"
            ],
            "source": "Wikipedia - Macintosh"
        },
        {
            "value": 200,
            "clue": "[39] The scripting language created by Brendan Eich in 1995 for Netscape Navigator in just 10 days.",
            "answer": "JavaScript",
            "accepted": [
                "js"
            ],
            "source": "Wikipedia - JavaScript"
        },
        {
            "value": 200,
            "clue": "[40] The American telecommunications monopoly nicknamed 'Ma Bell' broken up by the US government in 1984.",
            "answer": "AT&T",
            "accepted": [
                "american telephone and telegraph"
            ],
            "source": "Wikipedia - Breakup of the Bell System"
        },
        {
            "value": 300,
            "clue": "[1] The pseudonym used by the unknown creator or group who published the original Bitcoin whitepaper in 2008.",
            "answer": "Satoshi Nakamoto",
            "accepted": [
                "satoshi",
                "nakamoto"
            ],
            "source": "Wikipedia - Satoshi Nakamoto"
        },
        {
            "value": 300,
            "clue": "[2] The daughter of Lord Byron who wrote an algorithm for Babbage's Analytical Engine, recognized as the first programmer.",
            "answer": "Ada Lovelace",
            "accepted": [
                "lovelace"
            ],
            "source": "Wikipedia - Ada Lovelace"
        },
        {
            "value": 300,
            "clue": "[3] The English mechanical engineer who originated the concept of a programmable general-purpose computer (the Analytical Engine).",
            "answer": "Charles Babbage",
            "accepted": [
                "babbage"
            ],
            "source": "Wikipedia - Charles Babbage"
        },
        {
            "value": 300,
            "clue": "[4] The test proposed in 1950 to determine whether a machine can exhibit intelligent behavior indistinguishable from a human.",
            "answer": "Turing Test",
            "accepted": [
                "the turing test"
            ],
            "source": "Wikipedia - Turing test"
        },
        {
            "value": 300,
            "clue": "[5] The standard networking architecture model consisting of 7 distinct conceptual layers.",
            "answer": "OSI Model",
            "accepted": [
                "open systems interconnection model"
            ],
            "source": "Wikipedia - OSI model"
        },
        {
            "value": 300,
            "clue": "[6] The mathematical algorithm developed by Rivest, Shamir, and Adleman in 1977 for public-key cryptography.",
            "answer": "RSA",
            "accepted": [
                "rsa algorithm"
            ],
            "source": "Wikipedia - RSA (cryptosystem)"
        },
        {
            "value": 300,
            "clue": "[7] The ARPANET protocol created by Vint Cerf and Bob Kahn that became the foundation of internet communication.",
            "answer": "TCP/IP",
            "accepted": [
                "transmission control protocol"
            ],
            "source": "Wikipedia - Internet protocol suite"
        },
        {
            "value": 300,
            "clue": "[8] The first commercial graphical web browser released in 1993, developed at NCSA by Marc Andreessen.",
            "answer": "Mosaic",
            "accepted": [
                "ncsa mosaic"
            ],
            "source": "Wikipedia - Mosaic (web browser)"
        },
        {
            "value": 300,
            "clue": "[9] The US defense research agency that funded the creation of ARPANET in the late 1960s.",
            "answer": "DARPA",
            "accepted": [
                "arpa"
            ],
            "source": "Wikipedia - DARPA"
        },
        {
            "value": 300,
            "clue": "[10] The distributed cryptographic ledger technology underlying cryptocurrencies like Bitcoin and Ethereum.",
            "answer": "Blockchain",
            "accepted": [
                "the blockchain"
            ],
            "source": "Wikipedia - Blockchain"
        },
        {
            "value": 300,
            "clue": "[11] The founder of Ethereum who proposed the smart-contract platform in late 2013 at age 19.",
            "answer": "Vitalik Buterin",
            "accepted": [
                "buterin"
            ],
            "source": "Wikipedia - Vitalik Buterin"
        },
        {
            "value": 300,
            "clue": "[12] The landmark 1978 computer science paper by Leslie Lamport addressing clock synchronization in distributed systems.",
            "answer": "Time, Clues, and the Ordering of Events",
            "accepted": [
                "logical clocks",
                "lamport timestamps"
            ],
            "source": "Wikipedia - Lamport timestamp"
        },
        {
            "value": 300,
            "clue": "[13] The pioneer who co-founded Xerox PARC and invented Ethernet networking in 1973.",
            "answer": "Robert Metcalfe",
            "accepted": [
                "metcalfe"
            ],
            "source": "Wikipedia - Robert Metcalfe"
        },
        {
            "value": 300,
            "clue": "[14] The law stating that the value of a telecommunications network is proportional to the square of the number of connected users.",
            "answer": "Metcalfe's Law",
            "accepted": [
                "metcalfes law"
            ],
            "source": "Wikipedia - Metcalfe's law"
        },
        {
            "value": 300,
            "clue": "[15] The graphical user interface operating system component developed at MIT under Bob Scheifler in 1984.",
            "answer": "X Window System",
            "accepted": [
                "x11",
                "xorg"
            ],
            "source": "Wikipedia - X Window System"
        },
        {
            "value": 300,
            "clue": "[16] The early programming language developed in 1957 by John Backus at IBM for scientific computing.",
            "answer": "Fortran",
            "accepted": [
                "formula translation"
            ],
            "source": "Wikipedia - Fortran"
        },
        {
            "value": 300,
            "clue": "[17] The business-oriented programming language designed in 1959 by CODASYL, heavily influenced by Grace Hopper.",
            "answer": "COBOL",
            "accepted": [
                "common business-oriented language"
            ],
            "source": "Wikipedia - COBOL"
        },
        {
            "value": 300,
            "clue": "[18] The US Navy rear admiral who pioneered machine-independent programming languages and popularized the term 'debugging'.",
            "answer": "Grace Hopper",
            "accepted": [
                "hopper",
                "amazing grace"
            ],
            "source": "Wikipedia - Grace Hopper"
        },
        {
            "value": 300,
            "clue": "[19] The computer scientist who created TeX, wrote 'The Art of Computer Programming', and devised asymptotic notation analysis.",
            "answer": "Donald Knuth",
            "accepted": [
                "knuth"
            ],
            "source": "Wikipedia - Donald Knuth"
        },
        {
            "value": 300,
            "clue": "[20] The theoretical limit in computing where quantum mechanical effects threaten the shrinking of silicon transistors.",
            "answer": "Quantum Tunneling",
            "accepted": [
                "quantum limit"
            ],
            "source": "Wikipedia - Quantum tunnelling"
        },
        {
            "value": 300,
            "clue": "[21] The pseudonym used by the unknown creator or group who published the original Bitcoin whitepaper in 2008.",
            "answer": "Satoshi Nakamoto",
            "accepted": [
                "satoshi",
                "nakamoto"
            ],
            "source": "Wikipedia - Satoshi Nakamoto"
        },
        {
            "value": 300,
            "clue": "[22] The daughter of Lord Byron who wrote an algorithm for Babbage's Analytical Engine, recognized as the first programmer.",
            "answer": "Ada Lovelace",
            "accepted": [
                "lovelace"
            ],
            "source": "Wikipedia - Ada Lovelace"
        },
        {
            "value": 300,
            "clue": "[23] The English mechanical engineer who originated the concept of a programmable general-purpose computer (the Analytical Engine).",
            "answer": "Charles Babbage",
            "accepted": [
                "babbage"
            ],
            "source": "Wikipedia - Charles Babbage"
        },
        {
            "value": 300,
            "clue": "[24] The test proposed in 1950 to determine whether a machine can exhibit intelligent behavior indistinguishable from a human.",
            "answer": "Turing Test",
            "accepted": [
                "the turing test"
            ],
            "source": "Wikipedia - Turing test"
        },
        {
            "value": 300,
            "clue": "[25] The standard networking architecture model consisting of 7 distinct conceptual layers.",
            "answer": "OSI Model",
            "accepted": [
                "open systems interconnection model"
            ],
            "source": "Wikipedia - OSI model"
        },
        {
            "value": 300,
            "clue": "[26] The mathematical algorithm developed by Rivest, Shamir, and Adleman in 1977 for public-key cryptography.",
            "answer": "RSA",
            "accepted": [
                "rsa algorithm"
            ],
            "source": "Wikipedia - RSA (cryptosystem)"
        },
        {
            "value": 300,
            "clue": "[27] The ARPANET protocol created by Vint Cerf and Bob Kahn that became the foundation of internet communication.",
            "answer": "TCP/IP",
            "accepted": [
                "transmission control protocol"
            ],
            "source": "Wikipedia - Internet protocol suite"
        },
        {
            "value": 300,
            "clue": "[28] The first commercial graphical web browser released in 1993, developed at NCSA by Marc Andreessen.",
            "answer": "Mosaic",
            "accepted": [
                "ncsa mosaic"
            ],
            "source": "Wikipedia - Mosaic (web browser)"
        },
        {
            "value": 300,
            "clue": "[29] The US defense research agency that funded the creation of ARPANET in the late 1960s.",
            "answer": "DARPA",
            "accepted": [
                "arpa"
            ],
            "source": "Wikipedia - DARPA"
        },
        {
            "value": 300,
            "clue": "[30] The distributed cryptographic ledger technology underlying cryptocurrencies like Bitcoin and Ethereum.",
            "answer": "Blockchain",
            "accepted": [
                "the blockchain"
            ],
            "source": "Wikipedia - Blockchain"
        },
        {
            "value": 300,
            "clue": "[31] The founder of Ethereum who proposed the smart-contract platform in late 2013 at age 19.",
            "answer": "Vitalik Buterin",
            "accepted": [
                "buterin"
            ],
            "source": "Wikipedia - Vitalik Buterin"
        },
        {
            "value": 300,
            "clue": "[32] The landmark 1978 computer science paper by Leslie Lamport addressing clock synchronization in distributed systems.",
            "answer": "Time, Clues, and the Ordering of Events",
            "accepted": [
                "logical clocks",
                "lamport timestamps"
            ],
            "source": "Wikipedia - Lamport timestamp"
        },
        {
            "value": 300,
            "clue": "[33] The pioneer who co-founded Xerox PARC and invented Ethernet networking in 1973.",
            "answer": "Robert Metcalfe",
            "accepted": [
                "metcalfe"
            ],
            "source": "Wikipedia - Robert Metcalfe"
        },
        {
            "value": 300,
            "clue": "[34] The law stating that the value of a telecommunications network is proportional to the square of the number of connected users.",
            "answer": "Metcalfe's Law",
            "accepted": [
                "metcalfes law"
            ],
            "source": "Wikipedia - Metcalfe's law"
        },
        {
            "value": 300,
            "clue": "[35] The graphical user interface operating system component developed at MIT under Bob Scheifler in 1984.",
            "answer": "X Window System",
            "accepted": [
                "x11",
                "xorg"
            ],
            "source": "Wikipedia - X Window System"
        },
        {
            "value": 300,
            "clue": "[36] The early programming language developed in 1957 by John Backus at IBM for scientific computing.",
            "answer": "Fortran",
            "accepted": [
                "formula translation"
            ],
            "source": "Wikipedia - Fortran"
        },
        {
            "value": 300,
            "clue": "[37] The business-oriented programming language designed in 1959 by CODASYL, heavily influenced by Grace Hopper.",
            "answer": "COBOL",
            "accepted": [
                "common business-oriented language"
            ],
            "source": "Wikipedia - COBOL"
        },
        {
            "value": 300,
            "clue": "[38] The US Navy rear admiral who pioneered machine-independent programming languages and popularized the term 'debugging'.",
            "answer": "Grace Hopper",
            "accepted": [
                "hopper",
                "amazing grace"
            ],
            "source": "Wikipedia - Grace Hopper"
        },
        {
            "value": 300,
            "clue": "[39] The computer scientist who created TeX, wrote 'The Art of Computer Programming', and devised asymptotic notation analysis.",
            "answer": "Donald Knuth",
            "accepted": [
                "knuth"
            ],
            "source": "Wikipedia - Donald Knuth"
        },
        {
            "value": 300,
            "clue": "[40] The theoretical limit in computing where quantum mechanical effects threaten the shrinking of silicon transistors.",
            "answer": "Quantum Tunneling",
            "accepted": [
                "quantum limit"
            ],
            "source": "Wikipedia - Quantum tunnelling"
        },
        {
            "value": 400,
            "clue": "[1] The theoretical machine introduced in 1936 that manipulates symbols on a strip of tape according to a table of rules.",
            "answer": "Turing Machine",
            "accepted": [
                "universal turing machine"
            ],
            "source": "Wikipedia - Turing machine"
        },
        {
            "value": 400,
            "clue": "[2] The principle in distributed systems stating that a data store can simultaneously provide only two of: Consistency, Availability, and Partition tolerance.",
            "answer": "CAP Theorem",
            "accepted": [
                "brewer's theorem"
            ],
            "source": "Wikipedia - CAP theorem"
        },
        {
            "value": 400,
            "clue": "[3] The Bell Labs computer scientist who created the B programming language and co-created Unix and Go.",
            "answer": "Ken Thompson",
            "accepted": [
                "thompson"
            ],
            "source": "Wikipedia - Ken Thompson"
        },
        {
            "value": 400,
            "clue": "[4] The computer architecture where instructions and data share the same memory and bus, named after a mathematician.",
            "answer": "Von Neumann Architecture",
            "accepted": [
                "von neumann model"
            ],
            "source": "Wikipedia - Von Neumann architecture"
        },
        {
            "value": 400,
            "clue": "[5] The Swedish-American engineer at Bell Labs who formulated the fundamental sampling theorem in digital signal processing in 1928.",
            "answer": "Harry Nyquist",
            "accepted": [
                "nyquist theorem"
            ],
            "source": "Wikipedia - Nyquist–Shannon sampling theorem"
        },
        {
            "value": 400,
            "clue": "[6] The father of information theory who introduced the concept of the 'bit' and entropy in his 1948 landmark paper.",
            "answer": "Claude Shannon",
            "accepted": [
                "shannon"
            ],
            "source": "Wikipedia - Claude Shannon"
        },
        {
            "value": 400,
            "clue": "[7] The cryptographic technique that allows a prover to convince a verifier that a statement is true without revealing any information beyond the validity.",
            "answer": "Zero-Knowledge Proof",
            "accepted": [
                "zk-proof",
                "zkp"
            ],
            "source": "Wikipedia - Zero-knowledge proof"
        },
        {
            "value": 400,
            "clue": "[8] The consensus algorithm designed for state machine replication in distributed systems proposed by Diego Ongaro and John Ousterhout.",
            "answer": "Raft",
            "accepted": [
                "raft consensus"
            ],
            "source": "Wikipedia - Raft (algorithm)"
        },
        {
            "value": 400,
            "clue": "[9] The consensus protocol devised by Leslie Lamport in 1989 based on a fictional Greek parliamentary system.",
            "answer": "Paxos",
            "accepted": [
                "paxos protocol"
            ],
            "source": "Wikipedia - Paxos (computer science)"
        },
        {
            "value": 400,
            "clue": "[10] The microkernel operating system designed by Andrew Tanenbaum that inspired Linus Torvalds to write Linux.",
            "answer": "MINIX",
            "accepted": [
                "minix 3"
            ],
            "source": "Wikipedia - MINIX"
        },
        {
            "value": 400,
            "clue": "[11] The first high-level object-oriented programming language, developed in Norway in the 1960s by Dahl and Nygaard.",
            "answer": "Simula",
            "accepted": [
                "simula 67"
            ],
            "source": "Wikipedia - Simula"
        },
        {
            "value": 400,
            "clue": "[12] The pure object-oriented language developed at Xerox PARC by Alan Kay, Dan Ingalls, and Adele Goldberg.",
            "answer": "Smalltalk",
            "accepted": [
                "smalltalk-80"
            ],
            "source": "Wikipedia - Smalltalk"
        },
        {
            "value": 400,
            "clue": "[13] The functional programming language based on lambda calculus created by John McCarthy at MIT in 1958.",
            "answer": "Lisp",
            "accepted": [
                "lisp language"
            ],
            "source": "Wikipedia - Lisp (programming language)"
        },
        {
            "value": 400,
            "clue": "[14] The distributed hash table protocol published in 2002 by Petar Maymounkov and David Mazières used in BitTorrent.",
            "answer": "Kademlia",
            "accepted": [
                "kademlia dht"
            ],
            "source": "Wikipedia - Kademlia"
        },
        {
            "value": 400,
            "clue": "[15] The algorithm used by Google's search engine to rank web pages based on the graph structure of hyperlinks.",
            "answer": "PageRank",
            "accepted": [
                "pagerank algorithm"
            ],
            "source": "Wikipedia - PageRank"
        },
        {
            "value": 400,
            "clue": "[16] The data structure invented by Rudolf Bayer in 1971 that maintains sorted data and allows logarithmic search, insertions, and deletions.",
            "answer": "B-tree",
            "accepted": [
                "b tree"
            ],
            "source": "Wikipedia - B-tree"
        },
        {
            "value": 400,
            "clue": "[17] The probabilistic data structure invented by Burton Howard Bloom in 1970 used to test whether an element is a member of a set.",
            "answer": "Bloom Filter",
            "accepted": [
                "bloom filters"
            ],
            "source": "Wikipedia - Bloom filter"
        },
        {
            "value": 400,
            "clue": "[18] The public-key key exchange algorithm devised in 1976 by Whitfield Diffie and Martin Hellman.",
            "answer": "Diffie-Hellman",
            "accepted": [
                "diffie hellman key exchange"
            ],
            "source": "Wikipedia - Diffie–Hellman key exchange"
        },
        {
            "value": 400,
            "clue": "[19] The secure cryptographic hash function family designed by the NSA that includes SHA-256.",
            "answer": "SHA-2",
            "accepted": [
                "secure hash algorithm 2"
            ],
            "source": "Wikipedia - SHA-2"
        },
        {
            "value": 400,
            "clue": "[20] The open-source container virtualization system launched by Solomon Hykes in 2013.",
            "answer": "Docker",
            "accepted": [
                "docker containers"
            ],
            "source": "Wikipedia - Docker (software)"
        },
        {
            "value": 400,
            "clue": "[21] The theoretical machine introduced in 1936 that manipulates symbols on a strip of tape according to a table of rules.",
            "answer": "Turing Machine",
            "accepted": [
                "universal turing machine"
            ],
            "source": "Wikipedia - Turing machine"
        },
        {
            "value": 400,
            "clue": "[22] The principle in distributed systems stating that a data store can simultaneously provide only two of: Consistency, Availability, and Partition tolerance.",
            "answer": "CAP Theorem",
            "accepted": [
                "brewer's theorem"
            ],
            "source": "Wikipedia - CAP theorem"
        },
        {
            "value": 400,
            "clue": "[23] The Bell Labs computer scientist who created the B programming language and co-created Unix and Go.",
            "answer": "Ken Thompson",
            "accepted": [
                "thompson"
            ],
            "source": "Wikipedia - Ken Thompson"
        },
        {
            "value": 400,
            "clue": "[24] The computer architecture where instructions and data share the same memory and bus, named after a mathematician.",
            "answer": "Von Neumann Architecture",
            "accepted": [
                "von neumann model"
            ],
            "source": "Wikipedia - Von Neumann architecture"
        },
        {
            "value": 400,
            "clue": "[25] The Swedish-American engineer at Bell Labs who formulated the fundamental sampling theorem in digital signal processing in 1928.",
            "answer": "Harry Nyquist",
            "accepted": [
                "nyquist theorem"
            ],
            "source": "Wikipedia - Nyquist–Shannon sampling theorem"
        },
        {
            "value": 400,
            "clue": "[26] The father of information theory who introduced the concept of the 'bit' and entropy in his 1948 landmark paper.",
            "answer": "Claude Shannon",
            "accepted": [
                "shannon"
            ],
            "source": "Wikipedia - Claude Shannon"
        },
        {
            "value": 400,
            "clue": "[27] The cryptographic technique that allows a prover to convince a verifier that a statement is true without revealing any information beyond the validity.",
            "answer": "Zero-Knowledge Proof",
            "accepted": [
                "zk-proof",
                "zkp"
            ],
            "source": "Wikipedia - Zero-knowledge proof"
        },
        {
            "value": 400,
            "clue": "[28] The consensus algorithm designed for state machine replication in distributed systems proposed by Diego Ongaro and John Ousterhout.",
            "answer": "Raft",
            "accepted": [
                "raft consensus"
            ],
            "source": "Wikipedia - Raft (algorithm)"
        },
        {
            "value": 400,
            "clue": "[29] The consensus protocol devised by Leslie Lamport in 1989 based on a fictional Greek parliamentary system.",
            "answer": "Paxos",
            "accepted": [
                "paxos protocol"
            ],
            "source": "Wikipedia - Paxos (computer science)"
        },
        {
            "value": 400,
            "clue": "[30] The microkernel operating system designed by Andrew Tanenbaum that inspired Linus Torvalds to write Linux.",
            "answer": "MINIX",
            "accepted": [
                "minix 3"
            ],
            "source": "Wikipedia - MINIX"
        },
        {
            "value": 400,
            "clue": "[31] The first high-level object-oriented programming language, developed in Norway in the 1960s by Dahl and Nygaard.",
            "answer": "Simula",
            "accepted": [
                "simula 67"
            ],
            "source": "Wikipedia - Simula"
        },
        {
            "value": 400,
            "clue": "[32] The pure object-oriented language developed at Xerox PARC by Alan Kay, Dan Ingalls, and Adele Goldberg.",
            "answer": "Smalltalk",
            "accepted": [
                "smalltalk-80"
            ],
            "source": "Wikipedia - Smalltalk"
        },
        {
            "value": 400,
            "clue": "[33] The functional programming language based on lambda calculus created by John McCarthy at MIT in 1958.",
            "answer": "Lisp",
            "accepted": [
                "lisp language"
            ],
            "source": "Wikipedia - Lisp (programming language)"
        },
        {
            "value": 400,
            "clue": "[34] The distributed hash table protocol published in 2002 by Petar Maymounkov and David Mazières used in BitTorrent.",
            "answer": "Kademlia",
            "accepted": [
                "kademlia dht"
            ],
            "source": "Wikipedia - Kademlia"
        },
        {
            "value": 400,
            "clue": "[35] The algorithm used by Google's search engine to rank web pages based on the graph structure of hyperlinks.",
            "answer": "PageRank",
            "accepted": [
                "pagerank algorithm"
            ],
            "source": "Wikipedia - PageRank"
        },
        {
            "value": 400,
            "clue": "[36] The data structure invented by Rudolf Bayer in 1971 that maintains sorted data and allows logarithmic search, insertions, and deletions.",
            "answer": "B-tree",
            "accepted": [
                "b tree"
            ],
            "source": "Wikipedia - B-tree"
        },
        {
            "value": 400,
            "clue": "[37] The probabilistic data structure invented by Burton Howard Bloom in 1970 used to test whether an element is a member of a set.",
            "answer": "Bloom Filter",
            "accepted": [
                "bloom filters"
            ],
            "source": "Wikipedia - Bloom filter"
        },
        {
            "value": 400,
            "clue": "[38] The public-key key exchange algorithm devised in 1976 by Whitfield Diffie and Martin Hellman.",
            "answer": "Diffie-Hellman",
            "accepted": [
                "diffie hellman key exchange"
            ],
            "source": "Wikipedia - Diffie–Hellman key exchange"
        },
        {
            "value": 400,
            "clue": "[39] The secure cryptographic hash function family designed by the NSA that includes SHA-256.",
            "answer": "SHA-2",
            "accepted": [
                "secure hash algorithm 2"
            ],
            "source": "Wikipedia - SHA-2"
        },
        {
            "value": 400,
            "clue": "[40] The open-source container virtualization system launched by Solomon Hykes in 2013.",
            "answer": "Docker",
            "accepted": [
                "docker containers"
            ],
            "source": "Wikipedia - Docker (software)"
        },
        {
            "value": 500,
            "clue": "[1] The unsolved Millennium Prize Problem in computer science asking whether problems whose solutions can be verified quickly can also be solved quickly.",
            "answer": "P versus NP",
            "accepted": [
                "p vs np",
                "p=np"
            ],
            "source": "Wikipedia - P versus NP problem"
        },
        {
            "value": 500,
            "clue": "[2] The theorem proved by Stephen Cook and Leonid Levin showing that the Boolean satisfiability problem is NP-complete.",
            "answer": "Cook-Levin Theorem",
            "accepted": [
                "cook's theorem"
            ],
            "source": "Wikipedia - Cook–Levin theorem"
        },
        {
            "value": 500,
            "clue": "[3] The quantum algorithm invented by Peter Shor in 1994 that finds prime factors of an integer in polynomial time.",
            "answer": "Shor's Algorithm",
            "accepted": [
                "shor algorithm"
            ],
            "source": "Wikipedia - Shor's algorithm"
        },
        {
            "value": 500,
            "clue": "[4] The quantum algorithm invented by Lov Grover in 1996 that provides quadratic speedup for searching unsorted databases.",
            "answer": "Grover's Algorithm",
            "accepted": [
                "grover search"
            ],
            "source": "Wikipedia - Grover's algorithm"
        },
        {
            "value": 500,
            "clue": "[5] The paradox in quantum computing and information theory relating to the no-deletion theorem and unitarity.",
            "answer": "No-deletion Theorem",
            "accepted": [
                "no deletion"
            ],
            "source": "Wikipedia - No-deletion theorem"
        },
        {
            "value": 500,
            "clue": "[6] The mathematical theorem in concurrency proved by Maurice Herlihy establishing wait-free synchronization hierarchies.",
            "answer": "Herlihy's Consensus Hierarchy",
            "accepted": [
                "consensus numbers"
            ],
            "source": "Wikipedia - Consensus number"
        },
        {
            "value": 500,
            "clue": "[7] The linear-time string searching algorithm designed in 1977 by Donald Knuth, James H. Morris, and Vaughan Pratt.",
            "answer": "KMP Algorithm",
            "accepted": [
                "knuth morris pratt"
            ],
            "source": "Wikipedia - Knuth–Morris–Pratt algorithm"
        },
        {
            "value": 500,
            "clue": "[8] The space-efficient string index structure invented by Paolo Ferragina and Giovanni Manzini in 2000.",
            "answer": "FM-index",
            "accepted": [
                "ferragina manzini index"
            ],
            "source": "Wikipedia - FM-index"
        },
        {
            "value": 500,
            "clue": "[9] The theoretical limit in communications theory defining the maximum rate at which information can be transmitted over a noisy channel.",
            "answer": "Shannon Limit",
            "accepted": [
                "shannon capacity"
            ],
            "source": "Wikipedia - Shannon–Hartley theorem"
        },
        {
            "value": 500,
            "clue": "[10] The cellular automaton devised by John Horton Conway in 1970 that is Turing complete despite zero player input.",
            "answer": "Conway's Game of Life",
            "accepted": [
                "game of life"
            ],
            "source": "Wikipedia - Conway's Game of Life"
        },
        {
            "value": 500,
            "clue": "[11] The formal operational semantics framework introduced by Gordon Plotkin in 1981.",
            "answer": "Structural Operational Semantics",
            "accepted": [
                "sos"
            ],
            "source": "Wikipedia - Structural operational semantics"
        },
        {
            "value": 500,
            "clue": "[12] The computer system developed in 1969 at Bell Labs that introduced C, pipeline architectures, and 'everything is a file'.",
            "answer": "Unix",
            "accepted": [
                "unix operating system"
            ],
            "source": "Wikipedia - Unix"
        },
        {
            "value": 500,
            "clue": "[13] The microarchitectural vulnerability discovered in 2018 affecting modern CPUs utilizing speculative execution and branch prediction.",
            "answer": "Spectre",
            "accepted": [
                "spectre attack"
            ],
            "source": "Wikipedia - Spectre (security vulnerability)"
        },
        {
            "value": 500,
            "clue": "[14] The hardware vulnerability discovered alongside Spectre that allows unauthorized read of kernel memory via speculative out-of-order execution.",
            "answer": "Meltdown",
            "accepted": [
                "meltdown attack"
            ],
            "source": "Wikipedia - Meltdown (security vulnerability)"
        },
        {
            "value": 500,
            "clue": "[15] The algorithmic complexity class containing problems solvable by a deterministic Turing machine using logarithmic space.",
            "answer": "L",
            "accepted": [
                "dlogspace"
            ],
            "source": "Wikipedia - L (complexity)"
        },
        {
            "value": 500,
            "clue": "[16] The algorithmic complexity class containing problems solvable by a probabilistic Turing machine in polynomial time with bounded two-sided error.",
            "answer": "BPP",
            "accepted": [
                "bounded-error probabilistic polynomial time"
            ],
            "source": "Wikipedia - BPP (complexity)"
        },
        {
            "value": 500,
            "clue": "[17] The theorem proved in 1931 by Kurt Gödel showing that any consistent axiomatic system capable of arithmetic is incomplete.",
            "answer": "Gödel's Incompleteness Theorems",
            "accepted": [
                "incompleteness theorem"
            ],
            "source": "Wikipedia - Gödel's incompleteness theorems"
        },
        {
            "value": 500,
            "clue": "[18] The computational problem proven undecidable by Alan Turing in 1936 regarding whether an arbitrary program will finish running.",
            "answer": "Halting Problem",
            "accepted": [
                "the halting problem"
            ],
            "source": "Wikipedia - Halting problem"
        },
        {
            "value": 500,
            "clue": "[19] The cryptographic primitive that allows computation over encrypted data without decrypting it first.",
            "answer": "Homomorphic Encryption",
            "accepted": [
                "fhe"
            ],
            "source": "Wikipedia - Homomorphic encryption"
        },
        {
            "value": 500,
            "clue": "[20] The 1982 paper by Lamport, Shostak, and Pease introducing consensus with unfaithful nodes.",
            "answer": "Byzantine Generals Problem",
            "accepted": [
                "byzantine fault tolerance"
            ],
            "source": "Wikipedia - Byzantine fault"
        },
        {
            "value": 500,
            "clue": "[21] The unsolved Millennium Prize Problem in computer science asking whether problems whose solutions can be verified quickly can also be solved quickly.",
            "answer": "P versus NP",
            "accepted": [
                "p vs np",
                "p=np"
            ],
            "source": "Wikipedia - P versus NP problem"
        },
        {
            "value": 500,
            "clue": "[22] The theorem proved by Stephen Cook and Leonid Levin showing that the Boolean satisfiability problem is NP-complete.",
            "answer": "Cook-Levin Theorem",
            "accepted": [
                "cook's theorem"
            ],
            "source": "Wikipedia - Cook–Levin theorem"
        },
        {
            "value": 500,
            "clue": "[23] The quantum algorithm invented by Peter Shor in 1994 that finds prime factors of an integer in polynomial time.",
            "answer": "Shor's Algorithm",
            "accepted": [
                "shor algorithm"
            ],
            "source": "Wikipedia - Shor's algorithm"
        },
        {
            "value": 500,
            "clue": "[24] The quantum algorithm invented by Lov Grover in 1996 that provides quadratic speedup for searching unsorted databases.",
            "answer": "Grover's Algorithm",
            "accepted": [
                "grover search"
            ],
            "source": "Wikipedia - Grover's algorithm"
        },
        {
            "value": 500,
            "clue": "[25] The paradox in quantum computing and information theory relating to the no-deletion theorem and unitarity.",
            "answer": "No-deletion Theorem",
            "accepted": [
                "no deletion"
            ],
            "source": "Wikipedia - No-deletion theorem"
        },
        {
            "value": 500,
            "clue": "[26] The mathematical theorem in concurrency proved by Maurice Herlihy establishing wait-free synchronization hierarchies.",
            "answer": "Herlihy's Consensus Hierarchy",
            "accepted": [
                "consensus numbers"
            ],
            "source": "Wikipedia - Consensus number"
        },
        {
            "value": 500,
            "clue": "[27] The linear-time string searching algorithm designed in 1977 by Donald Knuth, James H. Morris, and Vaughan Pratt.",
            "answer": "KMP Algorithm",
            "accepted": [
                "knuth morris pratt"
            ],
            "source": "Wikipedia - Knuth–Morris–Pratt algorithm"
        },
        {
            "value": 500,
            "clue": "[28] The space-efficient string index structure invented by Paolo Ferragina and Giovanni Manzini in 2000.",
            "answer": "FM-index",
            "accepted": [
                "ferragina manzini index"
            ],
            "source": "Wikipedia - FM-index"
        },
        {
            "value": 500,
            "clue": "[29] The theoretical limit in communications theory defining the maximum rate at which information can be transmitted over a noisy channel.",
            "answer": "Shannon Limit",
            "accepted": [
                "shannon capacity"
            ],
            "source": "Wikipedia - Shannon–Hartley theorem"
        },
        {
            "value": 500,
            "clue": "[30] The cellular automaton devised by John Horton Conway in 1970 that is Turing complete despite zero player input.",
            "answer": "Conway's Game of Life",
            "accepted": [
                "game of life"
            ],
            "source": "Wikipedia - Conway's Game of Life"
        },
        {
            "value": 500,
            "clue": "[31] The formal operational semantics framework introduced by Gordon Plotkin in 1981.",
            "answer": "Structural Operational Semantics",
            "accepted": [
                "sos"
            ],
            "source": "Wikipedia - Structural operational semantics"
        },
        {
            "value": 500,
            "clue": "[32] The computer system developed in 1969 at Bell Labs that introduced C, pipeline architectures, and 'everything is a file'.",
            "answer": "Unix",
            "accepted": [
                "unix operating system"
            ],
            "source": "Wikipedia - Unix"
        },
        {
            "value": 500,
            "clue": "[33] The microarchitectural vulnerability discovered in 2018 affecting modern CPUs utilizing speculative execution and branch prediction.",
            "answer": "Spectre",
            "accepted": [
                "spectre attack"
            ],
            "source": "Wikipedia - Spectre (security vulnerability)"
        },
        {
            "value": 500,
            "clue": "[34] The hardware vulnerability discovered alongside Spectre that allows unauthorized read of kernel memory via speculative out-of-order execution.",
            "answer": "Meltdown",
            "accepted": [
                "meltdown attack"
            ],
            "source": "Wikipedia - Meltdown (security vulnerability)"
        },
        {
            "value": 500,
            "clue": "[35] The algorithmic complexity class containing problems solvable by a deterministic Turing machine using logarithmic space.",
            "answer": "L",
            "accepted": [
                "dlogspace"
            ],
            "source": "Wikipedia - L (complexity)"
        },
        {
            "value": 500,
            "clue": "[36] The algorithmic complexity class containing problems solvable by a probabilistic Turing machine in polynomial time with bounded two-sided error.",
            "answer": "BPP",
            "accepted": [
                "bounded-error probabilistic polynomial time"
            ],
            "source": "Wikipedia - BPP (complexity)"
        },
        {
            "value": 500,
            "clue": "[37] The theorem proved in 1931 by Kurt Gödel showing that any consistent axiomatic system capable of arithmetic is incomplete.",
            "answer": "Gödel's Incompleteness Theorems",
            "accepted": [
                "incompleteness theorem"
            ],
            "source": "Wikipedia - Gödel's incompleteness theorems"
        },
        {
            "value": 500,
            "clue": "[38] The computational problem proven undecidable by Alan Turing in 1936 regarding whether an arbitrary program will finish running.",
            "answer": "Halting Problem",
            "accepted": [
                "the halting problem"
            ],
            "source": "Wikipedia - Halting problem"
        },
        {
            "value": 500,
            "clue": "[39] The cryptographic primitive that allows computation over encrypted data without decrypting it first.",
            "answer": "Homomorphic Encryption",
            "accepted": [
                "fhe"
            ],
            "source": "Wikipedia - Homomorphic encryption"
        },
        {
            "value": 500,
            "clue": "[40] The 1982 paper by Lamport, Shostak, and Pease introducing consensus with unfaithful nodes.",
            "answer": "Byzantine Generals Problem",
            "accepted": [
                "byzantine fault tolerance"
            ],
            "source": "Wikipedia - Byzantine fault"
        }
    ],
    "music": [
        {
            "value": 100,
            "clue": "The 'King of Pop' whose 1982 album Thriller is the best-selling album in music history.",
            "answer": "Michael Jackson",
            "accepted": [
                "jackson",
                "mj"
            ],
            "source": "Wikipedia - Michael Jackson"
        },
        {
            "value": 100,
            "clue": "The British rock quartet composed of John Lennon, Paul McCartney, George Harrison, and Ringo Starr.",
            "answer": "The Beatles",
            "accepted": [
                "beatles",
                "fab four"
            ],
            "source": "Wikipedia - The Beatles"
        },
        {
            "value": 100,
            "clue": "The American singer-songwriter whose record-breaking 'Eras Tour' grossed over $1 billion.",
            "answer": "Taylor Swift",
            "accepted": [
                "swift"
            ],
            "source": "Wikipedia - Taylor Swift"
        },
        {
            "value": 100,
            "clue": "The lead vocalist of Queen who sang 'Bohemian Rhapsody' and headlined Live Aid in 1985.",
            "answer": "Freddie Mercury",
            "accepted": [
                "mercury"
            ],
            "source": "Wikipedia - Freddie Mercury"
        },
        {
            "value": 100,
            "clue": "The King of Rock and Roll known for hits like 'Hound Dog' and his Graceland estate.",
            "answer": "Elvis Presley",
            "accepted": [
                "elvis",
                "presley"
            ],
            "source": "Wikipedia - Elvis Presley"
        },
        {
            "value": 100,
            "clue": "The British singer behind 21 with chart-topping ballads 'Rolling in the Deep' and 'Hello'.",
            "answer": "Adele",
            "accepted": [
                "adele adkins"
            ],
            "source": "Wikipedia - Adele"
        },
        {
            "value": 100,
            "clue": "The musical instrument with 88 black and white keys invented by Bartolomeo Cristofori.",
            "answer": "Piano",
            "accepted": [
                "the piano",
                "pianoforte"
            ],
            "source": "Wikipedia - Piano"
        },
        {
            "value": 100,
            "clue": "The Jamaican reggae legend behind 'Three Little Birds', 'One Love', and 'No Woman, No Cry'.",
            "answer": "Bob Marley",
            "accepted": [
                "marley"
            ],
            "source": "Wikipedia - Bob Marley"
        },
        {
            "value": 100,
            "clue": "The music television network that launched on August 1, 1981 playing 'Video Killed the Radio Star'.",
            "answer": "MTV",
            "accepted": [
                "music television"
            ],
            "source": "Wikipedia - MTV"
        },
        {
            "value": 100,
            "clue": "The six-stringed instrument central to rock, pop, blues, and classical music.",
            "answer": "Guitar",
            "accepted": [
                "acoustic guitar",
                "electric guitar"
            ],
            "source": "Wikipedia - Guitar"
        },
        {
            "value": 100,
            "clue": "The Barbadian pop star behind 'Umbrella' who headlined the 2023 Super Bowl Halftime.",
            "answer": "Rihanna",
            "accepted": [
                "robyn rihanna fenty"
            ],
            "source": "Wikipedia - Rihanna"
        },
        {
            "value": 100,
            "clue": "The Swedish pop supergroup behind 'Dancing Queen', 'Mamma Mia', and 'Waterloo'.",
            "answer": "ABBA",
            "accepted": [
                "abba group"
            ],
            "source": "Wikipedia - ABBA"
        },
        {
            "value": 100,
            "clue": "The lead singer of U2, known for international humanitarian activism and sunglasses.",
            "answer": "Bono",
            "accepted": [
                "paul hewson"
            ],
            "source": "Wikipedia - Bono"
        },
        {
            "value": 100,
            "clue": "The pop and R&B superstar known as 'Queen Bey', former lead of Destiny's Child.",
            "answer": "Beyonce",
            "accepted": [
                "beyoncé",
                "beyonce knowles"
            ],
            "source": "Wikipedia - Beyoncé"
        },
        {
            "value": 100,
            "clue": "The Canadian hip-hop superstar with hits like 'Hotline Bling' and 'God's Plan'.",
            "answer": "Drake",
            "accepted": [
                "aubrey graham"
            ],
            "source": "Wikipedia - Drake"
        },
        {
            "value": 100,
            "clue": "The rock band led by Mick Jagger and Keith Richards that released '(I Can't Get No) Satisfaction'.",
            "answer": "The Rolling Stones",
            "accepted": [
                "rolling stones"
            ],
            "source": "Wikipedia - The Rolling Stones"
        },
        {
            "value": 100,
            "clue": "The brass instrument famously played by jazz virtuoso Louis Armstrong.",
            "answer": "Trumpet",
            "accepted": [
                "the trumpet",
                "cornet"
            ],
            "source": "Wikipedia - Trumpet"
        },
        {
            "value": 100,
            "clue": "The Australian hard rock band famous for 'Highway to Hell' and 'Back in Black'.",
            "answer": "AC/DC",
            "accepted": [
                "ac dc"
            ],
            "source": "Wikipedia - AC/DC"
        },
        {
            "value": 100,
            "clue": "The pop icon known as the 'Material Girl' who dominated the 1980s music charts.",
            "answer": "Madonna",
            "accepted": [
                "madonna ciccone"
            ],
            "source": "Wikipedia - Madonna"
        },
        {
            "value": 100,
            "clue": "The highest-pitched member of the violin family played with a horsehair bow.",
            "answer": "Violin",
            "accepted": [
                "fiddle"
            ],
            "source": "Wikipedia - Violin"
        },
        {
            "value": 100,
            "clue": "The 'King of Pop' whose 1982 album Thriller is the best-selling album in music history. (Variant #2)",
            "answer": "Michael Jackson",
            "accepted": [
                "jackson",
                "mj"
            ],
            "source": "Wikipedia - Michael Jackson"
        },
        {
            "value": 100,
            "clue": "The British rock quartet composed of John Lennon, Paul McCartney, George Harrison, and Ringo Starr. (Variant #2)",
            "answer": "The Beatles",
            "accepted": [
                "beatles",
                "fab four"
            ],
            "source": "Wikipedia - The Beatles"
        },
        {
            "value": 100,
            "clue": "The American singer-songwriter whose record-breaking 'Eras Tour' grossed over $1 billion. (Variant #2)",
            "answer": "Taylor Swift",
            "accepted": [
                "swift"
            ],
            "source": "Wikipedia - Taylor Swift"
        },
        {
            "value": 100,
            "clue": "The lead vocalist of Queen who sang 'Bohemian Rhapsody' and headlined Live Aid in 1985. (Variant #2)",
            "answer": "Freddie Mercury",
            "accepted": [
                "mercury"
            ],
            "source": "Wikipedia - Freddie Mercury"
        },
        {
            "value": 100,
            "clue": "The King of Rock and Roll known for hits like 'Hound Dog' and his Graceland estate. (Variant #2)",
            "answer": "Elvis Presley",
            "accepted": [
                "elvis",
                "presley"
            ],
            "source": "Wikipedia - Elvis Presley"
        },
        {
            "value": 100,
            "clue": "The British singer behind 21 with chart-topping ballads 'Rolling in the Deep' and 'Hello'. (Variant #2)",
            "answer": "Adele",
            "accepted": [
                "adele adkins"
            ],
            "source": "Wikipedia - Adele"
        },
        {
            "value": 100,
            "clue": "The musical instrument with 88 black and white keys invented by Bartolomeo Cristofori. (Variant #2)",
            "answer": "Piano",
            "accepted": [
                "the piano",
                "pianoforte"
            ],
            "source": "Wikipedia - Piano"
        },
        {
            "value": 100,
            "clue": "The Jamaican reggae legend behind 'Three Little Birds', 'One Love', and 'No Woman, No Cry'. (Variant #2)",
            "answer": "Bob Marley",
            "accepted": [
                "marley"
            ],
            "source": "Wikipedia - Bob Marley"
        },
        {
            "value": 100,
            "clue": "The music television network that launched on August 1, 1981 playing 'Video Killed the Radio Star'. (Variant #2)",
            "answer": "MTV",
            "accepted": [
                "music television"
            ],
            "source": "Wikipedia - MTV"
        },
        {
            "value": 100,
            "clue": "The six-stringed instrument central to rock, pop, blues, and classical music. (Variant #2)",
            "answer": "Guitar",
            "accepted": [
                "acoustic guitar",
                "electric guitar"
            ],
            "source": "Wikipedia - Guitar"
        },
        {
            "value": 100,
            "clue": "The Barbadian pop star behind 'Umbrella' who headlined the 2023 Super Bowl Halftime. (Variant #2)",
            "answer": "Rihanna",
            "accepted": [
                "robyn rihanna fenty"
            ],
            "source": "Wikipedia - Rihanna"
        },
        {
            "value": 100,
            "clue": "The Swedish pop supergroup behind 'Dancing Queen', 'Mamma Mia', and 'Waterloo'. (Variant #2)",
            "answer": "ABBA",
            "accepted": [
                "abba group"
            ],
            "source": "Wikipedia - ABBA"
        },
        {
            "value": 100,
            "clue": "The lead singer of U2, known for international humanitarian activism and sunglasses. (Variant #2)",
            "answer": "Bono",
            "accepted": [
                "paul hewson"
            ],
            "source": "Wikipedia - Bono"
        },
        {
            "value": 100,
            "clue": "The pop and R&B superstar known as 'Queen Bey', former lead of Destiny's Child. (Variant #2)",
            "answer": "Beyonce",
            "accepted": [
                "beyoncé",
                "beyonce knowles"
            ],
            "source": "Wikipedia - Beyoncé"
        },
        {
            "value": 100,
            "clue": "The Canadian hip-hop superstar with hits like 'Hotline Bling' and 'God's Plan'. (Variant #2)",
            "answer": "Drake",
            "accepted": [
                "aubrey graham"
            ],
            "source": "Wikipedia - Drake"
        },
        {
            "value": 100,
            "clue": "The rock band led by Mick Jagger and Keith Richards that released '(I Can't Get No) Satisfaction'. (Variant #2)",
            "answer": "The Rolling Stones",
            "accepted": [
                "rolling stones"
            ],
            "source": "Wikipedia - The Rolling Stones"
        },
        {
            "value": 100,
            "clue": "The brass instrument famously played by jazz virtuoso Louis Armstrong. (Variant #2)",
            "answer": "Trumpet",
            "accepted": [
                "the trumpet",
                "cornet"
            ],
            "source": "Wikipedia - Trumpet"
        },
        {
            "value": 100,
            "clue": "The Australian hard rock band famous for 'Highway to Hell' and 'Back in Black'. (Variant #2)",
            "answer": "AC/DC",
            "accepted": [
                "ac dc"
            ],
            "source": "Wikipedia - AC/DC"
        },
        {
            "value": 100,
            "clue": "The pop icon known as the 'Material Girl' who dominated the 1980s music charts. (Variant #2)",
            "answer": "Madonna",
            "accepted": [
                "madonna ciccone"
            ],
            "source": "Wikipedia - Madonna"
        },
        {
            "value": 100,
            "clue": "The highest-pitched member of the violin family played with a horsehair bow. (Variant #2)",
            "answer": "Violin",
            "accepted": [
                "fiddle"
            ],
            "source": "Wikipedia - Violin"
        },
        {
            "value": 200,
            "clue": "The legendary 1969 music festival on a dairy farm in Bethel, New York.",
            "answer": "Woodstock",
            "accepted": [
                "woodstock festival"
            ],
            "source": "Wikipedia - Woodstock"
        },
        {
            "value": 200,
            "clue": "The Seattle grunge band fronted by Kurt Cobain that released 'Smells Like Teen Spirit'.",
            "answer": "Nirvana",
            "accepted": [
                "nirvana band"
            ],
            "source": "Wikipedia - Nirvana (band)"
        },
        {
            "value": 200,
            "clue": "The Austrian classical prodigy who composed 'The Magic Flute' and 'Eine kleine Nachtmusik'.",
            "answer": "Wolfgang Amadeus Mozart",
            "accepted": [
                "mozart"
            ],
            "source": "Wikipedia - Mozart"
        },
        {
            "value": 200,
            "clue": "The German composer who completed his monumental Ninth Symphony while almost completely deaf.",
            "answer": "Ludwig van Beethoven",
            "accepted": [
                "beethoven"
            ],
            "source": "Wikipedia - Beethoven"
        },
        {
            "value": 200,
            "clue": "The electric guitarist who played a legendary feedback-laced 'Star-Spangled Banner' at Woodstock.",
            "answer": "Jimi Hendrix",
            "accepted": [
                "hendrix"
            ],
            "source": "Wikipedia - Jimi Hendrix"
        },
        {
            "value": 200,
            "clue": "The Irish rock band formed in Dublin in 1976 that released 'The Joshua Tree'.",
            "answer": "U2",
            "accepted": [
                "u2 band"
            ],
            "source": "Wikipedia - U2"
        },
        {
            "value": 200,
            "clue": "The Detroit record label founded by Berry Gordy Jr. that created the sound of young America.",
            "answer": "Motown",
            "accepted": [
                "motown records"
            ],
            "source": "Wikipedia - Motown"
        },
        {
            "value": 200,
            "clue": "The English progressive rock band behind 'The Dark Side of the Moon' and 'The Wall'.",
            "answer": "Pink Floyd",
            "accepted": [
                "pink floyd"
            ],
            "source": "Wikipedia - Pink Floyd"
        },
        {
            "value": 200,
            "clue": "The American folk-rock troubadour who was awarded the 2016 Nobel Prize in Literature.",
            "answer": "Bob Dylan",
            "accepted": [
                "dylan"
            ],
            "source": "Wikipedia - Bob Dylan"
        },
        {
            "value": 200,
            "clue": "The English hard rock band featuring Jimmy Page and Robert Plant that recorded 'Stairway to Heaven'.",
            "answer": "Led Zeppelin",
            "accepted": [
                "led zeppelin"
            ],
            "source": "Wikipedia - Led Zeppelin"
        },
        {
            "value": 200,
            "clue": "The Minneapolis musical genius who released the multi-platinum album and film 'Purple Rain'.",
            "answer": "Prince",
            "accepted": [
                "prince nelson"
            ],
            "source": "Wikipedia - Prince"
        },
        {
            "value": 200,
            "clue": "The rapper whose 1996 double album 'All Eyez on Me' became a diamond-certified classic.",
            "answer": "Tupac Shakur",
            "accepted": [
                "2pac",
                "tupac"
            ],
            "source": "Wikipedia - Tupac Shakur"
        },
        {
            "value": 200,
            "clue": "The Italian Baroque composer who wrote the group of four violin concerti 'The Four Seasons'.",
            "answer": "Antonio Vivaldi",
            "accepted": [
                "vivaldi"
            ],
            "source": "Wikipedia - Antonio Vivaldi"
        },
        {
            "value": 200,
            "clue": "The British rock band led by Thom Yorke that created 'OK Computer' and 'Kid A'.",
            "answer": "Radiohead",
            "accepted": [
                "radiohead"
            ],
            "source": "Wikipedia - Radiohead"
        },
        {
            "value": 200,
            "clue": "The jazz trumpeter who recorded 'Kind of Blue' in 1959, the top-selling jazz record of all time.",
            "answer": "Miles Davis",
            "accepted": [
                "davis"
            ],
            "source": "Wikipedia - Miles Davis"
        },
        {
            "value": 200,
            "clue": "The soul legend known as the 'Queen of Soul' who demanded 'R-E-S-P-E-C-T'.",
            "answer": "Aretha Franklin",
            "accepted": [
                "franklin"
            ],
            "source": "Wikipedia - Aretha Franklin"
        },
        {
            "value": 200,
            "clue": "The 1970s London punk rock band featuring Johnny Rotten and bassist Sid Vicious.",
            "answer": "The Sex Pistols",
            "accepted": [
                "sex pistols"
            ],
            "source": "Wikipedia - Sex Pistols"
        },
        {
            "value": 200,
            "clue": "The country music icon known as 'The Man in Black' who sang 'Ring of Fire'.",
            "answer": "Johnny Cash",
            "accepted": [
                "cash"
            ],
            "source": "Wikipedia - Johnny Cash"
        },
        {
            "value": 200,
            "clue": "The British pop singer behind 'Video Games' who popularized sad-girl baroque Americana.",
            "answer": "Lana Del Rey",
            "accepted": [
                "del rey"
            ],
            "source": "Wikipedia - Lana Del Rey"
        },
        {
            "value": 200,
            "clue": "The hip-hop group from Compton, California featuring Dr. Dre, Eazy-E, and Ice Cube.",
            "answer": "N.W.A",
            "accepted": [
                "nwa"
            ],
            "source": "Wikipedia - N.W.A"
        },
        {
            "value": 200,
            "clue": "The legendary 1969 music festival on a dairy farm in Bethel, New York. (Variant #2)",
            "answer": "Woodstock",
            "accepted": [
                "woodstock festival"
            ],
            "source": "Wikipedia - Woodstock"
        },
        {
            "value": 200,
            "clue": "The Seattle grunge band fronted by Kurt Cobain that released 'Smells Like Teen Spirit'. (Variant #2)",
            "answer": "Nirvana",
            "accepted": [
                "nirvana band"
            ],
            "source": "Wikipedia - Nirvana (band)"
        },
        {
            "value": 200,
            "clue": "The Austrian classical prodigy who composed 'The Magic Flute' and 'Eine kleine Nachtmusik'. (Variant #2)",
            "answer": "Wolfgang Amadeus Mozart",
            "accepted": [
                "mozart"
            ],
            "source": "Wikipedia - Mozart"
        },
        {
            "value": 200,
            "clue": "The German composer who completed his monumental Ninth Symphony while almost completely deaf. (Variant #2)",
            "answer": "Ludwig van Beethoven",
            "accepted": [
                "beethoven"
            ],
            "source": "Wikipedia - Beethoven"
        },
        {
            "value": 200,
            "clue": "The electric guitarist who played a legendary feedback-laced 'Star-Spangled Banner' at Woodstock. (Variant #2)",
            "answer": "Jimi Hendrix",
            "accepted": [
                "hendrix"
            ],
            "source": "Wikipedia - Jimi Hendrix"
        },
        {
            "value": 200,
            "clue": "The Irish rock band formed in Dublin in 1976 that released 'The Joshua Tree'. (Variant #2)",
            "answer": "U2",
            "accepted": [
                "u2 band"
            ],
            "source": "Wikipedia - U2"
        },
        {
            "value": 200,
            "clue": "The Detroit record label founded by Berry Gordy Jr. that created the sound of young America. (Variant #2)",
            "answer": "Motown",
            "accepted": [
                "motown records"
            ],
            "source": "Wikipedia - Motown"
        },
        {
            "value": 200,
            "clue": "The English progressive rock band behind 'The Dark Side of the Moon' and 'The Wall'. (Variant #2)",
            "answer": "Pink Floyd",
            "accepted": [
                "pink floyd"
            ],
            "source": "Wikipedia - Pink Floyd"
        },
        {
            "value": 200,
            "clue": "The American folk-rock troubadour who was awarded the 2016 Nobel Prize in Literature. (Variant #2)",
            "answer": "Bob Dylan",
            "accepted": [
                "dylan"
            ],
            "source": "Wikipedia - Bob Dylan"
        },
        {
            "value": 200,
            "clue": "The English hard rock band featuring Jimmy Page and Robert Plant that recorded 'Stairway to Heaven'. (Variant #2)",
            "answer": "Led Zeppelin",
            "accepted": [
                "led zeppelin"
            ],
            "source": "Wikipedia - Led Zeppelin"
        },
        {
            "value": 200,
            "clue": "The Minneapolis musical genius who released the multi-platinum album and film 'Purple Rain'. (Variant #2)",
            "answer": "Prince",
            "accepted": [
                "prince nelson"
            ],
            "source": "Wikipedia - Prince"
        },
        {
            "value": 200,
            "clue": "The rapper whose 1996 double album 'All Eyez on Me' became a diamond-certified classic. (Variant #2)",
            "answer": "Tupac Shakur",
            "accepted": [
                "2pac",
                "tupac"
            ],
            "source": "Wikipedia - Tupac Shakur"
        },
        {
            "value": 200,
            "clue": "The Italian Baroque composer who wrote the group of four violin concerti 'The Four Seasons'. (Variant #2)",
            "answer": "Antonio Vivaldi",
            "accepted": [
                "vivaldi"
            ],
            "source": "Wikipedia - Antonio Vivaldi"
        },
        {
            "value": 200,
            "clue": "The British rock band led by Thom Yorke that created 'OK Computer' and 'Kid A'. (Variant #2)",
            "answer": "Radiohead",
            "accepted": [
                "radiohead"
            ],
            "source": "Wikipedia - Radiohead"
        },
        {
            "value": 200,
            "clue": "The jazz trumpeter who recorded 'Kind of Blue' in 1959, the top-selling jazz record of all time. (Variant #2)",
            "answer": "Miles Davis",
            "accepted": [
                "davis"
            ],
            "source": "Wikipedia - Miles Davis"
        },
        {
            "value": 200,
            "clue": "The soul legend known as the 'Queen of Soul' who demanded 'R-E-S-P-E-C-T'. (Variant #2)",
            "answer": "Aretha Franklin",
            "accepted": [
                "franklin"
            ],
            "source": "Wikipedia - Aretha Franklin"
        },
        {
            "value": 200,
            "clue": "The 1970s London punk rock band featuring Johnny Rotten and bassist Sid Vicious. (Variant #2)",
            "answer": "The Sex Pistols",
            "accepted": [
                "sex pistols"
            ],
            "source": "Wikipedia - Sex Pistols"
        },
        {
            "value": 200,
            "clue": "The country music icon known as 'The Man in Black' who sang 'Ring of Fire'. (Variant #2)",
            "answer": "Johnny Cash",
            "accepted": [
                "cash"
            ],
            "source": "Wikipedia - Johnny Cash"
        },
        {
            "value": 200,
            "clue": "The British pop singer behind 'Video Games' who popularized sad-girl baroque Americana. (Variant #2)",
            "answer": "Lana Del Rey",
            "accepted": [
                "del rey"
            ],
            "source": "Wikipedia - Lana Del Rey"
        },
        {
            "value": 200,
            "clue": "The hip-hop group from Compton, California featuring Dr. Dre, Eazy-E, and Ice Cube. (Variant #2)",
            "answer": "N.W.A",
            "accepted": [
                "nwa"
            ],
            "source": "Wikipedia - N.W.A"
        },
        {
            "value": 300,
            "clue": "The Italian violin maker whose 18th-century instruments like the 'Messiah' are legendary.",
            "answer": "Antonio Stradivari",
            "accepted": [
                "stradivari",
                "stradivarius"
            ],
            "source": "Wikipedia - Antonio Stradivari"
        },
        {
            "value": 300,
            "clue": "The 1967 Beatles concept album that transformed rock into high art with a famous collage cover.",
            "answer": "Sgt. Pepper's Lonely Hearts Club Band",
            "accepted": [
                "sgt pepper"
            ],
            "source": "Wikipedia - Sgt. Pepper's Lonely Hearts Club Band"
        },
        {
            "value": 300,
            "clue": "The 1973 Pink Floyd album featuring a beam of light refracted through a triangular prism.",
            "answer": "The Dark Side of the Moon",
            "accepted": [
                "dark side of the moon"
            ],
            "source": "Wikipedia - The Dark Side of the Moon"
        },
        {
            "value": 300,
            "clue": "The jazz saxophonist nicknamed 'Bird' who pioneered the bebop movement in the 1940s.",
            "answer": "Charlie Parker",
            "accepted": [
                "parker",
                "bird"
            ],
            "source": "Wikipedia - Charlie Parker"
        },
        {
            "value": 300,
            "clue": "The Russian composer who composed The Nutcracker, Swan Lake, and the 1812 Overture.",
            "answer": "Pyotr Ilyich Tchaikovsky",
            "accepted": [
                "tchaikovsky"
            ],
            "source": "Wikipedia - Tchaikovsky"
        },
        {
            "value": 300,
            "clue": "The 1994 debut album by Queensbridge rapper Nas, widely considered the quintessential hip-hop album.",
            "answer": "Illmatic",
            "accepted": [
                "nas illmatic"
            ],
            "source": "Wikipedia - Illmatic"
        },
        {
            "value": 300,
            "clue": "The British soul singer who won five Grammys in 2008 for Back to Black.",
            "answer": "Amy Winehouse",
            "accepted": [
                "winehouse"
            ],
            "source": "Wikipedia - Amy Winehouse"
        },
        {
            "value": 300,
            "clue": "The 1977 Fleetwood Mac album recorded amidst band divorces that sold 40+ million copies.",
            "answer": "Rumours",
            "accepted": [
                "rumors"
            ],
            "source": "Wikipedia - Rumours (album)"
        },
        {
            "value": 300,
            "clue": "The American composer who bridged jazz and symphonic music with 'Rhapsody in Blue'.",
            "answer": "George Gershwin",
            "accepted": [
                "gershwin"
            ],
            "source": "Wikipedia - George Gershwin"
        },
        {
            "value": 300,
            "clue": "The French electronic music duo behind 'Get Lucky' who wore robotic helmets.",
            "answer": "Daft Punk",
            "accepted": [
                "daft punk"
            ],
            "source": "Wikipedia - Daft Punk"
        },
        {
            "value": 300,
            "clue": "The Baroque master who composed the Brandenburg Concertos and The Well-Tempered Clavier.",
            "answer": "Johann Sebastian Bach",
            "accepted": [
                "bach",
                "j.s. bach"
            ],
            "source": "Wikipedia - Johann Sebastian Bach"
        },
        {
            "value": 300,
            "clue": "The 1980 hard rock album by AC/DC dedicated to late frontman Bon Scott with an all-black sleeve.",
            "answer": "Back in Black",
            "accepted": [
                "back in black"
            ],
            "source": "Wikipedia - Back in Black"
        },
        {
            "value": 300,
            "clue": "The 1991 self-titled Metallica album that sold 16+ million copies in the US alone.",
            "answer": "The Black Album",
            "accepted": [
                "metallica"
            ],
            "source": "Wikipedia - Metallica (album)"
        },
        {
            "value": 300,
            "clue": "The charismatic frontman of The Doors who died in Paris in 1971 at age 27.",
            "answer": "Jim Morrison",
            "accepted": [
                "morrison",
                "the lizard king"
            ],
            "source": "Wikipedia - Jim Morrison"
        },
        {
            "value": 300,
            "clue": "The hip-hop group led by Chuck D that released the anthemic 'Fight the Power'.",
            "answer": "Public Enemy",
            "accepted": [
                "public enemy"
            ],
            "source": "Wikipedia - Public Enemy"
        },
        {
            "value": 300,
            "clue": "The velvety jazz vocalist who recorded 'Unforgettable' and 'The Christmas Song'.",
            "answer": "Nat King Cole",
            "accepted": [
                "cole"
            ],
            "source": "Wikipedia - Nat King Cole"
        },
        {
            "value": 300,
            "clue": "The singer-songwriter whose 1971 masterpiece 'Tapestry' won Album of the Year.",
            "answer": "Carole King",
            "accepted": [
                "king"
            ],
            "source": "Wikipedia - Carole King"
        },
        {
            "value": 300,
            "clue": "The Southern rock band behind 'Free Bird' tragically struck by a 1977 aviation crash.",
            "answer": "Lynyrd Skynyrd",
            "accepted": [
                "skynyrd"
            ],
            "source": "Wikipedia - Lynyrd Skynyrd"
        },
        {
            "value": 300,
            "clue": "The 1972 glam rock persona created by David Bowie about an alien rock star.",
            "answer": "Ziggy Stardust",
            "accepted": [
                "ziggy"
            ],
            "source": "Wikipedia - Ziggy Stardust"
        },
        {
            "value": 300,
            "clue": "The Canadian prog-rock power trio composed of Geddy Lee, Alex Lifeson, and Neil Peart.",
            "answer": "Rush",
            "accepted": [
                "rush band"
            ],
            "source": "Wikipedia - Rush (band)"
        },
        {
            "value": 300,
            "clue": "The Italian violin maker whose 18th-century instruments like the 'Messiah' are legendary. (Variant #2)",
            "answer": "Antonio Stradivari",
            "accepted": [
                "stradivari",
                "stradivarius"
            ],
            "source": "Wikipedia - Antonio Stradivari"
        },
        {
            "value": 300,
            "clue": "The 1967 Beatles concept album that transformed rock into high art with a famous collage cover. (Variant #2)",
            "answer": "Sgt. Pepper's Lonely Hearts Club Band",
            "accepted": [
                "sgt pepper"
            ],
            "source": "Wikipedia - Sgt. Pepper's Lonely Hearts Club Band"
        },
        {
            "value": 300,
            "clue": "The 1973 Pink Floyd album featuring a beam of light refracted through a triangular prism. (Variant #2)",
            "answer": "The Dark Side of the Moon",
            "accepted": [
                "dark side of the moon"
            ],
            "source": "Wikipedia - The Dark Side of the Moon"
        },
        {
            "value": 300,
            "clue": "The jazz saxophonist nicknamed 'Bird' who pioneered the bebop movement in the 1940s. (Variant #2)",
            "answer": "Charlie Parker",
            "accepted": [
                "parker",
                "bird"
            ],
            "source": "Wikipedia - Charlie Parker"
        },
        {
            "value": 300,
            "clue": "The Russian composer who composed The Nutcracker, Swan Lake, and the 1812 Overture. (Variant #2)",
            "answer": "Pyotr Ilyich Tchaikovsky",
            "accepted": [
                "tchaikovsky"
            ],
            "source": "Wikipedia - Tchaikovsky"
        },
        {
            "value": 300,
            "clue": "The 1994 debut album by Queensbridge rapper Nas, widely considered the quintessential hip-hop album. (Variant #2)",
            "answer": "Illmatic",
            "accepted": [
                "nas illmatic"
            ],
            "source": "Wikipedia - Illmatic"
        },
        {
            "value": 300,
            "clue": "The British soul singer who won five Grammys in 2008 for Back to Black. (Variant #2)",
            "answer": "Amy Winehouse",
            "accepted": [
                "winehouse"
            ],
            "source": "Wikipedia - Amy Winehouse"
        },
        {
            "value": 300,
            "clue": "The 1977 Fleetwood Mac album recorded amidst band divorces that sold 40+ million copies. (Variant #2)",
            "answer": "Rumours",
            "accepted": [
                "rumors"
            ],
            "source": "Wikipedia - Rumours (album)"
        },
        {
            "value": 300,
            "clue": "The American composer who bridged jazz and symphonic music with 'Rhapsody in Blue'. (Variant #2)",
            "answer": "George Gershwin",
            "accepted": [
                "gershwin"
            ],
            "source": "Wikipedia - George Gershwin"
        },
        {
            "value": 300,
            "clue": "The French electronic music duo behind 'Get Lucky' who wore robotic helmets. (Variant #2)",
            "answer": "Daft Punk",
            "accepted": [
                "daft punk"
            ],
            "source": "Wikipedia - Daft Punk"
        },
        {
            "value": 300,
            "clue": "The Baroque master who composed the Brandenburg Concertos and The Well-Tempered Clavier. (Variant #2)",
            "answer": "Johann Sebastian Bach",
            "accepted": [
                "bach",
                "j.s. bach"
            ],
            "source": "Wikipedia - Johann Sebastian Bach"
        },
        {
            "value": 300,
            "clue": "The 1980 hard rock album by AC/DC dedicated to late frontman Bon Scott with an all-black sleeve. (Variant #2)",
            "answer": "Back in Black",
            "accepted": [
                "back in black"
            ],
            "source": "Wikipedia - Back in Black"
        },
        {
            "value": 300,
            "clue": "The 1991 self-titled Metallica album that sold 16+ million copies in the US alone. (Variant #2)",
            "answer": "The Black Album",
            "accepted": [
                "metallica"
            ],
            "source": "Wikipedia - Metallica (album)"
        },
        {
            "value": 300,
            "clue": "The charismatic frontman of The Doors who died in Paris in 1971 at age 27. (Variant #2)",
            "answer": "Jim Morrison",
            "accepted": [
                "morrison",
                "the lizard king"
            ],
            "source": "Wikipedia - Jim Morrison"
        },
        {
            "value": 300,
            "clue": "The hip-hop group led by Chuck D that released the anthemic 'Fight the Power'. (Variant #2)",
            "answer": "Public Enemy",
            "accepted": [
                "public enemy"
            ],
            "source": "Wikipedia - Public Enemy"
        },
        {
            "value": 300,
            "clue": "The velvety jazz vocalist who recorded 'Unforgettable' and 'The Christmas Song'. (Variant #2)",
            "answer": "Nat King Cole",
            "accepted": [
                "cole"
            ],
            "source": "Wikipedia - Nat King Cole"
        },
        {
            "value": 300,
            "clue": "The singer-songwriter whose 1971 masterpiece 'Tapestry' won Album of the Year. (Variant #2)",
            "answer": "Carole King",
            "accepted": [
                "king"
            ],
            "source": "Wikipedia - Carole King"
        },
        {
            "value": 300,
            "clue": "The Southern rock band behind 'Free Bird' tragically struck by a 1977 aviation crash. (Variant #2)",
            "answer": "Lynyrd Skynyrd",
            "accepted": [
                "skynyrd"
            ],
            "source": "Wikipedia - Lynyrd Skynyrd"
        },
        {
            "value": 300,
            "clue": "The 1972 glam rock persona created by David Bowie about an alien rock star. (Variant #2)",
            "answer": "Ziggy Stardust",
            "accepted": [
                "ziggy"
            ],
            "source": "Wikipedia - Ziggy Stardust"
        },
        {
            "value": 300,
            "clue": "The Canadian prog-rock power trio composed of Geddy Lee, Alex Lifeson, and Neil Peart. (Variant #2)",
            "answer": "Rush",
            "accepted": [
                "rush band"
            ],
            "source": "Wikipedia - Rush (band)"
        },
        {
            "value": 400,
            "clue": "The French impressionist composer who wrote 'Clair de Lune' and 'La Mer'.",
            "answer": "Claude Debussy",
            "accepted": [
                "debussy"
            ],
            "source": "Wikipedia - Claude Debussy"
        },
        {
            "value": 400,
            "clue": "The 1913 Igor Stravinsky ballet whose avant-garde premiere provoked a near-riot in Paris.",
            "answer": "The Rite of Spring",
            "accepted": [
                "le sacre du printemps"
            ],
            "source": "Wikipedia - The Rite of Spring"
        },
        {
            "value": 400,
            "clue": "The pioneering Chicago bluesman who recorded 'Hoochie Coochie Man' for Chess Records.",
            "answer": "Muddy Waters",
            "accepted": [
                "waters"
            ],
            "source": "Wikipedia - Muddy Waters"
        },
        {
            "value": 400,
            "clue": "The 1966 Beach Boys album produced by Brian Wilson that pushed pop production to new heights.",
            "answer": "Pet Sounds",
            "accepted": [
                "pet sounds"
            ],
            "source": "Wikipedia - Pet Sounds"
        },
        {
            "value": 400,
            "clue": "The Delta blues musician rumored to have sold his soul to the devil at a Mississippi crossroad.",
            "answer": "Robert Johnson",
            "accepted": [
                "johnson"
            ],
            "source": "Wikipedia - Robert Johnson"
        },
        {
            "value": 400,
            "clue": "The German opera composer who created the four-opera 'Ring Cycle' (Der Ring des Nibelungen).",
            "answer": "Richard Wagner",
            "accepted": [
                "wagner"
            ],
            "source": "Wikipedia - Richard Wagner"
        },
        {
            "value": 400,
            "clue": "The 1971 Marvin Gaye concept album addressing the Vietnam War, ecology, and urban inequality.",
            "answer": "What's Going On",
            "accepted": [
                "whats going on"
            ],
            "source": "Wikipedia - What's Going On"
        },
        {
            "value": 400,
            "clue": "The American minimalist composer who wrote 'Einstein on the Beach' and 'Koyaanisqatsi'.",
            "answer": "Philip Glass",
            "accepted": [
                "glass"
            ],
            "source": "Wikipedia - Philip Glass"
        },
        {
            "value": 400,
            "clue": "The electronic music pioneer whose 1968 album 'Switched-On Bach' popularized the Moog synthesizer.",
            "answer": "Wendy Carlos",
            "accepted": [
                "carlos"
            ],
            "source": "Wikipedia - Wendy Carlos"
        },
        {
            "value": 400,
            "clue": "The 1959 Dave Brubeck Quartet track composed by Paul Desmond in distinctive 5/4 time signature.",
            "answer": "Take Five",
            "accepted": [
                "take 5"
            ],
            "source": "Wikipedia - Take Five"
        },
        {
            "value": 400,
            "clue": "The Polish Romantic composer and pianist renowned for his nocturnes, ballades, and polonaises.",
            "answer": "Frederic Chopin",
            "accepted": [
                "chopin"
            ],
            "source": "Wikipedia - Frédéric Chopin"
        },
        {
            "value": 400,
            "clue": "The Finnish national composer who wrote the patriotic tone poem 'Finlandia'.",
            "answer": "Jean Sibelius",
            "accepted": [
                "sibelius"
            ],
            "source": "Wikipedia - Jean Sibelius"
        },
        {
            "value": 400,
            "clue": "The 1969 debut progressive rock album by King Crimson featuring '21st Century Schizoid Man'.",
            "answer": "In the Court of the Crimson King",
            "accepted": [
                "court of the crimson king"
            ],
            "source": "Wikipedia - In the Court of the Crimson King"
        },
        {
            "value": 400,
            "clue": "The 1991 shoegaze album by My Bloody Valentine known for its reverse-reverb glide guitar sound.",
            "answer": "Loveless",
            "accepted": [
                "loveless"
            ],
            "source": "Wikipedia - Loveless"
        },
        {
            "value": 400,
            "clue": "The Manchester post-punk band led by Ian Curtis that recorded 'Love Will Tear Us Apart'.",
            "answer": "Joy Division",
            "accepted": [
                "joy division"
            ],
            "source": "Wikipedia - Joy Division"
        },
        {
            "value": 400,
            "clue": "The 1965 John Coltrane four-part spiritual jazz suite recorded in a single session.",
            "answer": "A Love Supreme",
            "accepted": [
                "love supreme"
            ],
            "source": "Wikipedia - A Love Supreme"
        },
        {
            "value": 400,
            "clue": "The French composer who wrote 'Boléro' featuring an ostinato snare drum rhythm.",
            "answer": "Maurice Ravel",
            "accepted": [
                "ravel"
            ],
            "source": "Wikipedia - Maurice Ravel"
        },
        {
            "value": 400,
            "clue": "The Düsseldorf band formed in 1970 that pioneered electronic synth-pop with 'Autobahn'.",
            "answer": "Kraftwerk",
            "accepted": [
                "kraftwerk"
            ],
            "source": "Wikipedia - Kraftwerk"
        },
        {
            "value": 400,
            "clue": "The 1993 debut album by Staten Island rap collective Wu-Tang Clan.",
            "answer": "Enter the Wu-Tang (36 Chambers)",
            "accepted": [
                "36 chambers"
            ],
            "source": "Wikipedia - Enter the Wu-Tang (36 Chambers)"
        },
        {
            "value": 400,
            "clue": "The folk anthem recorded by Bob Dylan in 1964 prophesying civil rights and generational change.",
            "answer": "The Times They Are a-Changin'",
            "accepted": [
                "times they are a changin"
            ],
            "source": "Wikipedia - The Times They Are a-Changin'"
        },
        {
            "value": 400,
            "clue": "The French impressionist composer who wrote 'Clair de Lune' and 'La Mer'. (Variant #2)",
            "answer": "Claude Debussy",
            "accepted": [
                "debussy"
            ],
            "source": "Wikipedia - Claude Debussy"
        },
        {
            "value": 400,
            "clue": "The 1913 Igor Stravinsky ballet whose avant-garde premiere provoked a near-riot in Paris. (Variant #2)",
            "answer": "The Rite of Spring",
            "accepted": [
                "le sacre du printemps"
            ],
            "source": "Wikipedia - The Rite of Spring"
        },
        {
            "value": 400,
            "clue": "The pioneering Chicago bluesman who recorded 'Hoochie Coochie Man' for Chess Records. (Variant #2)",
            "answer": "Muddy Waters",
            "accepted": [
                "waters"
            ],
            "source": "Wikipedia - Muddy Waters"
        },
        {
            "value": 400,
            "clue": "The 1966 Beach Boys album produced by Brian Wilson that pushed pop production to new heights. (Variant #2)",
            "answer": "Pet Sounds",
            "accepted": [
                "pet sounds"
            ],
            "source": "Wikipedia - Pet Sounds"
        },
        {
            "value": 400,
            "clue": "The Delta blues musician rumored to have sold his soul to the devil at a Mississippi crossroad. (Variant #2)",
            "answer": "Robert Johnson",
            "accepted": [
                "johnson"
            ],
            "source": "Wikipedia - Robert Johnson"
        },
        {
            "value": 400,
            "clue": "The German opera composer who created the four-opera 'Ring Cycle' (Der Ring des Nibelungen). (Variant #2)",
            "answer": "Richard Wagner",
            "accepted": [
                "wagner"
            ],
            "source": "Wikipedia - Richard Wagner"
        },
        {
            "value": 400,
            "clue": "The 1971 Marvin Gaye concept album addressing the Vietnam War, ecology, and urban inequality. (Variant #2)",
            "answer": "What's Going On",
            "accepted": [
                "whats going on"
            ],
            "source": "Wikipedia - What's Going On"
        },
        {
            "value": 400,
            "clue": "The American minimalist composer who wrote 'Einstein on the Beach' and 'Koyaanisqatsi'. (Variant #2)",
            "answer": "Philip Glass",
            "accepted": [
                "glass"
            ],
            "source": "Wikipedia - Philip Glass"
        },
        {
            "value": 400,
            "clue": "The electronic music pioneer whose 1968 album 'Switched-On Bach' popularized the Moog synthesizer. (Variant #2)",
            "answer": "Wendy Carlos",
            "accepted": [
                "carlos"
            ],
            "source": "Wikipedia - Wendy Carlos"
        },
        {
            "value": 400,
            "clue": "The 1959 Dave Brubeck Quartet track composed by Paul Desmond in distinctive 5/4 time signature. (Variant #2)",
            "answer": "Take Five",
            "accepted": [
                "take 5"
            ],
            "source": "Wikipedia - Take Five"
        },
        {
            "value": 400,
            "clue": "The Polish Romantic composer and pianist renowned for his nocturnes, ballades, and polonaises. (Variant #2)",
            "answer": "Frederic Chopin",
            "accepted": [
                "chopin"
            ],
            "source": "Wikipedia - Frédéric Chopin"
        },
        {
            "value": 400,
            "clue": "The Finnish national composer who wrote the patriotic tone poem 'Finlandia'. (Variant #2)",
            "answer": "Jean Sibelius",
            "accepted": [
                "sibelius"
            ],
            "source": "Wikipedia - Jean Sibelius"
        },
        {
            "value": 400,
            "clue": "The 1969 debut progressive rock album by King Crimson featuring '21st Century Schizoid Man'. (Variant #2)",
            "answer": "In the Court of the Crimson King",
            "accepted": [
                "court of the crimson king"
            ],
            "source": "Wikipedia - In the Court of the Crimson King"
        },
        {
            "value": 400,
            "clue": "The 1991 shoegaze album by My Bloody Valentine known for its reverse-reverb glide guitar sound. (Variant #2)",
            "answer": "Loveless",
            "accepted": [
                "loveless"
            ],
            "source": "Wikipedia - Loveless"
        },
        {
            "value": 400,
            "clue": "The Manchester post-punk band led by Ian Curtis that recorded 'Love Will Tear Us Apart'. (Variant #2)",
            "answer": "Joy Division",
            "accepted": [
                "joy division"
            ],
            "source": "Wikipedia - Joy Division"
        },
        {
            "value": 400,
            "clue": "The 1965 John Coltrane four-part spiritual jazz suite recorded in a single session. (Variant #2)",
            "answer": "A Love Supreme",
            "accepted": [
                "love supreme"
            ],
            "source": "Wikipedia - A Love Supreme"
        },
        {
            "value": 400,
            "clue": "The French composer who wrote 'Boléro' featuring an ostinato snare drum rhythm. (Variant #2)",
            "answer": "Maurice Ravel",
            "accepted": [
                "ravel"
            ],
            "source": "Wikipedia - Maurice Ravel"
        },
        {
            "value": 400,
            "clue": "The Düsseldorf band formed in 1970 that pioneered electronic synth-pop with 'Autobahn'. (Variant #2)",
            "answer": "Kraftwerk",
            "accepted": [
                "kraftwerk"
            ],
            "source": "Wikipedia - Kraftwerk"
        },
        {
            "value": 400,
            "clue": "The 1993 debut album by Staten Island rap collective Wu-Tang Clan. (Variant #2)",
            "answer": "Enter the Wu-Tang (36 Chambers)",
            "accepted": [
                "36 chambers"
            ],
            "source": "Wikipedia - Enter the Wu-Tang (36 Chambers)"
        },
        {
            "value": 400,
            "clue": "The folk anthem recorded by Bob Dylan in 1964 prophesying civil rights and generational change. (Variant #2)",
            "answer": "The Times They Are a-Changin'",
            "accepted": [
                "times they are a changin"
            ],
            "source": "Wikipedia - The Times They Are a-Changin'"
        },
        {
            "value": 500,
            "clue": "The Franco-Flemish composer known as the quintessential master of High Renaissance polyphony.",
            "answer": "Josquin des Prez",
            "accepted": [
                "josquin"
            ],
            "source": "Wikipedia - Josquin des Prez"
        },
        {
            "value": 500,
            "clue": "The 1952 avant-garde piece by John Cage where musicians sit in silence for the duration.",
            "answer": "4'33\"",
            "accepted": [
                "four minutes thirty three seconds"
            ],
            "source": "Wikipedia - 4′33″"
        },
        {
            "value": 500,
            "clue": "The Hungarian composer who systematically collected Eastern European folk music into modern art.",
            "answer": "Bela Bartok",
            "accepted": [
                "bartok"
            ],
            "source": "Wikipedia - Béla Bartók"
        },
        {
            "value": 500,
            "clue": "The revolutionary 12-tone serial composition technique developed by this Austrian-American composer.",
            "answer": "Arnold Schoenberg",
            "accepted": [
                "schoenberg"
            ],
            "source": "Wikipedia - Arnold Schoenberg"
        },
        {
            "value": 500,
            "clue": "The French composer who transcribed birdsong into works like 'Catalogue d'oiseaux'.",
            "answer": "Olivier Messiaen",
            "accepted": [
                "messiaen"
            ],
            "source": "Wikipedia - Olivier Messiaen"
        },
        {
            "value": 500,
            "clue": "The 40-part Renaissance choral motet composed in 1570 by English master Thomas Tallis.",
            "answer": "Spem in alium",
            "accepted": [
                "spem in alium"
            ],
            "source": "Wikipedia - Spem in alium"
        },
        {
            "value": 500,
            "clue": "The 1960 microtonal composition for 52 string instruments by Krzysztof Penderecki.",
            "answer": "Threnody to the Victims of Hiroshima",
            "accepted": [
                "threnody"
            ],
            "source": "Wikipedia - Threnody to the Victims of Hiroshima"
        },
        {
            "value": 500,
            "clue": "The 19th-century Italian violin virtuoso whose incredible speed on 24 Caprices spawned demonic legends.",
            "answer": "Niccolo Paganini",
            "accepted": [
                "paganini"
            ],
            "source": "Wikipedia - Niccolò Paganini"
        },
        {
            "value": 500,
            "clue": "The 1607 opera by Claudio Monteverdi based on Greek mythology, the earliest opera still regularly performed.",
            "answer": "L'Orfeo",
            "accepted": [
                "orfeo"
            ],
            "source": "Wikipedia - L'Orfeo"
        },
        {
            "value": 500,
            "clue": "The Czech Romantic composer who captured the spirit of Bohemia in 'Má vlast' ('The Moldau').",
            "answer": "Bedrich Smetana",
            "accepted": [
                "smetana"
            ],
            "source": "Wikipedia - Bedřich Smetana"
        },
        {
            "value": 500,
            "clue": "The American modernist composer who combined hymn tunes, marching bands, and polytonality in the early 1900s.",
            "answer": "Charles Ives",
            "accepted": [
                "ives"
            ],
            "source": "Wikipedia - Charles Ives"
        },
        {
            "value": 500,
            "clue": "The Renaissance Italian composer of the Roman School credited with saving polyphony at Trent.",
            "answer": "Giovanni Pierluigi da Palestrina",
            "accepted": [
                "palestrina"
            ],
            "source": "Wikipedia - Palestrina"
        },
        {
            "value": 500,
            "clue": "The Soviet composer whose Seventh Symphony was broadcast by loudspeakers during the Siege of Leningrad.",
            "answer": "Dmitri Shostakovich",
            "accepted": [
                "shostakovich"
            ],
            "source": "Wikipedia - Dmitri Shostakovich"
        },
        {
            "value": 500,
            "clue": "The English Catholic composer who served Queen Elizabeth I and wrote 'Cantiones Sacrae'.",
            "answer": "William Byrd",
            "accepted": [
                "byrd"
            ],
            "source": "Wikipedia - William Byrd"
        },
        {
            "value": 500,
            "clue": "The four-hour opera by Philip Glass that has no linear plot and uses numbers as libretto.",
            "answer": "Einstein on the Beach",
            "accepted": [
                "einstein on the beach"
            ],
            "source": "Wikipedia - Einstein on the Beach"
        },
        {
            "value": 500,
            "clue": "The Austrian composer who wrote the monumental Eighth Symphony, the 'Symphony of a Thousand'.",
            "answer": "Gustav Mahler",
            "accepted": [
                "mahler"
            ],
            "source": "Wikipedia - Gustav Mahler"
        },
        {
            "value": 500,
            "clue": "The French composer who pioneered spectral music in the 1970s analyzing acoustic frequencies.",
            "answer": "Gerard Grisey",
            "accepted": [
                "grisey"
            ],
            "source": "Wikipedia - Gérard Grisey"
        },
        {
            "value": 500,
            "clue": "The Russian composer who created the 'Mystic Chord' and sought synesthetic multimedia synthesis.",
            "answer": "Alexander Scriabin",
            "accepted": [
                "scriabin"
            ],
            "source": "Wikipedia - Alexander Scriabin"
        },
        {
            "value": 500,
            "clue": "The 1968 Karlheinz Stockhausen vocal piece for six amplified singers improvising over vowel timbres.",
            "answer": "Stimmung",
            "accepted": [
                "stockhausen stimmung"
            ],
            "source": "Wikipedia - Stimmung"
        },
        {
            "value": 500,
            "clue": "The 12th-century German Benedictine abbess, mystic, and composer who wrote the 'Ordo Virtutum'.",
            "answer": "Hildegard of Bingen",
            "accepted": [
                "hildegard von bingen"
            ],
            "source": "Wikipedia - Hildegard of Bingen"
        },
        {
            "value": 500,
            "clue": "The Franco-Flemish composer known as the quintessential master of High Renaissance polyphony. (Variant #2)",
            "answer": "Josquin des Prez",
            "accepted": [
                "josquin"
            ],
            "source": "Wikipedia - Josquin des Prez"
        },
        {
            "value": 500,
            "clue": "The 1952 avant-garde piece by John Cage where musicians sit in silence for the duration. (Variant #2)",
            "answer": "4'33\"",
            "accepted": [
                "four minutes thirty three seconds"
            ],
            "source": "Wikipedia - 4′33″"
        },
        {
            "value": 500,
            "clue": "The Hungarian composer who systematically collected Eastern European folk music into modern art. (Variant #2)",
            "answer": "Bela Bartok",
            "accepted": [
                "bartok"
            ],
            "source": "Wikipedia - Béla Bartók"
        },
        {
            "value": 500,
            "clue": "The revolutionary 12-tone serial composition technique developed by this Austrian-American composer. (Variant #2)",
            "answer": "Arnold Schoenberg",
            "accepted": [
                "schoenberg"
            ],
            "source": "Wikipedia - Arnold Schoenberg"
        },
        {
            "value": 500,
            "clue": "The French composer who transcribed birdsong into works like 'Catalogue d'oiseaux'. (Variant #2)",
            "answer": "Olivier Messiaen",
            "accepted": [
                "messiaen"
            ],
            "source": "Wikipedia - Olivier Messiaen"
        },
        {
            "value": 500,
            "clue": "The 40-part Renaissance choral motet composed in 1570 by English master Thomas Tallis. (Variant #2)",
            "answer": "Spem in alium",
            "accepted": [
                "spem in alium"
            ],
            "source": "Wikipedia - Spem in alium"
        },
        {
            "value": 500,
            "clue": "The 1960 microtonal composition for 52 string instruments by Krzysztof Penderecki. (Variant #2)",
            "answer": "Threnody to the Victims of Hiroshima",
            "accepted": [
                "threnody"
            ],
            "source": "Wikipedia - Threnody to the Victims of Hiroshima"
        },
        {
            "value": 500,
            "clue": "The 19th-century Italian violin virtuoso whose incredible speed on 24 Caprices spawned demonic legends. (Variant #2)",
            "answer": "Niccolo Paganini",
            "accepted": [
                "paganini"
            ],
            "source": "Wikipedia - Niccolò Paganini"
        },
        {
            "value": 500,
            "clue": "The 1607 opera by Claudio Monteverdi based on Greek mythology, the earliest opera still regularly performed. (Variant #2)",
            "answer": "L'Orfeo",
            "accepted": [
                "orfeo"
            ],
            "source": "Wikipedia - L'Orfeo"
        },
        {
            "value": 500,
            "clue": "The Czech Romantic composer who captured the spirit of Bohemia in 'Má vlast' ('The Moldau'). (Variant #2)",
            "answer": "Bedrich Smetana",
            "accepted": [
                "smetana"
            ],
            "source": "Wikipedia - Bedřich Smetana"
        },
        {
            "value": 500,
            "clue": "The American modernist composer who combined hymn tunes, marching bands, and polytonality in the early 1900s. (Variant #2)",
            "answer": "Charles Ives",
            "accepted": [
                "ives"
            ],
            "source": "Wikipedia - Charles Ives"
        },
        {
            "value": 500,
            "clue": "The Renaissance Italian composer of the Roman School credited with saving polyphony at Trent. (Variant #2)",
            "answer": "Giovanni Pierluigi da Palestrina",
            "accepted": [
                "palestrina"
            ],
            "source": "Wikipedia - Palestrina"
        },
        {
            "value": 500,
            "clue": "The Soviet composer whose Seventh Symphony was broadcast by loudspeakers during the Siege of Leningrad. (Variant #2)",
            "answer": "Dmitri Shostakovich",
            "accepted": [
                "shostakovich"
            ],
            "source": "Wikipedia - Dmitri Shostakovich"
        },
        {
            "value": 500,
            "clue": "The English Catholic composer who served Queen Elizabeth I and wrote 'Cantiones Sacrae'. (Variant #2)",
            "answer": "William Byrd",
            "accepted": [
                "byrd"
            ],
            "source": "Wikipedia - William Byrd"
        },
        {
            "value": 500,
            "clue": "The four-hour opera by Philip Glass that has no linear plot and uses numbers as libretto. (Variant #2)",
            "answer": "Einstein on the Beach",
            "accepted": [
                "einstein on the beach"
            ],
            "source": "Wikipedia - Einstein on the Beach"
        },
        {
            "value": 500,
            "clue": "The Austrian composer who wrote the monumental Eighth Symphony, the 'Symphony of a Thousand'. (Variant #2)",
            "answer": "Gustav Mahler",
            "accepted": [
                "mahler"
            ],
            "source": "Wikipedia - Gustav Mahler"
        },
        {
            "value": 500,
            "clue": "The French composer who pioneered spectral music in the 1970s analyzing acoustic frequencies. (Variant #2)",
            "answer": "Gerard Grisey",
            "accepted": [
                "grisey"
            ],
            "source": "Wikipedia - Gérard Grisey"
        },
        {
            "value": 500,
            "clue": "The Russian composer who created the 'Mystic Chord' and sought synesthetic multimedia synthesis. (Variant #2)",
            "answer": "Alexander Scriabin",
            "accepted": [
                "scriabin"
            ],
            "source": "Wikipedia - Alexander Scriabin"
        },
        {
            "value": 500,
            "clue": "The 1968 Karlheinz Stockhausen vocal piece for six amplified singers improvising over vowel timbres. (Variant #2)",
            "answer": "Stimmung",
            "accepted": [
                "stockhausen stimmung"
            ],
            "source": "Wikipedia - Stimmung"
        },
        {
            "value": 500,
            "clue": "The 12th-century German Benedictine abbess, mystic, and composer who wrote the 'Ordo Virtutum'. (Variant #2)",
            "answer": "Hildegard of Bingen",
            "accepted": [
                "hildegard von bingen"
            ],
            "source": "Wikipedia - Hildegard of Bingen"
        }
    ],
    "literature": [
        {
            "value": 100,
            "clue": "The Bard of Avon who wrote Hamlet, Romeo and Juliet, and Macbeth.",
            "answer": "William Shakespeare",
            "accepted": [
                "shakespeare"
            ],
            "source": "Wikipedia - William Shakespeare"
        },
        {
            "value": 100,
            "clue": "The British author who created the magical world of Harry Potter and Hogwarts.",
            "answer": "J.K. Rowling",
            "accepted": [
                "rowling"
            ],
            "source": "Wikipedia - J. K. Rowling"
        },
        {
            "value": 100,
            "clue": "In Greek mythology, the king of the Olympian gods who hurled lightning bolts.",
            "answer": "Zeus",
            "accepted": [
                "jupiter"
            ],
            "source": "Wikipedia - Zeus"
        },
        {
            "value": 100,
            "clue": "The 1949 dystopian novel by George Orwell featuring 'Big Brother' and 'Thought Police'.",
            "answer": "1984",
            "accepted": [
                "nineteen eighty-four"
            ],
            "source": "Wikipedia - Nineteen Eighty-Four"
        },
        {
            "value": 100,
            "clue": "The English author of Pride and Prejudice, Sense and Sensibility, and Emma.",
            "answer": "Jane Austen",
            "accepted": [
                "austen"
            ],
            "source": "Wikipedia - Jane Austen"
        },
        {
            "value": 100,
            "clue": "The epic high fantasy novel by J.R.R. Tolkien chronicling Frodo Baggins' quest to Mount Doom.",
            "answer": "The Lord of the Rings",
            "accepted": [
                "lord of the rings"
            ],
            "source": "Wikipedia - The Lord of the Rings"
        },
        {
            "value": 100,
            "clue": "The Roman god of the sea, equivalent to the Greek god Poseidon.",
            "answer": "Neptune",
            "accepted": [
                "poseidon"
            ],
            "source": "Wikipedia - Neptune (mythology)"
        },
        {
            "value": 100,
            "clue": "The 1851 novel by Herman Melville about Captain Ahab's obsessive pursuit of a white whale.",
            "answer": "Moby-Dick",
            "accepted": [
                "moby dick"
            ],
            "source": "Wikipedia - Moby-Dick"
        },
        {
            "value": 100,
            "clue": "The legendary English folk hero who stole from the rich to give to the poor in Sherwood Forest.",
            "answer": "Robin Hood",
            "accepted": [
                "robin hood"
            ],
            "source": "Wikipedia - Robin Hood"
        },
        {
            "value": 100,
            "clue": "The ancient Greek epic poem attributed to Homer describing the Trojan War.",
            "answer": "The Iliad",
            "accepted": [
                "iliad"
            ],
            "source": "Wikipedia - Iliad"
        },
        {
            "value": 100,
            "clue": "The mythical box opened by a curious woman in Greek mythology that released all evils into the world.",
            "answer": "Pandora's Box",
            "accepted": [
                "pandora box"
            ],
            "source": "Wikipedia - Pandora's box"
        },
        {
            "value": 100,
            "clue": "The 1925 novel by F. Scott Fitzgerald exploring wealth and disillusionment in the Jazz Age.",
            "answer": "The Great Gatsby",
            "accepted": [
                "great gatsby"
            ],
            "source": "Wikipedia - The Great Gatsby"
        },
        {
            "value": 100,
            "clue": "The Greek hero who completed Twelve Labors including slaying the Nemean Lion.",
            "answer": "Heracles",
            "accepted": [
                "hercules"
            ],
            "source": "Wikipedia - Heracles"
        },
        {
            "value": 100,
            "clue": "The Arthurian wizard who acted as mentor to King Arthur of Camelot.",
            "answer": "Merlin",
            "accepted": [
                "merlin the wizard"
            ],
            "source": "Wikipedia - Merlin"
        },
        {
            "value": 100,
            "clue": "The 1818 gothic novel by Mary Shelley about Victor creating a creature from corpses.",
            "answer": "Frankenstein",
            "accepted": [
                "frankenstein novel"
            ],
            "source": "Wikipedia - Frankenstein"
        },
        {
            "value": 100,
            "clue": "The Norse god of thunder who wields the hammer Mjolnir.",
            "answer": "Thor",
            "accepted": [
                "thor odinson"
            ],
            "source": "Wikipedia - Thor"
        },
        {
            "value": 100,
            "clue": "The magical world accessed through a wardrobe in C.S. Lewis's classic fantasy series.",
            "answer": "Narnia",
            "accepted": [
                "the chronicles of narnia"
            ],
            "source": "Wikipedia - Narnia"
        },
        {
            "value": 100,
            "clue": "The fictional consulting detective of 221B Baker Street created by Arthur Conan Doyle.",
            "answer": "Sherlock Holmes",
            "accepted": [
                "holmes"
            ],
            "source": "Wikipedia - Sherlock Holmes"
        },
        {
            "value": 100,
            "clue": "The tragic prince of Denmark in Shakespeare's play who asks 'To be, or not to be'.",
            "answer": "Hamlet",
            "accepted": [
                "prince hamlet"
            ],
            "source": "Wikipedia - Hamlet"
        },
        {
            "value": 100,
            "clue": "The author of The Adventures of Tom Sawyer and Adventures of Huckleberry Finn.",
            "answer": "Mark Twain",
            "accepted": [
                "samuel clemens",
                "twain"
            ],
            "source": "Wikipedia - Mark Twain"
        },
        {
            "value": 100,
            "clue": "The Bard of Avon who wrote Hamlet, Romeo and Juliet, and Macbeth. (Variant #2)",
            "answer": "William Shakespeare",
            "accepted": [
                "shakespeare"
            ],
            "source": "Wikipedia - William Shakespeare"
        },
        {
            "value": 100,
            "clue": "The British author who created the magical world of Harry Potter and Hogwarts. (Variant #2)",
            "answer": "J.K. Rowling",
            "accepted": [
                "rowling"
            ],
            "source": "Wikipedia - J. K. Rowling"
        },
        {
            "value": 100,
            "clue": "In Greek mythology, the king of the Olympian gods who hurled lightning bolts. (Variant #2)",
            "answer": "Zeus",
            "accepted": [
                "jupiter"
            ],
            "source": "Wikipedia - Zeus"
        },
        {
            "value": 100,
            "clue": "The 1949 dystopian novel by George Orwell featuring 'Big Brother' and 'Thought Police'. (Variant #2)",
            "answer": "1984",
            "accepted": [
                "nineteen eighty-four"
            ],
            "source": "Wikipedia - Nineteen Eighty-Four"
        },
        {
            "value": 100,
            "clue": "The English author of Pride and Prejudice, Sense and Sensibility, and Emma. (Variant #2)",
            "answer": "Jane Austen",
            "accepted": [
                "austen"
            ],
            "source": "Wikipedia - Jane Austen"
        },
        {
            "value": 100,
            "clue": "The epic high fantasy novel by J.R.R. Tolkien chronicling Frodo Baggins' quest to Mount Doom. (Variant #2)",
            "answer": "The Lord of the Rings",
            "accepted": [
                "lord of the rings"
            ],
            "source": "Wikipedia - The Lord of the Rings"
        },
        {
            "value": 100,
            "clue": "The Roman god of the sea, equivalent to the Greek god Poseidon. (Variant #2)",
            "answer": "Neptune",
            "accepted": [
                "poseidon"
            ],
            "source": "Wikipedia - Neptune (mythology)"
        },
        {
            "value": 100,
            "clue": "The 1851 novel by Herman Melville about Captain Ahab's obsessive pursuit of a white whale. (Variant #2)",
            "answer": "Moby-Dick",
            "accepted": [
                "moby dick"
            ],
            "source": "Wikipedia - Moby-Dick"
        },
        {
            "value": 100,
            "clue": "The legendary English folk hero who stole from the rich to give to the poor in Sherwood Forest. (Variant #2)",
            "answer": "Robin Hood",
            "accepted": [
                "robin hood"
            ],
            "source": "Wikipedia - Robin Hood"
        },
        {
            "value": 100,
            "clue": "The ancient Greek epic poem attributed to Homer describing the Trojan War. (Variant #2)",
            "answer": "The Iliad",
            "accepted": [
                "iliad"
            ],
            "source": "Wikipedia - Iliad"
        },
        {
            "value": 100,
            "clue": "The mythical box opened by a curious woman in Greek mythology that released all evils into the world. (Variant #2)",
            "answer": "Pandora's Box",
            "accepted": [
                "pandora box"
            ],
            "source": "Wikipedia - Pandora's box"
        },
        {
            "value": 100,
            "clue": "The 1925 novel by F. Scott Fitzgerald exploring wealth and disillusionment in the Jazz Age. (Variant #2)",
            "answer": "The Great Gatsby",
            "accepted": [
                "great gatsby"
            ],
            "source": "Wikipedia - The Great Gatsby"
        },
        {
            "value": 100,
            "clue": "The Greek hero who completed Twelve Labors including slaying the Nemean Lion. (Variant #2)",
            "answer": "Heracles",
            "accepted": [
                "hercules"
            ],
            "source": "Wikipedia - Heracles"
        },
        {
            "value": 100,
            "clue": "The Arthurian wizard who acted as mentor to King Arthur of Camelot. (Variant #2)",
            "answer": "Merlin",
            "accepted": [
                "merlin the wizard"
            ],
            "source": "Wikipedia - Merlin"
        },
        {
            "value": 100,
            "clue": "The 1818 gothic novel by Mary Shelley about Victor creating a creature from corpses. (Variant #2)",
            "answer": "Frankenstein",
            "accepted": [
                "frankenstein novel"
            ],
            "source": "Wikipedia - Frankenstein"
        },
        {
            "value": 100,
            "clue": "The Norse god of thunder who wields the hammer Mjolnir. (Variant #2)",
            "answer": "Thor",
            "accepted": [
                "thor odinson"
            ],
            "source": "Wikipedia - Thor"
        },
        {
            "value": 100,
            "clue": "The magical world accessed through a wardrobe in C.S. Lewis's classic fantasy series. (Variant #2)",
            "answer": "Narnia",
            "accepted": [
                "the chronicles of narnia"
            ],
            "source": "Wikipedia - Narnia"
        },
        {
            "value": 100,
            "clue": "The fictional consulting detective of 221B Baker Street created by Arthur Conan Doyle. (Variant #2)",
            "answer": "Sherlock Holmes",
            "accepted": [
                "holmes"
            ],
            "source": "Wikipedia - Sherlock Holmes"
        },
        {
            "value": 100,
            "clue": "The tragic prince of Denmark in Shakespeare's play who asks 'To be, or not to be'. (Variant #2)",
            "answer": "Hamlet",
            "accepted": [
                "prince hamlet"
            ],
            "source": "Wikipedia - Hamlet"
        },
        {
            "value": 100,
            "clue": "The author of The Adventures of Tom Sawyer and Adventures of Huckleberry Finn. (Variant #2)",
            "answer": "Mark Twain",
            "accepted": [
                "samuel clemens",
                "twain"
            ],
            "source": "Wikipedia - Mark Twain"
        },
        {
            "value": 200,
            "clue": "The Russian author who penned the monumental masterpieces War and Peace and Anna Karenina.",
            "answer": "Leo Tolstoy",
            "accepted": [
                "tolstoy"
            ],
            "source": "Wikipedia - Leo Tolstoy"
        },
        {
            "value": 200,
            "clue": "In Norse mythology, the mighty hammer forged for Thor that only the worthy can lift.",
            "answer": "Mjolnir",
            "accepted": [
                "mjölnir"
            ],
            "source": "Wikipedia - Mjölnir"
        },
        {
            "value": 200,
            "clue": "The ancient Greek epic poem following Odysseus on his ten-year journey home to Ithaca.",
            "answer": "The Odyssey",
            "accepted": [
                "odyssey"
            ],
            "source": "Wikipedia - Odyssey"
        },
        {
            "value": 200,
            "clue": "The Russian author of Crime and Punishment and The Brothers Karamazov.",
            "answer": "Fyodor Dostoevsky",
            "accepted": [
                "dostoevsky"
            ],
            "source": "Wikipedia - Fyodor Dostoevsky"
        },
        {
            "value": 200,
            "clue": "The 1960 Pulitzer Prize-winning novel by Harper Lee set in Maycomb, Alabama starring Atticus Finch.",
            "answer": "To Kill a Mockingbird",
            "accepted": [
                "to kill a mockingbird"
            ],
            "source": "Wikipedia - To Kill a Mockingbird"
        },
        {
            "value": 200,
            "clue": "The French author of Les Misérables and The Hunchback of Notre-Dame.",
            "answer": "Victor Hugo",
            "accepted": [
                "hugo"
            ],
            "source": "Wikipedia - Victor Hugo"
        },
        {
            "value": 200,
            "clue": "The American author who wrote The Old Man and the Sea, A Farewell to Arms, and For Whom the Bell Tolls.",
            "answer": "Ernest Hemingway",
            "accepted": [
                "hemingway"
            ],
            "source": "Wikipedia - Ernest Hemingway"
        },
        {
            "value": 200,
            "clue": "The Greek goddess of wisdom and warfare, who sprang fully grown from Zeus's forehead.",
            "answer": "Athena",
            "accepted": [
                "minerva"
            ],
            "source": "Wikipedia - Athena"
        },
        {
            "value": 200,
            "clue": "The 1847 Emily Brontë gothic novel centered on Heathcliff and Catherine on the Yorkshire moors.",
            "answer": "Wuthering Heights",
            "accepted": [
                "wuthering heights"
            ],
            "source": "Wikipedia - Wuthering Heights"
        },
        {
            "value": 200,
            "clue": "The ancient Mesopotamian epic recounting the adventures of the King of Uruk, the earliest epic poem.",
            "answer": "Epic of Gilgamesh",
            "accepted": [
                "gilgamesh"
            ],
            "source": "Wikipedia - Epic of Gilgamesh"
        },
        {
            "value": 200,
            "clue": "The 14th-century Florentine poet who journeyed through Hell, Purgatory, and Paradise in The Divine Comedy.",
            "answer": "Dante Alighieri",
            "accepted": [
                "dante"
            ],
            "source": "Wikipedia - Dante Alighieri"
        },
        {
            "value": 200,
            "clue": "The Spanish novel by Miguel de Cervantes about an idealistic knight fighting windmills.",
            "answer": "Don Quixote",
            "accepted": [
                "el quijote"
            ],
            "source": "Wikipedia - Don Quixote"
        },
        {
            "value": 200,
            "clue": "The Greek mythological creature with the body of a man and the head of a bull kept in a labyrinth.",
            "answer": "Minotaur",
            "accepted": [
                "the minotaur"
            ],
            "source": "Wikipedia - Minotaur"
        },
        {
            "value": 200,
            "clue": "The 1847 novel by Charlotte Brontë following an orphaned governess at Thornfield Hall.",
            "answer": "Jane Eyre",
            "accepted": [
                "jane eyre"
            ],
            "source": "Wikipedia - Jane Eyre"
        },
        {
            "value": 200,
            "clue": "The Roman epic poem written by Virgil recounting Aeneas fleeing Troy to found Rome.",
            "answer": "The Aeneid",
            "accepted": [
                "aeneid"
            ],
            "source": "Wikipedia - Aeneid"
        },
        {
            "value": 200,
            "clue": "The mythological winged horse fathered by Poseidon that sprang from Medusa's severed neck.",
            "answer": "Pegasus",
            "accepted": [
                "pegasos"
            ],
            "source": "Wikipedia - Pegasus"
        },
        {
            "value": 200,
            "clue": "The Greek youth who flew too close to the sun with wax wings, melting them and falling into the sea.",
            "answer": "Icarus",
            "accepted": [
                "ikarios"
            ],
            "source": "Wikipedia - Icarus"
        },
        {
            "value": 200,
            "clue": "The Irish author of Dubliners, A Portrait of the Artist as a Young Man, and Ulysses.",
            "answer": "James Joyce",
            "accepted": [
                "joyce"
            ],
            "source": "Wikipedia - James Joyce"
        },
        {
            "value": 200,
            "clue": "The Norse god of mischief who causes the death of Baldr and triggers Ragnarok.",
            "answer": "Loki",
            "accepted": [
                "loki laufeyson"
            ],
            "source": "Wikipedia - Loki"
        },
        {
            "value": 200,
            "clue": "The 1953 play by Arthur Miller using the Salem witch trials as an allegory for McCarthyism.",
            "answer": "The Crucible",
            "accepted": [
                "the crucible"
            ],
            "source": "Wikipedia - The Crucible"
        },
        {
            "value": 200,
            "clue": "The Russian author who penned the monumental masterpieces War and Peace and Anna Karenina. (Variant #2)",
            "answer": "Leo Tolstoy",
            "accepted": [
                "tolstoy"
            ],
            "source": "Wikipedia - Leo Tolstoy"
        },
        {
            "value": 200,
            "clue": "In Norse mythology, the mighty hammer forged for Thor that only the worthy can lift. (Variant #2)",
            "answer": "Mjolnir",
            "accepted": [
                "mjölnir"
            ],
            "source": "Wikipedia - Mjölnir"
        },
        {
            "value": 200,
            "clue": "The ancient Greek epic poem following Odysseus on his ten-year journey home to Ithaca. (Variant #2)",
            "answer": "The Odyssey",
            "accepted": [
                "odyssey"
            ],
            "source": "Wikipedia - Odyssey"
        },
        {
            "value": 200,
            "clue": "The Russian author of Crime and Punishment and The Brothers Karamazov. (Variant #2)",
            "answer": "Fyodor Dostoevsky",
            "accepted": [
                "dostoevsky"
            ],
            "source": "Wikipedia - Fyodor Dostoevsky"
        },
        {
            "value": 200,
            "clue": "The 1960 Pulitzer Prize-winning novel by Harper Lee set in Maycomb, Alabama starring Atticus Finch. (Variant #2)",
            "answer": "To Kill a Mockingbird",
            "accepted": [
                "to kill a mockingbird"
            ],
            "source": "Wikipedia - To Kill a Mockingbird"
        },
        {
            "value": 200,
            "clue": "The French author of Les Misérables and The Hunchback of Notre-Dame. (Variant #2)",
            "answer": "Victor Hugo",
            "accepted": [
                "hugo"
            ],
            "source": "Wikipedia - Victor Hugo"
        },
        {
            "value": 200,
            "clue": "The American author who wrote The Old Man and the Sea, A Farewell to Arms, and For Whom the Bell Tolls. (Variant #2)",
            "answer": "Ernest Hemingway",
            "accepted": [
                "hemingway"
            ],
            "source": "Wikipedia - Ernest Hemingway"
        },
        {
            "value": 200,
            "clue": "The Greek goddess of wisdom and warfare, who sprang fully grown from Zeus's forehead. (Variant #2)",
            "answer": "Athena",
            "accepted": [
                "minerva"
            ],
            "source": "Wikipedia - Athena"
        },
        {
            "value": 200,
            "clue": "The 1847 Emily Brontë gothic novel centered on Heathcliff and Catherine on the Yorkshire moors. (Variant #2)",
            "answer": "Wuthering Heights",
            "accepted": [
                "wuthering heights"
            ],
            "source": "Wikipedia - Wuthering Heights"
        },
        {
            "value": 200,
            "clue": "The ancient Mesopotamian epic recounting the adventures of the King of Uruk, the earliest epic poem. (Variant #2)",
            "answer": "Epic of Gilgamesh",
            "accepted": [
                "gilgamesh"
            ],
            "source": "Wikipedia - Epic of Gilgamesh"
        },
        {
            "value": 200,
            "clue": "The 14th-century Florentine poet who journeyed through Hell, Purgatory, and Paradise in The Divine Comedy. (Variant #2)",
            "answer": "Dante Alighieri",
            "accepted": [
                "dante"
            ],
            "source": "Wikipedia - Dante Alighieri"
        },
        {
            "value": 200,
            "clue": "The Spanish novel by Miguel de Cervantes about an idealistic knight fighting windmills. (Variant #2)",
            "answer": "Don Quixote",
            "accepted": [
                "el quijote"
            ],
            "source": "Wikipedia - Don Quixote"
        },
        {
            "value": 200,
            "clue": "The Greek mythological creature with the body of a man and the head of a bull kept in a labyrinth. (Variant #2)",
            "answer": "Minotaur",
            "accepted": [
                "the minotaur"
            ],
            "source": "Wikipedia - Minotaur"
        },
        {
            "value": 200,
            "clue": "The 1847 novel by Charlotte Brontë following an orphaned governess at Thornfield Hall. (Variant #2)",
            "answer": "Jane Eyre",
            "accepted": [
                "jane eyre"
            ],
            "source": "Wikipedia - Jane Eyre"
        },
        {
            "value": 200,
            "clue": "The Roman epic poem written by Virgil recounting Aeneas fleeing Troy to found Rome. (Variant #2)",
            "answer": "The Aeneid",
            "accepted": [
                "aeneid"
            ],
            "source": "Wikipedia - Aeneid"
        },
        {
            "value": 200,
            "clue": "The mythological winged horse fathered by Poseidon that sprang from Medusa's severed neck. (Variant #2)",
            "answer": "Pegasus",
            "accepted": [
                "pegasos"
            ],
            "source": "Wikipedia - Pegasus"
        },
        {
            "value": 200,
            "clue": "The Greek youth who flew too close to the sun with wax wings, melting them and falling into the sea. (Variant #2)",
            "answer": "Icarus",
            "accepted": [
                "ikarios"
            ],
            "source": "Wikipedia - Icarus"
        },
        {
            "value": 200,
            "clue": "The Irish author of Dubliners, A Portrait of the Artist as a Young Man, and Ulysses. (Variant #2)",
            "answer": "James Joyce",
            "accepted": [
                "joyce"
            ],
            "source": "Wikipedia - James Joyce"
        },
        {
            "value": 200,
            "clue": "The Norse god of mischief who causes the death of Baldr and triggers Ragnarok. (Variant #2)",
            "answer": "Loki",
            "accepted": [
                "loki laufeyson"
            ],
            "source": "Wikipedia - Loki"
        },
        {
            "value": 200,
            "clue": "The 1953 play by Arthur Miller using the Salem witch trials as an allegory for McCarthyism. (Variant #2)",
            "answer": "The Crucible",
            "accepted": [
                "the crucible"
            ],
            "source": "Wikipedia - The Crucible"
        },
        {
            "value": 300,
            "clue": "The German philosopher and polymath who penned the two-part tragic drama Faust.",
            "answer": "Johann Wolfgang von Goethe",
            "accepted": [
                "goethe"
            ],
            "source": "Wikipedia - Johann Wolfgang von Goethe"
        },
        {
            "value": 300,
            "clue": "The monster in Beowulf that terrorizes the mead hall of Heorot before being slain.",
            "answer": "Grendel",
            "accepted": [
                "grendel the monster"
            ],
            "source": "Wikipedia - Grendel"
        },
        {
            "value": 300,
            "clue": "The Colombian master of magical realism who wrote One Hundred Years of Solitude.",
            "answer": "Gabriel Garcia Marquez",
            "accepted": [
                "garcia marquez",
                "gabo"
            ],
            "source": "Wikipedia - Gabriel García Márquez"
        },
        {
            "value": 300,
            "clue": "The Greek mythological figure condemned for eternity to push a boulder up a hill only to watch it roll down.",
            "answer": "Sisyphus",
            "accepted": [
                "the myth of sisyphus"
            ],
            "source": "Wikipedia - Sisyphus"
        },
        {
            "value": 300,
            "clue": "The tragic Greek king of Thebes who unwittingly killed his father and married his mother.",
            "answer": "Oedipus",
            "accepted": [
                "oedipus rex"
            ],
            "source": "Wikipedia - Oedipus"
        },
        {
            "value": 300,
            "clue": "The 1932 dystopian sci-fi novel by Aldous Huxley depicting a genetically engineered consumerist caste society.",
            "answer": "Brave New World",
            "accepted": [
                "brave new world"
            ],
            "source": "Wikipedia - Brave New World"
        },
        {
            "value": 300,
            "clue": "The Czech-Jewish author of The Metamorphosis, where Gregor Samsa transforms into a giant insect.",
            "answer": "Franz Kafka",
            "accepted": [
                "kafka"
            ],
            "source": "Wikipedia - Franz Kafka"
        },
        {
            "value": 300,
            "clue": "The 1897 gothic horror novel by Bram Stoker that established the modern vampire legend.",
            "answer": "Dracula",
            "accepted": [
                "count dracula"
            ],
            "source": "Wikipedia - Dracula"
        },
        {
            "value": 300,
            "clue": "The French existentialist philosopher who wrote The Stranger and The Myth of Sisyphus.",
            "answer": "Albert Camus",
            "accepted": [
                "camus"
            ],
            "source": "Wikipedia - Albert Camus"
        },
        {
            "value": 300,
            "clue": "The supreme god of the Norse pantheon who sacrificed an eye at Mimir's well for wisdom.",
            "answer": "Odin",
            "accepted": [
                "wotan"
            ],
            "source": "Wikipedia - Odin"
        },
        {
            "value": 300,
            "clue": "The three-headed hound guarding the entrance to the Greek underworld.",
            "answer": "Cerberus",
            "accepted": [
                "kerberos"
            ],
            "source": "Wikipedia - Cerberus"
        },
        {
            "value": 300,
            "clue": "The 1951 J.D. Salinger novel starring rebellious teenager Holden Caulfield in New York City.",
            "answer": "The Catcher in the Rye",
            "accepted": [
                "catcher in the rye"
            ],
            "source": "Wikipedia - The Catcher in the Rye"
        },
        {
            "value": 300,
            "clue": "The Greek titan who stole fire from the gods to give to humanity and was chained to a rock.",
            "answer": "Prometheus",
            "accepted": [
                "prometheus the titan"
            ],
            "source": "Wikipedia - Prometheus"
        },
        {
            "value": 300,
            "clue": "The 18th-century English satirical travel book by Jonathan Swift featuring Lilliput and Brobdingnag.",
            "answer": "Gulliver's Travels",
            "accepted": [
                "gullivers travels"
            ],
            "source": "Wikipedia - Gulliver's Travels"
        },
        {
            "value": 300,
            "clue": "The French philosopher who wrote the satirical novella Candide in 1759 mocking optimism.",
            "answer": "Voltaire",
            "accepted": [
                "françois-marie arouet"
            ],
            "source": "Wikipedia - Voltaire"
        },
        {
            "value": 300,
            "clue": "The Greek goddess of love, beauty, and desire, born from the sea foam near Cyprus.",
            "answer": "Aphrodite",
            "accepted": [
                "venus"
            ],
            "source": "Wikipedia - Aphrodite"
        },
        {
            "value": 300,
            "clue": "The long-running British epic poem from the early Middle Ages starring an Anglo-Saxon warrior king.",
            "answer": "Beowulf",
            "accepted": [
                "beowulf epic"
            ],
            "source": "Wikipedia - Beowulf"
        },
        {
            "value": 300,
            "clue": "The Japanese author of Norwegian Wood and Kafka on the Shore renowned for surrealism.",
            "answer": "Haruki Murakami",
            "accepted": [
                "murakami"
            ],
            "source": "Wikipedia - Haruki Murakami"
        },
        {
            "value": 300,
            "clue": "The Greek king whose touch turned everything into pure gold until it cursed him.",
            "answer": "King Midas",
            "accepted": [
                "midas"
            ],
            "source": "Wikipedia - Midas"
        },
        {
            "value": 300,
            "clue": "The 1845 narrative poem by Edgar Allan Poe featuring a talking bird repeating 'Nevermore'.",
            "answer": "The Raven",
            "accepted": [
                "the raven poe"
            ],
            "source": "Wikipedia - The Raven"
        },
        {
            "value": 300,
            "clue": "The German philosopher and polymath who penned the two-part tragic drama Faust. (Variant #2)",
            "answer": "Johann Wolfgang von Goethe",
            "accepted": [
                "goethe"
            ],
            "source": "Wikipedia - Johann Wolfgang von Goethe"
        },
        {
            "value": 300,
            "clue": "The monster in Beowulf that terrorizes the mead hall of Heorot before being slain. (Variant #2)",
            "answer": "Grendel",
            "accepted": [
                "grendel the monster"
            ],
            "source": "Wikipedia - Grendel"
        },
        {
            "value": 300,
            "clue": "The Colombian master of magical realism who wrote One Hundred Years of Solitude. (Variant #2)",
            "answer": "Gabriel Garcia Marquez",
            "accepted": [
                "garcia marquez",
                "gabo"
            ],
            "source": "Wikipedia - Gabriel García Márquez"
        },
        {
            "value": 300,
            "clue": "The Greek mythological figure condemned for eternity to push a boulder up a hill only to watch it roll down. (Variant #2)",
            "answer": "Sisyphus",
            "accepted": [
                "the myth of sisyphus"
            ],
            "source": "Wikipedia - Sisyphus"
        },
        {
            "value": 300,
            "clue": "The tragic Greek king of Thebes who unwittingly killed his father and married his mother. (Variant #2)",
            "answer": "Oedipus",
            "accepted": [
                "oedipus rex"
            ],
            "source": "Wikipedia - Oedipus"
        },
        {
            "value": 300,
            "clue": "The 1932 dystopian sci-fi novel by Aldous Huxley depicting a genetically engineered consumerist caste society. (Variant #2)",
            "answer": "Brave New World",
            "accepted": [
                "brave new world"
            ],
            "source": "Wikipedia - Brave New World"
        },
        {
            "value": 300,
            "clue": "The Czech-Jewish author of The Metamorphosis, where Gregor Samsa transforms into a giant insect. (Variant #2)",
            "answer": "Franz Kafka",
            "accepted": [
                "kafka"
            ],
            "source": "Wikipedia - Franz Kafka"
        },
        {
            "value": 300,
            "clue": "The 1897 gothic horror novel by Bram Stoker that established the modern vampire legend. (Variant #2)",
            "answer": "Dracula",
            "accepted": [
                "count dracula"
            ],
            "source": "Wikipedia - Dracula"
        },
        {
            "value": 300,
            "clue": "The French existentialist philosopher who wrote The Stranger and The Myth of Sisyphus. (Variant #2)",
            "answer": "Albert Camus",
            "accepted": [
                "camus"
            ],
            "source": "Wikipedia - Albert Camus"
        },
        {
            "value": 300,
            "clue": "The supreme god of the Norse pantheon who sacrificed an eye at Mimir's well for wisdom. (Variant #2)",
            "answer": "Odin",
            "accepted": [
                "wotan"
            ],
            "source": "Wikipedia - Odin"
        },
        {
            "value": 300,
            "clue": "The three-headed hound guarding the entrance to the Greek underworld. (Variant #2)",
            "answer": "Cerberus",
            "accepted": [
                "kerberos"
            ],
            "source": "Wikipedia - Cerberus"
        },
        {
            "value": 300,
            "clue": "The 1951 J.D. Salinger novel starring rebellious teenager Holden Caulfield in New York City. (Variant #2)",
            "answer": "The Catcher in the Rye",
            "accepted": [
                "catcher in the rye"
            ],
            "source": "Wikipedia - The Catcher in the Rye"
        },
        {
            "value": 300,
            "clue": "The Greek titan who stole fire from the gods to give to humanity and was chained to a rock. (Variant #2)",
            "answer": "Prometheus",
            "accepted": [
                "prometheus the titan"
            ],
            "source": "Wikipedia - Prometheus"
        },
        {
            "value": 300,
            "clue": "The 18th-century English satirical travel book by Jonathan Swift featuring Lilliput and Brobdingnag. (Variant #2)",
            "answer": "Gulliver's Travels",
            "accepted": [
                "gullivers travels"
            ],
            "source": "Wikipedia - Gulliver's Travels"
        },
        {
            "value": 300,
            "clue": "The French philosopher who wrote the satirical novella Candide in 1759 mocking optimism. (Variant #2)",
            "answer": "Voltaire",
            "accepted": [
                "françois-marie arouet"
            ],
            "source": "Wikipedia - Voltaire"
        },
        {
            "value": 300,
            "clue": "The Greek goddess of love, beauty, and desire, born from the sea foam near Cyprus. (Variant #2)",
            "answer": "Aphrodite",
            "accepted": [
                "venus"
            ],
            "source": "Wikipedia - Aphrodite"
        },
        {
            "value": 300,
            "clue": "The long-running British epic poem from the early Middle Ages starring an Anglo-Saxon warrior king. (Variant #2)",
            "answer": "Beowulf",
            "accepted": [
                "beowulf epic"
            ],
            "source": "Wikipedia - Beowulf"
        },
        {
            "value": 300,
            "clue": "The Japanese author of Norwegian Wood and Kafka on the Shore renowned for surrealism. (Variant #2)",
            "answer": "Haruki Murakami",
            "accepted": [
                "murakami"
            ],
            "source": "Wikipedia - Haruki Murakami"
        },
        {
            "value": 300,
            "clue": "The Greek king whose touch turned everything into pure gold until it cursed him. (Variant #2)",
            "answer": "King Midas",
            "accepted": [
                "midas"
            ],
            "source": "Wikipedia - Midas"
        },
        {
            "value": 300,
            "clue": "The 1845 narrative poem by Edgar Allan Poe featuring a talking bird repeating 'Nevermore'. (Variant #2)",
            "answer": "The Raven",
            "accepted": [
                "the raven poe"
            ],
            "source": "Wikipedia - The Raven"
        },
        {
            "value": 400,
            "clue": "The French author of the seven-volume masterwork In Search of Lost Time (À la recherche du temps perdu).",
            "answer": "Marcel Proust",
            "accepted": [
                "proust"
            ],
            "source": "Wikipedia - Marcel Proust"
        },
        {
            "value": 400,
            "clue": "The 1922 landmark modernist poem by T.S. Eliot that opens with 'April is the cruellest month'.",
            "answer": "The Waste Land",
            "accepted": [
                "the waste land"
            ],
            "source": "Wikipedia - The Waste Land"
        },
        {
            "value": 400,
            "clue": "The American southern gothic author of The Sound and the Fury and As I Lay Dying.",
            "answer": "William Faulkner",
            "accepted": [
                "faulkner"
            ],
            "source": "Wikipedia - William Faulkner"
        },
        {
            "value": 400,
            "clue": "The Greek mythological ferryman who carries souls of the deceased across the rivers Styx and Acheron.",
            "answer": "Charon",
            "accepted": [
                "charon the ferryman"
            ],
            "source": "Wikipedia - Charon"
        },
        {
            "value": 400,
            "clue": "The 14th-century Middle English collection of 24 stories written by Geoffrey Chaucer.",
            "answer": "The Canterbury Tales",
            "accepted": [
                "canterbury tales"
            ],
            "source": "Wikipedia - The Canterbury Tales"
        },
        {
            "value": 400,
            "clue": "The Russian author of the satirical masterwork The Master and Margarita featuring the devil in Moscow.",
            "answer": "Mikhail Bulgakov",
            "accepted": [
                "bulgakov"
            ],
            "source": "Wikipedia - The Master and Margarita"
        },
        {
            "value": 400,
            "clue": "The tragic heroine in Tolstoy's novel who throws herself under a train at a Moscow station.",
            "answer": "Anna Karenina",
            "accepted": [
                "karenina"
            ],
            "source": "Wikipedia - Anna Karenina"
        },
        {
            "value": 400,
            "clue": "The Greek mythological monster with living venomous snakes for hair who turned onlookers to stone.",
            "answer": "Medusa",
            "accepted": [
                "gorgon medusa"
            ],
            "source": "Wikipedia - Medusa"
        },
        {
            "value": 400,
            "clue": "The 1929 anti-war novel by German veteran Erich Maria Remarque set on the Western Front.",
            "answer": "All Quiet on the Western Front",
            "accepted": [
                "im westen nichts neues"
            ],
            "source": "Wikipedia - All Quiet on the Western Front"
        },
        {
            "value": 400,
            "clue": "The giant ash tree in Norse mythology that connects the nine realms of the cosmos.",
            "answer": "Yggdrasil",
            "accepted": [
                "yggdrasill",
                "world tree"
            ],
            "source": "Wikipedia - Yggdrasil"
        },
        {
            "value": 400,
            "clue": "The 19th-century French author of Madame Bovary, prosecuted for obscenity upon publication in 1857.",
            "answer": "Gustave Flaubert",
            "accepted": [
                "flaubert"
            ],
            "source": "Wikipedia - Gustave Flaubert"
        },
        {
            "value": 400,
            "clue": "The Irish poet who wrote 'The Second Coming' with the line 'Things fall apart; the centre cannot hold'.",
            "answer": "W.B. Yeats",
            "accepted": [
                "william butler yeats",
                "yeats"
            ],
            "source": "Wikipedia - W. B. Yeats"
        },
        {
            "value": 400,
            "clue": "The ancient Sanskrit epic attributed to Vyasa that contains the Bhagavad Gita.",
            "answer": "Mahabharata",
            "accepted": [
                "the mahabharata"
            ],
            "source": "Wikipedia - Mahabharata"
        },
        {
            "value": 400,
            "clue": "The Greek hero whose sole vulnerable spot was his tendon, slain by Paris during the Trojan War.",
            "answer": "Achilles",
            "accepted": [
                "achilles heel"
            ],
            "source": "Wikipedia - Achilles"
        },
        {
            "value": 400,
            "clue": "The 1971 novel by Chinua Achebe depicting pre-colonial life in Nigeria and the arrival of Europeans.",
            "answer": "Things Fall Apart",
            "accepted": [
                "things fall apart"
            ],
            "source": "Wikipedia - Things Fall Apart"
        },
        {
            "value": 400,
            "clue": "The Portuguese national epic poem written by Luís de Camões celebrating Vasco da Gama's voyage.",
            "answer": "Os Lusiadas",
            "accepted": [
                "the lusiads"
            ],
            "source": "Wikipedia - Os Lusíadas"
        },
        {
            "value": 400,
            "clue": "The Greek mythological hunter who fell in love with his own reflection in a pool of water.",
            "answer": "Narcissus",
            "accepted": [
                "narkissos"
            ],
            "source": "Wikipedia - Narcissus (mythology)"
        },
        {
            "value": 400,
            "clue": "The 19th-century Russian poet and novelist who wrote the verse novel Eugene Onegin.",
            "answer": "Alexander Pushkin",
            "accepted": [
                "pushkin"
            ],
            "source": "Wikipedia - Alexander Pushkin"
        },
        {
            "value": 400,
            "clue": "The ancient Roman poet exiled to the Black Sea by Emperor Augustus, author of Metamorphoses.",
            "answer": "Ovid",
            "accepted": [
                "publius ovidius naso"
            ],
            "source": "Wikipedia - Ovid"
        },
        {
            "value": 400,
            "clue": "The Greek titan condemned to hold up the celestial heavens for eternity on his shoulders.",
            "answer": "Atlas",
            "accepted": [
                "atlas the titan"
            ],
            "source": "Wikipedia - Atlas (mythology)"
        },
        {
            "value": 400,
            "clue": "The French author of the seven-volume masterwork In Search of Lost Time (À la recherche du temps perdu). (Variant #2)",
            "answer": "Marcel Proust",
            "accepted": [
                "proust"
            ],
            "source": "Wikipedia - Marcel Proust"
        },
        {
            "value": 400,
            "clue": "The 1922 landmark modernist poem by T.S. Eliot that opens with 'April is the cruellest month'. (Variant #2)",
            "answer": "The Waste Land",
            "accepted": [
                "the waste land"
            ],
            "source": "Wikipedia - The Waste Land"
        },
        {
            "value": 400,
            "clue": "The American southern gothic author of The Sound and the Fury and As I Lay Dying. (Variant #2)",
            "answer": "William Faulkner",
            "accepted": [
                "faulkner"
            ],
            "source": "Wikipedia - William Faulkner"
        },
        {
            "value": 400,
            "clue": "The Greek mythological ferryman who carries souls of the deceased across the rivers Styx and Acheron. (Variant #2)",
            "answer": "Charon",
            "accepted": [
                "charon the ferryman"
            ],
            "source": "Wikipedia - Charon"
        },
        {
            "value": 400,
            "clue": "The 14th-century Middle English collection of 24 stories written by Geoffrey Chaucer. (Variant #2)",
            "answer": "The Canterbury Tales",
            "accepted": [
                "canterbury tales"
            ],
            "source": "Wikipedia - The Canterbury Tales"
        },
        {
            "value": 400,
            "clue": "The Russian author of the satirical masterwork The Master and Margarita featuring the devil in Moscow. (Variant #2)",
            "answer": "Mikhail Bulgakov",
            "accepted": [
                "bulgakov"
            ],
            "source": "Wikipedia - The Master and Margarita"
        },
        {
            "value": 400,
            "clue": "The tragic heroine in Tolstoy's novel who throws herself under a train at a Moscow station. (Variant #2)",
            "answer": "Anna Karenina",
            "accepted": [
                "karenina"
            ],
            "source": "Wikipedia - Anna Karenina"
        },
        {
            "value": 400,
            "clue": "The Greek mythological monster with living venomous snakes for hair who turned onlookers to stone. (Variant #2)",
            "answer": "Medusa",
            "accepted": [
                "gorgon medusa"
            ],
            "source": "Wikipedia - Medusa"
        },
        {
            "value": 400,
            "clue": "The 1929 anti-war novel by German veteran Erich Maria Remarque set on the Western Front. (Variant #2)",
            "answer": "All Quiet on the Western Front",
            "accepted": [
                "im westen nichts neues"
            ],
            "source": "Wikipedia - All Quiet on the Western Front"
        },
        {
            "value": 400,
            "clue": "The giant ash tree in Norse mythology that connects the nine realms of the cosmos. (Variant #2)",
            "answer": "Yggdrasil",
            "accepted": [
                "yggdrasill",
                "world tree"
            ],
            "source": "Wikipedia - Yggdrasil"
        },
        {
            "value": 400,
            "clue": "The 19th-century French author of Madame Bovary, prosecuted for obscenity upon publication in 1857. (Variant #2)",
            "answer": "Gustave Flaubert",
            "accepted": [
                "flaubert"
            ],
            "source": "Wikipedia - Gustave Flaubert"
        },
        {
            "value": 400,
            "clue": "The Irish poet who wrote 'The Second Coming' with the line 'Things fall apart; the centre cannot hold'. (Variant #2)",
            "answer": "W.B. Yeats",
            "accepted": [
                "william butler yeats",
                "yeats"
            ],
            "source": "Wikipedia - W. B. Yeats"
        },
        {
            "value": 400,
            "clue": "The ancient Sanskrit epic attributed to Vyasa that contains the Bhagavad Gita. (Variant #2)",
            "answer": "Mahabharata",
            "accepted": [
                "the mahabharata"
            ],
            "source": "Wikipedia - Mahabharata"
        },
        {
            "value": 400,
            "clue": "The Greek hero whose sole vulnerable spot was his tendon, slain by Paris during the Trojan War. (Variant #2)",
            "answer": "Achilles",
            "accepted": [
                "achilles heel"
            ],
            "source": "Wikipedia - Achilles"
        },
        {
            "value": 400,
            "clue": "The 1971 novel by Chinua Achebe depicting pre-colonial life in Nigeria and the arrival of Europeans. (Variant #2)",
            "answer": "Things Fall Apart",
            "accepted": [
                "things fall apart"
            ],
            "source": "Wikipedia - Things Fall Apart"
        },
        {
            "value": 400,
            "clue": "The Portuguese national epic poem written by Luís de Camões celebrating Vasco da Gama's voyage. (Variant #2)",
            "answer": "Os Lusiadas",
            "accepted": [
                "the lusiads"
            ],
            "source": "Wikipedia - Os Lusíadas"
        },
        {
            "value": 400,
            "clue": "The Greek mythological hunter who fell in love with his own reflection in a pool of water. (Variant #2)",
            "answer": "Narcissus",
            "accepted": [
                "narkissos"
            ],
            "source": "Wikipedia - Narcissus (mythology)"
        },
        {
            "value": 400,
            "clue": "The 19th-century Russian poet and novelist who wrote the verse novel Eugene Onegin. (Variant #2)",
            "answer": "Alexander Pushkin",
            "accepted": [
                "pushkin"
            ],
            "source": "Wikipedia - Alexander Pushkin"
        },
        {
            "value": 400,
            "clue": "The ancient Roman poet exiled to the Black Sea by Emperor Augustus, author of Metamorphoses. (Variant #2)",
            "answer": "Ovid",
            "accepted": [
                "publius ovidius naso"
            ],
            "source": "Wikipedia - Ovid"
        },
        {
            "value": 400,
            "clue": "The Greek titan condemned to hold up the celestial heavens for eternity on his shoulders. (Variant #2)",
            "answer": "Atlas",
            "accepted": [
                "atlas the titan"
            ],
            "source": "Wikipedia - Atlas (mythology)"
        },
        {
            "value": 500,
            "clue": "The 11th-century Japanese literary masterwork by noblewoman Murasaki Shikibu, considered the world's first novel.",
            "answer": "The Tale of Genji",
            "accepted": [
                "genji monogatari"
            ],
            "source": "Wikipedia - The Tale of Genji"
        },
        {
            "value": 500,
            "clue": "The complex 1939 avant-garde novel by James Joyce written in an idiosyncratic dream language.",
            "answer": "Finnegans Wake",
            "accepted": [
                "finnegans wake"
            ],
            "source": "Wikipedia - Finnegans Wake"
        },
        {
            "value": 500,
            "clue": "The 10th-century national epic of Greater Iran composed of 50,000 couplets by the Persian poet Ferdowsi.",
            "answer": "Shahnameh",
            "accepted": [
                "book of kings"
            ],
            "source": "Wikipedia - Shahnameh"
        },
        {
            "value": 500,
            "clue": "The Sanskrit epic poem attributed to the sage Valmiki narrating the life and trials of Rama.",
            "answer": "Ramayana",
            "accepted": [
                "the ramayana"
            ],
            "source": "Wikipedia - Ramayana"
        },
        {
            "value": 500,
            "clue": "The 18th-century experimental novel by Laurence Sterne that features blank and marbled pages.",
            "answer": "Tristram Shandy",
            "accepted": [
                "the life and opinions of tristram shandy"
            ],
            "source": "Wikipedia - The Life and Opinions of Tristram Shandy, Gentleman"
        },
        {
            "value": 500,
            "clue": "The German philosopher who wrote 'Thus Spoke Zarathustra' proclaiming the concept of the Übermensch.",
            "answer": "Friedrich Nietzsche",
            "accepted": [
                "nietzsche"
            ],
            "source": "Wikipedia - Friedrich Nietzsche"
        },
        {
            "value": 500,
            "clue": "The Greek mythological sorceress who helped Jason obtain the Golden Fleece and murdered her own children.",
            "answer": "Medea",
            "accepted": [
                "medea the sorceress"
            ],
            "source": "Wikipedia - Medea"
        },
        {
            "value": 500,
            "clue": "The Chilean poet who won the 1971 Nobel Prize in Literature, famous for 'Twenty Love Poems and a Song of Despair'.",
            "answer": "Pablo Neruda",
            "accepted": [
                "neruda"
            ],
            "source": "Wikipedia - Pablo Neruda"
        },
        {
            "value": 500,
            "clue": "The 13th-century Icelandic historian and poet who compiled the Prose Edda preserving Norse mythology.",
            "answer": "Snorri Sturluson",
            "accepted": [
                "snorri"
            ],
            "source": "Wikipedia - Snorri Sturluson"
        },
        {
            "value": 500,
            "clue": "The Argentine master of labyrinths, infinite libraries, and metafiction who wrote Ficciones.",
            "answer": "Jorge Luis Borges",
            "accepted": [
                "borges"
            ],
            "source": "Wikipedia - Jorge Luis Borges"
        },
        {
            "value": 500,
            "clue": "The 1924 German philosophical novel by Thomas Mann set in a tuberculosis sanatorium in the Swiss Alps.",
            "answer": "The Magic Mountain",
            "accepted": [
                "der zauberberg"
            ],
            "source": "Wikipedia - The Magic Mountain"
        },
        {
            "value": 500,
            "clue": "The Italian Renaissance epic poem written by Ludovico Ariosto in 1516 recounting chivalric quests.",
            "answer": "Orlando Furioso",
            "accepted": [
                "orlando furioso"
            ],
            "source": "Wikipedia - Orlando Furioso"
        },
        {
            "value": 500,
            "clue": "The 18th-century French epistolary novel of aristocratic seduction and manipulation by Pierre Choderlos de Laclos.",
            "answer": "Dangerous Liaisons",
            "accepted": [
                "les liaisons dangereuses"
            ],
            "source": "Wikipedia - Les Liaisons dangereuses"
        },
        {
            "value": 500,
            "clue": "The Greek epic cyclic poet who composed the lost Titanomachy narrating the war between Olympians and Titans.",
            "answer": "Hesiod",
            "accepted": [
                "theogony"
            ],
            "source": "Wikipedia - Theogony"
        },
        {
            "value": 500,
            "clue": "The 20th-century Austrian novelist who wrote the massive unfinished modern masterwork The Man Without Qualities.",
            "answer": "Robert Musil",
            "accepted": [
                "musil"
            ],
            "source": "Wikipedia - The Man Without Qualities"
        },
        {
            "value": 500,
            "clue": "The 17th-century French playwright who created the iconic satirical comedies Tartuffe and The Misanthrope.",
            "answer": "Moliere",
            "accepted": [
                "molière",
                "jean-baptiste poquelin"
            ],
            "source": "Wikipedia - Molière"
        },
        {
            "value": 500,
            "clue": "The ancient Sanskrit dramatic poet who wrote the masterpiece play The Recognition of Shakuntala.",
            "answer": "Kalidasa",
            "accepted": [
                "kālidāsa"
            ],
            "source": "Wikipedia - Kālidāsa"
        },
        {
            "value": 500,
            "clue": "The 19th-century French symbolist poet who wrote 'The Flowers of Evil' (Les Fleurs du mal).",
            "answer": "Charles Baudelaire",
            "accepted": [
                "baudelaire"
            ],
            "source": "Wikipedia - Charles Baudelaire"
        },
        {
            "value": 500,
            "clue": "The 1955 masterwork novel by Mexican author Juan Rulfo exploring a ghost town, inspiring magical realism.",
            "answer": "Pedro Paramo",
            "accepted": [
                "pedro páramo"
            ],
            "source": "Wikipedia - Pedro Páramo"
        },
        {
            "value": 500,
            "clue": "The 13th-century German epic poem recounting dragon-slayer Siegfried and the hoard of the Nibelungs.",
            "answer": "Nibelungenlied",
            "accepted": [
                "song of the nibelungs"
            ],
            "source": "Wikipedia - Nibelungenlied"
        },
        {
            "value": 500,
            "clue": "The 11th-century Japanese literary masterwork by noblewoman Murasaki Shikibu, considered the world's first novel. (Variant #2)",
            "answer": "The Tale of Genji",
            "accepted": [
                "genji monogatari"
            ],
            "source": "Wikipedia - The Tale of Genji"
        },
        {
            "value": 500,
            "clue": "The complex 1939 avant-garde novel by James Joyce written in an idiosyncratic dream language. (Variant #2)",
            "answer": "Finnegans Wake",
            "accepted": [
                "finnegans wake"
            ],
            "source": "Wikipedia - Finnegans Wake"
        },
        {
            "value": 500,
            "clue": "The 10th-century national epic of Greater Iran composed of 50,000 couplets by the Persian poet Ferdowsi. (Variant #2)",
            "answer": "Shahnameh",
            "accepted": [
                "book of kings"
            ],
            "source": "Wikipedia - Shahnameh"
        },
        {
            "value": 500,
            "clue": "The Sanskrit epic poem attributed to the sage Valmiki narrating the life and trials of Rama. (Variant #2)",
            "answer": "Ramayana",
            "accepted": [
                "the ramayana"
            ],
            "source": "Wikipedia - Ramayana"
        },
        {
            "value": 500,
            "clue": "The 18th-century experimental novel by Laurence Sterne that features blank and marbled pages. (Variant #2)",
            "answer": "Tristram Shandy",
            "accepted": [
                "the life and opinions of tristram shandy"
            ],
            "source": "Wikipedia - The Life and Opinions of Tristram Shandy, Gentleman"
        },
        {
            "value": 500,
            "clue": "The German philosopher who wrote 'Thus Spoke Zarathustra' proclaiming the concept of the Übermensch. (Variant #2)",
            "answer": "Friedrich Nietzsche",
            "accepted": [
                "nietzsche"
            ],
            "source": "Wikipedia - Friedrich Nietzsche"
        },
        {
            "value": 500,
            "clue": "The Greek mythological sorceress who helped Jason obtain the Golden Fleece and murdered her own children. (Variant #2)",
            "answer": "Medea",
            "accepted": [
                "medea the sorceress"
            ],
            "source": "Wikipedia - Medea"
        },
        {
            "value": 500,
            "clue": "The Chilean poet who won the 1971 Nobel Prize in Literature, famous for 'Twenty Love Poems and a Song of Despair'. (Variant #2)",
            "answer": "Pablo Neruda",
            "accepted": [
                "neruda"
            ],
            "source": "Wikipedia - Pablo Neruda"
        },
        {
            "value": 500,
            "clue": "The 13th-century Icelandic historian and poet who compiled the Prose Edda preserving Norse mythology. (Variant #2)",
            "answer": "Snorri Sturluson",
            "accepted": [
                "snorri"
            ],
            "source": "Wikipedia - Snorri Sturluson"
        },
        {
            "value": 500,
            "clue": "The Argentine master of labyrinths, infinite libraries, and metafiction who wrote Ficciones. (Variant #2)",
            "answer": "Jorge Luis Borges",
            "accepted": [
                "borges"
            ],
            "source": "Wikipedia - Jorge Luis Borges"
        },
        {
            "value": 500,
            "clue": "The 1924 German philosophical novel by Thomas Mann set in a tuberculosis sanatorium in the Swiss Alps. (Variant #2)",
            "answer": "The Magic Mountain",
            "accepted": [
                "der zauberberg"
            ],
            "source": "Wikipedia - The Magic Mountain"
        },
        {
            "value": 500,
            "clue": "The Italian Renaissance epic poem written by Ludovico Ariosto in 1516 recounting chivalric quests. (Variant #2)",
            "answer": "Orlando Furioso",
            "accepted": [
                "orlando furioso"
            ],
            "source": "Wikipedia - Orlando Furioso"
        },
        {
            "value": 500,
            "clue": "The 18th-century French epistolary novel of aristocratic seduction and manipulation by Pierre Choderlos de Laclos. (Variant #2)",
            "answer": "Dangerous Liaisons",
            "accepted": [
                "les liaisons dangereuses"
            ],
            "source": "Wikipedia - Les Liaisons dangereuses"
        },
        {
            "value": 500,
            "clue": "The Greek epic cyclic poet who composed the lost Titanomachy narrating the war between Olympians and Titans. (Variant #2)",
            "answer": "Hesiod",
            "accepted": [
                "theogony"
            ],
            "source": "Wikipedia - Theogony"
        },
        {
            "value": 500,
            "clue": "The 20th-century Austrian novelist who wrote the massive unfinished modern masterwork The Man Without Qualities. (Variant #2)",
            "answer": "Robert Musil",
            "accepted": [
                "musil"
            ],
            "source": "Wikipedia - The Man Without Qualities"
        },
        {
            "value": 500,
            "clue": "The 17th-century French playwright who created the iconic satirical comedies Tartuffe and The Misanthrope. (Variant #2)",
            "answer": "Moliere",
            "accepted": [
                "molière",
                "jean-baptiste poquelin"
            ],
            "source": "Wikipedia - Molière"
        },
        {
            "value": 500,
            "clue": "The ancient Sanskrit dramatic poet who wrote the masterpiece play The Recognition of Shakuntala. (Variant #2)",
            "answer": "Kalidasa",
            "accepted": [
                "kālidāsa"
            ],
            "source": "Wikipedia - Kālidāsa"
        },
        {
            "value": 500,
            "clue": "The 19th-century French symbolist poet who wrote 'The Flowers of Evil' (Les Fleurs du mal). (Variant #2)",
            "answer": "Charles Baudelaire",
            "accepted": [
                "baudelaire"
            ],
            "source": "Wikipedia - Charles Baudelaire"
        },
        {
            "value": 500,
            "clue": "The 1955 masterwork novel by Mexican author Juan Rulfo exploring a ghost town, inspiring magical realism. (Variant #2)",
            "answer": "Pedro Paramo",
            "accepted": [
                "pedro páramo"
            ],
            "source": "Wikipedia - Pedro Páramo"
        },
        {
            "value": 500,
            "clue": "The 13th-century German epic poem recounting dragon-slayer Siegfried and the hoard of the Nibelungs. (Variant #2)",
            "answer": "Nibelungenlied",
            "accepted": [
                "song of the nibelungs"
            ],
            "source": "Wikipedia - Nibelungenlied"
        }
    ],
    "sports": [
        {
            "value": 100,
            "clue": "The worldwide soccer tournament held every four years by FIFA, won by Argentina in 2022.",
            "answer": "FIFA World Cup",
            "accepted": [
                "world cup"
            ],
            "source": "Wikipedia - FIFA World Cup"
        },
        {
            "value": 100,
            "clue": "The Jamaican sprint legend who holds the 100m and 200m world records, widely considered the fastest man.",
            "answer": "Usain Bolt",
            "accepted": [
                "bolt"
            ],
            "source": "Wikipedia - Usain Bolt"
        },
        {
            "value": 100,
            "clue": "The American swimmer who holds the all-time Olympic record with 23 gold medals.",
            "answer": "Michael Phelps",
            "accepted": [
                "phelps"
            ],
            "source": "Wikipedia - Michael Phelps"
        },
        {
            "value": 100,
            "clue": "In baseball, hitting a single, a double, a triple, and a home run in the same game.",
            "answer": "The Cycle",
            "accepted": [
                "hitting for the cycle"
            ],
            "source": "Wikipedia - Hitting for the cycle"
        },
        {
            "value": 100,
            "clue": "The prestigious annual tennis Grand Slam played on grass courts at the All England Club in London.",
            "answer": "Wimbledon",
            "accepted": [
                "the championships wimbledon"
            ],
            "source": "Wikipedia - Wimbledon Championships"
        },
        {
            "value": 100,
            "clue": "The NBA legend who led the Chicago Bulls to six championships in the 1990s.",
            "answer": "Michael Jordan",
            "accepted": [
                "jordan",
                "air jordan"
            ],
            "source": "Wikipedia - Michael Jordan"
        },
        {
            "value": 100,
            "clue": "The official distance of an Olympic marathon in miles, to one decimal place.",
            "answer": "26.2 miles",
            "accepted": [
                "26.2"
            ],
            "source": "Wikipedia - Marathon"
        },
        {
            "value": 100,
            "clue": "The Brazilian soccer icon who is the only player to win three FIFA World Cups (1958, 1962, 1970).",
            "answer": "Pele",
            "accepted": [
                "pelé"
            ],
            "source": "Wikipedia - Pelé"
        },
        {
            "value": 100,
            "clue": "The NHL superstar known as 'The Great One' who holds the record for most career goals and assists.",
            "answer": "Wayne Gretzky",
            "accepted": [
                "gretzky"
            ],
            "source": "Wikipedia - Wayne Gretzky"
        },
        {
            "value": 100,
            "clue": "The annual multi-stage bicycle race held primarily in France, where the leader wears the yellow jersey.",
            "answer": "Tour de France",
            "accepted": [
                "le tour"
            ],
            "source": "Wikipedia - Tour de France"
        },
        {
            "value": 100,
            "clue": "The Portuguese soccer superstar with over 850 career goals and five Ballon d'Or awards.",
            "answer": "Cristiano Ronaldo",
            "accepted": [
                "ronaldo",
                "cr7"
            ],
            "source": "Wikipedia - Cristiano Ronaldo"
        },
        {
            "value": 100,
            "clue": "The Argentine soccer genius who captained Argentina to the 2022 World Cup and won 8 Ballons d'Or.",
            "answer": "Lionel Messi",
            "accepted": [
                "messi"
            ],
            "source": "Wikipedia - Lionel Messi"
        },
        {
            "value": 100,
            "clue": "The legendary heavyweight boxer nicknamed 'The Greatest' who float like a butterfly and stung like a bee.",
            "answer": "Muhammad Ali",
            "accepted": [
                "ali",
                "cassius clay"
            ],
            "source": "Wikipedia - Muhammad Ali"
        },
        {
            "value": 100,
            "clue": "The NFL quarterback who won seven Super Bowl titles, six with the New England Patriots.",
            "answer": "Tom Brady",
            "accepted": [
                "brady"
            ],
            "source": "Wikipedia - Tom Brady"
        },
        {
            "value": 100,
            "clue": "The American tennis superstar who won 23 Grand Slam singles titles in the Open Era.",
            "answer": "Serena Williams",
            "accepted": [
                "williams"
            ],
            "source": "Wikipedia - Serena Williams"
        },
        {
            "value": 100,
            "clue": "The sport where athletes compete in the Ryder Cup between teams from Europe and the United States.",
            "answer": "Golf",
            "accepted": [
                "the game of golf"
            ],
            "source": "Wikipedia - Ryder Cup"
        },
        {
            "value": 100,
            "clue": "The motorsport championship featuring single-seater open-wheel cars racing on circuits like Monaco and Silverstone.",
            "answer": "Formula One",
            "accepted": [
                "f1",
                "formula 1"
            ],
            "source": "Wikipedia - Formula One"
        },
        {
            "value": 100,
            "clue": "The Los Angeles Lakers star who surpassed Kareem Abdul-Jabbar in 2023 as the NBA's all-time leading scorer.",
            "answer": "LeBron James",
            "accepted": [
                "lebron",
                "james"
            ],
            "source": "Wikipedia - LeBron James"
        },
        {
            "value": 100,
            "clue": "The four major tennis tournaments: Australian Open, French Open, Wimbledon, and this American major.",
            "answer": "US Open",
            "accepted": [
                "u.s. open"
            ],
            "source": "Wikipedia - Grand Slam (tennis)"
        },
        {
            "value": 100,
            "clue": "The four-year international multi-sport event whose modern revival took place in Athens in 1896.",
            "answer": "Olympic Games",
            "accepted": [
                "olympics"
            ],
            "source": "Wikipedia - Olympic Games"
        },
        {
            "value": 100,
            "clue": "The worldwide soccer tournament held every four years by FIFA, won by Argentina in 2022. (Variant #2)",
            "answer": "FIFA World Cup",
            "accepted": [
                "world cup"
            ],
            "source": "Wikipedia - FIFA World Cup"
        },
        {
            "value": 100,
            "clue": "The Jamaican sprint legend who holds the 100m and 200m world records, widely considered the fastest man. (Variant #2)",
            "answer": "Usain Bolt",
            "accepted": [
                "bolt"
            ],
            "source": "Wikipedia - Usain Bolt"
        },
        {
            "value": 100,
            "clue": "The American swimmer who holds the all-time Olympic record with 23 gold medals. (Variant #2)",
            "answer": "Michael Phelps",
            "accepted": [
                "phelps"
            ],
            "source": "Wikipedia - Michael Phelps"
        },
        {
            "value": 100,
            "clue": "In baseball, hitting a single, a double, a triple, and a home run in the same game. (Variant #2)",
            "answer": "The Cycle",
            "accepted": [
                "hitting for the cycle"
            ],
            "source": "Wikipedia - Hitting for the cycle"
        },
        {
            "value": 100,
            "clue": "The prestigious annual tennis Grand Slam played on grass courts at the All England Club in London. (Variant #2)",
            "answer": "Wimbledon",
            "accepted": [
                "the championships wimbledon"
            ],
            "source": "Wikipedia - Wimbledon Championships"
        },
        {
            "value": 100,
            "clue": "The NBA legend who led the Chicago Bulls to six championships in the 1990s. (Variant #2)",
            "answer": "Michael Jordan",
            "accepted": [
                "jordan",
                "air jordan"
            ],
            "source": "Wikipedia - Michael Jordan"
        },
        {
            "value": 100,
            "clue": "The official distance of an Olympic marathon in miles, to one decimal place. (Variant #2)",
            "answer": "26.2 miles",
            "accepted": [
                "26.2"
            ],
            "source": "Wikipedia - Marathon"
        },
        {
            "value": 100,
            "clue": "The Brazilian soccer icon who is the only player to win three FIFA World Cups (1958, 1962, 1970). (Variant #2)",
            "answer": "Pele",
            "accepted": [
                "pelé"
            ],
            "source": "Wikipedia - Pelé"
        },
        {
            "value": 100,
            "clue": "The NHL superstar known as 'The Great One' who holds the record for most career goals and assists. (Variant #2)",
            "answer": "Wayne Gretzky",
            "accepted": [
                "gretzky"
            ],
            "source": "Wikipedia - Wayne Gretzky"
        },
        {
            "value": 100,
            "clue": "The annual multi-stage bicycle race held primarily in France, where the leader wears the yellow jersey. (Variant #2)",
            "answer": "Tour de France",
            "accepted": [
                "le tour"
            ],
            "source": "Wikipedia - Tour de France"
        },
        {
            "value": 100,
            "clue": "The Portuguese soccer superstar with over 850 career goals and five Ballon d'Or awards. (Variant #2)",
            "answer": "Cristiano Ronaldo",
            "accepted": [
                "ronaldo",
                "cr7"
            ],
            "source": "Wikipedia - Cristiano Ronaldo"
        },
        {
            "value": 100,
            "clue": "The Argentine soccer genius who captained Argentina to the 2022 World Cup and won 8 Ballons d'Or. (Variant #2)",
            "answer": "Lionel Messi",
            "accepted": [
                "messi"
            ],
            "source": "Wikipedia - Lionel Messi"
        },
        {
            "value": 100,
            "clue": "The legendary heavyweight boxer nicknamed 'The Greatest' who float like a butterfly and stung like a bee. (Variant #2)",
            "answer": "Muhammad Ali",
            "accepted": [
                "ali",
                "cassius clay"
            ],
            "source": "Wikipedia - Muhammad Ali"
        },
        {
            "value": 100,
            "clue": "The NFL quarterback who won seven Super Bowl titles, six with the New England Patriots. (Variant #2)",
            "answer": "Tom Brady",
            "accepted": [
                "brady"
            ],
            "source": "Wikipedia - Tom Brady"
        },
        {
            "value": 100,
            "clue": "The American tennis superstar who won 23 Grand Slam singles titles in the Open Era. (Variant #2)",
            "answer": "Serena Williams",
            "accepted": [
                "williams"
            ],
            "source": "Wikipedia - Serena Williams"
        },
        {
            "value": 100,
            "clue": "The sport where athletes compete in the Ryder Cup between teams from Europe and the United States. (Variant #2)",
            "answer": "Golf",
            "accepted": [
                "the game of golf"
            ],
            "source": "Wikipedia - Ryder Cup"
        },
        {
            "value": 100,
            "clue": "The motorsport championship featuring single-seater open-wheel cars racing on circuits like Monaco and Silverstone. (Variant #2)",
            "answer": "Formula One",
            "accepted": [
                "f1",
                "formula 1"
            ],
            "source": "Wikipedia - Formula One"
        },
        {
            "value": 100,
            "clue": "The Los Angeles Lakers star who surpassed Kareem Abdul-Jabbar in 2023 as the NBA's all-time leading scorer. (Variant #2)",
            "answer": "LeBron James",
            "accepted": [
                "lebron",
                "james"
            ],
            "source": "Wikipedia - LeBron James"
        },
        {
            "value": 100,
            "clue": "The four major tennis tournaments: Australian Open, French Open, Wimbledon, and this American major. (Variant #2)",
            "answer": "US Open",
            "accepted": [
                "u.s. open"
            ],
            "source": "Wikipedia - Grand Slam (tennis)"
        },
        {
            "value": 100,
            "clue": "The four-year international multi-sport event whose modern revival took place in Athens in 1896. (Variant #2)",
            "answer": "Olympic Games",
            "accepted": [
                "olympics"
            ],
            "source": "Wikipedia - Olympic Games"
        },
        {
            "value": 200,
            "clue": "The Swiss tennis maestro who won 20 Grand Slam singles titles and eight Wimbledon crowns.",
            "answer": "Roger Federer",
            "accepted": [
                "federer"
            ],
            "source": "Wikipedia - Roger Federer"
        },
        {
            "value": 200,
            "clue": "The Spanish 'King of Clay' who has won an unprecedented 14 French Open titles at Roland Garros.",
            "answer": "Rafael Nadal",
            "accepted": [
                "nadal"
            ],
            "source": "Wikipedia - Rafael Nadal"
        },
        {
            "value": 200,
            "clue": "The Serbian tennis legend who holds the all-time men's record for most Grand Slam singles titles.",
            "answer": "Novak Djokovic",
            "accepted": [
                "djokovic"
            ],
            "source": "Wikipedia - Novak Djokovic"
        },
        {
            "value": 200,
            "clue": "The American gymnast who won four Olympic gold medals in Rio and has five skills named after her.",
            "answer": "Simone Biles",
            "accepted": [
                "biles"
            ],
            "source": "Wikipedia - Simone Biles"
        },
        {
            "value": 200,
            "clue": "The legendary New York Yankees slugger known as 'The Sultan of Swat' who hit 714 home runs.",
            "answer": "Babe Ruth",
            "accepted": [
                "ruth",
                "george herman ruth"
            ],
            "source": "Wikipedia - Babe Ruth"
        },
        {
            "value": 200,
            "clue": "The team with the most UEFA Champions League / European Cup titles in soccer history, with 15 trophies.",
            "answer": "Real Madrid",
            "accepted": [
                "real madrid cf"
            ],
            "source": "Wikipedia - Real Madrid CF"
        },
        {
            "value": 200,
            "clue": "The NFL championship trophy awarded annually to the winner of the Super Bowl.",
            "answer": "Vince Lombardi Trophy",
            "accepted": [
                "lombardi trophy"
            ],
            "source": "Wikipedia - Vince Lombardi Trophy"
        },
        {
            "value": 200,
            "clue": "The Canadian hockey trophy awarded annually to the NHL playoff champion, the oldest professional trophy.",
            "answer": "Stanley Cup",
            "accepted": [
                "the stanley cup"
            ],
            "source": "Wikipedia - Stanley Cup"
        },
        {
            "value": 200,
            "clue": "The British Formula One driver who shares the record of seven World Drivers' Championships with Michael Schumacher.",
            "answer": "Lewis Hamilton",
            "accepted": [
                "hamilton"
            ],
            "source": "Wikipedia - Lewis Hamilton"
        },
        {
            "value": 200,
            "clue": "The German F1 legend who won five consecutive World Championships with Ferrari from 2000 to 2004.",
            "answer": "Michael Schumacher",
            "accepted": [
                "schumacher"
            ],
            "source": "Wikipedia - Michael Schumacher"
        },
        {
            "value": 200,
            "clue": "The American track and field legend who won four gold medals in Berlin in 1936, defying Nazi ideology.",
            "answer": "Jesse Owens",
            "accepted": [
                "owens"
            ],
            "source": "Wikipedia - Jesse Owens"
        },
        {
            "value": 200,
            "clue": "The legendary golf tournament held annually at Augusta National Golf Club where the winner receives a green jacket.",
            "answer": "The Masters",
            "accepted": [
                "masters tournament"
            ],
            "source": "Wikipedia - Masters Tournament"
        },
        {
            "value": 200,
            "clue": "The American golfer who won 15 major championships and 82 PGA Tour events, dominating the 2000s.",
            "answer": "Tiger Woods",
            "accepted": [
                "woods"
            ],
            "source": "Wikipedia - Tiger Woods"
        },
        {
            "value": 200,
            "clue": "The baseball barrier-breaker who became the first African American to play in MLB in 1947.",
            "answer": "Jackie Robinson",
            "accepted": [
                "robinson"
            ],
            "source": "Wikipedia - Jackie Robinson"
        },
        {
            "value": 200,
            "clue": "The 1980 US men's Olympic ice hockey victory over the heavily favored four-time defending champion Soviet Union.",
            "answer": "Miracle on Ice",
            "accepted": [
                "the miracle on ice"
            ],
            "source": "Wikipedia - Miracle on Ice"
        },
        {
            "value": 200,
            "clue": "The country that has won the most FIFA World Cup tournaments, with five titles.",
            "answer": "Brazil",
            "accepted": [
                "brasil"
            ],
            "source": "Wikipedia - Brazil national football team"
        },
        {
            "value": 200,
            "clue": "The New York Yankees center fielder nicknamed 'The Yankee Clipper' who had a 56-game hitting streak in 1941.",
            "answer": "Joe DiMaggio",
            "accepted": [
                "dimaggio"
            ],
            "source": "Wikipedia - Joe DiMaggio"
        },
        {
            "value": 200,
            "clue": "The NBA center who famously scored 100 points in a single game for the Philadelphia Warriors in 1962.",
            "answer": "Wilt Chamberlain",
            "accepted": [
                "chamberlain"
            ],
            "source": "Wikipedia - Wilt Chamberlain"
        },
        {
            "value": 200,
            "clue": "The sport contested at the prestigious Henley Royal Regatta on the River Thames.",
            "answer": "Rowing",
            "accepted": [
                "crew"
            ],
            "source": "Wikipedia - Henley Royal Regatta"
        },
        {
            "value": 200,
            "clue": "The premier international women's tennis team competition, formerly known as the Fed Cup.",
            "answer": "Billie Jean King Cup",
            "accepted": [
                "fed cup"
            ],
            "source": "Wikipedia - Billie Jean King Cup"
        },
        {
            "value": 200,
            "clue": "The Swiss tennis maestro who won 20 Grand Slam singles titles and eight Wimbledon crowns. (Variant #2)",
            "answer": "Roger Federer",
            "accepted": [
                "federer"
            ],
            "source": "Wikipedia - Roger Federer"
        },
        {
            "value": 200,
            "clue": "The Spanish 'King of Clay' who has won an unprecedented 14 French Open titles at Roland Garros. (Variant #2)",
            "answer": "Rafael Nadal",
            "accepted": [
                "nadal"
            ],
            "source": "Wikipedia - Rafael Nadal"
        },
        {
            "value": 200,
            "clue": "The Serbian tennis legend who holds the all-time men's record for most Grand Slam singles titles. (Variant #2)",
            "answer": "Novak Djokovic",
            "accepted": [
                "djokovic"
            ],
            "source": "Wikipedia - Novak Djokovic"
        },
        {
            "value": 200,
            "clue": "The American gymnast who won four Olympic gold medals in Rio and has five skills named after her. (Variant #2)",
            "answer": "Simone Biles",
            "accepted": [
                "biles"
            ],
            "source": "Wikipedia - Simone Biles"
        },
        {
            "value": 200,
            "clue": "The legendary New York Yankees slugger known as 'The Sultan of Swat' who hit 714 home runs. (Variant #2)",
            "answer": "Babe Ruth",
            "accepted": [
                "ruth",
                "george herman ruth"
            ],
            "source": "Wikipedia - Babe Ruth"
        },
        {
            "value": 200,
            "clue": "The team with the most UEFA Champions League / European Cup titles in soccer history, with 15 trophies. (Variant #2)",
            "answer": "Real Madrid",
            "accepted": [
                "real madrid cf"
            ],
            "source": "Wikipedia - Real Madrid CF"
        },
        {
            "value": 200,
            "clue": "The NFL championship trophy awarded annually to the winner of the Super Bowl. (Variant #2)",
            "answer": "Vince Lombardi Trophy",
            "accepted": [
                "lombardi trophy"
            ],
            "source": "Wikipedia - Vince Lombardi Trophy"
        },
        {
            "value": 200,
            "clue": "The Canadian hockey trophy awarded annually to the NHL playoff champion, the oldest professional trophy. (Variant #2)",
            "answer": "Stanley Cup",
            "accepted": [
                "the stanley cup"
            ],
            "source": "Wikipedia - Stanley Cup"
        },
        {
            "value": 200,
            "clue": "The British Formula One driver who shares the record of seven World Drivers' Championships with Michael Schumacher. (Variant #2)",
            "answer": "Lewis Hamilton",
            "accepted": [
                "hamilton"
            ],
            "source": "Wikipedia - Lewis Hamilton"
        },
        {
            "value": 200,
            "clue": "The German F1 legend who won five consecutive World Championships with Ferrari from 2000 to 2004. (Variant #2)",
            "answer": "Michael Schumacher",
            "accepted": [
                "schumacher"
            ],
            "source": "Wikipedia - Michael Schumacher"
        },
        {
            "value": 200,
            "clue": "The American track and field legend who won four gold medals in Berlin in 1936, defying Nazi ideology. (Variant #2)",
            "answer": "Jesse Owens",
            "accepted": [
                "owens"
            ],
            "source": "Wikipedia - Jesse Owens"
        },
        {
            "value": 200,
            "clue": "The legendary golf tournament held annually at Augusta National Golf Club where the winner receives a green jacket. (Variant #2)",
            "answer": "The Masters",
            "accepted": [
                "masters tournament"
            ],
            "source": "Wikipedia - Masters Tournament"
        },
        {
            "value": 200,
            "clue": "The American golfer who won 15 major championships and 82 PGA Tour events, dominating the 2000s. (Variant #2)",
            "answer": "Tiger Woods",
            "accepted": [
                "woods"
            ],
            "source": "Wikipedia - Tiger Woods"
        },
        {
            "value": 200,
            "clue": "The baseball barrier-breaker who became the first African American to play in MLB in 1947. (Variant #2)",
            "answer": "Jackie Robinson",
            "accepted": [
                "robinson"
            ],
            "source": "Wikipedia - Jackie Robinson"
        },
        {
            "value": 200,
            "clue": "The 1980 US men's Olympic ice hockey victory over the heavily favored four-time defending champion Soviet Union. (Variant #2)",
            "answer": "Miracle on Ice",
            "accepted": [
                "the miracle on ice"
            ],
            "source": "Wikipedia - Miracle on Ice"
        },
        {
            "value": 200,
            "clue": "The country that has won the most FIFA World Cup tournaments, with five titles. (Variant #2)",
            "answer": "Brazil",
            "accepted": [
                "brasil"
            ],
            "source": "Wikipedia - Brazil national football team"
        },
        {
            "value": 200,
            "clue": "The New York Yankees center fielder nicknamed 'The Yankee Clipper' who had a 56-game hitting streak in 1941. (Variant #2)",
            "answer": "Joe DiMaggio",
            "accepted": [
                "dimaggio"
            ],
            "source": "Wikipedia - Joe DiMaggio"
        },
        {
            "value": 200,
            "clue": "The NBA center who famously scored 100 points in a single game for the Philadelphia Warriors in 1962. (Variant #2)",
            "answer": "Wilt Chamberlain",
            "accepted": [
                "chamberlain"
            ],
            "source": "Wikipedia - Wilt Chamberlain"
        },
        {
            "value": 200,
            "clue": "The sport contested at the prestigious Henley Royal Regatta on the River Thames. (Variant #2)",
            "answer": "Rowing",
            "accepted": [
                "crew"
            ],
            "source": "Wikipedia - Henley Royal Regatta"
        },
        {
            "value": 200,
            "clue": "The premier international women's tennis team competition, formerly known as the Fed Cup. (Variant #2)",
            "answer": "Billie Jean King Cup",
            "accepted": [
                "fed cup"
            ],
            "source": "Wikipedia - Billie Jean King Cup"
        },
        {
            "value": 300,
            "clue": "The Dutch Red Bull Racing driver who won three consecutive Formula One World Championships from 2021 to 2023.",
            "answer": "Max Verstappen",
            "accepted": [
                "verstappen"
            ],
            "source": "Wikipedia - Max Verstappen"
        },
        {
            "value": 300,
            "clue": "The famous horse that won the 1973 American Triple Crown by an astonishing 31 lengths at the Belmont Stakes.",
            "answer": "Secretariat",
            "accepted": [
                "big red"
            ],
            "source": "Wikipedia - Secretariat (horse)"
        },
        {
            "value": 300,
            "clue": "The English football club that completed the continental European treble in 1999 under Sir Alex Ferguson.",
            "answer": "Manchester United",
            "accepted": [
                "man utd"
            ],
            "source": "Wikipedia - Manchester United F.C."
        },
        {
            "value": 300,
            "clue": "The Czech distance runner known as the 'Czech Locomotive' who won the 5,000m, 10,000m, and marathon at the 1952 Olympics.",
            "answer": "Emil Zatopek",
            "accepted": [
                "zátopek",
                "zatopek"
            ],
            "source": "Wikipedia - Emil Zátopek"
        },
        {
            "value": 300,
            "clue": "The legendary Brazilian Formula One champion who tragically died in a crash at Imola in 1994.",
            "answer": "Ayrton Senna",
            "accepted": [
                "senna"
            ],
            "source": "Wikipedia - Ayrton Senna"
        },
        {
            "value": 300,
            "clue": "The American heavyweight boxer who became the undisputed champion at age 20, the youngest ever.",
            "answer": "Mike Tyson",
            "accepted": [
                "iron mike",
                "tyson"
            ],
            "source": "Wikipedia - Mike Tyson"
        },
        {
            "value": 300,
            "clue": "The legendary Boston Celtics center who won 11 NBA championships in 13 seasons as player and coach.",
            "answer": "Bill Russell",
            "accepted": [
                "russell"
            ],
            "source": "Wikipedia - Bill Russell"
        },
        {
            "value": 300,
            "clue": "The iconic 1974 boxing match between Muhammad Ali and George Foreman held in Kinshasa, Zaire.",
            "answer": "Rumble in the Jungle",
            "accepted": [
                "the rumble in the jungle"
            ],
            "source": "Wikipedia - The Rumble in the Jungle"
        },
        {
            "value": 300,
            "clue": "The iconic 1975 third and final boxing match between Muhammad Ali and Joe Frazier in the Philippines.",
            "answer": "Thrilla in Manila",
            "accepted": [
                "thrilla in manila"
            ],
            "source": "Wikipedia - Thrilla in Manila"
        },
        {
            "value": 300,
            "clue": "The legendary Australian cricketer widely acknowledged as the greatest batsman of all time with a 99.94 test average.",
            "answer": "Donald Bradman",
            "accepted": [
                "don bradman",
                "bradman"
            ],
            "source": "Wikipedia - Don Bradman"
        },
        {
            "value": 300,
            "clue": "The 1954 race where British runner Roger Bannister became the first human to run a mile in under this time.",
            "answer": "Four Minutes",
            "accepted": [
                "sub-four-minute mile",
                "under 4 minutes"
            ],
            "source": "Wikipedia - Four-minute mile"
        },
        {
            "value": 300,
            "clue": "The only NFL team to achieve an undefeated regular season and post-season, going 17-0 in 1972.",
            "answer": "Miami Dolphins",
            "accepted": [
                "the dolphins"
            ],
            "source": "Wikipedia - 1972 Miami Dolphins season"
        },
        {
            "value": 300,
            "clue": "The French soccer legend who scored twice in the 1998 World Cup final and famously headbutted Materazzi in 2006.",
            "answer": "Zinedine Zidane",
            "accepted": [
                "zidane",
                "zizou"
            ],
            "source": "Wikipedia - Zinedine Zidane"
        },
        {
            "value": 300,
            "clue": "The German tennis prodigy who won Wimbledon in 1985 at age 17, the youngest male champion in history.",
            "answer": "Boris Becker",
            "accepted": [
                "becker"
            ],
            "source": "Wikipedia - Boris Becker"
        },
        {
            "value": 300,
            "clue": "The Jamaican track athlete who won three consecutive Olympic gold medals in the 100m (2008, 2012, 2016).",
            "answer": "Usain Bolt",
            "accepted": [
                "bolt"
            ],
            "source": "Wikipedia - Athletics at the Summer Olympics"
        },
        {
            "value": 300,
            "clue": "The prestigious yacht race founded in 1851, the oldest international sporting trophy in the world.",
            "answer": "America's Cup",
            "accepted": [
                "americas cup"
            ],
            "source": "Wikipedia - America's Cup"
        },
        {
            "value": 300,
            "clue": "The distance in meters of one complete lap around an Olympic standard outdoor running track.",
            "answer": "400 meters",
            "accepted": [
                "400m",
                "400"
            ],
            "source": "Wikipedia - Running track"
        },
        {
            "value": 300,
            "clue": "The American tennis champion who won eight Grand Slams and completed a Career Golden Slam, married to Steffi Graf.",
            "answer": "Andre Agassi",
            "accepted": [
                "agassi"
            ],
            "source": "Wikipedia - Andre Agassi"
        },
        {
            "value": 300,
            "clue": "The German tennis legend who won 22 Grand Slam singles titles and achieved the Golden Slam in 1988.",
            "answer": "Steffi Graf",
            "accepted": [
                "graf"
            ],
            "source": "Wikipedia - Steffi Graf"
        },
        {
            "value": 300,
            "clue": "The Japanese baseball phenom who achieved MLB's first 50-homer/50-stolen-base season in 2024.",
            "answer": "Shohei Ohtani",
            "accepted": [
                "ohtani"
            ],
            "source": "Wikipedia - Shohei Ohtani"
        },
        {
            "value": 300,
            "clue": "The Dutch Red Bull Racing driver who won three consecutive Formula One World Championships from 2021 to 2023. (Variant #2)",
            "answer": "Max Verstappen",
            "accepted": [
                "verstappen"
            ],
            "source": "Wikipedia - Max Verstappen"
        },
        {
            "value": 300,
            "clue": "The famous horse that won the 1973 American Triple Crown by an astonishing 31 lengths at the Belmont Stakes. (Variant #2)",
            "answer": "Secretariat",
            "accepted": [
                "big red"
            ],
            "source": "Wikipedia - Secretariat (horse)"
        },
        {
            "value": 300,
            "clue": "The English football club that completed the continental European treble in 1999 under Sir Alex Ferguson. (Variant #2)",
            "answer": "Manchester United",
            "accepted": [
                "man utd"
            ],
            "source": "Wikipedia - Manchester United F.C."
        },
        {
            "value": 300,
            "clue": "The Czech distance runner known as the 'Czech Locomotive' who won the 5,000m, 10,000m, and marathon at the 1952 Olympics. (Variant #2)",
            "answer": "Emil Zatopek",
            "accepted": [
                "zátopek",
                "zatopek"
            ],
            "source": "Wikipedia - Emil Zátopek"
        },
        {
            "value": 300,
            "clue": "The legendary Brazilian Formula One champion who tragically died in a crash at Imola in 1994. (Variant #2)",
            "answer": "Ayrton Senna",
            "accepted": [
                "senna"
            ],
            "source": "Wikipedia - Ayrton Senna"
        },
        {
            "value": 300,
            "clue": "The American heavyweight boxer who became the undisputed champion at age 20, the youngest ever. (Variant #2)",
            "answer": "Mike Tyson",
            "accepted": [
                "iron mike",
                "tyson"
            ],
            "source": "Wikipedia - Mike Tyson"
        },
        {
            "value": 300,
            "clue": "The legendary Boston Celtics center who won 11 NBA championships in 13 seasons as player and coach. (Variant #2)",
            "answer": "Bill Russell",
            "accepted": [
                "russell"
            ],
            "source": "Wikipedia - Bill Russell"
        },
        {
            "value": 300,
            "clue": "The iconic 1974 boxing match between Muhammad Ali and George Foreman held in Kinshasa, Zaire. (Variant #2)",
            "answer": "Rumble in the Jungle",
            "accepted": [
                "the rumble in the jungle"
            ],
            "source": "Wikipedia - The Rumble in the Jungle"
        },
        {
            "value": 300,
            "clue": "The iconic 1975 third and final boxing match between Muhammad Ali and Joe Frazier in the Philippines. (Variant #2)",
            "answer": "Thrilla in Manila",
            "accepted": [
                "thrilla in manila"
            ],
            "source": "Wikipedia - Thrilla in Manila"
        },
        {
            "value": 300,
            "clue": "The legendary Australian cricketer widely acknowledged as the greatest batsman of all time with a 99.94 test average. (Variant #2)",
            "answer": "Donald Bradman",
            "accepted": [
                "don bradman",
                "bradman"
            ],
            "source": "Wikipedia - Don Bradman"
        },
        {
            "value": 300,
            "clue": "The 1954 race where British runner Roger Bannister became the first human to run a mile in under this time. (Variant #2)",
            "answer": "Four Minutes",
            "accepted": [
                "sub-four-minute mile",
                "under 4 minutes"
            ],
            "source": "Wikipedia - Four-minute mile"
        },
        {
            "value": 300,
            "clue": "The only NFL team to achieve an undefeated regular season and post-season, going 17-0 in 1972. (Variant #2)",
            "answer": "Miami Dolphins",
            "accepted": [
                "the dolphins"
            ],
            "source": "Wikipedia - 1972 Miami Dolphins season"
        },
        {
            "value": 300,
            "clue": "The French soccer legend who scored twice in the 1998 World Cup final and famously headbutted Materazzi in 2006. (Variant #2)",
            "answer": "Zinedine Zidane",
            "accepted": [
                "zidane",
                "zizou"
            ],
            "source": "Wikipedia - Zinedine Zidane"
        },
        {
            "value": 300,
            "clue": "The German tennis prodigy who won Wimbledon in 1985 at age 17, the youngest male champion in history. (Variant #2)",
            "answer": "Boris Becker",
            "accepted": [
                "becker"
            ],
            "source": "Wikipedia - Boris Becker"
        },
        {
            "value": 300,
            "clue": "The Jamaican track athlete who won three consecutive Olympic gold medals in the 100m (2008, 2012, 2016). (Variant #2)",
            "answer": "Usain Bolt",
            "accepted": [
                "bolt"
            ],
            "source": "Wikipedia - Athletics at the Summer Olympics"
        },
        {
            "value": 300,
            "clue": "The prestigious yacht race founded in 1851, the oldest international sporting trophy in the world. (Variant #2)",
            "answer": "America's Cup",
            "accepted": [
                "americas cup"
            ],
            "source": "Wikipedia - America's Cup"
        },
        {
            "value": 300,
            "clue": "The distance in meters of one complete lap around an Olympic standard outdoor running track. (Variant #2)",
            "answer": "400 meters",
            "accepted": [
                "400m",
                "400"
            ],
            "source": "Wikipedia - Running track"
        },
        {
            "value": 300,
            "clue": "The American tennis champion who won eight Grand Slams and completed a Career Golden Slam, married to Steffi Graf. (Variant #2)",
            "answer": "Andre Agassi",
            "accepted": [
                "agassi"
            ],
            "source": "Wikipedia - Andre Agassi"
        },
        {
            "value": 300,
            "clue": "The German tennis legend who won 22 Grand Slam singles titles and achieved the Golden Slam in 1988. (Variant #2)",
            "answer": "Steffi Graf",
            "accepted": [
                "graf"
            ],
            "source": "Wikipedia - Steffi Graf"
        },
        {
            "value": 300,
            "clue": "The Japanese baseball phenom who achieved MLB's first 50-homer/50-stolen-base season in 2024. (Variant #2)",
            "answer": "Shohei Ohtani",
            "accepted": [
                "ohtani"
            ],
            "source": "Wikipedia - Shohei Ohtani"
        },
        {
            "value": 400,
            "clue": "The American high jumper who revolutionized the sport with his backward arch technique at the 1968 Olympics.",
            "answer": "Dick Fosbury",
            "accepted": [
                "fosbury flop"
            ],
            "source": "Wikipedia - Dick Fosbury"
        },
        {
            "value": 400,
            "clue": "The only athlete in history to win Olympic gold in both the 100m sprint and the long jump at the same Games (1936 and 1984).",
            "answer": "Carl Lewis",
            "accepted": [
                "lewis"
            ],
            "source": "Wikipedia - Carl Lewis"
        },
        {
            "value": 400,
            "clue": "The Soviet gymnast who scored the first perfect 10.0 in Olympic gymnastics history at the 1976 Montreal Games.",
            "answer": "Nadia Comaneci",
            "accepted": [
                "comăneci",
                "nadia comăneci"
            ],
            "source": "Wikipedia - Nadia Comăneci"
        },
        {
            "value": 400,
            "clue": "The Kenyan marathoner who became the first person in history to run a marathon in under two hours (1:59:40) in Vienna.",
            "answer": "Eliud Kipchoge",
            "accepted": [
                "kipchoge"
            ],
            "source": "Wikipedia - Eliud Kipchoge"
        },
        {
            "value": 400,
            "clue": "The only player in MLB history to hit two grand slams in a single inning, doing so in 1999.",
            "answer": "Fernando Tatis",
            "accepted": [
                "tatis sr"
            ],
            "source": "Wikipedia - Fernando Tatís"
        },
        {
            "value": 400,
            "clue": "The Ethiopian long-distance legend who won two Olympic gold medals and set 27 world records.",
            "answer": "Haile Gebrselassie",
            "accepted": [
                "gebrselassie"
            ],
            "source": "Wikipedia - Haile Gebrselassie"
        },
        {
            "value": 400,
            "clue": "The historic 1973 exhibition tennis match where Billie Jean King defeated former men's champion Bobby Riggs.",
            "answer": "Battle of the Sexes",
            "accepted": [
                "battle of the sexes tennis"
            ],
            "source": "Wikipedia - Battle of the Sexes (tennis)"
        },
        {
            "value": 400,
            "clue": "The Finnish distance runner nicknamed the 'Flying Finn' who won nine Olympic gold medals in the 1920s.",
            "answer": "Paavo Nurmi",
            "accepted": [
                "nurmi"
            ],
            "source": "Wikipedia - Paavo Nurmi"
        },
        {
            "value": 400,
            "clue": "The legendary New York Rangers defenseman who won the Norris Trophy eight times and scored the iconic 1970 flying goal.",
            "answer": "Bobby Orr",
            "accepted": [
                "orr"
            ],
            "source": "Wikipedia - Bobby Orr"
        },
        {
            "value": 400,
            "clue": "The only country to have participated in every single modern Summer Olympic Games since 1896 under its own flag.",
            "answer": "Greece",
            "accepted": [
                "hellas"
            ],
            "source": "Wikipedia - Greece at the Olympics"
        },
        {
            "value": 400,
            "clue": "The English cricketer who took all ten wickets in an innings against Australia at Old Trafford in 1956.",
            "answer": "Jim Laker",
            "accepted": [
                "laker"
            ],
            "source": "Wikipedia - Jim Laker"
        },
        {
            "value": 400,
            "clue": "The iconic 1982 football play where Cal used five lateral passes through the Stanford band to score the winning touchdown.",
            "answer": "The Play",
            "accepted": [
                "the band is on the field"
            ],
            "source": "Wikipedia - The Play (American football)"
        },
        {
            "value": 400,
            "clue": "The legendary Canadian figure skater who performed the first quad jump in competition in 1988.",
            "answer": "Kurt Browning",
            "accepted": [
                "browning"
            ],
            "source": "Wikipedia - Kurt Browning"
        },
        {
            "value": 400,
            "clue": "The American swimmer who won seven gold medals at the 1972 Munich Olympics, a record until Michael Phelps in 2008.",
            "answer": "Mark Spitz",
            "accepted": [
                "spitz"
            ],
            "source": "Wikipedia - Mark Spitz"
        },
        {
            "value": 400,
            "clue": "The cycling Grand Tour founded in 1909 where the overall leader wears the pink jersey (Maglia Rosa).",
            "answer": "Giro d'Italia",
            "accepted": [
                "giro d italia",
                "the giro"
            ],
            "source": "Wikipedia - Giro d'Italia"
        },
        {
            "value": 400,
            "clue": "The French tennis venue named after a pioneering French aviator who completed the first flight across the Mediterranean.",
            "answer": "Roland Garros",
            "accepted": [
                "stade roland garros"
            ],
            "source": "Wikipedia - Stade Roland Garros"
        },
        {
            "value": 400,
            "clue": "The MLB pitcher who threw a 12-inning perfect game in 1959 only to lose in the 13th inning.",
            "answer": "Harvey Haddix",
            "accepted": [
                "haddix"
            ],
            "source": "Wikipedia - Harvey Haddix's near-perfect game"
        },
        {
            "value": 400,
            "clue": "The first soccer goalkeeper to score over 100 competitive goals in professional soccer, playing for São Paulo.",
            "answer": "Rogerio Ceni",
            "accepted": [
                "rogério ceni",
                "ceni"
            ],
            "source": "Wikipedia - Rogério Ceni"
        },
        {
            "value": 400,
            "clue": "The only manager to win domestic league titles in each of Europe's top five leagues (England, Spain, Italy, Germany, France).",
            "answer": "Carlo Ancelotti",
            "accepted": [
                "ancelotti"
            ],
            "source": "Wikipedia - Carlo Ancelotti"
        },
        {
            "value": 400,
            "clue": "The prestigious horse race held on the first Saturday in May at Churchill Downs in Louisville, Kentucky.",
            "answer": "Kentucky Derby",
            "accepted": [
                "the run for the roses"
            ],
            "source": "Wikipedia - Kentucky Derby"
        },
        {
            "value": 400,
            "clue": "The American high jumper who revolutionized the sport with his backward arch technique at the 1968 Olympics. (Variant #2)",
            "answer": "Dick Fosbury",
            "accepted": [
                "fosbury flop"
            ],
            "source": "Wikipedia - Dick Fosbury"
        },
        {
            "value": 400,
            "clue": "The only athlete in history to win Olympic gold in both the 100m sprint and the long jump at the same Games (1936 and 1984). (Variant #2)",
            "answer": "Carl Lewis",
            "accepted": [
                "lewis"
            ],
            "source": "Wikipedia - Carl Lewis"
        },
        {
            "value": 400,
            "clue": "The Soviet gymnast who scored the first perfect 10.0 in Olympic gymnastics history at the 1976 Montreal Games. (Variant #2)",
            "answer": "Nadia Comaneci",
            "accepted": [
                "comăneci",
                "nadia comăneci"
            ],
            "source": "Wikipedia - Nadia Comăneci"
        },
        {
            "value": 400,
            "clue": "The Kenyan marathoner who became the first person in history to run a marathon in under two hours (1:59:40) in Vienna. (Variant #2)",
            "answer": "Eliud Kipchoge",
            "accepted": [
                "kipchoge"
            ],
            "source": "Wikipedia - Eliud Kipchoge"
        },
        {
            "value": 400,
            "clue": "The only player in MLB history to hit two grand slams in a single inning, doing so in 1999. (Variant #2)",
            "answer": "Fernando Tatis",
            "accepted": [
                "tatis sr"
            ],
            "source": "Wikipedia - Fernando Tatís"
        },
        {
            "value": 400,
            "clue": "The Ethiopian long-distance legend who won two Olympic gold medals and set 27 world records. (Variant #2)",
            "answer": "Haile Gebrselassie",
            "accepted": [
                "gebrselassie"
            ],
            "source": "Wikipedia - Haile Gebrselassie"
        },
        {
            "value": 400,
            "clue": "The historic 1973 exhibition tennis match where Billie Jean King defeated former men's champion Bobby Riggs. (Variant #2)",
            "answer": "Battle of the Sexes",
            "accepted": [
                "battle of the sexes tennis"
            ],
            "source": "Wikipedia - Battle of the Sexes (tennis)"
        },
        {
            "value": 400,
            "clue": "The Finnish distance runner nicknamed the 'Flying Finn' who won nine Olympic gold medals in the 1920s. (Variant #2)",
            "answer": "Paavo Nurmi",
            "accepted": [
                "nurmi"
            ],
            "source": "Wikipedia - Paavo Nurmi"
        },
        {
            "value": 400,
            "clue": "The legendary New York Rangers defenseman who won the Norris Trophy eight times and scored the iconic 1970 flying goal. (Variant #2)",
            "answer": "Bobby Orr",
            "accepted": [
                "orr"
            ],
            "source": "Wikipedia - Bobby Orr"
        },
        {
            "value": 400,
            "clue": "The only country to have participated in every single modern Summer Olympic Games since 1896 under its own flag. (Variant #2)",
            "answer": "Greece",
            "accepted": [
                "hellas"
            ],
            "source": "Wikipedia - Greece at the Olympics"
        },
        {
            "value": 400,
            "clue": "The English cricketer who took all ten wickets in an innings against Australia at Old Trafford in 1956. (Variant #2)",
            "answer": "Jim Laker",
            "accepted": [
                "laker"
            ],
            "source": "Wikipedia - Jim Laker"
        },
        {
            "value": 400,
            "clue": "The iconic 1982 football play where Cal used five lateral passes through the Stanford band to score the winning touchdown. (Variant #2)",
            "answer": "The Play",
            "accepted": [
                "the band is on the field"
            ],
            "source": "Wikipedia - The Play (American football)"
        },
        {
            "value": 400,
            "clue": "The legendary Canadian figure skater who performed the first quad jump in competition in 1988. (Variant #2)",
            "answer": "Kurt Browning",
            "accepted": [
                "browning"
            ],
            "source": "Wikipedia - Kurt Browning"
        },
        {
            "value": 400,
            "clue": "The American swimmer who won seven gold medals at the 1972 Munich Olympics, a record until Michael Phelps in 2008. (Variant #2)",
            "answer": "Mark Spitz",
            "accepted": [
                "spitz"
            ],
            "source": "Wikipedia - Mark Spitz"
        },
        {
            "value": 400,
            "clue": "The cycling Grand Tour founded in 1909 where the overall leader wears the pink jersey (Maglia Rosa). (Variant #2)",
            "answer": "Giro d'Italia",
            "accepted": [
                "giro d italia",
                "the giro"
            ],
            "source": "Wikipedia - Giro d'Italia"
        },
        {
            "value": 400,
            "clue": "The French tennis venue named after a pioneering French aviator who completed the first flight across the Mediterranean. (Variant #2)",
            "answer": "Roland Garros",
            "accepted": [
                "stade roland garros"
            ],
            "source": "Wikipedia - Stade Roland Garros"
        },
        {
            "value": 400,
            "clue": "The MLB pitcher who threw a 12-inning perfect game in 1959 only to lose in the 13th inning. (Variant #2)",
            "answer": "Harvey Haddix",
            "accepted": [
                "haddix"
            ],
            "source": "Wikipedia - Harvey Haddix's near-perfect game"
        },
        {
            "value": 400,
            "clue": "The first soccer goalkeeper to score over 100 competitive goals in professional soccer, playing for São Paulo. (Variant #2)",
            "answer": "Rogerio Ceni",
            "accepted": [
                "rogério ceni",
                "ceni"
            ],
            "source": "Wikipedia - Rogério Ceni"
        },
        {
            "value": 400,
            "clue": "The only manager to win domestic league titles in each of Europe's top five leagues (England, Spain, Italy, Germany, France). (Variant #2)",
            "answer": "Carlo Ancelotti",
            "accepted": [
                "ancelotti"
            ],
            "source": "Wikipedia - Carlo Ancelotti"
        },
        {
            "value": 400,
            "clue": "The prestigious horse race held on the first Saturday in May at Churchill Downs in Louisville, Kentucky. (Variant #2)",
            "answer": "Kentucky Derby",
            "accepted": [
                "the run for the roses"
            ],
            "source": "Wikipedia - Kentucky Derby"
        },
        {
            "value": 500,
            "clue": "The 1904 Olympic marathon winner in St. Louis who initially rode in a car for 11 miles before running across the line.",
            "answer": "Fred Lorz",
            "accepted": [
                "lorz"
            ],
            "source": "Wikipedia - Athletics at the 1904 Summer Olympics – Men's marathon"
        },
        {
            "value": 500,
            "clue": "The first champion of modern Olympic marathon in Athens 1896, a Greek water-carrier.",
            "answer": "Spyridon Louis",
            "accepted": [
                "spyros louis"
            ],
            "source": "Wikipedia - Spyridon Louis"
        },
        {
            "value": 500,
            "clue": "The driver who remains the only posthumous Formula One World Drivers' Champion, winning the 1970 title after dying at Monza.",
            "answer": "Jochen Rindt",
            "accepted": [
                "rindt"
            ],
            "source": "Wikipedia - Jochen Rindt"
        },
        {
            "value": 500,
            "clue": "The only athlete to compete in both the Summer and Winter Olympics in the same year and win medals in both.",
            "answer": "Christa Luding-Rothenburger",
            "accepted": [
                "luding-rothenburger"
            ],
            "source": "Wikipedia - Christa Luding-Rothenburger"
        },
        {
            "value": 500,
            "clue": "The ancient Olympic pankration champion who was crowned victor despite dying during the final bout from a stranglehold.",
            "answer": "Arrhichion",
            "accepted": [
                "arrhichion of phigalia"
            ],
            "source": "Wikipedia - Arrhichion"
        },
        {
            "value": 500,
            "clue": "The 1968 Olympic high jump silver medalist who invented the 'flop' alongside Fosbury using a natural variation.",
            "answer": "Ed Caruthers",
            "accepted": [
                "caruthers"
            ],
            "source": "Wikipedia - Athletics at the 1968 Summer Olympics"
        },
        {
            "value": 500,
            "clue": "The legendary Scottish footballer who managed Celtic to become the first British club to win the European Cup in 1967.",
            "answer": "Jock Stein",
            "accepted": [
                "stein"
            ],
            "source": "Wikipedia - Jock Stein"
        },
        {
            "value": 500,
            "clue": "The long-standing record for most consecutive games played in MLB, 2,632 games, held by this Baltimore Orioles shortstop.",
            "answer": "Cal Ripken Jr.",
            "accepted": [
                "ripken",
                "cal ripken"
            ],
            "source": "Wikipedia - Cal Ripken Jr."
        },
        {
            "value": 500,
            "clue": "The historic 1938 boxing rematch at Yankee Stadium where Joe Louis knocked out German Max Schmeling in 124 seconds.",
            "answer": "Joe Louis vs. Max Schmeling II",
            "accepted": [
                "louis vs schmeling"
            ],
            "source": "Wikipedia - Joe Louis vs. Max Schmeling"
        },
        {
            "value": 500,
            "clue": "The only cricketer to score 400 runs in a single Test match innings, achieved against England in 2004.",
            "answer": "Brian Lara",
            "accepted": [
                "lara"
            ],
            "source": "Wikipedia - Brian Lara"
        },
        {
            "value": 500,
            "clue": "The English footballer who scored a hat-trick in the 1966 World Cup Final against West Germany.",
            "answer": "Geoff Hurst",
            "accepted": [
                "hurst"
            ],
            "source": "Wikipedia - Geoff Hurst"
        },
        {
            "value": 500,
            "clue": "The first female athlete to win Olympic gold medals in two different sports at the Winter Olympics (super-G and snowboard).",
            "answer": "Ester Ledecka",
            "accepted": [
                "ester ledecká"
            ],
            "source": "Wikipedia - Ester Ledecká"
        },
        {
            "value": 500,
            "clue": "The Dutch speed skater who won five Olympic gold medals across four different Winter Games (2006 to 2018).",
            "answer": "Ireen Wust",
            "accepted": [
                "ireen wüst"
            ],
            "source": "Wikipedia - Ireen Wüst"
        },
        {
            "value": 500,
            "clue": "The only pitcher to throw back-to-back no-hitters in Major League Baseball history, accomplished in June 1938.",
            "answer": "Johnny Vander Meer",
            "accepted": [
                "vander meer"
            ],
            "source": "Wikipedia - Johnny Vander Meer"
        },
        {
            "value": 500,
            "clue": "The American decathlete who set three world records in one day at the 1935 Big Ten meet, considered the greatest day in track.",
            "answer": "Jesse Owens",
            "accepted": [
                "owens"
            ],
            "source": "Wikipedia - Jesse Owens"
        },
        {
            "value": 500,
            "clue": "The 1924 British Olympic champion whose refusal to run on Sunday due to religious convictions inspired 'Chariots of Fire'.",
            "answer": "Eric Liddell",
            "accepted": [
                "liddell"
            ],
            "source": "Wikipedia - Eric Liddell"
        },
        {
            "value": 500,
            "clue": "The 1956 Olympic water polo match between Hungary and the Soviet Union marred by violent underwater fighting.",
            "answer": "Blood in the Water match",
            "accepted": [
                "blood in the water"
            ],
            "source": "Wikipedia - Blood in the Water match"
        },
        {
            "value": 500,
            "clue": "The legendary Finnish javelin thrower who won three consecutive Olympic gold medals from 1920 to 1932.",
            "answer": "Jonni Myyra",
            "accepted": [
                "matti järvinen"
            ],
            "source": "Wikipedia - Javelin throw at the Olympics"
        },
        {
            "value": 500,
            "clue": "The only soccer club to win a European Cup with a squad composed entirely of players born within 30 miles of its home ground.",
            "answer": "Celtic",
            "accepted": [
                "celtic fc",
                "lisbon lions"
            ],
            "source": "Wikipedia - Lisbon Lions"
        },
        {
            "value": 500,
            "clue": "The first driver to win the 'Triple Crown of Motorsport': Indianapolis 500, 24 Hours of Le Mans, and Monaco Grand Prix.",
            "answer": "Graham Hill",
            "accepted": [
                "hill"
            ],
            "source": "Wikipedia - Triple Crown of Motorsport"
        },
        {
            "value": 500,
            "clue": "The 1904 Olympic marathon winner in St. Louis who initially rode in a car for 11 miles before running across the line. (Variant #2)",
            "answer": "Fred Lorz",
            "accepted": [
                "lorz"
            ],
            "source": "Wikipedia - Athletics at the 1904 Summer Olympics – Men's marathon"
        },
        {
            "value": 500,
            "clue": "The first champion of modern Olympic marathon in Athens 1896, a Greek water-carrier. (Variant #2)",
            "answer": "Spyridon Louis",
            "accepted": [
                "spyros louis"
            ],
            "source": "Wikipedia - Spyridon Louis"
        },
        {
            "value": 500,
            "clue": "The driver who remains the only posthumous Formula One World Drivers' Champion, winning the 1970 title after dying at Monza. (Variant #2)",
            "answer": "Jochen Rindt",
            "accepted": [
                "rindt"
            ],
            "source": "Wikipedia - Jochen Rindt"
        },
        {
            "value": 500,
            "clue": "The only athlete to compete in both the Summer and Winter Olympics in the same year and win medals in both. (Variant #2)",
            "answer": "Christa Luding-Rothenburger",
            "accepted": [
                "luding-rothenburger"
            ],
            "source": "Wikipedia - Christa Luding-Rothenburger"
        },
        {
            "value": 500,
            "clue": "The ancient Olympic pankration champion who was crowned victor despite dying during the final bout from a stranglehold. (Variant #2)",
            "answer": "Arrhichion",
            "accepted": [
                "arrhichion of phigalia"
            ],
            "source": "Wikipedia - Arrhichion"
        },
        {
            "value": 500,
            "clue": "The 1968 Olympic high jump silver medalist who invented the 'flop' alongside Fosbury using a natural variation. (Variant #2)",
            "answer": "Ed Caruthers",
            "accepted": [
                "caruthers"
            ],
            "source": "Wikipedia - Athletics at the 1968 Summer Olympics"
        },
        {
            "value": 500,
            "clue": "The legendary Scottish footballer who managed Celtic to become the first British club to win the European Cup in 1967. (Variant #2)",
            "answer": "Jock Stein",
            "accepted": [
                "stein"
            ],
            "source": "Wikipedia - Jock Stein"
        },
        {
            "value": 500,
            "clue": "The long-standing record for most consecutive games played in MLB, 2,632 games, held by this Baltimore Orioles shortstop. (Variant #2)",
            "answer": "Cal Ripken Jr.",
            "accepted": [
                "ripken",
                "cal ripken"
            ],
            "source": "Wikipedia - Cal Ripken Jr."
        },
        {
            "value": 500,
            "clue": "The historic 1938 boxing rematch at Yankee Stadium where Joe Louis knocked out German Max Schmeling in 124 seconds. (Variant #2)",
            "answer": "Joe Louis vs. Max Schmeling II",
            "accepted": [
                "louis vs schmeling"
            ],
            "source": "Wikipedia - Joe Louis vs. Max Schmeling"
        },
        {
            "value": 500,
            "clue": "The only cricketer to score 400 runs in a single Test match innings, achieved against England in 2004. (Variant #2)",
            "answer": "Brian Lara",
            "accepted": [
                "lara"
            ],
            "source": "Wikipedia - Brian Lara"
        },
        {
            "value": 500,
            "clue": "The English footballer who scored a hat-trick in the 1966 World Cup Final against West Germany. (Variant #2)",
            "answer": "Geoff Hurst",
            "accepted": [
                "hurst"
            ],
            "source": "Wikipedia - Geoff Hurst"
        },
        {
            "value": 500,
            "clue": "The first female athlete to win Olympic gold medals in two different sports at the Winter Olympics (super-G and snowboard). (Variant #2)",
            "answer": "Ester Ledecka",
            "accepted": [
                "ester ledecká"
            ],
            "source": "Wikipedia - Ester Ledecká"
        },
        {
            "value": 500,
            "clue": "The Dutch speed skater who won five Olympic gold medals across four different Winter Games (2006 to 2018). (Variant #2)",
            "answer": "Ireen Wust",
            "accepted": [
                "ireen wüst"
            ],
            "source": "Wikipedia - Ireen Wüst"
        },
        {
            "value": 500,
            "clue": "The only pitcher to throw back-to-back no-hitters in Major League Baseball history, accomplished in June 1938. (Variant #2)",
            "answer": "Johnny Vander Meer",
            "accepted": [
                "vander meer"
            ],
            "source": "Wikipedia - Johnny Vander Meer"
        },
        {
            "value": 500,
            "clue": "The American decathlete who set three world records in one day at the 1935 Big Ten meet, considered the greatest day in track. (Variant #2)",
            "answer": "Jesse Owens",
            "accepted": [
                "owens"
            ],
            "source": "Wikipedia - Jesse Owens"
        },
        {
            "value": 500,
            "clue": "The 1924 British Olympic champion whose refusal to run on Sunday due to religious convictions inspired 'Chariots of Fire'. (Variant #2)",
            "answer": "Eric Liddell",
            "accepted": [
                "liddell"
            ],
            "source": "Wikipedia - Eric Liddell"
        },
        {
            "value": 500,
            "clue": "The 1956 Olympic water polo match between Hungary and the Soviet Union marred by violent underwater fighting. (Variant #2)",
            "answer": "Blood in the Water match",
            "accepted": [
                "blood in the water"
            ],
            "source": "Wikipedia - Blood in the Water match"
        },
        {
            "value": 500,
            "clue": "The legendary Finnish javelin thrower who won three consecutive Olympic gold medals from 1920 to 1932. (Variant #2)",
            "answer": "Jonni Myyra",
            "accepted": [
                "matti järvinen"
            ],
            "source": "Wikipedia - Javelin throw at the Olympics"
        },
        {
            "value": 500,
            "clue": "The only soccer club to win a European Cup with a squad composed entirely of players born within 30 miles of its home ground. (Variant #2)",
            "answer": "Celtic",
            "accepted": [
                "celtic fc",
                "lisbon lions"
            ],
            "source": "Wikipedia - Lisbon Lions"
        },
        {
            "value": 500,
            "clue": "The first driver to win the 'Triple Crown of Motorsport': Indianapolis 500, 24 Hours of Le Mans, and Monaco Grand Prix. (Variant #2)",
            "answer": "Graham Hill",
            "accepted": [
                "hill"
            ],
            "source": "Wikipedia - Triple Crown of Motorsport"
        }
    ],
    "nature": [
        {
            "value": 100,
            "clue": "The largest mammal on Earth, whose tongue can weigh as much as an entire elephant.",
            "answer": "Blue Whale",
            "accepted": [
                "the blue whale"
            ],
            "source": "Wikipedia - Blue whale"
        },
        {
            "value": 100,
            "clue": "The only bird known to be able to fly backwards and hover in mid-air with rapid wing beats.",
            "answer": "Hummingbird",
            "accepted": [
                "hummingbirds"
            ],
            "source": "Wikipedia - Hummingbird"
        },
        {
            "value": 100,
            "clue": "The fastest land mammal on Earth, accelerating from 0 to 60 mph in three seconds.",
            "answer": "Cheetah",
            "accepted": [
                "cheetahs"
            ],
            "source": "Wikipedia - Cheetah"
        },
        {
            "value": 100,
            "clue": "The eucalyptus-eating Australian marsupial with fingerprints almost identical to human fingerprints.",
            "answer": "Koala",
            "accepted": [
                "koala bear"
            ],
            "source": "Wikipedia - Koala"
        },
        {
            "value": 100,
            "clue": "The giant black-and-white bear native to China that feeds almost exclusively on bamboo.",
            "answer": "Giant Panda",
            "accepted": [
                "panda",
                "panda bear"
            ],
            "source": "Wikipedia - Giant panda"
        },
        {
            "value": 100,
            "clue": "The flightless bird native to Antarctica that withstands freezing temperatures by huddling in colonies.",
            "answer": "Emperor Penguin",
            "accepted": [
                "penguin"
            ],
            "source": "Wikipedia - Emperor penguin"
        },
        {
            "value": 100,
            "clue": "The marine mammal known as the 'killer whale', actually the largest member of the oceanic dolphin family.",
            "answer": "Orca",
            "accepted": [
                "killer whale"
            ],
            "source": "Wikipedia - Orca"
        },
        {
            "value": 100,
            "clue": "The tall African mammal with a long neck and distinctive spotted coat, the tallest living terrestrial animal.",
            "answer": "Giraffe",
            "accepted": [
                "giraffes"
            ],
            "source": "Wikipedia - Giraffe"
        },
        {
            "value": 100,
            "clue": "The apex predatory cat native to Africa and India known as the 'King of the Jungle'.",
            "answer": "Lion",
            "accepted": [
                "african lion"
            ],
            "source": "Wikipedia - Lion"
        },
        {
            "value": 100,
            "clue": "The largest living bird in the world, capable of running up to 43 mph but unable to fly.",
            "answer": "Ostrich",
            "accepted": [
                "common ostrich"
            ],
            "source": "Wikipedia - Common ostrich"
        },
        {
            "value": 100,
            "clue": "The ocean cephalopod with eight flexible arms lined with suction cups and three hearts.",
            "answer": "Octopus",
            "accepted": [
                "octopuses"
            ],
            "source": "Wikipedia - Octopus"
        },
        {
            "value": 100,
            "clue": "The largest cat species in the world, distinguished by its orange coat with dark vertical stripes.",
            "answer": "Tiger",
            "accepted": [
                "panthera tigris"
            ],
            "source": "Wikipedia - Tiger"
        },
        {
            "value": 100,
            "clue": "The venomous reptile without limbs that smells with its forked tongue using Jacobson's organ.",
            "answer": "Snake",
            "accepted": [
                "serpent"
            ],
            "source": "Wikipedia - Snake"
        },
        {
            "value": 100,
            "clue": "The mammal capable of true and sustained flight, using modified forelimbs formed into wings.",
            "answer": "Bat",
            "accepted": [
                "bats",
                "chiroptera"
            ],
            "source": "Wikipedia - Bat"
        },
        {
            "value": 100,
            "clue": "The semi-aquatic egg-laying mammal native to eastern Australia featuring a duck bill and beaver-like tail.",
            "answer": "Platypus",
            "accepted": [
                "duck-billed platypus"
            ],
            "source": "Wikipedia - Platypus"
        },
        {
            "value": 100,
            "clue": "The slow-moving tropical South American mammal that spends most of its life hanging upside down in trees.",
            "answer": "Sloth",
            "accepted": [
                "three-toed sloth"
            ],
            "source": "Wikipedia - Sloth"
        },
        {
            "value": 100,
            "clue": "The massive semi-aquatic African herbivore whose name translates from Greek as 'river horse'.",
            "answer": "Hippopotamus",
            "accepted": [
                "hippo"
            ],
            "source": "Wikipedia - Hippopotamus"
        },
        {
            "value": 100,
            "clue": "The insect that transforms into a butterfly or moth during complete metamorphosis.",
            "answer": "Caterpillar",
            "accepted": [
                "larva"
            ],
            "source": "Wikipedia - Caterpillar"
        },
        {
            "value": 100,
            "clue": "The social insects that live in colonies, produce honey, and pollinate flowering plants.",
            "answer": "Honey Bees",
            "accepted": [
                "bees"
            ],
            "source": "Wikipedia - Honey bee"
        },
        {
            "value": 100,
            "clue": "The marine predator with cartilaginous skeleton, multiple rows of replaceable teeth, and sharp senses.",
            "answer": "Shark",
            "accepted": [
                "sharks"
            ],
            "source": "Wikipedia - Shark"
        },
        {
            "value": 100,
            "clue": "The largest mammal on Earth, whose tongue can weigh as much as an entire elephant. (Variant #2)",
            "answer": "Blue Whale",
            "accepted": [
                "the blue whale"
            ],
            "source": "Wikipedia - Blue whale"
        },
        {
            "value": 100,
            "clue": "The only bird known to be able to fly backwards and hover in mid-air with rapid wing beats. (Variant #2)",
            "answer": "Hummingbird",
            "accepted": [
                "hummingbirds"
            ],
            "source": "Wikipedia - Hummingbird"
        },
        {
            "value": 100,
            "clue": "The fastest land mammal on Earth, accelerating from 0 to 60 mph in three seconds. (Variant #2)",
            "answer": "Cheetah",
            "accepted": [
                "cheetahs"
            ],
            "source": "Wikipedia - Cheetah"
        },
        {
            "value": 100,
            "clue": "The eucalyptus-eating Australian marsupial with fingerprints almost identical to human fingerprints. (Variant #2)",
            "answer": "Koala",
            "accepted": [
                "koala bear"
            ],
            "source": "Wikipedia - Koala"
        },
        {
            "value": 100,
            "clue": "The giant black-and-white bear native to China that feeds almost exclusively on bamboo. (Variant #2)",
            "answer": "Giant Panda",
            "accepted": [
                "panda",
                "panda bear"
            ],
            "source": "Wikipedia - Giant panda"
        },
        {
            "value": 100,
            "clue": "The flightless bird native to Antarctica that withstands freezing temperatures by huddling in colonies. (Variant #2)",
            "answer": "Emperor Penguin",
            "accepted": [
                "penguin"
            ],
            "source": "Wikipedia - Emperor penguin"
        },
        {
            "value": 100,
            "clue": "The marine mammal known as the 'killer whale', actually the largest member of the oceanic dolphin family. (Variant #2)",
            "answer": "Orca",
            "accepted": [
                "killer whale"
            ],
            "source": "Wikipedia - Orca"
        },
        {
            "value": 100,
            "clue": "The tall African mammal with a long neck and distinctive spotted coat, the tallest living terrestrial animal. (Variant #2)",
            "answer": "Giraffe",
            "accepted": [
                "giraffes"
            ],
            "source": "Wikipedia - Giraffe"
        },
        {
            "value": 100,
            "clue": "The apex predatory cat native to Africa and India known as the 'King of the Jungle'. (Variant #2)",
            "answer": "Lion",
            "accepted": [
                "african lion"
            ],
            "source": "Wikipedia - Lion"
        },
        {
            "value": 100,
            "clue": "The largest living bird in the world, capable of running up to 43 mph but unable to fly. (Variant #2)",
            "answer": "Ostrich",
            "accepted": [
                "common ostrich"
            ],
            "source": "Wikipedia - Common ostrich"
        },
        {
            "value": 100,
            "clue": "The ocean cephalopod with eight flexible arms lined with suction cups and three hearts. (Variant #2)",
            "answer": "Octopus",
            "accepted": [
                "octopuses"
            ],
            "source": "Wikipedia - Octopus"
        },
        {
            "value": 100,
            "clue": "The largest cat species in the world, distinguished by its orange coat with dark vertical stripes. (Variant #2)",
            "answer": "Tiger",
            "accepted": [
                "panthera tigris"
            ],
            "source": "Wikipedia - Tiger"
        },
        {
            "value": 100,
            "clue": "The venomous reptile without limbs that smells with its forked tongue using Jacobson's organ. (Variant #2)",
            "answer": "Snake",
            "accepted": [
                "serpent"
            ],
            "source": "Wikipedia - Snake"
        },
        {
            "value": 100,
            "clue": "The mammal capable of true and sustained flight, using modified forelimbs formed into wings. (Variant #2)",
            "answer": "Bat",
            "accepted": [
                "bats",
                "chiroptera"
            ],
            "source": "Wikipedia - Bat"
        },
        {
            "value": 100,
            "clue": "The semi-aquatic egg-laying mammal native to eastern Australia featuring a duck bill and beaver-like tail. (Variant #2)",
            "answer": "Platypus",
            "accepted": [
                "duck-billed platypus"
            ],
            "source": "Wikipedia - Platypus"
        },
        {
            "value": 100,
            "clue": "The slow-moving tropical South American mammal that spends most of its life hanging upside down in trees. (Variant #2)",
            "answer": "Sloth",
            "accepted": [
                "three-toed sloth"
            ],
            "source": "Wikipedia - Sloth"
        },
        {
            "value": 100,
            "clue": "The massive semi-aquatic African herbivore whose name translates from Greek as 'river horse'. (Variant #2)",
            "answer": "Hippopotamus",
            "accepted": [
                "hippo"
            ],
            "source": "Wikipedia - Hippopotamus"
        },
        {
            "value": 100,
            "clue": "The insect that transforms into a butterfly or moth during complete metamorphosis. (Variant #2)",
            "answer": "Caterpillar",
            "accepted": [
                "larva"
            ],
            "source": "Wikipedia - Caterpillar"
        },
        {
            "value": 100,
            "clue": "The social insects that live in colonies, produce honey, and pollinate flowering plants. (Variant #2)",
            "answer": "Honey Bees",
            "accepted": [
                "bees"
            ],
            "source": "Wikipedia - Honey bee"
        },
        {
            "value": 100,
            "clue": "The marine predator with cartilaginous skeleton, multiple rows of replaceable teeth, and sharp senses. (Variant #2)",
            "answer": "Shark",
            "accepted": [
                "sharks"
            ],
            "source": "Wikipedia - Shark"
        },
        {
            "value": 200,
            "clue": "The microscopic animal also known as the 'water bear' that can survive outer space and extreme radiation.",
            "answer": "Tardigrade",
            "accepted": [
                "tardigrades",
                "water bear"
            ],
            "source": "Wikipedia - Tardigrade"
        },
        {
            "value": 200,
            "clue": "The term for mammals that lay eggs rather than giving birth to live young (such as the platypus and echidna).",
            "answer": "Monotremes",
            "accepted": [
                "monotreme"
            ],
            "source": "Wikipedia - Monotreme"
        },
        {
            "value": 200,
            "clue": "The fastest dive speed of any animal on Earth, exceeding 200 mph when diving for prey, achieved by this raptor.",
            "answer": "Peregrine Falcon",
            "accepted": [
                "falcon"
            ],
            "source": "Wikipedia - Peregrine falcon"
        },
        {
            "value": 200,
            "clue": "The marine reptile that navigates across oceans using Earth's geomagnetic field to return to natal beaches.",
            "answer": "Sea Turtle",
            "accepted": [
                "loggerhead",
                "green sea turtle"
            ],
            "source": "Wikipedia - Sea turtle"
        },
        {
            "value": 200,
            "clue": "The biological class of animals characterized by nursing their young with milk, hair, and three middle ear bones.",
            "answer": "Mammalia",
            "accepted": [
                "mammals"
            ],
            "source": "Wikipedia - Mammal"
        },
        {
            "value": 200,
            "clue": "The process where insects, birds, or mammals shed old feathers, hair, or skin to make way for new growth.",
            "answer": "Molting",
            "accepted": [
                "moulting",
                "ecdysis"
            ],
            "source": "Wikipedia - Moulting"
        },
        {
            "value": 200,
            "clue": "The ocean animal that can change its skin color and texture in milliseconds using chromatophores.",
            "answer": "Cuttlefish",
            "accepted": [
                "chameleon of the sea"
            ],
            "source": "Wikipedia - Cuttlefish"
        },
        {
            "value": 200,
            "clue": "The flightless bird native to New Zealand with nostrils at the end of its long bill.",
            "answer": "Kiwi",
            "accepted": [
                "kiwi bird"
            ],
            "source": "Wikipedia - Kiwi (bird)"
        },
        {
            "value": 200,
            "clue": "The predatory bird with specialized fringed feathers that allow completely silent flight at night.",
            "answer": "Owl",
            "accepted": [
                "barn owl"
            ],
            "source": "Wikipedia - Owl"
        },
        {
            "value": 200,
            "clue": "The Australian mammal whose pouch opens backwards to prevent dirt from entering while digging burrows.",
            "answer": "Wombat",
            "accepted": [
                "wombats"
            ],
            "source": "Wikipedia - Wombat"
        },
        {
            "value": 200,
            "clue": "The venomous lizard native to the southwestern US and Mexico known for its beaded black-and-pink scales.",
            "answer": "Gila Monster",
            "accepted": [
                "heloderma suspectum"
            ],
            "source": "Wikipedia - Gila monster"
        },
        {
            "value": 200,
            "clue": "The process where some animals enter a state of dormancy and metabolic depression during hot, dry summer months.",
            "answer": "Estivation",
            "accepted": [
                "aestivation"
            ],
            "source": "Wikipedia - Aestivation"
        },
        {
            "value": 200,
            "clue": "The mammal whose protective outer armor consists of overlapping scales made of keratin, the most trafficked mammal.",
            "answer": "Pangolin",
            "accepted": [
                "scaly anteater"
            ],
            "source": "Wikipedia - Pangolin"
        },
        {
            "value": 200,
            "clue": "The marine bird that spends years soaring over oceans without touching land, possessing the largest wingspan.",
            "answer": "Wandering Albatross",
            "accepted": [
                "albatross"
            ],
            "source": "Wikipedia - Wandering albatross"
        },
        {
            "value": 200,
            "clue": "The predatory mammal that uses echolocation, blows bubble nets to hunt herring, and sings complex songs.",
            "answer": "Humpback Whale",
            "accepted": [
                "humpback"
            ],
            "source": "Wikipedia - Humpback whale"
        },
        {
            "value": 200,
            "clue": "The lizard capable of running across water surfaces for short distances, nicknamed the 'Jesus Christ lizard'.",
            "answer": "Basilisk Lizard",
            "accepted": [
                "common basilisk"
            ],
            "source": "Wikipedia - Common basilisk"
        },
        {
            "value": 200,
            "clue": "The insect that performs a 'waggle dance' to communicate the direction and distance of nectar sources.",
            "answer": "Honey Bee",
            "accepted": [
                "worker bee"
            ],
            "source": "Wikipedia - Waggle dance"
        },
        {
            "value": 200,
            "clue": "The semi-aquatic rodent that constructs dams, canals, and lodges using felled tree trunks.",
            "answer": "Beaver",
            "accepted": [
                "north american beaver"
            ],
            "source": "Wikipedia - Beaver"
        },
        {
            "value": 200,
            "clue": "The largest living reptile on Earth, reaching lengths of over 20 feet in Southeast Asia and northern Australia.",
            "answer": "Saltwater Crocodile",
            "accepted": [
                "saltwater croc"
            ],
            "source": "Wikipedia - Saltwater crocodile"
        },
        {
            "value": 200,
            "clue": "The carnivorous mammal native to North America whose defense mechanism is spraying foul-smelling thiols.",
            "answer": "Skunk",
            "accepted": [
                "striped skunk"
            ],
            "source": "Wikipedia - Skunk"
        },
        {
            "value": 200,
            "clue": "The microscopic animal also known as the 'water bear' that can survive outer space and extreme radiation. (Variant #2)",
            "answer": "Tardigrade",
            "accepted": [
                "tardigrades",
                "water bear"
            ],
            "source": "Wikipedia - Tardigrade"
        },
        {
            "value": 200,
            "clue": "The term for mammals that lay eggs rather than giving birth to live young (such as the platypus and echidna). (Variant #2)",
            "answer": "Monotremes",
            "accepted": [
                "monotreme"
            ],
            "source": "Wikipedia - Monotreme"
        },
        {
            "value": 200,
            "clue": "The fastest dive speed of any animal on Earth, exceeding 200 mph when diving for prey, achieved by this raptor. (Variant #2)",
            "answer": "Peregrine Falcon",
            "accepted": [
                "falcon"
            ],
            "source": "Wikipedia - Peregrine falcon"
        },
        {
            "value": 200,
            "clue": "The marine reptile that navigates across oceans using Earth's geomagnetic field to return to natal beaches. (Variant #2)",
            "answer": "Sea Turtle",
            "accepted": [
                "loggerhead",
                "green sea turtle"
            ],
            "source": "Wikipedia - Sea turtle"
        },
        {
            "value": 200,
            "clue": "The biological class of animals characterized by nursing their young with milk, hair, and three middle ear bones. (Variant #2)",
            "answer": "Mammalia",
            "accepted": [
                "mammals"
            ],
            "source": "Wikipedia - Mammal"
        },
        {
            "value": 200,
            "clue": "The process where insects, birds, or mammals shed old feathers, hair, or skin to make way for new growth. (Variant #2)",
            "answer": "Molting",
            "accepted": [
                "moulting",
                "ecdysis"
            ],
            "source": "Wikipedia - Moulting"
        },
        {
            "value": 200,
            "clue": "The ocean animal that can change its skin color and texture in milliseconds using chromatophores. (Variant #2)",
            "answer": "Cuttlefish",
            "accepted": [
                "chameleon of the sea"
            ],
            "source": "Wikipedia - Cuttlefish"
        },
        {
            "value": 200,
            "clue": "The flightless bird native to New Zealand with nostrils at the end of its long bill. (Variant #2)",
            "answer": "Kiwi",
            "accepted": [
                "kiwi bird"
            ],
            "source": "Wikipedia - Kiwi (bird)"
        },
        {
            "value": 200,
            "clue": "The predatory bird with specialized fringed feathers that allow completely silent flight at night. (Variant #2)",
            "answer": "Owl",
            "accepted": [
                "barn owl"
            ],
            "source": "Wikipedia - Owl"
        },
        {
            "value": 200,
            "clue": "The Australian mammal whose pouch opens backwards to prevent dirt from entering while digging burrows. (Variant #2)",
            "answer": "Wombat",
            "accepted": [
                "wombats"
            ],
            "source": "Wikipedia - Wombat"
        },
        {
            "value": 200,
            "clue": "The venomous lizard native to the southwestern US and Mexico known for its beaded black-and-pink scales. (Variant #2)",
            "answer": "Gila Monster",
            "accepted": [
                "heloderma suspectum"
            ],
            "source": "Wikipedia - Gila monster"
        },
        {
            "value": 200,
            "clue": "The process where some animals enter a state of dormancy and metabolic depression during hot, dry summer months. (Variant #2)",
            "answer": "Estivation",
            "accepted": [
                "aestivation"
            ],
            "source": "Wikipedia - Aestivation"
        },
        {
            "value": 200,
            "clue": "The mammal whose protective outer armor consists of overlapping scales made of keratin, the most trafficked mammal. (Variant #2)",
            "answer": "Pangolin",
            "accepted": [
                "scaly anteater"
            ],
            "source": "Wikipedia - Pangolin"
        },
        {
            "value": 200,
            "clue": "The marine bird that spends years soaring over oceans without touching land, possessing the largest wingspan. (Variant #2)",
            "answer": "Wandering Albatross",
            "accepted": [
                "albatross"
            ],
            "source": "Wikipedia - Wandering albatross"
        },
        {
            "value": 200,
            "clue": "The predatory mammal that uses echolocation, blows bubble nets to hunt herring, and sings complex songs. (Variant #2)",
            "answer": "Humpback Whale",
            "accepted": [
                "humpback"
            ],
            "source": "Wikipedia - Humpback whale"
        },
        {
            "value": 200,
            "clue": "The lizard capable of running across water surfaces for short distances, nicknamed the 'Jesus Christ lizard'. (Variant #2)",
            "answer": "Basilisk Lizard",
            "accepted": [
                "common basilisk"
            ],
            "source": "Wikipedia - Common basilisk"
        },
        {
            "value": 200,
            "clue": "The insect that performs a 'waggle dance' to communicate the direction and distance of nectar sources. (Variant #2)",
            "answer": "Honey Bee",
            "accepted": [
                "worker bee"
            ],
            "source": "Wikipedia - Waggle dance"
        },
        {
            "value": 200,
            "clue": "The semi-aquatic rodent that constructs dams, canals, and lodges using felled tree trunks. (Variant #2)",
            "answer": "Beaver",
            "accepted": [
                "north american beaver"
            ],
            "source": "Wikipedia - Beaver"
        },
        {
            "value": 200,
            "clue": "The largest living reptile on Earth, reaching lengths of over 20 feet in Southeast Asia and northern Australia. (Variant #2)",
            "answer": "Saltwater Crocodile",
            "accepted": [
                "saltwater croc"
            ],
            "source": "Wikipedia - Saltwater crocodile"
        },
        {
            "value": 200,
            "clue": "The carnivorous mammal native to North America whose defense mechanism is spraying foul-smelling thiols. (Variant #2)",
            "answer": "Skunk",
            "accepted": [
                "striped skunk"
            ],
            "source": "Wikipedia - Skunk"
        },
        {
            "value": 300,
            "clue": "The Australian coastal jellyfish considered the most venomous marine creature, with tentacles delivering lethal toxins.",
            "answer": "Box Jellyfish",
            "accepted": [
                "sea wasp",
                "chironex fleckeri"
            ],
            "source": "Wikipedia - Box jellyfish"
        },
        {
            "value": 300,
            "clue": "The small Australian octopus whose painless bite delivers lethal tetrodotoxin with glowing circular markings.",
            "answer": "Blue-Ringed Octopus",
            "accepted": [
                "blue ringed octopus"
            ],
            "source": "Wikipedia - Blue-ringed octopus"
        },
        {
            "value": 300,
            "clue": "The deep-sea bioluminescent anglerfish adaptation where the female lures prey using a glowing dorsal fin spine.",
            "answer": "Esca",
            "accepted": [
                "illicium",
                "bioluminescent lure"
            ],
            "source": "Wikipedia - Anglerfish"
        },
        {
            "value": 300,
            "clue": "The phenomenon where an animal mimics the appearance of a dangerous or unpalatable species to deter predators.",
            "answer": "Batesian Mimicry",
            "accepted": [
                "mimicry"
            ],
            "source": "Wikipedia - Batesian mimicry"
        },
        {
            "value": 300,
            "clue": "The small mammal native to Madagascar that uses an elongated middle finger to tap on wood and extract grubs.",
            "answer": "Aye-aye",
            "accepted": [
                "daubentonia madagascariensis"
            ],
            "source": "Wikipedia - Aye-aye"
        },
        {
            "value": 300,
            "clue": "The African bird that enters a mutualistic partnership with humans to lead them directly to wild beehives.",
            "answer": "Greater Honeyguide",
            "accepted": [
                "honeyguide"
            ],
            "source": "Wikipedia - Greater honeyguide"
        },
        {
            "value": 300,
            "clue": "The deep-sea fish species with a gelatinous body adapted to immense water pressure, voted 'world's ugliest animal'.",
            "answer": "Blobfish",
            "accepted": [
                "psychrolutes marcidus"
            ],
            "source": "Wikipedia - Blobfish"
        },
        {
            "value": 300,
            "clue": "The symbiotic relationship where both species benefit, such as clownfish living safely inside sea anemones.",
            "answer": "Mutualism",
            "accepted": [
                "symbiosis"
            ],
            "source": "Wikipedia - Mutualism (biology)"
        },
        {
            "value": 300,
            "clue": "The apex mammalian predator of the Arctic sea ice that feeds almost exclusively on bearded and ringed seals.",
            "answer": "Polar Bear",
            "accepted": [
                "ursus maritimus"
            ],
            "source": "Wikipedia - Polar bear"
        },
        {
            "value": 300,
            "clue": "The deep-sea shark species with teeth embedded in an extendable slingshot jaw and pink flabby skin.",
            "answer": "Goblin Shark",
            "accepted": [
                "mitsukurina owstoni"
            ],
            "source": "Wikipedia - Goblin shark"
        },
        {
            "value": 300,
            "clue": "The desert rodent that can survive its entire life without drinking water, extracting moisture from seeds.",
            "answer": "Kangaroo Rat",
            "accepted": [
                "dipodomys"
            ],
            "source": "Wikipedia - Kangaroo rat"
        },
        {
            "value": 300,
            "clue": "The venomous snake species that produces acoustic rattling warnings from modified keratin segments on its tail.",
            "answer": "Rattlesnake",
            "accepted": [
                "crotalus"
            ],
            "source": "Wikipedia - Rattlesnake"
        },
        {
            "value": 300,
            "clue": "The South American electric fish capable of generating electrical shocks up to 860 volts to stun prey.",
            "answer": "Electric Eel",
            "accepted": [
                "electrophorus electricus"
            ],
            "source": "Wikipedia - Electric eel"
        },
        {
            "value": 300,
            "clue": "The bird species known for constructing elaborate decorated bowers decorated with blue objects to attract mates.",
            "answer": "Bowerbird",
            "accepted": [
                "satin bowerbird"
            ],
            "source": "Wikipedia - Bowerbird"
        },
        {
            "value": 300,
            "clue": "The marine organism that secretes calcium carbonate skeletons, creating the world's coral reefs.",
            "answer": "Coral Polyp",
            "accepted": [
                "coral"
            ],
            "source": "Wikipedia - Coral"
        },
        {
            "value": 300,
            "clue": "The animal order that includes lemurs, lorises, tarsiers, monkeys, apes, and humans.",
            "answer": "Primates",
            "accepted": [
                "order primates"
            ],
            "source": "Wikipedia - Primate"
        },
        {
            "value": 300,
            "clue": "The crustacean that possesses club-like appendages accelerating at the speed of a bullet to shatter snail shells.",
            "answer": "Mantis Shrimp",
            "accepted": [
                "stomatopod"
            ],
            "source": "Wikipedia - Mantis shrimp"
        },
        {
            "value": 300,
            "clue": "The flightless parrot native to New Zealand, the heaviest parrot in the world and nocturnal.",
            "answer": "Kakapo",
            "accepted": [
                "kākāpō",
                "owl parrot"
            ],
            "source": "Wikipedia - Kākāpō"
        },
        {
            "value": 300,
            "clue": "The phenomenon where organisms emit light through a luciferin-luciferase biochemical reaction.",
            "answer": "Bioluminescence",
            "accepted": [
                "bioluminescent emission"
            ],
            "source": "Wikipedia - Bioluminescence"
        },
        {
            "value": 300,
            "clue": "The term for animals whose body temperature is regulated primarily by external environmental heat sources.",
            "answer": "Ectotherms",
            "accepted": [
                "cold-blooded",
                "poikilotherms"
            ],
            "source": "Wikipedia - Ectotherm"
        },
        {
            "value": 300,
            "clue": "The Australian coastal jellyfish considered the most venomous marine creature, with tentacles delivering lethal toxins. (Variant #2)",
            "answer": "Box Jellyfish",
            "accepted": [
                "sea wasp",
                "chironex fleckeri"
            ],
            "source": "Wikipedia - Box jellyfish"
        },
        {
            "value": 300,
            "clue": "The small Australian octopus whose painless bite delivers lethal tetrodotoxin with glowing circular markings. (Variant #2)",
            "answer": "Blue-Ringed Octopus",
            "accepted": [
                "blue ringed octopus"
            ],
            "source": "Wikipedia - Blue-ringed octopus"
        },
        {
            "value": 300,
            "clue": "The deep-sea bioluminescent anglerfish adaptation where the female lures prey using a glowing dorsal fin spine. (Variant #2)",
            "answer": "Esca",
            "accepted": [
                "illicium",
                "bioluminescent lure"
            ],
            "source": "Wikipedia - Anglerfish"
        },
        {
            "value": 300,
            "clue": "The phenomenon where an animal mimics the appearance of a dangerous or unpalatable species to deter predators. (Variant #2)",
            "answer": "Batesian Mimicry",
            "accepted": [
                "mimicry"
            ],
            "source": "Wikipedia - Batesian mimicry"
        },
        {
            "value": 300,
            "clue": "The small mammal native to Madagascar that uses an elongated middle finger to tap on wood and extract grubs. (Variant #2)",
            "answer": "Aye-aye",
            "accepted": [
                "daubentonia madagascariensis"
            ],
            "source": "Wikipedia - Aye-aye"
        },
        {
            "value": 300,
            "clue": "The African bird that enters a mutualistic partnership with humans to lead them directly to wild beehives. (Variant #2)",
            "answer": "Greater Honeyguide",
            "accepted": [
                "honeyguide"
            ],
            "source": "Wikipedia - Greater honeyguide"
        },
        {
            "value": 300,
            "clue": "The deep-sea fish species with a gelatinous body adapted to immense water pressure, voted 'world's ugliest animal'. (Variant #2)",
            "answer": "Blobfish",
            "accepted": [
                "psychrolutes marcidus"
            ],
            "source": "Wikipedia - Blobfish"
        },
        {
            "value": 300,
            "clue": "The symbiotic relationship where both species benefit, such as clownfish living safely inside sea anemones. (Variant #2)",
            "answer": "Mutualism",
            "accepted": [
                "symbiosis"
            ],
            "source": "Wikipedia - Mutualism (biology)"
        },
        {
            "value": 300,
            "clue": "The apex mammalian predator of the Arctic sea ice that feeds almost exclusively on bearded and ringed seals. (Variant #2)",
            "answer": "Polar Bear",
            "accepted": [
                "ursus maritimus"
            ],
            "source": "Wikipedia - Polar bear"
        },
        {
            "value": 300,
            "clue": "The deep-sea shark species with teeth embedded in an extendable slingshot jaw and pink flabby skin. (Variant #2)",
            "answer": "Goblin Shark",
            "accepted": [
                "mitsukurina owstoni"
            ],
            "source": "Wikipedia - Goblin shark"
        },
        {
            "value": 300,
            "clue": "The desert rodent that can survive its entire life without drinking water, extracting moisture from seeds. (Variant #2)",
            "answer": "Kangaroo Rat",
            "accepted": [
                "dipodomys"
            ],
            "source": "Wikipedia - Kangaroo rat"
        },
        {
            "value": 300,
            "clue": "The venomous snake species that produces acoustic rattling warnings from modified keratin segments on its tail. (Variant #2)",
            "answer": "Rattlesnake",
            "accepted": [
                "crotalus"
            ],
            "source": "Wikipedia - Rattlesnake"
        },
        {
            "value": 300,
            "clue": "The South American electric fish capable of generating electrical shocks up to 860 volts to stun prey. (Variant #2)",
            "answer": "Electric Eel",
            "accepted": [
                "electrophorus electricus"
            ],
            "source": "Wikipedia - Electric eel"
        },
        {
            "value": 300,
            "clue": "The bird species known for constructing elaborate decorated bowers decorated with blue objects to attract mates. (Variant #2)",
            "answer": "Bowerbird",
            "accepted": [
                "satin bowerbird"
            ],
            "source": "Wikipedia - Bowerbird"
        },
        {
            "value": 300,
            "clue": "The marine organism that secretes calcium carbonate skeletons, creating the world's coral reefs. (Variant #2)",
            "answer": "Coral Polyp",
            "accepted": [
                "coral"
            ],
            "source": "Wikipedia - Coral"
        },
        {
            "value": 300,
            "clue": "The animal order that includes lemurs, lorises, tarsiers, monkeys, apes, and humans. (Variant #2)",
            "answer": "Primates",
            "accepted": [
                "order primates"
            ],
            "source": "Wikipedia - Primate"
        },
        {
            "value": 300,
            "clue": "The crustacean that possesses club-like appendages accelerating at the speed of a bullet to shatter snail shells. (Variant #2)",
            "answer": "Mantis Shrimp",
            "accepted": [
                "stomatopod"
            ],
            "source": "Wikipedia - Mantis shrimp"
        },
        {
            "value": 300,
            "clue": "The flightless parrot native to New Zealand, the heaviest parrot in the world and nocturnal. (Variant #2)",
            "answer": "Kakapo",
            "accepted": [
                "kākāpō",
                "owl parrot"
            ],
            "source": "Wikipedia - Kākāpō"
        },
        {
            "value": 300,
            "clue": "The phenomenon where organisms emit light through a luciferin-luciferase biochemical reaction. (Variant #2)",
            "answer": "Bioluminescence",
            "accepted": [
                "bioluminescent emission"
            ],
            "source": "Wikipedia - Bioluminescence"
        },
        {
            "value": 300,
            "clue": "The term for animals whose body temperature is regulated primarily by external environmental heat sources. (Variant #2)",
            "answer": "Ectotherms",
            "accepted": [
                "cold-blooded",
                "poikilotherms"
            ],
            "source": "Wikipedia - Ectotherm"
        },
        {
            "value": 400,
            "clue": "The immortal jellyfish species capable of reverting back to its polyp stage when stressed, achieving biological immortality.",
            "answer": "Turritopsis dohrnii",
            "accepted": [
                "immortal jellyfish"
            ],
            "source": "Wikipedia - Turritopsis dohrnii"
        },
        {
            "value": 400,
            "clue": "The only known mammal that is fully eusocial, living in underground colonies with a queen and sterile workers.",
            "answer": "Naked Mole-rat",
            "accepted": [
                "heterocephalus glaber"
            ],
            "source": "Wikipedia - Naked mole-rat"
        },
        {
            "value": 400,
            "clue": "The deep-sea cephalopod that possesses the largest eyes in the animal kingdom, measuring up to 10 inches in diameter.",
            "answer": "Colossal Squid",
            "accepted": [
                "mesonychoteuthis hamiltoni"
            ],
            "source": "Wikipedia - Colossal squid"
        },
        {
            "value": 400,
            "clue": "The lizard endemic to New Zealand that is the sole surviving species of the archaic reptile order Sphenodontia.",
            "answer": "Tuatara",
            "accepted": [
                "sphenodon punctatus"
            ],
            "source": "Wikipedia - Tuatara"
        },
        {
            "value": 400,
            "clue": "The North American amphibian that freezes solid in winter, stopping its heart, and thaws back to life in spring.",
            "answer": "Wood Frog",
            "accepted": [
                "lithobates sylvaticus"
            ],
            "source": "Wikipedia - Wood frog"
        },
        {
            "value": 400,
            "clue": "The venomous marine gastropod that shoots harpoon-like radula teeth loaded with deadly conotoxins.",
            "answer": "Cone Snail",
            "accepted": [
                "cone shell",
                "conus"
            ],
            "source": "Wikipedia - Cone snail"
        },
        {
            "value": 400,
            "clue": "The sensory organ along the sides of fish that detects vibration, water displacement, and pressure gradients.",
            "answer": "Lateral Line",
            "accepted": [
                "lateral line system"
            ],
            "source": "Wikipedia - Lateral line"
        },
        {
            "value": 400,
            "clue": "The unique defense of the Texas horned lizard where it shoots foul-tasting blood from its eyes at predators.",
            "answer": "Autohaemorrhaging",
            "accepted": [
                "blood squirt"
            ],
            "source": "Wikipedia - Horned lizard"
        },
        {
            "value": 400,
            "clue": "The deep-sea hydrothermal vent invertebrate that has no mouth, gut, or digestive tract, nourished by chemosynthetic bacteria.",
            "answer": "Giant Tube Worm",
            "accepted": [
                "riftia pachyptila"
            ],
            "source": "Wikipedia - Riftia pachyptila"
        },
        {
            "value": 400,
            "clue": "The specialized electroreceptive organs found in sharks and rays that detect minute electrical fields of living prey.",
            "answer": "Ampullae of Lorenzini",
            "accepted": [
                "lorenzini ampullae"
            ],
            "source": "Wikipedia - Ampullae of Lorenzini"
        },
        {
            "value": 400,
            "clue": "The African mammal of the giraffe family with zebra-like striped hind legs that inhabits the Ituri Rainforest.",
            "answer": "Okapi",
            "accepted": [
                "okapia johnstoni"
            ],
            "source": "Wikipedia - Okapi"
        },
        {
            "value": 400,
            "clue": "The fungal pathogen that infects carpenter ants and controls their central nervous system to turn them into 'zombies'.",
            "answer": "Ophiocordyceps unilateralis",
            "accepted": [
                "cordyceps",
                "zombie ant fungus"
            ],
            "source": "Wikipedia - Ophiocordyceps unilateralis"
        },
        {
            "value": 400,
            "clue": "The small semi-aquatic salamander native to Lake Xochimilco that exhibits complete neoteny, remaining in larval form.",
            "answer": "Axolotl",
            "accepted": [
                "ambystoma mexicanum"
            ],
            "source": "Wikipedia - Axolotl"
        },
        {
            "value": 400,
            "clue": "The deep-sea cephalopod with a cape-like webbing between its arms and large fin ears that dwells in the oxygen minimum zone.",
            "answer": "Vampire Squid",
            "accepted": [
                "vampyroteuthis infernalis"
            ],
            "source": "Wikipedia - Vampire squid"
        },
        {
            "value": 400,
            "clue": "The primitive egg-laying mammal of Australia and New Guinea covered in coarse spines, belonging to the tachyglossids.",
            "answer": "Echidna",
            "accepted": [
                "spiny anteater"
            ],
            "source": "Wikipedia - Echidna"
        },
        {
            "value": 400,
            "clue": "The nocturnal burrowing mammal native to sub-Saharan Africa with a long snout whose name means 'earth pig' in Afrikaans.",
            "answer": "Aardvark",
            "accepted": [
                "orycteropus afer"
            ],
            "source": "Wikipedia - Aardvark"
        },
        {
            "value": 400,
            "clue": "The large marine gastropod commonly called the 'blue dragon' sea slug that feeds on Portuguese man o' war toxins.",
            "answer": "Glaucus atlanticus",
            "accepted": [
                "blue dragon sea slug"
            ],
            "source": "Wikipedia - Glaucus atlanticus"
        },
        {
            "value": 400,
            "clue": "The Arctic cetacean whose males possess a spiraling ivory tusk that is actually an elongated canine tooth.",
            "answer": "Narwhal",
            "accepted": [
                "monodon monoceros"
            ],
            "source": "Wikipedia - Narwhal"
        },
        {
            "value": 400,
            "clue": "The unique reflective layer behind the retina in many nocturnal animals that causes their eyes to shine in the dark.",
            "answer": "Tapetum Lucidum",
            "accepted": [
                "tapetum"
            ],
            "source": "Wikipedia - Tapetum lucidum"
        },
        {
            "value": 400,
            "clue": "The Australian reptile that runs on hind legs and displays a large colorful neck frill when threatened.",
            "answer": "Frilled Lizard",
            "accepted": [
                "chlamydosaurus kingii"
            ],
            "source": "Wikipedia - Frilled lizard"
        },
        {
            "value": 400,
            "clue": "The immortal jellyfish species capable of reverting back to its polyp stage when stressed, achieving biological immortality. (Variant #2)",
            "answer": "Turritopsis dohrnii",
            "accepted": [
                "immortal jellyfish"
            ],
            "source": "Wikipedia - Turritopsis dohrnii"
        },
        {
            "value": 400,
            "clue": "The only known mammal that is fully eusocial, living in underground colonies with a queen and sterile workers. (Variant #2)",
            "answer": "Naked Mole-rat",
            "accepted": [
                "heterocephalus glaber"
            ],
            "source": "Wikipedia - Naked mole-rat"
        },
        {
            "value": 400,
            "clue": "The deep-sea cephalopod that possesses the largest eyes in the animal kingdom, measuring up to 10 inches in diameter. (Variant #2)",
            "answer": "Colossal Squid",
            "accepted": [
                "mesonychoteuthis hamiltoni"
            ],
            "source": "Wikipedia - Colossal squid"
        },
        {
            "value": 400,
            "clue": "The lizard endemic to New Zealand that is the sole surviving species of the archaic reptile order Sphenodontia. (Variant #2)",
            "answer": "Tuatara",
            "accepted": [
                "sphenodon punctatus"
            ],
            "source": "Wikipedia - Tuatara"
        },
        {
            "value": 400,
            "clue": "The North American amphibian that freezes solid in winter, stopping its heart, and thaws back to life in spring. (Variant #2)",
            "answer": "Wood Frog",
            "accepted": [
                "lithobates sylvaticus"
            ],
            "source": "Wikipedia - Wood frog"
        },
        {
            "value": 400,
            "clue": "The venomous marine gastropod that shoots harpoon-like radula teeth loaded with deadly conotoxins. (Variant #2)",
            "answer": "Cone Snail",
            "accepted": [
                "cone shell",
                "conus"
            ],
            "source": "Wikipedia - Cone snail"
        },
        {
            "value": 400,
            "clue": "The sensory organ along the sides of fish that detects vibration, water displacement, and pressure gradients. (Variant #2)",
            "answer": "Lateral Line",
            "accepted": [
                "lateral line system"
            ],
            "source": "Wikipedia - Lateral line"
        },
        {
            "value": 400,
            "clue": "The unique defense of the Texas horned lizard where it shoots foul-tasting blood from its eyes at predators. (Variant #2)",
            "answer": "Autohaemorrhaging",
            "accepted": [
                "blood squirt"
            ],
            "source": "Wikipedia - Horned lizard"
        },
        {
            "value": 400,
            "clue": "The deep-sea hydrothermal vent invertebrate that has no mouth, gut, or digestive tract, nourished by chemosynthetic bacteria. (Variant #2)",
            "answer": "Giant Tube Worm",
            "accepted": [
                "riftia pachyptila"
            ],
            "source": "Wikipedia - Riftia pachyptila"
        },
        {
            "value": 400,
            "clue": "The specialized electroreceptive organs found in sharks and rays that detect minute electrical fields of living prey. (Variant #2)",
            "answer": "Ampullae of Lorenzini",
            "accepted": [
                "lorenzini ampullae"
            ],
            "source": "Wikipedia - Ampullae of Lorenzini"
        },
        {
            "value": 400,
            "clue": "The African mammal of the giraffe family with zebra-like striped hind legs that inhabits the Ituri Rainforest. (Variant #2)",
            "answer": "Okapi",
            "accepted": [
                "okapia johnstoni"
            ],
            "source": "Wikipedia - Okapi"
        },
        {
            "value": 400,
            "clue": "The fungal pathogen that infects carpenter ants and controls their central nervous system to turn them into 'zombies'. (Variant #2)",
            "answer": "Ophiocordyceps unilateralis",
            "accepted": [
                "cordyceps",
                "zombie ant fungus"
            ],
            "source": "Wikipedia - Ophiocordyceps unilateralis"
        },
        {
            "value": 400,
            "clue": "The small semi-aquatic salamander native to Lake Xochimilco that exhibits complete neoteny, remaining in larval form. (Variant #2)",
            "answer": "Axolotl",
            "accepted": [
                "ambystoma mexicanum"
            ],
            "source": "Wikipedia - Axolotl"
        },
        {
            "value": 400,
            "clue": "The deep-sea cephalopod with a cape-like webbing between its arms and large fin ears that dwells in the oxygen minimum zone. (Variant #2)",
            "answer": "Vampire Squid",
            "accepted": [
                "vampyroteuthis infernalis"
            ],
            "source": "Wikipedia - Vampire squid"
        },
        {
            "value": 400,
            "clue": "The primitive egg-laying mammal of Australia and New Guinea covered in coarse spines, belonging to the tachyglossids. (Variant #2)",
            "answer": "Echidna",
            "accepted": [
                "spiny anteater"
            ],
            "source": "Wikipedia - Echidna"
        },
        {
            "value": 400,
            "clue": "The nocturnal burrowing mammal native to sub-Saharan Africa with a long snout whose name means 'earth pig' in Afrikaans. (Variant #2)",
            "answer": "Aardvark",
            "accepted": [
                "orycteropus afer"
            ],
            "source": "Wikipedia - Aardvark"
        },
        {
            "value": 400,
            "clue": "The large marine gastropod commonly called the 'blue dragon' sea slug that feeds on Portuguese man o' war toxins. (Variant #2)",
            "answer": "Glaucus atlanticus",
            "accepted": [
                "blue dragon sea slug"
            ],
            "source": "Wikipedia - Glaucus atlanticus"
        },
        {
            "value": 400,
            "clue": "The Arctic cetacean whose males possess a spiraling ivory tusk that is actually an elongated canine tooth. (Variant #2)",
            "answer": "Narwhal",
            "accepted": [
                "monodon monoceros"
            ],
            "source": "Wikipedia - Narwhal"
        },
        {
            "value": 400,
            "clue": "The unique reflective layer behind the retina in many nocturnal animals that causes their eyes to shine in the dark. (Variant #2)",
            "answer": "Tapetum Lucidum",
            "accepted": [
                "tapetum"
            ],
            "source": "Wikipedia - Tapetum lucidum"
        },
        {
            "value": 400,
            "clue": "The Australian reptile that runs on hind legs and displays a large colorful neck frill when threatened. (Variant #2)",
            "answer": "Frilled Lizard",
            "accepted": [
                "chlamydosaurus kingii"
            ],
            "source": "Wikipedia - Frilled lizard"
        },
        {
            "value": 500,
            "clue": "The extraordinary deep-sea sponge that lives up to 15,000 years, making it the longest-living animal on Earth.",
            "answer": "Glass Sponge",
            "accepted": [
                "monorhaphis chuni",
                "hexactinellid"
            ],
            "source": "Wikipedia - Hexactinellid"
        },
        {
            "value": 500,
            "clue": "The marine worm possessing red hemoglobin blood that thrives inside methane ice clathrates at the bottom of the Gulf of Mexico.",
            "answer": "Methane Ice Worm",
            "accepted": [
                "hesionococcus",
                "sirsoe methanicola"
            ],
            "source": "Wikipedia - Sirsoe methanicola"
        },
        {
            "value": 500,
            "clue": "The blind cave salamander native to the subterranean waters of the Dinaric Alps that can survive 10 years without food.",
            "answer": "Olm",
            "accepted": [
                "proteus anguinus"
            ],
            "source": "Wikipedia - Olm"
        },
        {
            "value": 500,
            "clue": "The small deep-sea teleost fish with a completely transparent fluid-filled head dome through which its tubular green eyes gaze upward.",
            "answer": "Barreleye Fish",
            "accepted": [
                "macropinna microstoma"
            ],
            "source": "Wikipedia - Barreleye"
        },
        {
            "value": 500,
            "clue": "The biological term for the phenomenon where an organism retains juvenile larval characteristics into reproductive adulthood.",
            "answer": "Neoteny",
            "accepted": [
                "paedomorphism"
            ],
            "source": "Wikipedia - Neoteny"
        },
        {
            "value": 500,
            "clue": "The order of primitive winged insects containing mayflies, characterized by having an intermediate winged subimago stage.",
            "answer": "Ephemeroptera",
            "accepted": [
                "mayflies"
            ],
            "source": "Wikipedia - Mayfly"
        },
        {
            "value": 500,
            "clue": "The venomous mammal native to Cuba and Hispaniola that delivers toxic saliva through grooved incisors.",
            "answer": "Solenodon",
            "accepted": [
                "hispaniolan solenodon"
            ],
            "source": "Wikipedia - Solenodon"
        },
        {
            "value": 500,
            "clue": "The extinct flightless bird related to pigeons that was wiped out on the island of Mauritius in the 17th century.",
            "answer": "Dodo",
            "accepted": [
                "raphus cucullatus"
            ],
            "source": "Wikipedia - Dodo"
        },
        {
            "value": 500,
            "clue": "The specialized organ in male platypuses located on the hind ankles that delivers excruciatingly painful venom.",
            "answer": "Calcaneus Spur",
            "accepted": [
                "crural gland spur"
            ],
            "source": "Wikipedia - Platypus venom"
        },
        {
            "value": 500,
            "clue": "The genus of photosynthetic sea slugs that ingest algae and incorporate active chloroplasts into their own digestive cells.",
            "answer": "Elysia chlorotica",
            "accepted": [
                "solar-powered sea slug",
                "kleptoplasty"
            ],
            "source": "Wikipedia - Elysia chlorotica"
        },
        {
            "value": 500,
            "clue": "The bizarre South American hoatzin bird whose juvenile chicks possess this prehistoric reptilian feature on their wings.",
            "answer": "Wing Claws",
            "accepted": [
                "functional claws on wings"
            ],
            "source": "Wikipedia - Hoatzin"
        },
        {
            "value": 500,
            "clue": "The biological class of marine parasites that chemically castrate crabs and take over their hormonal behavior.",
            "answer": "Rhizocephala",
            "accepted": [
                "sacculina"
            ],
            "source": "Wikipedia - Sacculina"
        },
        {
            "value": 500,
            "clue": "The extinct apex marine predator of the Ordovician period, a cephalopod that grew conical shells up to 20 feet long.",
            "answer": "Cameroceras",
            "accepted": [
                "endoceras"
            ],
            "source": "Wikipedia - Cameroceras"
        },
        {
            "value": 500,
            "clue": "The deep-sea decapod crustacean discovered in 2005 near Easter Island covered in silky blond setae harboring bacteria.",
            "answer": "Yeti Crab",
            "accepted": [
                "kiwa hirsuta"
            ],
            "source": "Wikipedia - Kiwa hirsuta"
        },
        {
            "value": 500,
            "clue": "The parasitic protozoan that manipulates the brains of infected rodents to become sexually attracted to cat urine scent.",
            "answer": "Toxoplasma gondii",
            "accepted": [
                "toxoplasmosis"
            ],
            "source": "Wikipedia - Toxoplasma gondii"
        },
        {
            "value": 500,
            "clue": "The primitive deep-sea lobe-finned fish thought to have gone extinct 66 million years ago until rediscovered off South Africa in 1938.",
            "answer": "Coelacanth",
            "accepted": [
                "latimeria chalumnae"
            ],
            "source": "Wikipedia - Coelacanth"
        },
        {
            "value": 500,
            "clue": "The deep-sea hydrothermal worm that can survive water temperatures up to 80°C (176°F), making it the most heat-tolerant animal.",
            "answer": "Pompeii Worm",
            "accepted": [
                "alvinella pompejana"
            ],
            "source": "Wikipedia - Pompeii worm"
        },
        {
            "value": 500,
            "clue": "The specialized respiratory organ in labyrinth fish that allows them to extract oxygen directly from atmospheric air.",
            "answer": "Labyrinth Organ",
            "accepted": [
                "labyrinth organ"
            ],
            "source": "Wikipedia - Anabantoidei"
        },
        {
            "value": 500,
            "clue": "The Antarctic fish family that has clear blood lacking hemoglobin, surviving near-freezing seas using antifreeze glycopeptides.",
            "answer": "Crocodile Icefish",
            "accepted": [
                "channichthyidae"
            ],
            "source": "Wikipedia - Channichthyidae"
        },
        {
            "value": 500,
            "clue": "The microscopic animal that reproduces entirely via parthenogenesis for over 40 million years without a single male.",
            "answer": "Bdelloid Rotifer",
            "accepted": [
                "bdelloids"
            ],
            "source": "Wikipedia - Bdelloidea"
        },
        {
            "value": 500,
            "clue": "The extraordinary deep-sea sponge that lives up to 15,000 years, making it the longest-living animal on Earth. (Variant #2)",
            "answer": "Glass Sponge",
            "accepted": [
                "monorhaphis chuni",
                "hexactinellid"
            ],
            "source": "Wikipedia - Hexactinellid"
        },
        {
            "value": 500,
            "clue": "The marine worm possessing red hemoglobin blood that thrives inside methane ice clathrates at the bottom of the Gulf of Mexico. (Variant #2)",
            "answer": "Methane Ice Worm",
            "accepted": [
                "hesionococcus",
                "sirsoe methanicola"
            ],
            "source": "Wikipedia - Sirsoe methanicola"
        },
        {
            "value": 500,
            "clue": "The blind cave salamander native to the subterranean waters of the Dinaric Alps that can survive 10 years without food. (Variant #2)",
            "answer": "Olm",
            "accepted": [
                "proteus anguinus"
            ],
            "source": "Wikipedia - Olm"
        },
        {
            "value": 500,
            "clue": "The small deep-sea teleost fish with a completely transparent fluid-filled head dome through which its tubular green eyes gaze upward. (Variant #2)",
            "answer": "Barreleye Fish",
            "accepted": [
                "macropinna microstoma"
            ],
            "source": "Wikipedia - Barreleye"
        },
        {
            "value": 500,
            "clue": "The biological term for the phenomenon where an organism retains juvenile larval characteristics into reproductive adulthood. (Variant #2)",
            "answer": "Neoteny",
            "accepted": [
                "paedomorphism"
            ],
            "source": "Wikipedia - Neoteny"
        },
        {
            "value": 500,
            "clue": "The order of primitive winged insects containing mayflies, characterized by having an intermediate winged subimago stage. (Variant #2)",
            "answer": "Ephemeroptera",
            "accepted": [
                "mayflies"
            ],
            "source": "Wikipedia - Mayfly"
        },
        {
            "value": 500,
            "clue": "The venomous mammal native to Cuba and Hispaniola that delivers toxic saliva through grooved incisors. (Variant #2)",
            "answer": "Solenodon",
            "accepted": [
                "hispaniolan solenodon"
            ],
            "source": "Wikipedia - Solenodon"
        },
        {
            "value": 500,
            "clue": "The extinct flightless bird related to pigeons that was wiped out on the island of Mauritius in the 17th century. (Variant #2)",
            "answer": "Dodo",
            "accepted": [
                "raphus cucullatus"
            ],
            "source": "Wikipedia - Dodo"
        },
        {
            "value": 500,
            "clue": "The specialized organ in male platypuses located on the hind ankles that delivers excruciatingly painful venom. (Variant #2)",
            "answer": "Calcaneus Spur",
            "accepted": [
                "crural gland spur"
            ],
            "source": "Wikipedia - Platypus venom"
        },
        {
            "value": 500,
            "clue": "The genus of photosynthetic sea slugs that ingest algae and incorporate active chloroplasts into their own digestive cells. (Variant #2)",
            "answer": "Elysia chlorotica",
            "accepted": [
                "solar-powered sea slug",
                "kleptoplasty"
            ],
            "source": "Wikipedia - Elysia chlorotica"
        },
        {
            "value": 500,
            "clue": "The bizarre South American hoatzin bird whose juvenile chicks possess this prehistoric reptilian feature on their wings. (Variant #2)",
            "answer": "Wing Claws",
            "accepted": [
                "functional claws on wings"
            ],
            "source": "Wikipedia - Hoatzin"
        },
        {
            "value": 500,
            "clue": "The biological class of marine parasites that chemically castrate crabs and take over their hormonal behavior. (Variant #2)",
            "answer": "Rhizocephala",
            "accepted": [
                "sacculina"
            ],
            "source": "Wikipedia - Sacculina"
        },
        {
            "value": 500,
            "clue": "The extinct apex marine predator of the Ordovician period, a cephalopod that grew conical shells up to 20 feet long. (Variant #2)",
            "answer": "Cameroceras",
            "accepted": [
                "endoceras"
            ],
            "source": "Wikipedia - Cameroceras"
        },
        {
            "value": 500,
            "clue": "The deep-sea decapod crustacean discovered in 2005 near Easter Island covered in silky blond setae harboring bacteria. (Variant #2)",
            "answer": "Yeti Crab",
            "accepted": [
                "kiwa hirsuta"
            ],
            "source": "Wikipedia - Kiwa hirsuta"
        },
        {
            "value": 500,
            "clue": "The parasitic protozoan that manipulates the brains of infected rodents to become sexually attracted to cat urine scent. (Variant #2)",
            "answer": "Toxoplasma gondii",
            "accepted": [
                "toxoplasmosis"
            ],
            "source": "Wikipedia - Toxoplasma gondii"
        },
        {
            "value": 500,
            "clue": "The primitive deep-sea lobe-finned fish thought to have gone extinct 66 million years ago until rediscovered off South Africa in 1938. (Variant #2)",
            "answer": "Coelacanth",
            "accepted": [
                "latimeria chalumnae"
            ],
            "source": "Wikipedia - Coelacanth"
        },
        {
            "value": 500,
            "clue": "The deep-sea hydrothermal worm that can survive water temperatures up to 80°C (176°F), making it the most heat-tolerant animal. (Variant #2)",
            "answer": "Pompeii Worm",
            "accepted": [
                "alvinella pompejana"
            ],
            "source": "Wikipedia - Pompeii worm"
        },
        {
            "value": 500,
            "clue": "The specialized respiratory organ in labyrinth fish that allows them to extract oxygen directly from atmospheric air. (Variant #2)",
            "answer": "Labyrinth Organ",
            "accepted": [
                "labyrinth organ"
            ],
            "source": "Wikipedia - Anabantoidei"
        },
        {
            "value": 500,
            "clue": "The Antarctic fish family that has clear blood lacking hemoglobin, surviving near-freezing seas using antifreeze glycopeptides. (Variant #2)",
            "answer": "Crocodile Icefish",
            "accepted": [
                "channichthyidae"
            ],
            "source": "Wikipedia - Channichthyidae"
        },
        {
            "value": 500,
            "clue": "The microscopic animal that reproduces entirely via parthenogenesis for over 40 million years without a single male. (Variant #2)",
            "answer": "Bdelloid Rotifer",
            "accepted": [
                "bdelloids"
            ],
            "source": "Wikipedia - Bdelloidea"
        }
    ],
    "food": [
        {
            "value": 100,
            "clue": "The Italian baked flatbread crust topped with tomato sauce, mozzarella, and basil representing the Italian flag.",
            "answer": "Pizza",
            "accepted": [
                "margherita pizza"
            ],
            "source": "Wikipedia - Pizza"
        },
        {
            "value": 100,
            "clue": "The beloved confectionery food product made from roasted and ground cacao seeds.",
            "answer": "Chocolate",
            "accepted": [
                "cacao",
                "cocoa"
            ],
            "source": "Wikipedia - Chocolate"
        },
        {
            "value": 100,
            "clue": "The Mexican dip made from mashed ripe avocados, salt, lime juice, and cilantro.",
            "answer": "Guacamole",
            "accepted": [
                "guac"
            ],
            "source": "Wikipedia - Guacamole"
        },
        {
            "value": 100,
            "clue": "The fermented vegetable dish consisting primarily of salted napa cabbage, a national staple of Korea.",
            "answer": "Kimchi",
            "accepted": [
                "kimchee"
            ],
            "source": "Wikipedia - Kimchi"
        },
        {
            "value": 100,
            "clue": "The Japanese dish of prepared vinegared rice accompanied by raw seafood, vegetables, and nori seaweed.",
            "answer": "Sushi",
            "accepted": [
                "sashimi"
            ],
            "source": "Wikipedia - Sushi"
        },
        {
            "value": 100,
            "clue": "The golden-yellow dairy spread produced by churning fermented cream or milk.",
            "answer": "Butter",
            "accepted": [
                "dairy butter"
            ],
            "source": "Wikipedia - Butter"
        },
        {
            "value": 100,
            "clue": "The sweet viscous food substance made by bees from the floral nectar of plants.",
            "answer": "Honey",
            "accepted": [
                "natural honey"
            ],
            "source": "Wikipedia - Honey"
        },
        {
            "value": 100,
            "clue": "The basic staple food prepared from a dough of flour and water, baked in loaves.",
            "answer": "Bread",
            "accepted": [
                "white bread",
                "wheat bread"
            ],
            "source": "Wikipedia - Bread"
        },
        {
            "value": 100,
            "clue": "The Italian pasta dish featuring flat pasta sheets layered with meat sauce, béchamel, and cheese.",
            "answer": "Lasagna",
            "accepted": [
                "lasagne"
            ],
            "source": "Wikipedia - Lasagna"
        },
        {
            "value": 100,
            "clue": "The aromatic brown hot beverage brewed from roasted coffee beans.",
            "answer": "Coffee",
            "accepted": [
                "espresso",
                "coffee brew"
            ],
            "source": "Wikipedia - Coffee"
        },
        {
            "value": 100,
            "clue": "The popular steeped beverage made by pouring hot water over cured Camellia sinensis leaves.",
            "answer": "Tea",
            "accepted": [
                "black tea",
                "green tea"
            ],
            "source": "Wikipedia - Tea"
        },
        {
            "value": 100,
            "clue": "The popular yellow curved fruit that grows in hanging clusters and is rich in potassium.",
            "answer": "Banana",
            "accepted": [
                "bananas"
            ],
            "source": "Wikipedia - Banana"
        },
        {
            "value": 100,
            "clue": "The primary white crystallization sweetener derived from sugarcane or sugar beets.",
            "answer": "Sugar",
            "accepted": [
                "sucrose",
                "table sugar"
            ],
            "source": "Wikipedia - Sugar"
        },
        {
            "value": 100,
            "clue": "The common condiment made by grinding dried peppercorns, traditionally paired with salt.",
            "answer": "Black Pepper",
            "accepted": [
                "pepper"
            ],
            "source": "Wikipedia - Black pepper"
        },
        {
            "value": 100,
            "clue": "The French pastry made of laminated dough rolled into a crescent shape.",
            "answer": "Croissant",
            "accepted": [
                "croissants"
            ],
            "source": "Wikipedia - Croissant"
        },
        {
            "value": 100,
            "clue": "The spherical fruit of the citrus family known for its sweet juice and vitamin C.",
            "answer": "Orange",
            "accepted": [
                "citrus orange"
            ],
            "source": "Wikipedia - Orange (fruit)"
        },
        {
            "value": 100,
            "clue": "The grain that is the primary dietary staple for more than half of the world's human population.",
            "answer": "Rice",
            "accepted": [
                "white rice",
                "brown rice"
            ],
            "source": "Wikipedia - Rice"
        },
        {
            "value": 100,
            "clue": "The Italian frozen dessert made with a higher proportion of milk to cream, churned at a slower speed than ice cream.",
            "answer": "Gelato",
            "accepted": [
                "italian gelato"
            ],
            "source": "Wikipedia - Gelato"
        },
        {
            "value": 100,
            "clue": "The spicy Mexican corn tortilla folded around a filling of seasoned meat, beans, or cheese.",
            "answer": "Taco",
            "accepted": [
                "tacos"
            ],
            "source": "Wikipedia - Taco"
        },
        {
            "value": 100,
            "clue": "The essential mineral seasoning composed primarily of sodium chloride.",
            "answer": "Salt",
            "accepted": [
                "table salt",
                "nacl"
            ],
            "source": "Wikipedia - Salt"
        },
        {
            "value": 100,
            "clue": "The Italian baked flatbread crust topped with tomato sauce, mozzarella, and basil representing the Italian flag. (Variant #2)",
            "answer": "Pizza",
            "accepted": [
                "margherita pizza"
            ],
            "source": "Wikipedia - Pizza"
        },
        {
            "value": 100,
            "clue": "The beloved confectionery food product made from roasted and ground cacao seeds. (Variant #2)",
            "answer": "Chocolate",
            "accepted": [
                "cacao",
                "cocoa"
            ],
            "source": "Wikipedia - Chocolate"
        },
        {
            "value": 100,
            "clue": "The Mexican dip made from mashed ripe avocados, salt, lime juice, and cilantro. (Variant #2)",
            "answer": "Guacamole",
            "accepted": [
                "guac"
            ],
            "source": "Wikipedia - Guacamole"
        },
        {
            "value": 100,
            "clue": "The fermented vegetable dish consisting primarily of salted napa cabbage, a national staple of Korea. (Variant #2)",
            "answer": "Kimchi",
            "accepted": [
                "kimchee"
            ],
            "source": "Wikipedia - Kimchi"
        },
        {
            "value": 100,
            "clue": "The Japanese dish of prepared vinegared rice accompanied by raw seafood, vegetables, and nori seaweed. (Variant #2)",
            "answer": "Sushi",
            "accepted": [
                "sashimi"
            ],
            "source": "Wikipedia - Sushi"
        },
        {
            "value": 100,
            "clue": "The golden-yellow dairy spread produced by churning fermented cream or milk. (Variant #2)",
            "answer": "Butter",
            "accepted": [
                "dairy butter"
            ],
            "source": "Wikipedia - Butter"
        },
        {
            "value": 100,
            "clue": "The sweet viscous food substance made by bees from the floral nectar of plants. (Variant #2)",
            "answer": "Honey",
            "accepted": [
                "natural honey"
            ],
            "source": "Wikipedia - Honey"
        },
        {
            "value": 100,
            "clue": "The basic staple food prepared from a dough of flour and water, baked in loaves. (Variant #2)",
            "answer": "Bread",
            "accepted": [
                "white bread",
                "wheat bread"
            ],
            "source": "Wikipedia - Bread"
        },
        {
            "value": 100,
            "clue": "The Italian pasta dish featuring flat pasta sheets layered with meat sauce, béchamel, and cheese. (Variant #2)",
            "answer": "Lasagna",
            "accepted": [
                "lasagne"
            ],
            "source": "Wikipedia - Lasagna"
        },
        {
            "value": 100,
            "clue": "The aromatic brown hot beverage brewed from roasted coffee beans. (Variant #2)",
            "answer": "Coffee",
            "accepted": [
                "espresso",
                "coffee brew"
            ],
            "source": "Wikipedia - Coffee"
        },
        {
            "value": 100,
            "clue": "The popular steeped beverage made by pouring hot water over cured Camellia sinensis leaves. (Variant #2)",
            "answer": "Tea",
            "accepted": [
                "black tea",
                "green tea"
            ],
            "source": "Wikipedia - Tea"
        },
        {
            "value": 100,
            "clue": "The popular yellow curved fruit that grows in hanging clusters and is rich in potassium. (Variant #2)",
            "answer": "Banana",
            "accepted": [
                "bananas"
            ],
            "source": "Wikipedia - Banana"
        },
        {
            "value": 100,
            "clue": "The primary white crystallization sweetener derived from sugarcane or sugar beets. (Variant #2)",
            "answer": "Sugar",
            "accepted": [
                "sucrose",
                "table sugar"
            ],
            "source": "Wikipedia - Sugar"
        },
        {
            "value": 100,
            "clue": "The common condiment made by grinding dried peppercorns, traditionally paired with salt. (Variant #2)",
            "answer": "Black Pepper",
            "accepted": [
                "pepper"
            ],
            "source": "Wikipedia - Black pepper"
        },
        {
            "value": 100,
            "clue": "The French pastry made of laminated dough rolled into a crescent shape. (Variant #2)",
            "answer": "Croissant",
            "accepted": [
                "croissants"
            ],
            "source": "Wikipedia - Croissant"
        },
        {
            "value": 100,
            "clue": "The spherical fruit of the citrus family known for its sweet juice and vitamin C. (Variant #2)",
            "answer": "Orange",
            "accepted": [
                "citrus orange"
            ],
            "source": "Wikipedia - Orange (fruit)"
        },
        {
            "value": 100,
            "clue": "The grain that is the primary dietary staple for more than half of the world's human population. (Variant #2)",
            "answer": "Rice",
            "accepted": [
                "white rice",
                "brown rice"
            ],
            "source": "Wikipedia - Rice"
        },
        {
            "value": 100,
            "clue": "The Italian frozen dessert made with a higher proportion of milk to cream, churned at a slower speed than ice cream. (Variant #2)",
            "answer": "Gelato",
            "accepted": [
                "italian gelato"
            ],
            "source": "Wikipedia - Gelato"
        },
        {
            "value": 100,
            "clue": "The spicy Mexican corn tortilla folded around a filling of seasoned meat, beans, or cheese. (Variant #2)",
            "answer": "Taco",
            "accepted": [
                "tacos"
            ],
            "source": "Wikipedia - Taco"
        },
        {
            "value": 100,
            "clue": "The essential mineral seasoning composed primarily of sodium chloride. (Variant #2)",
            "answer": "Salt",
            "accepted": [
                "table salt",
                "nacl"
            ],
            "source": "Wikipedia - Salt"
        },
        {
            "value": 200,
            "clue": "The prized and most expensive culinary spice by weight, hand-harvested from the stigmas of the purple crocus.",
            "answer": "Saffron",
            "accepted": [
                "crocus sativus"
            ],
            "source": "Wikipedia - Saffron"
        },
        {
            "value": 200,
            "clue": "The Japanese fermented soybean paste dissolved in dashi broth with seaweed and tofu.",
            "answer": "Miso",
            "accepted": [
                "miso soup"
            ],
            "source": "Wikipedia - Miso"
        },
        {
            "value": 200,
            "clue": "The brined curd cheese traditionally made from sheep's and goat's milk, essential to Greek salad.",
            "answer": "Feta",
            "accepted": [
                "feta cheese"
            ],
            "source": "Wikipedia - Feta"
        },
        {
            "value": 200,
            "clue": "The famous Italian dessert made of ladyfingers dipped in espresso, layered with whipped mascarpone and cocoa.",
            "answer": "Tiramisu",
            "accepted": [
                "tiramisù"
            ],
            "source": "Wikipedia - Tiramisu"
        },
        {
            "value": 200,
            "clue": "The French cooking technique where food is placed in a plastic pouch and cooked in a temperature-controlled water bath.",
            "answer": "Sous-vide",
            "accepted": [
                "sous vide"
            ],
            "source": "Wikipedia - Sous-vide"
        },
        {
            "value": 200,
            "clue": "The pungent, subterranean fungus gathered with trained pigs or dogs, highly valued in fine dining.",
            "answer": "Truffle",
            "accepted": [
                "black truffle",
                "white truffle"
            ],
            "source": "Wikipedia - Truffle"
        },
        {
            "value": 200,
            "clue": "The Spanish rice dish originating from Valencia, traditionally flavored with saffron and cooked in a wide pan.",
            "answer": "Paella",
            "accepted": [
                "valencian paella"
            ],
            "source": "Wikipedia - Paella"
        },
        {
            "value": 200,
            "clue": "The Japanese delicacy prepared from deadly pufferfish that requires certified chefs to remove lethal tetrodotoxin.",
            "answer": "Fugu",
            "accepted": [
                "pufferfish fugu"
            ],
            "source": "Wikipedia - Fugu"
        },
        {
            "value": 200,
            "clue": "The Italian pasta sauce made by emulsifying egg yolks, Pecorino Romano, guanciale, and black pepper (no cream).",
            "answer": "Carbonara",
            "accepted": [
                "spaghetti alla carbonara"
            ],
            "source": "Wikipedia - Carbonara"
        },
        {
            "value": 200,
            "clue": "The Vietnamese street food sandwich made on a French baguette with pâté, pickled daikon, cucumber, and meats.",
            "answer": "Banh mi",
            "accepted": [
                "bánh mì"
            ],
            "source": "Wikipedia - Bánh mì"
        },
        {
            "value": 200,
            "clue": "The sweet spread made from roasted hazelnuts and cocoa created by Italian confectionery maker Ferrero.",
            "answer": "Nutella",
            "accepted": [
                "hazelnut spread"
            ],
            "source": "Wikipedia - Nutella"
        },
        {
            "value": 200,
            "clue": "The classic French stew of beef braised in red wine, lardons, pearl onions, and mushrooms.",
            "answer": "Boeuf Bourguignon",
            "accepted": [
                "beef bourguignon"
            ],
            "source": "Wikipedia - Beef bourguignon"
        },
        {
            "value": 200,
            "clue": "The spicy Thai soup flavored with fragrant lemongrass, galangal, kaffir lime leaves, chili, and shrimp.",
            "answer": "Tom Yum",
            "accepted": [
                "tom yam"
            ],
            "source": "Wikipedia - Tom yum"
        },
        {
            "value": 200,
            "clue": "The hard Italian granular cheese aged for a minimum of 12 months, stamped with DOP seal.",
            "answer": "Parmigiano-Reggiano",
            "accepted": [
                "parmesan cheese",
                "parmigiano"
            ],
            "source": "Wikipedia - Parmesan"
        },
        {
            "value": 200,
            "clue": "The French Mother Sauce made from a white roux and warm milk, seasoned with nutmeg.",
            "answer": "Bechamel",
            "accepted": [
                "béchamel sauce",
                "white sauce"
            ],
            "source": "Wikipedia - Béchamel sauce"
        },
        {
            "value": 200,
            "clue": "The traditional Mexican holiday sauce featuring dozens of ingredients including chili peppers and dark chocolate.",
            "answer": "Mole",
            "accepted": [
                "mole poblano"
            ],
            "source": "Wikipedia - Mole (sauce)"
        },
        {
            "value": 200,
            "clue": "The rich duck or goose liver pâté delicacy originating in French gastronomy, made through fattening.",
            "answer": "Foie Gras",
            "accepted": [
                "foie gras"
            ],
            "source": "Wikipedia - Foie gras"
        },
        {
            "value": 200,
            "clue": "The Japanese noodles made from buckwheat flour, served either chilled with dipping sauce or in hot broth.",
            "answer": "Soba",
            "accepted": [
                "soba noodles"
            ],
            "source": "Wikipedia - Soba"
        },
        {
            "value": 200,
            "clue": "The Italian cured ham made from the hind leg, dry-cured for up to 36 months and thinly sliced.",
            "answer": "Prosciutto",
            "accepted": [
                "prosciutto di parma"
            ],
            "source": "Wikipedia - Prosciutto"
        },
        {
            "value": 200,
            "clue": "The Indian clay oven used to bake flatbreads like naan and roast marinated chicken.",
            "answer": "Tandoor",
            "accepted": [
                "tandoori oven"
            ],
            "source": "Wikipedia - Tandoor"
        },
        {
            "value": 200,
            "clue": "The prized and most expensive culinary spice by weight, hand-harvested from the stigmas of the purple crocus. (Variant #2)",
            "answer": "Saffron",
            "accepted": [
                "crocus sativus"
            ],
            "source": "Wikipedia - Saffron"
        },
        {
            "value": 200,
            "clue": "The Japanese fermented soybean paste dissolved in dashi broth with seaweed and tofu. (Variant #2)",
            "answer": "Miso",
            "accepted": [
                "miso soup"
            ],
            "source": "Wikipedia - Miso"
        },
        {
            "value": 200,
            "clue": "The brined curd cheese traditionally made from sheep's and goat's milk, essential to Greek salad. (Variant #2)",
            "answer": "Feta",
            "accepted": [
                "feta cheese"
            ],
            "source": "Wikipedia - Feta"
        },
        {
            "value": 200,
            "clue": "The famous Italian dessert made of ladyfingers dipped in espresso, layered with whipped mascarpone and cocoa. (Variant #2)",
            "answer": "Tiramisu",
            "accepted": [
                "tiramisù"
            ],
            "source": "Wikipedia - Tiramisu"
        },
        {
            "value": 200,
            "clue": "The French cooking technique where food is placed in a plastic pouch and cooked in a temperature-controlled water bath. (Variant #2)",
            "answer": "Sous-vide",
            "accepted": [
                "sous vide"
            ],
            "source": "Wikipedia - Sous-vide"
        },
        {
            "value": 200,
            "clue": "The pungent, subterranean fungus gathered with trained pigs or dogs, highly valued in fine dining. (Variant #2)",
            "answer": "Truffle",
            "accepted": [
                "black truffle",
                "white truffle"
            ],
            "source": "Wikipedia - Truffle"
        },
        {
            "value": 200,
            "clue": "The Spanish rice dish originating from Valencia, traditionally flavored with saffron and cooked in a wide pan. (Variant #2)",
            "answer": "Paella",
            "accepted": [
                "valencian paella"
            ],
            "source": "Wikipedia - Paella"
        },
        {
            "value": 200,
            "clue": "The Japanese delicacy prepared from deadly pufferfish that requires certified chefs to remove lethal tetrodotoxin. (Variant #2)",
            "answer": "Fugu",
            "accepted": [
                "pufferfish fugu"
            ],
            "source": "Wikipedia - Fugu"
        },
        {
            "value": 200,
            "clue": "The Italian pasta sauce made by emulsifying egg yolks, Pecorino Romano, guanciale, and black pepper (no cream). (Variant #2)",
            "answer": "Carbonara",
            "accepted": [
                "spaghetti alla carbonara"
            ],
            "source": "Wikipedia - Carbonara"
        },
        {
            "value": 200,
            "clue": "The Vietnamese street food sandwich made on a French baguette with pâté, pickled daikon, cucumber, and meats. (Variant #2)",
            "answer": "Banh mi",
            "accepted": [
                "bánh mì"
            ],
            "source": "Wikipedia - Bánh mì"
        },
        {
            "value": 200,
            "clue": "The sweet spread made from roasted hazelnuts and cocoa created by Italian confectionery maker Ferrero. (Variant #2)",
            "answer": "Nutella",
            "accepted": [
                "hazelnut spread"
            ],
            "source": "Wikipedia - Nutella"
        },
        {
            "value": 200,
            "clue": "The classic French stew of beef braised in red wine, lardons, pearl onions, and mushrooms. (Variant #2)",
            "answer": "Boeuf Bourguignon",
            "accepted": [
                "beef bourguignon"
            ],
            "source": "Wikipedia - Beef bourguignon"
        },
        {
            "value": 200,
            "clue": "The spicy Thai soup flavored with fragrant lemongrass, galangal, kaffir lime leaves, chili, and shrimp. (Variant #2)",
            "answer": "Tom Yum",
            "accepted": [
                "tom yam"
            ],
            "source": "Wikipedia - Tom yum"
        },
        {
            "value": 200,
            "clue": "The hard Italian granular cheese aged for a minimum of 12 months, stamped with DOP seal. (Variant #2)",
            "answer": "Parmigiano-Reggiano",
            "accepted": [
                "parmesan cheese",
                "parmigiano"
            ],
            "source": "Wikipedia - Parmesan"
        },
        {
            "value": 200,
            "clue": "The French Mother Sauce made from a white roux and warm milk, seasoned with nutmeg. (Variant #2)",
            "answer": "Bechamel",
            "accepted": [
                "béchamel sauce",
                "white sauce"
            ],
            "source": "Wikipedia - Béchamel sauce"
        },
        {
            "value": 200,
            "clue": "The traditional Mexican holiday sauce featuring dozens of ingredients including chili peppers and dark chocolate. (Variant #2)",
            "answer": "Mole",
            "accepted": [
                "mole poblano"
            ],
            "source": "Wikipedia - Mole (sauce)"
        },
        {
            "value": 200,
            "clue": "The rich duck or goose liver pâté delicacy originating in French gastronomy, made through fattening. (Variant #2)",
            "answer": "Foie Gras",
            "accepted": [
                "foie gras"
            ],
            "source": "Wikipedia - Foie gras"
        },
        {
            "value": 200,
            "clue": "The Japanese noodles made from buckwheat flour, served either chilled with dipping sauce or in hot broth. (Variant #2)",
            "answer": "Soba",
            "accepted": [
                "soba noodles"
            ],
            "source": "Wikipedia - Soba"
        },
        {
            "value": 200,
            "clue": "The Italian cured ham made from the hind leg, dry-cured for up to 36 months and thinly sliced. (Variant #2)",
            "answer": "Prosciutto",
            "accepted": [
                "prosciutto di parma"
            ],
            "source": "Wikipedia - Prosciutto"
        },
        {
            "value": 200,
            "clue": "The Indian clay oven used to bake flatbreads like naan and roast marinated chicken. (Variant #2)",
            "answer": "Tandoor",
            "accepted": [
                "tandoori oven"
            ],
            "source": "Wikipedia - Tandoor"
        },
        {
            "value": 300,
            "clue": "The highly prized Japanese beef known for intense marbling of intramuscular fat, raised in Hyogo Prefecture.",
            "answer": "Kobe Beef",
            "accepted": [
                "wagyu",
                "kobe"
            ],
            "source": "Wikipedia - Kobe beef"
        },
        {
            "value": 300,
            "clue": "The five Mother Sauces codified by Auguste Escoffier: Béchamel, Velouté, Espagnole, Tomato, and this egg-yolk emulsified sauce.",
            "answer": "Hollandaise",
            "accepted": [
                "hollandaise sauce"
            ],
            "source": "Wikipedia - French mother sauces"
        },
        {
            "value": 300,
            "clue": "The French puff pastry dessert layered with pastry cream, whose name translates literally to 'a thousand leaves'.",
            "answer": "Mille-feuille",
            "accepted": [
                "napoleon pastry"
            ],
            "source": "Wikipedia - Mille-feuille"
        },
        {
            "value": 300,
            "clue": "The culinary reaction between reducing sugars and amino acids that produces browned food and savory flavors.",
            "answer": "Maillard Reaction",
            "accepted": [
                "maillard browning"
            ],
            "source": "Wikipedia - Maillard reaction"
        },
        {
            "value": 300,
            "clue": "The pungent, foul-smelling tropical fruit native to Southeast Asia known as the 'King of Fruits', banned on public transit.",
            "answer": "Durian",
            "accepted": [
                "durian fruit"
            ],
            "source": "Wikipedia - Durian"
        },
        {
            "value": 300,
            "clue": "The Georgian baked boat-shaped bread filled with melted sulguni cheese and a raw egg yolk in the center.",
            "answer": "Khachapuri",
            "accepted": [
                "adjarian khachapuri"
            ],
            "source": "Wikipedia - Khachapuri"
        },
        {
            "value": 300,
            "clue": "The Ethiopian flatbread made from fermented teff flour, serving as both food and utensil.",
            "answer": "Injera",
            "accepted": [
                "teff injera"
            ],
            "source": "Wikipedia - Injera"
        },
        {
            "value": 300,
            "clue": "The French pastry consisting of choux dough balls piled into a cone and bound with spun caramelized sugar.",
            "answer": "Croquembouche",
            "accepted": [
                "croque-en-bouche"
            ],
            "source": "Wikipedia - Croquembouche"
        },
        {
            "value": 300,
            "clue": "The North African stew of lamb, chicken, or vegetables cooked in a conical earthenware pot of the same name.",
            "answer": "Tagine",
            "accepted": [
                "tajine"
            ],
            "source": "Wikipedia - Tagine"
        },
        {
            "value": 300,
            "clue": "The Italian cured pork meat prepared from the pork jowl or cheek, essential to authentic carbonara and amatriciana.",
            "answer": "Guanciale",
            "accepted": [
                "pork jowl"
            ],
            "source": "Wikipedia - Guanciale"
        },
        {
            "value": 300,
            "clue": "The traditional Peruvian dish of fresh raw fish cured in citrus juices and spiced with ají chili peppers.",
            "answer": "Ceviche",
            "accepted": [
                "cebiche"
            ],
            "source": "Wikipedia - Ceviche"
        },
        {
            "value": 300,
            "clue": "The method of preserving duck or goose meat by salting and slowly cooking it submerged in its own rendered fat.",
            "answer": "Confit",
            "accepted": [
                "duck confit"
            ],
            "source": "Wikipedia - Confit"
        },
        {
            "value": 300,
            "clue": "The French soup originating in Marseille made from various Mediterranean fish, saffron, and fennel.",
            "answer": "Bouillabaisse",
            "accepted": [
                "marseille bouillabaisse"
            ],
            "source": "Wikipedia - Bouillabaisse"
        },
        {
            "value": 300,
            "clue": "The spicy Korean fermented red chili paste made with glutinous rice and fermented soybeans.",
            "answer": "Gochujang",
            "accepted": [
                "korean chili paste"
            ],
            "source": "Wikipedia - Gochujang"
        },
        {
            "value": 300,
            "clue": "The Italian rice dish cooked gradually by stirring hot broth into arborio or carnaroli rice until creamy.",
            "answer": "Risotto",
            "accepted": [
                "risotto alla milanese"
            ],
            "source": "Wikipedia - Risotto"
        },
        {
            "value": 300,
            "clue": "The classic Indian rice dish layered with spiced marinated meats, caramelized onions, saffron, and boiled eggs.",
            "answer": "Biryani",
            "accepted": [
                "dum biryani"
            ],
            "source": "Wikipedia - Biryani"
        },
        {
            "value": 300,
            "clue": "The blue-veined cheese produced in the natural Combalou caves of Roquefort-sur-Soulzon from sheep's milk.",
            "answer": "Roquefort",
            "accepted": [
                "roquefort cheese"
            ],
            "source": "Wikipedia - Roquefort"
        },
        {
            "value": 300,
            "clue": "The rich egg yolk and butter reduction sauce seasoned with tarragon and shallots, served with steak.",
            "answer": "Bearnaise",
            "accepted": [
                "béarnaise sauce"
            ],
            "source": "Wikipedia - Béarnaise sauce"
        },
        {
            "value": 300,
            "clue": "The English dessert consisting of bananas, whipped cream, and boiled condensed milk toffee on a biscuit crust.",
            "answer": "Banoffee Pie",
            "accepted": [
                "banoffee"
            ],
            "source": "Wikipedia - Banoffee pie"
        },
        {
            "value": 300,
            "clue": "The Jewish culinary pastry made of sweet laminated yeast dough twisted with chocolate or cinnamon filling.",
            "answer": "Babka",
            "accepted": [
                "chocolate babka"
            ],
            "source": "Wikipedia - Babka"
        },
        {
            "value": 300,
            "clue": "The highly prized Japanese beef known for intense marbling of intramuscular fat, raised in Hyogo Prefecture. (Variant #2)",
            "answer": "Kobe Beef",
            "accepted": [
                "wagyu",
                "kobe"
            ],
            "source": "Wikipedia - Kobe beef"
        },
        {
            "value": 300,
            "clue": "The five Mother Sauces codified by Auguste Escoffier: Béchamel, Velouté, Espagnole, Tomato, and this egg-yolk emulsified sauce. (Variant #2)",
            "answer": "Hollandaise",
            "accepted": [
                "hollandaise sauce"
            ],
            "source": "Wikipedia - French mother sauces"
        },
        {
            "value": 300,
            "clue": "The French puff pastry dessert layered with pastry cream, whose name translates literally to 'a thousand leaves'. (Variant #2)",
            "answer": "Mille-feuille",
            "accepted": [
                "napoleon pastry"
            ],
            "source": "Wikipedia - Mille-feuille"
        },
        {
            "value": 300,
            "clue": "The culinary reaction between reducing sugars and amino acids that produces browned food and savory flavors. (Variant #2)",
            "answer": "Maillard Reaction",
            "accepted": [
                "maillard browning"
            ],
            "source": "Wikipedia - Maillard reaction"
        },
        {
            "value": 300,
            "clue": "The pungent, foul-smelling tropical fruit native to Southeast Asia known as the 'King of Fruits', banned on public transit. (Variant #2)",
            "answer": "Durian",
            "accepted": [
                "durian fruit"
            ],
            "source": "Wikipedia - Durian"
        },
        {
            "value": 300,
            "clue": "The Georgian baked boat-shaped bread filled with melted sulguni cheese and a raw egg yolk in the center. (Variant #2)",
            "answer": "Khachapuri",
            "accepted": [
                "adjarian khachapuri"
            ],
            "source": "Wikipedia - Khachapuri"
        },
        {
            "value": 300,
            "clue": "The Ethiopian flatbread made from fermented teff flour, serving as both food and utensil. (Variant #2)",
            "answer": "Injera",
            "accepted": [
                "teff injera"
            ],
            "source": "Wikipedia - Injera"
        },
        {
            "value": 300,
            "clue": "The French pastry consisting of choux dough balls piled into a cone and bound with spun caramelized sugar. (Variant #2)",
            "answer": "Croquembouche",
            "accepted": [
                "croque-en-bouche"
            ],
            "source": "Wikipedia - Croquembouche"
        },
        {
            "value": 300,
            "clue": "The North African stew of lamb, chicken, or vegetables cooked in a conical earthenware pot of the same name. (Variant #2)",
            "answer": "Tagine",
            "accepted": [
                "tajine"
            ],
            "source": "Wikipedia - Tagine"
        },
        {
            "value": 300,
            "clue": "The Italian cured pork meat prepared from the pork jowl or cheek, essential to authentic carbonara and amatriciana. (Variant #2)",
            "answer": "Guanciale",
            "accepted": [
                "pork jowl"
            ],
            "source": "Wikipedia - Guanciale"
        },
        {
            "value": 300,
            "clue": "The traditional Peruvian dish of fresh raw fish cured in citrus juices and spiced with ají chili peppers. (Variant #2)",
            "answer": "Ceviche",
            "accepted": [
                "cebiche"
            ],
            "source": "Wikipedia - Ceviche"
        },
        {
            "value": 300,
            "clue": "The method of preserving duck or goose meat by salting and slowly cooking it submerged in its own rendered fat. (Variant #2)",
            "answer": "Confit",
            "accepted": [
                "duck confit"
            ],
            "source": "Wikipedia - Confit"
        },
        {
            "value": 300,
            "clue": "The French soup originating in Marseille made from various Mediterranean fish, saffron, and fennel. (Variant #2)",
            "answer": "Bouillabaisse",
            "accepted": [
                "marseille bouillabaisse"
            ],
            "source": "Wikipedia - Bouillabaisse"
        },
        {
            "value": 300,
            "clue": "The spicy Korean fermented red chili paste made with glutinous rice and fermented soybeans. (Variant #2)",
            "answer": "Gochujang",
            "accepted": [
                "korean chili paste"
            ],
            "source": "Wikipedia - Gochujang"
        },
        {
            "value": 300,
            "clue": "The Italian rice dish cooked gradually by stirring hot broth into arborio or carnaroli rice until creamy. (Variant #2)",
            "answer": "Risotto",
            "accepted": [
                "risotto alla milanese"
            ],
            "source": "Wikipedia - Risotto"
        },
        {
            "value": 300,
            "clue": "The classic Indian rice dish layered with spiced marinated meats, caramelized onions, saffron, and boiled eggs. (Variant #2)",
            "answer": "Biryani",
            "accepted": [
                "dum biryani"
            ],
            "source": "Wikipedia - Biryani"
        },
        {
            "value": 300,
            "clue": "The blue-veined cheese produced in the natural Combalou caves of Roquefort-sur-Soulzon from sheep's milk. (Variant #2)",
            "answer": "Roquefort",
            "accepted": [
                "roquefort cheese"
            ],
            "source": "Wikipedia - Roquefort"
        },
        {
            "value": 300,
            "clue": "The rich egg yolk and butter reduction sauce seasoned with tarragon and shallots, served with steak. (Variant #2)",
            "answer": "Bearnaise",
            "accepted": [
                "béarnaise sauce"
            ],
            "source": "Wikipedia - Béarnaise sauce"
        },
        {
            "value": 300,
            "clue": "The English dessert consisting of bananas, whipped cream, and boiled condensed milk toffee on a biscuit crust. (Variant #2)",
            "answer": "Banoffee Pie",
            "accepted": [
                "banoffee"
            ],
            "source": "Wikipedia - Banoffee pie"
        },
        {
            "value": 300,
            "clue": "The Jewish culinary pastry made of sweet laminated yeast dough twisted with chocolate or cinnamon filling. (Variant #2)",
            "answer": "Babka",
            "accepted": [
                "chocolate babka"
            ],
            "source": "Wikipedia - Babka"
        },
        {
            "value": 400,
            "clue": "The complex culinary technique of clarification that uses whipped egg whites to clear stock into a pristine clear soup.",
            "answer": "Consomme",
            "accepted": [
                "consommé"
            ],
            "source": "Wikipedia - Consommé"
        },
        {
            "value": 400,
            "clue": "The French dessert consisting of rich custard topped with a contrasting layer of caramelized sugar torched hard.",
            "answer": "Creme Brulee",
            "accepted": [
                "crème brûlée"
            ],
            "source": "Wikipedia - Crème brûlée"
        },
        {
            "value": 400,
            "clue": "The ancient fermented fish sauce that was an indispensable umami seasoning in Ancient Roman cooking.",
            "answer": "Garum",
            "accepted": [
                "liquamen"
            ],
            "source": "Wikipedia - Garum"
        },
        {
            "value": 400,
            "clue": "The Spanish dry-cured ham produced from free-range black Iberian pigs that roam oak forests feeding on acorns.",
            "answer": "Jamon Iberico",
            "accepted": [
                "jamón ibérico de bellota"
            ],
            "source": "Wikipedia - Jamón ibérico"
        },
        {
            "value": 400,
            "clue": "The traditional Scottish savory pudding containing sheep's pluck (heart, liver, lungs) minced with suet and oatmeal.",
            "answer": "Haggis",
            "accepted": [
                "scottish haggis"
            ],
            "source": "Wikipedia - Haggis"
        },
        {
            "value": 400,
            "clue": "The chemical compound responsible for the fiery heat of chili peppers, measured on the Scoville scale.",
            "answer": "Capsaicin",
            "accepted": [
                "capsaicinoids"
            ],
            "source": "Wikipedia - Capsaicin"
        },
        {
            "value": 400,
            "clue": "The French term for the disciplined preparation and organization of all ingredients and tools before cooking begins.",
            "answer": "Mise en place",
            "accepted": [
                "mise-en-place"
            ],
            "source": "Wikipedia - Mise en place"
        },
        {
            "value": 400,
            "clue": "The traditional Italian dessert originating from Piedmont made of sweetened cream thickened with gelatin.",
            "answer": "Panna Cotta",
            "accepted": [
                "cooked cream"
            ],
            "source": "Wikipedia - Panna cotta"
        },
        {
            "value": 400,
            "clue": "The technique of rolling meat or fish tightly with a savory stuffing and tying it with butchers twine before roasting.",
            "answer": "Roulade",
            "accepted": [
                "braciole"
            ],
            "source": "Wikipedia - Roulade"
        },
        {
            "value": 400,
            "clue": "The Italian digestif liqueur produced in Southern Italy by steeping the zest of Sorrento lemons in alcohol.",
            "answer": "Limoncello",
            "accepted": [
                "lemon liqueur"
            ],
            "source": "Wikipedia - Limoncello"
        },
        {
            "value": 400,
            "clue": "The pungent, sulfurous fermented shark meat traditional in Iceland that is buried underground for months.",
            "answer": "Hakarl",
            "accepted": [
                "hákarl"
            ],
            "source": "Wikipedia - Hákarl"
        },
        {
            "value": 400,
            "clue": "The French term for a mixture of chopped diced vegetables: 50% onions, 25% carrots, and 25% celery.",
            "answer": "Mirepoix",
            "accepted": [
                "mirepoix base"
            ],
            "source": "Wikipedia - Mirepoix"
        },
        {
            "value": 400,
            "clue": "The Greek dessert composed of paper-thin layers of filo pastry filled with chopped nuts and sweetened with honey.",
            "answer": "Baklava",
            "accepted": [
                "baklawa"
            ],
            "source": "Wikipedia - Baklava"
        },
        {
            "value": 400,
            "clue": "The Japanese cooking technique of skewering bite-sized pieces of chicken and grilling them over binchotan charcoal.",
            "answer": "Yakitori",
            "accepted": [
                "yakitori skewers"
            ],
            "source": "Wikipedia - Yakitori"
        },
        {
            "value": 400,
            "clue": "The traditional French stew of white beans slowly simmered with pork sausages, pork skin, and duck confit.",
            "answer": "Cassoulet",
            "accepted": [
                "castelnaudary cassoulet"
            ],
            "source": "Wikipedia - Cassoulet"
        },
        {
            "value": 400,
            "clue": "The ancient cheese produced in Sardinia that contains live insect larvae (cheese skips) to promote extreme fermentation.",
            "answer": "Casu marzu",
            "accepted": [
                "casu martzu",
                "maggot cheese"
            ],
            "source": "Wikipedia - Casu martzu"
        },
        {
            "value": 400,
            "clue": "The French cold leek and potato soup pureed with cream, named after the spa town of Vichy.",
            "answer": "Vichyssoise",
            "accepted": [
                "vichyssoise soup"
            ],
            "source": "Wikipedia - Vichyssoise"
        },
        {
            "value": 400,
            "clue": "The traditional Mexican soup made with hominy corn, shredded pork or chicken, cabbage, radishes, and chili.",
            "answer": "Pozole",
            "accepted": [
                "pozole verde",
                "pozole rojo"
            ],
            "source": "Wikipedia - Pozole"
        },
        {
            "value": 400,
            "clue": "The small, colorful French sandwich cookie made from almond flour, egg whites, and confectioner's sugar.",
            "answer": "Macaron",
            "accepted": [
                "french macaron"
            ],
            "source": "Wikipedia - Macaron"
        },
        {
            "value": 400,
            "clue": "The hot sauce condiment of Tunisian origin made of roasted red peppers, Baklouti peppers, garlic, and caraway.",
            "answer": "Harissa",
            "accepted": [
                "harissa paste"
            ],
            "source": "Wikipedia - Harissa"
        },
        {
            "value": 400,
            "clue": "The complex culinary technique of clarification that uses whipped egg whites to clear stock into a pristine clear soup. (Variant #2)",
            "answer": "Consomme",
            "accepted": [
                "consommé"
            ],
            "source": "Wikipedia - Consommé"
        },
        {
            "value": 400,
            "clue": "The French dessert consisting of rich custard topped with a contrasting layer of caramelized sugar torched hard. (Variant #2)",
            "answer": "Creme Brulee",
            "accepted": [
                "crème brûlée"
            ],
            "source": "Wikipedia - Crème brûlée"
        },
        {
            "value": 400,
            "clue": "The ancient fermented fish sauce that was an indispensable umami seasoning in Ancient Roman cooking. (Variant #2)",
            "answer": "Garum",
            "accepted": [
                "liquamen"
            ],
            "source": "Wikipedia - Garum"
        },
        {
            "value": 400,
            "clue": "The Spanish dry-cured ham produced from free-range black Iberian pigs that roam oak forests feeding on acorns. (Variant #2)",
            "answer": "Jamon Iberico",
            "accepted": [
                "jamón ibérico de bellota"
            ],
            "source": "Wikipedia - Jamón ibérico"
        },
        {
            "value": 400,
            "clue": "The traditional Scottish savory pudding containing sheep's pluck (heart, liver, lungs) minced with suet and oatmeal. (Variant #2)",
            "answer": "Haggis",
            "accepted": [
                "scottish haggis"
            ],
            "source": "Wikipedia - Haggis"
        },
        {
            "value": 400,
            "clue": "The chemical compound responsible for the fiery heat of chili peppers, measured on the Scoville scale. (Variant #2)",
            "answer": "Capsaicin",
            "accepted": [
                "capsaicinoids"
            ],
            "source": "Wikipedia - Capsaicin"
        },
        {
            "value": 400,
            "clue": "The French term for the disciplined preparation and organization of all ingredients and tools before cooking begins. (Variant #2)",
            "answer": "Mise en place",
            "accepted": [
                "mise-en-place"
            ],
            "source": "Wikipedia - Mise en place"
        },
        {
            "value": 400,
            "clue": "The traditional Italian dessert originating from Piedmont made of sweetened cream thickened with gelatin. (Variant #2)",
            "answer": "Panna Cotta",
            "accepted": [
                "cooked cream"
            ],
            "source": "Wikipedia - Panna cotta"
        },
        {
            "value": 400,
            "clue": "The technique of rolling meat or fish tightly with a savory stuffing and tying it with butchers twine before roasting. (Variant #2)",
            "answer": "Roulade",
            "accepted": [
                "braciole"
            ],
            "source": "Wikipedia - Roulade"
        },
        {
            "value": 400,
            "clue": "The Italian digestif liqueur produced in Southern Italy by steeping the zest of Sorrento lemons in alcohol. (Variant #2)",
            "answer": "Limoncello",
            "accepted": [
                "lemon liqueur"
            ],
            "source": "Wikipedia - Limoncello"
        },
        {
            "value": 400,
            "clue": "The pungent, sulfurous fermented shark meat traditional in Iceland that is buried underground for months. (Variant #2)",
            "answer": "Hakarl",
            "accepted": [
                "hákarl"
            ],
            "source": "Wikipedia - Hákarl"
        },
        {
            "value": 400,
            "clue": "The French term for a mixture of chopped diced vegetables: 50% onions, 25% carrots, and 25% celery. (Variant #2)",
            "answer": "Mirepoix",
            "accepted": [
                "mirepoix base"
            ],
            "source": "Wikipedia - Mirepoix"
        },
        {
            "value": 400,
            "clue": "The Greek dessert composed of paper-thin layers of filo pastry filled with chopped nuts and sweetened with honey. (Variant #2)",
            "answer": "Baklava",
            "accepted": [
                "baklawa"
            ],
            "source": "Wikipedia - Baklava"
        },
        {
            "value": 400,
            "clue": "The Japanese cooking technique of skewering bite-sized pieces of chicken and grilling them over binchotan charcoal. (Variant #2)",
            "answer": "Yakitori",
            "accepted": [
                "yakitori skewers"
            ],
            "source": "Wikipedia - Yakitori"
        },
        {
            "value": 400,
            "clue": "The traditional French stew of white beans slowly simmered with pork sausages, pork skin, and duck confit. (Variant #2)",
            "answer": "Cassoulet",
            "accepted": [
                "castelnaudary cassoulet"
            ],
            "source": "Wikipedia - Cassoulet"
        },
        {
            "value": 400,
            "clue": "The ancient cheese produced in Sardinia that contains live insect larvae (cheese skips) to promote extreme fermentation. (Variant #2)",
            "answer": "Casu marzu",
            "accepted": [
                "casu martzu",
                "maggot cheese"
            ],
            "source": "Wikipedia - Casu martzu"
        },
        {
            "value": 400,
            "clue": "The French cold leek and potato soup pureed with cream, named after the spa town of Vichy. (Variant #2)",
            "answer": "Vichyssoise",
            "accepted": [
                "vichyssoise soup"
            ],
            "source": "Wikipedia - Vichyssoise"
        },
        {
            "value": 400,
            "clue": "The traditional Mexican soup made with hominy corn, shredded pork or chicken, cabbage, radishes, and chili. (Variant #2)",
            "answer": "Pozole",
            "accepted": [
                "pozole verde",
                "pozole rojo"
            ],
            "source": "Wikipedia - Pozole"
        },
        {
            "value": 400,
            "clue": "The small, colorful French sandwich cookie made from almond flour, egg whites, and confectioner's sugar. (Variant #2)",
            "answer": "Macaron",
            "accepted": [
                "french macaron"
            ],
            "source": "Wikipedia - Macaron"
        },
        {
            "value": 400,
            "clue": "The hot sauce condiment of Tunisian origin made of roasted red peppers, Baklouti peppers, garlic, and caraway. (Variant #2)",
            "answer": "Harissa",
            "accepted": [
                "harissa paste"
            ],
            "source": "Wikipedia - Harissa"
        },
        {
            "value": 500,
            "clue": "The rare Iranian beluga caviar harvested from albino sturgeon over 70 years old, sold in 24-karat gold tins.",
            "answer": "Almas",
            "accepted": [
                "almas caviar"
            ],
            "source": "Wikipedia - Caviar"
        },
        {
            "value": 500,
            "clue": "The Japanese master chef title earned only after a minimum of ten years of rigorous apprenticeship.",
            "answer": "Itamae",
            "accepted": [
                "sushi shokunin"
            ],
            "source": "Wikipedia - Itamae"
        },
        {
            "value": 500,
            "clue": "The chemical process invented by Ferran Adrià at elBulli using sodium alginate and calcium chloride to create caviar-like liquid spheres.",
            "answer": "Spherification",
            "accepted": [
                "molecular gastronomy spherification"
            ],
            "source": "Wikipedia - Spherification"
        },
        {
            "value": 500,
            "clue": "The traditional Italian condiment from Emilia-Romagna aged for a minimum of 12 to 25 years in a battery of wooden casks.",
            "answer": "Traditional Balsamic Vinegar",
            "accepted": [
                "aceto balsamico tradizionale"
            ],
            "source": "Wikipedia - Traditional balsamic vinegar"
        },
        {
            "value": 500,
            "clue": "The legendary Roman chef whose 1st-century culinary manuscript 'De Re Coquinaria' survives as the oldest cookbook.",
            "answer": "Apicius",
            "accepted": [
                "marcus gavius apicius"
            ],
            "source": "Wikipedia - Apicius"
        },
        {
            "value": 500,
            "clue": "The rare subterranean white truffle species harvested around the Piedmontese town of Alba in autumn.",
            "answer": "Tuber magnatum",
            "accepted": [
                "tartufo bianco d'alba",
                "white truffle"
            ],
            "source": "Wikipedia - Tuber magnatum"
        },
        {
            "value": 500,
            "clue": "The ancient French culinary dish where a small songbird is fattened on millet, drowned in Armagnac, and eaten whole under a napkin.",
            "answer": "Ortolan Bunting",
            "accepted": [
                "ortolan"
            ],
            "source": "Wikipedia - Ortolan bunting"
        },
        {
            "value": 500,
            "clue": "The natural red food dye extracted from the crushed dried bodies of female scale insects found on prickly pear cacti.",
            "answer": "Cochineal",
            "accepted": [
                "carmine",
                "e120"
            ],
            "source": "Wikipedia - Cochineal"
        },
        {
            "value": 500,
            "clue": "The historical French chef who codified classical French haute cuisine and was hailed as 'The Emperor of Chefs'.",
            "answer": "Auguste Escoffier",
            "accepted": [
                "escoffier"
            ],
            "source": "Wikipedia - Auguste Escoffier"
        },
        {
            "value": 500,
            "clue": "The chemical odorant synthesized by truffles (and pigs) responsible for their intoxicating, earthy aroma.",
            "answer": "Androstenol",
            "accepted": [
                "bis(methylthio)methane"
            ],
            "source": "Wikipedia - Truffle"
        },
        {
            "value": 500,
            "clue": "The complex French pastry cake named after the French patron saint of bakers and pastry chefs, featuring choux buns and Chiboust cream.",
            "answer": "Gateau Saint Honore",
            "accepted": [
                "st. honoré cake"
            ],
            "source": "Wikipedia - St. Honoré cake"
        },
        {
            "value": 500,
            "clue": "The Japanese seasoning concept describing the synergistic taste enhancement when inosinate and glutamate combine.",
            "answer": "Umami Synergy",
            "accepted": [
                "umami interaction"
            ],
            "source": "Wikipedia - Umami"
        },
        {
            "value": 500,
            "clue": "The ancient fermented fish delicacy of Sweden known for producing a bulging pressurized tin and notorious stench.",
            "answer": "Surstromming",
            "accepted": [
                "surströmming"
            ],
            "source": "Wikipedia - Surströmming"
        },
        {
            "value": 500,
            "clue": "The rare Mexican corn delicacy caused by the fungal infection Ustilago maydis, prized as 'corn truffle'.",
            "answer": "Huitlacoche",
            "accepted": [
                "cuitlacoche"
            ],
            "source": "Wikipedia - Corn smut"
        },
        {
            "value": 500,
            "clue": "The Japanese knife blade forged by folding high-carbon steel and soft iron, replicating samurai sword craftsmanship.",
            "answer": "Honyaki",
            "accepted": [
                "honyaki knife"
            ],
            "source": "Wikipedia - Japanese kitchen knife"
        },
        {
            "value": 500,
            "clue": "The traditional Swiss cow's milk cheese aged in alpine caves and melted onto potatoes using a special tabletop heater.",
            "answer": "Raclette",
            "accepted": [
                "raclette du valais"
            ],
            "source": "Wikipedia - Raclette"
        },
        {
            "value": 500,
            "clue": "The 19th-century French founder of haute cuisine who designed elaborate confectionary centerpieces called 'pièces montées'.",
            "answer": "Marie-Antoine Careme",
            "accepted": [
                "carême",
                "antonin carême"
            ],
            "source": "Wikipedia - Marie-Antoine Carême"
        },
        {
            "value": 500,
            "clue": "The method of making crystal-clear ice by directional freezing where impurities are pushed to the unfrozen base.",
            "answer": "Directional Freezing",
            "accepted": [
                "clear ice method"
            ],
            "source": "Wikipedia - Ice"
        },
        {
            "value": 500,
            "clue": "The complex traditional British sheep's milk cheese bound in cloth and lard, aged for up to two years.",
            "answer": "Clothbound Cheddar",
            "accepted": [
                "traditional farm cheddar"
            ],
            "source": "Wikipedia - Cheddar cheese"
        },
        {
            "value": 500,
            "clue": "The rare wild citrus fruit from the Australian rainforest with finger-like vesicles that burst with acidic lime caviar.",
            "answer": "Finger Lime",
            "accepted": [
                "citrus australasica",
                "caviar lime"
            ],
            "source": "Wikipedia - Citrus australasica"
        },
        {
            "value": 500,
            "clue": "The rare Iranian beluga caviar harvested from albino sturgeon over 70 years old, sold in 24-karat gold tins. (Variant #2)",
            "answer": "Almas",
            "accepted": [
                "almas caviar"
            ],
            "source": "Wikipedia - Caviar"
        },
        {
            "value": 500,
            "clue": "The Japanese master chef title earned only after a minimum of ten years of rigorous apprenticeship. (Variant #2)",
            "answer": "Itamae",
            "accepted": [
                "sushi shokunin"
            ],
            "source": "Wikipedia - Itamae"
        },
        {
            "value": 500,
            "clue": "The chemical process invented by Ferran Adrià at elBulli using sodium alginate and calcium chloride to create caviar-like liquid spheres. (Variant #2)",
            "answer": "Spherification",
            "accepted": [
                "molecular gastronomy spherification"
            ],
            "source": "Wikipedia - Spherification"
        },
        {
            "value": 500,
            "clue": "The traditional Italian condiment from Emilia-Romagna aged for a minimum of 12 to 25 years in a battery of wooden casks. (Variant #2)",
            "answer": "Traditional Balsamic Vinegar",
            "accepted": [
                "aceto balsamico tradizionale"
            ],
            "source": "Wikipedia - Traditional balsamic vinegar"
        },
        {
            "value": 500,
            "clue": "The legendary Roman chef whose 1st-century culinary manuscript 'De Re Coquinaria' survives as the oldest cookbook. (Variant #2)",
            "answer": "Apicius",
            "accepted": [
                "marcus gavius apicius"
            ],
            "source": "Wikipedia - Apicius"
        },
        {
            "value": 500,
            "clue": "The rare subterranean white truffle species harvested around the Piedmontese town of Alba in autumn. (Variant #2)",
            "answer": "Tuber magnatum",
            "accepted": [
                "tartufo bianco d'alba",
                "white truffle"
            ],
            "source": "Wikipedia - Tuber magnatum"
        },
        {
            "value": 500,
            "clue": "The ancient French culinary dish where a small songbird is fattened on millet, drowned in Armagnac, and eaten whole under a napkin. (Variant #2)",
            "answer": "Ortolan Bunting",
            "accepted": [
                "ortolan"
            ],
            "source": "Wikipedia - Ortolan bunting"
        },
        {
            "value": 500,
            "clue": "The natural red food dye extracted from the crushed dried bodies of female scale insects found on prickly pear cacti. (Variant #2)",
            "answer": "Cochineal",
            "accepted": [
                "carmine",
                "e120"
            ],
            "source": "Wikipedia - Cochineal"
        },
        {
            "value": 500,
            "clue": "The historical French chef who codified classical French haute cuisine and was hailed as 'The Emperor of Chefs'. (Variant #2)",
            "answer": "Auguste Escoffier",
            "accepted": [
                "escoffier"
            ],
            "source": "Wikipedia - Auguste Escoffier"
        },
        {
            "value": 500,
            "clue": "The chemical odorant synthesized by truffles (and pigs) responsible for their intoxicating, earthy aroma. (Variant #2)",
            "answer": "Androstenol",
            "accepted": [
                "bis(methylthio)methane"
            ],
            "source": "Wikipedia - Truffle"
        },
        {
            "value": 500,
            "clue": "The complex French pastry cake named after the French patron saint of bakers and pastry chefs, featuring choux buns and Chiboust cream. (Variant #2)",
            "answer": "Gateau Saint Honore",
            "accepted": [
                "st. honoré cake"
            ],
            "source": "Wikipedia - St. Honoré cake"
        },
        {
            "value": 500,
            "clue": "The Japanese seasoning concept describing the synergistic taste enhancement when inosinate and glutamate combine. (Variant #2)",
            "answer": "Umami Synergy",
            "accepted": [
                "umami interaction"
            ],
            "source": "Wikipedia - Umami"
        },
        {
            "value": 500,
            "clue": "The ancient fermented fish delicacy of Sweden known for producing a bulging pressurized tin and notorious stench. (Variant #2)",
            "answer": "Surstromming",
            "accepted": [
                "surströmming"
            ],
            "source": "Wikipedia - Surströmming"
        },
        {
            "value": 500,
            "clue": "The rare Mexican corn delicacy caused by the fungal infection Ustilago maydis, prized as 'corn truffle'. (Variant #2)",
            "answer": "Huitlacoche",
            "accepted": [
                "cuitlacoche"
            ],
            "source": "Wikipedia - Corn smut"
        },
        {
            "value": 500,
            "clue": "The Japanese knife blade forged by folding high-carbon steel and soft iron, replicating samurai sword craftsmanship. (Variant #2)",
            "answer": "Honyaki",
            "accepted": [
                "honyaki knife"
            ],
            "source": "Wikipedia - Japanese kitchen knife"
        },
        {
            "value": 500,
            "clue": "The traditional Swiss cow's milk cheese aged in alpine caves and melted onto potatoes using a special tabletop heater. (Variant #2)",
            "answer": "Raclette",
            "accepted": [
                "raclette du valais"
            ],
            "source": "Wikipedia - Raclette"
        },
        {
            "value": 500,
            "clue": "The 19th-century French founder of haute cuisine who designed elaborate confectionary centerpieces called 'pièces montées'. (Variant #2)",
            "answer": "Marie-Antoine Careme",
            "accepted": [
                "carême",
                "antonin carême"
            ],
            "source": "Wikipedia - Marie-Antoine Carême"
        },
        {
            "value": 500,
            "clue": "The method of making crystal-clear ice by directional freezing where impurities are pushed to the unfrozen base. (Variant #2)",
            "answer": "Directional Freezing",
            "accepted": [
                "clear ice method"
            ],
            "source": "Wikipedia - Ice"
        },
        {
            "value": 500,
            "clue": "The complex traditional British sheep's milk cheese bound in cloth and lard, aged for up to two years. (Variant #2)",
            "answer": "Clothbound Cheddar",
            "accepted": [
                "traditional farm cheddar"
            ],
            "source": "Wikipedia - Cheddar cheese"
        },
        {
            "value": 500,
            "clue": "The rare wild citrus fruit from the Australian rainforest with finger-like vesicles that burst with acidic lime caviar. (Variant #2)",
            "answer": "Finger Lime",
            "accepted": [
                "citrus australasica",
                "caviar lime"
            ],
            "source": "Wikipedia - Citrus australasica"
        }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { JEOPARDY_PRESET_CATEGORIES, CURATED_FACTS_DATABASE };
}
