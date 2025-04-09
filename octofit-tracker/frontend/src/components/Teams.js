import React, { useState, useEffect } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://[REPLACE-WITH-CODESPACE-NAME]-8000.app.github.dev/api/teams')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Teams</h2>
      </div>
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Team Name</th>
              <th>Members</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, index) => (
              <tr key={index}>
                <td>{team.name}</td>
                <td>{team.members}</td>
                <td>{team.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-primary">Add Team</button>
      </div>
    </div>
  );
}

export default Teams;
