import './App.css'
import React, { useEffect, useState } from 'react';
import {
   useQuery,
   useMutation,
   useQueryClient,
 } from 'react-query'

import serverListToObject from './util'


// Access the client
//const queryClient = useQueryClient()
function App() {
  useEffect( () => {
    let elements = document.querySelectorAll('.child');

    function getRandomColor() {
      let letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    elements.forEach(element => {
      element.style.backgroundColor = getRandomColor();
    });
  }, []);

  const serverList = useQuery('megalag-server-list', async () => {
    // const res = await fetch('https://api.github.com/repos/tannerlinsley/react-query')
    const res = await fetch('https://sof1.megalag.org/server/status/json/?version=1&ip=5.135.46.179&hostport=28916')
    const jsonr = serverListToObject(res.json)
    console.log("done");
    return jsonr
  });

  if (serverList.isLoading) {
    return <span>Loading...</span>
  }

  if (serverList.isError) {
    return <span>Error: {serverList.error.message}</span>
  }

  return (
      <div className="app">
        <div className="container" style={{"backgroundColor": "black"}}>

          <div className="child1 child">test1</div>
          <div className="child2 child">test2</div>
          <div className="child1 child">test1</div>
          <div className="child2 child">test2</div>
          <div className="child1 child">test1</div>
          <div className="child2 child">test2</div>
          <div className="child1 child">test1</div>
          <div className="child2 child">test2</div>
          <div className="child1 child">test1</div>
          <div className="child2 child">test2</div>

        </div>
      </div>
      
  )
}
//https://sof1.megalag.org/text/servers.txt
export default App
