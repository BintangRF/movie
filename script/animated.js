document.addEventListener("alpine:init", () => {
  Alpine.data("animated", () => ({
    items: [
      {
        id: 35,
        title: "The Addams Family",
        img: "img/animated/addams.svg",
        genre: ["Comedy", "Fantasy", "Supernatural"],
        filter: "Comedy Fantasy Supernatural",
        imdbScore: 6.9,
        type: "Movie",
        ageRating: "PG-13",
        country: "USA",
        creator: "Charles Addams",
        cast: "Anjelica Huston, Raúl Juliá, Christina Ricci",
      },
      {
        id: 36,
        title: "How to Train Your Dragon",
        img: "img/animated/dragon.svg",
        genre: ["Animation", "Adventure", "Family"],
        filter: "Animation Adventure Family",
        imdbScore: 8.1,
        type: "Movie",
        ageRating: "PG",
        country: "USA",
        creator: "Dean DeBlois, Chris Sanders",
        cast: "Jay Baruchel, Gerard Butler, Craig Ferguson",
      },
      {
        id: 37,
        title: "Encanto",
        img: "img/animated/encanto.svg",
        genre: ["Animation", "Musical", "Comedy"],
        filter: "Animation Musical Comedy",
        imdbScore: 8.0,
        type: "Movie",
        ageRating: "PG",
        country: "USA",
        creator: "Jared Bush, Byron Howard, Charise Castro Smith",
        cast: "Stephanie Beatriz, Lin-Manuel Miranda, John Leguizamo",
      },
      {
        id: 38,
        title: "The Incredibles",
        img: "img/animated/incredibles.svg",
        genre: ["Animation", "Action", "Adventure"],
        filter: "Animation Action Adventure",
        imdbScore: 8.6,
        type: "Movie",
        ageRating: "PG",
        country: "USA",
        creator: "Brad Bird",
        cast: "Craig T. Nelson, Holly Hunter, Samuel L. Jackson",
      },
      {
        id: 39,
        title: "Lion",
        img: "img/animated/lion.svg",
        genre: ["Drama", "Biography", "Family"],
        filter: "Drama Biography Family",
        imdbScore: 8.1,
        type: "Movie",
        ageRating: "PG-13",
        country: "Australia",
        creator: "Garth Davis",
        cast: "Dev Patel, Nicole Kidman, David Wenham",
      },
      {
        id: 40,
        title: "The Mitchells vs. the Machines",
        img: "img/animated/mitchells.svg",
        genre: ["Animation", "Adventure", "Comedy"],
        filter: "Animation Adventure Comedy",
        imdbScore: 8.4,
        type: "Movie",
        ageRating: "PG",
        country: "USA",
        creator: "Mike Rianda, Jeff Rowe",
        cast: "Abbi Jacobson, Danny McBride, Maya Rudolph",
      },
      {
        id: 41,
        title: "Ron's Gone Wrong",
        img: "img/animated/rons.svg",
        genre: ["Animation", "Comedy", "Family"],
        filter: "Animation Comedy Family",
        imdbScore: 7.2,
        type: "Movie",
        ageRating: "PG",
        country: "USA",
        creator: "Sarah Smith, Jean-Philippe Vine",
        cast: "Jack Dylan Grazer, Zach Galifianakis, Olivia Colman",
        releaseDate: "2021-10-21",
      },
      {
        id: 42,
        title: "Scoob!",
        img: "img/animated/scoob.svg",
        genre: ["Animation", "Comedy", "Mystery"],
        filter: "Animation Comedy Mystery",
        imdbScore: 6.6,
        type: "Movie",
        ageRating: "PG",
        country: "USA",
        creator: "Tony Cervone",
        cast: "Will Forte, Mark Wahlberg, Gina Rodriguez",
        releaseDate: "2020-05-15",
      },
      {
        id: 43,
        title: "The Sea Beast",
        genre: ["Animation", "Adventure", "Family"],
        filter: "Animation Adventure Family",
        img: "img/animated/seabeast.svg",
        imdbScore: 7.6,
        type: "Movie",
        ageRating: "PG",
        country: "USA",
        creator: "Chris Williams",
        cast: "Karl Urban, Zaris-Angel Hator, Jared Harris",
        releaseDate: "2022-07-08",
      },
      {
        id: 44,
        title: "Wendell & Wild",
        img: "img/animated/wendell.svg",
        genre: ["Animation", "Comedy", "Horror"],
        filter: "Animation Comedy Horror",
        imdbScore: 6.9,
        type: "Movie",
        ageRating: "PG",
        country: "USA",
        creator: "Henry Selick, Jordan Peele",
        cast: "Keegan-Michael Key, Lyric Ross, Angela Bassett",
        releaseDate: "2022-10-27",
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
