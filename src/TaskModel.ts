import { useReducer } from 'react';

export default interface Task {
  id: number;
  task: string;
  isComplete: boolean;
}

// [TODO] Implement useReducer within app.

// type Actions =
//   | {
//       type: 'add';
//       payload: string;
//     }
//   | {
//       type: 'remove';
//       payload: number;
//     }
//   | {
//       type: 'complete';
//       payload: number;
//     };

// let idCount: number = -1;

// const TaskReducer = (state: Task[], action: Actions) => {
//   switch (action.type) {
//     case 'add':
//       return [
//         ...state,
//         { id: idCount++, task: action.payload, isComplete: false },
//       ];
//     case 'remove':
//       return state.filter(task => task.id !== action.payload);
//     case 'complete':
//       return state.map(task =>
//         task.id !== action.payload
//           ? { ...task, isComplete: !task.isComplete }
//           : task
//       );
//     default:
//       return state;
//   }
// };

// const ReducerExample = () => {
//   const [state, dispatch] = useReducer(TaskReducer, []);

//   return <div />;
// };
