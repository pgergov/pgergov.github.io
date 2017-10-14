(function(){
	$(document).ready(function(){
		let $button = $('#search-button');

		$button.click(advancedSearch);
	})
})();

let advancedSearch = () => {
	let searchValue = $('#advanced-search').val();
	const message = "Не бяха намерени резултати за "

	alert(message + searchValue);
}
