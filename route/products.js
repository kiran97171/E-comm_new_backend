const express = require("express")
const { addData, allData, electronics, mobile, mi, samsung, laptop, hp, dell, lenovo, headphones, wiredheadphone, earphones, blutooth, watch, smartwatch, normalwatch, tab, samsungtab, lenovotab, xiaomitab, realmetab, } = require("../controller/products")
const productsRouter = express.Router();

productsRouter.post('/adddata', addData)   //http://localhost:8000/products/adddata
productsRouter.get('/alldata', allData)
productsRouter.get('/electronics', electronics)

productsRouter.get('/mobile', mobile)
productsRouter.get('/mi', mi)
productsRouter.get('/samsung', samsung)

productsRouter.get('/laptop', laptop)
productsRouter.get('/hp', hp)                    //http://localhost:8000/products/laptop/hp
productsRouter.get('/dell', dell)
productsRouter.get('/lenovo', lenovo)

productsRouter.get('/headphones', headphones)
productsRouter.get('/wiredheadphones', wiredheadphone)
productsRouter.get('/earphones', earphones)
productsRouter.get('/bluetooth', blutooth)

productsRouter.get('/watch', watch)
productsRouter.get('/smartwatch', smartwatch)
productsRouter.get('/normalwatch', normalwatch)

productsRouter.get('/tab', tab)
productsRouter.get('/samsungtab', samsungtab)
productsRouter.get('/lenovotab', lenovotab)
productsRouter.get('/xiaomitab', xiaomitab)
productsRouter.get('/realmetab', realmetab)

module.exports = productsRouter 