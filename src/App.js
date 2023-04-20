/* 
How to check the version of ReactJS ? - GeeksforGeeks
https://www.geeksforgeeks.org/how-to-check-the-version-of-reactjs/
 */
import React from 'react';

const App = () => {
  return <h1>
    We are currently using react version {React.version}
  </h1>;
}
export default App;