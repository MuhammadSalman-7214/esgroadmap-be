import app from './server.js';
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`🚀 Dev server running on http://localhost:${port}`);
});
