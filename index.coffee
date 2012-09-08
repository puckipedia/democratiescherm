pad = require './pad.js'
fs = require 'fs'
modules = {}
log = (str=false) ->
	if str is false
		return console.log "+------------------+"
	l = str.length
	la = (18-l)/2
	lb = Math.floor la
	even = la is Math.floor la
	while lb > 0
		str = " #{str} "
		lb--
	if not even
		str = "#{str} "
	console.log "|#{str}|"
log false
log "Democratiescherm"
log ""
log false
load = (mname) ->
	log mname.replace ".js",""
	modules[mname] = require "./modules/#{mname}"
load i for i in fs.readdirSync "./modules"

console.log "+------------------+"
console.log modules
express = require "express"
server = express()
server.get "/module/:module", (req,res) ->
	res.send JSON.stringify modules[req.params.module].clientCode()
	res.end
server.listen 8081