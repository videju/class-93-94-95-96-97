
const firebaseConfig = {
      apiKey: "AIzaSyBQ9UslY0fWy9skBV0dM09CYtzdamPY3vI",
      authDomain: "class93-94-95-96-97.firebaseapp.com",
      databaseURL: "https://class93-94-95-96-97-default-rtdb.firebaseio.com",
      projectId: "class93-94-95-96-97",
      storageBucket: "class93-94-95-96-97.appspot.com",
      messagingSenderId: "137134583005",
      appId: "1:137134583005:web:87c8ea53a406f9a87ebf34"
    };
    
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML = "Your Welcome : " + user_name;
function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose :  "your grand room name is as follow "
      });
      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}
 function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick ='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
       document.getElementById("output").innerHTML += row;

      
      });});}
getData();


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter-page.html";
};

function log_out(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
      
}
