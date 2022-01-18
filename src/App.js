import logo from './logo.svg';
import './App.css';
import EducationDetails from './components/EducationDetails';
 import 'bootstrap/dist/css/bootstrap.min.css'
import PersonDetails from './components/PersonDetails';
import ProjectsDeveloped from './components/ProjectsDeveloped';
import ExperienceDetails from './components/ExperienceDetails';
import ExtraDetails from './components/ExtraDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
// import { IconName} from 'bootstrap-icons/bs'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));



function App() {
  const classes=useStyles()
  return (
    <Router>
    <div className="App">
    <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"><MenuIcon /></IconButton>
                <Typography variant="h4" className={classes.title}>Resume Builder</Typography>
            </Toolbar>
        </AppBar>
      
      <Switch>
      <Route exact path='/'>
      <PersonDetails/>
      </Route>
      <Route  path='/educationDetails'>
      <EducationDetails />
      </Route>
      <Route  path='/projectDeveloped'>
      <ProjectsDeveloped/>
      </Route>
      <Route path='/experienceDetails'>
      <ExperienceDetails/>
      </Route>
      <Route  path='/extraDetails'>
      <ExtraDetails/>
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
