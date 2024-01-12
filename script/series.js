document.addEventListener("alpine:init", () => {
  Alpine.data("series", () => ({
    items: [
      {
        id: 25,
        title: "Breaking Bad",
        img: "img/tv/breaking-bad.svg",
        genre: ["Crime", "Drama", "Thriller"],
        filter: "Crime Drama Thriller",
        imdbScore: 9.2,
        type: "Series",
        ageRating: "TV-MA",
        country: "USA",
        creator: "Vince Gilligan",
        cast: ["Bryan Cranston", "Aaron Paul", "Anna Gunn"],
        streamingServices: ["Netflix", "Amazon Prime Video"],
      },
      {
        id: 26,
        title: "Better Call Saul",
        img: "img/tv/bcs.svg",
        genre: ["Crime", "Drama", "Legal"],
        filter: "Crime Drama Legal",
        imdbScore: 8.8,
        type: "Series",
        ageRating: "TV-MA",
        country: "USA",
        creator: "Vince Gilligan, Peter Gould",
        cast: "Bob Odenkirk, Jonathan Banks, Rhea Seehorn",
        streamingServices: ["Netflix", "Amazon Prime Video"],
      },
      {
        id: 27,
        title: "Dark",
        img: "img/tv/dark.svg",
        genre: ["Sci-Fi", "Thriller", "Mystery"],
        filter: "Sci-Fi Thriller Mystery",
        imdbScore: 8.8,
        type: "Series",
        ageRating: "TV-MA",
        country: "Germany",
        creator: " Baran bo Odar, Jantje Friese",
        cast: "Louis Hofmann, Oliver Masucci, Jördis Triebel",
        streamingServices: "Netflix",
      },
      {
        id: 28,
        title: "Friends",
        img: "img/tv/friends.svg",
        genre: ["Comedy", "Romance", "Slice of Life"],
        filter: "Comedy Romance Slice of Life",
        imdbScore: 8.7,
        type: "Series",
        ageRating: "TV-14",
        country: "USA",
        creator: "David Crane, Marta Kauffman",
        cast: "Jennifer Aniston, Courteney Cox, Lisa Kudrow, Matt LeBlanc, Matthew Perry, David Schwimmer",
        streamingServices: "HBO Max",
      },
      {
        id: 29,
        title: "Game of Thrones",
        img: "img/tv/got.svg",
        genre: ["Fantasy", "Drama", "Adventure"],
        filter: "Fantasy Drama Adventure",
        imdbScore: 9.3,
        type: "Series",
        ageRating: "TV-MA",
        country: "USA",
        creator: "David Benioff, D. B. Weiss",
        cast: "Peter Dinklage, Emilia Clarke, Kit Harington, Lena Headey, Maisie Williams, Sean Bean",
        streamingServices: "HBO Max",
      },
      {
        id: 30,
        title: "Mr. Robot",
        img: "img/tv/robot.svg",
        genre: ["Drama", "Thriller", "Cyberpunk"],
        filter: "Drama Thriller Cyberpunk",
        imdbScore: 8.5,
        type: "Series",
        ageRating: "TV-MA",
        country: "USA",
        creator: "Sam Esmail",
        cast: "Rami Malek, Christian Slater, Carly Chaikin",
        streamingServices: "Amazon Prime Video",
      },
      {
        id: 31,
        title: "Wednesday",
        img: "img/tv/wednesday.svg",
        genre: ["Comedy", "Mystery", "Supernatural"],
        filter: "Comedy Mystery Supernatural",
        imdbScore: 6.9,
        type: "Series",
        ageRating: "TV-14",
        country: "USA",
        creator: "Alfred Gough, Miles Millar",
        cast: "Jenna Ortega, Luis Guzmán, Gwendoline Christie",
        streamingServices: "Netflix",
      },
      {
        id: 32,
        title: "The Witcher",
        img: "img/tv/witcher.svg",
        genre: ["Action", "Adventure", "Fantasy"],
        filter: "Action Adventure Fantasy",
        imdbScore: 8.2,
        type: "Series",
        ageRating: "TV-MA",
        country: "Poland, USA",
        creator: "Lauren Schmidt Hissrich",
        cast: "Henry Cavill, Anya Taylor-Joy, Freya Allan",
        streamingServices: "Netflix",
      },
      {
        id: 33,
        title: "How I Met Your Mother",
        img: "img/tv/himym.svg",
        genre: ["Comedy", "Romance", "Slice of Life"],
        filter: "Comedy Romance Slice of Life",
        imdbScore: 8.6,
        type: "Series",
        ageRating: "TV-14",
        country: "USA",
        creator: "Craig Thomas, Carter Bays",
        cast: "Josh Radnor, Jason Segel, Cobie Smulders, Neil Patrick Harris, Alyson Hannigan",
        streamingServices: "Netflix, Hulu, Amazon Prime Video",
      },
      {
        id: 34,
        title: "Narcos",
        img: "img/tv/narcos.svg",
        genre: ["Crime", "Drama", "Biography"],
        filter: "Crime Drama Biography",
        imdbScore: 8.8,
        type: "Series",
        ageRating: "TV-MA",
        country: "USA",
        creator: "Chris Brancato, Carlo Bernard, Doug Miro",
        cast: "Wagner Moura, Boyd Holbrook, Pedro Pascal",
        streamingServices: "Netflix",
      },
    ],
    redirectToDetails(movie) {
      const genreParam = movie.genre
        .map((g) => encodeURIComponent(g))
        .join("&genre=");
      window.location.href = `movie.html?title=${encodeURIComponent(
        movie.title
      )}&genre=${genreParam}&img=${encodeURIComponent(
        movie.img
      )}&imdbScore=${encodeURIComponent(
        movie.imdbScore
      )}&type=${encodeURIComponent(movie.type)}&ageRating=${encodeURIComponent(
        movie.ageRating
      )}&country=${encodeURIComponent(
        movie.country
      )}&creator=${encodeURIComponent(movie.creator)}&cast=${encodeURIComponent(
        movie.cast
      )}`;
    },
  }));
});
