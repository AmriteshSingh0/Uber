const http= require('http');
const dotenv = require('dotenv');
const {initializeSocket} = require('./socket'); 


dotenv.config();

const port= process.env.PORT || 3000; 
const app = require('./app');


const server= http.createServer(app);

initializeSocket(server);

server.listen(port,()=>{
 console.log(`server is listening on port ${port}`);
 
})