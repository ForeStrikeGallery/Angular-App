


app = angular.module('notesApp', []);

app.controller('MainCtrl', function() {
	var self = this;
	self.message = 'Bad day this was!';
	
	self.data = [
		{
			id: 34,
			name: 'Mridul Mohan',
			img_src: 'photo1.png',
			post: 'I was always of the opinion that onions made us cry because they were cruel.'
		},

		{
			id: 32,
			name: 'Megha Ajay',
			img_src: 'photo2.png',
			post: 'Yes Mridul, I agree with you :D'
		},
	];


	self.addPost = function(post) {
		self.data.push({
			id: 2,
			name: 'Mridul Mohan',
			img_src: 'photo1.png',
			post: post
		});
	}
	
});
