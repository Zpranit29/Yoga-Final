import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './SuccessPage.css'; 

const SuccessPage = () => {
  const navigate = useNavigate();
  const { name, age, batch } = useParams();

  const handleMakePayment = () => {
 
    alert('Payment successful! Thank you for enrolling.');

   
  };

  return (
    <div>
      <h2>Enrollment Successful</h2>
     

      <p>Please make a payment of 500 rupees to complete your enrollment.</p>
      
      <button onClick={handleMakePayment}>Make Payment</button>
    </div>
  );
};

export default SuccessPage;



