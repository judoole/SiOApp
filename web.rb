# encoding: utf-8
require 'sinatra'
require 'sinatra/reloader'
require 'open-uri'
require 'nokogiri'

class Cantina
	def initialize(name, urlId, id)
		@name = name
	    @urlId = urlId
	    @id = id
	end

	attr_reader :urlId
	attr_reader :id
	attr_reader :name
end

class MyApp < Sinatra::Base
	set :bind, '0.0.0.0'
	cantinas = [Cantina.new("Kafe Helga", "kafe+helga", 0),
            Cantina.new("AHO-kafeen", "aho", 1),
            Cantina.new("Annas spiseri", "annas+spiseri", 2),
            Cantina.new("Forskningsveien", "forskningsveien", 3),
            Cantina.new("Frederikke kafe", "frederikke+kafe+meny", 4),
            Cantina.new("Hannas spiseri", "hannas+spiseri", 5),
            Cantina.new("InforMATeket", "informateket", 6),
            Cantina.new("Informatikkafeen", "informatikkafeen%2Bny", 7),
            Cantina.new("Kafe Athletica", "kafe+athletica", 8),
            Cantina.new("Kafe Nova", "kafe+nova", 9),
            Cantina.new("Kafe Ole", "kafe+ole", 10),
            Cantina.new("Kafe Seilduken", "kafe+seilduken", 11),
            Cantina.new("Musikkhøgskolens kafe", "musikkhogskolens+kafe+ny", 12),
            Cantina.new("Norges idrettshøgskoles kafe", "nih", 13),
            Cantina.new("Odontologikafeen", "odontologikafeen", 14),
            Cantina.new("Preklinisk kafe", "preklinisk+kafe", 15),
            Cantina.new("Spiseriet P35", "spiseriet+p35", 16),
            Cantina.new("SV kafeen", "sv+kafeen+ny", 17),
            Cantina.new("Veterinærhøgskolens kafe", "veterinerhogskolen", 18)]

	get '/' do
	  	erb :index, :locals => {:allCantinas => cantinas}
	end

	get '/cantina/:id' do
		theid = params[:id].to_i
		cantina = cantinas[theid]
		uri = "http://www.sio.no/wps/portal/?WCM_GLOBAL_CONTEXT=/wps/wcm/connect/migration/sio/mat+og+drikke/dagens+middag/" + cantina.urlId
	  	doc = Nokogiri::HTML(open(uri))
	  	#doc.encoding = 'ISO-8859-1'
	  	erb :detailspage, :locals => {:content => doc.css('div.sioArticleBodyText')[0].to_xml, :name => cantina.name}
	end
end

MyApp.run!