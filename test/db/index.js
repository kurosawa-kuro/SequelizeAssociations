const { startUser } = require("./userDatabase.js")

async function start() {
    console.log("start database index")
    startUser()
    // start_book()
    // start_posts()
    // start_auth()
}

start()

