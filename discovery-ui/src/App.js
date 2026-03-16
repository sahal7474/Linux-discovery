import { useState, useEffect } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import HostForm from './components/HostForm';
import HostTable from './components/HostTable';

function App() {
  const [hosts, setHosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newIp, setNewIp] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const getHostsData = () => {
    setLoading(true);
    fetch('http://127.0.0.1:8000/api/hosts/')
      .then(res => res.json())
      .then(data => {
        setHosts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => { getHostsData(); }, []);

  const addHost = () => {
    if (!newIp) return alert("Please enter an IP address");
    fetch('http://127.0.0.1:8000/api/hosts/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ip_address: newIp, hostname: "Pending..." })
    }).then(() => {
      setNewIp("");
      getHostsData();
    });
  };

  const scanHost = (hostId) => {
    if (!username || !password) return alert("Enter SSH credentials!");
    fetch(`http://127.0.0.1:8000/api/hosts/${hostId}/run_discovery/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    })
    .then(() => {
      setUsername("");
      setPassword("");
      getHostsData();
    })
    .catch(err => alert(err.message));
  };

  return (
    <div className="app-wrapper">
      <Navigation />

      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1>Host Inventory</h1>
          <button className="refresh-btn" onClick={getHostsData}>↻ Refresh List</button>
        </div>

        <p>Total Managed Hosts: {hosts.length}</p>

        <HostForm 
          newIp={newIp} setNewIp={setNewIp}
          username={username} setUsername={setUsername}
          password={password} setPassword={setPassword}
          addHost={addHost}
        />

        {loading ? <p>Loading...</p> : (
          <HostTable hosts={hosts} scanHost={scanHost} />
        )}
      </div>
    </div>
  );
}

export default App;
