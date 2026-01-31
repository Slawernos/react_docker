import './App.css';

function App() {
  return (
    <div className="App">
      <header className="dashboard-header">
        <h1>Hello Happy Coding!! 🎉</h1>
      </header>
      
      <div className="dashboard">
        <div className="sidebar">
          <h2>Menu</h2>
          <nav>
            <ul>
              <li>📊 Dashboard</li>
              <li>📈 Analytics</li>
              <li>⚙️ Settings</li>
              <li>👤 Profile</li>
            </ul>
          </nav>
        </div>
        
        <main className="main-content">
          <h2>Dashboard Overview</h2>
          <div className="cards">
            <div className="card">
              <h3>Total Users</h3>
              <p className="stat">1,234</p>
            </div>
            <div className="card">
              <h3>Active Projects</h3>
              <p className="stat">42</p>
            </div>
            <div className="card">
              <h3>Tasks Completed</h3>
              <p className="stat">89%</p>
            </div>
            <div className="card">
              <h3>Revenue</h3>
              <p className="stat">$12.5K</p>
            </div>
          </div>
          
          <div className="welcome-section">
            <h3>Welcome to Your Devops Dashboard</h3>
            <h4>We are building something great!</h4>
            <b>Tanulj Reactot!</b>
            <a href="https://reactjs.org/">Tanulj REACTOT</a>
            <p>This is a simple dashboard template built with React and Docker. Start coding and make it your own!</p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
