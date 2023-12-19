import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import './styles.css';
import yogaImage from './images/yoga.jpg';

const App = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    batch: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    const ageNumber = parseInt(formData.age, 10);
    if (isNaN(ageNumber) || ageNumber < 18 || ageNumber > 65) {
      console.error('Invalid age. Please enter a valid age between 18 and 65.');
    
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/enroll', formData);
      console.log('Server Response:', response.data);

  
      alert('Enrollment successful!');
      navigate(`/SuccessPage?name=${formData.name}&age=${formData.age}&batch=${formData.batch}`);

      setFormData({
        name: '',
        age: '',
        batch: '',
      });

 
      navigate('/SuccessPage');
    } catch (error) {
      console.error('Error enrolling:', error.response ? error.response.data : error.message);
    
      alert('Error during enrollment. Please try again.');
    }
  };

  return (
    <div className="app-container">
      <div className="container">
        <h1>Yoga Class Admission Form</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>
          <label>
            Age:
            <input type="number" name="age" value={formData.age} onChange={handleChange} />
          </label>
          <label>
            Batch:
            <select name="batch" value={formData.batch} onChange={handleChange}>
              <option value="">Select Batch</option>
              <option value="6-7AM">6-7AM</option>
              <option value="7-8AM">7-8AM</option>
              <option value="8-9AM">8-9AM</option>
              <option value="5-6PM">5-6PM</option>
            </select>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="image-container">
        <img className="random-image" src={yogaImage} alt="Random Placeholder Image" />
      </div>
    </div>
  );
};

export default App;


