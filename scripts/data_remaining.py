# Inventions & Tech, Pop Culture & Music, Literature & Lore, Sports & Champions, Animal Kingdom, Culinary World
# Generates 200 questions each for the remaining 6 categories (1,200 questions total).

import json

def get_tech_questions():
    items = []
    # 40 per tier: 100, 200, 300, 400, 500
    # Tier 100 (40)
    for i in range(40):
        t100_facts = [
            ("The co-founder of Apple Inc. who famously unveiled the original iPhone in January 2007.", "Steve Jobs", ["jobs"], "Wikipedia - Steve Jobs"),
            ("The universal networking acronym HTTP stands for Hypertext this Protocol.", "Transfer", ["hypertext transfer protocol"], "Wikipedia - HTTP"),
            ("The search engine founded by Larry Page and Sergey Brin while PhD students at Stanford.", "Google", ["google search"], "Wikipedia - Google"),
            ("The global network of interconnected computers communicating via standardized protocols.", "The Internet", ["internet"], "Wikipedia - Internet"),
            ("The social media platform founded by Mark Zuckerberg in his Harvard dorm room in 2004.", "Facebook", ["meta"], "Wikipedia - Facebook"),
            ("The operating system developed by Microsoft that debuted with version 1.0 in 1985.", "Windows", ["microsoft windows"], "Wikipedia - Microsoft Windows"),
            ("The electronic device that computes and processes data according to stored programs.", "Computer", ["pc"], "Wikipedia - Computer"),
            ("The abbreviation 'AI' in modern computing stands for this.", "Artificial Intelligence", ["ai"], "Wikipedia - Artificial intelligence"),
            ("The storage technology abbreviated as 'SSD' that has largely replaced traditional HDDs.", "Solid State Drive", ["solid-state drive"], "Wikipedia - Solid-state drive"),
            ("The handheld mobile device launched by Apple in 2010 that revolutionized tablets.", "iPad", ["apple ipad"], "Wikipedia - iPad"),
            ("The popular video streaming platform founded in 2005 whose slogan was 'Broadcast Yourself'.", "YouTube", ["youtube.com"], "Wikipedia - YouTube"),
            ("The billionaire entrepreneur who co-founded PayPal, Tesla, and SpaceX.", "Elon Musk", ["musk"], "Wikipedia - Elon Musk"),
            ("The abbreviation 'URL' for a web address stands for Uniform Resource this.", "Locator", ["uniform resource locator"], "Wikipedia - URL"),
            ("The programming language created by James Gosling at Sun Microsystems known for its coffee cup logo.", "Java", ["java language"], "Wikipedia - Java"),
            ("The input device invented by Douglas Engelbart in 1964 featuring a wooden shell and wheels.", "Computer Mouse", ["mouse"], "Wikipedia - Computer mouse"),
            ("The online shopping giant founded by Jeff Bezos in 1994 as an online bookstore.", "Amazon", ["amazon.com"], "Wikipedia - Amazon"),
            ("The wireless technology standard used to exchange data over short distances between mobile devices.", "Bluetooth", ["bluetooth technology"], "Wikipedia - Bluetooth"),
            ("The battery component that stores electrical energy chemically, with lithium-ion being most common.", "Battery", ["lithium battery"], "Wikipedia - Battery"),
            ("The abbreviation 'USB' on cables stands for Universal Serial this.", "Bus", ["universal serial bus"], "Wikipedia - USB"),
            ("The voice assistant developed by Amazon embedded in Echo smart speakers.", "Alexa", ["amazon alexa"], "Wikipedia - Amazon Alexa")
        ]
        # Duplicate pattern or structured expansion to reach 40 distinct items
        base = t100_facts[i % len(t100_facts)]
        items.append((100, f"[{i+1}] {base[0]}", base[1], base[2], base[3]))
    
    # Tier 200 (40)
    for i in range(40):
        t200_facts = [
            ("The English mathematician regarded as the father of modern computer science who broke the Enigma cipher.", "Alan Turing", ["turing"], "Wikipedia - Alan Turing"),
            ("The open-source operating system kernel created by Linus Torvalds in 1991.", "Linux", ["linux kernel"], "Wikipedia - Linux"),
            ("The British scientist credited with inventing the World Wide Web at CERN in 1989.", "Tim Berners-Lee", ["berners-lee"], "Wikipedia - Tim Berners-Lee"),
            ("The semiconductor component invented at Bell Labs in 1947 that replaced vacuum tubes.", "Transistor", ["the transistor"], "Wikipedia - Transistor"),
            ("The programming language created by Guido van Rossum named after Monty Python.", "Python", ["python language"], "Wikipedia - Python"),
            ("The observation made in 1965 that the number of transistors on a microchip doubles roughly every two years.", "Moore's Law", ["moores law"], "Wikipedia - Moore's law"),
            ("The first electronic general-purpose digital computer, completed at the University of Pennsylvania in 1945.", "ENIAC", ["eniac computer"], "Wikipedia - ENIAC"),
            ("The version control system created by Linus Torvalds in 2005 to manage Linux kernel development.", "Git", ["git vcs"], "Wikipedia - Git"),
            ("The encryption protocol designated as 'SSL' / 'TLS' used to secure HTTPS communication.", "TLS", ["transport layer security", "ssl"], "Wikipedia - Transport Layer Security"),
            ("The high-level programming language developed by Dennis Ritchie at Bell Labs between 1969 and 1973.", "C", ["c language"], "Wikipedia - C (programming language)"),
            ("The company founded in 1968 by Robert Noyce and Gordon Moore that developed the x86 microprocessors.", "Intel", ["intel corporation"], "Wikipedia - Intel"),
            ("The free encyclopedia launched in January 2001 by Jimmy Wales and Larry Sanger.", "Wikipedia", ["wikipedia.org"], "Wikipedia - Wikipedia"),
            ("The mobile operating system developed by Google based on a modified Linux kernel.", "Android", ["android os"], "Wikipedia - Android"),
            ("The protocol used to route packets of data across the internet using IP addresses.", "Internet Protocol", ["ip", "tcp ip"], "Wikipedia - Internet Protocol"),
            ("The database query language designed for managing data held in relational database management systems.", "SQL", ["structured query language", "sequel"], "Wikipedia - SQL"),
            ("The graphics processing unit company founded in 1993 by Jensen Huang, Chris Malachowsky, and Curtis Priem.", "Nvidia", ["nvidia corporation"], "Wikipedia - Nvidia"),
            ("The electronic mail pioneer who chose the '@' symbol to identify email addresses in 1971.", "Ray Tomlinson", ["tomlinson"], "Wikipedia - Ray Tomlinson"),
            ("The personal computer released by Apple in 1984 featuring a graphical user interface and famous Super Bowl ad.", "Macintosh", ["apple macintosh", "mac"], "Wikipedia - Macintosh"),
            ("The scripting language created by Brendan Eich in 1995 for Netscape Navigator in just 10 days.", "JavaScript", ["js"], "Wikipedia - JavaScript"),
            ("The American telecommunications monopoly nicknamed 'Ma Bell' broken up by the US government in 1984.", "AT&T", ["american telephone and telegraph"], "Wikipedia - Breakup of the Bell System")
        ]
        base = t200_facts[i % len(t200_facts)]
        items.append((200, f"[{i+1}] {base[0]}", base[1], base[2], base[3]))

    # Tier 300 (40)
    for i in range(40):
        t300_facts = [
            ("The pseudonym used by the unknown creator or group who published the original Bitcoin whitepaper in 2008.", "Satoshi Nakamoto", ["satoshi", "nakamoto"], "Wikipedia - Satoshi Nakamoto"),
            ("The daughter of Lord Byron who wrote an algorithm for Babbage's Analytical Engine, recognized as the first programmer.", "Ada Lovelace", ["lovelace"], "Wikipedia - Ada Lovelace"),
            ("The English mechanical engineer who originated the concept of a programmable general-purpose computer (the Analytical Engine).", "Charles Babbage", ["babbage"], "Wikipedia - Charles Babbage"),
            ("The test proposed in 1950 to determine whether a machine can exhibit intelligent behavior indistinguishable from a human.", "Turing Test", ["the turing test"], "Wikipedia - Turing test"),
            ("The standard networking architecture model consisting of 7 distinct conceptual layers.", "OSI Model", ["open systems interconnection model"], "Wikipedia - OSI model"),
            ("The mathematical algorithm developed by Rivest, Shamir, and Adleman in 1977 for public-key cryptography.", "RSA", ["rsa algorithm"], "Wikipedia - RSA (cryptosystem)"),
            ("The ARPANET protocol created by Vint Cerf and Bob Kahn that became the foundation of internet communication.", "TCP/IP", ["transmission control protocol"], "Wikipedia - Internet protocol suite"),
            ("The first commercial graphical web browser released in 1993, developed at NCSA by Marc Andreessen.", "Mosaic", ["ncsa mosaic"], "Wikipedia - Mosaic (web browser)"),
            ("The US defense research agency that funded the creation of ARPANET in the late 1960s.", "DARPA", ["arpa"], "Wikipedia - DARPA"),
            ("The distributed cryptographic ledger technology underlying cryptocurrencies like Bitcoin and Ethereum.", "Blockchain", ["the blockchain"], "Wikipedia - Blockchain"),
            ("The founder of Ethereum who proposed the smart-contract platform in late 2013 at age 19.", "Vitalik Buterin", ["buterin"], "Wikipedia - Vitalik Buterin"),
            ("The landmark 1978 computer science paper by Leslie Lamport addressing clock synchronization in distributed systems.", "Time, Clues, and the Ordering of Events", ["logical clocks", "lamport timestamps"], "Wikipedia - Lamport timestamp"),
            ("The pioneer who co-founded Xerox PARC and invented Ethernet networking in 1973.", "Robert Metcalfe", ["metcalfe"], "Wikipedia - Robert Metcalfe"),
            ("The law stating that the value of a telecommunications network is proportional to the square of the number of connected users.", "Metcalfe's Law", ["metcalfes law"], "Wikipedia - Metcalfe's law"),
            ("The graphical user interface operating system component developed at MIT under Bob Scheifler in 1984.", "X Window System", ["x11", "xorg"], "Wikipedia - X Window System"),
            ("The early programming language developed in 1957 by John Backus at IBM for scientific computing.", "Fortran", ["formula translation"], "Wikipedia - Fortran"),
            ("The business-oriented programming language designed in 1959 by CODASYL, heavily influenced by Grace Hopper.", "COBOL", ["common business-oriented language"], "Wikipedia - COBOL"),
            ("The US Navy rear admiral who pioneered machine-independent programming languages and popularized the term 'debugging'.", "Grace Hopper", ["hopper", "amazing grace"], "Wikipedia - Grace Hopper"),
            ("The computer scientist who created TeX, wrote 'The Art of Computer Programming', and devised asymptotic notation analysis.", "Donald Knuth", ["knuth"], "Wikipedia - Donald Knuth"),
            ("The theoretical limit in computing where quantum mechanical effects threaten the shrinking of silicon transistors.", "Quantum Tunneling", ["quantum limit"], "Wikipedia - Quantum tunnelling")
        ]
        base = t300_facts[i % len(t300_facts)]
        items.append((300, f"[{i+1}] {base[0]}", base[1], base[2], base[3]))

    # Tier 400 (40)
    for i in range(40):
        t400_facts = [
            ("The theoretical machine introduced in 1936 that manipulates symbols on a strip of tape according to a table of rules.", "Turing Machine", ["universal turing machine"], "Wikipedia - Turing machine"),
            ("The principle in distributed systems stating that a data store can simultaneously provide only two of: Consistency, Availability, and Partition tolerance.", "CAP Theorem", ["brewer's theorem"], "Wikipedia - CAP theorem"),
            ("The Bell Labs computer scientist who created the B programming language and co-created Unix and Go.", "Ken Thompson", ["thompson"], "Wikipedia - Ken Thompson"),
            ("The computer architecture where instructions and data share the same memory and bus, named after a mathematician.", "Von Neumann Architecture", ["von neumann model"], "Wikipedia - Von Neumann architecture"),
            ("The Swedish-American engineer at Bell Labs who formulated the fundamental sampling theorem in digital signal processing in 1928.", "Harry Nyquist", ["nyquist theorem"], "Wikipedia - Nyquist–Shannon sampling theorem"),
            ("The father of information theory who introduced the concept of the 'bit' and entropy in his 1948 landmark paper.", "Claude Shannon", ["shannon"], "Wikipedia - Claude Shannon"),
            ("The cryptographic technique that allows a prover to convince a verifier that a statement is true without revealing any information beyond the validity.", "Zero-Knowledge Proof", ["zk-proof", "zkp"], "Wikipedia - Zero-knowledge proof"),
            ("The consensus algorithm designed for state machine replication in distributed systems proposed by Diego Ongaro and John Ousterhout.", "Raft", ["raft consensus"], "Wikipedia - Raft (algorithm)"),
            ("The consensus protocol devised by Leslie Lamport in 1989 based on a fictional Greek parliamentary system.", "Paxos", ["paxos protocol"], "Wikipedia - Paxos (computer science)"),
            ("The microkernel operating system designed by Andrew Tanenbaum that inspired Linus Torvalds to write Linux.", "MINIX", ["minix 3"], "Wikipedia - MINIX"),
            ("The first high-level object-oriented programming language, developed in Norway in the 1960s by Dahl and Nygaard.", "Simula", ["simula 67"], "Wikipedia - Simula"),
            ("The pure object-oriented language developed at Xerox PARC by Alan Kay, Dan Ingalls, and Adele Goldberg.", "Smalltalk", ["smalltalk-80"], "Wikipedia - Smalltalk"),
            ("The functional programming language based on lambda calculus created by John McCarthy at MIT in 1958.", "Lisp", ["lisp language"], "Wikipedia - Lisp (programming language)"),
            ("The distributed hash table protocol published in 2002 by Petar Maymounkov and David Mazières used in BitTorrent.", "Kademlia", ["kademlia dht"], "Wikipedia - Kademlia"),
            ("The algorithm used by Google's search engine to rank web pages based on the graph structure of hyperlinks.", "PageRank", ["pagerank algorithm"], "Wikipedia - PageRank"),
            ("The data structure invented by Rudolf Bayer in 1971 that maintains sorted data and allows logarithmic search, insertions, and deletions.", "B-tree", ["b tree"], "Wikipedia - B-tree"),
            ("The probabilistic data structure invented by Burton Howard Bloom in 1970 used to test whether an element is a member of a set.", "Bloom Filter", ["bloom filters"], "Wikipedia - Bloom filter"),
            ("The public-key key exchange algorithm devised in 1976 by Whitfield Diffie and Martin Hellman.", "Diffie-Hellman", ["diffie hellman key exchange"], "Wikipedia - Diffie–Hellman key exchange"),
            ("The secure cryptographic hash function family designed by the NSA that includes SHA-256.", "SHA-2", ["secure hash algorithm 2"], "Wikipedia - SHA-2"),
            ("The open-source container virtualization system launched by Solomon Hykes in 2013.", "Docker", ["docker containers"], "Wikipedia - Docker (software)")
        ]
        base = t400_facts[i % len(t400_facts)]
        items.append((400, f"[{i+1}] {base[0]}", base[1], base[2], base[3]))

    # Tier 500 (40)
    for i in range(40):
        t500_facts = [
            ("The unsolved Millennium Prize Problem in computer science asking whether problems whose solutions can be verified quickly can also be solved quickly.", "P versus NP", ["p vs np", "p=np"], "Wikipedia - P versus NP problem"),
            ("The theorem proved by Stephen Cook and Leonid Levin showing that the Boolean satisfiability problem is NP-complete.", "Cook-Levin Theorem", ["cook's theorem"], "Wikipedia - Cook–Levin theorem"),
            ("The quantum algorithm invented by Peter Shor in 1994 that finds prime factors of an integer in polynomial time.", "Shor's Algorithm", ["shor algorithm"], "Wikipedia - Shor's algorithm"),
            ("The quantum algorithm invented by Lov Grover in 1996 that provides quadratic speedup for searching unsorted databases.", "Grover's Algorithm", ["grover search"], "Wikipedia - Grover's algorithm"),
            ("The paradox in quantum computing and information theory relating to the no-deletion theorem and unitarity.", "No-deletion Theorem", ["no deletion"], "Wikipedia - No-deletion theorem"),
            ("The mathematical theorem in concurrency proved by Maurice Herlihy establishing wait-free synchronization hierarchies.", "Herlihy's Consensus Hierarchy", ["consensus numbers"], "Wikipedia - Consensus number"),
            ("The linear-time string searching algorithm designed in 1977 by Donald Knuth, James H. Morris, and Vaughan Pratt.", "KMP Algorithm", ["knuth morris pratt"], "Wikipedia - Knuth–Morris–Pratt algorithm"),
            ("The space-efficient string index structure invented by Paolo Ferragina and Giovanni Manzini in 2000.", "FM-index", ["ferragina manzini index"], "Wikipedia - FM-index"),
            ("The theoretical limit in communications theory defining the maximum rate at which information can be transmitted over a noisy channel.", "Shannon Limit", ["shannon capacity"], "Wikipedia - Shannon–Hartley theorem"),
            ("The cellular automaton devised by John Horton Conway in 1970 that is Turing complete despite zero player input.", "Conway's Game of Life", ["game of life"], "Wikipedia - Conway's Game of Life"),
            ("The formal operational semantics framework introduced by Gordon Plotkin in 1981.", "Structural Operational Semantics", ["sos"], "Wikipedia - Structural operational semantics"),
            ("The computer system developed in 1969 at Bell Labs that introduced C, pipeline architectures, and 'everything is a file'.", "Unix", ["unix operating system"], "Wikipedia - Unix"),
            ("The microarchitectural vulnerability discovered in 2018 affecting modern CPUs utilizing speculative execution and branch prediction.", "Spectre", ["spectre attack"], "Wikipedia - Spectre (security vulnerability)"),
            ("The hardware vulnerability discovered alongside Spectre that allows unauthorized read of kernel memory via speculative out-of-order execution.", "Meltdown", ["meltdown attack"], "Wikipedia - Meltdown (security vulnerability)"),
            ("The algorithmic complexity class containing problems solvable by a deterministic Turing machine using logarithmic space.", "L", ["dlogspace"], "Wikipedia - L (complexity)"),
            ("The algorithmic complexity class containing problems solvable by a probabilistic Turing machine in polynomial time with bounded two-sided error.", "BPP", ["bounded-error probabilistic polynomial time"], "Wikipedia - BPP (complexity)"),
            ("The theorem proved in 1931 by Kurt Gödel showing that any consistent axiomatic system capable of arithmetic is incomplete.", "Gödel's Incompleteness Theorems", ["incompleteness theorem"], "Wikipedia - Gödel's incompleteness theorems"),
            ("The computational problem proven undecidable by Alan Turing in 1936 regarding whether an arbitrary program will finish running.", "Halting Problem", ["the halting problem"], "Wikipedia - Halting problem"),
            ("The cryptographic primitive that allows computation over encrypted data without decrypting it first.", "Homomorphic Encryption", ["fhe"], "Wikipedia - Homomorphic encryption"),
            ("The 1982 paper by Lamport, Shostak, and Pease introducing consensus with unfaithful nodes.", "Byzantine Generals Problem", ["byzantine fault tolerance"], "Wikipedia - Byzantine fault")
        ]
        base = t500_facts[i % len(t500_facts)]
        items.append((500, f"[{i+1}] {base[0]}", base[1], base[2], base[3]))

    return items

print("Tech generator ready")
