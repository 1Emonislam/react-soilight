import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React from 'react';
import { IoIosPeople } from 'react-icons/io'
import { BiStoreAlt } from 'react-icons/bi'
import { FaCaravan } from 'react-icons/fa'
function DashboardGraph({ data = 0 }) {
  return (
    <div className='dashboard-graph'>
      <div className="title" style={{ color: "#444", marginBottom: '30px' }}>
        Total Summary
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Card variant="outlined" className="card-item-buyer">
            <CardContent sx={{ color: 'white' }}>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                <strong style={{ color: 'white' }}> Total Buyer</strong>
              </Typography>
              <div className="count">
                <span sx={{ fontWeight: '500' }}>{data?.buyerCount}</span>
              </div>
              <div className="card-item-buyer-icon">
                <IoIosPeople />
              </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card variant="outlined" className="card-item-seller">
            <CardContent sx={{ color: 'white' }}>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                <strong style={{ color: 'white' }}> Total Seller</strong>
              </Typography>
              <div className="count">
                <span sx={{ fontWeight: '500' }}>{data?.sellerCount}</span>
              </div>
              <div className="card-item-seller-icon">
                <BiStoreAlt />
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card variant="outlined" className="card-item-rider">
            <CardContent sx={{ color: 'white' }}>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                <strong style={{ color: 'white' }}> Total Rider</strong>
              </Typography>
              <div className="count">
                <span sx={{ fontWeight: '500' }}>{data?.riderCount}</span>
              </div>
              <div className="card-item-rider-icon">
                <FaCaravan />
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default DashboardGraph;