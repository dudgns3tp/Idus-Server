const pool = require('../modules/pool');
const table = 'banner';

const home = {
    getBanner :async () =>{
        const query =`SELECT * FROM ${table}`;
        try{
            const result = await pool.queryParam(query);
            return result;
        }catch(err){
            console.log('getBanner err: '+ err);
            throw err;
        }
    }
}

module.exports = home;