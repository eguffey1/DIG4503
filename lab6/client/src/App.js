
import React from 'react';
import './App.css';
import ReadName from './components/ReadName';
import ReadId from './components/ReadId';
import ReportingArea from './components/ReportingArea'

class App extends React.Component {
  render() {
    return (
      <div>
        <ReadName/>
        <ReadId/>
        <ReportingArea/>
      </div>
    )
  }
}

export default App;
