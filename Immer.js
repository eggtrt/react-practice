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

  const state = {
    posts: [
      {
        id: 1,
        title: '제목입니다.',
        body: '내용입니다.',
        comments: [
          {
            id: 1,
            text: '와 정말 잘 읽었습니다.'
          }
        ]
      },
      {
        id: 2,
        title: '제목입니다.',
        body: '내용입니다.',
        comments: [
          {
            id: 2,
            text: '또 다른 댓글 어쩌고 저쩌고'
          }
        ]
      }
    ],
    selectedId: 1
  };

  const nextState = {
    ...state,
    posts: state.posts.map(post =>
      post.id === 1
        ? {
            ...post,
            comments: post.comments.concat({
              id: 3,
              text: '새로운 댓글'
            })
          }
        : post
    )
  };

  const nextState = produce(state, draft => {
    const post = draft.posts.find(post => post.id === 1);
    post.comments.push({
      id: 3,
      text: '와 정말 쉽다!'
    });
  });