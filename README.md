# loyalty-customer-mobile-app


## API enpoints

### 1. Get all coupons
```
GET /coupon
```
Example response:
```json
{
    "activeCoupons": [
        {
            "couponCode": "2780634e-438f-419d-8366-2a328850cad3",
            "name": "Ticket Legia - Puszcza Niepołomnice up to 20% off",
            "expirationDate": "2024-02-17"
        },
        {
            "couponCode": "3e755062-0676-431e-92ff-14ea6174f5b9",
            "name": "Ticket Legia - Korona Kielce up to 5% off",
            "expirationDate": "2025-02-24"
        },
        {
            "couponCode": "3e755062-0676-431e-92ff-14ea6174f5b9",
            "name": "Merch store - Any item 10% off",
            "expirationDate": "2024-12-31"
        }
    ],
    "page": {
        "page": 1,
        "size": 10,
        "total": 3
    }
}
```

### 2. Get all coupons by uid
```
GET /coupon/{uid}
```
Example response:
```json
{
    "couponCode": "3e755062-0676-431e-92ff-14ea6174f5b9",
    "name": "Ticket Legia - Korona Kielce up to 5% off",
    "expirationDate": "2025-02-24",
}
```

### 3. Get discount amount for user (from signature)
```
GET /discount/:signature
```
Example response:
```json
{
    "discount": 0.9712195845226468,
    "numberOfShares": 48
}
```

Example input:
```
eyJjb3Vwb25JZCI6MSwibWVzc2FnZSI6IjEiLCJzaWduYXR1cmUiOiIweDQwYjExYTU0NGE1OTQwYzlkYmQwMjVhNTFkYWUyNzA5ZWJlZjZmM2I4OWQzYjRjM2JhZWE0ZmQzMjQwMmI1ZmI0MGUyZTYxOTQ5NjIwNDQ1NGQ3ZDFlZWFhMDE5NDA1OWY3NWIwNDdmY2Y1Mjg4MjhhZTE2OTlkZTlmMWE0YzQ0MWIifQ==
```
Decoded: 
```json
{
    "couponId": 1,
    "message": "1",
    "signature": "0x40b11a544a5940c9dbd025a51dae2709ebef6f3b89d3b4c3baea4fd32402b5fb40e2e619496204454d7d1eeaa0194059f75b047fcf528828ae1699de9f1a4c441b"
}
```