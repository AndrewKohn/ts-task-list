import { useEffect, useState } from 'react';
import classes from './App.module.css';
import Input from './components/Input';
import TasksList from './components/TasksList/TasksList';
import Task from './TaskModel';

let idCount: number = 0;

const App: React.FC = () => {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTaskHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (task) {
      setTasks([...tasks, { id: idCount, task, isComplete: false }]);
      setTask('');
    }
    idCount++;
  };

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <main className={classes.main}>
      <h1>Task List</h1>
      <p className={classes[`sub-heading`]}>
        Utilizing <span>TypeScript</span> & <span>React</span>
      </p>

      <Input task={task} setTask={setTask} addTaskHandler={addTaskHandler} />
      <TasksList tasks={tasks} setTasks={setTasks} />
    </main>
  );
};

export default App;
