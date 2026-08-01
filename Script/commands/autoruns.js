module.exports.config = {
  name: "autorun",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ChatGPT",
  description: "Auto run command when 🤤 emoji is sent",
  commandCategory: "events",
  cooldowns: 0
};

module.exports.handleEvent = async function ({
  api,
  event,
  Users,
  Threads,
  Currencies
}) {
  const { body } = event;

  if (!body || !body.includes("🤤")) return;

  const cmd = global.client.commands.get("ping"); // যে কমান্ড চালাতে চান

  if (!cmd) {
    return api.sendMessage(
      "❌ ping কমান্ড পাওয়া যায়নি!",
      event.threadID,
      event.messageID
    );
  }

  try {
    await cmd.run({
      api,
      event,
      args: [],
      Users,
      Threads,
      Currencies
    });
  } catch (err) {
    console.error(err);
    api.sendMessage(
      "❌ কমান্ড চালাতে সমস্যা হয়েছে।",
      event.threadID,
      event.messageID
    );
  }
};

module.exports.run = () => {};
