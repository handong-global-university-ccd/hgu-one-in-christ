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
        sm: { max: "700Px" },
        md: { min: "700px", max: "1240px" },
        lg: { min: "1240px" },
      },
      maxWidth: {
        lg: "1240px",
      },
      fontFamily: {
        Pretendard_Bold: ["Pretendard-Bold"],
        Pretendard_SemiBold: ["Pretendard-SemiBold"],
        Pretendard_Regular: ["Pretendard-Regular"],
        Pretendard_Light: ["Pretendard-Light"],
        Organetto_ExtBold: ["Organetto-ExtBold"],
        Organetto_ExtRegular: ["Organetto-ExtRegular"],
        TT_Firs: ["TT-Firs-Neue-Medium"],
        TT_Firs_Regular: ["TT-Firs-Neue-Regular"],
        TT_Firs_Light: ["TT-Firs-Neue-light"],
        Menda_Medium: ["Menda-Medium"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
  presets: [require("tailwindcss-preset-px-to-rem")],
};
