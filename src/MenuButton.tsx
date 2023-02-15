import "./css/MenuButton.css"
import {useEffect,useState,forwardRef} from 'react';
import {faBars,faXmark} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


import Sidebar from './Sidebar'

const MenuButton = forwardRef( (props:any,ref) => {
	const [menuOpen, setMenuOpen] = useState(true)
	useEffect(() => {
		//Notify app the size of the sizebar on Mount, if open by default.
		props.intentFromButton()
	}, [] )
	return (
			<>
				<button 
					type="button" 
					onClick={()=>{
						setMenuOpen(!menuOpen)
						props.intentFromButton()
					}}
				>
					<FontAwesomeIcon style={{display: "inline",position: "relative",top: 0}} icon={menuOpen? faXmark : faBars } size="2xl" />
				</button>
				<Sidebar menuOpen={menuOpen} ref={ref}/>
			</>
	)
} )

export default MenuButton