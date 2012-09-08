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
	str
log false
log "Democratiescherm"
log ""
log false
load = (mname) ->
	log mname.replace ".js",""
	modules[mname] = require "./modules/#{mname}"
load i for i in fs.readdirSync "./modules"
express = require "express"
server = express()
log false
server.get "/module/:module", (req,res) ->
	a = modules[req.params.module].clientCode()
	doo = (c,b) ->
		log typeof b
		if typeof b == "function"
			a[c] = b.toString()
	doo c,b for c,b of a
	log false
	res.write JSON.stringify a
	res.end()
server.get "/login/:module", (req,res) ->
	console.log req.query
	res.send JSON.stringify modules[req.params.module].serverCode.login(req.query.user, req.query.pass)
	res.end
server.use express.static __dirname
server.listen 8081