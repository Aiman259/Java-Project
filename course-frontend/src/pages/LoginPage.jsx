export default function LoginPage() {
  return (
    <div style={{ maxWidth: '300px', margin: 'auto', textAlign: 'center' }}>
      <h1>🔑 Login</h1>
      <p>Please enter your credentials to continue.</p>
      <input type="text" placeholder="Username" style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px' }} />
      <input type="password" placeholder="Password" style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px' }} />
      <button style={{ padding: '10px 20px', cursor: 'pointer' }}>Login</button>
    </div>
  );
}