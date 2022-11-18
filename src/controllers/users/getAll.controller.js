const { request, response } = require('express');
const { userGetAllServices } = require('../../services/users/getAll.services');

const userGetAllController =async (req=request, res=response)=> {
    try {
        const users = await userGetAllServices()
        return res.status(200).json({
            users
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error
        })
    }
}

module.exports = {
    userGetAllController
}