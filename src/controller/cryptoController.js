const cryptoModel=require("../model/cryptoModel")
const axios=require("axios")


let getcoins = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://api.coincap.io/v2/assets'
        }
        let result = await axios(options);
        // console.log(result)
        let data = result.data
        let obj = {}
        let arr=[]
        
        // for(let i=0; i<data.length;i++){
        //     obj.symbol=data[i].symbol
        //     obj.name = data[i].name
        //     obj.marketCapUsd=data[i].marketCapUsd
        //     obj.priceUsd= data[i].priceUsd
        //     arr.push(obj)
            



        // }
        console.log(data.symbol)
        
        
        

        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

module.exports={getcoins}
















