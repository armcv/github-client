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
  const status = await octokit.request('GET /');

  res.send(status);
});

app.get('/profile/:username', async (req, res) => {
  const username = req.params.username;
  const request = `GET /users/${username}`;
  const profile = await octokit.request(request);

  res.send(profile);
});

app.get('/commits/:username/:repo', async (req, res) => {
  const { repo, username } = req.params;
  const request = `GET /repos/${username}/${repo}/commits`
  const commits = await octokit.request(request);

  res.send(commits);
});

app.get('/repos/:username', async (req, res) => {
  const username = req.params.username;
  const request = `GET /users/${username}/repos`;
  const repos = await octokit.request(request);

  res.send(repos);
});

app.listen(3000, () => {
    console.log('Server Init...');
});
