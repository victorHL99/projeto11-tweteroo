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
	
	const usuario = {
		"username": username,
		"avatar": avatar
	}
	
	users.push(usuario);
	res.send("OK");
})

// postando tweets
app.post('/tweets', (req, res) => {
	const {avatar} = users
	const {username,tweet} = req.body;

	const tweetObj = {
		"username": username,
		"avatar": avatar,
		"tweet": tweet
	}

	tweets.push(tweetObj);
	res.send("OK");
})

app.get('/tweets', (req, res) => {
		const ultimosTweets = pegarTweets();
		res.send(ultimosTweets);
})
;

function pegarTweets() {
    const ultimos10 = [];
    
    if (tweets.lenght === 0) {
        return [];
    } else
    if (tweets.length > 10) {
        for (let i = tweets.length - 10; i < tweets.length; i++) {
            lastTweets(i);
        }
    }
    else {
        for (let i = 0; i < tweets.length; i++) { 
            lastTweets(i);
        }
    }
    
    function lastTweets(i) {
        const user = users.filter(element => element.username === tweets[i].username);

        ultimos10.push(
            {
                "username": tweets[i].username,
                "avatar": user[0].avatar,
                "tweet": tweets[i].tweet
            });
    }

    return ultimos10;
}