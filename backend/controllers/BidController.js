const Bid = require('../models/bid')
const userBid = require('../models/userbid')

const store = (req, res, next) => {
    let bid = new Bid({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        location: req.body.location,
        image: req.body.image,
        userId: req.body.userId,
        createdDate: req.body.createdDate,
        id: req.body.id

    })
    bid.save()
        .then(response => {
            res.json({
                message: 'Bid add Successfully.'
            })
        })
        .catch(error => {
            res.json({
                message: 'An error Occured'
            })
        })
}

// const update = (req, res, next) => {
//     let bidID = req.body.id

//     let updateData = {
//         title: req.body.title,
//         description: req.body.description,
//         price: req.body.price,
//         location: req.body.location
//     }

//     User.findByIdAndUpdate(bidID, { $set: updateData })
//         .then(() => {
//             res.json({
//                 message: 'User Update Successfully.'
//             })
//         })
//         .catch(error => {
//             res.json({
//                 message: 'An error Occured.'
//             })
//         })
// }

const saveUserBid = (req, res, next) => {
    let ubid = new userBid({
        userId: req.body.userId,
        id: req.body.id,
        bid: req.body.bid
    })
    ubid.save()
        .then(response => {
            res.json({
                message: 'Bid ID add Successfully.'
            })
        })
        .catch(error => {
            res.json({
                message: 'An error Occured'
            })
        })
}
const fetchPosts = async(req, res) => {

    const data = await Bid.find()
    res.send(data)
}
const fetchPost = async(req, res) => {
    try {
        const data = await Bid.find({ id: req.params.id })
        res.send(data)
    } catch (err) {
        res.json({ message: err });
    }

}
const bidprice = async(req, res) => {
    const data = await userBid.findById(req.params.id)
    res.send(data)
}
const allbids = async(req, res) => {
    try {
        const data = await userBid.find()
        res.send(data)
    } catch (err) {
        res.json({ message: err });
    }
}
const deletepost = async(req, res) => {
    try {
        const removedPost = await Bid.remove({ id: req.params.id })
        res.json(removedPost)
    } catch (error) {
        res.json({ message: error });
    }
}
const updatepost = async(req, res) => {
    try {
        const updatedPost = await Bid.findOneAndUpdate({ _id: res.params.id }, {
            $set: {
                title: req.body.title,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image,
                location: req.body.location
            }
        })
        res.send(updatedPost)
    } catch (error) {
        res.send({ message: error });
    }
}
const update = ((req, res) => {

    Bid.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            location: req.body.location
        },
        function(err, data) {
            if (err) {

                console.log(err);
            } else {
                res.send({
                    message: data
                });

                console.log("Data updated!");
            }
        });


});
module.exports = {
    store,
    updatepost,
    saveUserBid,
    fetchPosts,
    fetchPost,
    bidprice,
    allbids,
    deletepost,
    update
}