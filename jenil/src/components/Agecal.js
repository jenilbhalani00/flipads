import React, { useState } from 'react';

function AgeCalculator()
{
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(0);
  const [birthDay, setBirthDay] = useState('');
  const [birthMonth, setBirthMonth] = useState('');

  const handleChange = (e) => {
    setBirthDate(e.target.value);
  };

  const calculateAge = () => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    const ageDifference = today.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = today.getMonth() - birthDateObj.getMonth();
    console.log(monthDifference)

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDateObj.getDate())) {
    //   ageDifference--;
    }

    setAge(ageDifference);
    setBirthDay(birthDateObj.getDate());
    setBirthMonth(birthDateObj.toLocaleString('default', { month: 'long' }));
  };

  return (
    <div>
      <input type="date" value={birthDate} onChange={handleChange} />
      <button type="button" onClick={calculateAge}>
        Calculate Age
      </button>
      <p>Your age is: {age}</p>
      <p>Your birth day is: {birthDay}</p>
      <p>Your birth month is: {birthMonth}</p>
    </div>
  );
};

export default AgeCalculator;