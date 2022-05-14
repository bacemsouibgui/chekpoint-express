let date=new Date()



const Datee =(req,res,next) =>{

    let h=date.getHours() //returns the hour
    let d=date.getDay() //returns the day's index

    if(!(d>=1 && d<=5 && h>=9 && h<=17)) {
        return res.send("app is not available")
    }
    next()
}
module.exports= Datee