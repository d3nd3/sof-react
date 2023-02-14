import './css/SideBar.css'

import { useState } from "react";

function Sidebar({button}) {
	return (
		<div className="sidebar">
			{button}
			<ul>
				<li>Server List</li>
				<li>Maps</li>
				<li>Skins</li>
				<li>Mods</li>
				<li>Contact</li>
			</ul>
		</div>
	);
}

export default Sidebar;