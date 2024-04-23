import React, { Component } from 'react'
import Grid from '@mui/joy/Grid';


export default class App extends Component {
  render() {
    return (
      <div class="app">
      <Grid container sx ={{ flexGrow: 1}} direction={"column"} border={'1px solid lime'}>

        <Grid container sx = {{ flexGrow: 1 }} border={'1px solid red'} >
          Navbar
        </Grid>
        <Grid container sx = {{ flexGrow: 1 }} border={'1px solid blue'}>
          Content
        </Grid>

      </Grid>
      </div>
    )
  }
}