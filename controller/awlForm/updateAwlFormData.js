const AwlModel = require("../../models/AwlModel")
// const generateAwlGatepassPermission = require(".backend/helpers/permission")

async function updateAwlFormDataController(req, res) {
    try {
        // if (!generateAwlGatepassPermission(req.userId)) {
        //     throw new Error("Permission Denied")
        // }
        const {_id, ...resBody} = req.body

        const updateAwlFormData = await AwlModel.findByIdAndUpdate(_id,resBody)

        res.json({
            message : "Awl Gatepass Updated Successfully",
            data : updateAwlFormData,
            success : true,
            error : false
        })

    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        })
    }
}

module.exports = updateAwlFormDataController