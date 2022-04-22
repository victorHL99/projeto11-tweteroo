import express from 'express';
import cors from 'cors';

const app = express();
app.listen(5000, () => console.log('server started'));
app.use(express.json());
app.use(cors());

const tweets = [
	{
		username: "bobesponja",
		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
		tweet: "eu amo o hub"
	},
	
];
const users = [];


app.post('/sign-up', (req, res) => {
	const {username, avatar} = req.body;

	const usuario = {
		"username": username,
		"avatar": avatar
	}

	users.unshift(usuario);
	res.send("OK");
})

app.post('/tweets', (req, res) => {
	const {username ,tweet} = req.body;

	const tweetObj = {
		"username": username,
		"tweet": tweet
	}

	tweets.unshift(tweetObj);
	res.send("OK");
})

//Get recebendo tweets
app.get('/tweets', (req, res) => {
	for(let i = 0; i <= 10; i++){
		res.send(tweets);
	}
});
