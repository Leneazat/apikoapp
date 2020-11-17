import socket from "socket.io-client";

class SocketApi {
  socket = null;

  init(token) {
    this.socket = socket("https://murmuring-gorge-46772.herokuapp.com", {
      query: {
        token,
      },
      // transports: ["websocket"],
    });

    this.socket.on("connect", () => {
      console.log("Connected");
      console.log({ socket });
    });
  }

  handleMessages(handler) {
    this.socket.on("message", (message) => {
      handler(message);
    });
  }
}

export default new SocketApi();
