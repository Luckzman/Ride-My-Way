import app from './Server';
// const app = require('./Server/index');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
