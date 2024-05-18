require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');
const expressSession = require('express-session');
const connectDB = require('./server/configs/db');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');

const app = express();
const PORT = 5000 || process.env.PORT;

const configPassport = require('./server/controllers/passportController');

// Connect to DB
connectDB();

// body - parser để lấy dữ liệu từ trình duyệt
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Đăng ký thư mục public.
app.use(express.static('public'));
// Template Engine
app.use(expressLayout);
// use express-session
// Cài đặt middleware session
app.use(
    expressSession({
        secret: 'keyboard cat', // Chuỗi bí mật để ký và mã hóa session cookie
        // resave: false,
        // saveUninitialized: true,
    }),
);

// Dung de kiem tra dieu kien cho nao an va hien thi
global.loggedIn = null;
app.use('*', (req, res, next) => {
    loggedIn = req.session.userId;
    next();
});

app.set('layout', './layouts/main'); // Cấu hình layout mặc định, cho nên nó chỉ render được layouts/main!
app.set('view engine', 'ejs');

app.use('/', require('./server/routes/main'));

configPassport();

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

// Login Register

// app.use(express.json());
// app.use(cors());
// app.use(cookieParser());
// app.use(
//     fileUpload({
//         useTempFiles: true,
//     }),
// );

// app.use('/login', (req, res, next) => {
//     res.json({ msg: 'Login page!' });
// });
