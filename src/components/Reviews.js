import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import people from '../utils/data'
import './reviews.css'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

function Reviews() {
  const [index, setIndex] = React.useState(0)
  const {name, job, image, text } = people[index]

  const prevReview = () => {
    if (index === 0) {
      setIndex(people.length - 1)
    } else {
      setIndex(index - 1)
    }
  }

  const nextReview  = () => {
    if (index === people.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={name}
      />
      <CardContent className="card-content">
        <Typography gutterBottom variant="h5" component="div">
          {job}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <FaQuoteRight/> {text}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button> */}
        <Button size="small">
          <FaChevronLeft onClick={() => prevReview()}/>
        </Button>
        <Button size="small">
          <FaChevronRight onClick={() => nextReview()}/>
        </Button>
      </CardActions>
    </Card>
  );
}

export default Reviews;