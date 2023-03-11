//made by son1x#7744 and Molux Team
//Community: https://discord.gg/hfac6StA49
//Don't Remove Credits

const express = require('express');
const server = express();
 
server.all('/', (req, res) => {
  res.send(`Molux Team: https://discord.gg/hfac6StA49`)
})
 
function keepAlive() {
  server.listen(3000, () => { console.log("Server is Ready!!" + Date.now()) });
}
 
module.exports = keepAlive;

//made by son1x#7744 and Molux Team
//Community: https://discord.gg/hfac6StA49
//Don't Remove Credits