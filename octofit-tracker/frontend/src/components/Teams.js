import React from 'react';

function Teams() {
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
            <tr>
              <td>Team Alpha</td>
              <td>5</td>
              <td>1200</td>
            </tr>
            <tr>
              <td>Team Beta</td>
              <td>4</td>
              <td>1100</td>
            </tr>
          </tbody>
        </table>
        <button className="btn btn-primary">Add Team</button>
      </div>
    </div>
  );
}

export default Teams;
