module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  transformIgnorePatterns: ["node_modules/?!(@-0)"],
  watchPathIgnorePatterns: ["^.+\\.repl.(ts|js)$"],
}
