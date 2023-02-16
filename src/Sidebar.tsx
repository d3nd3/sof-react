import './css/SideBar.css'
import {useCallback,useEffect,useState,useRef, forwardRef} from 'react'
import rafSchd from 'raf-schd'

// ref is shared with App Component
const Sidebar = forwardRef( (props:any,ref:any) => {
	const [scrollTop, setScrollTop] = useState(0)
	const [initialHeight,setInitialHeight] = useState(window.innerHeight)

/*
	const rafCallback = useCallback(
		rafSchd(() => {
			setInitialHeight(window.innerHeight)
		}),[] );
*/
/*
	useEffect(() => {
		console.log("RAF useEffect")
		
		setInterval(()=>{
			rafCallback()
		},10)

		//cleanup
		return () => {
			console.log("RAF Sidebar cleanup")
			rafCallback.cancel()
		};
	}, [rafCallback])
	*/
// scrollTop === 0 ? window.innerHeight : window.outerHeight
// 672 728 -> 56
	return (
		<div className={`sidebar ${props.menuOpen ? 'open' : ''}`} ref={ref} >
			<ul>
				<li>Server List</li>
				<li>Maps</li>
				<li>Skins</li>
				<li>Mods</li>
				<li>Contact</li>
			</ul>
		</div>
	)
} )

export default Sidebar