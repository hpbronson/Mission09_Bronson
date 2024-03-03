import React, { useEffect, useState } from 'react';
import './App.css';

interface TeamProps {
  name: string;
  mascot: string;
  location: string;
}

//const teamNames = []; //this would be json file?

function Welcome() {
  return (
    <div>
      <h1>Hello! Welcome to the NCAA Bball information page</h1>
    </div>
  );
}

class TeamCard extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div>
        <h1>(oneTeam.name)</h1>
        <h3>Mascot Name: (oneTeam.mascot)</h3>
        <h3>Location City,State: (oneTeam.location)</h3>
      </div>
    );
  }
}
/*
function TeamList() {
  return (
    <div>
      {teamNames.map((oneTeam) => (
        <TeamCard {...oneTeam} />
      ))}
    </div>
  );
}*/
function TeamList() {
  const [teams, setTeams] = useState<TeamProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('CollegeBasketballTeams.json'); // Adjust the path as needed
        const data = await response.json();
        setTeams(data.teams);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {teams.map((team, index) => (
        <TeamCard key={index} {...team} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
