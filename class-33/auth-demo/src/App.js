import logo from './logo.svg';
import './App.css';
import Auth from './components/Auth';
import Login from './components/Login';
import AuthProvider from './context/auth';
const EditLink = (props) => {
  return (
    <Auth capability="update">
      <span>Edit</span>
    </Auth>
  );
};
const DeleteLink = (props) => {
  return (
    <Auth capability="delete">
      <span>Delete</span>
    </Auth>
  );
};
function App() {
  return (
    <AuthProvider>
      <Login />
      <EditLink />
      <DeleteLink />
    </AuthProvider>
  );
}

export default App;
