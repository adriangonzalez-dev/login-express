const { request, response } = require("express");

const adminAccess = (req = request, res = response, next) => {
 if(!(req.role === 2)){
    
 }
};

module.exports = {
  adminAccess,
};
