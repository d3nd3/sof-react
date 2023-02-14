import './css/SideBar.css'

import { useState } from "react";

function Sidebar() {
	const [hidden, setHidden] = useState(true);
	let showMenu =
		<ul>
			<li>Server List</li>
			<li>Maps</li>
			<li>Skins</li>
			<li>Mods</li>
			<li>Contact</li>
		</ul>;

	let buttonLabel = hidden ? "Show Menu" : "Hide Menu";
	return (
		<div className="sidebar">
			<button type="button" onClick={()=>setHidden(!hidden)}>{buttonLabel}</button>
			{hidden || showMenu}
		</div>
	);
}

export default Sidebar;