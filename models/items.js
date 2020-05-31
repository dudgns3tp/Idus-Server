const pool = require('../modules/pool');
const table = "item";

const items = {
    getCostItem : async (minPrice, maxPrice) =>{
        const query = `SELECT * FROM ${table} WHERE item_price >="${minPrice}" and item_price<="${maxPrice}"`;
        try{
            const result = await pool.queryParam(query);
            return result;
        }catch(err){
            console.log('getCostItem err: '+err);
            throw err;
        }
    },
    recommendItem : async () =>{
        const query = `SELECT item_name,item_img,item_likes,item_rating FROM ${table} order by rand() limit 1`;
        try{
            const result = await pool.queryParam(query);
            return result;
        }catch(err){
            console.log('recommendItem err' + err);
            throw err;
        }
    }
}

module.exports = items;