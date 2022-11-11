const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const cors = require('cors');

dotenv.config();
const app = express();

const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL)
.then(console.log("DB-connection successful!"))
.catch((err) => {
    console.log(err);
});

app.use(cors({
    origin: '*'
}));
app.use(express.json());
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log(`server is listening on port ${port}`);
});