import Task from '../../TaskModel';
import TaskItem from './TaskItem';
import classes from './TasksList.module.css';

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TasksList = ({ tasks, setTasks }: Props) => {
  const tasksMap = tasks.map(task => (
    <TaskItem key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
  ));

  return <ul className={classes[`tasks-list`]}>{tasksMap}</ul>;
};

export default TasksList;
