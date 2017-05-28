var Discordie = require('discordie');

const Events = Discordie.Events;
const client = new Discordie ();

client.connect{{
	token: 'pls add that ken here now'
});

client.Dispatcher.on(Events.GATEWAY_READY, 0=> {
	console.log('Connected as: '  + client.User.Username')
	});
	
	client.Dispatcher.on(Events.MESSAGE_CREATE,  0 => {
		if (e.message.content == 'Bing') {
		e.message.channel.sendMessage('Bong');
		if (e.message.content == 'dogs'){
		e.message.channel.sendMessage('https://static.wamiz.fr/images/animaux/chiens/medium/carlin-980.jpg');
		if (e.message.content == 'way'){
		e.message.channel.sendMessage('No way.');
		if (e.message.content == 'crisis'){
		e.message.channel.sendMessage('no crisis');
		if (e.message.content == 'randomsong'){
		e.message.channel.sendMessage('Here is your random song. https://www.youtube.com/watch?v=i6Mg4WSK_v8');
		if (e.message.content == 'mystery'){
		e.message.channel.sendMessage('no mystery');
		if (e.message.content == 'no'){
		e.message.channel.send('oh');
		if (e.message.content == 'about'){
		e.message.channel.sendMessage('Commands: Bing, Dogs, Way, crisis, randomsong, mystery, Hello, noprog, more...');
		if (e.message.content == 'oh'){
		e.message.channel.sendMessage('Oh!');
		if (e.message.content == 'hello'){
		e.message.channel.sendMessage('Hello');
		if (e.message.content == 'noprog'){
		e.message.channel.('I wasnt been programmed for that.');
    			if (e.message.content == 'no'){
		e.message.channel.send('oh');
			if (e.message.content == 'hOi'){
		e.message.channel.send('yA!!! yOu hs tEmmmmmm! ');
.               if (e.message.content == 'Chinese'){
		e.message.channel.send('i'm not learned Chinese. ');
