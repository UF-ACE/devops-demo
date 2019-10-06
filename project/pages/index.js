import {Avatar, Grid} from "@material-ui/core";

import "../styles.scss";

function Home () {

  return (
      <Grid
      container
        justify="center"
        alignItems="center"
        direction="column"
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
  );

}

export default Home;
