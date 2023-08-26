const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/portfolio-form",
{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Connection successful..."))
.catch((err) => console.log(err));

// Define the schema for the form data
const formSchema = new mongoose.Schema({
  title: String,
  email: String,
  msg: String
});

// Create a model based on the schema
const FormModel = mongoose.model("FormModel", formSchema);

// Route for the root API endpoint
app.get('/api', (req, res) => {
  res.send("Form server");
});

// Route to handle form data submission
app.post("/api/form", (req, res) => {
  const form = req.body;
  console.log('Received form data:', form);

  // Create a new document based on the FormModel
  
  const createDocument = async (form) => {
    
    // const formdata=JSON.stringify(form);
    // console.log('Received form data:', formdata);
    try {
      const formData = new FormModel({
        title: form.form.title,
        email: form.form.email,
        msg: form.form.msg
      });

      console.log(formData);
  
      const result = await formData.save();
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  createDocument(form);

  // Send a response back to the client
  res.json({ message: 'Form data received successfully!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
