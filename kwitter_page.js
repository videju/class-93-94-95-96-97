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
    firebase.initializeApp = initializeApp(firebaseConfig);
 room_name = localStorage.getItem("room_name");
 user_name = localStorage.getItem("user_name");
 function send() { 
   msg = document.getElementById("msg").value;
   firebase.database().ref(room_name).push({
         name:user_name,
         message:msg,
         like:0
   });


   document.getElementById("msg").value = "";
 }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

         console.log(firebase_message_id);
         console.log(message_data);
         uname = message_data['name'];
         message = message_data['message'];
         like  = message_data['like'];
         name_with_tag = "<h4> "+ uname + "<img class = 'user-tick' src='tick.png'></h4>";
         message_with_tag = "<h4 class ='message_h4'>" +message + "</h4>";
         like_button ="<button class ='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick = 'updateLike(this.id)'> ";
         span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'>like: "+ like + "</span></button><hr>";
          

         row = name_with_tag + message_with-tag +like_button + span_with_tag;
         document.getElementById("output").innerHTML += row;


      } });  }); }
getData();

function updateLike(message_id)
{
      console.log("clicked on like button - " + message_id);
      button_id= "message_id";
      likes = document.getElementById(button-id).value;
      updates_likes =Number(likes) + 1;
      console.log(updates_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updates_likes
      });
};