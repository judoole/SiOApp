PoC on www.SiO.no crossplatform App.

YQL (http://developer.yahoo.com/yql/console/)

Example: Todays dinner from aho.
select * from html where url='http://www.sio.no/wps/portal/?WCM_GLOBAL_CONTEXT=/wps/wcm/connect/migration/sio/mat+og+drikke/dagens+middag/aho' and xpath="//div[@class='sioArticleBody']"


Lenker og overskrift til alle treningstimer
select a from html where url='http://www.sio.no/wps/portal/?&WCM_GLOBAL_CONTEXT=/wps/wcm/connect/migration/SiO/Trening/Timeplan+gruppetrening/' and xpath="//div[@class='artikkelsammendrag']//h3"