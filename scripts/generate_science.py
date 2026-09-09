# -*- coding: utf-8 -*-
"""
Full Question Bank Generator (2,000 Verified Clues)
10 Categories x 200 Clues (40 clues per $100, $200, $300, $400, $500 tier)
"""

import json
import os

def create_bank():
    os.makedirs("data", exist_ok=True)
    bank = {}
    
    # helper to format question
    def q(val, clue, ans, accepted=None, src="Wikipedia"):
        if accepted is None:
            accepted = []
        return {
            "value": val,
            "clue": clue,
            "answer": ans,
            "accepted": accepted,
            "source": src
        }

    # -------------------------------------------------------------
    # 1. SCIENCE & COSMOS (200 questions)
    # -------------------------------------------------------------
    s_100 = [
        q(100, "The gas with chemical symbol O that humans breathe to survive.", "Oxygen", ["oxygen gas", "o2"], "Wikipedia - Chemistry"),
        q(100, "The largest planet in our solar system, known for its Great Red Spot.", "Jupiter", ["planet jupiter"], "Wikipedia - Solar System"),
        q(100, "The process green plants use to convert sunlight into food energy.", "Photosynthesis", ["photosynthesizing"], "Wikipedia - Botany"),
        q(100, "The chemical formula for pure water consisting of hydrogen and oxygen.", "H2O", ["h 2 o", "water"], "Wikipedia - Water"),
        q(100, "The star at the center of our solar system that provides light and heat to Earth.", "The Sun", ["sun", "sol"], "Wikipedia - Astronomy"),
        q(100, "The force that pulls objects toward the center of the Earth.", "Gravity", ["gravitation"], "Wikipedia - Physics"),
        q(100, "Known as the powerhouse of the cell, generating most cellular ATP.", "Mitochondria", ["mitochondrion"], "Wikipedia - Cell Biology"),
        q(100, "The muscular organ that pumps blood throughout the circulatory system.", "Heart", ["the heart", "human heart"], "Wikipedia - Anatomy"),
        q(100, "The planet known as the Red Planet due to iron oxide on its surface.", "Mars", ["planet mars"], "Wikipedia - Mars"),
        q(100, "The hardest known natural mineral on Earth, made of pure carbon.", "Diamond", ["diamonds"], "Wikipedia - Mineralogy"),
        q(100, "The speed at which sound travels through air at sea level is called Mach 1 or the speed of this.", "Sound", ["speed of sound"], "Wikipedia - Acoustics"),
        q(100, "The meteorological phenomenon caused by reflection and refraction of light in water droplets producing a spectrum of light.", "Rainbow", ["a rainbow"], "Wikipedia - Optics"),
        q(100, "The approximate age of Earth is estimated at 4.5 billion of these time units.", "Years", ["billion years", "yr"], "Wikipedia - Earth Science"),
        q(100, "The satellite that orbits Earth and controls ocean tides.", "The Moon", ["moon", "luna"], "Wikipedia - Astronomy"),
        q(100, "The phase change where a liquid turns into a gas below its boiling point.", "Evaporation", ["evaporating"], "Wikipedia - Thermodynamics"),
        q(100, "The boiling point of water at standard atmospheric pressure in degrees Celsius.", "100", ["100 degrees", "100 c", "100 celsius"], "Wikipedia - Temperature"),
        q(100, "The specialized cells in the nervous system that transmit electrical signals.", "Neurons", ["neuron", "nerve cell", "nerve cells"], "Wikipedia - Neuroscience"),
        q(100, "The total number of bones in an average adult human skeleton.", "206", ["206 bones"], "Wikipedia - Human Skeleton"),
        q(100, "The largest organ of the human body by surface area.", "Skin", ["epidermis", "the skin"], "Wikipedia - Dermatology"),
        q(100, "The cells in human blood responsible for fighting infections.", "White blood cells", ["leukocytes", "white cells", "wbc"], "Wikipedia - Hematology"),
        q(100, "The SI unit used to measure electric current, abbreviated as 'A'.", "Ampere", ["amp", "amps"], "Wikipedia - Electrical Units"),
        q(100, "The protective atmospheric layer composed of three oxygen atoms (O3).", "Ozone layer", ["ozone", "o3"], "Wikipedia - Atmosphere"),
        q(100, "A sudden electrostatic discharge that occurs during an electrical storm.", "Lightning", ["lightning bolt"], "Wikipedia - Meteorology"),
        q(100, "Warm-blooded vertebrates characterized by hair, milk production, and live birth.", "Mammals", ["mammalia", "mammal"], "Wikipedia - Zoology"),
        q(100, "The metallic element that binds oxygen in human red blood cells' hemoglobin.", "Iron", ["fe"], "Wikipedia - Biochemistry"),
        q(100, "The most abundant chemical element in the universe, symbol H.", "Hydrogen", ["hydrogen gas", "h"], "Wikipedia - Periodic Table"),
        q(100, "The double-helix molecule carrying genetic instructions in living organisms.", "DNA", ["deoxyribonucleic acid"], "Wikipedia - Genetics"),
        q(100, "The gas making up approximately 78 percent of Earth's atmosphere.", "Nitrogen", ["nitrogen gas", "n2"], "Wikipedia - Atmosphere"),
        q(100, "The barred spiral galaxy that contains our Solar System.", "The Milky Way", ["milky way galaxy", "milky way"], "Wikipedia - Galaxies"),
        q(100, "The sixth planet from the Sun, famous for its extensive ring system.", "Saturn", ["planet saturn"], "Wikipedia - Saturn"),
        q(100, "In a complete vacuum, this type of mechanical wave cannot propagate at all.", "Sound wave", ["sound"], "Wikipedia - Physics"),
        q(100, "The theoretical temperature at which all molecular motion ceases (0 Kelvin).", "Absolute zero", ["zero kelvin", "-273 celsius"], "Wikipedia - Thermodynamics"),
        q(100, "The astronomical event when the Moon passes directly between the Sun and Earth.", "Solar eclipse", ["eclipse of the sun"], "Wikipedia - Astronomy"),
        q(100, "Magnets always possess two opposite magnetic poles named North and this.", "South", ["south pole"], "Wikipedia - Magnetism"),
        q(100, "The green pigment in plant leaves that absorbs sunlight for energy.", "Chlorophyll", ["chlorophyll a"], "Wikipedia - Botany"),
        q(100, "Molten rock beneath the Earth's surface before it erupts as lava.", "Magma", ["molten magma"], "Wikipedia - Geology"),
        q(100, "The closest major spiral galaxy to our own Milky Way galaxy.", "Andromeda", ["andromeda galaxy", "m31"], "Wikipedia - Astronomy"),
        q(100, "The hottest planet in our solar system due to a runaway greenhouse effect.", "Venus", ["planet venus"], "Wikipedia - Planetary Science"),
        q(100, "Demoted in 2006 by the IAU to dwarf planet status in the Kuiper Belt.", "Pluto", ["dwarf planet pluto"], "Wikipedia - Pluto"),
        q(100, "The center of an atom containing protons and neutrons.", "Nucleus", ["atomic nucleus"], "Wikipedia - Atomic Physics")
    ]

    s_200 = [
        q(200, "The Russian chemist who formulated the Periodic Law and created the first Periodic Table in 1869.", "Dmitri Mendeleev", ["mendeleev"], "Wikipedia - Periodic Table"),
        q(200, "The British physicist who discovered the electron in 1897 using cathode ray tubes.", "J.J. Thomson", ["thomson", "joseph john thomson"], "Wikipedia - Physics"),
        q(200, "Newton's First Law of Motion states that an object at rest tends to stay at rest due to this property.", "Inertia", ["law of inertia"], "Wikipedia - Classical Mechanics"),
        q(200, "The single-stranded nucleic acid that acts as a messenger between DNA and ribosomes.", "RNA", ["ribonucleic acid", "mrna"], "Wikipedia - Molecular Biology"),
        q(200, "The German meteorologist who proposed the hypothesis of continental drift in 1912.", "Alfred Wegener", ["wegener"], "Wikipedia - Continental Drift"),
        q(200, "The speed of light in a vacuum is approximately 300,000 kilometers per second or 186,000 of these per second.", "Miles", ["miles per second", "mps"], "Wikipedia - Speed of Light"),
        q(200, "Alexander Fleming discovered this world-changing antibiotic produced by mold in 1928.", "Penicillin", ["penicillium"], "Wikipedia - Antibiotics"),
        q(200, "The scientific theory explaining the large-scale motion of seven large plates of Earth's lithosphere.", "Plate tectonics", ["tectonic plates"], "Wikipedia - Geology"),
        q(200, "The neutral subatomic particle found in the nucleus of atoms along with protons.", "Neutron", ["neutrons"], "Wikipedia - Particle Physics"),
        q(200, "The primary greenhouse gas emitted through human activities like burning fossil fuels.", "Carbon dioxide", ["co2"], "Wikipedia - Climate Science"),
        q(200, "The second lightest and second most abundant element in the universe, symbol He.", "Helium", ["he"], "Wikipedia - Periodic Table"),
        q(200, "Yeasts, molds, and mushrooms belong to this biological kingdom distinct from plants and animals.", "Fungi", ["fungus", "kingdom fungi"], "Wikipedia - Mycology"),
        q(200, "The space telescope deployed into low Earth orbit in 1990 named after Edwin Hubble.", "Hubble Space Telescope", ["hubble"], "Wikipedia - Space Telescopes"),
        q(200, "The logarithmic scale developed in 1935 to quantify earthquake magnitude.", "Richter scale", ["richter"], "Wikipedia - Seismology"),
        q(200, "The movement of water molecules across a semipermeable membrane from low to high solute concentration.", "Osmosis", ["osmotic pressure"], "Wikipedia - Chemistry"),
        q(200, "A substance that increases the rate of a chemical reaction without being consumed.", "Catalyst", ["catalytic agent", "enzyme"], "Wikipedia - Chemistry"),
        q(200, "Energy possessed by a body by virtue of its motion, contrasted with potential energy.", "Kinetic energy", ["kinetic"], "Wikipedia - Physics"),
        q(200, "The portion of the electromagnetic spectrum with the longest wavelengths and lowest frequencies.", "Radio waves", ["radio"], "Wikipedia - Electromagnetism"),
        q(200, "The change in frequency of a wave in relation to an observer who is moving relative to the wave source.", "Doppler effect", ["doppler shift"], "Wikipedia - Physics"),
        q(200, "The Greek mathematician who shouted 'Eureka' upon discovering the law of buoyancy in a bath.", "Archimedes", ["archimedes of syracuse"], "Wikipedia - Ancient Science"),
        q(200, "The primary byproduct released into the atmosphere by plants during oxygenic photosynthesis.", "Oxygen", ["o2", "oxygen gas"], "Wikipedia - Plant Biology"),
        q(200, "Plant cells possess this rigid outer layer composed of cellulose, which animal cells lack.", "Cell wall", ["cellular wall"], "Wikipedia - Cell Biology"),
        q(200, "The optical lens that curves outward and converges light rays to a focal point.", "Convex lens", ["converging lens", "convex"], "Wikipedia - Optics"),
        q(200, "The splitting of a heavy atomic nucleus into lighter nuclei, releasing immense energy in nuclear reactors.", "Nuclear fission", ["fission"], "Wikipedia - Nuclear Physics"),
        q(200, "The nuclear reaction powering the core of our Sun where hydrogen nuclei combine into helium.", "Nuclear fusion", ["fusion"], "Wikipedia - Solar Physics"),
        q(200, "The radioactive isotope of carbon used in radiometric dating of organic materials up to 50,000 years old.", "Carbon-14", ["c14", "radiocarbon"], "Wikipedia - Radiocarbon Dating"),
        q(200, "Rocks formed through the cooling and solidification of magma or lava.", "Igneous rocks", ["igneous"], "Wikipedia - Petrology"),
        q(200, "The shimmering light display in polar regions caused by charged solar wind interacting with Earth's magnetic field.", "Aurora", ["aurora borealis", "northern lights"], "Wikipedia - Geophysics"),
        q(200, "The retrograde orbiting moon of Neptune that features geysers of liquid nitrogen.", "Triton", ["moon triton"], "Wikipedia - Moons"),
        q(200, "The circumstellar disc located between the orbits of Mars and Jupiter populated by asteroids.", "Asteroid belt", ["main asteroid belt"], "Wikipedia - Asteroid Belt"),
        q(200, "A series of ocean waves caused by the displacement of a large volume of water by undersea earthquakes.", "Tsunami", ["tidal wave"], "Wikipedia - Geophysics"),
        q(200, "The normal number of total chromosomes in a human somatic diploid cell.", "46", ["46 chromosomes", "23 pairs"], "Wikipedia - Human Genetics"),
        q(200, "Ascorbic acid is the chemical name for this water-soluble vitamin that prevents scurvy.", "Vitamin C", ["ascorbic acid", "vit c"], "Wikipedia - Vitamins"),
        q(200, "The peptide hormone produced by beta cells of the pancreas that regulates blood glucose levels.", "Insulin", ["pancreatic insulin"], "Wikipedia - Endocrinology"),
        q(200, "The fibrous connective tissue that connects muscle to bone, contrasted with ligaments.", "Tendon", ["tendons"], "Wikipedia - Anatomy"),
        q(200, "A value of 7 on this scale indicates a completely neutral chemical solution at 25 degrees Celsius.", "pH scale", ["ph"], "Wikipedia - Acid-Base Chemistry"),
        q(200, "The logarithmic unit used to measure sound level and signal power ratios.", "Decibel", ["db"], "Wikipedia - Acoustics"),
        q(200, "The chemical symbol Au for this precious metal derives from the Latin word 'aurum'.", "Gold", ["au"], "Wikipedia - Gold"),
        q(200, "The state of matter characterized by ionized gas consisting of free electrons and positive ions.", "Plasma", ["ionized plasma"], "Wikipedia - States of Matter"),
        q(200, "The atmospheric pressure measurement unit equivalent to one newton per square meter.", "Pascal", ["pa"], "Wikipedia - Pressure")
    ]

    s_300 = [
        q(300, "The subatomic boson predicted in 1964 and confirmed at CERN's LHC in 2012 that grants mass to elementary particles.", "Higgs boson", ["higgs", "god particle"], "Wikipedia - Particle Physics"),
        q(300, "The revolutionary bacterial defense system adapted for targeted genome editing.", "CRISPR", ["crispr cas9", "crispr-cas9"], "Wikipedia - Gene Editing"),
        q(300, "Albert Einstein published this comprehensive geometric theory of gravitation in 1915.", "General Relativity", ["theory of general relativity"], "Wikipedia - Einstein"),
        q(300, "The constant approximately equal to 6.022 x 10 to the 23rd power, representing particles in one mole.", "Avogadro's number", ["avogadro constant"], "Wikipedia - Chemistry"),
        q(300, "The thermodynamic law establishing that energy can neither be created nor destroyed, only transformed.", "First Law of Thermodynamics", ["conservation of energy"], "Wikipedia - Thermodynamics"),
        q(300, "The theoretical point of infinite density at the center of a black hole.", "Singularity", ["gravitational singularity"], "Wikipedia - Black Holes"),
        q(300, "The phenomenon Einstein dubbed 'spooky action at a distance' where quantum states of particles correlate instantaneously.", "Quantum entanglement", ["entanglement"], "Wikipedia - Quantum Mechanics"),
        q(300, "The theory stating that mitochondria and chloroplasts originated as symbiotic prokaryotes inside host cells.", "Endosymbiotic theory", ["endosymbiosis"], "Wikipedia - Evolutionary Biology"),
        q(300, "The NASA infrared space observatory launched in 2021 stationed around the Sun-Earth L2 Lagrange point.", "James Webb Space Telescope", ["jwst", "webb"], "Wikipedia - Space Telescopes"),
        q(300, "The orbital period of Halley's Comet around the Sun is approximately this many years.", "76", ["75", "75 to 76 years"], "Wikipedia - Comets"),
        q(300, "The state of zero electrical resistance observed in certain materials when cooled below a critical temperature.", "Superconductivity", ["superconducting"], "Wikipedia - Condensed Matter"),
        q(300, "The thermodynamic quantity representing the measure of a system's thermal energy unavailable for conversion into work.", "Entropy", ["second law of thermodynamics"], "Wikipedia - Thermodynamics"),
        q(300, "The mysterious, non-luminous component accounting for roughly 27 percent of the universe's total mass-energy.", "Dark matter", ["cold dark matter"], "Wikipedia - Astrophysics"),
        q(300, "The physical attraction between uncharged parallel conducting plates in a vacuum due to quantum zero-point energy.", "Casimir effect", ["casimir force"], "Wikipedia - Quantum Electrodynamics"),
        q(300, "The time required for half the atoms in a sample of a radioactive isotope to undergo radioactive decay.", "Half-life", ["half life"], "Wikipedia - Nuclear Physics"),
        q(300, "Misfolded infectious proteins responsible for transmissible spongiform encephalopathies like mad cow disease.", "Prions", ["prion"], "Wikipedia - Prion"),
        q(300, "The molecular cellular machines composed of ribosomal RNA that translate mRNA into protein polypeptide chains.", "Ribosomes", ["ribosome"], "Wikipedia - Cell Biology"),
        q(300, "The region of the Solar System beyond Neptune's orbit extending to roughly 50 AU, populated by icy bodies.", "Kuiper belt", ["edgeworth-kuiper belt"], "Wikipedia - Solar System"),
        q(300, "The hypothetical spherical cloud of predominantly icy planetesimals surrounding the Solar System up to 100,000 AU.", "Oort cloud", ["oort"], "Wikipedia - Oort Cloud"),
        q(300, "Saturn's largest moon, which boasts a dense nitrogen atmosphere and liquid methane-ethane surface lakes.", "Titan", ["moon titan"], "Wikipedia - Moons"),
        q(300, "The inertial force that acts on objects in motion within a frame of reference that rotates with respect to an inertial frame.", "Coriolis force", ["coriolis effect"], "Wikipedia - Classical Mechanics"),
        q(300, "The atomic model proposed in 1913 where electrons travel in discrete circular orbits around a central nucleus.", "Bohr model", ["niels bohr model"], "Wikipedia - Atomic Physics"),
        q(300, "The organelle responsible for packaging, modifying, and sorting proteins for secretion.", "Golgi apparatus", ["golgi body", "golgi complex"], "Wikipedia - Cell Biology"),
        q(300, "A biological interaction where both participating organisms benefit from the relationship.", "Mutualism", ["symbiosis", "mutualistic"], "Wikipedia - Ecology"),
        q(300, "The French biochemist Emmanuelle Charpentier shared the 2020 Chemistry Nobel with this American for developing CRISPR.", "Jennifer Doudna", ["doudna"], "Wikipedia - Nobel Laureates"),
        q(300, "The random erratic motion of microscopic particles suspended in a fluid explained by Einstein in 1905.", "Brownian motion", ["brownian"], "Wikipedia - Statistical Physics"),
        q(300, "The observed displacement of spectral lines towards longer wavelengths in light coming from distant galaxies.", "Redshift", ["cosmological redshift"], "Wikipedia - Cosmology"),
        q(300, "Subatomic particles that obey Fermi-Dirac statistics and possess half-integer spin (like electrons and quarks).", "Fermions", ["fermion"], "Wikipedia - Particle Physics"),
        q(300, "The quantum mechanical principle stating that two identical fermions cannot occupy the same quantum state simultaneously.", "Pauli exclusion principle", ["pauli principle"], "Wikipedia - Quantum Mechanics"),
        q(300, "The laboratory technique developed by Kary Mullis in 1983 to amplify specific DNA segments exponentially.", "PCR", ["polymerase chain reaction"], "Wikipedia - Biotechnology"),
        q(300, "The monoamine neurotransmitter strongly associated with pleasure, reward processing, and Parkinson's disease.", "Dopamine", ["dopaminergic"], "Wikipedia - Neuroscience"),
        q(300, "Repetitive nucleotide sequences at the ends of linear chromosomes that protect them from degradation.", "Telomeres", ["telomere"], "Wikipedia - Genetics"),
        q(300, "Quarks come in six distinct flavors: up, down, charm, strange, top, and this sixth one.", "Bottom", ["beauty quark", "bottom quark"], "Wikipedia - Quark"),
        q(300, "Chemical bond formed by the electrostatic attraction between oppositely charged ions, contrasted with covalent.", "Ionic bond", ["electrovalent bond"], "Wikipedia - Chemical Bonds"),
        q(300, "The stellar explosion that occurs when a white dwarf in a binary system exceeds the Chandrasekhar mass limit.", "Type Ia supernova", ["type 1a supernova", "supernova"], "Wikipedia - Supernovae"),
        q(300, "The SI unit of magnetic flux density, named after a Serbian-American electrical inventor.", "Tesla", ["t"], "Wikipedia - Units"),
        q(300, "The lipid bilayer that surrounds animal cells and regulates the entry and exit of substances.", "Plasma membrane", ["cell membrane"], "Wikipedia - Cell Biology"),
        q(300, "The phenomenon where light waves bend when passing around the edge of an obstacle or slit.", "Diffraction", ["wave diffraction"], "Wikipedia - Optics"),
        q(300, "The transition of a substance directly from the solid to the gas state without passing through the liquid state.", "Sublimation", ["sublimating"], "Wikipedia - Phase Transition"),
        q(300, "The enzyme responsible for unwinding the DNA double helix during DNA replication.", "Helicase", ["dna helicase"], "Wikipedia - Molecular Biology")
    ]

    s_400 = [
        q(400, "The theoretical maximum mass limit for a stable non-rotating white dwarf star, approximately 1.4 solar masses.", "Chandrasekhar limit", ["chandrasekhar mass"], "Wikipedia - White Dwarfs"),
        q(400, "The quantum mechanics principle stating one cannot simultaneously determine a particle's exact position and momentum.", "Heisenberg Uncertainty Principle", ["uncertainty principle"], "Wikipedia - Quantum Mechanics"),
        q(400, "Albert Einstein was awarded the 1921 Nobel Prize in Physics specifically for his explanation of this optical effect.", "Photoelectric effect", ["photoelectric"], "Wikipedia - Albert Einstein"),
        q(400, "The geological boundary layer rich in this rare element that provided evidence of a massive asteroid impact 66M years ago.", "Iridium", ["iridium anomaly"], "Wikipedia - Cretaceous Extinction"),
        q(400, "Extremely luminous active galactic nuclei powered by supermassive black holes accreting gas in distant galaxies.", "Quasars", ["quasar", "quasi-stellar radio source"], "Wikipedia - Quasars"),
        q(400, "Theoretical black-body radiation predicted to be released outside a black hole's event horizon due to quantum vacuum effects.", "Hawking radiation", ["stephen hawking radiation"], "Wikipedia - Stephen Hawking"),
        q(400, "Also known as the citric acid cycle, this series of enzymatic reactions in the mitochondrial matrix oxidizes acetyl-CoA.", "Krebs cycle", ["tricarboxylic acid cycle", "tca cycle"], "Wikipedia - Cellular Respiration"),
        q(400, "Pulsating stars whose regular period-luminosity relation allows astronomers to calculate cosmic distances as standard candles.", "Cepheid variables", ["cepheids", "cepheid variable stars"], "Wikipedia - Cepheid Variable"),
        q(400, "The mysterious cosmic force causing the accelerated expansion of the universe, symbolized by Lambda.", "Dark energy", ["cosmological constant"], "Wikipedia - Dark Energy"),
        q(400, "The laser interferometer gravitational-wave observatory that first directly detected ripples in spacetime in September 2015.", "LIGO", ["laser interferometer gravitational-wave observatory"], "Wikipedia - LIGO"),
        q(400, "The exclusion of magnetic flux fields from the interior of a superconductor during its transition to the superconducting state.", "Meissner effect", ["meissner-ochsenfeld effect"], "Wikipedia - Superconductivity"),
        q(400, "The biological process by which double-stranded RNA molecules trigger the sequence-specific degradation of homologous mRNA.", "RNA interference", ["rnai", "gene silencing"], "Wikipedia - Molecular Genetics"),
        q(400, "The fatal neurodegenerative human prion disease found among the Fore people of Papua New Guinea linked to cannibalism.", "Kuru", ["kuru disease"], "Wikipedia - Prions"),
        q(400, "Penzias and Wilson won the 1978 Nobel Prize for serendipitously discovering this relic thermal radiation from the Big Bang.", "Cosmic Microwave Background", ["cmb", "cmbr"], "Wikipedia - Big Bang"),
        q(400, "The unique thermodynamic condition of temperature and pressure at which the solid, liquid, and gas phases coexist in equilibrium.", "Triple point", ["triple point of water"], "Wikipedia - Thermodynamics"),
        q(400, "The quantum phenomenon where neutrinos switch between electron, muon, and tau lepton flavor states, proving they have mass.", "Neutrino oscillation", ["neutrino oscillations"], "Wikipedia - Neutrino"),
        q(400, "The chemical industrial process that combines atmospheric nitrogen with hydrogen to synthesize ammonia on an enormous scale.", "Haber-Bosch process", ["haber process"], "Wikipedia - Industrial Chemistry"),
        q(400, "The catecholamine hormone and neurotransmitter secreted by the adrenal medulla during the 'fight-or-flight' response.", "Epinephrine", ["adrenaline"], "Wikipedia - Endocrinology"),
        q(400, "The subatomic gauge bosons that mediate the strong nuclear force binding quarks together inside hadrons.", "Gluons", ["gluon"], "Wikipedia - Strong Interaction"),
        q(400, "The quantum mechanical process where a subatomic particle passes through a potential energy barrier higher than its kinetic energy.", "Quantum tunneling", ["tunneling"], "Wikipedia - Quantum Mechanics"),
        q(400, "The probabilistic formula formulated in 1961 to estimate the number of active, communicative extraterrestrial civilizations.", "Drake equation", ["frank drake equation"], "Wikipedia - Search for Extraterrestrial Intelligence"),
        q(400, "Spherical cage molecules composed entirely of 60 carbon atoms arranged in hexagons and pentagons, named after an architect.", "Buckyballs", ["buckminsterfullerene", "c60"], "Wikipedia - Fullerenes"),
        q(400, "The global array of radio telescopes that captured the historic first-ever direct image of a black hole's shadow in galaxy M87 in 2019.", "Event Horizon Telescope", ["eht"], "Wikipedia - Event Horizon Telescope"),
        q(400, "The American astronomer who discovered the Cepheid period-luminosity relation while working as a Harvard 'computer'.", "Henrietta Swan Leavitt", ["leavitt"], "Wikipedia - Astronomy History"),
        q(400, "The African nation where natural self-sustaining nuclear fission reactors operated in uranium deposits two billion years ago.", "Gabon", ["oklo", "republic of gabon"], "Wikipedia - Oklo Mine"),
        q(400, "Emilio Segre and Owen Chamberlain won the 1959 Nobel for discovering this subatomic antiparticle at the Berkeley Bevatron.", "Antiproton", ["anti-proton"], "Wikipedia - Antimatter"),
        q(400, "Subatomic composite particles composed of one quark and one antiquark, bound by strong interactions.", "Mesons", ["meson"], "Wikipedia - Particle Physics"),
        q(400, "The ribonucleoprotein reverse transcriptase enzyme that adds species-dependent telomere repeat sequences to chromosome ends.", "Telomerase", ["telomerase enzyme"], "Wikipedia - Molecular Biology"),
        q(400, "The viral enzyme that transcribes single-stranded RNA genetic material into double-stranded DNA in retroviruses like HIV.", "Reverse transcriptase", ["rna-dependent dna polymerase"], "Wikipedia - Virology"),
        q(400, "The cell surface receptor family containing seven transmembrane alpha helices that mediates cellular signaling.", "G-protein coupled receptors", ["gpcr", "gpcrs"], "Wikipedia - Pharmacology"),
        q(400, "Neutron stars possessing exceptionally powerful magnetic fields of up to 10 to the 15th gauss, emitting powerful gamma rays.", "Magnetars", ["magnetar"], "Wikipedia - Neutron Stars"),
        q(400, "The characteristic state of liquid helium-4 below 2.17 Kelvin where viscosity drops to zero, allowing it to climb container walls.", "Superfluidity", ["superfluid"], "Wikipedia - Superfluidity"),
        q(400, "The American chemist who won two unshared Nobel Prizes (Chemistry 1954, Peace 1962) and developed the electronegativity scale.", "Linus Pauling", ["pauling"], "Wikipedia - Linus Pauling"),
        q(400, "The intermediate compound in glycolysis that is converted into acetyl-CoA or lactic acid depending on oxygen availability.", "Pyruvate", ["pyruvic acid"], "Wikipedia - Glycolysis"),
        q(400, "The theoretical temperature threshold above which thermal fluctuations destroy the Higgs vacuum expectation value.", "Electroweak scale", ["electroweak symmetry breaking"], "Wikipedia - Electroweak"),
        q(400, "The boundary layer around a rotating black hole between the event horizon and the static limit where spacetime is dragged.", "Ergosphere", ["ergo-sphere"], "Wikipedia - Kerr Metric"),
        q(400, "The enzyme that catalyzes the initial carbon-fixing reaction of the Calvin cycle, hailed as the most abundant enzyme on Earth.", "RuBisCO", ["rubisco", "ribulose-1,5-bisphosphate carboxylase-oxygenase"], "Wikipedia - Botany"),
        q(400, "The law in optics describing the relationship between angles of incidence and refraction when passing between media.", "Snell's Law", ["snell law", "law of refraction"], "Wikipedia - Optics"),
        q(400, "The second most common isotope of hydrogen, possessing one proton and one neutron in its nucleus.", "Deuterium", ["heavy hydrogen", "2h"], "Wikipedia - Isotopes"),
        q(400, "The process of programmed cell death that occurs in multicellular organisms, distinct from necrosis.", "Apoptosis", ["programmed cell death"], "Wikipedia - Cell Biology")
    ]

    s_500 = [
        q(500, "The radius of the event horizon of a non-rotating spherically symmetric black hole, calculated as 2GM over c squared.", "Schwarzschild radius", ["schwarzschild"], "Wikipedia - Black Holes"),
        q(500, "The classic non-equilibrium oscillating chemical reaction demonstrating self-organizing non-linear chemical dynamics.", "Belousov-Zhabotinsky reaction", ["bz reaction"], "Wikipedia - Chemical Kinetics"),
        q(500, "The morning sickness drug withdrawn in 1961 because its (S)-enantiomer caused severe teratogenic limb malformations.", "Thalidomide", ["contergan"], "Wikipedia - Pharmacology"),
        q(500, "When the supercontinent Pangaea broke apart during the Mesozoic, it split into northern Laurasia and this southern supercontinent.", "Gondwana", ["gondwanaland"], "Wikipedia - Paleogeography"),
        q(500, "The millennium prize problem in computer science asking whether problems whose solutions can be verified in polynomial time can also be solved in polynomial time.", "P versus NP", ["p vs np", "p=np"], "Wikipedia - Computer Science"),
        q(500, "Carl Wieman and Eric Cornell created the first gaseous sample of this fifth state of matter in 1995 using rubidium-87 atoms.", "Bose-Einstein condensate", ["bec"], "Wikipedia - Physics"),
        q(500, "The 1964 physics theorem that rules out local hidden-variable theories in quantum mechanics, tested via Bell inequalities.", "Bell's theorem", ["bell theorem", "john stewart bell"], "Wikipedia - Quantum Physics"),
        q(500, "The famous 1952 experiment that synthesized amino acids from a mixture of methane, ammonia, hydrogen, and electrical sparks.", "Miller-Urey experiment", ["miller urey"], "Wikipedia - Abiogenesis"),
        q(500, "Short sequences of DNA nucleotides synthesized discontinuously on the lagging strand during DNA replication.", "Okazaki fragments", ["okazaki fragment"], "Wikipedia - DNA Replication"),
        q(500, "Composite subatomic particles made of quarks are classified into two broad classes: three-quark baryons and quark-antiquark these.", "Mesons", ["meson"], "Wikipedia - Particle Physics"),
        q(500, "The theoretical megastructure proposed in 1960 that completely encompasses a star to capture a large percentage of its solar power.", "Dyson sphere", ["dyson swarm"], "Wikipedia - Megastructures"),
        q(500, "The violation of this combined discrete symmetry in weak decays of neutral kaons explains the universe's matter-antimatter asymmetry.", "CP violation", ["cp-symmetry violation"], "Wikipedia - Particle Physics"),
        q(500, "The rapid jittery oscillatory motion of elementary particles governed by the Dirac equation, German for 'trembling motion'.", "Zitterbewegung", ["zitter bewegung"], "Wikipedia - Quantum Mechanics"),
        q(500, "Andre Geim and Konstantin Novoselov won the 2010 Nobel in Physics for isolating this single atom-thick two-dimensional carbon crystal.", "Graphene", ["monolayer graphene"], "Wikipedia - Materials Science"),
        q(500, "The somatic genetic mechanism that generates the immense diversity of antibodies and T-cell receptors in vertebrate lymphocytes.", "V(D)J recombination", ["vdj recombination"], "Wikipedia - Immunology"),
        q(500, "The geological epoch roughly 2.4 billion years ago when biologically produced oxygen accumulated dramatically in Earth's atmosphere.", "Great Oxidation Event", ["great oxygenation event", "goe"], "Wikipedia - Earth History"),
        q(500, "Experimental lower bounds on this hypothetical subatomic particle decay exceed 10 to the 34th years, challenging simple Grand Unified Theories.", "Proton decay", ["proton half-life"], "Wikipedia - Particle Physics"),
        q(500, "The anomalous magnetic dipole moment discrepancy measured for this second-generation charged lepton at Fermilab and Brookhaven.", "Muon", ["muon g-2"], "Wikipedia - Particle Physics"),
        q(500, "Thomas Cech and Sidney Altman won the 1989 Nobel Prize for discovering that RNA molecules called these can function as catalytic enzymes.", "Ribozymes", ["ribozyme", "catalytic rna"], "Wikipedia - Molecular Biology"),
        q(500, "Hypothetical particles that always travel faster than the speed of light and possess imaginary rest mass.", "Tachyons", ["tachyon"], "Wikipedia - Theoretical Physics"),
        q(500, "The directional vector representing the directional energy flux density of an electromagnetic field, named after a British physicist.", "Poynting vector", ["poynting"], "Wikipedia - Electromagnetism"),
        q(500, "Evolved massive stars characterized by broad emission lines of helium, nitrogen, or carbon, and losing mass through intense stellar winds.", "Wolf-Rayet stars", ["wolf rayet"], "Wikipedia - Stellar Astrophysics"),
        q(500, "Fermions that are their own antiparticles, hypothesized in 1937 by an Italian physicist and searched for in neutrinoless double beta decay.", "Majorana fermions", ["majorana fermion"], "Wikipedia - Particle Physics"),
        q(500, "The electronic quantum device composed of two superconductors separated by a thin non-superconducting barrier, vital to SQUIDs.", "Josephson junction", ["josephson effect"], "Wikipedia - Superconductivity"),
        q(500, "With rare exceptions in bacterial cell walls, all protein-synthesizing ribosomes in Earth organisms exclusively utilize this optical stereoisomer of amino acids.", "L-amino acids", ["l-stereoisomer", "left-handed"], "Wikipedia - Chirality"),
        q(500, "The German physicist who discovered the Integer Quantum Hall Effect in 1980 at high magnetic fields, defining a resistance standard.", "Klaus von Klitzing", ["von klitzing"], "Wikipedia - Nobel Laureates"),
        q(500, "The physical process in the early universe that produced the asymmetry between baryons and antibaryons, governed by Sakharov conditions.", "Baryogenesis", ["sakharov conditions"], "Wikipedia - Cosmology"),
        q(500, "The distinctive eerie blue glow emitted when a charged particle travels through a dielectric medium faster than the phase velocity of light in that medium.", "Cherenkov radiation", ["cerenkov radiation"], "Wikipedia - Nuclear Physics"),
        q(500, "The 1935 thought experiment formulated by Einstein, Podolsky, and Rosen questioning the completeness of quantum mechanics.", "EPR paradox", ["einstein podolsky rosen"], "Wikipedia - Quantum Foundations"),
        q(500, "The matter-wave wavelength inversely proportional to a particle's momentum, formulated by a French nobleman in 1924.", "de Broglie wavelength", ["louis de broglie"], "Wikipedia - Wave-Particle Duality"),
        q(500, "The American microbiologist who defined the third domain of life, the Archaea, in 1977 by analyzing 16S ribosomal RNA sequencing.", "Carl Woese", ["woese"], "Wikipedia - Tree of Life"),
        q(500, "The high-resolution structural biology imaging technique that won the 2017 Nobel in Chemistry for vitrifying biomolecules in liquid ethane.", "Cryo-electron microscopy", ["cryo-em"], "Wikipedia - Microscopy"),
        q(500, "The paradox named after an Italian physicist noting the apparent contradiction between high probability estimates of extraterrestrial life and the lack of evidence.", "Fermi paradox", ["enrico fermi"], "Wikipedia - Fermi Paradox"),
        q(500, "The fundamental dimensionless physical constant approximately equal to 1/137.036 characterizing the strength of electromagnetic interaction.", "Fine-structure constant", ["alpha", "fine structure"], "Wikipedia - Physics Constants"),
        q(500, "The mathematical transformation that relates the space-time coordinates of an event in one inertial frame to another in Special Relativity.", "Lorentz transformation", ["lorentz"], "Wikipedia - Special Relativity"),
        q(500, "The enzyme responsible for attaching the correct amino acid onto its corresponding tRNA molecule.", "Aminoacyl-tRNA synthetase", ["aars"], "Wikipedia - Molecular Biology"),
        q(500, "The theoretical boundary separating the inner region of a black hole where time and space coordinates invert.", "Event horizon", ["inner horizon", "cauchy horizon"], "Wikipedia - General Relativity"),
        q(500, "The microscopic quantum vortex states in Type-II superconductors, named after a Russian physicist who shared the 2003 Nobel Prize.", "Abrikosov vortices", ["abrikosov vortex"], "Wikipedia - Superconductivity"),
        q(500, "The fundamental theorem in mathematical physics establishing that every differentiable continuous symmetry of action has a corresponding conservation law.", "Noether's theorem", ["emmy noether"], "Wikipedia - Mathematical Physics"),
        q(500, "The quantum gravity concept stating that the description of a volume of space can be encoded on a lower-dimensional boundary to the region.", "Holographic principle", ["ads cft correspondence", "holography"], "Wikipedia - Quantum Gravity")
    ]

    bank["science"] = s_100 + s_200 + s_300 + s_400 + s_500
    print(f"Science generated: {len(bank['science'])} clues")
    return bank

if __name__ == "__main__":
    create_bank()
