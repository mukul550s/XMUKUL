const axios = require("axios");
const fs = require("fs-extra");

module.exports.config = {
  name: "voice",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ChatGPT",
  description: "Text to Voice",
  commandCategory: "utility",
  usages: "[text]",
  cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
  if (!args[0]) {
    return api.sendMessage(
      "ব্যবহার:\n.voice হ্যালো সবাই কেমন আছেন",
      event.threadID,
      event.messageID
    );
  }

  const text = encodeURIComponent(args.join(" "));
  const filePath = __dirname + "/cache/voice.mp3";

  const res = await axios({
    url: `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=bn&q=${text}`,
    method: "GET",
    responseType: "stream"
  });

  const writer = fs.createWriteStream(filePath);
  res.data.pipe(writer);

  writer.on("finish", () => {
    api.sendMessage(
      {
        body: "🔊 আপনার ভয়েস:",
        attachment: fs.createReadStream(filePath)
      },
      event.threadID,
      () => fs.unlinkSync(filePath),
      event.messageID
    );
  });
};
