import { Button, Grid } from '@mui/material';
import Rating from '@mui/material/Rating';
import React from 'react';
import { Alert } from '@mui/material';
import './SearchProfileView.css';
import Loading from './Loading';
function SearchProfileView({ data = {}, handleApproved, handleRejected, error, success, totalRate = 0, buyer, seller, rider, avgRating = 0, title }) {
    return (
        <div>
            {!data? <Loading /> :<div className="profile-view-section" style={{ marginTop: '70px' }}>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                    <Grid item xs={12}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div className="profile-view" style={{ padding: '0px 10px' }}>
                                <img style={{ width: '100px', height: '100px', borderRadius: '100px', border: '6px solid #F5AB24' }} src={data?.pic} alt={data?.name} />
                                {buyer && <div className="rating" style={{ display: 'flex', alignItems: 'center' }}>
                                    <Rating name="read-only" value={avgRating} readOnly /><p style={{ color: "#7B7979" }}>{avgRating}({totalRate})</p>
                                </div>}
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={2} alignItems="center" justifyContent="center" className="all-center">
                    <Grid item xs={12}>
                        <div>
                            <p style={{ marginBottom: "0", marginTop: '60px' }}><strong style={{ fontWeight: '500', fontSize: '20px' }}>{title}</strong></p>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <div className="item-view">
                            <p style={{ margin: "0px", color: '#444444' }}> Name</p>
                            <p style={{ margin: "0px", color: "#2B2C43" }}>{data?.name || 'N/A'}</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className="item-view">
                            <p style={{ margin: "0px", color: '#444444' }}>Phone Number</p>
                            <p style={{ margin: "0px", color: "#2B2C43" }}>{data?.phone || 'N/A'}</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className="item-view">
                            <p style={{ margin: "0px", color: '#444444' }}>Address</p>
                            <p style={{ margin: "0px", color: "#2B2C43" }}>{data?.address || 'N/A'}
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className="item-view">
                            <p style={{ margin: "0px", color: '#444444' }}>Email</p>
                            <p style={{ margin: "0px", color: "#2B2C43" }}>{data?.email || 'N/A'} </p>
                        </div>
                    </Grid>
                    {
                        rider &&
                        <>
                            <Grid item xs={12} md={6}>
                                <div className="item-view" style={{ padding: '0px 10px' }}>
                                    <p style={{ margin: "0px", color: '#444444' }}>Valid ID Number</p>
                                    <p style={{ margin: "0px", color: "#2B2C43" }}>{data?.valid_id?.id || 'N/A'}</p>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <div className="item-view" style={{ padding: '0px 10px' }}>
                                    <p style={{ margin: "0px", color: '#444444' }}>License Number</p>
                                    <p style={{ margin: "0px", color: "#2B2C43" }}>{data?.license_card?.id || 'N/A'}
                                    </p>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <div className="item-view" style={{ padding: '0px 10px' }}>
                                    <p style={{ margin: "0px", color: '#444444' }}>Rider Status</p>
                                    <p style={{ margin: "0px", color: "#2B2C43" }}>{data?.status}
                                    </p>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                {/* <div className="item-view" style={{ padding: '0px 10px' }}>
                                    {data?.status === 'approved' ? <Button variant="contained" onClick={() => handleRejected(data?._id)} style={{ textTransform: 'capitalize', background: 'red', padding: '10px 50px', borderRadius: '8px' }}>Rejected </Button> : <Button variant="contained" onClick={() => handleApproved(data?._id)} style={{ textTransform: 'capitalize', background: '#05AC54', padding: '10px 50px', borderRadius: '8px' }}>Approved </Button>}
                                </div> */}
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <div className="item-view" style={{borderLeft:'0px', padding: '0px 10px', marginTop: '30px', marginLeft: '85px', marginBottom: '80px' }}>
                                    {data?.status === 'approved' ? <Button variant="contained" onClick={() => handleRejected(data?._id)} style={{ textTransform: 'capitalize', background: 'red', padding: '10px 50px', borderRadius: '8px' }}>Rejected </Button> : <Button variant="contained" onClick={() => handleApproved(data?._id)} style={{ textTransform: 'capitalize', background: '#05AC54', padding: '10px 50px', borderRadius: '8px' }}>Approved </Button>}
                                </div>
                            </Grid>
                        </>
                    }
                    {
                        seller && <>
                            <Grid item xs={12}>
                                <div>
                                    <p style={{ marginBottom: "0", marginTop: '60px' }}><strong style={{ fontWeight: '500', fontSize: '20px' }}>Shop Info</strong></p>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <div className="item-view" style={{ padding: '0px 10px' }}>
                                    <p style={{ margin: "0px", color: '#444444' }}>Shop Name</p>
                                    <p style={{ margin: "0px", color: "#2B2C43" }}>{data?.sellerShop?.name || 'N/A'}</p>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <div className="item-view" style={{ padding: '0px 10px' }}>
                                    <p style={{ margin: "0px", color: '#444444' }}>Address</p>
                                    <p style={{ margin: "0px", color: "#2B2C43" }}>{data?.sellerShop?.address || 'N/A'}
                                    </p>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <div className="item-view" style={{ padding: '0px 10px' }}>
                                    <p style={{ margin: "0px", color: '#444444' }}>Shop Phone Number</p>
                                    <p style={{ margin: "0px", color: "#2B2C43" }}>{data?.sellerShop?.phone || 'N/A'}</p>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <div className="item-view" style={{ padding: '0px 10px' }}>
                                    <p style={{ margin: "0px", color: '#444444' }}>Shop Status</p>
                                    <p style={{ margin: "0px", color: "#2B2C43" }}>{data?.sellerShop?.status || 'N/A'}
                                    </p>
                                </div>
                            </Grid>
                            {seller && data?.sellerShop?.closeDate && <Grid item xs={12} md={6}>
                                <div className="item-view" style={{ padding: '0px 10px' }}>
                                    <p style={{ margin: "0px", color: '#444444' }}>Shop Open Date</p>
                                    <p style={{ margin: "0px", color: "#2B2C43" }}> {new Date(data?.sellerShop?.openDate)?.toDateString()} || N/A</p>
                                </div>
                            </Grid>}
                            {seller && data?.sellerShop?.closeDate && <Grid item xs={12} md={6}>
                                <div className="item-view" style={{ padding: '0px 10px' }}>
                                    <p style={{ margin: "0px", color: '#444444' }}>Shop Close Date</p>
                                    <p style={{ margin: "0px", color: "#2B2C43" }}>{new Date(data?.sellerShop?.closeDate)?.toDateString() || 'N/A'}</p>
                                </div>

                            </Grid>}
                            {data?.sellerShop?.createdAt && <Grid item xs={12} md={6}>
                                <div className="item-view" style={{ padding: '0px 10px' }}>
                                    <p style={{ margin: "0px", color: '#444444' }}>Shop Created At</p>
                                    <p style={{ margin: "0px", color: "#2B2C43" }}> {new Date(data?.sellerShop?.createdAt)?.toDateString() || 'N/A'}</p>
                                </div>
                            </Grid>}
                            {data?.sellerShop?.updatedAt && <Grid item xs={12} md={6}>
                                <div className="item-view" style={{ padding: '0px 10px' }}>
                                    <p style={{ margin: "0px", color: '#444444' }}>Shop Updated At</p>
                                    <p style={{ margin: "0px", color: "#2B2C43" }}>{new Date(data?.sellerShop?.updatedAt)?.toDateString() || 'N/A'}</p>
                                </div>
                            </Grid>}
                            {rider && <Grid item xs={12} md={6}>
                                <div className="item-view" style={{ padding: '0px 10px' }}>
                                    <p style={{ margin: "0px", color: '#444444' }}>Seller Status</p>
                                    <p style={{ margin: "0px", color: "#2B2C43" }}>{data?.status}</p>
                                </div>
                            </Grid>}
                            {rider && <Grid item xs={12} md={6} >
                                <div className="item-view" style={{ padding: '0px 10px' }}>

                                </div>
                            </Grid>
                            }
                            {seller && <Grid item xs={12} md={6}>
                                <div className="item-view" style={{ padding: '0px 10px' }}>
                                    <p style={{ margin: "0px", color: '#444444' }}>Seller Status</p>
                                    <p style={{ margin: "0px", color: "#2B2C43" }}>{data?.status}</p>
                                </div>
                            </Grid>}
                            {error && <Grid item xs={12} >
                                <div className="item-view" style={{ padding: '0px 10px' }}>
                                    <Alert severity="error" timeout={5000} md={6}>{error}</Alert>
                                </div>
                            </Grid>}
                            {success && <Grid item xs={12} timeout={5000} md={6}>
                                <div className="item-view" style={{ padding: '0px 10px' }}>
                                    <Alert severity="success" timeout={5000} md={6}> {success}</Alert>
                                </div>
                            </Grid>}
                            {seller && <Grid item xs={12} md={6} style={{}}>
                            </Grid>}
                            <Grid item xs={12} md={6} style={{ marginBottom: '50px', marginTop: '20px', marginLeft: '85px' }}>
                                <div className="item-view" style={{ padding: '0px 10px', borderLeft: '0px' }}>
                                    {data?.status === 'approved' ? <Button variant="contained" onClick={() => handleRejected(data?._id)} style={{ textTransform: 'capitalize', background: 'red', padding: '10px 50px', borderRadius: '8px' }}>Rejected </Button> : <Button variant="contained" onClick={() => handleApproved(data?._id)} style={{ textTransform: 'capitalize', background: '#05AC54', padding: '10px 50px', borderRadius: '8px' }}>Approved </Button>}
                                </div>
                            </Grid>
                        </>
                    }
                </Grid >
            </div >}
        </div >
    )
}

export default SearchProfileView