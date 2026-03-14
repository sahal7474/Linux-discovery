import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <nav className="navbar">
        LINUX DISCOVERY TOOL
      </nav>

      <div className="container">
        <h1>Host Inventory</h1>
        <p>This is where our server data will eventually go.</p>

        <table>
          <thead>
            <tr>
              <th>Hostname</th>
              <th>IP Address</th>
              <th>OS Name</th>
              <th>CPU Model</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* This is a "Mock" row to test our layout */}
            <tr>
              <td><strong>fedora-server-01</strong></td>
              <td>192.168.1.50</td>
              <td>Fedora 39</td>
              <td>AMD Ryzen 5 5600G</td>
              <td><span className="status-online">● Online</span></td>
            </tr>
            
            <tr>
              <td><strong>ubuntu-web-node</strong></td>
              <td>192.168.1.51</td>
              <td>Ubuntu 22.04</td>
              <td>Intel i7-10700K</td>
              <td><span className="status-offline">○ Offline</span></td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default App;
