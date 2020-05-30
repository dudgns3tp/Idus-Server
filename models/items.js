const pool = require('../modules/pool');
const table = "item";

const items = {
    getCostItem : async (minPrice, maxPrice) =>{
        const query = `SELECT * FROM ${table} WHERE item_price >="${minPrice}" and item_price<="${maxPrice}"`;
        try{
            const result = await pool.queryParam(query);
            return result;
        }catch(err){
            console.log('getCostIten err: '+err);
            throw err;
        }
    }
}

module.exports = items;