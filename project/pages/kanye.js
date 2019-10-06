import {useEffect, useState} from "react";
import {Container, LinearProgress, Paper, Typography} from "@material-ui/core";

import "../styles.scss";

function Kanye () {

  const [
      quote,
      setQuote
    ] = useState(""),
    [
      loadingQuote,
      setLoading
    ] = useState(true);

  useEffect(() => {

    if (loadingQuote) {

      fetch("https://api.kanye.rest/").
        then((response) => response.json()).
        then((data) => {

          setQuote(data.quote);
          setLoading(false);

        }).
        catch((err) => console.log(err));

    }

  });

  return (
      <Container>
        <Paper>
          <Typography
          variant="h5"
            component="h3"
        >
                    In the words of Kanye..
        </Typography>
          {
          loadingQuote
            ? <LinearProgress />
            : <Typography component="p">
                {quote}
              </Typography>
        }
      </Paper>
    </Container>
  );

}

export default Kanye;
