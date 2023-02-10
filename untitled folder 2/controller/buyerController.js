const { buyer } = require("../models/Buyer");

const buyerController = {
    getAll: (req, res) => {
        buyer.find({ isDeleted: false }).populate('buyerAdress').exec((err, docs) => {
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
        let newBuyer = new buyer({
            buyerName: req.body.buyerName,
            phoneNumber: req.body.phoneNumber,
            buyerAdress: req.body.buyerAdress,
            isDeleted: false,
            date: req.body.date,
        })

        newBuyer.save(function (err, doc) {
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
        buyer.findById(id).populate('buyerAdress').exec((err, doc) => {
            if (!err) {
                res.json(doc)
            } else {
                res.status(500).json(err);
            }
        })
    },
    delete: (req, res) => {
        let id = req.params.id;
        buyer.findByIdAndUpdate(id, {isDeleted:true}, { new: true }, (err, doc) => {
            if (!err) {
                res.json(doc)
            } else {
                res.status(500).json(err);
            }
        })
    },
    update: (req, res) => {
        let id = req.params.id;
        buyer.findByIdAndUpdate(id, { $set: req.body }, { new: true, runValidators: true }, (err, doc) => {
            if (!err) {
                res.json(doc)
            } else {
                res.status(500).json(err);
            }
        })
    }
}

module.exports = {
    buyerController
}