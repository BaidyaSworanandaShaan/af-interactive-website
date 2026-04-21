const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// 1. Serve the static files from the 'dist' directory
app.use(express.static(path.join(__dirname, 'dist')));

// 2. Handle SPA routing: send index.html for any request that doesn't match a file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
