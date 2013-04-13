document.addEventListener('DOMContentLoaded', function(){
	var el = document.getElementsByName('content');
	if(el && el[0]){
		var editor = new EpicEditor({
			container: 'editor',
			textarea: null,
			clientSideStorage: false /* Doesn't handle different posts, fix this later */,
			basePath: '/themes/default/epiceditor',
			theme: {
				base: '/themes/base/epiceditor.css',
				preview: '/themes/preview/github.css',
				editor: '/themes/editor/hawalius.css'
			},
			file: {
				defaultContent: el[0].textContent
			}
		}).load();
	}
});