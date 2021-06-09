import React, { useMemo, useState } from 'react';
import Hello from './hello';
import InputSample from './InputSample';
import Wrapper from './Wrapper';

function countActiveUsers (users) {
  console.log('count users...');
  return users.filter(user => user.active).length
}
function App() {
  return (
    <>
    <InputSample></InputSample>
    <Wrapper></Wrapper>
    </>
  );
}

export default App;
