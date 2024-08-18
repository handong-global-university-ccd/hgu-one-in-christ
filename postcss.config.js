import purgecss from "@fullhuman/postcss-purgecss";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default {
  plugins: [
    tailwindcss,
    autoprefixer,
    purgecss({
      content: ["./**/*.html"],
      // 기타 설정...
    }),
  ],
};
