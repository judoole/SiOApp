require 'sinatra'
require 'sinatra/reloader'
require 'open-uri'
require 'nokogiri'

get '/' do
  File.read(File.join('public', 'index.html'))
end

get '/cantina/:id' do
  uri = "http://www.sio.no/wps/portal/?WCM_GLOBAL_CONTEXT=/wps/wcm/connect/migration/sio/mat+og+drikke/dagens+middag/aho"
  doc = Nokogiri::HTML(open(uri))
  "This is cantina: " + doc.css('div.sioArticleBody')[0]
end
