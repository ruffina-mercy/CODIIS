import React, { useState } from 'react';

const CustomerGrouping = () => {
  const [customers, setCustomers] = useState([
    { id: 1, name: 'Ajay' },
    { id: 2, name: 'Anu' },
    { id: 3, name: 'Jeni' },
    { id: 4, name: 'John' },
  ]);

  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const [groupName, setGroupName] = useState('');
  const [groups, setGroups] = useState([]);
  const [error, setError] = useState("");

  const handleCustomerSelect = (customerId) => {
    const isSelected = selectedCustomers.includes(customerId);

    if (isSelected) {
      setSelectedCustomers((prevSelected) =>
        prevSelected.filter((id) => id !== customerId)
      );
    } else {
      setSelectedCustomers((prevSelected) => [...prevSelected, customerId]);
    }
  };

  const handleGroupNameChange = (event) => {
    setGroupName(event.target.value);
  };

  const createGroup = () => {
    if (groupName && selectedCustomers.length > 0) {
      const selectedCustomerNames = selectedCustomers.map((customerId) =>
        customers.find((customer) => customer.id === customerId)?.name
      );

      const newGroup = { name: groupName, customers: selectedCustomerNames };
      setGroups((prevGroups) => [...prevGroups, newGroup]);

      setSelectedCustomers([]);
      setGroupName('');
    } else {
      setError('Please provide a group name and select at least one customer.')
    }
  };

  return (
    <div className="flex flex-col p-4">
      <h2 className="text-2xl font-bold mb-4">Create Customer Group</h2>
      <div className='mb-4'>
        <a href='#/favorite'className='bg-green-400 px-3 py-1 border-green-400 cursor-pointer rounded text-white '>Favourites</a>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Customers</h3>
        <ul>
          {customers.map((customer) => (
            <li key={customer.id} className="mb-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedCustomers.includes(customer.id)}
                  onChange={() => handleCustomerSelect(customer.id)}
                  className="mr-2"
                />
                {customer.name}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Group Information</h3>
        <label className="flex items-center">
          <span className="mr-2">Group Name:</span>
          <input
            type="text"
            value={groupName}
            onChange={handleGroupNameChange}
            className="p-2 border border-gray-300"
          />
        </label>
                {error && <p className="text-red-500">{error}</p>}

      </div>
      <button onClick={createGroup} className="bg-green-400 text-white py-2 px-4 rounded">
        Create Group
      </button>

      {groups.length > 0 && (
        <div className="mt-4">
          <h2 className="text-2xl font-bold mb-2">List of Groups</h2>
          <ul>
            {groups.map((group, index) => (
              <li key={index} className="mb-2">
                <div className=" border p-3 rounded">
                  <h3 className="text-xl font-bold">{group.name}</h3>
                  <p>Customers: {group.customers.join(', ')}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomerGrouping;
