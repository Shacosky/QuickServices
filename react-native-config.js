module.exports = {
  project: {
    ios: {},
    android: {}, // grouped into "project"
  },
  asserts: ["./assets/fonts/"], // stays the same
  dependencies: {
    "react-native-code-push": {
      platforms: {
        android: null, // disable Android platform, other platforms will still autolink if provided
      },
    },
  },
};
