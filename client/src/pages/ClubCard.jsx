import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useState } from 'react';
import '../styles.css';

/**
 * Component for club card format.
 * @component
 * @example
 * return clubs.map((club, index) => (
      <ClubCard key={index} eImage={club.image} cName={club.clubName} cDesc={club.clubDesc} cPhone={club.clubPhone} cEmail={club.email}></ClubCard>
      ));
 */

export default function ClubCard(props) {
  
  const [cName, setCname] = useState('');
  const [cDesc, setCdesc] = useState('');
  const [cPhone, setCphone] = useState('');
  const [cEmail, setCemail] = useState('');

  return (
    <>
    <Card sx={{ height: "469px", display: 'flex', flexDirection: 'column', border: "2px solid red" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={props.eImage} alt="Clubs"
        />
        <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h2" component="div">
          {props.cName}
        </Typography>
        <Typography gutterBottom variant="h5" color="text.secondary">
          {props.cDesc}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.cPhone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.cEmail}
        </Typography>
        </CardContent>
      </CardActionArea>
        <CardActions>
          <Button size="small">View Club</Button>
        </CardActions>
    </Card>
    </>
  );
}