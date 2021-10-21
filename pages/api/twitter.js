const twitter = require("twitter-lite");
const client = new twitter({
  consumer_key: process.env.TWITTER_API_KEY,
  consumer_secret: process.env.TWITTER_API_SECRET_KEY,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

export default function handler(req, res) {
  client
    .post("statuses/update", {
      status: `${req.body.data.tweetText} ${req.body.data.url}`,
    })
    .then((result) => {
      console.log('You successfully tweeted this : "' + result.text + '"');
    })
    .catch(console.error);
  res.status(200).json({ msg: "Automation FTW, dude." });
}
