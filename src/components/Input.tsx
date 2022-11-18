import { useRef } from 'react';
import classes from './Input.module.css';

interface Props {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  addTaskHandler: (e: React.FormEvent) => void;
}

const Input = ({ task, setTask, addTaskHandler }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      action=""
      className={classes.input}
      onSubmit={e => {
        addTaskHandler(e);
        inputRef.current?.blur();
      }}
    >
      <input
        type="input"
        ref={inputRef}
        placeholder="Enter a task"
        className={classes[`input--box`]}
        value={task}
        onChange={e => {
          setTask(e.target.value);
        }}
      />
      <button className={classes[`input--submit-btn`]}>Enter</button>
    </form>
  );
};

export default Input;
