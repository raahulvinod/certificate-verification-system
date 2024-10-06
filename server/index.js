import express from 'express';
import 'dotenv/config';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
