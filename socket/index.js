const {Server} = require('socket.io')

const io = new Server({cors: "http://localhost:5173/"});
let onlineUsers = [];

io.on("connection", (socket) => {
    console.log("new connection", socket.id);

    // listen to a connection
    socket.on("addNewUser", (userId, userEmail) => {

        !onlineUsers.some((user) => user.userId === userId) &&
        onlineUsers.push({
            userId,
            socketId: socket.id,
            userEmail
        });
    })
    console.log("Online users", onlineUsers);
    io.emit("getOnlineUsers", onlineUsers);

    socket.on("disconnect", (userId) => {
        onlineUsers = onlineUsers.filter(user => user.socketId !== socket.id);
        io.emit("getOnlineUsers", onlineUsers);
    })

    socket.on("sendMessage", (message) => {
        const user = onlineUsers.find((user) => user.userId === message.recipientId);

        if (user) {
            io.to(user.socketId).emit("getMessage", message);
            io.to(user.socketId).emit("getNotification", {
                senderId: message.senderId,
                isRead: false,
                date: new Date(),
            })
        }
    })
});

io.listen(3000);