import {
    issue_reset,
    isError,
    isSuccess,
    loading_button,
    trigger_loader,
  } from "./Issue.actionType";

export const add_issue = (token, formData) => async (dispatch) => {
    dispatch({type : loading_button, payload : true})
 try {
    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/issue/add`, {
        method : "POST",
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

export const delete_issue = (token, id) => async (dispatch) =>{
    dispatch({type : loading_button, payload : true});
    try {
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/issue/delete/${id}`, {
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
        dispatch({type : loading_button, payload : false});
        dispatch({type : isError, payload : error.error});
    }
}

export const issueEdit = (token, id, formData) => async (dispatch) =>{
    dispatch({type : loading_button, payload : true});
    try {
        const res = await fetch(`http://localhost:8080/issue/update/${id}`, {
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
        console.log(error)
        dispatch({type : loading_button, payload : false});
        dispatch({type : isError, payload : error.error});
    }
}


export const updateIssueStatus = (token, id, status) => async (dispatch) => {
   try {
    const res = await fetch(`http://localhost:8080/issue/update/status/${id}`, {
        method : "PATCH",
        headers : {
            "Content-Type" : "application/json",
            "token" : token
        },
        body : JSON.stringify({status})
    });
    const resData = await res.json();
    dispatch({type : trigger_loader})
   } catch (error) {
     dispatch({type : trigger_loader})
   }
}