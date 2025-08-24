/* const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");
const Message = require("../schema/MessagesSchema");
const VITE_OPENAI_API_KEY=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
const PORT=3300

dotenv.config();
const router = express.Router();

const OPENROUTER_API_KEY = process.env.VITE_OPENAI_API_KEY;

// ✅ Ask AI and store both Q&A
router.post("/postQuestion", async (req, res) => {
  try {
    const { AiChat } = req.body;
    if (!AiChat) return res.status(400).json({ error: "AiChat is required" });

    // Call AI API
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: AiChat }],
      },
      {
        headers: {
          Authorization: `Bearer ${OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const reply = response.data.choices[0].message.content;

    // Save user and AI messages
    const userMessage = await Message.create({
      text: AiChat,
      sender: "user",
    });

    const aiMessage = await Message.create({
      text: reply,
      sender: "ai",
    });

    return res.json({ reply, userMessage, aiMessage });
  } catch (error) {
    console.error(error.response?.data || error.message);
    return res.status(500).json({ error: "OpenRouter request failed" });
  }
});

// ✅ Fetch all messages
router.get("/messages", async (req, res) => {
  try {
    const messages = await Message.findAll();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});
router.delete("/deleteChat", async (req, res) => {
  try {
    const deleteMessage = await Message.destroy({
      where: {}, // 👈 empty condition = delete all
      truncate: true, // 👈 optional: reset IDs to 1
    });

    return res.status(200).json({ sms: "all messages successfully deleted" });
  } catch (error) {
    return res.status(500).json({ error: "Failed to delete" });
  }
});
module.exports = router;
 */

/*  with router */

const express = require("express");
const axios = require("axios");
const Message = require("../schema/MessagesSchema");
const OPENROUTER_API_KEY =
  "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";
const router = express.Router();

// ✅ Ask AI and store both Q&A
router.post("/postQuestion", async (req, res) => {
  try {
    const { AiChat } = req.body;
    if (!AiChat) return res.status(400).json({ error: "AiChat is required" });

    // Call AI API
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: AiChat }],
      },
      {
        headers: {
          Authorization: `Bearer ${OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const reply = response.data.choices[0].message.content;

    // Save user and AI messages
    const userMessage = await Message.create({
      text: AiChat,
      sender: "user",
    });

    const aiMessage = await Message.create({
      text: reply,
      sender: "ai",
    });

    return res.json({ reply, userMessage, aiMessage });
  } catch (error) {
    console.error(error.response?.data || error.message);
    return res.status(500).json({ error: "OpenRouter request failed" });
  }
});

// ✅ Fetch all messages
router.get("/messages", async (req, res) => {
  try {
    const messages = await Message.findAll();
    res.json(messages);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});
router.delete("/deleteChat", async (req, res) => {
  try {
    const deleteMessage = await Message.destroy({
      where: {}, // 👈 empty condition = delete all
      truncate: true, // 👈 optional: reset IDs to 1
    });

    return res.status(200).json({ sms: "all messages successfully deleted" });
  } catch (error) {
    return res.status(500).json({ error: "Failed to delete" });
  }
});
module.exports = router;

// routes/chatRoutes.js
// routes/chatRoutes.js
// routes/chatRoutes.js
// routes/chatRoutes.js
// routes/chatRoutes.js
// routes/chatRoutes.js
