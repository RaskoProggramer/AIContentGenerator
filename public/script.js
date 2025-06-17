const form = document.getElementById("generatorForm");
const output = document.getElementById("output");
const stats = document.getElementById("stats");
const downloadBtn = document.getElementById("downloadBtn");

const promptTemplates = {
  explanation: (topic, level) => `Explain the topic '${topic}' at a ${level} level.`,
  quiz: (topic, level) => `Create a 5-question quiz about '${topic}' for ${level} students.`,
  lesson_plan: (topic, level) => `Create a short lesson plan on '${topic}' for ${level} students.`,
  compare: (topic, level) => `Compare and contrast '${topic}' with a related concept for ${level} level.`,
  application: (topic, level) => `Explain how '${topic}' is applied in real life, at a ${level} understanding.`
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  output.value = "Generating...";
  stats.textContent = "";

  const topic = document.getElementById("topic").value.trim();
  const level = document.getElementById("level").value;
  const type = document.getElementById("type").value;

  if (!topic) {
    alert("Topic is required.");
    return;
  }

  const prompt = promptTemplates[type](topic, level);
  const startTime = performance.now();

  try {
    const response = await fetch("http://localhost:3000/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });

    const data = await response.json();
    const endTime = performance.now();

    console.log("Response from server:", data);

    const generated = data.text?.trim();
    if (!generated) throw new Error("No output received.");

    // Optional: Filter profanity
    if (/\b(damn|shit|fuck)\b/i.test(generated)) {
      output.value = "Output contained inappropriate language and was blocked.";
    } else {
      output.value = generated;
   }

  // ⏱ Human-readable time formatting
    const durationMs = endTime - startTime;
    const seconds = (durationMs / 1000).toFixed(1);

    let readableTime;
    if (seconds < 60) {
      readableTime = `${seconds} seconds`;
    } else {
      const mins = Math.floor(seconds / 60);
      const secs = (seconds % 60).toFixed(1);
      readableTime = `${mins} min ${secs} sec`;
    }

    stats.textContent = `⏱ Generated in ${readableTime}`;
  } catch (err) {
    output.value = `Error: ${err.message}`;
    console.error(err);
  }
});

downloadBtn.addEventListener("click", () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const text = output.value || "No content to download.";
  const lines = doc.splitTextToSize(text, 180);

  doc.text(lines, 10, 10);
  doc.save("generated-content.pdf");
});

