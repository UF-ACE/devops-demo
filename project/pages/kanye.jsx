import '../styles.scss'
import {Container, LinearProgress, Paper, Typography} from '@material-ui/core'
import React, {useEffect, useState} from 'react'

const Kanye = () => {
  const [
      quote,
      setQuote
    ] = useState(''),
    [
      loadingQuote,
      setLoading
    ] = useState(true)

  useEffect(() => {
    if (loadingQuote) {
      fetch('https://api.kanye.rest/').
        then((response) => response.json()).
        then((data) => {
          setQuote(data.quote)
          setLoading(false)
        })
    }
  })

  let quoteElement = <LinearProgress />

  if (!loadingQuote) {
    quoteElement = (
      <Typography component="p">
        {quote}
      </Typography>
    )
  }

  return (
    <Container>
      <Paper>
        <Typography
          component="h3"
          variant="h5"
        >
          In the words of Kanye..
        </Typography>
        {quoteElement}
      </Paper>
    </Container>
  )
}

export default Kanye
