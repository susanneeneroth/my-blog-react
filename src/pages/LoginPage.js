import { useState } from 'react';
import { Auth } from 'aws-amplify';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            await Auth.signIn(email, password);
            alert("Logged in");
        } catch (e) {
            alert(e.message);
        }
    }

    return ( 
        <div className="form">
            <h2>Login page</h2>
            <form onSubmit={handleSubmit}>
            <label>Email: </label>
            <input 
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
              <label>Password: </label>
              <input 
              type="text"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" disabled={!validateForm()}>Login</button>

            </form>
        </div>
     );
}
 
export default LoginPage;