import React,{useState} from 'react'
import './findProductAndServives.css'
import ListIcon from '@material-ui/icons/List';
import AddToHomeScreenIcon from '@material-ui/icons/AddToHomeScreen';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Gridpapers from './Gridpapers';
import Switch, { Case, Default } from 'react-switch-case';

function FindProductAndServives() {

    const [selected, setSelected] = useState('Overview');
    
    const mystyle={
        color: "black",
        background: "white",
        borderRadius:"25%",
        fontSize:"20px",
    }



    const dummy=<div>
        <h1 style={{fontSize:"20px"}}> This is {selected}?</h1><br/>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially 
                unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem 
                Ipsum passages,and more recently with desktop publishing 
                software like Aldus PageMaker including versions of Lorem Ipsum
        </p>
        </div>

        function compareIcons(value){
            if(value=='Overview'){
                return(
                    <p className="para"><ListIcon style={mystyle}/> {selected}</p>
                )
            }
            else if(value=='Screenshots'){
                return(
<                   p className="para"><AddToHomeScreenIcon style={mystyle} /> {selected}</p> 
                )
                 
            }
            else if(value=='UserReviews'){
                return(
<                   p className="para"><StarBorderIcon style={mystyle}/> {selected}</p> 
                )
                 
            }
            else if(value=='Pricing'){
                return(
<                   p className="para"><MonetizationOnIcon style={mystyle} /> {selected}</p> 
                )
                 
            }
        }

    return (
        <div className="fpas-container">
            <h1 className="HeadingText">Comparison Page</h1>
            <br/><br/>
          {compareIcons(selected)}

            <div className="fpas_btn">
                <button value="Overview" onClick={(e)=>setSelected(e.target.value)} className="btn btn-1" style={{paddingRight:"27px"}}><ListIcon style={mystyle} />&nbsp;&nbsp;&nbsp;Overview</button>
                <button value="Screenshots" onClick={(e)=>setSelected(e.target.value)} className="btn btn-1"><AddToHomeScreenIcon style={mystyle} />&nbsp;&nbsp;ScreenShots</button>
                <button value="UserReviews" onClick={(e)=>setSelected(e.target.value)} className="btn btn-1" ><StarBorderIcon style={mystyle} />&nbsp;&nbsp;UserReviews</button>
                <button value="Pricing" onClick={(e)=>setSelected(e.target.value)} className="btn btn-1" style={{paddingRight:"40px"}}><MonetizationOnIcon style={mystyle} />&nbsp;&nbsp;&nbsp;Pricing</button>
            </div>

            <div className="fpas_papers">
               <Gridpapers data={dummy} value={selected}/>        
            </div> 
            
        </div>
    )
}

export default FindProductAndServives
