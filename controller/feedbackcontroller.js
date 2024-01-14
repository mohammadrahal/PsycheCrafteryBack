const FEEDBACK = require('../models/feedbackModel')

const getFeed = async(_, res) =>{
try {
    const feedback = await FEEDBACK.find({})

    if(!feedback || !feedback.length == 0){
        return res.status(404),json({
            success: false,
            message:'no feddback'
        });
    }
    return res.status(200).json({
        success:true,
        message:"feed back found",
        data:feedback
    })
} catch (error) {
    return res.status(400).json({
        success:false,
        message: error.message
    })
}
}



















module.exports = {


}