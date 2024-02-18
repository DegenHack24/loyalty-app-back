const axios = require("axios");

const MOCKED_USER = "0x36Bc959D7Ea2C9B24EE832C19765D9c6C1FCa433"
const LOYALTY_EQUITY_TOKEN = "0xbB3dbf9AEEb50f7055a95cf1bd71c9DbbeA54F6D"

const calculateDiscount = async (encodedData) => {
    const decodedData = JSON.parse(atob(encodedData));
    console.log("Calculating discount for data:", decodedData)
    const rNumber = Math.random();

    const response = await axios.post(
        process.env.SIRA_API_URL,
        {},
        {
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                "X-Auth-Token": MOCKED_USER,
            },
        }
    );
    console.log(response)
    const sharesCount = response.data.reduce((acc, share) => {
        console.log("share:", share)
        if (share?.address === LOYALTY_EQUITY_TOKEN) {
            return acc + parseInt(share?.balance.hex);
        }
        return acc;
    }, 0) || 0;


    return {
        "discount": Math.floor(sharesCount / 50),
        "numberOfShares": sharesCount
    };
};

module.exports = {
    calculateDiscount
}