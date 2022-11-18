const { request, response } = require('express');
const { userDeleteService } = require('../../services/users/delete.services');

const deleteUserController =async (req=request, res=response)=> {
    const {id} = req.params
    try {
        await userDeleteService(id)
        return res.status(200).json({
            msg: 'deleted ok'
        })
    } catch (error) {
        return res.status(500).json({
            error
        })
    }
}

module.exports = {
    deleteUserController
}