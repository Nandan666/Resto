import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { purple } from '@material-ui/core/colors'
import Layout from './components/Layout'
import Content from './pages/Content'
import RightBar from './pages/RightBar'
import Grid from '@material-ui/core/Grid'
import Delivery from './pages/Delivery'
import Away from './pages/Away'
import Table from './pages/Table'
import Bar from './pages/Bar'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },
    secondary: purple
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Grid container>
            <Route exact path="/">
            <Grid item sm={6} >
              <Content />
              </Grid>
              <Grid item sm={6} >
                <RightBar/>
                </Grid>
            </Route>
            <Route exact path="/delivery">
            <Grid item sm={6} >
              <Delivery />
              </Grid>
              <Grid item sm={6} >
                <RightBar/>
                </Grid>
            </Route>
            <Route exact path="/away">
            <Grid item sm={6} >
              <Away />
              </Grid>
              <Grid item sm={6} >
                <RightBar/>
                </Grid>
            </Route>
            <Route exact path="/table">
            <Grid item sm={12} >
              <Table />
              </Grid>

            </Route>
            <Route exact path="/bar">
            <Grid item sm={12} >
              <Bar />
              </Grid>

            </Route>
            
            </Grid>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
