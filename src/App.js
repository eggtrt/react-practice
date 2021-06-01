import React, { useMemo, useState } from 'react';
import Hello from './hello';
import Wrapper from './Wrapper';

function countActiveUsers (users) {
  console.log('count users...');
  return users.filter(user => user.active).length
}
function App() {
  const [user, setUser] = useState();
  const count = useMemo(countActiveUsers(users), [user]);
  return (
    <>
    <Hello name="react" color="red"></Hello>
    <Wrapper></Wrapper>
    </>
  );
}

export default App;
