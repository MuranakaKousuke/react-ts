import React, { useState } from 'react'
import TaskList from '../src/components/TaskList';
import TaskInput from '../src/components/TaskInput';
import { Task } from '../src/components/Types';
import Button from '../src/components/atoms/Button';

const initialState: Task[] = [
  {
    id: 2,
    title: '次にやるやつ',
    done: false
  }, {
    id: 1,
    title: 'はじめにやるやつ',
    done: true
  }
]

const App: React.FC = () => {
  const [tasks, setTasks] = useState(initialState)

  return (
    <div>
      <TaskInput setTasks={setTasks} tasks={tasks} />
      <TaskList setTasks={setTasks} tasks={tasks} />
      <Button>ボタン</Button>
    </div>
  )
}

export default App;
