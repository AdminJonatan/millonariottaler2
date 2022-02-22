
import axios from 'axios';
import React, {  useEffect } from 'react';

 var state = ''
var obj = {}

async function getAxios(url) {
    
    const response = await axios.get(url).then(response => {
        if (response.status >= 400) {
            state = 'failed'
        } else {
           
            state = 'success'
        }         
        return response.data
    }).catch(e => {
        state = 'failed'
        return e
    });

    obj = {response, state}
    return obj
    
}

export default getAxios;