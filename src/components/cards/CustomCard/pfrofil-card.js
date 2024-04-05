import * as React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import instergram from '../../../assets/images/icons/instergram.svg';
import facebook from '../../../assets/images/icons/facebook.svg';
import twitter from '../../../assets/images/icons/twitter.svg';
export default function PortoCard({ cardData }) {
  return (
    <Card sx={{ borderRadius: '12px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
        <img src={cardData.image} alt="This is" />
      </Box>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          align="center"
          fontSize="14px"
          sx={{ color: (theme) => (theme.palette.mode === 'dark' ? 'white' : '#7E8487') }}
        >
          {cardData.role}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          align="center"
          sx={{ color: (theme) => (theme.palette.mode === 'dark' ? 'white' : '#7E8487') }}
          fontSize="14px"
          fontWeight="bold"
        >
          {cardData.name}
        </Typography>
        <Typography sx={{ color: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'text.secondary') }} fontSize="12px">
          {cardData.content}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button size="small" sx={{ borderRadius: '100%' }}>
          <img src={instergram} alt="This pic" />
        </Button>
        <Button size="small" sx={{ borderRadius: '100%' }}>
          <img src={facebook} alt="This pic" />
        </Button>
        <Button size="small" sx={{ borderRadius: '100%' }}>
          <img src={twitter} alt="This pic" />
        </Button>
      </CardActions>
    </Card>
  );
}

PortoCard.propTypes = {
  cardData: PropTypes.shape({
    image: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired
};
