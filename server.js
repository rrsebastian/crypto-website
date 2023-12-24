import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();
const port = process.env.PORT || 3001;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


app.use('/api', createProxyMiddleware({
  target: 'https://api.coingecko.com/api/v3',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '', 
  },
}));

app.use(express.static('assets'));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});