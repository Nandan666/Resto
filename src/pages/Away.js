import React from 'react'
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


const useStyles = makeStyles((theme) => ({
    container: {
      paddingTop: theme.spacing(0),
      marginLeft: theme.spacing(-3)
    },
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 1,
      textAlign: 'center',
      color: theme.palette.text.secondary,
      
      
      
    },

    search:{
     marginLeft :90
    },

    button:{
      padding: theme.spacing.unit * 1,
      textAlign: 'center',
      color: theme.palette.text.secondary,

    },

    icon:{
      marginLeft:theme.spacing(27)
    },

    input : {
        marginLeft:theme.spacing(5)
    },

    searchbar:{

        borderBottom: '1px solid black',
        borderTop: '1px solid black',
        borderRight: '1px solid black',
        borderLeft: '1px solid black'

    },

    gridbtn:{
      width:theme.spacing(17),
      backgroundColor:"black",
      color:"white"
    },

    gridbtns:{
      width:theme.spacing(17),
      backgroundColor:"blue",
      color:"white",
      borderRadius:theme.spacing(15),
      
    },
  
  
    papers:{
  
      padding: theme.spacing.unit * 1,
      textAlign: 'center',
      color: theme.palette.text.secondary,
      fontSize : 15,
      '&:hover':{
        backgroundColor : "grey"
      }
    },
  }));
  

const Content = () => {
    const classes = useStyles();
    return (
        <div>
         <Container  className={classes.container}>
         <div className={classes.root}>
         <Grid container spacing={3}>
         <Grid item xs={12}>

         <Paper  className={classes.searchbar}
      component="form"
      sx={{  display: 'flex', alignItems: 'center', width: 400 }}
    >
     
      <InputBase className={classes.input}
        sx={{ ml: 1, flex: 1 }}
        
        placeholder="Menu Search"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton className={classes.icon} type="submit"  aria-label="search">
        <SearchIcon />
      </IconButton>
      
     
    </Paper>
             </Grid>

             <Grid item xs={4}>
          <Button className={classes.gridbtn} variant="contained"   >Dine in</Button>
          
        </Grid>
        <Grid item xs={4}>
          <Button className={classes.gridbtn} variant="contained"   >
          <Link to='/delivery'>Delivery</Link></Button>
          
        </Grid>
        <Grid item xs={4}>
          <Button className={classes.gridbtn} variant="contained"   >Take Away</Button>
          
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.paper}>AC</Typography>
        </Grid>
        <Grid item xs={4}>
          <Button className={classes.gridbtns} variant="contained"   >Table 1</Button>
          
        </Grid>
        <Grid item xs={4}>
          <Button className={classes.gridbtns} variant="contained"   >Table 2</Button>
          
        </Grid>
        <Grid item xs={4}>
          <Button className={classes.gridbtns} variant="contained"   >Table 3</Button>
          
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6" className={classes.paper}>Non AC</Typography>
        </Grid>
        <Grid item xs={4}>
          <Button className={classes.gridbtns} variant="contained"   >Table 1</Button>
          
        </Grid>
        <Grid item xs={4}>
          <Button className={classes.gridbtns} variant="contained"   >Table 2</Button>
          
        </Grid>
        <Grid item xs={4}>
          <Button className={classes.gridbtns} variant="contained"   >Table 3</Button>
          
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6" className={classes.paper}>Garden/Terrace/Roftop</Typography>
        </Grid>

        <Grid item xs={4}>
          <Button className={classes.gridbtns} variant="contained"   >Table 1</Button>
          
        </Grid>
        <Grid item xs={4}>
          <Button className={classes.gridbtns} variant="contained"   >Table 2</Button>
          
        </Grid>
        <Grid item xs={4}>
          <Button className={classes.gridbtns} variant="contained"   >Table 3</Button>
          
        </Grid>

             </Grid>
             </div>

         </Container>
        </div>
    )
}

export default Content
