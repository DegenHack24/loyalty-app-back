const express = require('express')
const {calculateDiscount} = require("./service/discount");
const {couponMockData} = require("./mock/couponMockData");
const app = express()
const port = 3000

app.get('/discount/:signature', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    return res.send(calculateDiscount('eyJjb3Vwb25JZCI6MSwibWVzc2FnZSI6IjEiLCJzaWduYXR1cmUiOiIweDQwYjExYTU0NGE1OTQwYzlkYmQwMjVhNTFkYWUyNzA5ZWJlZjZmM2I4OWQzYjRjM2JhZWE0ZmQzMjQwMmI1ZmI0MGUyZTYxOTQ5NjIwNDQ1NGQ3ZDFlZWFhMDE5NDA1OWY3NWIwNDdmY2Y1Mjg4MjhhZTE2OTlkZTlmMWE0YzQ0MWIifQ=='))
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