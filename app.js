async function setCache() {
    const redis = require('redis');
    const client = redis.createClient();
    
    client.connect();
    
   const result = await client.set('nome', 'Vinicius');
   console.log("SET: ", result);
}

async function getCache() {
    const redis = require('redis');
    const client = redis.createClient();
    
    client.connect();
    
   const result = await client.get('nome');
   console.log("GET: ", result);
}


async function setCacheEx(sec) {
    const redis = require('redis');
    const client = redis.createClient();
    client.connect();
   
    const result = await client.setEx('nome', sec, 'Vinicius Cache Ex')
    console.log("SET EX: ", result);
}


setCache();
getCache();

setCacheEx(10);
setInterval(() => {
    getCache();
}, 1000);

