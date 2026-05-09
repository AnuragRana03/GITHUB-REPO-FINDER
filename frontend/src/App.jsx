import React, { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  const searchUser = async () => {
    if (!username) return;

    const userRes = await fetch(`https://api.github.com/users/${username}`);
    const userData = await userRes.json();

    setUser(userData);

    const repoRes = await fetch(userData.repos_url);
    const repoData = await repoRes.json();

    setRepos(repoData);

    fetch("http://localhost/backend/save_search.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    });
  };

  return (
    <div className="container">
      <h1>GitHub Repo Finder</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Enter GitHub Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button onClick={searchUser}>Search</button>
      </div>

      {user && (
        <div className="profile">
          <img src={user.avatar_url} alt="avatar" />
          <h2>{user.name}</h2>
          <p>{user.bio}</p>

          <div className="stats">
            <span>Followers: {user.followers}</span>
            <span>Following: {user.following}</span>
          </div>
        </div>
      )}

      <div className="repo-list">
        {repos.map((repo) => (
          <div className="repo-card" key={repo.id}>
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>

            <a href={repo.html_url} target="_blank" rel="noreferrer">
              View Repo
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
