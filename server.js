const express = require("express");
const app = express();

let crabRave = false;

app.use(express.json());

// Start Crab Rave
app.post("/startevent", (req, res) => {
  crabRave = true;
  res.json({ success: true, crabRave });
});

// Stop Crab Rave
app.post("/stopevent", (req, res) => {
  crabRave = false;
  res.json({ success: true, crabRave });
});

// Check if Crab Rave is active
app.get("/checkevent", (req, res) => {
  res.json({ crabRave });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Crab Rave server running on ${port}`));
