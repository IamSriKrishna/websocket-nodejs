
const socketIO = require("socket.io");

const createSocketServer = (server) => {
    console.log("Socket.io Server Connected");
    const io = socketIO(server, {
        cors: {
            origin: "*", 
        },
    });

    io.on("connection", (socket) => {
        console.log("Connected to sockets");

        socket.on("setup", (userId) => {
            socket.join(userId);
            console.log(`${userId} connected to the server`);
        });

        socket.on("disconnect", () => {
            console.log("User disconnected");
        });
    });

    return { server, io };
};

module.exports = createSocketServer;
