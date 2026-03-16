
const HostTable = ({ hosts, scanHost }) => {
  return (
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
        {hosts.length === 0 ? (
          <tr><td colSpan="5">No hosts found. Add an IP above to start.</td></tr>
        ) : (
          hosts.map(host => (
            <tr key={host.id}> 
              <td><strong>{host.hostname}</strong></td>
              <td>{host.ip_address}</td>
              <td>{host.os_name || '—'}</td>
              <td>{host.cpu_model || '—'}</td>
              <td>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <span className={host.is_online ? 'status-online' : 'status-offline'}>
                    {host.is_online ? '●' : '○'}
                  </span>
                  <button 
                    onClick={() => scanHost(host.id)}
                    style={{ padding: '4px 8px', fontSize: '12px', cursor: 'pointer' }}
                  >
                    Scan Now
                  </button>
                </div>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default HostTable;
