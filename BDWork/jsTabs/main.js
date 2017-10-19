function tabsInit() {
	const tabs = document.querySelectorAll('.tab');
	const contents = document.querySelectorAll('.tab-content');
	const tabsWrap = document.querySelector('.tabs-titles-wrap');
	const activeClass = 'active'

	tabsWrap.addEventListener('click', e => {
		const target = e.target;

		if (target.classList.contains('tab')) {
			[...tabs].forEach((tab, tabIndex, tabArray) => {
				const tabClasses = tab.classList;
				const contentClasses = contents[tabIndex].classList;

				if (target === tab) {
					tabClasses.add(activeClass);
					contentClasses.add(activeClass);
				}
				else {
					tabClasses.remove(activeClass);
					contentClasses.remove(activeClass);
				}
			});
		}
	});
}

tabsInit();