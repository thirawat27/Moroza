const { SlashCommandBuilder,EmbedBuilder} = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("ตรวจสอบความหน่วง"),
    async execute(interaction, client){
        const massage = await interaction.deferReply({
             fetchReply: true
        });

        const newMassage = new EmbedBuilder()
            .setColor('#ff6eb6')
            .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL(), url: 'https://discord.js.org' })
            .setTitle('Ping Result')
            .setDescription(`**\`\`\`⚙️ API ping : ${client.ws.ping} ms\n📡 Client ping : ${massage.createdTimestamp - interaction.createdTimestamp} ms\`\`\`**`);

        await interaction.editReply({
            embeds: [newMassage]
        });
    }    
}