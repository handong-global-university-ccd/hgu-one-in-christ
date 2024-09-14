/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          black: "#141414",
          white: "#ffffff",
          orange: "#fd8424",
          red: "#df3933",
          purple: "#8a5ce3",
          blue: "#2e7ccb",
        },
      },
      maxWidth: {
        Xl: "1240px",
        Lg: "930px",
        Sm: "320px",
      },
      fontFamily: {
        Pretendard_Bold: ["Pretendard-Bold"],
        Pretendard_Regular: ["Pretendard-Regular"],
        Organetto_ExtBold: ["Organetto-ExtBold"],
        TT_Firs: ["TT-Firs-Neue-Medium"],
        TT_Firs_Regular: ["TT-Firs-Neue-Regular"],
        TT_Firs_Light: ["TT-Firs-Neue-light"],
        Menda_Medium: ["Menda-Medium"],
      },
    },
  },
  plugins: [],
};
