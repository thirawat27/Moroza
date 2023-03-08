const fs = require("fs")

module.exports = (client) => {
  client.hendleCommands = async () => {
    const commandFolders = fs.readdirSync("./src/commands")
    for (const folder of commandFolders) {
      const commandFile = fs.readFileSync("./src/")
    }
  }
}
