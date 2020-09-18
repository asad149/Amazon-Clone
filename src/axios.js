import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/advanceform-c738b/us-central1/api", // THE API (cloud function) URL
});

export default instance;
// https://us-central1-advanceform-c738b.cloudfunctions.net/api

// http://localhost:5001/advanceform-c738b/us-central1/api

//  https://us-central1-node-express-demo-37e3c.cloudfunctions.net/api
