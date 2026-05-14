// Create express application
import exp from 'express'
import { connect } from 'mongoose'
import { config } from 'dotenv'
import { userApp } from './APIs/UserAPI.js';
import { authorApp } from './APIs/AuthorAPI.js';
import { adminApp } from './APIs/AdminAPI.js';
import { commonApp } from './APIs/CommonAPI.js';
import cookieParser from 'cookie-parser';
import cors from "cors"

config();
const app = exp()

app.use(cors({
  origin: "https://blogapp-nine-snowy.vercel.app",
  credentials: true,
  //methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  //allowedHeaders: ["Content-Type", "Authorization"]
}));


// assign port

// connect to db
const connectDB = async () => {
  try {
    await connect(process.env.DB_URL);
    console.log("connected to database");
  }
  catch (err) {
    console.log("error in db connection", err);
  }
}

connectDB();



// body parser middleware
app.use(exp.json());
app.use(cookieParser())

//path level middleware
app.use('/user-api', userApp);
app.use('/author-api', authorApp);
app.use('/admin-api', adminApp);
app.use('/auth', commonApp);



//to handle invalid path
app.use((req, res, next) => {
  console.log(req.url)
  res.status(404).json({ message: `path ${req.url} is invalid` })
})

// error handling middleware[ALWAYS KEEP AT END OF THE FILE]
app.use((err, req, res, next) => {
  console.log("Error name:", err.name);
  console.log("Error code:", err.code);
  console.log("Error cause:", err.cause);
  console.log("Full error:", JSON.stringify(err, null, 2));

  // ValidationError
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "error occurred",
      error: err.message
    });
  }

  // CastError
  if (err.name === "CastError") {
    return res.status(400).json({
      message: "error occurred",
      error: err.message
    });
  }

  const errCode = err.code ?? err.cause?.code ?? err.errorResponse?.code;
  const keyValue = err.keyValue ?? err.cause?.keyValue ?? err.errorResponse?.keyValue;

  // Duplicate key error
  if (errCode === 11000) {
    const field = Object.keys(keyValue)[0];
    const value = keyValue[field];

    return res.status(409).json({
      message: "error occurred",
      error: `${field} "${value}" already exists`
    });
  }

  // Server error
  res.status(500).json({
    message: "error occurred",
    error: "Server side error"
  });
});

const port = process.env.PORT || 5000;
app.listen(port, '0.0.0.0', () => console.log(`server started on port ${port}`));
