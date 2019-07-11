const dateFormatter= date => {
   
    let year = date.getFullYear();
    let month=date.getMonth()+1;
    let day=date.getDate();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();

    if(month<10){
        month="0"+month;
    }
    if(month<10){
     
        day="0"+day;
    }

    let dateFormat = year + "-" + month +"-" + day +" "+ hours+":"+minutes+seconds;
    return dateFormat;
       
    }
module.exports={dateFormatter};
