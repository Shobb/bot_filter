function handler(event) {
    
    function ipToA(ip) {
        var a = ip.split('.');
        if (a.length != 4) return null;
        var r = [];
        for (var i = 0; i < a.length; i++) {
            var n = Number(a[i]);
            if (isNaN(n)) {
                return null;
            }
            r.push(n);
        }
        return r;
    }
    
function IsInRange(a, a12) {
    var a1 = a12[0];
    var a2 = a12[1];
    for (var i = 0; i < a1.length; i++) {
        var itm = a[i];
        var itm1 = a1[i];
        var itm2 = a2[i];
        if ((itm >= itm1) && (itm <= itm2)) {
            continue;
        } else {
            return false;
        }
    }
    return true;
}    
    
    var response401 = {
        statusCode: 401,
        statusDescription: 'Forbidden'
    };
    var request = event.request;
    var clientIP = event.viewer.ip;    
    var uri = request.uri || '';    
    var hagent = request.headers['user-agent'];
    var agent = '';
    
if (!hagent) {
    return response401;
}

var ip_ranges = [
    [[5,188,62],[5,188,62]],
    [[20,185,79],[20,185,79]],
    [[ 23,175, 48] , [ 23,175, 48]],    
    [[45,89,173],[45,89,173]],
    [[ 50, 16,241] , [ 50, 16,241]],    
    [[ 68,183,  0] , [ 68,183,255]],    
    [[77,81,136,0],[77,81,136,127]],
    [[ 89, 46,104],  [ 89, 46,111]],
    [[93,158,91] ,[93,158,91]],
    [[103,152,248] , [103,152,249]],
    [[123,58,192,0],[123,58,223,255]],
    [[128,199] , [128,199]],
    [[143,110,128] , [143,110,255]],
    [[143,198,  0] , [143,198,255]],
    [[143,244,128] , [143,244,255]],
    [[152, 32,128] , [152, 32,255]],    
    [[157,245] , [157,245]],    
    [[159,89] , [159,89]],
    [[165, 22,  0] , [165 ,22,255]],    
    [[167, 71,  0] , [167, 71,255]],
    [[167,172,  0] , [167,172,255]],
    [[174,138,  0] , [174,138,127]],
    [[176,10,99,192],[176,10,99,223]],
    [[178,128],[178,128]],    
    [[185,220,101,1],[185,220,101,  8]],    
    [[185,119,81],[185,119,81]],
    [[188,166,224],[188,166,239]],
	[[192,99,18],[192,99,18]],
	[[192,36,70],[192,36,71]],
    [[192,36,248],[192,36,248]],
    [[192,71,126],[192,71,126]],
    [[192,71,10],[192,71,10]],
    [[192,71,36],[192,71,36]],
    [[198,204,238,208],[198,204,238,215]],
    [[202,178,120],[202,178,120]],
    [[206,189,  0] , [206,189,255]]
];

var nip = ipToA(clientIP);
if(nip) {
    for(var i=0; i < ip_ranges.length; i++) {
        if(IsInRange(nip,ip_ranges[i])) {
           return response401;            
        }
    }
}


var ip_list = ['3.81.214.253','3.143.116.239',
        '13.67.217.63','13.90.62.193',
        '18.118.55.144','18.159.129.244','18.236.227.114',
        '20.213.121.189','20.40.74.89','20.51.190.137','20.63.222.45',
        '20.79.184.175','20.120.9.74','20.121.217.107','20.124.128.86','20.191.45.212',
		'23.96.82.40','23.99.97.154',
		'34.82.18.100','34.87.23.23','34.87.33.51','34.87.37.91','34.87.54.80','34.87.181.84',
		'34.94.247.253','34.102.92.4','34.125.143.203','34.126.71.228','34.126.121.180',
		'34.126.137.241','34.130.238.217','34.140.216.91',
		'35.162.158.7','35.185.183.55',
		'35.187.230.112','35.197.214.196','35.225.63.186','35.238.40.172',
		'35.240.132.189','35.240.134.231','35.240.169.164','35.240.182.49',
		'37.18.15.116',
		'38.122.112.147',
		'40.76.162.191','40.76.162.208','40.76.173.151','40.121.160.179','40.125.67.32',
		'45.251.235.152',
		'50.16.247.234',
		'52.34.110.140','52.142.42.112','52.170.76.121','52.188.162.105','52.231.156.255',
		'54.93.110.194','54.184.22.49','54.189.230.128','54.201.174.176','54.208.100.253',
		'64.227.6.219',
		'67.172.82.191','67.205.152.51',
		'78.135.83.168',
		'81.218.45.189',
		'84.17.57.122',
		'92.205.10.243',
		'93.158.92.206',
		'104.248.157.130',
		'114.119.144.105','114.132.41.72',
		'128.90.161.212',
		'134.119.221.30','134.209.27.246','134.209.40.238',
		'137.184.26.236','137.184.50.70','137.184.52.179','137.184.193.67',
		'138.197.153.53','138.246.253.24',
		'139.59.110.149','139.59.241.57',
		'146.70.29.187','146.70.29.188','146.70.31.119',
		'157.55.166.212','159.65.129.39','159.223.74.35','159.223.98.229',
		'161.35.119.252',
		'162.241.244.34',
		'167.99.66.176',
		'171.25.193.78',
		'176.74.192.85','178.62.19.18',
		'180.75.161.103',
		'185.119.81.103','185.191.171.34','185.254.31.122',
		'188.166.189.163',
		'191.96.36.63',
		'193.148.16.252',
		'209.151.153.221',
		'213.74.85.107',
		'2a10:9100:5::11','2001:4ca0:108:42::24','2600:1f18:25d9:1e00:f61c:2637:4eeb:1621'];
		
	for(var i = 0; i < ip_list.length; i++ ) {
	    var ip = ip_list[i];
		if(clientIP===ip) {
	          return response401;
       	}
	}
    
var uri_list = [
'wlwmanifest.xml', 'xmlrpc.php', 'wp-login.php', 'wordpress', '.env','.cgi','.git','.bat',
'/admin', '-admin', 'connector.php', 'credentials', 'config.','wp-links-opml.php'
];

    for(var i = 0; i < uri_list.length; i++ ) {
       var value = uri_list[i];
        if(uri.indexOf(value)>=0) {
            return response401;
        }
    }
    
    
    if(hagent) {
        agent = hagent.value || '';
    }
    
if(agent) {
    
 var bot_list = [
'null','Expanse',     
'anonymousfox.c','AhrefsBot','PetalBot', 'NetSystemsResearch','Dataprovider.com',
'/mj12bot.com','SemrushBot', 'SeznamBot/', 'scaninfo@expanseinc.com','Barkrowler',
'https://neeva.com/neevabot','domainsbot.com/', '/about.censys.io',
'/code.google.com/appengine','; Orbbot/','PostmanRuntime/','pandalytics',
'coccocbot','punkspider.io','CATExplorador/','NetcraftSurveyAgent/',
'ALittle Client','serpstatbot/','gocolly/','LightspeedSystemsCrawler',
'4D_HTTP_Client','android-async-http','axios','andyhttp','ansible-httpget','Aplix',
'akka-http','attohttpc','curl','CakePHP','Cowblog','DAP/NetHTTP','Dispatch','fasthttp',
'FireEyeHttpScan','Go-http-client','Go1.1packagehttp','Go 1.1 package http','Go http package',
'Go-http-client','Gree_HTTP_Loader','GuzzleHttp','hyp_http_request','HTTPConnect','HttpGenerator',
'http generic','Httparty','HTTPing','http-ping','http.rb/','HTTPREAD','Java-http-client',
'Jodd HTTP','raynette_httprequest','java/','kurl','Laminas_Http_Client','libsoup','libhttp',
'lua-resty-http','mio_httpc','mozillacompatible','nghttp2','mio_httpc','Miro-HttpClient',
'php/','phpscraper','PHX HTTP','PHX HTTP Client','python-requests','Python-urllib',
'restful','rpm-bot','RxnetHttp','seostar','scalaj-http','SP-Http-Client','Stilo OMHTTP','tiehttp','ThinkChaos',
'Valve/Steam','vuhuvBot','Wget','Wolfram','Zend_Http_Client','ZendHttpClient'
];
    
    for(var i = 0; i < bot_list.length; i++ ) {
       var value = bot_list[i];
       if(agent.indexOf(value)>=0) {
           return response401;
       }
    }
}
    
   return request;
}