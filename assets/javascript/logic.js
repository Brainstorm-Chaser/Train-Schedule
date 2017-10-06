var config = {
    apiKey: "AIzaSyBmdGEHgiz_shsV5K93n4QWQbdrCSOHgDU",
    authDomain: "project-7672d.firebaseapp.com",
    databaseURL: "https://project-7672d.firebaseio.com",
    projectId: "project-7672d",
    storageBucket: "project-7672d.appspot.com",
    messagingSenderId: "579263581692"
  };
  firebase.initializeApp(config);

    var database = firebase.database();

    var name = "";
    var destination = "";
    var firstTrainTime = 0;
    var frequency = 0;
    var nextArrival = 0;
    var minutesAway = 0;

    

    // Click Button changes what is stored in firebase
    $("#train-form").on("submit", function(event) {
      // Prevent the page from refreshing
      event.preventDefault();

      var name = $("#train-name-input").val().trim();
      var destination = $("#destination-input").val().trim();
      var firstTrainTime = $("#first-train-input").val().trim();
      var frequency = $("#frequency-input").val().trim();



    // First Time (pushed back 1 year to make sure it comes before current time)
    var timeConverted = moment(firstTrainTime, "hh:mm").add(frequency, "minutes");
    console.log(timeConverted);

    // Current Time
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    // Difference between the times
    var diffTime = moment().diff(moment(timeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    // Time apart (remainder)
    var tRemainder = diffTime % frequency;
    console.log(tRemainder);

    // Minute Until Train
    var tMinutesTillTrain = frequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));


      var newTr = $("<tr></tr>")

      newTr.append('<th class = "tName">' + name + '</th>')
      newTr.append('<th class = "tDestination">' + destination + '</th>')
      newTr.append('<th class = "tFirstTrainTime">' + firstTrainTime + '</th>')
      newTr.append('<th class = "tfrequency">' + frequency + '</th>')
      newTr.append('<th class = "tNextArrival">' + moment(nextTrain).format("hh:mm") + '</th>')
      newTr.append('<th class = "tMinutesAway">' + tMinutesTillTrain + '</th>')


      // console.log(newTr)

      $('#table-body').append(newTr)


      // Change what is saved in firebase
      database.ref().push({
        name: name,
        destination: destination,
        firstTrainTime : firstTrainTime,
        frequency: frequency,
        nextTrain : nextTrain,
        minutesAway : minutesAway
          });
    });

    // database.ref().on("child_added", function(snapshot) {
        // console.log("child", snapshot.child("name").val())

        // if (
        //     snapshot.child('name').exists() &&
        //     snapshot.child('destination').exists() &&
        //     snapshot.child('firstTrainTime').exists() &&
        //     snapshot.child('frequency').exists()
        //   ) {

        //       // console.log('All fields exist')

        //       name = snapshot.child("name").val();
        //       destination = snapshot.child("destination").val();
        //       firstTrainTime = snapshot.child('firstTrainTime').val();
        //       frequency = snapshot.child('frequency').val();
        // }

        // 1. get current date
        // 2. subtract first train time from current time and return next arrival
        // 3. calculate how many minutes until the next arrival


          // for (var i = 0; i < splitTime.length; i++);
          //   var timeSplit = splitTime[i];
          // console.log(timeSplit);
          // console.log(calculateTime.split(":", 2); 

         // nextArrival = (calculateTime);
      
          // console.log(nextArrival)


          // var totalMinutesAway = parseInt(nextArrivalResults) * parseInt()


          // console.log('MOMENT :: ', totalMinutesAway)

  // if (snapshot.child("name").exists() && snapshot.child("role").exists() && snapshot.child("rate").exists() && snapshot.child("start").exists())  {
  //   // Set the variables equal to the stored values.
   
    

//     //console.log(typeof snapshot.val().highPrice) => returns number
//     // Change the text inside the HTML element to reflect the initial value

    
    // use jquery to create a new element <tr>
    // use jquery to create new elements <th>
    // append each <th> to the <tr>
    // append the <tr> to the DOM



    // $("#tName").text(name);
    // $("#tRole").text(role);
    // $("#tRate").text("$" + rate);
    // $("#tStart").text(start);

    /*
    <tr>
      <th class = "tName"></th>
      <th class = "tRole"></th>
      <th class = "tStart"></th>
      <th class = "tMonths"></th>
      <th class = "tRate"></th>
      <th class = "tBilled"></th>
    </tr>*/

//     // Print the data to the console.
    // console.log(childSnapshot.val().name);
    // console.log(childSnapshot.val().role);
    //  console.log(childSnapshot.val().rate);
    //   console.log(childSnapshot.val().start);
  // })
    


//   // If any errors are experienced, log them to console.
// }, function(errorObject) {
//   console.log("The read failed: " + errorObject.code);
// });