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

// The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start (left) of the current string.(2,0) => 2 is length

// function dateFormatter(date) {
//     const pad = number => number.toString().padStart(2, 0);
  
//     return (
//       date.getFullYear() +
//       "-" +
//       pad(date.getMonth() + 1) +
//       "-" +
//       pad(date.getDate()) +
//       " " +
//       date.getHours() +
//       ":" +
//       pad(date.getMinutes())
//     );
//   }
