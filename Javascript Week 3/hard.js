function info(){
    var pii ={
       name : "Blob",
       ssn : "123-456-7891",
    }
       function grabInfo() {
          console.log (pii.name);
        }
         return grabInfo;
       }
    var info = info();
    info();
