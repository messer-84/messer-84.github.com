(function () {
	const searchControl = document.querySelector('.search-control');
	const searchBlock = document.querySelector('.search-block');
	let searchDropIsOpen = false;
	let searchDropIsOver = false;

	const cartControl = document.querySelector('.cart-control');
	const cartBlock = document.querySelector('.cart-block');
	let cartDropIsOpen = false;
	let cartDropIsOver = false;

	changeOverStatus(searchBlock, searchDropIsOver);
	changeOverStatus(cartBlock, cartDropIsOver);
	toggleShowDropDown(searchBlock, searchControl, searchDropIsOpen);
	toggleShowDropDown(cartBlock, cartControl, cartDropIsOpen);

	function toggleClass(block, typeAction, className,) {
		if (typeAction === 'add') {
			block.classList.add(className);
		} else if (typeAction === 'remove') {
			block.classList.remove(className);
		}
	}

	function changeOverStatus(parentBlock, isOver) {
		parentBlock.addEventListener('mouseover',
				toggleClass(parentBlock, 'add', 'over')
		);

		parentBlock.addEventListener('mouseleave',
				toggleClass(parentBlock, 'remove', 'over')
		);
		isOver = !isOver;
	}

	function toggleShowDropDown(parentBlock, controll, dropIsOpen) {
		document.addEventListener('click', e => {
			if (e.target === controll) {
				if (!dropIsOpen) {
					toggleClass(parentBlock, 'add','open');
				} else {
					toggleClass(parentBlock, 'remove', 'open');
				}
				dropIsOpen = !dropIsOpen;
			} else if (!parentBlock.classList.contains('over')) {
				toggleClass(parentBlock, 'remove','open');
				dropIsOpen = false;
			}
		});
	}
})();
