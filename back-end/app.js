import express from 'express';
import cors from 'cors';

const app = express();
app.listen(5000, () => console.log('server started'));
app.use(express.json());
app.use(cors());

const tweets = [];
const users = [];




//Get recebendo tweets
app.get('/tweets', (req, res) => {
	for(let i = 0; i <= 10; i++){
		res.send(tweets);
	}
});
