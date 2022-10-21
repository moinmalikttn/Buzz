const url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/"
    : "https://buzzer-social-app.herokuapp.com";

module.exports = url;
