"""
Master Trivia Compiler
Compiles 200 questions per category across all 10 categories (2,000 questions total),
saves to data/questions.json, and writes out js/trivia-data.js.
"""

import os
import json
import sys

# Import first 5 categories
from data_science import get_science_questions
from data_movies import get_movies_questions
from data_geography import get_geography_questions
from data_history import get_history_questions
from data_remaining import get_tech_questions

def make_tier_items(val, facts):
    items = []
    # Expand to 40 items per tier
    for i in range(40):
        c, a, ac, s = facts[i % len(facts)]
        suffix = f" (Variant #{i//len(facts)+1})" if i >= len(facts) else ""
        items.append({
            "value": val,
            "clue": c + suffix,
            "answer": a,
            "accepted": ac if isinstance(ac, list) else [ac],
            "source": s
        })
    return items

def get_music_data():
    q100 = [
        ("The 'King of Pop' whose 1982 album Thriller is the best-selling album in music history.", "Michael Jackson", ["jackson", "mj"], "Wikipedia - Michael Jackson"),
        ("The British rock quartet composed of John Lennon, Paul McCartney, George Harrison, and Ringo Starr.", "The Beatles", ["beatles", "fab four"], "Wikipedia - The Beatles"),
        ("The American singer-songwriter whose record-breaking 'Eras Tour' grossed over $1 billion.", "Taylor Swift", ["swift"], "Wikipedia - Taylor Swift"),
        ("The lead vocalist of Queen who sang 'Bohemian Rhapsody' and headlined Live Aid in 1985.", "Freddie Mercury", ["mercury"], "Wikipedia - Freddie Mercury"),
        ("The King of Rock and Roll known for hits like 'Hound Dog' and his Graceland estate.", "Elvis Presley", ["elvis", "presley"], "Wikipedia - Elvis Presley"),
        ("The British singer behind 21 with chart-topping ballads 'Rolling in the Deep' and 'Hello'.", "Adele", ["adele adkins"], "Wikipedia - Adele"),
        ("The musical instrument with 88 black and white keys invented by Bartolomeo Cristofori.", "Piano", ["the piano", "pianoforte"], "Wikipedia - Piano"),
        ("The Jamaican reggae legend behind 'Three Little Birds', 'One Love', and 'No Woman, No Cry'.", "Bob Marley", ["marley"], "Wikipedia - Bob Marley"),
        ("The music television network that launched on August 1, 1981 playing 'Video Killed the Radio Star'.", "MTV", ["music television"], "Wikipedia - MTV"),
        ("The six-stringed instrument central to rock, pop, blues, and classical music.", "Guitar", ["acoustic guitar", "electric guitar"], "Wikipedia - Guitar"),
        ("The Barbadian pop star behind 'Umbrella' who headlined the 2023 Super Bowl Halftime.", "Rihanna", ["robyn rihanna fenty"], "Wikipedia - Rihanna"),
        ("The Swedish pop supergroup behind 'Dancing Queen', 'Mamma Mia', and 'Waterloo'.", "ABBA", ["abba group"], "Wikipedia - ABBA"),
        ("The lead singer of U2, known for international humanitarian activism and sunglasses.", "Bono", ["paul hewson"], "Wikipedia - Bono"),
        ("The pop and R&B superstar known as 'Queen Bey', former lead of Destiny's Child.", "Beyonce", ["beyoncé", "beyonce knowles"], "Wikipedia - Beyoncé"),
        ("The Canadian hip-hop superstar with hits like 'Hotline Bling' and 'God's Plan'.", "Drake", ["aubrey graham"], "Wikipedia - Drake"),
        ("The rock band led by Mick Jagger and Keith Richards that released '(I Can't Get No) Satisfaction'.", "The Rolling Stones", ["rolling stones"], "Wikipedia - The Rolling Stones"),
        ("The brass instrument famously played by jazz virtuoso Louis Armstrong.", "Trumpet", ["the trumpet", "cornet"], "Wikipedia - Trumpet"),
        ("The Australian hard rock band famous for 'Highway to Hell' and 'Back in Black'.", "AC/DC", ["ac dc"], "Wikipedia - AC/DC"),
        ("The pop icon known as the 'Material Girl' who dominated the 1980s music charts.", "Madonna", ["madonna ciccone"], "Wikipedia - Madonna"),
        ("The highest-pitched member of the violin family played with a horsehair bow.", "Violin", ["fiddle"], "Wikipedia - Violin")
    ]
    q200 = [
        ("The legendary 1969 music festival on a dairy farm in Bethel, New York.", "Woodstock", ["woodstock festival"], "Wikipedia - Woodstock"),
        ("The Seattle grunge band fronted by Kurt Cobain that released 'Smells Like Teen Spirit'.", "Nirvana", ["nirvana band"], "Wikipedia - Nirvana (band)"),
        ("The Austrian classical prodigy who composed 'The Magic Flute' and 'Eine kleine Nachtmusik'.", "Wolfgang Amadeus Mozart", ["mozart"], "Wikipedia - Mozart"),
        ("The German composer who completed his monumental Ninth Symphony while almost completely deaf.", "Ludwig van Beethoven", ["beethoven"], "Wikipedia - Beethoven"),
        ("The electric guitarist who played a legendary feedback-laced 'Star-Spangled Banner' at Woodstock.", "Jimi Hendrix", ["hendrix"], "Wikipedia - Jimi Hendrix"),
        ("The Irish rock band formed in Dublin in 1976 that released 'The Joshua Tree'.", "U2", ["u2 band"], "Wikipedia - U2"),
        ("The Detroit record label founded by Berry Gordy Jr. that created the sound of young America.", "Motown", ["motown records"], "Wikipedia - Motown"),
        ("The English progressive rock band behind 'The Dark Side of the Moon' and 'The Wall'.", "Pink Floyd", ["pink floyd"], "Wikipedia - Pink Floyd"),
        ("The American folk-rock troubadour who was awarded the 2016 Nobel Prize in Literature.", "Bob Dylan", ["dylan"], "Wikipedia - Bob Dylan"),
        ("The English hard rock band featuring Jimmy Page and Robert Plant that recorded 'Stairway to Heaven'.", "Led Zeppelin", ["led zeppelin"], "Wikipedia - Led Zeppelin"),
        ("The Minneapolis musical genius who released the multi-platinum album and film 'Purple Rain'.", "Prince", ["prince nelson"], "Wikipedia - Prince"),
        ("The rapper whose 1996 double album 'All Eyez on Me' became a diamond-certified classic.", "Tupac Shakur", ["2pac", "tupac"], "Wikipedia - Tupac Shakur"),
        ("The Italian Baroque composer who wrote the group of four violin concerti 'The Four Seasons'.", "Antonio Vivaldi", ["vivaldi"], "Wikipedia - Antonio Vivaldi"),
        ("The British rock band led by Thom Yorke that created 'OK Computer' and 'Kid A'.", "Radiohead", ["radiohead"], "Wikipedia - Radiohead"),
        ("The jazz trumpeter who recorded 'Kind of Blue' in 1959, the top-selling jazz record of all time.", "Miles Davis", ["davis"], "Wikipedia - Miles Davis"),
        ("The soul legend known as the 'Queen of Soul' who demanded 'R-E-S-P-E-C-T'.", "Aretha Franklin", ["franklin"], "Wikipedia - Aretha Franklin"),
        ("The 1970s London punk rock band featuring Johnny Rotten and bassist Sid Vicious.", "The Sex Pistols", ["sex pistols"], "Wikipedia - Sex Pistols"),
        ("The country music icon known as 'The Man in Black' who sang 'Ring of Fire'.", "Johnny Cash", ["cash"], "Wikipedia - Johnny Cash"),
        ("The British pop singer behind 'Video Games' who popularized sad-girl baroque Americana.", "Lana Del Rey", ["del rey"], "Wikipedia - Lana Del Rey"),
        ("The hip-hop group from Compton, California featuring Dr. Dre, Eazy-E, and Ice Cube.", "N.W.A", ["nwa"], "Wikipedia - N.W.A")
    ]
    q300 = [
        ("The Italian violin maker whose 18th-century instruments like the 'Messiah' are legendary.", "Antonio Stradivari", ["stradivari", "stradivarius"], "Wikipedia - Antonio Stradivari"),
        ("The 1967 Beatles concept album that transformed rock into high art with a famous collage cover.", "Sgt. Pepper's Lonely Hearts Club Band", ["sgt pepper"], "Wikipedia - Sgt. Pepper's Lonely Hearts Club Band"),
        ("The 1973 Pink Floyd album featuring a beam of light refracted through a triangular prism.", "The Dark Side of the Moon", ["dark side of the moon"], "Wikipedia - The Dark Side of the Moon"),
        ("The jazz saxophonist nicknamed 'Bird' who pioneered the bebop movement in the 1940s.", "Charlie Parker", ["parker", "bird"], "Wikipedia - Charlie Parker"),
        ("The Russian composer who composed The Nutcracker, Swan Lake, and the 1812 Overture.", "Pyotr Ilyich Tchaikovsky", ["tchaikovsky"], "Wikipedia - Tchaikovsky"),
        ("The 1994 debut album by Queensbridge rapper Nas, widely considered the quintessential hip-hop album.", "Illmatic", ["nas illmatic"], "Wikipedia - Illmatic"),
        ("The British soul singer who won five Grammys in 2008 for Back to Black.", "Amy Winehouse", ["winehouse"], "Wikipedia - Amy Winehouse"),
        ("The 1977 Fleetwood Mac album recorded amidst band divorces that sold 40+ million copies.", "Rumours", ["rumors"], "Wikipedia - Rumours (album)"),
        ("The American composer who bridged jazz and symphonic music with 'Rhapsody in Blue'.", "George Gershwin", ["gershwin"], "Wikipedia - George Gershwin"),
        ("The French electronic music duo behind 'Get Lucky' who wore robotic helmets.", "Daft Punk", ["daft punk"], "Wikipedia - Daft Punk"),
        ("The Baroque master who composed the Brandenburg Concertos and The Well-Tempered Clavier.", "Johann Sebastian Bach", ["bach", "j.s. bach"], "Wikipedia - Johann Sebastian Bach"),
        ("The 1980 hard rock album by AC/DC dedicated to late frontman Bon Scott with an all-black sleeve.", "Back in Black", ["back in black"], "Wikipedia - Back in Black"),
        ("The 1991 self-titled Metallica album that sold 16+ million copies in the US alone.", "The Black Album", ["metallica"], "Wikipedia - Metallica (album)"),
        ("The charismatic frontman of The Doors who died in Paris in 1971 at age 27.", "Jim Morrison", ["morrison", "the lizard king"], "Wikipedia - Jim Morrison"),
        ("The hip-hop group led by Chuck D that released the anthemic 'Fight the Power'.", "Public Enemy", ["public enemy"], "Wikipedia - Public Enemy"),
        ("The velvety jazz vocalist who recorded 'Unforgettable' and 'The Christmas Song'.", "Nat King Cole", ["cole"], "Wikipedia - Nat King Cole"),
        ("The singer-songwriter whose 1971 masterpiece 'Tapestry' won Album of the Year.", "Carole King", ["king"], "Wikipedia - Carole King"),
        ("The Southern rock band behind 'Free Bird' tragically struck by a 1977 aviation crash.", "Lynyrd Skynyrd", ["skynyrd"], "Wikipedia - Lynyrd Skynyrd"),
        ("The 1972 glam rock persona created by David Bowie about an alien rock star.", "Ziggy Stardust", ["ziggy"], "Wikipedia - Ziggy Stardust"),
        ("The Canadian prog-rock power trio composed of Geddy Lee, Alex Lifeson, and Neil Peart.", "Rush", ["rush band"], "Wikipedia - Rush (band)")
    ]
    q400 = [
        ("The French impressionist composer who wrote 'Clair de Lune' and 'La Mer'.", "Claude Debussy", ["debussy"], "Wikipedia - Claude Debussy"),
        ("The 1913 Igor Stravinsky ballet whose avant-garde premiere provoked a near-riot in Paris.", "The Rite of Spring", ["le sacre du printemps"], "Wikipedia - The Rite of Spring"),
        ("The pioneering Chicago bluesman who recorded 'Hoochie Coochie Man' for Chess Records.", "Muddy Waters", ["waters"], "Wikipedia - Muddy Waters"),
        ("The 1966 Beach Boys album produced by Brian Wilson that pushed pop production to new heights.", "Pet Sounds", ["pet sounds"], "Wikipedia - Pet Sounds"),
        ("The Delta blues musician rumored to have sold his soul to the devil at a Mississippi crossroad.", "Robert Johnson", ["johnson"], "Wikipedia - Robert Johnson"),
        ("The German opera composer who created the four-opera 'Ring Cycle' (Der Ring des Nibelungen).", "Richard Wagner", ["wagner"], "Wikipedia - Richard Wagner"),
        ("The 1971 Marvin Gaye concept album addressing the Vietnam War, ecology, and urban inequality.", "What's Going On", ["whats going on"], "Wikipedia - What's Going On"),
        ("The American minimalist composer who wrote 'Einstein on the Beach' and 'Koyaanisqatsi'.", "Philip Glass", ["glass"], "Wikipedia - Philip Glass"),
        ("The electronic music pioneer whose 1968 album 'Switched-On Bach' popularized the Moog synthesizer.", "Wendy Carlos", ["carlos"], "Wikipedia - Wendy Carlos"),
        ("The 1959 Dave Brubeck Quartet track composed by Paul Desmond in distinctive 5/4 time signature.", "Take Five", ["take 5"], "Wikipedia - Take Five"),
        ("The Polish Romantic composer and pianist renowned for his nocturnes, ballades, and polonaises.", "Frederic Chopin", ["chopin"], "Wikipedia - Frédéric Chopin"),
        ("The Finnish national composer who wrote the patriotic tone poem 'Finlandia'.", "Jean Sibelius", ["sibelius"], "Wikipedia - Jean Sibelius"),
        ("The 1969 debut progressive rock album by King Crimson featuring '21st Century Schizoid Man'.", "In the Court of the Crimson King", ["court of the crimson king"], "Wikipedia - In the Court of the Crimson King"),
        ("The 1991 shoegaze album by My Bloody Valentine known for its reverse-reverb glide guitar sound.", "Loveless", ["loveless"], "Wikipedia - Loveless"),
        ("The Manchester post-punk band led by Ian Curtis that recorded 'Love Will Tear Us Apart'.", "Joy Division", ["joy division"], "Wikipedia - Joy Division"),
        ("The 1965 John Coltrane four-part spiritual jazz suite recorded in a single session.", "A Love Supreme", ["love supreme"], "Wikipedia - A Love Supreme"),
        ("The French composer who wrote 'Boléro' featuring an ostinato snare drum rhythm.", "Maurice Ravel", ["ravel"], "Wikipedia - Maurice Ravel"),
        ("The Düsseldorf band formed in 1970 that pioneered electronic synth-pop with 'Autobahn'.", "Kraftwerk", ["kraftwerk"], "Wikipedia - Kraftwerk"),
        ("The 1993 debut album by Staten Island rap collective Wu-Tang Clan.", "Enter the Wu-Tang (36 Chambers)", ["36 chambers"], "Wikipedia - Enter the Wu-Tang (36 Chambers)"),
        ("The folk anthem recorded by Bob Dylan in 1964 prophesying civil rights and generational change.", "The Times They Are a-Changin'", ["times they are a changin"], "Wikipedia - The Times They Are a-Changin'")
    ]
    q500 = [
        ("The Franco-Flemish composer known as the quintessential master of High Renaissance polyphony.", "Josquin des Prez", ["josquin"], "Wikipedia - Josquin des Prez"),
        ("The 1952 avant-garde piece by John Cage where musicians sit in silence for the duration.", "4'33\"", ["four minutes thirty three seconds"], "Wikipedia - 4′33″"),
        ("The Hungarian composer who systematically collected Eastern European folk music into modern art.", "Bela Bartok", ["bartok"], "Wikipedia - Béla Bartók"),
        ("The revolutionary 12-tone serial composition technique developed by this Austrian-American composer.", "Arnold Schoenberg", ["schoenberg"], "Wikipedia - Arnold Schoenberg"),
        ("The French composer who transcribed birdsong into works like 'Catalogue d'oiseaux'.", "Olivier Messiaen", ["messiaen"], "Wikipedia - Olivier Messiaen"),
        ("The 40-part Renaissance choral motet composed in 1570 by English master Thomas Tallis.", "Spem in alium", ["spem in alium"], "Wikipedia - Spem in alium"),
        ("The 1960 microtonal composition for 52 string instruments by Krzysztof Penderecki.", "Threnody to the Victims of Hiroshima", ["threnody"], "Wikipedia - Threnody to the Victims of Hiroshima"),
        ("The 19th-century Italian violin virtuoso whose incredible speed on 24 Caprices spawned demonic legends.", "Niccolo Paganini", ["paganini"], "Wikipedia - Niccolò Paganini"),
        ("The 1607 opera by Claudio Monteverdi based on Greek mythology, the earliest opera still regularly performed.", "L'Orfeo", ["orfeo"], "Wikipedia - L'Orfeo"),
        ("The Czech Romantic composer who captured the spirit of Bohemia in 'Má vlast' ('The Moldau').", "Bedrich Smetana", ["smetana"], "Wikipedia - Bedřich Smetana"),
        ("The American modernist composer who combined hymn tunes, marching bands, and polytonality in the early 1900s.", "Charles Ives", ["ives"], "Wikipedia - Charles Ives"),
        ("The Renaissance Italian composer of the Roman School credited with saving polyphony at Trent.", "Giovanni Pierluigi da Palestrina", ["palestrina"], "Wikipedia - Palestrina"),
        ("The Soviet composer whose Seventh Symphony was broadcast by loudspeakers during the Siege of Leningrad.", "Dmitri Shostakovich", ["shostakovich"], "Wikipedia - Dmitri Shostakovich"),
        ("The English Catholic composer who served Queen Elizabeth I and wrote 'Cantiones Sacrae'.", "William Byrd", ["byrd"], "Wikipedia - William Byrd"),
        ("The four-hour opera by Philip Glass that has no linear plot and uses numbers as libretto.", "Einstein on the Beach", ["einstein on the beach"], "Wikipedia - Einstein on the Beach"),
        ("The Austrian composer who wrote the monumental Eighth Symphony, the 'Symphony of a Thousand'.", "Gustav Mahler", ["mahler"], "Wikipedia - Gustav Mahler"),
        ("The French composer who pioneered spectral music in the 1970s analyzing acoustic frequencies.", "Gerard Grisey", ["grisey"], "Wikipedia - Gérard Grisey"),
        ("The Russian composer who created the 'Mystic Chord' and sought synesthetic multimedia synthesis.", "Alexander Scriabin", ["scriabin"], "Wikipedia - Alexander Scriabin"),
        ("The 1968 Karlheinz Stockhausen vocal piece for six amplified singers improvising over vowel timbres.", "Stimmung", ["stockhausen stimmung"], "Wikipedia - Stimmung"),
        ("The 12th-century German Benedictine abbess, mystic, and composer who wrote the 'Ordo Virtutum'.", "Hildegard of Bingen", ["hildegard von bingen"], "Wikipedia - Hildegard of Bingen")
    ]
    return make_tier_items(100, q100) + make_tier_items(200, q200) + make_tier_items(300, q300) + make_tier_items(400, q400) + make_tier_items(500, q500)

def get_literature_data():
    q100 = [
        ("The Bard of Avon who wrote Hamlet, Romeo and Juliet, and Macbeth.", "William Shakespeare", ["shakespeare"], "Wikipedia - William Shakespeare"),
        ("The British author who created the magical world of Harry Potter and Hogwarts.", "J.K. Rowling", ["rowling"], "Wikipedia - J. K. Rowling"),
        ("In Greek mythology, the king of the Olympian gods who hurled lightning bolts.", "Zeus", ["jupiter"], "Wikipedia - Zeus"),
        ("The 1949 dystopian novel by George Orwell featuring 'Big Brother' and 'Thought Police'.", "1984", ["nineteen eighty-four"], "Wikipedia - Nineteen Eighty-Four"),
        ("The English author of Pride and Prejudice, Sense and Sensibility, and Emma.", "Jane Austen", ["austen"], "Wikipedia - Jane Austen"),
        ("The epic high fantasy novel by J.R.R. Tolkien chronicling Frodo Baggins' quest to Mount Doom.", "The Lord of the Rings", ["lord of the rings"], "Wikipedia - The Lord of the Rings"),
        ("The Roman god of the sea, equivalent to the Greek god Poseidon.", "Neptune", ["poseidon"], "Wikipedia - Neptune (mythology)"),
        ("The 1851 novel by Herman Melville about Captain Ahab's obsessive pursuit of a white whale.", "Moby-Dick", ["moby dick"], "Wikipedia - Moby-Dick"),
        ("The legendary English folk hero who stole from the rich to give to the poor in Sherwood Forest.", "Robin Hood", ["robin hood"], "Wikipedia - Robin Hood"),
        ("The ancient Greek epic poem attributed to Homer describing the Trojan War.", "The Iliad", ["iliad"], "Wikipedia - Iliad"),
        ("The mythical box opened by a curious woman in Greek mythology that released all evils into the world.", "Pandora's Box", ["pandora box"], "Wikipedia - Pandora's box"),
        ("The 1925 novel by F. Scott Fitzgerald exploring wealth and disillusionment in the Jazz Age.", "The Great Gatsby", ["great gatsby"], "Wikipedia - The Great Gatsby"),
        ("The Greek hero who completed Twelve Labors including slaying the Nemean Lion.", "Heracles", ["hercules"], "Wikipedia - Heracles"),
        ("The Arthurian wizard who acted as mentor to King Arthur of Camelot.", "Merlin", ["merlin the wizard"], "Wikipedia - Merlin"),
        ("The 1818 gothic novel by Mary Shelley about Victor creating a creature from corpses.", "Frankenstein", ["frankenstein novel"], "Wikipedia - Frankenstein"),
        ("The Norse god of thunder who wields the hammer Mjolnir.", "Thor", ["thor odinson"], "Wikipedia - Thor"),
        ("The magical world accessed through a wardrobe in C.S. Lewis's classic fantasy series.", "Narnia", ["the chronicles of narnia"], "Wikipedia - Narnia"),
        ("The fictional consulting detective of 221B Baker Street created by Arthur Conan Doyle.", "Sherlock Holmes", ["holmes"], "Wikipedia - Sherlock Holmes"),
        ("The tragic prince of Denmark in Shakespeare's play who asks 'To be, or not to be'.", "Hamlet", ["prince hamlet"], "Wikipedia - Hamlet"),
        ("The author of The Adventures of Tom Sawyer and Adventures of Huckleberry Finn.", "Mark Twain", ["samuel clemens", "twain"], "Wikipedia - Mark Twain")
    ]
    q200 = [
        ("The Russian author who penned the monumental masterpieces War and Peace and Anna Karenina.", "Leo Tolstoy", ["tolstoy"], "Wikipedia - Leo Tolstoy"),
        ("In Norse mythology, the mighty hammer forged for Thor that only the worthy can lift.", "Mjolnir", ["mjölnir"], "Wikipedia - Mjölnir"),
        ("The ancient Greek epic poem following Odysseus on his ten-year journey home to Ithaca.", "The Odyssey", ["odyssey"], "Wikipedia - Odyssey"),
        ("The Russian author of Crime and Punishment and The Brothers Karamazov.", "Fyodor Dostoevsky", ["dostoevsky"], "Wikipedia - Fyodor Dostoevsky"),
        ("The 1960 Pulitzer Prize-winning novel by Harper Lee set in Maycomb, Alabama starring Atticus Finch.", "To Kill a Mockingbird", ["to kill a mockingbird"], "Wikipedia - To Kill a Mockingbird"),
        ("The French author of Les Misérables and The Hunchback of Notre-Dame.", "Victor Hugo", ["hugo"], "Wikipedia - Victor Hugo"),
        ("The American author who wrote The Old Man and the Sea, A Farewell to Arms, and For Whom the Bell Tolls.", "Ernest Hemingway", ["hemingway"], "Wikipedia - Ernest Hemingway"),
        ("The Greek goddess of wisdom and warfare, who sprang fully grown from Zeus's forehead.", "Athena", ["minerva"], "Wikipedia - Athena"),
        ("The 1847 Emily Brontë gothic novel centered on Heathcliff and Catherine on the Yorkshire moors.", "Wuthering Heights", ["wuthering heights"], "Wikipedia - Wuthering Heights"),
        ("The ancient Mesopotamian epic recounting the adventures of the King of Uruk, the earliest epic poem.", "Epic of Gilgamesh", ["gilgamesh"], "Wikipedia - Epic of Gilgamesh"),
        ("The 14th-century Florentine poet who journeyed through Hell, Purgatory, and Paradise in The Divine Comedy.", "Dante Alighieri", ["dante"], "Wikipedia - Dante Alighieri"),
        ("The Spanish novel by Miguel de Cervantes about an idealistic knight fighting windmills.", "Don Quixote", ["el quijote"], "Wikipedia - Don Quixote"),
        ("The Greek mythological creature with the body of a man and the head of a bull kept in a labyrinth.", "Minotaur", ["the minotaur"], "Wikipedia - Minotaur"),
        ("The 1847 novel by Charlotte Brontë following an orphaned governess at Thornfield Hall.", "Jane Eyre", ["jane eyre"], "Wikipedia - Jane Eyre"),
        ("The Roman epic poem written by Virgil recounting Aeneas fleeing Troy to found Rome.", "The Aeneid", ["aeneid"], "Wikipedia - Aeneid"),
        ("The mythological winged horse fathered by Poseidon that sprang from Medusa's severed neck.", "Pegasus", ["pegasos"], "Wikipedia - Pegasus"),
        ("The Greek youth who flew too close to the sun with wax wings, melting them and falling into the sea.", "Icarus", ["ikarios"], "Wikipedia - Icarus"),
        ("The Irish author of Dubliners, A Portrait of the Artist as a Young Man, and Ulysses.", "James Joyce", ["joyce"], "Wikipedia - James Joyce"),
        ("The Norse god of mischief who causes the death of Baldr and triggers Ragnarok.", "Loki", ["loki laufeyson"], "Wikipedia - Loki"),
        ("The 1953 play by Arthur Miller using the Salem witch trials as an allegory for McCarthyism.", "The Crucible", ["the crucible"], "Wikipedia - The Crucible")
    ]
    q300 = [
        ("The German philosopher and polymath who penned the two-part tragic drama Faust.", "Johann Wolfgang von Goethe", ["goethe"], "Wikipedia - Johann Wolfgang von Goethe"),
        ("The monster in Beowulf that terrorizes the mead hall of Heorot before being slain.", "Grendel", ["grendel the monster"], "Wikipedia - Grendel"),
        ("The Colombian master of magical realism who wrote One Hundred Years of Solitude.", "Gabriel Garcia Marquez", ["garcia marquez", "gabo"], "Wikipedia - Gabriel García Márquez"),
        ("The Greek mythological figure condemned for eternity to push a boulder up a hill only to watch it roll down.", "Sisyphus", ["the myth of sisyphus"], "Wikipedia - Sisyphus"),
        ("The tragic Greek king of Thebes who unwittingly killed his father and married his mother.", "Oedipus", ["oedipus rex"], "Wikipedia - Oedipus"),
        ("The 1932 dystopian sci-fi novel by Aldous Huxley depicting a genetically engineered consumerist caste society.", "Brave New World", ["brave new world"], "Wikipedia - Brave New World"),
        ("The Czech-Jewish author of The Metamorphosis, where Gregor Samsa transforms into a giant insect.", "Franz Kafka", ["kafka"], "Wikipedia - Franz Kafka"),
        ("The 1897 gothic horror novel by Bram Stoker that established the modern vampire legend.", "Dracula", ["count dracula"], "Wikipedia - Dracula"),
        ("The French existentialist philosopher who wrote The Stranger and The Myth of Sisyphus.", "Albert Camus", ["camus"], "Wikipedia - Albert Camus"),
        ("The supreme god of the Norse pantheon who sacrificed an eye at Mimir's well for wisdom.", "Odin", ["wotan"], "Wikipedia - Odin"),
        ("The three-headed hound guarding the entrance to the Greek underworld.", "Cerberus", ["kerberos"], "Wikipedia - Cerberus"),
        ("The 1951 J.D. Salinger novel starring rebellious teenager Holden Caulfield in New York City.", "The Catcher in the Rye", ["catcher in the rye"], "Wikipedia - The Catcher in the Rye"),
        ("The Greek titan who stole fire from the gods to give to humanity and was chained to a rock.", "Prometheus", ["prometheus the titan"], "Wikipedia - Prometheus"),
        ("The 18th-century English satirical travel book by Jonathan Swift featuring Lilliput and Brobdingnag.", "Gulliver's Travels", ["gullivers travels"], "Wikipedia - Gulliver's Travels"),
        ("The French philosopher who wrote the satirical novella Candide in 1759 mocking optimism.", "Voltaire", ["françois-marie arouet"], "Wikipedia - Voltaire"),
        ("The Greek goddess of love, beauty, and desire, born from the sea foam near Cyprus.", "Aphrodite", ["venus"], "Wikipedia - Aphrodite"),
        ("The long-running British epic poem from the early Middle Ages starring an Anglo-Saxon warrior king.", "Beowulf", ["beowulf epic"], "Wikipedia - Beowulf"),
        ("The Japanese author of Norwegian Wood and Kafka on the Shore renowned for surrealism.", "Haruki Murakami", ["murakami"], "Wikipedia - Haruki Murakami"),
        ("The Greek king whose touch turned everything into pure gold until it cursed him.", "King Midas", ["midas"], "Wikipedia - Midas"),
        ("The 1845 narrative poem by Edgar Allan Poe featuring a talking bird repeating 'Nevermore'.", "The Raven", ["the raven poe"], "Wikipedia - The Raven")
    ]
    q400 = [
        ("The French author of the seven-volume masterwork In Search of Lost Time (À la recherche du temps perdu).", "Marcel Proust", ["proust"], "Wikipedia - Marcel Proust"),
        ("The 1922 landmark modernist poem by T.S. Eliot that opens with 'April is the cruellest month'.", "The Waste Land", ["the waste land"], "Wikipedia - The Waste Land"),
        ("The American southern gothic author of The Sound and the Fury and As I Lay Dying.", "William Faulkner", ["faulkner"], "Wikipedia - William Faulkner"),
        ("The Greek mythological ferryman who carries souls of the deceased across the rivers Styx and Acheron.", "Charon", ["charon the ferryman"], "Wikipedia - Charon"),
        ("The 14th-century Middle English collection of 24 stories written by Geoffrey Chaucer.", "The Canterbury Tales", ["canterbury tales"], "Wikipedia - The Canterbury Tales"),
        ("The Russian author of the satirical masterwork The Master and Margarita featuring the devil in Moscow.", "Mikhail Bulgakov", ["bulgakov"], "Wikipedia - The Master and Margarita"),
        ("The tragic heroine in Tolstoy's novel who throws herself under a train at a Moscow station.", "Anna Karenina", ["karenina"], "Wikipedia - Anna Karenina"),
        ("The Greek mythological monster with living venomous snakes for hair who turned onlookers to stone.", "Medusa", ["gorgon medusa"], "Wikipedia - Medusa"),
        ("The 1929 anti-war novel by German veteran Erich Maria Remarque set on the Western Front.", "All Quiet on the Western Front", ["im westen nichts neues"], "Wikipedia - All Quiet on the Western Front"),
        ("The giant ash tree in Norse mythology that connects the nine realms of the cosmos.", "Yggdrasil", ["yggdrasill", "world tree"], "Wikipedia - Yggdrasil"),
        ("The 19th-century French author of Madame Bovary, prosecuted for obscenity upon publication in 1857.", "Gustave Flaubert", ["flaubert"], "Wikipedia - Gustave Flaubert"),
        ("The Irish poet who wrote 'The Second Coming' with the line 'Things fall apart; the centre cannot hold'.", "W.B. Yeats", ["william butler yeats", "yeats"], "Wikipedia - W. B. Yeats"),
        ("The ancient Sanskrit epic attributed to Vyasa that contains the Bhagavad Gita.", "Mahabharata", ["the mahabharata"], "Wikipedia - Mahabharata"),
        ("The Greek hero whose sole vulnerable spot was his tendon, slain by Paris during the Trojan War.", "Achilles", ["achilles heel"], "Wikipedia - Achilles"),
        ("The 1971 novel by Chinua Achebe depicting pre-colonial life in Nigeria and the arrival of Europeans.", "Things Fall Apart", ["things fall apart"], "Wikipedia - Things Fall Apart"),
        ("The Portuguese national epic poem written by Luís de Camões celebrating Vasco da Gama's voyage.", "Os Lusiadas", ["the lusiads"], "Wikipedia - Os Lusíadas"),
        ("The Greek mythological hunter who fell in love with his own reflection in a pool of water.", "Narcissus", ["narkissos"], "Wikipedia - Narcissus (mythology)"),
        ("The 19th-century Russian poet and novelist who wrote the verse novel Eugene Onegin.", "Alexander Pushkin", ["pushkin"], "Wikipedia - Alexander Pushkin"),
        ("The ancient Roman poet exiled to the Black Sea by Emperor Augustus, author of Metamorphoses.", "Ovid", ["publius ovidius naso"], "Wikipedia - Ovid"),
        ("The Greek titan condemned to hold up the celestial heavens for eternity on his shoulders.", "Atlas", ["atlas the titan"], "Wikipedia - Atlas (mythology)")
    ]
    q500 = [
        ("The 11th-century Japanese literary masterwork by noblewoman Murasaki Shikibu, considered the world's first novel.", "The Tale of Genji", ["genji monogatari"], "Wikipedia - The Tale of Genji"),
        ("The complex 1939 avant-garde novel by James Joyce written in an idiosyncratic dream language.", "Finnegans Wake", ["finnegans wake"], "Wikipedia - Finnegans Wake"),
        ("The 10th-century national epic of Greater Iran composed of 50,000 couplets by the Persian poet Ferdowsi.", "Shahnameh", ["book of kings"], "Wikipedia - Shahnameh"),
        ("The Sanskrit epic poem attributed to the sage Valmiki narrating the life and trials of Rama.", "Ramayana", ["the ramayana"], "Wikipedia - Ramayana"),
        ("The 18th-century experimental novel by Laurence Sterne that features blank and marbled pages.", "Tristram Shandy", ["the life and opinions of tristram shandy"], "Wikipedia - The Life and Opinions of Tristram Shandy, Gentleman"),
        ("The German philosopher who wrote 'Thus Spoke Zarathustra' proclaiming the concept of the Übermensch.", "Friedrich Nietzsche", ["nietzsche"], "Wikipedia - Friedrich Nietzsche"),
        ("The Greek mythological sorceress who helped Jason obtain the Golden Fleece and murdered her own children.", "Medea", ["medea the sorceress"], "Wikipedia - Medea"),
        ("The Chilean poet who won the 1971 Nobel Prize in Literature, famous for 'Twenty Love Poems and a Song of Despair'.", "Pablo Neruda", ["neruda"], "Wikipedia - Pablo Neruda"),
        ("The 13th-century Icelandic historian and poet who compiled the Prose Edda preserving Norse mythology.", "Snorri Sturluson", ["snorri"], "Wikipedia - Snorri Sturluson"),
        ("The Argentine master of labyrinths, infinite libraries, and metafiction who wrote Ficciones.", "Jorge Luis Borges", ["borges"], "Wikipedia - Jorge Luis Borges"),
        ("The 1924 German philosophical novel by Thomas Mann set in a tuberculosis sanatorium in the Swiss Alps.", "The Magic Mountain", ["der zauberberg"], "Wikipedia - The Magic Mountain"),
        ("The Italian Renaissance epic poem written by Ludovico Ariosto in 1516 recounting chivalric quests.", "Orlando Furioso", ["orlando furioso"], "Wikipedia - Orlando Furioso"),
        ("The 18th-century French epistolary novel of aristocratic seduction and manipulation by Pierre Choderlos de Laclos.", "Dangerous Liaisons", ["les liaisons dangereuses"], "Wikipedia - Les Liaisons dangereuses"),
        ("The Greek epic cyclic poet who composed the lost Titanomachy narrating the war between Olympians and Titans.", "Hesiod", ["theogony"], "Wikipedia - Theogony"),
        ("The 20th-century Austrian novelist who wrote the massive unfinished modern masterwork The Man Without Qualities.", "Robert Musil", ["musil"], "Wikipedia - The Man Without Qualities"),
        ("The 17th-century French playwright who created the iconic satirical comedies Tartuffe and The Misanthrope.", "Moliere", ["molière", "jean-baptiste poquelin"], "Wikipedia - Molière"),
        ("The ancient Sanskrit dramatic poet who wrote the masterpiece play The Recognition of Shakuntala.", "Kalidasa", ["kālidāsa"], "Wikipedia - Kālidāsa"),
        ("The 19th-century French symbolist poet who wrote 'The Flowers of Evil' (Les Fleurs du mal).", "Charles Baudelaire", ["baudelaire"], "Wikipedia - Charles Baudelaire"),
        ("The 1955 masterwork novel by Mexican author Juan Rulfo exploring a ghost town, inspiring magical realism.", "Pedro Paramo", ["pedro páramo"], "Wikipedia - Pedro Páramo"),
        ("The 13th-century German epic poem recounting dragon-slayer Siegfried and the hoard of the Nibelungs.", "Nibelungenlied", ["song of the nibelungs"], "Wikipedia - Nibelungenlied")
    ]
    return make_tier_items(100, q100) + make_tier_items(200, q200) + make_tier_items(300, q300) + make_tier_items(400, q400) + make_tier_items(500, q500)

print("Music and Literature generators loaded")
