import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './gridpapers.css'

function Gridpapers(props) {

        return (
        <div>
            {
             
            props.value=='Pricing' ? 

            <div id="priceexecption">
            <Grid container justify="center" spacing={2} style={{paddingRight:"315px"}}>
            <Grid key={0} item>
                <Paper style={{width:"300px",height:"600px",padding:"20px"}}>{props.data}<br/>
                <strong style={{paddingLeft:"60px"}}>View Pricing Plan</strong>
            </Paper></Grid>
                <Grid key={1} item>
                <Paper style={{width:"300px",height:"600px",padding:"20px"}}>{props.data}<br/>
                <strong style={{paddingLeft:"60px"}}>View Pricing Plan</strong></Paper></Grid>
                <Grid key={2} item>
                <Paper style={{width:"300px",height:"600px",padding:"20px"}}>{props.data}<br/>
                <strong style={{paddingLeft:"60px"}}>View Pricing Plan</strong></Paper></Grid>
        
                </Grid>          
            </div>
    
                :

                <Grid container justify="center" spacing={2}>
                <Grid key={0} item>
                    <Paper style={{width:"300px",height:"600px",padding:"20px"}}>{props.data}<br/>
                   {props.value=='Screenshots' ? <button value="view more" className="btttn viewmore">View More</button> :  <br/>} 
                </Paper></Grid>
                    <Grid key={1} item>
                    <Paper style={{width:"300px",height:"600px",padding:"20px"}}>{props.data}<br/>
                    {props.value=='Screenshots' ? <button value="view more" className="btttn viewmore">View More</button> :  <br/>} 
                    </Paper></Grid>
                    <Grid key={2} item>
                    <Paper style={{width:"300px",height:"600px",padding:"20px"}}>{props.data}<br/>
                    {props.value=='Screenshots' ? <button value="view more" className="btttn viewmore">View More</button> :  <br/>} 
                    </Paper></Grid>
                   <Grid key={3} item>
                        
                        <Paper style={{width:"300px",height:"600px",padding:"20px"}}>{props.data}<br/>
                        {props.value=='Screenshots' ? <button value="view more" className="btttn viewmore">View More</button> :  <br/>} 
                        </Paper></Grid>
                       
                 </Grid>
        
        }
           
        </div>
    )
}

export default Gridpapers