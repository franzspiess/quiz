import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import { Grid } from '@material-ui/core'

class App extends Component {
  render () {
    return (
      <Grid container style={{height:'100%', width:'100%',display:'flex', flexDirection:'column'}} alignContent='center' justifycontent='center'>
        <Grid item lg={8} md={12} sm={12} style={{height:'100%', width:'100%',display:'flex', flexDirection:'column', alignItems:'center', justifycontent:'center'}} >
          <Dashboard style={{ height: '100%', width: '100%',display:'flex', flexDirection:'column', alignItems:'center', justifycontent:'center' }} />
        </Grid>
      </Grid>
    );
  }

}

export default App;
