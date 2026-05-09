 function printCuurentDate()
 {
   //creat date class object

   let today = new Date;

   let CuurentDate = today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear() 
   ;
   console.log(CuurentDate);

 }

 printCuurentDate();