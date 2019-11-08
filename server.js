const LP = require('linkedin-public-profile-parser');
const url = 'https://www.linkedin.com/in/alexandru-scheaua-9b23a8136/';

LP(url,(err,resp)=>{
    console.log(JSON.stringify(resp,null,2));
})