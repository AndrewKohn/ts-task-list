import Task from '../../TaskModel';
import TaskItem from './TaskItem';
import classes from './TasksList.module.css';

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  completedTasks: Task[];
  setCompletedTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TasksList = ({
  tasks,
  setTasks,
  completedTasks,
  setCompletedTasks,
}: Props) => {
  const activeTasksMap = tasks.map(task => (
    <TaskItem key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
  ));

  return (
    <div className={classes.container}>
      <div className={`${classes.column} ${classes['active-tasks']}`}>
        <h2 className={classes.subheading}>Active</h2>
        <ul className={classes[`tasks-list`]}>{activeTasksMap}</ul>
      </div>

      <div className={`${classes.column} ${classes['completed-tasks']}`}>
        <h2 className={classes.subheading}>Completed</h2>
        <ul className={classes[`tasks-list`]}>{activeTasksMap}</ul>
      </div>
      {/* <ul className={classes[`tasks-list`]}>{tasksMap}</ul> */}
    </div>
  );
};

export default TasksList;
