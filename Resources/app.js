// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

var cantinas = 
[
{title:"AHO-kafeen", urlid:"aho", hasChild:true},
{title:"Annas spiseri", urlid:"annas%2Bspiseri", hasChild:true},
{title:"Forskningsveien", urlid:"forskningsveien", hasChild:true},
{title:"Frederikke kafe", urlid:"frederikke%2Bkafe+meny", hasChild:true},
{title:"Hannas spiseri", urlid:"hannas%2Bspiseri", hasChild:true},
{title:"InforMATeket", urlid:"informateket", hasChild:true},
{title:"Informatikkafeen", urlid:"informatikkafeen%2Bny", hasChild:true},
{title:"Kafe Athletica", urlid:"kafe+athletica", hasChild:true},
{title:"Kafe Helga", urlid:"kafe%2Bhelga", hasChild:true},
{title:"Kafe Nova", urlid:"kafe%2Bnova", hasChild:true},
{title:"Kafe Ole", urlid:"kafe%2Bole", hasChild:true},
{title:"Kafe Seilduken", urlid:"kafe%2Bseilduken", hasChild:true},
{title:"Musikkhøgskolens kafe", urlid:"musikkhogskolens%2Bkafe%2Bny", hasChild:true},
{title:"Norges idrettshøgskoles kafe", urlid:"nih", hasChild:true},
{title:"Odontologikafeen", urlid:"odontologikafeen", hasChild:true},
{title:"Preklinisk kafe", urlid:"preklinisk%2Bkafe", hasChild:true},
{title:"Spiseriet P35", urlid:"spiseriet%2Bp35", hasChild:true},
{title:"SV kafeen", urlid:"sv%2Bkafeen%2Bny", hasChild:true},
{title:"Veterinærhøgskolens kafe", urlid:"veterinerhogskolen", hasChild:true}
]

var tableView = Titanium.UI.createTableView({data:cantinas});
var window = Titanium.UI.createWindow();
window.add(tableView);
window.open();

tableView.addEventListener('click', function(_e) {
	var xhr = Titanium.Network.createHTTPClient();
	xhr.onload = function(){
		var response = this.responseText;
		Ti.API.info("response = " + response);
		//var doc = this.responseXML.documentElement;
		//var results = doc.getElementsByTagName("results");
		//var results = doc.getElementsByClassName("sioArticleBody");
		//var results = elements.item(0);
		//Ti.API.info("results = " + results);
		
		var webview = Titanium.UI.createWebView({html:response});
		window.add(webview);
		window.open({modal : true});
	}
	
	xhr.open('GET',getYqlUrl(_e.rowData.urlid));
	xhr.send();
	//Titanium.Yahoo.yql(getYqlUrl(_e.rowData.urlid),function(e){
	//	//var data = eval('('+e.data+')');
    //	Ti.API.info(e);
	//});
	
	//var webview = Titanium.UI.createWebView({url : getYqlUrl(_e.rowData.urlid)});
	//window.add(webview);
	//window.open({modal : true});
});

function getYqlUrl(_urlId){
	//return "select * from html where url='http://www.sio.no/wps/portal/?WCM_GLOBAL_CONTEXT=/wps/wcm/connect/migration/sio/mat+og+drikke/dagens+middag/aho' and xpath='//div[@class=\"sioArticleBody\"]'";
	return "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D'http%3A%2F%2Fwww.sio.no%2Fwps%2Fportal%2F%3FWCM_GLOBAL_CONTEXT%3D%2Fwps%2Fwcm%2Fconnect%2Fmigration%2Fsio%2Fmat%2Bog%2Bdrikke%2Fdagens%2Bmiddag%2F"+ _urlId +"'and%20xpath%3D'%2F%2Fdiv%5B%40class%3D%22sioArticleBody%22%5D'"
	//return "http://www.sio.no/wps/portal/?WCM_GLOBAL_CONTEXT=/wps/wcm/connect/migration/sio/mat+og+drikke/dagens+middag/aho";
}
