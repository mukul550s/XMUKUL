module.exports.config = {
  name: "menu",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Mukul",
  description: "Bot Menu",
  commandCategory: "system",
  usages: "",
  cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
  const menu = `
📜 BOT MENU 📜

💍 .biya @user - বিয়ের মিম
😂 .meme - র‍্যান্ডম মিম
🔥 .roastpic @user - Roast + ছবি
🤣 .joke - বাংলা জোকস
`;

  api.sendMessage(menu, event.threadID, event.messageID);
};
