const twitter = require("twitter-lite");
const client = new twitter({
  consumer_key: process.env.TWITTER_API_KEY,
  consumer_secret: process.env.TWITTER_API_SECRET_KEY,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

export default async (req, res) => {
  console.log(req.body.data);
  await client
    .post("statuses/update", {
      status: `${req.body.data.tweetText} https://dominguezdev.com/blog/${req.body.data.slug}`,
    })
    .then((result) => {
      console.log(`You successfully tweeted this : "${result.text}"`);
    })
    .catch(console.error);
  res.status(200).json({ msg: "Automation FTW, dude." });
};
