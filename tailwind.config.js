module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-m": "url('./assets/home/background-home-mobile.jpg')",
        "hero-d": "url('./assets/home/background-home-desktop.jpg')",
        "crew-m": "url(./assets/crew/background-crew-mobile.jpg)",
        "crew-d": "url(./assets/crew/background-crew-desktop.jpg)",
        "dest-m": "url(./assets/destination/background-destination-mobile.jpg)",
        "dest-d":
          "url(./assets/destination/background-destination-desktop.jpg)",
        "tech-m": "url(./assets/technology/background-technology-mobile.jpg)",
        "tech-d": "url(./assets/technology/background-technology-desktop.jpg)",
      },
      fontFamily: {
        main: ['"Playfair Display"'],
      },
    },
  },
  plugins: [],
};
