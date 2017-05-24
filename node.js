var Discordie = require('discordie');

const Events = Discordie.Events;
const client = new Discordie ();

client.connect{{
	token: 'pls add that token here now'
});

client.Dispatcher.on(Events.GATEWAY_READY, 0=> {
	console.log('Connected as: '  + client.User.Username')
	});
	
	client.Dispatcher.on(Events.MESSAGE_CREATE,  0 => {
		if (e.message.content == 'oh.Bing') {
		e.message.channel.sendMessage('Bong');
		if (e.message.content == 'oh.dogs'){
		e.message.channel.sendMessage('https://static.wamiz.fr/images/animaux/chiens/medium/carlin-980.jpg');
		if (e.message.content == 'oh.way'){
		e.message.channel.sendMessage('No way.');
		if (e.message.content == 'oh.crisis'){
		e.message.channel.sendMessage('no crisis');
		if (e.message.content == 'octo.randomsong'){
		e.message.channel.sendMessage('Here is your random song. https://www.youtube.com/watch?v=i6Mg4WSK_v8');
		if (e.message.content == 'octo.mystery'){
		e.message.channel.sendMessage('no mystery');
		if (e.message.content == 'octo.no'){
		e.message.channel.sendMessage('oh');
		if (e.message.content == 'octo.about'){
		e.message.channel.sendMessage('You wont know it and you wont see it');
		if (e.message.content == 'octo.oh'){
		e.message.channel.sendMessage('Oh !');
		if (e.message.content == 'octo.hello'){
		e.message.channel.sendMessage('Hello');
		if (e.message.content == 'octo.noprog'){
		e.message.channel.sendMessage('I wasnt been programmed for that.');
   
		
