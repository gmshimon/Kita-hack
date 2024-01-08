// eslint-disable-next-line no-unused-vars
// import React,{ useState } from "react"
import BASE_URL from "./apiLink"

export const postUser = async(obj)=>{
    let returnData
    let error = false
    await fetch(`${BASE_URL}/users/signup`,{
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    }).then(res=>res.json())
    .then(data=>{
        if(data.status!==200)
            error=true
        returnData = data.data
    })
    return {returnData,error}
}

export const get = async(url)=>{
    let returnData
    let error = false
    const storedToken = localStorage.getItem('userToken');
    const {token} = JSON.parse(storedToken)
    console.log(token)
    await fetch(`${BASE_URL}/products`,{
        method:'GET',
        headers:{
            Authorization: 'Bearer ' + token
        }
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.status!==200)
            error=true
        returnData = data.data
        console.log(data)
    })
    return {returnData,error}
}

