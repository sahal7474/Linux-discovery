
const HostForm = ({ 
  newIp, setNewIp, 
  username, setUsername, 
  password, setPassword, 
  addHost 
}) => {
  return (
    <div className="form-section">
      <div className="add-host-form" style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <input 
          type="text" 
          placeholder="Enter IP Address (e.g. 192.168.1.50)" 
          value={newIp}
          onChange={(e) => setNewIp(e.target.value)}
          style={{ padding: '8px', flex: '1', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button className="refresh-btn" onClick={addHost}>+ Add Host</button>
      </div>

      <div className="credentials-bar" style={{ marginBottom: '20px', display: 'flex', gap: '10px', background: '#eee', padding: '10px', borderRadius: '4px' }}>
        <input 
          type="text" 
          placeholder="SSH Username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <input 
          type="password" 
          placeholder="SSH Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </div>
    </div>
  );
};

export default HostForm;
