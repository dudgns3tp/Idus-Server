const item = require('../models/items');
const util = require('../modules/util');
const resMessage = require('../modules/responseMessage');
const statusCode = require('../modules/statusCode');

module.exports ={
    categoryFiltering : async (req,res) =>{
        const {minPrice, maxPrice} = req.query;
        console.log(minPrice);
        if(!minPrice || !maxPrice){
            return await res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST,resMessage.NULL_VALUE));
        }
        
        if(isNaN(minPrice) || isNaN(maxPrice)){
            return await res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST,resMessage.OUT_OF_VALUE));
        }

        const filteredData = await item.getCostItem(minPrice,maxPrice);
        return await res.status(statusCode.OK).send(util.success(statusCode.OK,resMessage.GET_ITEM,filteredData));
    },
    recommendItem : async (req,res) =>{
        const data = await item.recommendItem();
        return await res.status(statusCode.OK).send(util.success(statusCode.OK,resMessage.GET_RECOMMEND_ITEM,data));
    }
}