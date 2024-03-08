import React, { useState } from 'react';
import './App.css';
import teamsData from './CollegeBasketballTeams.json';

interface TeamProps {
  name: string;
  mascot: string;
  location: string;
}

//const teamNames = []; //this would be json file?

/* #1: A heading section at the top introducing the user to what the site is.*/
function Welcome() {
  return (
    <div>
      <h1>Hello! Welcome to the NCAA Bball information page</h1>
    </div>
  );
}

/*class TeamCard extends React.Component<TeamProps> {
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
} */

/* #2: A team “card” that contains the following information about each school:
• School Name
• Mascot Name
• Location (City, State)*/
function TeamCard({ name, mascot, location }: TeamProps) {
  return (
    <div className="team-card">
      <h1>{name}</h1>
      <h3>Mascot Name: {mascot}</h3>
      <h3>Location (City,State): {location}</h3>
    </div>
  );
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

/*#3: A list of team cards that shows all the teams on the list. */
function TeamList() {
  const [teams] = useState<TeamProps[]>(
    teamsData.teams.map((team) => ({
      name: team.name,
      mascot: team.abbrev,
      location: `${team.city}, ${team.state}`,
    })),
  );

  return (
    <div>
      {teams.map((team, index) => (
        <TeamCard key={index} {...team} />
      ))}
    </div>
  );
  /*
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          '/Users/haileybronson/Desktop/413/Mission09_Bronson/blah/CollegeBasketballTeams.json',
        );
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
  */
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
