const express = require('express');
const { Octokit } = require("@octokit/core");
const app = express();
const cors = require('cors');


app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const octokit = new Octokit();

app.get('/', (req, res) => {
    res.send('Test Backend');
});

app.get('/status', async (req, res) => {
  try {
    const status = await octokit.request('GET /');
    res.send(status);
  } catch (error) {
    res.send(error);
  }

});

app.get('/profile/:username', async (req, res) => {
  try {
    const username = req.params.username;
    const request = `GET /users/${username}`;
    const profile = await octokit.request(request);

    res.send(profile);
  } catch (error) {
    res.status(error.status).send(error);
  }


});

app.get('/commits/:username/:repo', async (req, res) => {
  try {
    const { repo, username } = req.params;
    const request = `GET /repos/${username}/${repo}/commits`
    const commits = await octokit.request(request);

    res.send(commits);
  } catch (error) {
    res.send(error);
  }
});

app.get('/repos/:username', async (req, res) => {
  try {
    const username = req.params.username;
    const request = `GET /users/${username}/repos`;
    const repos = await octokit.request(request);

    res.send(repos);
  } catch (error) {
    res.send(error);
  }
});

app.listen(3000, () => {
    console.log('Server Init...');
});
