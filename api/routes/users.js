const User = require("../models/userAuthModel");
const router = require("express").Router();
const mongoose = require("mongoose");
const {friendId} = mongoose.Schema.Types;

// follow a user

router.put("/:id/follow", async (req, res) => {
    // console.log("api executed")
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if (!user.followers.includes(req.body.userId)) {
                await user.updateOne({ $push: { followers: req.body.userId } });
                await currentUser.updateOne({ $push: { followings: req.params.id } });
                res.status(200).json("user has been followed");
            } else {
                res.status(403).json("you already follow this user");
            }
        } catch (err) {
            console.log("error catch", err);
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("you cant follow yourself");
    }
});

// unfollow a user

router.put("/:id/unfollow", async (req, res) => {
    // console.log("api executed ")
    if (req.body.userId !== req.params.id) {
        // console.log("enter in conditon if ")
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if (user.followers.includes(req.body.userId)) {
                await user.updateOne({ $pull: { followers: req.body.userId } });
                await currentUser.updateOne({ $pull: { followings: req.params.id } });
                res.status(200).json("user has been unfollowed");
            } else {
                res.status(403).json("you dont follow this user");
            }
        } catch (err) {
            console.log("in catch block error =", err);
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("you cant unfollow yourself");
    }
});

// get followers 




// get followers ...


router.get("/friends/:userId", async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        // const sir = await User.findOne({email:"shivam.tyagi@tothenew.com"})
        // console.log("sir data = ", sir)
        // console.log(user);
        // console.log("user followings =",user.followings);
        // console.log("user id fetching",)

        const friends = await Promise.all(
            user.followings.map(async (friendId) => {
                // console.log(friendId)
                
                return await User.findById(friendId);
            })
        );
        console.log(friends);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
