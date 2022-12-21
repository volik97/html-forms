const checkboxOnClick = e => {
	Array.from(
		e.target.closest("li").getElementsByClassName("interest__check")
	).forEach(element => {
		element.checked = e.target.checked;
		element.indeterminate = false;
	});

	const changeParents = element => {
		let parent = element.parentElement.closest("li");
		let elementCheckbox =
			element.parentElement.firstElementChild.firstElementChild
			.firstElementChild;

		if (parent) {
			let checked = elementCheckbox.checked;
			let flagIndeterminate = elementCheckbox.indeterminate;

			Array.from(element.parentElement.children).forEach(el => {
				let elCheckbox = el.firstElementChild.firstElementChild;
				if (elCheckbox.checked != checked || elCheckbox.indeterminate) {
					flagIndeterminate = true;
				}
			});

			let parentCheckbox = parent.firstElementChild.firstElementChild;

			if (flagIndeterminate) {
				parentCheckbox.indeterminate = true;
			} else {
				parentCheckbox.indeterminate = false;
				parentCheckbox.checked = checked;
			}

			changeParents(parent);
		}
	};

	changeParents(e.target.closest("li"));
};

Array.from(document.getElementsByClassName("interest__check")).forEach(
	element => {
		element.addEventListener("click", checkboxOnClick, false);
	}
);