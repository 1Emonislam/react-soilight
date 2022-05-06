import { Grid } from '@mui/material'
import React, { useState } from 'react'
import DashboardHeader from './Sheard/DashboardHeader'
import Category from './UpdateCategories/Category'
import InsideSubCategory from './UpdateCategories/InsideSubCategory'
import PackType from './UpdateCategories/PackType'
import ServingSize from './UpdateCategories/ServingSize'
import SubCategory from './UpdateCategories/SubCategory'
function Categories() {
    const [searchText, setSearchText] = useState('');
    const [page, setPage] = useState(1)
    const limit = 10;
    const count = 10;
    console.log(searchText)
    return (
        <div>
            <DashboardHeader title="Categories" />
            <Grid container spacing={1}>
                <Grid container spacing={1} alignItems="center" justifyContent={'space-between'}>
                    <Grid item xs={12} md={2.2}>
                        <Category title="Category" setSearchText={setSearchText} limit={limit} page={page} setPage={setPage} searchTitle="Category" count={count} />
                    </Grid>
                    <Grid item xs={12} md={2.2}>
                        <SubCategory title="Sub Category" setSearchText={setSearchText} limit={limit} page={page} setPage={setPage} searchTitle="Sub Category" count={count} />
                    </Grid>
                    <Grid item xs={12} md={2.2}>
                        <InsideSubCategory title="Inside Sub " setSearchText={setSearchText} limit={limit} page={page} setPage={setPage} searchTitle="Inside Sub Category" count={count} />
                    </Grid>
                    <Grid item xs={12} md={2.2}>
                        <PackType title="Pack Type" setSearchText={setSearchText} limit={limit} page={page} setPage={setPage} searchTitle="Pack Type" count={count} />
                    </Grid>
                    <Grid item xs={12} md={2.2}>
                        <ServingSize title="Serving Size" setSearchText={setSearchText} limit={limit} page={page} setPage={setPage} searchTitle="Serving Size" count={count} />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Categories