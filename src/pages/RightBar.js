import React from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import FastFoodIcon from '@material-ui/icons/Fastfood'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import faker from 'faker';
import TableFooter from '@material-ui/core/Table'
import TablePagination from '@material-ui/core/Table'
import { Divider } from '@material-ui/core'



function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  
  createData(1 ),
  
  createData(2),
  createData(3),
  createData(4),
  createData(5),
  createData(6),
  createData(7),
  createData(8),
  createData(9),
  
];

const row = [
  createData(7 ),


  
];








const useStyles = makeStyles((theme) => ({
    container: {
      paddingTop: theme.spacing(0),
      marginLeft: theme.spacing(-3),
      marginRight:theme.spacing(9)
    },
    
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 1,
      textAlign: 'center',
      color: theme.palette.text.secondary,
      
      
      
    },

    tabcell : {
       backgroundColor:'#130f40',
       color:'white',
       fontSize:theme.spacing(1.4)
      
    },

    row : {
      borderBottom:theme.spacing(13)
    },

    btns :{

     marginBottom : 5,
     height:25,
     width:100
    },

    gridbtn:{
        width:theme.spacing(12),
        height:theme.spacing(3),
        marginBottom:theme.spacing(0.5),
        backgroundColor:"black",
        color:"white",
        
      },

      gridbtn1:{
        marginLeft:theme.spacing(4),
        width:theme.spacing(10),
        height:theme.spacing(6),
        marginBottom:theme.spacing(0.5),
        backgroundColor:'#130f40',
        color:"white",
        borderRadius:theme.spacing(4),
        display:"flex",
        fontSize:theme.spacing(2)
      },

     
  
    papers:{
  
      padding: theme.spacing.unit * 2,
      
      textAlign: 'center',
      
      color: theme.palette.text.secondary,
      borderRadius:90,
      fontSize : 16,
      height : 30,
      '&:hover':{
        backgroundColor : "grey"
      }
    },
  }));
  



   


const RightBar = () => {
    const classes = useStyles();
    return (
        <div>
           <Container className={classes.container}>
     <div className={classes.root}>
      <Grid container spacing={2}>
          
        <Grid item xs={3}>
        <Button className={classes.gridbtn} variant="contained"   >Dine in</Button>
        <Button className={classes.gridbtn} variant="contained"   >Delivery</Button>
        <Button className={classes.gridbtn} variant="contained"   >TakeAway</Button>
        </Grid>
        <Grid item xs={9}>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow className={classes.row}>
            <TableCell className={classes.tabcell}>Orders </TableCell>
            <TableCell className={classes.tabcell} >Preparing</TableCell>
            <TableCell className={classes.tabcell}>Ready</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {row.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell >5</TableCell>
              <TableCell >4</TableCell>
             
            </TableRow>
            
          ))}


        </TableBody>
      </Table>
    </TableContainer>
          </Grid>

          <Grid item xs={12}>
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow className={classes.row}>
         

            
            <TableCell className={classes.tabcell}> Sr No </TableCell>
            <TableCell className={classes.tabcell} align="right">Item</TableCell>
            <TableCell className={classes.tabcell} align="right">Price</TableCell>
            <TableCell className={classes.tabcell} align="right">Qty</TableCell>
            <TableCell className={classes.tabcell} align="right">Total Amt</TableCell>
            <TableCell className={classes.tabcell} align="right">Delete Amt</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
            
          ))}

<TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Sub total</TableCell>
            <TableCell >Discount</TableCell>
            <TableCell >Service </TableCell>
            <TableCell></TableCell>
            
          </TableRow>
          <TableRow>
          <TableCell colSpan={2}>SGST</TableCell>
            <TableCell >CGST</TableCell>
            <TableCell ></TableCell>
            <TableCell ></TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total Amount</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
</Grid>
<Grid item xs={2}>
          <Button className={classes.gridbtn1} variant="contained"   >Split</Button>
          
        </Grid>
        <Grid item xs={2}>
          <Button className={classes.gridbtn1} variant="contained"   >Pause </Button>
          
        </Grid>

        <Grid item xs={2}>
          <Button className={classes.gridbtn1} variant="contained"   >E-Bill</Button>
          
        </Grid>
        <Grid item xs={2}>
          <Button className={classes.gridbtn1} variant="contained"   >KOT</Button>
          
        </Grid>

        <Grid item xs={2}>
          <Button className={classes.gridbtn1} variant="contained"   >Cancel </Button>
          
        </Grid>
        </Grid>
        </div>
        </Container>
        </div>
    )
}

export default RightBar
