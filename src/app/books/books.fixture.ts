export type Book = {
  id: string,
  author: string,
  country: string,
  imageLink: string,
  title: string,
  year: number,
}

export interface BookReduceShape {
  extractedBook: Book,
  listWithoutBook: Book[],
}

export const bookList: Book[] = [
  {
      "id":"B00000",
      "author":"Chinua Achebe",
      "country":"Nigeria",
      "imageLink":"assets/JPG/things-fall-apart.jpg",
      "title":"Things Fall Apart",
      "year":1958
  },
  {
      "id":"B00001",
      "author":"Hans Christian Andersen",
      "country":"Denmark",
      "imageLink":"assets/JPG/fairy-tales.jpg",
      "title":"Fairy tales",
      "year":1836
  },
  {
      "id":"B00002",
      "author":"Dante Alighieri",
      "country":"Italy",
      "imageLink":"assets/JPG/the-divine-comedy.jpg",
      "title":"The Divine Comedy",
      "year":1315
  },
  {
      "id":"B00003",
      "author":"Unknown",
      "country":"Sumer and Akkadian Empire",
      "imageLink":"assets/JPG/the-epic-of-gilgamesh.jpg",
      "title":"The Epic Of Gilgamesh",
      "year":-1700
  },
  {
      "id":"B00004",
      "author":"Unknown",
      "country":"Achaemenid Empire",
      "imageLink":"assets/JPG/the-book-of-job.jpg",
      "title":"The Book Of Job",
      "year":-600
  },
  {
      "id":"B00005",
      "author":"Unknown",
      "country":"India/Iran/Iraq/Egypt/Tajikistan",
      "imageLink":"assets/JPG/one-thousand-and-one-nights.jpg",
      "title":"One Thousand and One Nights",
      "year":1200
  },
  {
      "id":"B00006",
      "author":"Unknown",
      "country":"Iceland",
      "imageLink":"assets/JPG/njals-saga.jpg",
      "title":"Njál's Saga",
      "year":1350
  },
  {
      "id":"B00007",
      "author":"Jane Austen",
      "country":"United Kingdom",
      "imageLink":"assets/JPG/pride-and-prejudice.jpg",
      "title":"Pride and Prejudice",
      "year":1813
  },
  {
      "id":"B00008",
      "author":"Honoré de Balzac",
      "country":"France",
      "imageLink":"assets/JPG/le-pere-goriot.jpg",
      "title":"Le Père Goriot",
      "year":1835
  },
  {
      "id":"B00009",
      "author":"Samuel Beckett",
      "country":"Republic of Ireland",
      "imageLink":"assets/JPG/molloy-malone-dies-the-unnamable.jpg",
      "title":"Molloy, Malone Dies, The Unnamable, the trilogy",
      "year":1952
  },
  {
      "id":"B00010",
      "author":"Giovanni Boccaccio",
      "country":"Italy",
      "imageLink":"assets/JPG/the-decameron.jpg",
      "title":"The Decameron",
      "year":1351
  },
  {
      "id":"B00011",
      "author":"Jorge Luis Borges",
      "country":"Argentina",
      "imageLink":"assets/JPG/ficciones.jpg",
      "title":"Ficciones",
      "year":1965
  },
  {
      "id":"B00012",
      "author":"Emily Brontë",
      "country":"United Kingdom",
      "imageLink":"assets/JPG/wuthering-heights.jpg",
      "title":"Wuthering Heights",
      "year":1847
  },
  {
      "id":"B00013",
      "author":"Albert Camus",
      "country":"Algeria, French Empire",
      "imageLink":"assets/JPG/l-etranger.jpg",
      "title":"The Stranger",
      "year":1942
  },
  {
      "id":"B00014",
      "author":"Paul Celan",
      "country":"Romania, France",
      "imageLink":"assets/JPG/poems-paul-celan.jpg",
      "title":"Poems",
      "year":1952
  },
  {
      "id":"B00015",
      "author":"Louis-Ferdinand Céline",
      "country":"France",
      "imageLink":"assets/JPG/voyage-au-bout-de-la-nuit.jpg",
      "title":"Journey to the End of the Night",
      "year":1932
  },
  {
      "id":"B00016",
      "author":"Miguel de Cervantes",
      "country":"Spain",
      "imageLink":"assets/JPG/don-quijote-de-la-mancha.jpg",
      "title":"Don Quijote De La Mancha",
      "year":1610
  },
  {
      "id":"B00017",
      "author":"Geoffrey Chaucer",
      "country":"England",
      "imageLink":"assets/JPG/the-canterbury-tales.jpg",
      "title":"The Canterbury Tales",
      "year":1450
  },
  {
      "id":"B00018",
      "author":"Anton Chekhov",
      "country":"Russia",
      "imageLink":"assets/JPG/stories-of-anton-chekhov.jpg",
      "title":"Stories",
      "year":1886
  },
  {
      "id":"B00019",
      "author":"Joseph Conrad",
      "country":"United Kingdom",
      "imageLink":"assets/JPG/nostromo.jpg",
      "title":"Nostromo",
      "year":1904
  },
  {
      "id":"B00020",
      "author":"Charles Dickens",
      "country":"United Kingdom",
      "imageLink":"assets/JPG/great-expectations.jpg",
      "title":"Great Expectations",
      "year":1861
  },
  {
      "id":"B00021",
      "author":"Denis Diderot",
      "country":"France",
      "imageLink":"assets/JPG/jacques-the-fatalist.jpg",
      "title":"Jacques the Fatalist",
      "year":1796
  },
  {
      "id":"B00022",
      "author":"Alfred Döblin",
      "country":"Germany",
      "imageLink":"assets/JPG/berlin-alexanderplatz.jpg",
      "title":"Berlin Alexanderplatz",
      "year":1929
  },
  {
      "id":"B00023",
      "author":"Fyodor Dostoevsky",
      "country":"Russia",
      "imageLink":"assets/JPG/crime-and-punishment.jpg",
      "title":"Crime and Punishment",
      "year":1866
  },
  {
      "id":"B00024",
      "author":"Fyodor Dostoevsky",
      "country":"Russia",
      "imageLink":"assets/JPG/the-idiot.jpg",
      "title":"The Idiot",
      "year":1869
  },
  {
      "id":"B00025",
      "author":"Fyodor Dostoevsky",
      "country":"Russia",
      "imageLink":"assets/JPG/the-possessed.jpg",
      "title":"The Possessed",
      "year":1872
  },
  {
      "id":"B00026",
      "author":"Fyodor Dostoevsky",
      "country":"Russia",
      "imageLink":"assets/JPG/the-brothers-karamazov.jpg",
      "title":"The Brothers Karamazov",
      "year":1880
  },
  {
      "id":"B00027",
      "author":"George Eliot",
      "country":"United Kingdom",
      "imageLink":"assets/JPG/middlemarch.jpg",
      "title":"Middlemarch",
      "year":1871
  },
  {
      "id":"B00028",
      "author":"Ralph Ellison",
      "country":"United States",
      "imageLink":"assets/JPG/invisible-man.jpg",
      "title":"Invisible Man",
      "year":1952
  },
  {
      "id":"B00029",
      "author":"Euripides",
      "country":"Greece",
      "imageLink":"assets/JPG/medea.jpg",
      "title":"Medea",
      "year":-431
  },
  {
      "id":"B00030",
      "author":"William Faulkner",
      "country":"United States",
      "imageLink":"assets/JPG/absalom-absalom.jpg",
      "title":"Absalom, Absalom!",
      "year":1936
  },
  {
      "id":"B00031",
      "author":"William Faulkner",
      "country":"United States",
      "imageLink":"assets/JPG/the-sound-and-the-fury.jpg",
      "title":"The Sound and the Fury",
      "year":1929
  },
  {
      "id":"B00032",
      "author":"Gustave Flaubert",
      "country":"France",
      "imageLink":"assets/JPG/madame-bovary.jpg",
      "title":"Madame Bovary",
      "year":1857
  },
  {
      "id":"B00033",
      "author":"Gustave Flaubert",
      "country":"France",
      "imageLink":"assets/JPG/l-education-sentimentale.jpg",
      "title":"Sentimental Education",
      "year":1869
  },
  {
      "id":"B00034",
      "author":"Federico García Lorca",
      "country":"Spain",
      "imageLink":"assets/JPG/gypsy-ballads.jpg",
      "title":"Gypsy Ballads",
      "year":1928
  },
  {
      "id":"B00035",
      "author":"Gabriel García Márquez",
      "country":"Colombia",
      "imageLink":"assets/JPG/one-hundred-years-of-solitude.jpg",
      "title":"One Hundred Years of Solitude",
      "year":1967
  },
  {
      "id":"B00036",
      "author":"Gabriel García Márquez",
      "country":"Colombia",
      "imageLink":"assets/JPG/love-in-the-time-of-cholera.jpg",
      "title":"Love in the Time of Cholera",
      "year":1985
  },
  {
      "id":"B00037",
      "author":"Johann Wolfgang von Goethe",
      "country":"Saxe-Weimar",
      "imageLink":"assets/JPG/faust.jpg",
      "title":"Faust",
      "year":1832
  },
  {
      "id":"B00038",
      "author":"Nikolai Gogol",
      "country":"Russia",
      "imageLink":"assets/JPG/dead-souls.jpg",
      "title":"Dead Souls",
      "year":1842
  },
  {
      "id":"B00039",
      "author":"Günter Grass",
      "country":"Germany",
      "imageLink":"assets/JPG/the-tin-drum.jpg",
      "title":"The Tin Drum",
      "year":1959
  },
  {
      "id":"B00040",
      "author":"João Guimarães Rosa",
      "country":"Brazil",
      "imageLink":"assets/JPG/the-devil-to-pay-in-the-backlands.jpg",
      "title":"The Devil to Pay in the Backlands",
      "year":1956
  },
  {
      "id":"B00041",
      "author":"Knut Hamsun",
      "country":"Norway",
      "imageLink":"assets/JPG/hunger.jpg",
      "title":"Hunger",
      "year":1890
  },
  {
      "id":"B00042",
      "author":"Ernest Hemingway",
      "country":"United States",
      "imageLink":"assets/JPG/the-old-man-and-the-sea.jpg",
      "title":"The Old Man and the Sea",
      "year":1952
  },
  {
      "id":"B00043",
      "author":"Homer",
      "country":"Greece",
      "imageLink":"assets/JPG/the-iliad-of-homer.jpg",
      "title":"Iliad",
      "year":-735
  },
  {
      "id":"B00044",
      "author":"Homer",
      "country":"Greece",
      "imageLink":"assets/JPG/the-odyssey-of-homer.jpg",
      "title":"Odyssey",
      "year":-800
  },
  {
      "id":"B00045",
      "author":"Henrik Ibsen",
      "country":"Norway",
      "imageLink":"assets/JPG/a-Dolls-house.jpg",
      "title":"A Doll's House",
      "year":1879
  },
  {
      "id":"B00046",
      "author":"James Joyce",
      "country":"Irish Free State",
      "imageLink":"assets/JPG/ulysses.jpg",
      "title":"Ulysses",
      "year":1922
  },
  {
      "id":"B00047",
      "author":"Franz Kafka",
      "country":"Czechoslovakia",
      "imageLink":"assets/JPG/stories-of-franz-kafka.jpg",
      "title":"Stories",
      "year":1924
  },
  {
      "id":"B00048",
      "author":"Franz Kafka",
      "country":"Czechoslovakia",
      "imageLink":"assets/JPG/the-trial.jpg",
      "title":"The Trial",
      "year":1925
  },
  {
      "id":"B00049",
      "author":"Franz Kafka",
      "country":"Czechoslovakia",
      "imageLink":"assets/JPG/the-castle.jpg",
      "title":"The Castle",
      "year":1926
  },
  {
      "id":"B00050",
      "author":"Kālidāsa",
      "country":"India",
      "imageLink":"assets/JPG/the-recognition-of-shakuntala.jpg",
      "title":"The recognition of Shakuntala",
      "year":150
  },
  {
      "id":"B00051",
      "author":"Yasunari Kawabata",
      "country":"Japan",
      "imageLink":"assets/JPG/the-sound-of-the-mountain.jpg",
      "title":"The Sound of the Mountain",
      "year":1954
  },
  {
      "id":"B00052",
      "author":"Nikos Kazantzakis",
      "country":"Greece",
      "imageLink":"assets/JPG/zorba-the-greek.jpg",
      "title":"Zorba the Greek",
      "year":1946
  },
  {
      "id":"B00053",
      "author":"D. H. Lawrence",
      "country":"United Kingdom",
      "imageLink":"assets/JPG/sons-and-lovers.jpg",
      "title":"Sons and Lovers",
      "year":1913
  },
  {
      "id":"B00054",
      "author":"Halldór Laxness",
      "country":"Iceland",
      "imageLink":"assets/JPG/independent-people.jpg",
      "title":"Independent People",
      "year":1934
  },
  {
      "id":"B00055",
      "author":"Giacomo Leopardi",
      "country":"Italy",
      "imageLink":"assets/JPG/poems-giacomo-leopardi.jpg",
      "title":"Poems",
      "year":1818
  },
  {
      "id":"B00056",
      "author":"Doris Lessing",
      "country":"United Kingdom",
      "imageLink":"assets/JPG/the-golden-notebook.jpg",
      "title":"The Golden Notebook",
      "year":1962
  },
  {
      "id":"B00057",
      "author":"Astrid Lindgren",
      "country":"Sweden",
      "imageLink":"assets/JPG/pippi-longstocking.jpg",
      "title":"Pippi Longstocking",
      "year":1945
  },
  {
      "id":"B00058",
      "author":"Lu Xun",
      "country":"China",
      "imageLink":"assets/JPG/diary-of-a-madman.jpg",
      "title":"Diary of a Madman",
      "year":1918
  },
  {
      "id":"B00059",
      "author":"Naguib Mahfouz",
      "country":"Egypt",
      "imageLink":"assets/JPG/children-of-gebelawi.jpg",
      "title":"Children of Gebelawi",
      "year":1959
  },
  {
      "id":"B00060",
      "author":"Thomas Mann",
      "country":"Germany",
      "imageLink":"assets/JPG/buddenbrooks.jpg",
      "title":"Buddenbrooks",
      "year":1901
  },
  {
      "id":"B00061",
      "author":"Thomas Mann",
      "country":"Germany",
      "imageLink":"assets/JPG/the-magic-mountain.jpg",
      "title":"The Magic Mountain",
      "year":1924
  },
  {
      "id":"B00062",
      "author":"Herman Melville",
      "country":"United States",
      "imageLink":"assets/JPG/moby-dick.jpg",
      "title":"Moby Dick",
      "year":1851
  },
  {
      "id":"B00063",
      "author":"Michel de Montaigne",
      "country":"France",
      "imageLink":"assets/JPG/essais.jpg",
      "title":"Essays",
      "year":1595
  },
  {
      "id":"B00064",
      "author":"Elsa Morante",
      "country":"Italy",
      "imageLink":"assets/JPG/history.jpg",
      "title":"History",
      "year":1974
  },
  {
      "id":"B00065",
      "author":"Toni Morrison",
      "country":"United States",
      "imageLink":"assets/JPG/beloved.jpg",
      "title":"Beloved",
      "year":1987
  },
  {
      "id":"B00066",
      "author":"Murasaki Shikibu",
      "country":"Japan",
      "imageLink":"assets/JPG/the-tale-of-genji.jpg",
      "title":"The Tale of Genji",
      "year":1006
  },
  {
      "id":"B00067",
      "author":"Robert Musil",
      "country":"Austria",
      "imageLink":"assets/JPG/the-man-without-qualities.jpg",
      "title":"The Man Without Qualities",
      "year":1931
  },
  {
      "id":"B00068",
      "author":"Vladimir Nabokov",
      "country":"Russia/United States",
      "imageLink":"assets/JPG/lolita.jpg",
      "title":"Lolita",
      "year":1955
  },
  {
      "id":"B00069",
      "author":"George Orwell",
      "country":"United Kingdom",
      "imageLink":"assets/JPG/nineteen-eighty-four.jpg",
      "title":"Nineteen Eighty-Four",
      "year":1949
  },
  {
      "id":"B00070",
      "author":"Ovid",
      "country":"Roman Empire",
      "imageLink":"assets/JPG/the-metamorphoses-of-ovid.jpg",
      "title":"Metamorphoses",
      "year":100
  },
  {
      "id":"B00071",
      "author":"Fernando Pessoa",
      "country":"Portugal",
      "imageLink":"assets/JPG/the-book-of-disquiet.jpg",
      "title":"The Book of Disquiet",
      "year":1928
  },
  {
      "id":"B00072",
      "author":"Edgar Allan Poe",
      "country":"United States",
      "imageLink":"assets/JPG/tales-and-poems-of-edgar-allan-poe.jpg",
      "title":"Tales",
      "year":1950
  },
  {
      "id":"B00073",
      "author":"Marcel Proust",
      "country":"France",
      "imageLink":"assets/JPG/a-la-recherche-du-temps-perdu.jpg",
      "title":"In Search of Lost Time",
      "year":1920
  },
  {
      "id":"B00074",
      "author":"François Rabelais",
      "country":"France",
      "imageLink":"assets/JPG/gargantua-and-pantagruel.jpg",
      "title":"Gargantua and Pantagruel",
      "year":1533
  },
  {
      "id":"B00075",
      "author":"Juan Rulfo",
      "country":"Mexico",
      "imageLink":"assets/JPG/pedro-paramo.jpg",
      "title":"Pedro Páramo",
      "year":1955
  },
  {
      "id":"B00076",
      "author":"Rumi",
      "country":"Sultanate of Rum",
      "imageLink":"assets/JPG/the-masnavi.jpg",
      "title":"The Masnavi",
      "year":1236
  },
  {
      "id":"B00077",
      "author":"Salman Rushdie",
      "country":"United Kingdom, India",
      "imageLink":"assets/JPG/midnights-children.jpg",
      "title":"Midnight's Children",
      "year":1981
  },
  {
      "id":"B00078",
      "author":"Saadi",
      "country":"Persia, Persian Empire",
      "imageLink":"assets/JPG/bostan.jpg",
      "title":"Bostan",
      "year":1257
  },
  {
      "id":"B00079",
      "author":"Tayeb Salih",
      "country":"Sudan",
      "imageLink":"assets/JPG/season-of-migration-to-the-north.jpg",
      "title":"Season of Migration to the North",
      "year":1966
  },
  {
      "id":"B00080",
      "author":"José Saramago",
      "country":"Portugal",
      "imageLink":"assets/JPG/blindness.jpg",
      "title":"Blindness",
      "year":1995
  },
  {
      "id":"B00081",
      "author":"William Shakespeare",
      "country":"England",
      "imageLink":"assets/JPG/hamlet.jpg",
      "title":"Hamlet",
      "year":1603
  },
  {
      "id":"B00082",
      "author":"William Shakespeare",
      "country":"England",
      "imageLink":"assets/JPG/king-lear.jpg",
      "title":"King Lear",
      "year":1608
  },
  {
      "id":"B00083",
      "author":"William Shakespeare",
      "country":"England",
      "imageLink":"assets/JPG/othello.jpg",
      "title":"Othello",
      "year":1609
  },
  {
      "id":"B00084",
      "author":"Sophocles",
      "country":"Greece",
      "imageLink":"assets/JPG/oedipus-the-king.jpg",
      "title":"Oedipus the King",
      "year":-430
  },
  {
      "id":"B00085",
      "author":"Stendhal",
      "country":"France",
      "imageLink":"assets/JPG/le-rouge-et-le-noir.jpg",
      "title":"The Red and the Black",
      "year":1830
  },
  {
      "id":"B00086",
      "author":"Laurence Sterne",
      "country":"England",
      "imageLink":"assets/JPG/the-life-and-opinions-of-tristram-shandy.jpg",
      "title":"The Life And Opinions of Tristram Shandy",
      "year":1760
  },
  {
      "id":"B00087",
      "author":"Italo Svevo",
      "country":"Italy",
      "imageLink":"assets/JPG/confessions-of-zeno.jpg",
      "title":"Confessions of Zeno",
      "year":1923
  },
  {
      "id":"B00088",
      "author":"Jonathan Swift",
      "country":"Ireland",
      "imageLink":"assets/JPG/gullivers-travels.jpg",
      "title":"Gulliver's Travels",
      "year":1726
  },
  {
      "id":"B00089",
      "author":"Leo Tolstoy",
      "country":"Russia",
      "imageLink":"assets/JPG/war-and-peace.jpg",
      "title":"War and Peace",
      "year":1867
  },
  {
      "id":"B00090",
      "author":"Leo Tolstoy",
      "country":"Russia",
      "imageLink":"assets/JPG/anna-karenina.jpg",
      "title":"Anna Karenina",
      "year":1877
  },
  {
      "id":"B00091",
      "author":"Leo Tolstoy",
      "country":"Russia",
      "imageLink":"assets/JPG/the-death-of-ivan-ilyich.jpg",
      "title":"The Death of Ivan Ilyich",
      "year":1886
  },
  {
      "id":"B00092",
      "author":"Mark Twain",
      "country":"United States",
      "imageLink":"assets/JPG/the-adventures-of-huckleberry-finn.jpg",
      "title":"The Adventures of Huckleberry Finn",
      "year":1884
  },
  {
      "id":"B00093",
      "author":"Valmiki",
      "country":"India",
      "imageLink":"assets/JPG/ramayana.jpg",
      "title":"Ramayana",
      "year":-450
  },
  {
      "id":"B00094",
      "author":"Virgil",
      "country":"Roman Empire",
      "imageLink":"assets/JPG/the-aeneid.jpg",
      "title":"The Aeneid",
      "year":-23
  },
  {
      "id":"B00095",
      "author":"Vyasa",
      "country":"India",
      "imageLink":"assets/JPG/the-mahab-harata.jpg",
      "title":"Mahabharata",
      "year":-700
  },
  {
      "id":"B00096",
      "author":"Walt Whitman",
      "country":"United States",
      "imageLink":"assets/JPG/leaves-of-grass.jpg",
      "title":"Leaves of Grass",
      "year":1855
  },
  {
      "id":"B00097",
      "author":"Virginia Woolf",
      "country":"United Kingdom",
      "imageLink":"assets/JPG/mrs-dalloway.jpg",
      "title":"Mrs Dalloway",
      "year":1925
  },
  {
      "id":"B00098",
      "author":"Virginia Woolf",
      "country":"United Kingdom",
      "imageLink":"assets/JPG/to-the-lighthouse.jpg",
      "title":"To the Lighthouse",
      "year":1927
  },
  {
      "id":"B00099",
      "author":"Marguerite Yourcenar",
      "country":"France/Belgium",
      "imageLink":"assets/JPG/memoirs-of-hadrian.jpg",
      "title":"Memoirs of Hadrian",
      "year":1951
  }
]