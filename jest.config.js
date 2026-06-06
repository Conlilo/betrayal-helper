module.exports = {
  preset: '@react-native/jest-preset',
  // immer (used by Redux Toolkit) and redux-persist ship ES modules that must
  // be transformed; the RN preset ignores node_modules by default.
  transformIgnorePatterns: [
    'node_modules/(?!(' +
      '@react-native|react-native|@react-navigation|' +
      'immer|@reduxjs/toolkit|redux-persist|reselect|redux' +
      ')/)',
  ],
};
