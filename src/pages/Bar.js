import React from 'react'
import Paper from '@material-ui/core/Paper'
import { CardHeader, InputBase } from '@material-ui/core'
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
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';



const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );


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
      marginLeft:theme.spacing(1),
      color: "primary",
      backgroundColor:"secondary",
      
      borderRadius:50,
      fontSize : 15,
      '&:hover':{
        backgroundColor : "grey"
      }
    },

    group : {
      minWidth:theme.spacing(25),
      marginTop:theme.spacing(3),
      maxHeight:theme.spacing(3),
      backgroundColor:"#1b183d",
      color:"white"

      
     
      
    },

    groups : {
      minWidth:theme.spacing(25),
      marginTop:theme.spacing(2),
      maxHeight:theme.spacing(3),
      backgroundColor:"#1b183d",
      color:"white",
      borderRadius:theme.spacing(5)

      
     
      
    },

    card:{
        height:theme.spacing(5),
        width:theme.spacing(5)
    },

    buttons:{
      minHeight : theme.spacing(18),
        minWidth:theme.spacing(45),
        borderRadius:theme.spacing(5),
        marginTop:theme.spacing(7),
        marginLeft:theme.spacing(8),
       color:"secondary"
    },

    button:{
      minHeight : theme.spacing(18),
        minWidth:theme.spacing(45),
        borderRadius:theme.spacing(5),
        marginTop:theme.spacing(7),
        marginLeft:theme.spacing(36)
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
        
         <Card sx={{ minWidth: 275 }}>
     
     <CardContent className={classes.card}>
        
             Table 2 Dinein
    <Divider orientation="vertical" />

             Dispatch
         
     </CardContent>
    </Card>
    

    
       
        
        
        </Grid>
        <Grid item xs={4}>
      
      
       
         
      
          
        </Grid>

        <Grid item xs={4}>
      
      
      
     
  
      
    </Grid>

    <Grid item xs={4}>
        
   
       
    
    </Grid>

    <Grid item xs={4}>
      
      
       
   
      
    </Grid>

    <Grid item xs={4}>
      
      
       
     
  
      </Grid>

      <Grid item xs={4}>
        
     
        
   </Grid>
        
         </Grid>
             </div>

         </Container>
        </div>
    )
}

export default Content
