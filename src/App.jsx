import styles from './App.module.css';
import Main from './pages/Main.jsx';
import Enter from './pages/Enter.jsx';
import { UserProvider } from './context/userContext.jsx';

function App() {

  return (
    <div className={styles['page-wrapper']}>
      <UserProvider>
        <Main />
        <Enter />
      </UserProvider>
    </div>
  );
}

export default App;
