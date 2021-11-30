import Paper from '@material-ui/core/Paper'
import { InputBase } from '@material-ui/core'
import Divider from '@material-ui/core/Divider'
import { IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import DirectionsIcon from '@material-ui/icons/Directions'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'

import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import { useHistory, useLocation } from 'react-router-dom'
import { ButtonGroup } from '@material-ui/core'
import Box from '@material-ui/core/Box'


const useStyles = makeStyles((theme) => ({
    container: {
      paddingTop: theme.spacing(0),
      marginLeft: theme.spacing(-3)
    },
    root: {
      flexGrow: 1,
    },
    papers:{
  
      padding: theme.spacing.unit * 1,
      textAlign: 'center',
      marginLeft:theme.spacing(0.5),
      height:theme.spacing(3),
      color: "primary",
      backgroundColor:"#d500f9",
      marginTop:theme.spacing(2),
      width:theme.spacing(6),
      
      borderRadius:50,
      fontSize : 15,
     
    },

    group : {
      minWidth:theme.spacing(25),
      marginTop:theme.spacing(3),
      maxHeight:theme.spacing(3),
      backgroundColor:"#252154",
      color:"white"

      
     
      
    },

    groups : {
      minWidth:theme.spacing(25),
      marginTop:theme.spacing(2),
      maxHeight:theme.spacing(3),
      backgroundColor:"#252154",
      color:"white",
      borderRadius:theme.spacing(8)

      
     
      
    },

    buttons:{
      minHeight : theme.spacing(18),
        minWidth:theme.spacing(45),
        borderRadius:theme.spacing(5),
        marginTop:theme.spacing(7),
        marginLeft:theme.spacing(8),
       color:"secondary",
       backgroundColor:theme.spacing("primary")
    },


    paperac:{
       
      marginTop:theme.spacing(-8),
      maxHeight:theme.spacing(100),
      backgroundColor:"#151047",
      width:theme.spacing(32),
      marginRight:theme.spacing(6)
    },
    

    tablebtn:{
      backgroundColor:"#1b183d",
      minHeight : theme.spacing(18),
      minWidth:theme.spacing(48),
      borderRadius:theme.spacing(5),
      marginTop:theme.spacing(7),
      marginLeft:theme.spacing(2),
    },


    button:{
      minHeight : theme.spacing(18),
        minWidth:theme.spacing(45),
        borderRadius:theme.spacing(5),
        marginTop:theme.spacing(7),
        marginLeft:theme.spacing(25),
        backgroundColor:"#1b183d",
    },

    acbtns : {

      backgroundColor: "#a81fbf",
      marginRight:theme.spacing(1.5),
      marginLeft:theme.spacing(1.1),
      marginTop:theme.spacing(0.5),
      marginBottom:theme.spacing(0.2),
      borderRadius:theme.spacing(2)

    },

    acbtn : {
      marginTop:theme.spacing(2),
      
      marginLeft:theme.spacing(11),
      backgroundColor:"#d500f9",
      height:theme.spacing(5),
      width:theme.spacing(5),
      fontSize:theme.spacing(1.4),
      color:"white"
    }
    
  }));


  const buttons = [
  <Button key="one" color="white">Table Reservation </Button>,
  <Button key="two">Add Table Section</Button>,
  <Button key="three">Add Table</Button>,
];
  

const Content = () => {
    const classes = useStyles();
    return (
        <div>
         <Container  className={classes.container}>
         <div className={classes.root}>
         <Grid container spacing={3}>
         <Grid item xs={3}>
        
         <Button  color="blue" className={classes.group} variant="contained">Table Reservation
        </Button>
        <Button className={classes.group} variant="contained">Add Table Section</Button>
        <Button className={classes.group} variant="contained">Add Table</Button>
       
    

    
       
        
        
        </Grid>
        <Grid item xs={3}>
      
      
       
      
      <Button className={classes.group}>AC</Button>
      

  
      
    </Grid>

    <Grid item xs={3}>
      
      
      
    
      <Button className={classes.group}>Non AC</Button> 
      
     
  
      
    </Grid>

    <Grid item xs={3}>
      
      
      
    
      <Button className={classes.group}>Garden</Button> 
      
     
  
      
    </Grid>

    <Grid item xs={3}>
        
        <Button  color="blue" className={classes.groups} variant="contained">Vacant Table
            </Button>
            <Button className={classes.groups} variant="contained">Booked Table</Button>
            <Button className={classes.groups} variant="contained">Orders Accepted</Button>
            <Button className={classes.groups} variant="contained">Payment Due</Button>
           
        
        </Grid>

        <Grid item xs={3}>
      <Paper className={classes.paperac}>
      <Button className={classes.acbtns}>1</Button>
        <Button className={classes.acbtns}>2 </Button>
        <Button className={classes.acbtns}>3</Button>

        <Button className={classes.acbtns}>4</Button>
        <Button className={classes.acbtns}>5</Button>
        <Button className={classes.acbtns}>6</Button>
        <Button className={classes.acbtns}>7</Button>

        <Button className={classes.acbtns}>8</Button>
        <Button className={classes.acbtns}>9</Button>
        <Button className={classes.acbtns}>10</Button>
        <Button className={classes.acbtns}>11</Button>

        <Button className={classes.acbtns}>12</Button>
        <Button className={classes.acbtns}>13</Button>
        <Button className={classes.acbtns}>14</Button>
        <Button className={classes.acbtns}>15</Button>
        <Button className={classes.acbtns}>16</Button>

        <Button className={classes.acbtns}>17</Button>
        <Button className={classes.acbtns}>18</Button>
        <Button className={classes.acbtns}>19</Button>
        <Button className={classes.acbtns}>20</Button>
        <Button className={classes.acbtns}>21</Button>

        <Button className={classes.acbtns}>22</Button>
        <Button className={classes.acbtns}>23</Button>

        <Button className={classes.acbtns}>24</Button>
      </Paper>
        
        </Grid>

        <Grid item xs={3}>
        <Paper className={classes.paperac}>
      <Button className={classes.acbtns}>1</Button>
        <Button className={classes.acbtns}>2 </Button>
        <Button className={classes.acbtns}>3</Button>

        <Button className={classes.acbtns}>4</Button>
        <Button className={classes.acbtns}>5</Button>
        <Button className={classes.acbtns}>6</Button>
        <Button className={classes.acbtns}>7</Button>

        <Button className={classes.acbtns}>8</Button>
        <Button className={classes.acbtns}>9</Button>
        <Button className={classes.acbtns}>10</Button>
        <Button className={classes.acbtns}>11</Button>

        <Button className={classes.acbtns}>12</Button>
        <Button className={classes.acbtns}>13</Button>
        <Button className={classes.acbtns}>14</Button>
        <Button className={classes.acbtns}>15</Button>
        <Button className={classes.acbtns}>16</Button>

        <Button className={classes.acbtns}>17</Button>
        <Button className={classes.acbtns}>18</Button>
        <Button className={classes.acbtns}>19</Button>
        <Button className={classes.acbtns}>20</Button>
        <Button className={classes.acbtns}>21</Button>

        <Button className={classes.acbtns}>22</Button>
        <Button className={classes.acbtns}>23</Button>

        <Button className={classes.acbtns}>24</Button>
      </Paper>        </Grid>

        <Grid item xs={3}>
        <Paper className={classes.paperac}>
      <Button className={classes.acbtns}>1</Button>
        <Button className={classes.acbtns}>2 </Button>
        <Button className={classes.acbtns}>3</Button>

        <Button className={classes.acbtns}>4</Button>
        <Button className={classes.acbtns}>5</Button>
        <Button className={classes.acbtns}>6</Button>
        <Button className={classes.acbtns}>7</Button>

        <Button className={classes.acbtns}>8</Button>
        <Button className={classes.acbtns}>9</Button>
        <Button className={classes.acbtns}>10</Button>
        <Button className={classes.acbtns}>11</Button>

        <Button className={classes.acbtns}>12</Button>
        <Button className={classes.acbtns}>13</Button>
        <Button className={classes.acbtns}>14</Button>
        <Button className={classes.acbtns}>15</Button>
        <Button className={classes.acbtns}>16</Button>

        <Button className={classes.acbtns}>17</Button>
        <Button className={classes.acbtns}>18</Button>
        <Button className={classes.acbtns}>19</Button>
        <Button className={classes.acbtns}>20</Button>
        <Button className={classes.acbtns}>21</Button>

        <Button className={classes.acbtns}>22</Button>
        <Button className={classes.acbtns}>23</Button>

        <Button className={classes.acbtns}>24</Button>
      </Paper>
        </Grid>

        
      <Grid item xs={3}>
        
        <Button  color="blue" className={classes.group} variant="contained">Delete Section
          </Button>
          <Button className={classes.group} variant="contained">Delete Table</Button>
          
     </Grid>


         </Grid>
             </div>

         </Container>
        </div>
    )
}

export default Content