const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("button")
        .setDescription("ส่งปุ่ม"),
    async execute(interaction, client) {
        const button = new ButtonBuilder()
            .setCustomID('sub-yt')
            .setLable('Subscribe')
            .setStyle(ButtonStyle.Success);
            
        await interaction.reply({
            components: [new ActionRowBuilder().addComponents(button)]
        })
    }
}