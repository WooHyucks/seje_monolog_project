import { type } from '@testing-library/user-event/dist/type';
import React from 'react';

type SelectBoxType = {
  Value: string
}

const SelectBox = ({ Value }: SelectBoxType) => {
  return (
    <div>
      <select className="border-2 border-gray-200 rounded-lg p-2">
        <option value="">{Value}</option>
        <option value="option1">옵션 1</option>
        <option value="option2">옵션 2</option>
        <option value="option3">옵션 3</option>
      </select>
    </div>
  );
}

export default SelectBox;