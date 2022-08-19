exports.getFeeds = (req, res, next) => {
    res.status(200).json({
        Name: "Abhijeet",
        Age: 24
    })
}

exports.postFeeds = (req, res, next) => {
    const name = req.body.name;
    const age = req.body.age;
    const feed = {name, age};
    res.status(200).json(feed)
}