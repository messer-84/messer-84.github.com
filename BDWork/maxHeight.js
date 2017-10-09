		let maxHeight = [...subNavigationLists]
				.map(list => list.offsetHeight)
				.reduce((prev, current) => current > prev ? current : prev, 0);
