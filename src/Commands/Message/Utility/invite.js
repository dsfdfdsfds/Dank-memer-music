import { EmbedBuilder, ButtonBuilder, ActionRowBuilder } from "discord.js";

export default{
  name: "invite",
  aliases: ["add", "inv"],
  category:'Utility',
  permission: "",
  desc: "Get Invite Of Dank Memer Music!",
  options : {
    owner:false,
    inVc: false,
    sameVc:false,
    player:{
      playing:false,
      active:false,
    },
    premium :false,
    vote :false,
  },
  /**
   * @param {{ client: import("../../../Struct/Client"), message: import("discord.js").Message }}
   */
  run: async ({ client, message }) => {
    return message.channel.send({
      content: "\u200b",
      embeds: [
        new EmbedBuilder()
        .setColor(client.settings.COLOR)
          .setTitle("Here Is The Invite Link")
          .setDescription("Thanks For Choosing Dank Memer Music Music!"),],
      components: [
        new ActionRowBuilder().addComponents(
          new ButtonBuilder()
            .setStyle(client.Buttons.link)
            .setLabel("Invite")
            .setURL(
              `https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=37088600&scope=bot%20applications.commands`
            )
        ),
      ],
    });
  },
};















