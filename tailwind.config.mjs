// tailwind.config.js in your project
import defaultConfig from "valentinesharedassets/tailwind.config.js";

const updatedConfig = {
  ...defaultConfig,
  theme: {
    ...defaultConfig.theme,
    extend: {
      ...defaultConfig.extend,
      animation: {
        ...defaultConfig.animation,
        "spin-slow": "spin 6s linear infinite",
      },
    },
  },
};

export default updatedConfig;
