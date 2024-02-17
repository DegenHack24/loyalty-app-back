const express = require('express')
const {calculateDiscount} = require("./service/discount");
const {couponMockData} = require("./mock/couponMockData");
const app = express()
const cors = require('cors')
const port = 3000

app.use(cors())

app.get('/discount/:signature', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    return res.send(calculateDiscount(req.params.signature))
})

app.get('/coupon', (req, res) => {
    return res.send({
        "activeCoupons": couponMockData,
        "page": {
            "page": 1,
            "size": 10,
            "total": couponMockData.length
        }
    })
})

app.get('/coupon/:id', (req, res) => {
    return res.send(couponMockData.find(c => c.couponCode === req.params.id))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})