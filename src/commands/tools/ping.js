const { SlashCommandBuilder} = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("ping server"),
    async execute(interaction, client){
        const massage = await interaction.deferReply({
             fetchReply: true
        });

        const newmassage = `Api Latency: ${client.ws.ping}\nClient ping: ${massage.createdTimestamp - interaction.createdTimestamp}`
        await interaction.editReply({
            content: newmassage 
        });
    }    
}