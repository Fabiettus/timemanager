import Statistics from "./views/Statistics.svelte";
import { Helpers } from "./lib/helpers";
import { PagePjax } from "./lib/pjax";
const components = [];

$(document).ready(function () {
	if ($('input[name="duration"]').length > 0) {
		$('input[name="duration"]')[0].focus();
	}
});

components.push(
	new Statistics({
		target: Helpers.replaceNode(document.querySelector("#content.app-timemanager [data-svelte='statistics']")),
		props: {},
	})
);

components.push(new PagePjax(() => {}));