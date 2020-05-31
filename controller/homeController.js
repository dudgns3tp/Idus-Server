const home = require('../models/homes');
const util = require('../modules/util');
const resMessage = require('../modules/responseMessage');
const statusCode = require('../modules/statusCode');

module.exports ={
    getBanner : async (req,res) =>{
        const data = await home.getBanner();
        return await res.status(statusCode.OK).send(util.success(statusCode.OK,resMessage.GET_BANNER,data));
    }
}