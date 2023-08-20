const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000; // You can change this to any port you prefer

app.use(bodyParser.json());


app.get('/api' , (req,res)=>{
    res.send("form server");
})

app.post("/api/form", (req, res) => {
  const form = req.body;
  console.log('Received form data:', form);
  // Here you can process the formData and send a response back

  res.json({ message: 'Form data received successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
