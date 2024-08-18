/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      width: {
        logo: "13.625rem",
      },
      colors: {
        primary: {
          myBlack: "#000000",
          myWhite: "#ffffff",
          myOrange: "#fd8424",
          myRed: "#df3933",
          myPurple: "#8a5ce3",
          myBlue: "#2e7ccb",
        },
      },
      maxWidth: {
        myXl: "1240px",
        myLg: "930px",
        mySm: "320px",
      },
      fontFamily: {
        Pretendard_Bold: ["Pretendard-Bold"],
      },
    },
  },
  plugins: [],
};
