function excuseGenerator() {
	var myCat = ['dog', 'cat', 'sense of ennui', 'hamster', 'chinchilla', 'iguana', 'turtle', 'best friend', 'bro', 'boo', 'crush', 'sister', 'brother', 'nemesis', 'doppelganger', 'gerbil', 'bunny', 'fish', 'crew'];
	var madeMe = ['ate', 'peer-reviewed', 'destroyed', 'deleted', 'erased', 'remixed', 'twitched', 'recycled', 'livetweeted', 'undermined', 'underbid', 'upcycled', 'gave away', 'plagiarised', 'confiscated', 'barfed on', 'stole', 'ransomed', 'spilled water on', 'lost', 'misplaced', 'buried', 'shredded', 'hid', 'liberated', 'left with', 'ebayed', 'craigslisted', 'etsyed', 'tweeted', 'instagrammed', 'snapchatted', 'youtubed', 'dunked on', 'subteweeted', 'favorited', 'upvoted', 'downvoted', 'live cast', 'pinned', 'vlogged', 'blogged about'];
	var doIt = ['project', 'proposal', 'film project', 'visualization', 'infographic', 'design paper', 'lab report', 'summary', 'article', 'workbook', 'dreams', 'laptop', 'computer', 'tablet', 'momentum', 'report', 'slideshow', 'slide deck', 'presentation', 'handout', 'notes', 'portfolio', 'blog post', 'comment', 'phone'];

	var who = myCat[Math.round(Math.random()*(myCat.length-1))];
	var did = madeMe[Math.round(Math.random()*(madeMe.length-1))];
	var what = doIt[Math.round(Math.random()*(doIt.length-1))];

	document.getElementById('excuse').innerHTML = '<div>My ' + who + ' ' + did + '<br> my ' + what + '.</div>'
}