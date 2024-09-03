import express from 'express';
import cors from 'cors';

export const server = express();


server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors)


server.listen(3000,()=>{
    console.log('servidor rodando na porta 3000')
})