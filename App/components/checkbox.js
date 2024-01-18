import React, { useState } from 'react';
import { CheckBox, Icon } from '@rneui/themed';


function CheckBoxComponent () {
const [check1, setCheck1] = useState(false);

return (
  <>
    <CheckBox
      center
      title="Click Here"
      checked={check1}
      onPress={() => setCheck1(!check1)}
    />

    
  </>
);
}

export default CheckBoxComponent;