const express = require("express");
const app = express();
const port = 100;
var HttpStatus = require('http-status-codes')

var userList = ["ahmet","emre","fatih","cumali"]






app.get("/", (req, res) => {
  res.json([
    {
      name: "abdullah",
    },
    {
      name: "abdullah",
    },
    {
      name: "abdullah",
    },
    {
      name: "abdullah",
    },
    {
      name: "abdullah",
    },
  ]).sendStatus(HttpStatus.OK);
});
app.listen(port, () => console.log(`Example app listening on port port!`));

app.use(express.json());

// users end pointine bir liste  gönderip onu mapleyip ekranda basmış olduk.


app.get("/users", (req, res) => {
  res.json( 
  userListMap()
  ).sendStatus(HttpStatus.OK);
});



function userListMap() {
 return userList.map(value => ({
    "name" :value,
   }))
}


// users listesine post medthodu ile veri ekliyor
app.post('/users', function (req, res) {

//  var body = req.body
//userList.push(body.name)
const {name} = req.body
userList.push(name)
   
  res.sendStatus(HttpStatus.OK)
})


// delete methodu 
app.delete('/users/:name', function(req, res) {
  const { name } = req.params;
  userList = userList.filter(user => {
    return user != name
  })
  res.send(userListMap()) ;
});



app.put('/users/:name', function(req, res) {
  const { name } = req.params;
  const {newName} = req.query

  userList = userList.map(user => {
    return user == name ? newName : name
  })
  res.send(userListMap()) ;
});