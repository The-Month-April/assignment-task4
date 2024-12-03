jest.mock("expo-constants", () => ({
  default: {
    expoConfig: {
      extra: {},
    },
  },
}));

jest.mock("react-native-maps", () => ({
  LatLng: jest.fn(),
}));

jest.mock("react-native", () => ({
  Platform: {
    OS: "ios",
  },
}));
