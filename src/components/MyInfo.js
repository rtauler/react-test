import React from 'react';
import '../test.css';
import TestComp from './TestComp';

function MyInfo(){
  return(
    <div>
      <h1>Roman</h1>
      <TestComp />
      <p>Description text</p>
      <ol>
      <li>Noruega</li>
      <li>Suiza</li>
      <li>Islandia</li>
      </ol>
    </div>
    )
}


export default MyInfo;