const express = require("express");
const app = express();

let crabRaveActive = false; // Tracks whether the Crab Rave event is live

app.use(express.json());

// Start Crab Rave
app.post("/startevent", (req, res) => {
  crabRaveActive = true;
  console.log("Crab Rave started!");
  res.json({ success: true, crabRave: crabRaveActive });
});

// Stop Crab Rave
app.post("/stopevent", (req, res) => {
  crabRaveActive = false;
  console.log("Crab Rave stopped!");
  res.json({ success: true, crabRave: crabRaveActive });
});

// Check if Crab Rave is active (for all clients, including new joins)
app.get("/checkevent", (req, res) => {
  // Returns current event state without changing it
  res.json({ crabRave: crabRaveActive });
});

// Optional: Add a simple health check
app.get("/", (req, res) => {
  res.send("Crab Rave backend is running!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Crab Rave server running on ${port}`));
