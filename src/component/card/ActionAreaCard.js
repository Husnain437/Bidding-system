import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Countdown from '../Countdown/Countdown';
import "./ActionAreaCard.css";

import { Nav } from "react-bootstrap";
import { withRouter } from '../withRouter/withRouter';

function ActionAreaCard(props) {
  const des = props.description;
  const descrip = des

  return (
    <div className='card-mn'>

      <Card sx={{ maxWidth: 350, minWidth: 350 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="150"
            image={props.image}
            alt="Img cover"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {/* {props.description} */}
              {descrip}
            </Typography>
            <div
              onClick={() => props.history(`/productdetails/${props?.post.id}`, {
                state: props?.post,
              })}
            >
              <h5>{`Rs ${props.price}`}</h5>
            </div>

            {props.button}
            <div className='count'>
              <Countdown date={props?.post?.createdDate} />
            </div>
          </CardContent>

        </CardActionArea>
      </Card>
    </div >

  );
}

export default withRouter(ActionAreaCard)