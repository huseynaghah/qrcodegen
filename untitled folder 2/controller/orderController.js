const { order } = require("../models/Order");

const orderController = {
    getAll: (req, res) => {
        let { limit, sort, startdate, enddate } = req.query;
        if (!startdate) {
            startdate = new Date(0);
        } else {
            startdate = new Date(startdate);
        }

        if (!enddate) {
            enddate = new Date();
        } else {
            enddate = new Date(enddate);
        }
        order.find({
            isDeleted: false,
            date: {
                $gte: startdate,
                $lte: enddate
            }
        })
            .limit(limit)
            .sort({ productPrice: sort })
            .populate('categoryId')
            .populate({ path: "buyerId", populate: { path: 'buyerAdress' } })
            .exec((err, docs) => {
                if (!err) {
                    res.json(docs)
                }
                else {
                    res.status(500).json(err);
                }
            }
            )
    },
    add: (req, res) => {
        let newProduct = new order({
            productName: req.body.productName,
            productPrice: req.body.productPrice,
            productDescription: req.body.productDescription,
            categoryId: req.body.categoryId,
            buyerId: req.body.buyerId,
            isDeleted: false,
            date: req.body.date,
        })

        newProduct.save(function (err, doc) {
            if (!err) {
                res.json(doc)
            }
            else {
                res.status(500).json(err)
            }
        })
    },
    getById: (req, res) => {
        let id = req.params.id;
        order.findById(id).populate('categoryId')
            .populate({ path: "buyerId", populate: { path: 'buyerAdress' } })
            .exec((err, doc) => {
                if (!err) {
                    res.json(doc)
                } else {
                    res.status(500).json(err);
                }
            })
    },
    delete: (req, res) => {
        let id = req.params.id;
        order.findByIdAndUpdate(id, { isDeleted: true }, { new: true }, (err, doc) => {
            if (!err) {
                res.json(doc)
            } else {
                res.status(500).json(err);
            }
        })
    },
    update: (req, res) => {
        let id = req.params.id;
        order.findByIdAndUpdate(id, { $set: req.body }, { new: true, runValidators: true }, (err, doc) => {
            if (!err) {
                res.json(doc)
            } else {
                res.status(500).json(err);
            }
        })
    }
}

module.exports = {
    orderController
}