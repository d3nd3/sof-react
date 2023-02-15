import "./css/MenuButton.css"
import {useState,forwardRef} from 'react';
import {faBars,faXmark} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


import Sidebar from './Sidebar'

const MenuButton = forwardRef( (props:any,ref) => {
	const [menuOpen, setMenuOpen] = useState(true)
	
	return (
			<>
				<button 
					type="button" 
					onClick={()=>{
						setMenuOpen(!menuOpen)
						props.adjustWidth()
					}}
				>
					<FontAwesomeIcon icon={menuOpen? faXmark : faBars } size="xl" />
				</button>
				<Sidebar menuOpen={menuOpen} ref={ref}/>
			</>
	)
} )

export default MenuButton