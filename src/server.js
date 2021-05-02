// main entry point for API server
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes/index.js';
// const passport = require('passport');
import connectDB from './db.js';

// sets environment variables based on centents of .env file
import dotenv from 'dotenv';
dotenv.config();

// db
connectDB();

// start server instance
const app = express();

// uncomment this line if running behind a proxy 
// the x-forwarded-for header in nginx config must be set
// node will set req.ip to real remote address
app.set('trust proxy', true);


// cross origin request middleware
app.use(cors());
// dev middleware
app.use(morgan('dev'));
// url middleware
app.use(express.json());
// session management middleware
// app.use(passport.initialize());
// app.use(passport.session());

// need these if using Node.js ES Modues
// See: https://stackoverflow.com/questions/8817423/why-is-dirname-not-defined-in-node-repl
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// serve static files
app.use('/static', express.static(path.join(__dirname, '../', 'public')))


// route handlers entrypoint for all routes
app.use('/', routes);

// begin listening on given port
const PORT = process.env.PORT || 5000;
app.listen(PORT, function(){
    console.log(`The app is running in ${process.env.NODE_ENV} mode on port: ${PORT}`);
});
