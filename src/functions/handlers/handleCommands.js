const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10');
const fs = require("fs");

module.exports = (client) => {
  client.handleCommands = async () => {
    const commandFolders = fs.readdirSync("./src/commands");
    for (const folder of commandFolders) {
      const commandFile = fs
        .readdirSync(`./src/commands/${folder}`)
        .filter((file) => file.endsWith(".js"))

      const { commands, commandArray } = client;
      for (const file of commandFile) {
        const command = require(`../../commands/${folder}/${file}`);
        commands.set(command.data.name, command)
        commandArray.push(command.data.toJSON());
      }
    }
    const clientID = process.env.clientID;
    const guildID = process.env.guildID;
    const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);
    try {
      console.log("started refreshing🔄️ application (/) command\n");

      await rest.put(Routes.applicationGuildCommands(clientID, guildID), {
        body: client.commandArray
      });

      console.log("Successfully✅ reloaded application (/) command\n");
    } catch (error) {
      console.log(error);
    }
  }
}
