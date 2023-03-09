const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("embed")
        .setDescription("ส่งข้อมูล Embed"),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
            .setTitle('Some title')
            .setDescription('Some description here')
            .setColor('#ff6eb6')
            .setImage(client.user.displayAvatarURL())
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp(Date.now())
            .setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL(), url: 'https://discord.js.org' })
            .setFooter({ text: client.user.tag, iconURL: client.user.displayAvatarURL() })
            .setURL('https://discord.js.org/')
            .addFields(
                {
                    name: 'Inline field title',
                    value: 'Some value here',
                    inline: true
                },
                {
                    name: 'Inline field title',
                    value: 'Some value here',
                    inline: true
                }
            );
        await interaction.reply({
            embeds: [embed]
        });
    }
}