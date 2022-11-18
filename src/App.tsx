import { useState } from 'react';
import classes from './App.module.css';
import Input from './components/Input';
import Task from './TaskModel';

let count: number = 0;

const App: React.FC = () => {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTaskHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (task) {
      setTasks([...tasks, { id: count, task, isComplete: false }]);
      setTask('');
    }
    count++;
  };

  console.log(tasks);

  return (
    <main className={classes.main}>
      <h1>Task List</h1>
      <p className={classes[`sub-heading`]}>
        Utilizing <span>TypeScript</span> & <span>React</span>
      </p>

      <Input task={task} setTask={setTask} addTaskHandler={addTaskHandler} />
      {tasks.map(task => (
        <li key={task.id}>{task.task}</li>
      ))}
    </main>
  );
};

export default App;
