const colors = require('tailwindcss/colors');

module.exports = {
  theme: {
    extend: {
      colors: {
        blue: colors.blue, // ensures rgb-based fallback
      },
    },
  },
};
