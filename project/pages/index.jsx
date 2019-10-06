import '../styles.scss'
import {Avatar, Grid} from '@material-ui/core'
import React from 'react'


const Home = () => (
  <Grid
    alignItems="center"
    container
    direction="column"
    justify="center"
  >
    <h1>
      When Digital Logic tells you to update your Canvas Profile Photo
    </h1>
    <Grid
      item
      xs={12}
    >
      <Avatar src="/static/cat.jpg" />
    </Grid>
  </Grid>
)

export default Home
