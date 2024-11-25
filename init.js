const mongoose = require("mongoose");
const Chat = require("./models/chat");

main()
    .then(() => {
        console.log("Connection Successful");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/chatwebsite');
}

Chat.insertMany({
    from: "neha",
    to: "priya",
    msg: "abdcsdhdh",
    created_at: new Date(),
})

let allchats = [
    {
        from: "neha",
        to: "priya",
        msg: "abdcsdhdh",
        created_at: new Date(),
    },
    {
        from: "abc",
        to: "xyz",
        msg: "hi",
        created_at: new Date(),
    },
    {
        from: "Myra",
        to: "Yash",
        msg: "HI didi",
        created_at: new Date(),
    },
];

Chat.insertMany(allchats);





