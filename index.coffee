pad = require './pad.js'
console.log pad
console.log "+------------------+"
console.log "| Democratiescherm |"
console.log "+------------------+"
console.log "|     Loading...   |"
log = (str) ->
	l = str.length
	la = (18-l)/2
	lb = la
	even = la is Math.floor la
	while lb > 0
		str = " #{str} "
		lb--
	if not even
		str = "#{str} "
	console.log "|#{str}|"