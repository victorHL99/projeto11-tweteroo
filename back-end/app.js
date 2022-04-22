import express from 'express';
import cors from 'cors';

const app = express();
app.listen(5000, () => console.log('server started'));
app.use(express.json());
app.use(cors());

const tweets = [];
const users = [];


app.post('/sign-up', (req, res) => {
	const {username, avatar} = req.body;
	users.unshift({username, avatar});
	res.send("OK");
})

app.post('/tweets', (req, res) => {
	const {username, tweet} = req.body;
	tweets.unshift(tweet);
	res.send("OK");
})

//Get recebendo tweets
app.get('/tweets', (req, res) => {
	for(let i = 0; i <= 10; i++){
		res.send(tweets);
	}
});
