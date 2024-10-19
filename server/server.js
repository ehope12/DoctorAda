// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Sample user data
const userProfile = {
    name: 'Trisha',
    bio: 'meow meow meow meow meow meow meow meow meow',
    organization: 'XYZ University',
    savedPosts: [
        { id: 1, title: 'Post Title 1', link: '#post1' },
        { id: 2, title: 'Post Title 2', link: '#post2' },
        { id: 3, title: 'Post Title 3', link: '#post3' },
    ],
};

// Endpoint to get user profile
app.get('/api/profile', (req, res) => {
    res.json(userProfile);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
