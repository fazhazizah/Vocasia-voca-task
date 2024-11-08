import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import UpdateProfile from './pages/UpdateProfile';
import Task from './pages/Task';
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  console.log("app email", email);
  return (
    <Routes> 
      <Route path="/" element={<Login setName={setName}  setEmail={setEmail} />} />
      <Route path="/task/main" element={<Task name={name}   />} />
      <Route path="/profile" element={<UpdateProfile name={name} setName={setName}  email={email} setEmail={setEmail}  />}/>
    </Routes>
  );
}

export default App;
