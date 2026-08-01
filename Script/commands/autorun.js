module.exports.config = {
  name: "autorun",
  eventType: ["message"],
  version: "1.0.0",
  credits: "Mukul",
  description: "Auto Run Event"
};

module.exports.run = async function ({ api, event }) {
  const { threadID, senderID } = event;

  // বটের নিজের মেসেজ হলে কিছু করবে না
  if (senderID == api.getCurrentUserID()) return;

  // "hi" লিখলে স্বয়ংক্রিয় রিপ্লাই
  if (event.body && event.body.toLowerCase() === "hi") {
    return api.sendMessage(
      "👋 Hello! আমি MUKUL BOT। কেমন আছেন?",
      threadID
    );
  }
};
