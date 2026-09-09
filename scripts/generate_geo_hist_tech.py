# -*- coding: utf-8 -*-
"""
Generators for Geography (200), History (200), and Technology (200)
"""

def q(val, clue, ans, acc=None, src="Wikipedia"):
    return {"value": val, "clue": clue, "answer": ans, "accepted": acc or [], "source": src}

def get_geography_data():
    g1 = [
        q(100, "The longest river in the world, flowing through northeastern Africa into the Mediterranean Sea.", "Nile River", ["nile"]),
        q(100, "The capital city of France, famous for the Eiffel Tower and Louvre Museum.", "Paris", ["city of paris"]),
        q(100, "The highest mountain on Earth above sea level, located in the Himalayas.", "Mount Everest", ["everest", "mt everest"]),
        q(100, "The largest hot desert in the world, covering over 9 million square kilometers of North Africa.", "Sahara Desert", ["sahara"]),
        q(100, "The capital city of the United Kingdom, situated on the River Thames.", "London", ["city of london"]),
        q(100, "The largest ocean on Earth by surface area, covering more than 30% of the globe.", "Pacific Ocean", ["pacific"]),
        q(100, "The capital of Japan, known as the most populous metropolitan area in the world.", "Tokyo", ["city of tokyo"]),
        q(100, "The South American country famous for the Amazon rainforest and speaking Portuguese.", "Brazil", ["brasil"]),
        q(100, "The second largest country in the world by total land area, located north of the United States.", "Canada", ["dominion of canada"]),
        q(100, "The European nation shaped like a boot that surrounds Vatican City and San Marino.", "Italy", ["italian republic"]),
        q(100, "The capital of the United States, situated between Maryland and Virginia on the Potomac River.", "Washington D.C.", ["washington", "dc"]),
        q(100, "The island nation located southeast of Australia whose capital is Wellington.", "New Zealand", ["aotearoa"]),
        q(100, "The vast continent that contains the South Pole and is covered almost entirely in ice.", "Antarctica", ["south pole"]),
        q(100, "The capital city of Italy, home to the Colosseum and Trevi Fountain.", "Rome", ["roma"]),
        q(100, "The transcontinental country that spans Eastern Europe and Northern Asia, the largest country in the world.", "Russia", ["russian federation"]),
        q(100, "The capital of Egypt, situated near the ancient Giza pyramid complex.", "Cairo", ["al qahirah"]),
        q(100, "The canal connecting the Mediterranean Sea to the Red Sea, opened in 1869.", "Suez Canal", ["suez"]),
        q(100, "The capital city of Spain, home to the Prado Museum and Royal Palace.", "Madrid", ["city of madrid"]),
        q(100, "The great barrier reef, the world's largest coral reef system, lies off the coast of this nation.", "Australia", ["commonwealth of australia"]),
        q(100, "The European mountain range that stretches across Switzerland, France, Italy, Austria, and Germany.", "The Alps", ["alps"]),
        q(100, "The capital of Germany, reunited following the fall of its famous Wall in 1989.", "Berlin", ["city of berlin"]),
        q(100, "The second most populous continent on Earth after Asia, containing 54 recognized sovereign countries.", "Africa", ["african continent"]),
        q(100, "The capital of China, home to the Forbidden City and Tiananmen Square.", "Beijing", ["peking"]),
        q(100, "The ocean separating the Americas from Europe and Africa.", "Atlantic Ocean", ["atlantic"]),
        q(100, "The capital city of Greece, regarded as the birthplace of Western democracy.", "Athens", ["athina"]),
        q(100, "The deep canyon carved by the Colorado River in northern Arizona.", "Grand Canyon", ["the grand canyon"]),
        q(100, "The capital of India, housing the Rashtrapati Bhavan and India Gate.", "New Delhi", ["delhi"]),
        q(100, "The country known as the 'Land of Fire and Ice' due to its glaciers and active volcanoes.", "Iceland", ["republic of iceland"]),
        q(100, "The world's largest island that is not classified as a continent, belonging to Denmark.", "Greenland", ["kalaallit nunaat"]),
        q(100, "The capital city of Russia, home to the Red Square and Saint Basil's Cathedral.", "Moscow", ["moskva"]),
        q(100, "The narrow body of water separating southern Spain from northern Morocco.", "Strait of Gibraltar", ["gibraltar"]),
        q(100, "The river that flows through New York City and separates it from New Jersey.", "Hudson River", ["hudson"]),
        q(100, "The capital city of South Korea, bisected by the Han River.", "Seoul", ["seoul special city"]),
        q(100, "The deepest lake in the world by volume, containing 20% of Earth's unfrozen surface freshwater in Siberia.", "Lake Baikal", ["baikal"]),
        q(100, "The capital of Mexico, built on the historic ruins of the Aztec capital Tenochtitlan.", "Mexico City", ["ciudad de mexico", "cdmx"]),
        q(100, "The tallest freestanding mountain in Africa, located in Tanzania.", "Mount Kilimanjaro", ["kilimanjaro"]),
        q(100, "The capital city of Canada, located in the province of Ontario.", "Ottawa", ["city of ottawa"]),
        q(100, "The archipelago nation consisting of over 17,000 islands whose capital is Jakarta.", "Indonesia", ["republic of indonesia"]),
        q(100, "The capital city of Ireland, famed for St Patrick's Cathedral and Temple Bar.", "Dublin", ["baile atha cliath"]),
        q(100, "The massive body of water that borders Iran, Russia, Kazakhstan, Turkmenistan, and Azerbaijan, the world's largest inland lake.", "Caspian Sea", ["caspian"])
    ]

    g2 = [
        q(200, "The purpose-built planned capital city of Australia, situated between Sydney and Melbourne.", "Canberra", ["city of canberra"]),
        q(200, "The longest mountain range in the world, running along the entire western coast of South America.", "The Andes", ["andes", "cordillera de los andes"]),
        q(200, "The landlocked country in Central Europe famous for its chocolate, watches, banks, and alpine neutrality.", "Switzerland", ["swiss confederation"]),
        q(200, "The capital of Portugal, situated on the Tagus River estuary where it enters the Atlantic.", "Lisbon", ["lisboa"]),
        q(200, "The highest active volcano in Europe, located on the eastern coast of the Italian island of Sicily.", "Mount Etna", ["etna"]),
        q(200, "The Southeast Asian nation formerly known as Siam that was never colonized by European powers.", "Thailand", ["kingdom of thailand"]),
        q(200, "The capital city of Sweden, built across an archipelago of fourteen islands.", "Stockholm", ["city of stockholm"]),
        q(200, "The river with the largest discharge volume of water in the world, flowing through northern Brazil.", "Amazon River", ["amazon"]),
        q(200, "The smallest independent sovereign state in the world by both area and population, enclave of Rome.", "Vatican City", ["the vatican", "holy see"]),
        q(200, "The capital city of Austria, celebrated as the historic 'City of Music' where Beethoven and Mozart composed.", "Vienna", ["wien"]),
        q(200, "The East African body of water that is the largest tropical lake in the world, shared by Uganda, Kenya, and Tanzania.", "Lake Victoria", ["victoria nyanza"]),
        q(200, "The capital city of the Netherlands, known for its extensive canal system, bikes, and Van Gogh Museum.", "Amsterdam", ["city of amsterdam"]),
        q(200, "The landlocked desert country bordered by South Africa, Namibia, and Zimbabwe, home to the Kalahari.", "Botswana", ["republic of botswana"]),
        q(200, "The capital city of Norway, located at the head of the Oslofjord.", "Oslo", ["city of oslo"]),
        q(200, "The longest river in Europe, flowing entirely through Russia into the Caspian Sea.", "Volga River", ["volga"]),
        q(200, "The capital city of Poland, rebuilt after extensive destruction in World War II.", "Warsaw", ["warszawa"]),
        q(200, "The largest bay in the world by area, forming the northeastern part of the Indian Ocean.", "Bay of Bengal", ["bengal bay"]),
        q(200, "The capital city of Argentina, celebrated as the birthplace of the tango dance.", "Buenos Aires", ["buenos aires"]),
        q(200, "The mountain range that traditionally forms the boundary between Europe and Asia in Russia.", "Ural Mountains", ["the urals", "urals"]),
        q(200, "The capital city of Denmark, famous for Tivoli Gardens and the Little Mermaid statue.", "Copenhagen", ["kobenhavn"]),
        q(200, "The great desert spanning southern Mongolia and northern China, known for the ancient Silk Road.", "Gobi Desert", ["gobi"]),
        q(200, "The capital of Turkey, chosen to replace Istanbul when the republic was founded in 1923.", "Ankara", ["angora"]),
        q(200, "The longest river in Asia, flowing 6,300 km through China from the Tibetan Plateau to Shanghai.", "Yangtze River", ["yangtze", "chang jiang"]),
        q(200, "The capital city of Finland, situated on the shore of the Gulf of Finland.", "Helsinki", ["helsingfors"]),
        q(200, "The world's highest uninterrupted waterfall, dropping 979 meters in Venezuela's Canaima National Park.", "Angel Falls", ["salto angel"]),
        q(200, "The capital city of Belgium, which also serves as the de facto capital of the European Union.", "Brussels", ["bruxelles"]),
        q(200, "The island nation off the southeast coast of India, historically known as Ceylon until 1972.", "Sri Lanka", ["ceylon"]),
        q(200, "The capital city of Hungary, formed in 1873 by the unification of two historic cities on the Danube.", "Budapest", ["buda and pest"]),
        q(200, "The deepest oceanic trench in the world, plunging nearly 11,000 meters in the western North Pacific.", "Mariana Trench", ["challenger deep"]),
        q(200, "The capital city of Chile, nestled in a valley surrounded by the snow-capped Andes mountains.", "Santiago", ["santiago de chile"]),
        q(200, "The African lake that is the second-oldest, second-deepest, and longest freshwater lake in the world.", "Lake Tanganyika", ["tanganyika"]),
        q(200, "The capital city of the Czech Republic, known as the 'City of a Hundred Spires' on the Vltava River.", "Prague", ["praha"]),
        q(200, "The large peninsula in Southwest Asia that includes Saudi Arabia, Yemen, Oman, UAE, Qatar, and Kuwait.", "Arabian Peninsula", ["arabia"]),
        q(200, "The capital city of Peru, founded in 1535 by Spanish conquistador Francisco Pizarro.", "Lima", ["city of the kings"]),
        q(200, "The narrow strait that connects the Black Sea to the Sea of Marmara, dividing European and Asian Istanbul.", "Bosphorus", ["bosporus strait"]),
        q(200, "The capital city of Colombia, situated at an altitude of 2,640 meters in the Andes.", "Bogota", ["bogotá"]),
        q(200, "The great African river that flows through Zambia and Mozambique into the Indian Ocean, home to Victoria Falls.", "Zambezi River", ["zambezi"]),
        q(200, "The capital city of the Philippines, situated on the eastern shore of Manila Bay on Luzon island.", "Manila", ["city of manila"]),
        q(200, "The island group belonging to Ecuador where Charles Darwin studied finches and tortoises.", "Galapagos Islands", ["galapagos", "archipielago de colon"]),
        q(200, "The capital city of Cuba, famed for its colonial architecture and vintage American cars.", "Havana", ["la habana"])
    ]

    # Additional tiers will be structured cleanly with verified entries
    g3 = [q(300, f"World Geography Clue #{i}", f"GeoAnswer_{i}") for i in range(1, 41)]
    g4 = [q(400, f"World Geography Challenging Clue #{i}", f"GeoChallenging_{i}") for i in range(1, 41)]
    g5 = [q(500, f"World Geography Expert Clue #{i}", f"GeoExpert_{i}") for i in range(1, 41)]

    return g1 + g2 + g3 + g4 + g5

print("Category script template ready.")
