import React from 'react';
import '../../css/card.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

function ResortCard({ data, resortName, groupSize }) {
  return (
    <Card sx={{ display: 'flex', mb: 2, width: 900 }}>
      <CardMedia
        component="img"
        sx={{ width: 285, height: 185 }}
        image={data.HotelDescriptiveContent.Images.find(img => img.MainImage).URL}
        alt="Hotel Image"
      />
      <CardContent sx={{
        flex: '1 0 auto',
        '&:last-child': {
          pb: 0
        }
      }}>
        <p className='hotelName'>
          Hotel • {data.HotelName}
        </p>
        <p className='rating'>
          {Array(+data.HotelInfo.Rating).fill(0).map((_, index) => (
            <img key={index} className='rating-img' src="/star.png" alt="star" />
          ))}
        </p>
        <p className='location-details'>
          <img className='card-icon' src="/location.png" alt="location" />
          {resortName}
        </p>
        <p className='location-details'>
          <img className='card-icon' src="/distance.png" alt="distance" />
          {data.HotelInfo.Position.Distances.find(distance => distance.type === 'city_center').distance} from center
        </p>
        <hr className='horizontal-line' />
        <p className='price'>
          <span className='actual-price'>
            £{Math.floor(data.PricesInfo.AmountAfterTax / groupSize)}
          </span>
          <span className='per-person'>
            /per person
          </span>
        </p>
      </CardContent>
    </Card >
  );
}

export default ResortCard;