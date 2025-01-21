import express from "express";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const router = express.Router();

router.post("/get", (req, res) => {});
// Endpoint to handle AI requests
router.post("/groq", async (req, res) => {
  const { prompt } = req.body;

  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "llama-3.3-70b-versatile",
    });

    // Send the AI response back to the client
    const responseText = chatCompletion.choices[0]?.message?.content || "";
    res.json({ response: responseText });
  } catch (error) {
    console.error("Error generating response:", error);
    res.status(500).json({ error: "Failed to generate response" });
  }
});

export default router;
