import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import CameraIcon from '@material-ui/icons/PhotoCamera'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Built with love by the '}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI
      </Link>
      {' team.'}
    </Typography>
  )
}
const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    // backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  wt40: {
    background: 'purple',
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}))

const cards = [1, 2]

export default function Album() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Software Top 40
            </Typography>
            <Typography
              component="p"
              variant="body1"
              align="justify"
              color="textSecondary"
              paragraph
            >
              A collection of Top 40 playlists for developers based on data from thousands of
              coders. We track the number of times a song is played while developers are coding and
              their coding intensity. Every week we publish the to coding songs developers are
              listening to as they recode the world. Code on!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item xs={12}>
                  <Typography
                    component="h4"
                    variant="h4"
                    align="center"
                    color="textPrimary"
                    className={classes.wt40}
                    gutterBottom
                  >
                    WEEKLY TOP 40
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    component="h4"
                    variant="h4"
                    align="center"
                    color="textPrimary"
                    gutterBottom
                  >
                    ARTISTS TOP 40
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    component="h4"
                    variant="h4"
                    align="center"
                    color="textPrimary"
                    gutterBottom
                  >
                    GENRES TOP 40
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Trending this week
            </Typography>
            <Typography
              component="p"
              variant="body1"
              align="justify"
              color="textSecondary"
              paragraph
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nunc elit, sodales ac
              lectus vitae, lacinia gravida lorem. Nunc sit amet lorem condimentum, viverra purus
              quis, malesuada magna.
            </Typography>
          </Container>
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={6}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="body2" align="center" color="textSecondary" component="p">
          &copy; 2019 Software. All rights reserved.
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  )
}
