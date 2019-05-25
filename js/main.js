(() => {

	console.log('SVG-Icons');

	let buttonSet = document.querySelectorAll("button")




    function svgClick() {
        console.log(this.previousElementSibling.id)
    }


    for(let i=0; i<buttonSet.length; i++) {
        buttonSet[i].addEventListener("click", svgClick, false);
    }

})();