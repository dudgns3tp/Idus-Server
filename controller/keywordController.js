const keywords = require('../models/keywords');
const util = require('../modules/util');
const resMessage = require('../modules/responseMessage');
const statusCode = require('../modules/statusCode');

module.exports ={
    readKeyword : async(req,res)=>{
        const data = await keywords.getKeyWords();
        return await res.status(statusCode.OK).send(util.success(statusCode.OK,resMessage.GET_CATEGORY, data));
    }
}