import {
  WebhookClient,
  ActionRowBuilder,
  ButtonBuilder,
  EmbedBuilder,
} from "discord.js";
const webHookurl = "https://discord.com/api/webhooks/1238151849744535672/gsVOsk-rA1ahivgWtqZu9WcSPSQUtUIdRDFEKsSPEg7-ENyULS_oNQITxwxSB8gQgtPi";
const hook = new WebhookClient({ url: webHookurl });

export default async (client, guild) => {
  await client.guilds.fetch({ cache: true });
  client.cluster.broadcastEval((c) => c.guilds.cache.size);
  client.cluster.broadcastEval((c) => c.channels.cache.size);
  client.cluster.broadcastEval((c) => c.users.cache.size);
  const embed = new EmbedBuilder()
    .setDescription(
      `I Joined **${guild.name}** (Members ${guild.memberCount + 1} )`
    )
    .setThumbnail(guild.iconURL({ dynamic: true, size: 1024 }))
    .setColor(client.settings.COLOR);
  hook.send({
    content: "**Server Joined <@&1182712116361302150>**",
    embeds: [embed],
  });
  const serversendingembed = new EmbedBuilder()
    .setAuthor({
      name: `Thanks For Adding Me To Your Server`,
      url: "https://dsc.gg/iron-web10",
      iconURL: guild.iconURL({ dynamic: true }),
    })

    .setURL(`https://dsc.gg/iron-web10`)
    .setTitle(
      `**Hey! Myself Dank Memer Music Music A Top Quality Music Bot With Lots Of Commands. 24/7 And Autoplay Like Premium Features Are Free**`
    )
    // .setURL("https://dsc.gg/iron-web10")
    .setDescription(
      `\n\n**[Invite](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=37088600&scope=bot%20applications.commands) • [Support Server](https://dsc.gg/iron-web10)**\n`
    )
    .setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 1024 }))
    .setColor(client.settings.COLOR);
  const row = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId("playerselect")
      .setLabel("Select Player")
      .setStyle(client.Buttons.grey)
      .setEmoji("1068864782234570822")
  );
  const serverChannel = guild.channels.cache.find(
    (channel) =>
      channel.name.includes("logs") ||
      channel.name.includes("log") ||
      channel.name.includes("setup") ||
      channel.name.includes("bot") ||
      channel.name.includes("bot-logs") ||
      channel.name.includes("music") ||
      channel.name.includes("music-logs") ||
      channel.name.includes("music-req") ||
      channel.name.includes("chat") ||
      channel.name.includes("general")
  );
  if (!serverChannel) return;
  serverChannel.send({ embeds: [serversendingembed], components: [] });
};

