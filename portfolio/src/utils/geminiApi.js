const apiKey = ""; // API Key injected at runtime

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const callGemini = async (prompt, systemContext = "") => {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

  const payload = {
    contents: [{
      parts: [{ text: prompt }]
    }],
    systemInstruction: {
      parts: [{ text: systemContext }]
    }
  };

  for (let i = 0; i < 3; i++) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text || "Transmission interrupted. Please try again.";
    } catch {
      if (i === 2) return "Systems offline. Unable to reach AI core.";
      await delay(1000 * Math.pow(2, i));
    }
  }
};
