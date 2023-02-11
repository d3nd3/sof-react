import './css/App.css'
import React, { useEffect, useState } from 'react';
import {
   useQuery,
   useMutation,
   useQueryClient,
   UseQueryOptions
 } from 'react-query'

import {serverListToObject} from './util'
import {Servers, Server} from './types'

import serverListText from './api/serverlist.txt'

import Sidebar from './Sidebar'
import MainContent from './MainContent'


// Access the client
//const queryClient = useQueryClient()
function App() {
  console.log("render App");
  // useEffect( () => {
  //   console.log("useEffectsApp");
  //   let elements = document.querySelectorAll('.child') as NodeListOf<HTMLElement>;

  //   function getRandomColor() {
  //     let letters = '0123456789ABCDEF';
  //     let color = '#';
  //     for (let i = 0; i < 6; i++) {
  //       color += letters[Math.floor(Math.random() * 16)];
  //     }
  //     return color;
  //   }

  //   elements.forEach(element => {
  //     element.style.backgroundColor = getRandomColor();
  //   });
  // });

  const serverList = useQuery('megalag-server-list', async () => {
    console.log("useQueryApp")
    // const res = await fetch('https://sof1.megalag.org/server/status/json/?version=1&ip=5.135.46.179&hostport=28916')
    //await res.text()
    const res = await fetch(serverListText)
    const serversObj:Servers = serverListToObject(await res.text())
    return serversObj
  });

  if (serverList.isLoading) {
    return <span>Loading...</span>
  }

  if (serverList.isError) {
    let err = serverList.error as Error
    return <span>Error: {err.message}</span>
  }

  console.log(serverList)
  // console.log( "type of " ,typeof serverList.data.data );
  // serverList.data.data.forEach(item => {
  //   console.log(item)
  // });
  
  return (
      
      <div className="app" style={{"backgroundColor": "black"}}>
        <Sidebar />
        <MainContent />
      </div>
  )
}
export default App
