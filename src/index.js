import React from 'react';
import { render } from 'react-dom';

const SimpleComponent = props => <div>This is a &lt;SimpleComponent/&gt;</div>

const App = () => (
  <div>
    <SimpleComponent/>
  </div>
);

render(<App />, document.getElementById('root'));
