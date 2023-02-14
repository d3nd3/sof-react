import './css/MainContent.css'
function MainContent({menuOpen,button}) {
	console.log("menuOpen is " ,menuOpen);
	console.log("button is ",button);
	return (
		<div className="maincontent">
			<h1>Welcome to SoF1 FanPage.</h1>
			{!menuOpen && button}
			<div> Other Content </div>
		</div>
	);
}

export default MainContent;