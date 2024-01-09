// eslint-disable-next-line no-unused-vars
// import React,{ useState } from "react"
import BASE_URL from "./apiLink"

export const postUser = async (obj) => {
    let returnData
    let error = false
    await fetch(`${BASE_URL}/users/signup`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    }).then(res => res.json())
        .then(data => {
            if (data.status !== 200)
                error = true
            returnData = data.data
        })
    return { returnData, error }
}

export const get = async (url) => {
    let returnData
    let error = false
    const storedToken = localStorage.getItem('userToken');
    const { token } = JSON.parse(storedToken)
    await fetch(`${BASE_URL}/${url}`, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.status !== 200)
                error = true
            returnData = data.data
        })
    return { returnData, error }
}

export const post = async (url, obj) => {
    console.log(obj)
    let returnData
    const storedToken = localStorage.getItem('userToken');
    const { token } = JSON.parse(storedToken)
    await fetch(`${BASE_URL}/${url}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
        },
        body: obj
    })
        .then(res => res.json())
        .then(data => returnData = data)
    return returnData
}

export const post2 = async (url, obj) => {
    console.log(obj)
    let returnData
    const storedToken = localStorage.getItem('userToken');
    const { token } = JSON.parse(storedToken)
    await fetch(`${BASE_URL}/${url}`, {
        method: "POST",
        headers: {

            Authorization: 'Bearer ' + token
        },
        body: obj
    })
        .then(res => res.json())
        .then(data => returnData = data)
    return returnData
}