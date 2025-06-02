const books =
[
  {
    "book_id": "B001",
    "title": "Pride and Prejudice",
    "genre": "Romance",
    "publication_year": 1813,
    "isbn": "9780141441330",
    "available_copies": 3,
    "total_copies": 5,
    "author": {
      "author_id": "A001",
      "name": "Jane Austen",
      "birth_year": 1775,
      "death_year": 1817,
      "nationality": "British"
    }
  },
  {
    "book_id": "B002",
    "title": "The Notebook",
    "genre": "Romance",
    "publication_year": 1996,
    "isbn": "9780446614012",
    "available_copies": 4,
    "total_copies": 6,
    "author": {
      "author_id": "A002",
      "name": "Nicholas Sparks",
      "birth_year": 1965,
      "nationality": "American"
    }
  },
  {
    "book_id": "B003",
    "title": "Outlander",
    "genre": "Romance",
    "publication_year": 1991,
    "isbn": "9780440212560",
    "available_copies": 2,
    "total_copies": 5,
    "author": {
      "author_id": "A003",
      "name": "Diana Gabaldon",
      "birth_year": 1952,
      "nationality": "American"
    }
  },
  {
    "book_id": "B004",
    "title": "Twilight",
    "genre": "Romance",
    "publication_year": 2005,
    "isbn": "9780316015844",
    "available_copies": 5,
    "total_copies": 8,
    "author": {
      "author_id": "A004",
      "name": "Stephenie Meyer",
      "birth_year": 1973,
      "nationality": "American"
    }
  },
  {
    "book_id": "B005",
    "title": "Me Before You",
    "genre": "Romance",
    "publication_year": 2012,
    "isbn": "9780143124542",
    "available_copies": 0,
    "total_copies": 6,
    "author": {
      "author_id": "A005",
      "name": "Jojo Moyes",
      "birth_year": 1969,
      "nationality": "British"
    }
  },
  {
    "book_id": "B006",
    "title": "The Rosie Project",
    "genre": "Romance",
    "publication_year": 2013,
    "isbn": "9781476729084",
    "available_copies": 4,
    "total_copies": 7,
    "author": {
      "author_id": "A006",
      "name": "Graeme Simsion",
      "birth_year": 1956,
      "nationality": "Australian"
    }
  },
  {
    "book_id": "B007",
    "title": "The Fault in Our Stars",
    "genre": "Romance",
    "publication_year": 2012,
    "isbn": "9780525478812",
    "available_copies": 6,
    "total_copies": 10,
    "author": {
      "author_id": "A007",
      "name": "John Green",
      "birth_year": 1977,
      "nationality": "American"
    }
  },
  {
    "book_id": "B008",
    "title": "The Wedding Date",
    "genre": "Romance",
    "publication_year": 2018,
    "isbn": "9780062692467",
    "available_copies": 3,
    "total_copies": 6,
    "author": {
      "author_id": "A008",
      "name": "Jasmine Guillory",
      "birth_year": 1977,
      "nationality": "American"
    }
  },
  {
    "book_id": "B009",
    "title": "The Hating Game",
    "genre": "Romance",
    "publication_year": 2016,
    "isbn": "9781472214558",
    "available_copies": 4,
    "total_copies": 7,
    "author": {
      "author_id": "A009",
      "name": "Sally Thorne",
      "birth_year": 1974,
      "nationality": "Australian"
    }
  },
  {
    "book_id": "B010",
    "title": "The Kiss Quotient",
    "genre": "Romance",
    "publication_year": 2018,
    "isbn": "9780451490803",
    "available_copies": 5,
    "total_copies": 8,
    "author": {
      "author_id": "A010",
      "name": "Helen Hoang",
      "birth_year": 1982,
      "nationality": "American"
    }
  },
  {
    "book_id": "B011",
    "title": "It Ends with Us",
    "genre": "Romance",
    "publication_year": 2016,
    "isbn": "9781501110368",
    "available_copies": 0,
    "total_copies": 9,
    "author": {
      "author_id": "A011",
      "name": "Colleen Hoover",
      "birth_year": 1979,
      "nationality": "American"
    }
  },
  {
    "book_id": "B012",
    "title": "Beach Read",
    "genre": "Romance",
    "publication_year": 2020,
    "isbn": "9781984806734",
    "available_copies": 3,
    "total_copies": 6,
    "author": {
      "author_id": "A012",
      "name": "Emily Henry",
      "birth_year": 1991,
      "nationality": "American"
    }
  },
  {
    "book_id": "B013",
    "title": "The Seven Husbands of Evelyn Hugo",
    "genre": "Romance",
    "publication_year": 2017,
    "isbn": "9781501139239",
    "available_copies": 4,
    "total_copies": 7,
    "author": {
      "author_id": "A013",
      "name": "Taylor Jenkins Reid",
      "birth_year": 1983,
      "nationality": "American"
    }
  },
  {
    "book_id": "B014",
    "title": "Red, White & Royal Blue",
    "genre": "Romance",
    "publication_year": 2019,
    "isbn": "9781250316776",
    "available_copies": 3,
    "total_copies": 6,
    "author": {
      "author_id": "A014",
      "name": "Casey McQuiston",
      "birth_year": 1991,
      "nationality": "American"
    }
  },
  {
    "book_id": "B015",
    "title": "The Sun Is Also a Star",
    "genre": "Romance",
    "publication_year": 2016,
    "isbn": "9780553496701",
    "available_copies": 5,
    "total_copies": 8,
    "author": {
      "author_id": "A015",
      "name": "Nicola Yoon",
      "birth_year": 1972,
      "nationality": "Jamaican-American"
    }
  },
  {
    "book_id": "B016",
    "title": "A Court of Thorns and Roses",
    "genre": "Romance",
    "publication_year": 2015,
    "isbn": "9781619634442",
    "available_copies": 4,
    "total_copies": 6,
    "author": {
      "author_id": "A016",
      "name": "Sarah J. Maas",
      "birth_year": 1986,
      "nationality": "American"
    }
  },
  {
    "book_id": "B017",
    "title": "The Bridge to Happiness",
    "genre": "Romance",
    "publication_year": 2019,
    "isbn": "9781504780174",
    "available_copies": 3,
    "total_copies": 6,
    "author": {
      "author_id": "A017",
      "name": "Lindsay Marie Miller",
      "birth_year": 1990,
      "nationality": "American"
    }
  },
  {
    "book_id": "B018",
    "title": "All Your Perfects",
    "genre": "Romance",
    "publication_year": 2018,
    "isbn": "9781501193292",
    "available_copies": 0,
    "total_copies": 5,
    "author": {
      "author_id": "A018",
      "name": "Colleen Hoover",
      "birth_year": 1979,
      "nationality": "American"
    }
  },
  {
    "book_id": "B019",
    "title": "The Flatshare",
    "genre": "Romance",
    "publication_year": 2019,
    "isbn": "9781472261408",
    "available_copies": 4,
    "total_copies": 6,
    "author": {
      "author_id": "A019",
      "name": "Beth O'Leary",
      "birth_year": 1982,
      "nationality": "British"
    }
  },
  {
    "book_id": "B020",
    "title": "The Couple Next Door",
    "genre": "Romance",
    "publication_year": 2016,
    "isbn": "9780778317766",
    "available_copies": 2,
    "total_copies": 5,
    "author": {
      "author_id": "A020",
      "name": "Shari Lapena",
      "birth_year": 1960,
      "nationality": "Canadian"
    }
  },
  {
    "book_id": "B021",
    "title": "Romance Out Loud: A Collection of Short Stories",
    "genre": "Romance",
    "publication_year": 2017,
    "isbn": "9781507205469",
    "available_copies": 0,
    "total_copies": 6,
    "author": [
      {
        "author_id": "A021",
        "name": "Lauren Blakely",
        "birth_year": 1978,
        "nationality": "American"
      },
      {
        "author_id": "A022",
        "name": "Alice Clayton",
        "birth_year": 1975,
        "nationality": "American"
      }
    ]
  },
  {
    "book_id": "B022",
    "title": "Love & Other Wild Things",
    "genre": "Romance",
    "publication_year": 2018,
    "isbn": "9781542042135",
    "available_copies": 0,
    "total_copies": 8,
    "author": [
      {
        "author_id": "A023",
        "name": "Martha Sweeney",
        "birth_year": 1985,
        "nationality": "American"
      },
      {
        "author_id": "A024",
        "name": "Michelle A. Valentine",
        "birth_year": 1979,
        "nationality": "American"
      }
    ]
  },
  {
    "book_id": "B023",
    "title": "Holiday Wishes",
    "genre": "Romance",
    "publication_year": 2017,
    "isbn": "9780451490438",
    "available_copies": 3,
    "total_copies": 6,
    "author": [
      {
        "author_id": "A025",
        "name": "Kait Nolan",
        "birth_year": 1978,
        "nationality": "American"
      },
      {
        "author_id": "A026",
        "name": "Cheryl Harper",
        "birth_year": 1962,
        "nationality": "American"
      }
    ]
  },
  {
    "book_id": "B024",
    "title": "The Bane Chronicles",
    "genre": "Romance",
    "publication_year": 2013,
    "isbn": "9781442497613",
    "available_copies": 4,
    "total_copies": 7,
    "author": [
      {
        "author_id": "A027",
        "name": "Cassandra Clare",
        "birth_year": 1973,
        "nationality": "American"
      },
      {
        "author_id": "A028",
        "name": "Maureen Johnson",
        "birth_year": 1973,
        "nationality": "American"
      },
      {
        "author_id": "A029",
        "name": "Sarah Rees Brennan",
        "birth_year": 1979,
        "nationality": "Irish"
      }
    ]
  },
  {
    "book_id": "B025",
    "title": "Bad Boys of Summer",
    "genre": "Romance",
    "publication_year": 2016,
    "isbn": "9781946751000",
    "available_copies": 2,
    "total_copies": 5,
    "author": [
      {
        "author_id": "A030",
        "name": "M. Malone",
        "birth_year": 1980,
        "nationality": "American"
      },
      {
        "author_id": "A031",
        "name": "Nikki Chase",
        "birth_year": 1986,
        "nationality": "American"
      }
    ]
  },
  {
    "book_id": "B026",
    "title": "Together We Stand",
    "genre": "Romance",
    "publication_year": 2015,
    "isbn": "9781943251478",
    "available_copies": 0,
    "total_copies": 6,
    "author": [
      {
        "author_id": "A032",
        "name": "Cheryl Yeko",
        "birth_year": 1973,
        "nationality": "American"
      },
      {
        "author_id": "A033",
        "name": "Victoria Pinder",
        "birth_year": 1983,
        "nationality": "American"
      }
    ]
  },
  {
    "book_id": "B027",
    "title": "The Wedding Dare",
    "genre": "Romance",
    "publication_year": 2019,
    "isbn": "9780994141253",
    "available_copies": 4,
    "total_copies": 6,
    "author": [
      {
        "author_id": "A034",
        "name": "Anna Stone",
        "birth_year": 1980,
        "nationality": "American"
      },
      {
        "author_id": "A035",
        "name": "Jessica Marlowe",
        "birth_year": 1985,
        "nationality": "American"
      }
    ]
  },
  {
    "book_id": "B028",
    "title": "Love Letters: A Romance Anthology",
    "genre": "Romance",
    "publication_year": 2014,
    "isbn": "9780983706412",
    "available_copies": 5,
    "total_copies": 8,
    "author": [
      {
        "author_id": "A036",
        "name": "Jill Sanders",
        "birth_year": 1980,
        "nationality": "American"
      },
      {
        "author_id": "A037",
        "name": "Kristen Proby",
        "birth_year": 1968,
        "nationality": "American"
      },
      {
        "author_id": "A038",
        "name": "Liliana Hart",
        "birth_year": 1973,
        "nationality": "American"
      }
    ]
  },
  {
    "book_id": "B029",
    "title": "Crossroads: Romance Collection",
    "genre": "Romance",
    "publication_year": 2018,
    "isbn": "9781094317134",
    "available_copies": 6,
    "total_copies": 10,
    "author": [
      {
        "author_id": "A039",
        "name": "Elizabeth Lynx",
        "birth_year": 1990,
        "nationality": "American"
      },
      {
        "author_id": "A040",
        "name": "Brianna Callum",
        "birth_year": 1987,
        "nationality": "American"
      }
    ]
  },
  {
    "book_id": "B030",
    "title": "Falling for the Billionaire",
    "genre": "Romance",
    "publication_year": 2016,
    "isbn": "9780989050291",
    "available_copies": 3,
    "total_copies": 6,
    "author": [
      {
        "author_id": "A041",
        "name": "Kendall Ryan",
        "birth_year": 1983,
        "nationality": "American"
      },
      {
        "author_id": "A042",
        "name": "Lauren Landish",
        "birth_year": 1985,
        "nationality": "American"
      }
    ]
  },
  {
    "book_id": "C001",
    "title": "The Hobbit",
    "genre": "Fantasy",
    "publication_year": 1937,
    "isbn": "9780547928227",
    "available_copies": 3,
    "total_copies": 5,
    "author": {
      "author_id": "A051",
      "name": "J.R.R. Tolkien",
      "birth_year": 1892,
      "death_year": 1973,
      "nationality": "British"
    }
  },
  {
    "book_id": "C002",
    "title": "The Lord of the Rings",
    "genre": "Fantasy",
    "publication_year": 1954,
    "isbn": "9780547991029",
    "available_copies": 2,
    "total_copies": 4,
    "author": {
      "author_id": "A052",
      "name": "J.R.R. Tolkien",
      "birth_year": 1892,
      "death_year": 1973,
      "nationality": "British"
    }
  },
  {
    "book_id": "C003",
    "title": "A Song of Ice and Fire",
    "genre": "Fantasy",
    "publication_year": 1996,
    "isbn": "9780553103540",
    "available_copies": 4,
    "total_copies": 7,
    "author": {
      "author_id": "A053",
      "name": "George R.R. Martin",
      "birth_year": 1948,
      "nationality": "American"
    }
  },
  {
    "book_id": "C004",
    "title": "Harry Potter and the Sorcerer's Stone",
    "genre": "Fantasy",
    "publication_year": 1997,
    "isbn": "9780590353427",
    "available_copies": 5,
    "total_copies": 8,
    "author": {
      "author_id": "A054",
      "name": "J.K. Rowling",
      "birth_year": 1965,
      "nationality": "British"
    }
  },
  {
    "book_id": "C005",
    "title": "The Name of the Wind",
    "genre": "Fantasy",
    "publication_year": 2007,
    "isbn": "9780756404741",
    "available_copies": 3,
    "total_copies": 6,
    "author": {
      "author_id": "A055",
      "name": "Patrick Rothfuss",
      "birth_year": 1973,
      "nationality": "American"
    }
  },
  {
    "book_id": "C006",
    "title": "Mistborn: The Final Empire",
    "genre": "Fantasy",
    "publication_year": 2006,
    "isbn": "9780765350373",
    "available_copies": 4,
    "total_copies": 7,
    "author": {
      "author_id": "A056",
      "name": "Brandon Sanderson",
      "birth_year": 1975,
      "nationality": "American"
    }
  },
  {
    "book_id": "C007",
    "title": "The Wheel of Time: The Eye of the World",
    "genre": "Fantasy",
    "publication_year": 1990,
    "isbn": "9780312851810",
    "available_copies": 3,
    "total_copies": 6,
    "author": {
      "author_id": "A057",
      "name": "Robert Jordan",
      "birth_year": 1948,
      "death_year": 2007,
      "nationality": "American"
    }
  },
  {
    "book_id": "C008",
    "title": "The Lies of Locke Lamora",
    "genre": "Fantasy",
    "publication_year": 2006,
    "isbn": "9780553588941",
    "available_copies": 3,
    "total_copies": 5,
    "author": {
      "author_id": "A058",
      "name": "Scott Lynch",
      "birth_year": 1978,
      "nationality": "American"
    }
  },
  {
    "book_id": "C009",
    "title": "The Blade Itself",
    "genre": "Fantasy",
    "publication_year": 2006,
    "isbn": "9780553815731",
    "available_copies": 4,
    "total_copies": 7,
    "author": {
      "author_id": "A059",
      "name": "Joe Abercrombie",
      "birth_year": 1974,
      "nationality": "British"
    }
  },
  {
    "book_id": "C010",
    "title": "The Black Prism",
    "genre": "Fantasy",
    "publication_year": 2010,
    "isbn": "9780765320325",
    "available_copies": 4,
    "total_copies": 6,
    "author": {
      "author_id": "A060",
      "name": "Brent Weeks",
      "birth_year": 1975,
      "nationality": "American"
    }
  },
  {
    "book_id": "C011",
    "title": "The Fellowship of the Ring: The Lord of the Rings",
    "genre": "Fantasy",
    "publication_year": 1954,
    "isbn": "9780618574940",
    "available_copies": 2,
    "total_copies": 5,
    "author": {
      "author_id": "A062",
      "name": "J.R.R. Tolkien",
      "birth_year": 1892,
      "death_year": 1973,
      "nationality": "British"
    }
  },
  {
    "book_id": "C012",
    "title": "Good Omens",
    "genre": "Fantasy",
    "publication_year": 1990,
    "isbn": "9780060853983",
    "available_copies": 3,
    "total_copies": 5,
    "author": [
      {
        "author_id": "A071",
        "name": "Neil Gaiman",
        "birth_year": 1960,
        "nationality": "British"
      },
      {
        "author_id": "A072",
        "name": "Terry Pratchett",
        "birth_year": 1948,
        "death_year": 2015,
        "nationality": "British"
      }
    ]
  },
  {
    "book_id": "C013",
    "title": "The Priory of the Orange Tree",
    "genre": "Fantasy",
    "publication_year": 2019,
    "isbn": "9781635570298",
    "available_copies": 4,
    "total_copies": 6,
    "author": {
      "author_id": "A073",
      "name": "Samantha Shannon",
      "birth_year": 1991,
      "nationality": "British"
    }
  },
  {
    "book_id": "C014",
    "title": "The Magicians",
    "genre": "Fantasy",
    "publication_year": 2009,
    "isbn": "9781401309436",
    "available_copies": 3,
    "total_copies": 5,
    "author": {
      "author_id": "A074",
      "name": "Lev Grossman",
      "birth_year": 1969,
      "nationality": "American"
    }
  },
  {
    "book_id": "C015",
    "title": "The Broken Earth Trilogy",
    "genre": "Fantasy",
    "publication_year": 2015,
    "isbn": "9780316336652",
    "available_copies": 4,
    "total_copies": 6,
    "author": {
      "author_id": "A075",
      "name": "N.K. Jemisin",
      "birth_year": 1972,
      "nationality": "American"
    }
  },
  {
    "book_id": "C016",
    "title": "The Last Wish",
    "genre": "Fantasy",
    "publication_year": 1993,
    "isbn": "9780312855573",
    "available_copies": 5,
    "total_copies": 8,
    "author": {
      "author_id": "A076",
      "name": "Andrzej Sapkowski",
      "birth_year": 1948,
      "nationality": "Polish"
    }
  },
  {
    "book_id": "C017",
    "title": "City of Bones",
    "genre": "Fantasy",
    "publication_year": 2007,
    "isbn": "9781416914280",
    "available_copies": 4,
    "total_copies": 6,
    "author": {
      "author_id": "A077",
      "name": "Cassandra Clare",
      "birth_year": 1973,
      "nationality": "American"
    }
  },
  {
    "book_id": "C018",
    "title": "Crown of Midnight",
    "genre": "Fantasy",
    "publication_year": 2013,
    "isbn": "9781619630328",
    "available_copies": 5,
    "total_copies": 7,
    "author": {
      "author_id": "A078",
      "name": "Sarah J. Maas",
      "birth_year": 1986,
      "nationality": "American"
    }
  },
  {
    "book_id": "C019",
    "title": "Red Queen",
    "genre": "Fantasy",
    "publication_year": 2015,
    "isbn": "9780062310637",
    "available_copies": 3,
    "total_copies": 6,
    "author": {
      "author_id": "A079",
      "name": "Victoria Aveyard",
      "birth_year": 1990,
      "nationality": "American"
    }
  },
  {
    "book_id": "C020",
    "title": "Shadow of the Wind",
    "genre": "Fantasy",
    "publication_year": 2001,
    "isbn": "9780399156341",
    "available_copies": 3,
    "total_copies": 5,
    "author": {
      "author_id": "A080",
      "name": "Carlos Ruiz Zafón",
      "birth_year": 1964,
      "death_year": 2020,
      "nationality": "Spanish"
    }
  },
  {
    "book_id": "A001",
    "title": "To Kill a Mockingbird",
    "genre": "Fiction",
    "publication_year": 1960,
    "isbn": "9780061120084",
    "available_copies": 4,
    "total_copies": 6,
    "author": {
      "author_id": "A083",
      "name": "Harper Lee",
      "birth_year": 1926,
      "death_year": 2016,
      "nationality": "American"
    }
  },
  {
    "book_id": "A002",
    "title": "1984",
    "genre": "Fiction",
    "publication_year": 1949,
    "isbn": "9780451524935",
    "available_copies": 5,
    "total_copies": 8,
    "author": {
      "author_id": "A084",
      "name": "George Orwell",
      "birth_year": 1903,
      "death_year": 1950,
      "nationality": "British"
    }
  },
  {
    "book_id": "A003",
    "title": "The Great Gatsby",
    "genre": "Fiction",
    "publication_year": 1925,
    "isbn": "9780743273565",
    "available_copies": 3,
    "total_copies": 6,
    "author": {
      "author_id": "A085",
      "name": "F. Scott Fitzgerald",
      "birth_year": 1896,
      "death_year": 1940,
      "nationality": "American"
    }
  },
  {
    "book_id": "A004",
    "title": "Pride and Prejudice",
    "genre": "Fiction",
    "publication_year": 1813,
    "isbn": "9780141441330",
    "available_copies": 0,
    "total_copies": 5,
    "author": {
      "author_id": "A086",
      "name": "Jane Austen",
      "birth_year": 1775,
      "death_year": 1817,
      "nationality": "British"
    }
  },
  {
    "book_id": "A005",
    "title": "Moby-Dick",
    "genre": "Fiction",
    "publication_year": 1851,
    "isbn": "9781503280786",
    "available_copies": 4,
    "total_copies": 6,
    "author": {
      "author_id": "A087",
      "name": "Herman Melville",
      "birth_year": 1819,
      "death_year": 1891,
      "nationality": "American"
    }
  },
  {
    "book_id": "A006",
    "title": "The Catcher in the Rye",
    "genre": "Fiction",
    "publication_year": 1951,
    "isbn": "9780316769488",
    "available_copies": 3,
    "total_copies": 6,
    "author": {
      "author_id": "A088",
      "name": "J.D. Salinger",
      "birth_year": 1919,
      "death_year": 2010,
      "nationality": "American"
    }
  },
  {
    "book_id": "A007",
    "title": "The Road",
    "genre": "Fiction",
    "publication_year": 2006,
    "isbn": "9780307387899",
    "available_copies": 2,
    "total_copies": 5,
    "author": {
      "author_id": "A089",
      "name": "Cormac McCarthy",
      "birth_year": 1933,
      "nationality": "American"
    }
  },
  {
    "book_id": "A008",
    "title": "Beloved",
    "genre": "Fiction",
    "publication_year": 1987,
    "isbn": "9781400033416",
    "available_copies": 4,
    "total_copies": 7,
    "author": {
      "author_id": "A090",
      "name": "Toni Morrison",
      "birth_year": 1931,
      "death_year": 2019,
      "nationality": "American"
    }
  },
  {
    "book_id": "A009",
    "title": "War and Peace",
    "genre": "Fiction",
    "publication_year": 1869,
    "isbn": "9781400079988",
    "available_copies": 3,
    "total_copies": 6,
    "author": {
      "author_id": "A091",
      "name": "Leo Tolstoy",
      "birth_year": 1828,
      "death_year": 1910,
      "nationality": "Russian"
    }
  },
  {
    "book_id": "A010",
    "title": "Crime and Punishment",
    "genre": "Fiction",
    "publication_year": 1866,
    "isbn": "9780486454115",
    "available_copies": 0,
    "total_copies": 8,
    "author": {
      "author_id": "A092",
      "name": "Fyodor Dostoevsky",
      "birth_year": 1821,
      "death_year": 1881,
      "nationality": "Russian"
    }
  },
  {
    "book_id": "A011",
    "title": "The Help",
    "genre": "Fiction",
    "publication_year": 2009,
    "isbn": "9780399587160",
    "available_copies": 3,
    "total_copies": 6,
    "author": {
      "author_id": "A093",
      "name": "Kathryn Stockett",
      "birth_year": 1969,
      "nationality": "American"
    }
  },
  {
    "book_id": "A012",
    "title": "The Book Thief",
    "genre": "Fiction",
    "publication_year": 2005,
    "isbn": "9780375842207",
    "available_copies": 4,
    "total_copies": 6,
    "author": {
      "author_id": "A094",
      "name": "Markus Zusak",
      "birth_year": 1975,
      "nationality": "Australian"
    }
  },
  {
    "book_id": "A013",
    "title": "A Tale of Two Cities",
    "genre": "Fiction",
    "publication_year": 1859,
    "isbn": "9781853260391",
    "available_copies": 5,
    "total_copies": 7,
    "author": {
      "author_id": "A095",
      "name": "Charles Dickens",
      "birth_year": 1812,
      "death_year": 1870,
      "nationality": "British"
    }
  },
  {
    "book_id": "A014",
    "title": "The Night Circus",
    "genre": "Fiction",
    "publication_year": 2011,
    "isbn": "9780307744432",
    "available_copies": 3,
    "total_copies": 6,
    "author": {
      "author_id": "A096",
      "name": "Erin Morgenstern",
      "birth_year": 1978,
      "nationality": "American"
    }
  },
  {
    "book_id": "A015",
    "title": "The Light Between Oceans",
    "genre": "Fiction",
    "publication_year": 2012,
    "isbn": "9781250028651",
    "available_copies": 3,
    "total_copies": 6,
    "author": {
      "author_id": "A097",
      "name": "M.L. Stedman",
      "birth_year": 1962,
      "nationality": "Australian"
    }
  },
  {
    "book_id": "A016",
    "title": "Good Omens",
    "genre": "Fiction",
    "publication_year": 1990,
    "isbn": "9780060853983",
    "available_copies": 4,
    "total_copies": 7,
    "author": [
      {
        "author_id": "A098",
        "name": "Neil Gaiman",
        "birth_year": 1960,
        "nationality": "British"
      },
      {
        "author_id": "A099",
        "name": "Terry Pratchett",
        "birth_year": 1948,
        "death_year": 2015,
        "nationality": "British"
      }
    ]
  },
  {
    "book_id": "A017",
    "title": "The Girl on the Train",
    "genre": "Fiction",
    "publication_year": 2015,
    "isbn": "9781594633669",
    "available_copies": 3,
    "total_copies": 5,
    "author": {
      "author_id": "A120",
      "name": "Paula Hawkins",
      "birth_year": 1972,
      "nationality": "British"
    }
  },
  {
    "book_id": "A018",
    "title": "The Nightingale",
    "genre": "Fiction",
    "publication_year": 2015,
    "isbn": "9780312577227",
    "available_copies": 5,
    "total_copies": 8,
    "author": {
      "author_id": "A121",
      "name": "Kristin Hannah",
      "birth_year": 1960,
      "nationality": "American"
    }
  },
  {
    "book_id": "A019",
    "title": "The Silent Patient",
    "genre": "Fiction",
    "publication_year": 2019,
    "isbn": "9781250301697",
    "available_copies": 4,
    "total_copies": 6,
    "author": {
      "author_id": "A122",
      "name": "Alex Michaelides",
      "birth_year": 1968,
      "nationality": "Cypriot"
    }
  },
  {
    "book_id": "A020",
    "title": "The Seven Husbands of Evelyn Hugo",
    "genre": "Fiction",
    "publication_year": 2017,
    "isbn": "9781501161933",
    "available_copies": 3,
    "total_copies": 5,
    "author": {
      "author_id": "A123",
      "name": "Taylor Jenkins Reid",
      "birth_year": 1983,
      "nationality": "American"
    }
  },
  {
    "book_id": "F001",
    "title": "Dune",
    "genre": "Science Fiction",
    "publication_year": 1965,
    "isbn": "9780441013593",
    "available_copies": 3,
    "total_copies": 5,
    "author": {
      "author_id": "A201",
      "name": "Frank Herbert",
      "birth_year": 1920,
      "death_year": 1986,
      "nationality": "American"
    }
  },
  {
    "book_id": "F002",
    "title": "Neuromancer",
    "genre": "Science Fiction",
    "publication_year": 1984,
    "isbn": "9780441569595",
    "available_copies": 2,
    "total_copies": 4,
    "author": {
      "author_id": "A202",
      "name": "William Gibson",
      "birth_year": 1948,
      "nationality": "American-Canadian"
    }
  },
  {
    "book_id": "F003",
    "title": "Foundation",
    "genre": "Science Fiction",
    "publication_year": 1951,
    "isbn": "9780553293357",
    "available_copies": 0,
    "total_copies": 6,
    "author": {
      "author_id": "A203",
      "name": "Isaac Asimov",
      "birth_year": 1920,
      "death_year": 1992,
      "nationality": "American"
    }
  },
  {
    "book_id": "F004",
    "title": "The Hitchhiker's Guide to the Galaxy",
    "genre": "Science Fiction",
    "publication_year": 1979,
    "isbn": "9780345391803",
    "available_copies": 1,
    "total_copies": 2,
    "author": {
      "author_id": "A204",
      "name": "Douglas Adams",
      "birth_year": 1952,
      "death_year": 2001,
      "nationality": "British"
    }
  },
  {
    "book_id": "F005",
    "title": "The Left Hand of Darkness",
    "genre": "Science Fiction",
    "publication_year": 1969,
    "isbn": "9780441478125",
    "available_copies": 3,
    "total_copies": 6,
    "author": {
      "author_id": "A205",
      "name": "Ursula K. Le Guin",
      "birth_year": 1929,
      "death_year": 2018,
      "nationality": "American"
    }
  },
  {
    "book_id": "F006",
    "title": "Snow Crash",
    "genre": "Science Fiction",
    "publication_year": 1992,
    "isbn": "9780553380958",
    "available_copies": 3,
    "total_copies": 5,
    "author": {
      "author_id": "A206",
      "name": "Neal Stephenson",
      "birth_year": 1959,
      "nationality": "American"
    }
  },
  {
    "book_id": "F007",
    "title": "Hyperion",
    "genre": "Science Fiction",
    "publication_year": 1989,
    "isbn": "9780553283686",
    "available_copies": 4,
    "total_copies": 6,
    "author": {
      "author_id": "A207",
      "name": "Dan Simmons",
      "birth_year": 1948,
      "nationality": "American"
    }
  },
  {
    "book_id": "F008",
    "title": "Altered Carbon",
    "genre": "Science Fiction",
    "publication_year": 2002,
    "isbn": "9780575087740",
    "available_copies": 3,
    "total_copies": 5,
    "author": {
      "author_id": "A208",
      "name": "Richard K. Morgan",
      "birth_year": 1965,
      "nationality": "British"
    }
  },
  {
    "book_id": "F009",
    "title": "The Forever War",
    "genre": "Science Fiction",
    "publication_year": 1974,
    "isbn": "9780312536637",
    "available_copies": 2,
    "total_copies": 4,
    "author": {
      "author_id": "A209",
      "name": "Joe Haldeman",
      "birth_year": 1943,
      "nationality": "American"
    }
  },
  {
    "book_id": "F010",
    "title": "The Stars My Destination",
    "genre": "Science Fiction",
    "publication_year": 1956,
    "isbn": "9780385037682",
    "available_copies": 3,
    "total_copies": 6,
    "author": {
      "author_id": "A210",
      "name": "Alfred Bester",
      "birth_year": 1913,
      "death_year": 1987,
      "nationality": "American"
    }
  },
  {
    "book_id": "F011",
    "title": "Good Omens",
    "genre": "Science Fiction",
    "publication_year": 1990,
    "isbn": "9780060853983",
    "available_copies": 4,
    "total_copies": 7,
    "author": [
      {
        "author_id": "A211",
        "name": "Neil Gaiman",
        "birth_year": 1960,
        "nationality": "British"
      },
      {
        "author_id": "A212",
        "name": "Terry Pratchett",
        "birth_year": 1948,
        "death_year": 2015,
        "nationality": "British"
      }
    ]
  },
  {
    "book_id": "F012",
    "title": "The Expanse: Leviathan Wakes",
    "genre": "Science Fiction",
    "publication_year": 2011,
    "isbn": "9780316334754",
    "available_copies": 3,
    "total_copies": 6,
    "author": [
      {
        "author_id": "A213",
        "name": "James S.A. Corey",
        "birth_year": 1966,
        "nationality": "American"
      },
      {
        "author_id": "A214",
        "name": "Daniel Abraham",
        "birth_year": 1969,
        "nationality": "American"
      }
    ]
  },
  {
    "book_id": "F013",
    "title": "The Moon Is a Harsh Mistress",
    "genre": "Science Fiction",
    "publication_year": 1966,
    "isbn": "9780449912553",
    "available_copies": 0,
    "total_copies": 5,
    "author": {
      "author_id": "A215",
      "name": "Robert A. Heinlein",
      "birth_year": 1907,
      "death_year": 1988,
      "nationality": "American"
    }
  },
  {
    "book_id": "F014",
    "title": "The Man in the High Castle",
    "genre": "Science Fiction",
    "publication_year": 1962,
    "isbn": "9780547572482",
    "available_copies": 2,
    "total_copies": 4,
    "author": {
      "author_id": "A216",
      "name": "Philip K. Dick",
      "birth_year": 1928,
      "death_year": 1982,
      "nationality": "American"
    }
  },
  {
    "book_id": "F015",
    "title": "Brave New World",
    "genre": "Science Fiction",
    "publication_year": 1932,
    "isbn": "9780060850524",
    "available_copies": 4,
    "total_copies": 6,
    "author": {
      "author_id": "A217",
      "name": "Aldous Huxley",
      "birth_year": 1894,
      "death_year": 1963,
      "nationality": "British"
    }
  },
  {
    "book_id": "F016",
    "title": "I, Robot",
    "genre": "Science Fiction",
    "publication_year": 1950,
    "isbn": "9780553382563",
    "available_copies": 3,
    "total_copies": 5,
    "author": {
      "author_id": "A218",
      "name": "Isaac Asimov",
      "birth_year": 1920,
      "death_year": 1992,
      "nationality": "American"
    }
  },
  {
    "book_id": "F017",
    "title": "The Time Machine",
    "genre": "Science Fiction",
    "publication_year": 1895,
    "isbn": "9780451530763",
    "available_copies": 3,
    "total_copies": 5,
    "author": {
      "author_id": "A219",
      "name": "H.G. Wells",
      "birth_year": 1866,
      "death_year": 1946,
      "nationality": "British"
    }
  },
  {
    "book_id": "F018",
    "title": "The Dark Tower: The Gunslinger",
    "genre": "Science Fiction",
    "publication_year": 1982,
    "isbn": "9780451166204",
    "available_copies": 2,
    "total_copies": 4,
    "author": {
      "author_id": "A220",
      "name": "Stephen King",
      "birth_year": 1947,
      "nationality": "American"
    }
  },
  {
    "book_id": "F019",
    "title": "Rendezvous with Rama",
    "genre": "Science Fiction",
    "publication_year": 1973,
    "isbn": "9780385093055",
    "available_copies": 3,
    "total_copies": 5,
    "author": {
      "author_id": "A221",
      "name": "Arthur C. Clarke",
      "birth_year": 1917,
      "death_year": 2008,
      "nationality": "British"
    }
  },
  {
    "book_id": "F020",
    "title": "The Windup Girl",
    "genre": "Science Fiction",
    "publication_year": 2009,
    "isbn": "9781597801583",
    "available_copies": 3,
    "total_copies": 6,
    "author": {
      "author_id": "A222",
      "name": "Paolo Bacigalupi",
      "birth_year": 1972,
      "nationality": "American"
    }
  },
  {
    "book_id": "D011",
    "title": "The Iliad",
    "genre": "Epic Poetry",
    "publication_year": -750,
    "isbn": "9780140275360",
    "available_copies": 3,
    "total_copies": 5,
    "author": {
      "author_id": "A301",
      "name": "Homer",
      "birth_year": -800,
      "death_year": -750,
      "nationality": "Greek"
    }
  },
  {
    "book_id": "D012",
    "title": "The Odyssey",
    "genre": "Epic Poetry",
    "publication_year": -800,
    "isbn": "9780140268867",
    "available_copies": 2,
    "total_copies": 4,
    "author": {
      "author_id": "A309",
      "name": "Homer",
      "birth_year": -800,
      "death_year": -750,
      "nationality": "Greek"
    }
  },
  {
    "book_id": "D013",
    "title": "Aeneid",
    "genre": "Epic Poetry",
    "publication_year": -29,
    "isbn": "9780140449328",
    "available_copies": 3,
    "total_copies": 5,
    "author": {
      "author_id": "A302",
      "name": "Virgil",
      "birth_year": -70,
      "death_year": -19,
      "nationality": "Roman"
    }
  },
  {
    "book_id": "D014",
    "title": "Beowulf",
    "genre": "Epic Poetry",
    "publication_year": 1000,
    "isbn": "9780393320978",
    "available_copies": 2,
    "total_copies": 4,
    "author": {
      "author_id": "A303",
      "name": "Anonymous",
      "birth_year": 0,
      "death_year": 0,
      "nationality": "Anglo-Saxon"
    }
  },
  {
    "book_id": "D015",
    "title": "The Divine Comedy",
    "genre": "Epic Poetry",
    "publication_year": 1320,
    "isbn": "9780451208637",
    "available_copies": 3,
    "total_copies": 6,
    "author": {
      "author_id": "A304",
      "name": "Dante Alighieri",
      "birth_year": 1265,
      "death_year": 1321,
      "nationality": "Italian"
    }
  },
  {
    "book_id": "D016",
    "title": "The Ramayana",
    "genre": "Epic Poetry",
    "publication_year": -500,
    "isbn": "9780143451854",
    "available_copies": 3,
    "total_copies": 5,
    "author": {
      "author_id": "A305",
      "name": "Valmiki",
      "birth_year": -400,
      "death_year": -200,
      "nationality": "Indian"
    }
  },
  {
    "book_id": "D017",
    "title": "The Mahabharata",
    "genre": "Epic Poetry",
    "publication_year": -400,
    "isbn": "9780140449199",
    "available_copies": 3,
    "total_copies": 5,
    "author": {
      "author_id": "A306",
      "name": "Vyasa",
      "birth_year": -500,
      "death_year": 0,
      "nationality": "Indian"
    }
  },
  {
    "book_id": "D018",
    "title": "The Epic of Gilgamesh",
    "genre": "Epic Poetry",
    "publication_year": -2100,
    "isbn": "9780140449198",
    "available_copies": 2,
    "total_copies": 4,
    "author": {
      "author_id": "A307",
      "name": "Anonymous",
      "birth_year": 0,
      "death_year": 0,
      "nationality": "Sumerian"
    }
  },
  {
    "book_id": "D019",
    "title": "The Song of Roland",
    "genre": "Epic Poetry",
    "publication_year": 1100,
    "isbn": "9780140445367",
    "available_copies": 3,
    "total_copies": 5,
    "author": {
      "author_id": "A308",
      "name": "Anonymous",
      "birth_year": 0,
      "death_year": 0,
      "nationality": "French"
    }
  },
  {
    "book_id": "D020",
    "title": "The Nibelungenlied",
    "genre": "Epic Poetry",
    "publication_year": 1200,
    "isbn": "9780226585085",
    "available_copies": 2,
    "total_copies": 4,
    "author": {
      "author_id": "A310",
      "name": "Anonymous",
      "birth_year": 0,
      "death_year": 0,
      "nationality": "German"
    }
  },
  {
    "book_id": "T001",
    "title": "The Girl with the Dragon Tattoo",
    "genre": "Thriller",
    "publication_year": 2005,
    "isbn": "9780307454546",
    "available_copies": 3,
    "total_copies": 5,
    "author": {
      "author_id": "A401",
      "name": "Stieg Larsson",
      "birth_year": 1954,
      "death_year": 2004,
      "nationality": "Swedish"
    }
  },
  {
    "book_id": "T002",
    "title": "Gone Girl",
    "genre": "Thriller",
    "publication_year": 2012,
    "isbn": "9780307588364",
    "available_copies": 4,
    "total_copies": 6,
    "author": {
      "author_id": "A402",
      "name": "Gillian Flynn",
      "birth_year": 1971,
      "nationality": "American"
    }
  },
  {
    "book_id": "T003",
    "title": "The Girl on the Train",
    "genre": "Thriller",
    "publication_year": 2015,
    "isbn": "9781594633669",
    "available_copies": 3,
    "total_copies": 5,
    "author": {
      "author_id": "A403",
      "name": "Paula Hawkins",
      "birth_year": 1972,
      "nationality": "British"
    }
  },
  {
    "book_id": "T004",
    "title": "Big Little Lies",
    "genre": "Thriller",
    "publication_year": 2014,
    "isbn": "9780399167065",
    "available_copies": 3,
    "total_copies": 5,
    "author": {
      "author_id": "A404",
      "name": "Liane Moriarty",
      "birth_year": 1966,
      "nationality": "Australian"
    }
  },
  {
    "book_id": "T005",
    "title": "Sharp Objects",
    "genre": "Thriller",
    "publication_year": 2006,
    "isbn": "9780307341569",
    "available_copies": 0,
    "total_copies": 4,
    "author": {
      "author_id": "A405",
      "name": "Gillian Flynn",
      "birth_year": 1971,
      "nationality": "American"
    }
  },
  {
    "book_id": "T006",
    "title": "The Silent Patient",
    "genre": "Thriller",
    "publication_year": 2019,
    "isbn": "9781529108911",
    "available_copies": 1,
    "total_copies": 2,
    "author": {
      "author_id": "A410",
      "name": "Alex Michaelides",
      "birth_year": 1977,
      "death_year": null,
      "nationality": "British"
    }
  },
  {
    "book_id": "T007",
    "title": "The Woman in the Window",
    "genre": "Thriller",
    "publication_year": 2018,
    "isbn": "9780062678416",
    "available_copies": 4,
    "total_copies": 6,
    "author": {
      "author_id": "A406",
      "name": "A.J. Finn",
      "birth_year": 1978,
      "nationality": "American"
    }
  },
  {
    "book_id": "T008",
    "title": "The Couple Next Door",
    "genre": "Thriller",
    "publication_year": 2016,
    "isbn": "9781101974506",
    "available_copies": 3,
    "total_copies": 5,
    "author": {
      "author_id": "A407",
      "name": "Shari Lapena",
      "birth_year": 1960,
      "nationality": "Canadian"
    }
  },
  {
    "book_id": "T009",
    "title": "The Outsider",
    "genre": "Thriller",
    "publication_year": 2018,
    "isbn": "9781501180989",
    "available_copies": 2,
    "total_copies": 4,
    "author": {
      "author_id": "A408",
      "name": "Stephen King",
      "birth_year": 1947,
      "nationality": "American"
    }
  },
  {
    "book_id": "T010",
    "title": "The Last Thing He Told Me",
    "genre": "Thriller",
    "publication_year": 2021,
    "isbn": "9781501171345",
    "available_copies": 3,
    "total_copies": 5,
    "author": {
      "author_id": "A409",
      "name": "Laura Dave",
      "birth_year": 1977,
      "nationality": "American"
    }
  },
  {
    "book_id": "T011",
    "title": "The Night Manager",
    "genre": "Thriller",
    "publication_year": 1993,
    "isbn": "9780394565613",
    "available_copies": 2,
    "total_copies": 4,
    "author": {
      "author_id": "A411",
      "name": "John le Carré",
      "birth_year": 1931,
      "death_year": 2020,
      "nationality": "British"
    }
  },
  {
    "book_id": "T012",
    "title": "The Girl in the Ice",
    "genre": "Thriller",
    "publication_year": 2014,
    "isbn": "9781784290765",
    "available_copies": 2,
    "total_copies": 4,
    "author": {
      "author_id": "A412",
      "name": "Luca Veste",
      "birth_year": 1983,
      "nationality": "British"
    }
  },
  {
    "book_id": "T013",
    "title": "The Wife Between Us",
    "genre": "Thriller",
    "publication_year": 2018,
    "isbn": "9781250130921",
    "available_copies": 3,
    "total_copies": 5,
    "author": [
      {
        "author_id": "A413",
        "name": "Greer Hendricks",
        "birth_year": 1971,
        "nationality": "American"
      },
      {
        "author_id": "A414",
        "name": "Sarah Pekkanen",
        "birth_year": 1969,
        "nationality": "American"
      }
    ]
  },
  {
    "book_id": "T014",
    "title": "The Final Girls",
    "genre": "Thriller",
    "publication_year": 2016,
    "isbn": "9781501131737",
    "available_copies": 3,
    "total_copies": 5,
    "author": {
      "author_id": "A415",
      "name": "Riley Sager",
      "birth_year": 1976,
      "nationality": "American"
    }
  },
  {
    "book_id": "T015",
    "title": "An Anonymous Girl",
    "genre": "Thriller",
    "publication_year": 2019,
    "isbn": "9781250133731",
    "available_copies": 3,
    "total_copies": 5,
    "author": [
      {
        "author_id": "A416",
        "name": "Greer Hendricks",
        "birth_year": 1971,
        "nationality": "American"
      },
      {
        "author_id": "A417",
        "name": "Sarah Pekkanen",
        "birth_year": 1969,
        "nationality": "American"
      }
    ]
  },
  {
    "book_id": "H001",
    "title": "The Book Thief",
    "genre": "Historical Fiction",
    "publication_year": 2005,
    "isbn": "9780375842207",
    "available_copies": 4,
    "total_copies": 6,
    "author": {
      "author_id": "A501",
      "name": "Markus Zusak",
      "birth_year": 1975,
      "nationality": "Australian"
    }
  },
  {
    "book_id": "H002",
    "title": "The Nightingale",
    "genre": "Historical Fiction",
    "publication_year": 2015,
    "isbn": "9780393976503",
    "available_copies": 3,
    "total_copies": 5,
    "author": {
      "author_id": "A502",
      "name": "Kristin Hannah",
      "birth_year": 1960,
      "nationality": "American"
    }
  },
  {
    "book_id": "H003",
    "title": "All the Light We Cannot See",
    "genre": "Historical Fiction",
    "publication_year": 2014,
    "isbn": "9781501173210",
    "available_copies": 3,
    "total_copies": 5,
    "author": {
      "author_id": "A503",
      "name": "Anthony Doerr",
      "birth_year": 1973,
      "nationality": "American"
    }
  },
  {
    "book_id": "H004",
    "title": "Atonement",
    "genre": "Historical Fiction",
    "publication_year": 2001,
    "isbn": "9780385721790",
    "available_copies": 3,
    "total_copies": 5,
    "author": {
      "author_id": "A504",
      "name": "Ian McEwan",
      "birth_year": 1948,
      "nationality": "British"
    }
  },
  {
    "book_id": "H005",
    "title": "The Pillars of the Earth",
    "genre": "Historical Fiction",
    "publication_year": 1989,
    "isbn": "9780451166891",
    "available_copies": 4,
    "total_copies": 6,
    "author": {
      "author_id": "A505",
      "name": "Ken Follett",
      "birth_year": 1949,
      "nationality": "British"
    }
  },
  {
    "book_id": "H006",
    "title": "The Help",
    "genre": "Historical Fiction",
    "publication_year": 2009,
    "isbn": "9780399155345",
    "available_copies": 4,
    "total_copies": 6,
    "author": {
      "author_id": "A506",
      "name": "Kathryn Stockett",
      "birth_year": 1969,
      "nationality": "American"
    }
  },
  {
    "book_id": "H007",
    "title": "War and Peace",
    "genre": "Historical Fiction",
    "publication_year": 1869,
    "isbn": "9780199232765",
    "available_copies": 3,
    "total_copies": 5,
    "author": {
      "author_id": "A507",
      "name": "Leo Tolstoy",
      "birth_year": 1828,
      "death_year": 1910,
      "nationality": "Russian"
    }
  },
  {
    "book_id": "H008",
    "title": "The Tattooist of Auschwitz",
    "genre": "Historical Fiction",
    "publication_year": 2018,
    "isbn": "9780062797153",
    "available_copies": 3,
    "total_copies": 5,
    "author": {
      "author_id": "A508",
      "name": "Heather Morris",
      "birth_year": 1966,
      "nationality": "Australian"
    }
  },
  {
    "book_id": "H009",
    "title": "The Alice Network",
    "genre": "Historical Fiction",
    "publication_year": 2017,
    "isbn": "9781492630188",
    "available_copies": 3,
    "total_copies": 5,
    "author": {
      "author_id": "A509",
      "name": "Kate Quinn",
      "birth_year": 1972,
      "nationality": "American"
    }
  },
  {
    "book_id": "H010",
    "title": "The Night Watch",
    "genre": "Historical Fiction",
    "publication_year": 2006,
    "isbn": "9780452295291",
    "available_copies": 2,
    "total_copies": 4,
    "author": {
      "author_id": "A510",
      "name": "Sarah Waters",
      "birth_year": 1966,
      "nationality": "British"
    }
  },
  {
    "book_id": "H011",
    "title": "The Guernsey Literary and Potato Peel Pie Society",
    "genre": "Historical Fiction",
    "publication_year": 2008,
    "isbn": "9780385340996",
    "available_copies": 3,
    "total_copies": 5,
    "author": [
      {
        "author_id": "A511",
        "name": "Mary Ann Shaffer",
        "birth_year": 1934,
        "death_year": 2008,
        "nationality": "American"
      },
      {
        "author_id": "A512",
        "name": "Annie Barrows",
        "birth_year": 1962,
        "nationality": "American"
      }
    ]
  },
  {
    "book_id": "H012",
    "title": "The Other Boleyn Girl",
    "genre": "Historical Fiction",
    "publication_year": 2001,
    "isbn": "9781416524811",
    "available_copies": 3,
    "total_copies": 5,
    "author": {
      "author_id": "A513",
      "name": "Philippa Gregory",
      "birth_year": 1954,
      "nationality": "British"
    }
  },
  {
    "book_id": "H013",
    "title": "The Last Tudor",
    "genre": "Historical Fiction",
    "publication_year": 2017,
    "isbn": "9781476758786",
    "available_copies": 2,
    "total_copies": 4,
    "author": {
      "author_id": "A514",
      "name": "Philippa Gregory",
      "birth_year": 1954,
      "nationality": "British"
    }
  },
  {
    "book_id": "H014",
    "title": "The Red Tent",
    "genre": "Historical Fiction",
    "publication_year": 1997,
    "isbn": "9780312195513",
    "available_copies": 0,
    "total_copies": 5,
    "author": {
      "author_id": "A515",
      "name": "Anita Diamant",
      "birth_year": 1951,
      "nationality": "American"
    }
  },
  {
    "book_id": "H015",
    "title": "The Paris Wife",
    "genre": "Historical Fiction",
    "publication_year": 2011,
    "isbn": "9781401302672",
    "available_copies": 3,
    "total_copies": 5,
    "author": {
      "author_id": "A516",
      "name": "Paula McLain",
      "birth_year": 1965,
      "nationality": "American"
    }
  }
]
