const errorFunction = require("../utils/errorFunction");

// FETCH DATA FROM API
const fetchDataFromAPI = async (req, res) => {
    try {
        // FIRST WAY

        // const rawData = await fetch(`https://api.publicapis.org/entries?${req.query.Category && `Category=${req.query.Category}`}`)
        // const mainData = await rawData.json()
        // return res.status(200).json(errorFunction(false, "Data", {...mainData,count:req.query?.limit || mainData.count, entries:mainData.entries?.slice(0,req.query?.limit)}))

        // SECOND WAY
        const rawData = await fetch(`https://api.publicapis.org/entries`)
        const mainData = await rawData.json()
        const dataToSend = req.query.Category ? mainData.entries.filter((md) => md.Category === req.query.Category).slice(0, req.query.limit) : mainData.entries.slice(0, req.query.limit)
        return res.status(200).json(errorFunction(false, "Data", { count: dataToSend.length, entries: dataToSend }))
    } catch (error) {
        console.log(error);
        return res.status(400).json(errorFunction(true, "Error fetching records!"))
    }
}

module.exports = {
    fetchDataFromAPI
}