import { useState } from 'react';
import Task from '../../TaskModel';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import classes from './TaskItem.module.css';

type Props = {
  task: Task;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

const TaskItem = ({ task, tasks, setTasks }: Props) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<string>(task.task);

  const taskEditHandler = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTasks(
      tasks.map(task => (task.id === id ? { ...task, task: editTask } : task))
    );
    setIsEdit(false);
  };

  const taskDeleteHandler = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const taskCompleteHandler = (id: number) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, isComplete: !task.isComplete } : task
      )
    );
  };

  return (
    <li key={task.id} className={classes[`task-item`]}>
      <form onSubmit={e => taskEditHandler(e, task.id)}>
        {isEdit ? (
          <input
            autoFocus
            value={editTask}
            onChange={e => setEditTask(e.target.value)}
          />
        ) : task.isComplete ? (
          <s>{task.task}</s>
        ) : (
          <p>{task.task}</p>
        )}
      </form>

      <div className={classes.buttons}>
        <button
          className={classes.button}
          onClick={() => {
            if (!isEdit && !task.isComplete) {
              setIsEdit(!isEdit);
            }
            console.log(isEdit);
          }}
        >
          <div className={classes.icon}>
            <AiFillEdit />
          </div>
        </button>
        <button
          className={classes.button}
          onClick={() => taskDeleteHandler(task.id)}
        >
          <div className={classes.icon}>
            <AiFillDelete />
          </div>
        </button>
        <button
          className={classes.button}
          onClick={() => taskCompleteHandler(task.id)}
        >
          <div className={classes.icon}>
            <MdDone />
          </div>
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
