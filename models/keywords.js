const pool = require('../modules/pool');
const table = "keyword";
const keywords = {
    getKeyWords : async () =>{
        const query = `SELECT * FROM ${table}`;
        try{
            const result = await pool.queryParam(query);
            return result;
        }catch(err){
            console.log('getKeywords err: '+err);
            throw err;
        }
    }
}

module.exports = keywords;