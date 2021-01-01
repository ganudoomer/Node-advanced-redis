const redis = require('redis');
const redisUrl = 'redis://127.0.0.1:6379';
const client = redis.createClient(redisUrl);
const util = require('util');
client.get = util.promisify(client.get);
// Do we any cached data in redis related
//to this query
const cachedBlogs = await client.get(req.user.id);
//if yes ,then respond to the request right away
//and return
if (cachedBlogs) {
    console.log('SERVEING FROM CACHE');
    return res.send(JSON.parse(cachedBlogs));
}
//if no, we need to respond to request
//update our cache to store the data
console.log('SERVEING FROM MONGO');
const blogs = await Blog.find({ _user: req.user.id });
res.send(blogs);
client.set(req.user.id, JSON.stringify(blogs));