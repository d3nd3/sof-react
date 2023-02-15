import './css/SideBar.css'
import {useRef, forwardRef} from 'react'

// ref is shared with App Component
const Sidebar = forwardRef( (props,ref) => {

	return (
		<div className={`sidebar ${props.menuOpen ? 'open' : ''}`} ref={ref}>
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