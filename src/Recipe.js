// import React from 'react';
import * as React from 'react';
import { Button, Card, CardMedia, CardActions, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return < IconButton {...other} />
  
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));
  

export default function Recipe({label,image,calories,ingredients}){
    //material ui
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded)
    };

        //material ui
    return (
        
 
        <div style={{ margin: 10 }}>
        <h1 className='label'>
            {label} </h1>
        <Card raised={true} sx={{ maxWidth: 1500 }}>
            <CardMedia
            component="img"
            height="300"
                image = {image}
            />
            <CardContent sx={{ bgcolor: "#c4a3bce9" }}>
                <h3 className='calories'>{calories.toFixed()} calories</h3>
                
            </CardContent>
            <CardActions >
                

                <Button variant="contained" 
                        color="inherit"
                        >
                    Ingredients
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </Button>
            </CardActions>
            <Collapse in={expanded} timeout="auto" 
                        unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                    <ul className="list">
            {ingredients.map(ingredient => (
                <li className="icon">{ingredient}</li>
            ))}
        </ul>
                    </Typography>

                </CardContent>
            </Collapse>
        </Card>
    </div>
        
        
    )
}
