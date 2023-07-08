

let sname = document.getElementById("name");
let rollNo = document.getElementById("rollNo");

//------save data in database-----
function savedata() {
    let key = firebase.database().ref('student').push().key;
    let student = {
        key: key,
        sname: sname.value,
        rolno: rollNo.value
    }
    //#--------customize key create by developer--------
    // let randomkey = Math.random() * 123;
    // firebase.database().ref('student/'+randomkey.toFixed()).set(student)

    //firebase databse craete key
    firebase.database().ref('student/' + key).set(student);
}

//---getting data from databse first method using once. once take 2 arguments 1 is value and 2 other is  function call back
// function getdata() {
//     firebase.database().ref('student').once('value', function(snapshot) {
//         console.log(snapshot.val()) 
//     })
// }

//----gettting data from database using on method use for realtime databse get menas. when i insert data in database it get data get from database. i need not to call function 

// function getdata() {
//     firebase.database().ref('student').on('child_added', function(snapshot) {
//         console.log(snapshot.val()) 
//     })
// }

// getdata()


//-------Remove Data from database

function remove(){
    //---delete each record 
    // firebase.database().ref('student/-NZjN9d-yry6lPzQ4BBm').remove();

    //---delete all record

    // firebase.database().ref('student').remove();
}
remove()


//-----Edit data from database 

function editdata(){
    firebase.database().ref('student/-NZjQEF8c2xZYlFk-M5o').set({
        key:"-NZjQEF8c2xZYlFk-M5o",
        rollNo:"123",
        sname:"yasho"
    })
}
editdata();