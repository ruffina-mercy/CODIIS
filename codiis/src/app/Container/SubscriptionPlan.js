import React, { useState } from 'react';

const SubscriptionPlan = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [error, setError] = useState('');
  const [subscribeText, setSubscribeText] = useState("");

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setError('');
  };

  const subscribe = () => {
    // Implement your subscription logic here, based on the selected plan
    if (selectedPlan) {
      setSubscribeText(`Subscribed to ${selectedPlan} plan!`);
      // Add your subscription logic (e.g., payment processing, API calls, etc.)
    } else {
      setError('Please select a subscription plan.');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center border-2 border-gray-200 p-3 w-full m-auto">
      <h2 className="text-2xl font-bold mb-4">Choose a Subscription Plan</h2>
      <a href='#/group' className='bg-green-400 px-3 py-1 border-green-400 cursor-pointer rounded text-white ml-6 mb-4'>Create Group</a>
      <div className="flex justify-around">
        <div className={`plan ${selectedPlan === 'Silver' ? 'selected' : ''}`} onClick={() => handlePlanSelect('Silver')}>
          <h3>Silver Plan</h3>
          <p>Basic features</p>
          <p>Price: ₹199.99/month</p>
        </div>
        <div className={`plan ${selectedPlan === 'Gold' ? 'selected' : ''}`} onClick={() => handlePlanSelect('Gold')}>
          <h3>Gold Plan</h3>
          <p>Additional features</p>
          <p>Price: ₹499.99/month</p>
        </div>
        <div className={`plan ${selectedPlan === 'Platinum' ? 'selected' : ''}`} onClick={() => handlePlanSelect('Platinum')}>
          <h3>Platinum Plan</h3>
          <p>All features</p>
          <p>Price: ₹899.99/month</p>
        </div>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {subscribeText && <p className="text-green-400 mt-2">{subscribeText}</p>}
      <button onClick={subscribe} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Subscribe</button>
    </div>
  );
};

export default SubscriptionPlan;
