const apiUrl =
  process.env.REACT_APP_SOCKET_ENDPOINT === "production"
    ? "https://buzzer-social-app.herokuapp.com"
    : "http://localhost:8000";

export default apiUrl;
