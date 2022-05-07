import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CATEGORY_STORE, PROGRESS_CATEGORIES } from '../../management/reducers/AllCetegoryReducer'
import DashboardHeader from './Sheard/DashboardHeader'
import Category from './UpdateCategories/Category'
import InsideSubCategory from './UpdateCategories/InsideSubCategory'
import PackType from './UpdateCategories/PackType'
import ServingSize from './UpdateCategories/ServingSize'
import SubCategory from './UpdateCategories/SubCategory'
function Categories() {
    const [categorySearch, setCategorySearch] = useState('');
    const { userLogin } = useSelector(state => state)
    const [page, setPage] = useState(1)
    const limit = 10;
    const count = 10;
    const dispatch = useDispatch()
    useEffect(() => {
        if (!userLogin?.user?.token) return
        dispatch({
            type: PROGRESS_CATEGORIES,
            payload: {
                loading: true
            }
        })
        fetch(`https://soilight.herokuapp.com/category?search=${categorySearch || ''}page=${page}&limit=${limit}`, {
            method: 'GET',
            headers: {
                "Content-type": "application/json",
                'Authorization': `Bearer ${userLogin?.user?.token}`
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                dispatch({
                    type: PROGRESS_CATEGORIES,
                    payload: {
                        loading: false
                    }
                })
                // console.log(data)
                dispatch({
                    type: CATEGORY_STORE,
                    payload: {
                        category: data.data
                    }
                })
            })
    }, [dispatch, userLogin?.user?.token, categorySearch, page])
    return (
        <div className='categories-box'>
            <DashboardHeader title="Categories" />
            <Grid container spacing={1} alignItems="center">
                <Grid item xs={12} md={4}>
                    <Category title="Category" setCategorySearch={setCategorySearch} limit={limit} page={page} setPage={setPage} searchTitle="Category" count={count} />
                </Grid>
                <Grid item xs={12} md={4}>
                    <SubCategory title="Sub Category" setSearchText={'setSearchText'} limit={limit} page={page} setPage={setPage} searchTitle="Sub Category" count={count} />
                </Grid>
                <Grid item xs={12} md={4}>
                    <InsideSubCategory title="Inside Sub " setSearchText={'setSearchText'} limit={limit} page={page} setPage={setPage} searchTitle="Inside Sub Category" count={count} />
                </Grid>
                <Grid item xs={12} md={4}>
                    <PackType title="Pack Type" setSearchText={'setSearchText'} limit={limit} page={page} setPage={setPage} searchTitle="Pack Type" count={count} />
                </Grid>
                <Grid item xs={12} md={4}>
                    <ServingSize title="Serving Size" setSearchText={'setSearchText'} limit={limit} page={page} setPage={setPage} searchTitle="Serving Size" count={count} />
                </Grid>
            </Grid>
        </div>
    )
}

export default Categories