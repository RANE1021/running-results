import React from 'react';

const Image  = require('./running_nyc.jpg')

const ImageComponent =  () => (
  <div>
    <img src={Image} alt="NYC Marathon 2016" width="425" height="650"/>
  </div>
);

export default ImageComponent;
