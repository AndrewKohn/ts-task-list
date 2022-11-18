import classes from './App.module.css';

function App() {
  return (
    <main className={classes.main}>
      <h1>Task List</h1>
      <p className={classes[`sub-heading`]}>
        Utilizing <span>TypeScript</span> & <span>React</span>
      </p>
    </main>
  );
}

export default App;
