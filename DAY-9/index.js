/*
import express from 'express';
const app = express();
app.get('/', (req, res) => {
 // console.log(req);
     //1.req.params
     //2.req.query
     //3.req.body
     //4.req.headers
        // console.log({
        //   body :req.body,
        //   params :req.params,
        //   query :req.query,
        //   headers :req.headers
        // })

        // console.log({
        //   params:req.params, // here params not work
        //   query:req.query
        // })

  res.json({
    message:"Hello Ji ❤️‍🔥"
  });

});
app.listen(8000, () => {
  console.log('server is running on 8000');
});
*/
//------------------------------------------------------------
/*
import express from 'express';
const app = express();
app.get('/:id', (req, res) => {
 // console.log(req);
     //1.req.params
     //2.req.query
     //3.req.body
     //4.req.headers


        console.log({
          params:req.params, // here params will work check req url
          query:req.query
        })

        //Here we can destructre the params and query
        const {name,age} = req.query;
        const {id} = req.params;
  res.send("<h1 style ='color:red'>Hello ji ❤️‍🔥</h1>")

});
app.listen(8000, () => {
  console.log('server is running on 8000');
});
*/
//------------------------------------------------------------
import express from 'express';
const app = express();
app.use(express.json());
app.post('/create', (req, res) => {
  console.log(req.headers);
  const {username} = req.body;
  // here when we hit req to this endpoint it shows error becuase the data is in json but express don't know it you need to use global middleware
  res.json({
    message:"Hello Iam from create Endpoint",
    name:username
  })

});
app.listen(8000, () => {
  console.log('server is running on 8000');
});
