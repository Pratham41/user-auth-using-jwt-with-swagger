const router = require("express").Router()
const { fetchDataFromAPI } = require("../controllers/entries.controller")

router.route("/").get(fetchDataFromAPI) // FETCH DTATA FROM API

module.exports = router