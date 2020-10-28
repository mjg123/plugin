import React from 'react';

const axios = require('axios');

// It is recommended to keep components stateless and use redux for managing states

let conferenceSID;

const LionbridgeInterpreter = (props) => {
  conferenceSID = props.conferenceSID;
  return (
    <button type="button" onClick={bridgeInterpreterHandler}>Bridge Interpreter</button>
  );
};

const bridgeInterpreterHandler = async() => {
  try {
    console.log(
      "%cbridgeInterpreterHandler!",
      "color:red;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold"
    );
  
    console.log(`conferenceSID: ${conferenceSID}`);
    //const url = `https://thistle-woodpecker-5562.twil.io/FindConferenceSid`;
  
    const result = await axios({
      method: 'post',
      url: 'https://thistle-woodpecker-5562.twil.io/FindConferenceSid',
      data: {
        conferenceSid: conferenceSID
      }
    });
    console.log(`result: ${JSON.stringify(result)}`);
  } catch(e) {
    console.error(`e: ${e}`);
  }
}

export default LionbridgeInterpreter;
