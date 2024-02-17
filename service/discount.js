const calculateDiscount = (encodedData) => {
    const decodedData = JSON.parse(atob(encodedData));
    console.log("Calculating discount for data:", decodedData)
    const rNumber = Math.random();

    return {
        "discount": rNumber,
        "numberOfShares": Math.floor(rNumber * 50)
    };
};

module.exports = {
    calculateDiscount
}