import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import React from 'react';
import { useForm } from 'react-hook-form';
import { MdCancel } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { PROGRESS_CATEGORIES } from '../../../management/reducers/AllCetegoryReducer';
const style = {
    position: 'absolute',
    top: '60%',
    left: '50%',
    border: 'none',
    width: '400px',
    outline: 'none',
    borderRadius: '10px',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    p: 4,
};

export default function InsideSubCategoryDetails({ handleInsideSubCategoryDetailsClose, handleInsideSubCategoryDetailsOpen, insideSubCategoryDetailsOpen }) {
    const { register, reset, handleSubmit } = useForm();
    const dispatch = useDispatch()
    const { userLogin, category } = useSelector(state => state)
    const{selectedInsideSubCategory} = category;
    const updateInsideSubCategory = data => {
        if (!selectedInsideSubCategory?._id) return
        dispatch({
            type: PROGRESS_CATEGORIES,
            payload: {
                loading: true
            }
        })
        fetch(`https://soilight.herokuapp.com/inside/sub/category/${selectedInsideSubCategory?._id}`, {
            method: 'PUT',
            headers: {
                "Content-type": "application/json",
                'Authorization': `Bearer ${userLogin?.user?.token}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                reset()
                dispatch({
                    type: PROGRESS_CATEGORIES,
                    payload: {
                        loading: false
                    }
                })
                if (data.message) {
                    window.location.reload()
                    toast(data.message, {
                        position: "top-right",
                        autoClose: 5000,
                        theme: 'light',
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
                if (data.error) {
                    Object.values(data.error).forEach(err => {
                        toast(err, {
                            position: "top-right",
                            autoClose: 5000,
                            theme: 'light',
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    })
                }
            })
    };
    return (
        <div>
            <Modal
                style={{ overflowY: 'scroll' }}
                open={insideSubCategoryDetailsOpen}
                onClose={handleInsideSubCategoryDetailsClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer', fontSize: '20px' }}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Update Inside Sub Category
                        </Typography>
                        <MdCancel onClick={handleInsideSubCategoryDetailsClose} />
                    </div>
                    <form onSubmit={handleSubmit(updateInsideSubCategory)}>
                        <Box >
                            <Typography
                                sx={{
                                    fontWeight: "bold",
                                    mb: 1,
                                    fontSize: 14,
                                    color: "#464646",
                                }}
                                style={{ fontFamily: `"Poppins", sans-serif` }}
                            >
                                Inside Sub Category Name
                            </Typography>
                            {/* {console.log(selectedInsideSubCategory)} */}
                            <TextField fullWidth placeholder={selectedInsideSubCategory?.insideSubCategory} size="small"    {...register("insideSubCategory", { min: 0 })} required />
                        </Box>
                        {category?.loading ? <CircularProgress />
                            : <>
                                <Button type="submit" style={{ textTransform: 'capitalize', marginTop: '30px' }} variant="contained">
                                    Update Inside Sub  Category
                                </Button>
                            </>}
                    </form>
                    <ToastContainer
                        style={{ color: 'green', marginTop: '10px' }}
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        pauseOnHover
                    />
                </Box>
            </Modal>

        </div>
    );
}
