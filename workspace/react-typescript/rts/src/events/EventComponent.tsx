import React from 'react';

const EventComponent: React.FC = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('e ', event);
  };

  return (
    <div>
      <input onChange={onChange} />
    </div>
  );
};

export default EventComponent;
