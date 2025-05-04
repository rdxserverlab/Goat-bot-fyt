module.exports = {
  config: {
    name: "info",
    version: "1.0",
    author: "Nirob",
    countDown: 5,
    role: 0,
    shortDescription: "admin and info",
    longDescription: "bot owner info",
    category: "auto ✅",
  },

  onStart: async function () {},

  onStart: async function ({ event, message, usersData, threadsData }) {
    const user = await usersData.get(event.senderID);
    const thread = await threadsData.get(event.threadID);
    const name = user.name;
    const gcName = thread.threadName;

    const now = new Date();
    const date = now.toLocaleDateString("en-US", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
    const time = now.toLocaleTimeString("en-US", {
      timeZone: "Asia/Dhaka",
      hour12: true,
    });

    const attachmentURL = "https://files.catbox.moe/ae409b.jpg";

    const info = `❯╚╗
━━━━━━━━━━━━━━━━━━━━━━
𝗡𝗔𝗠𝗘: Nirob
𝐆𝐄𝐍𝐃𝐄𝐑: MALE
𝐀𝐆𝐄: 16
𝐑𝐄𝐋𝐀𝐓𝐈𝐎𝐍𝐒𝐇𝐈𝐏: SINGLE
𝐖𝐎𝐑𝐊: Time traveler from the future
𝐆𝐌𝐀𝐈𝐋: example@gmail.com
𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊: https://www.facebook.com/hatake.kakashi.NN
𝐌𝐀𝐒𝐒𝐄𝐍𝐆𝐄𝐑: m.me/hatake.kakashi.NN
𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏: wa.me/+8801XXXXXXXXX
𝐓𝐄𝐋𝐄𝐆𝐑𝐀𝐌: t.me/yourusername
━━━━━━━━━━━━━━━━━━━━━━

Bot Prefix: ( / )
Bot Name: kakashi
Group Name: ${gcName}
User: ${name}
━━━━━━━━━━━━━━━━━━━━━━
Date: ${date}
Time: ${time}`;

    message.reply({
      body: info,
      attachment: await global.utils.getStreamFromURL(attachmentURL),
    });
  },
};
