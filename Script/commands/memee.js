const fs = require("fs-extra");

module.exports.config = {
  name: "meme",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Mukul",
  description: "Funny meme",
  commandCategory: "fun",
  cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
  const imgPath = __dirname + "/cache/meme.jpg"; //https://i.imgur.com/zCFuB2S.jpeg

  if (!fs.existsSync(imgPath))
    return api.sendMessage("❌ meme.jpg পাওয়া যায়নি!", event.threadID);

  api.sendMessage(
    {
      body: "😂 অনেক দিন বিড়ি খাইনা, ১০ টাকা দাও বাবা...🙂",
      attachment: fs.createReadStream(imgPath)
    },
    event.threadID,
    event.messageID
  );
};
