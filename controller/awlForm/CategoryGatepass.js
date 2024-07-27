const AwlModel = require("../../models/AwlModel")

const CategoryGatepass = async(req,res)=>{
    try{
        const gatepasstype = await AwlModel.distinct("type")
        console.log("gatepass type",gatepasstype)

        const gatepassbytype = []

        for(const type of gatepasstype){
            const gatepass = await AwlModel.findOne({type })

            if(gatepass){
                gatepassbytype.push(gatepass)
            }
        }

        res.json({
            message : "Gatepass Type",
            data : gatepassbytype,
            success : true,
            error : false
        })


    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = CategoryGatepass