/** source/server.ts */
import http from 'http';
import express, { Application, Request, Response, NextFunction } from "express";
import morgan from 'morgan';
import postsRoutes from './routes/posts';

const app: Application = express();

/** Logging */
app.use(morgan('dev'));
/** Parse the request */
app.use(express.urlencoded({ extended: false }));
/** Takes care of JSON data */
app.use(express.json());

/** RULES OF OUR API */
app.use((req, res, next) => {
    // set the CORS policy
    res.header('Access-Control-Allow-Origin', '*');
    // set the CORS headers
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
    // set the CORS method headers
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
        return res.status(200).json({});
    }
    next();
});

/** Routes */
app.use("/posts", postsRoutes);

app.use("/", (req: Request, res: Response, next: NextFunction): void => {
    res.json({ message: "Allo! Catch-all route." });
});


/** Error handling */
app.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});

export default app;