import React from 'react';

const testContext = React.createContext();

const {Provider,Consumer} = testContext;

export{
    Provider,
    Consumer,
    testContext
}