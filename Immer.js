const todos = [
    {
      id: 1,
      text: '할 일 #1',
      done: true
    },
    {
      id: 2,
      text: '할 일 #2',
      done: false
    }
  ];
  
  const inserted = todos.concat({
    id: 3,
    text: '할 일 #3',
    done: false
  });
  
  const filtered = todos.filter(todo => todo.id !== 2);
  
  const toggled = todos.map(
    todo => todo.id === 2
      ? {
        ...todo,
        done: !todo.done,
      }
      : todo
  );