const createSocketServer = require("./socket")

const dotenv = require("dotenv")

dotenv.config({ path: "./.env" })

const app = require("./app")

const Port = process.env.PORT || 5000

server = app.listen(Port, "0.0.0.0", () => {
    console.log(`Successfully Connected to the Port:${Port}`)
})

createSocketServer(server)