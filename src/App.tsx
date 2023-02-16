import './css/App.css'
import React, { useEffect, useState , useRef} from 'react';
import {
   useQuery,
   useMutation,
   useQueryClient,
   UseQueryOptions
 } from 'react-query'

import {serverListToObject} from './util'
import {Servers, Server} from './types'

import serverListText from './api/serverlist.txt'
import MenuButton from "./MenuButton"



// Access the client
//const queryClient = useQueryClient()
function App() {
  console.log("render App");

  // this ref is passed to SideBar
  const childRef = useRef<HTMLDivElement>(null);

  const [width,setWidth] = useState<number | null>(0);
  const [renderCounter,setRenderCounter] = useState(0);
  const [transitionsActive,setTransitionsActive] = useState(false);
  // const [siteInitalised, setInitialised] = useState(false);
  const intentFromButton = () => {
    // trigger re-render
    setRenderCounter(renderCounter+1);
    // enable Transitions
    if ( renderCounter > 0) setTransitionsActive(true)
  }

  // useEffect(() => {
  //   let timeoutId = setTimeout(() => {
  //     setInitialised(true);
  //   }, 500); // Set a delay of 1 second before showing content

  //   return () => clearTimeout(timeoutId);
  // }, []); // Only run on mount

  useEffect(() => {
    console.log("useEffect App")
    if ( childRef.current) {
      if (width) setWidth(0)
      else setWidth(childRef.current.offsetWidth)
    }
    
  },[renderCounter])
  
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
      <div className={`app ${transitionsActive ? 'transitions-on' : ''}`} style={{marginLeft: `${width}px`}}>
        <div className="titlebar">
          <MenuButton intentFromButton={intentFromButton} ref={childRef} />
          <h1>Welcome to <span style={{color:"yellowgreen"}}>S</span><span style={{color:"forestgreen"}}>o</span><span style={{color:"yellowgreen"}}>F</span><span style={{color:"forestgreen"}}>1</span> FanPage</h1>
        </div>
        <div className="othercontent"> Other Content </div>
      </div>
  )
}
export default App
