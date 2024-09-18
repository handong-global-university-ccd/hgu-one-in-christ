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
      screens: {
        sm: { max: "819px" },
        md: { min: "820px", max: "1240px" },
        lg: { min: "1240px" },
      },
      maxWidth: {
        lg: "1240px",
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
