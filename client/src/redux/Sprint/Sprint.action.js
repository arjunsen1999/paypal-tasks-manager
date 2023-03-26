
import {
    isError,
    isSuccess,
    loading_button,
    trigger_loader,
  } from "./Sprint.actionType";



export const addSprint = (token, formData) => async (dispatch) =>{
    dispatch({type : loading_button, payload : true})
    try {
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/sprint/add`, {
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                "token" : token
            },
            body : JSON.stringify(formData)
        });
        const resData = await res.json();
        dispatch({type : loading_button, payload : true});
        dispatch({type : isSuccess, payload : resData.msg})
    } catch (error) {
        dispatch({type : loading_button, payload : true});
        dispatch({type : isError, payload : error.error})
    }
}

export const deleteSprint = (token, id) => async(dispatch) =>{
    dispatch({type : loading_button, payload : true});
 try {
    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/sprint/delete/${id}`, {
        method : "DELETE",
        headers : {
            "Content-Type" : "application/json",
            "token" : token
        },
    });
    const resData = await res.json();
    dispatch({type : loading_button, payload : false});
    dispatch({type : isSuccess, payload : resData.msg});
 } catch (error) {
    console.log(error);
    dispatch({type : loading_button, payload : false});
    dispatch({type : isError, payload : error.error});
 }
}

export const editSprint = (token, id, formData) => async (dispatch) =>{
    dispatch({type : loading_button, payload : true});
    try {
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/sprint/update/${id}`, {
            method : "PATCH",
            headers : {
                "Content-Type" : "application/json",
                "token" : token
            },
            body : JSON.stringify(formData)
        });
        const resData = await res.json();
        dispatch({type : loading_button, payload : false});
        dispatch({type : isSuccess, payload : resData.msg});
    } catch (error) {
        dispatch({type : loading_button, payload : false});
        dispatch({type : isError, payload : error.error});
    }
}