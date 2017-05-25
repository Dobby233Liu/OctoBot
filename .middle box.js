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
		e.message.channel.send('https://static.wamiz.fr/images/animaux/chiens/medium/carlin-980.jpg');
		if (e.message.content == 'oh.way'){
		e.message.channel.send('No way.');
		if (e.message.content == 'oh.crisis'){
		e.message.channel.send('no crisis');
		if (e.message.content == 'octo.randomsong'){
		e.message.channel.send('Here is your random song. https://www.youtube.com/watch?v=i6Mg4WSK_v8');
		if (e.message.content == 'octo.mystery'){
		e.message.channel.send('no mystery');
		if (e.message.content == 'octo.no'){
		e.message.channel.send('oh');
		if (e.message.content == 'octo.about'){
		e.message.channel.send('You wont know it and you wont see it');
		if (e.message.content == 'octo.oh'){
		e.message.channel.send('Oh !');
		if (e.message.content == 'octo.hello'){
		e.message.channel.send('Hello');
		if (e.message.content == 'octo.noprog'){
		e.message.channel.('I wasnt been programmed for that.');
    	 (e.message.content == 'octo.hOi'){
		e.message.channel.send('yA!!! yOu hs tEmmmmmm! ');
