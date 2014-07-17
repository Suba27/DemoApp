/*--------------------------------------------------------------
----------------------------------------------------------------

Document Ready Function

----------------------------------------------------------------
----------------------------------------------------------------*/
$(document).ready(function(){
        	alert("Hello");
        	
        	document.addEventListener("deviceready", onDeviceReady, false);
			document.addEventListener("deviceready", domReady, false);
     //loadHello();
	 //appendPhoto();
	 
		
});
/*function appendPhoto(){
	$("#my").click(function(){
			$("#myImage").append("#smallImage");
			alert ("I append it");
			)};
}*/

function onDOMLoaded(){
	alert('DOM Loaded');

}
/*--------------------------------------------------------------
----------------------------------------------------------------
Geolocation

----------------------------------------------------------------
----------------------------------------------------------------*/
	
	function domReady(){
		navigator.geolocation.getCurrentPosition(onSuccess, onError);
	}
	
	
	
	// onSuccess Geolocation
    //
    function onSuccess(position) {
        var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                            'Longitude: '          + position.coords.longitude             + '<br />' +
                            'Altitude: '           + position.coords.altitude              + '<br />' +
                            'Accuracy: '           + position.coords.accuracy              + '<br />' +
                            'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                            'Heading: '            + position.coords.heading               + '<br />' +
                            'Speed: '              + position.coords.speed                 + '<br />' +
                            'Timestamp: '          + new Date(position.timestamp)                    + '<br />';
    }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
	
/*--------------------------------------------------------------
----------------------------------------------------------------

Camera

----------------------------------------------------------------
----------------------------------------------------------------*/
	var pictureSource;   // picture source
    var destinationType; // sets the format of returned value
	var i;
    // Wait for device API libraries to load
    //
    //document.addEventListener("deviceready",onDeviceReady,false);

    // device APIs are available
	//
	
    function onDeviceReady() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
		i = 0;
    }

    // Called when a photo is successfully retrieved
    //
    function onPhotoDataSuccess1(imageURI) {
      // Uncomment to view the base64-encoded image data
      // console.log(imageData);

      // Get image handle 
      //

      var smallImage = document.getElementById('smallImage');
	  
	   //myImage=  "<img style="display:none;width:60px;height:60px;" id="smallImage" src=""/>";

	   //document.getElementById("demo").innerHTML = myImage;
	  

	 // smallImage.src = imageURI;
      // Unhide image elements
      //
      smallImage.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      smallImage.src = imageURI;
	  //smallImage.src = "data:image/jpeg;base64," + imageData;
	  
	 /*var sImage = document.getElementById('sImage');
	  sImage.style.display = 'block';
      sImage.src = imageURI;*/
	  i++;
	 
	 var out1 = '<p>Hello I am inside Camera'+i+'</p>';
	  
	  $('#myImage1').html(out1);
	  
	  window.localStorage.setItem("photo"+i, smallImage.src);
	  //document.getElementById('myImage').innerHTML = localStorage.getItem("photo"+i);
	  var out2 = '<p>';
	  for(j=1;j<i+1;j++){
	  var im = window.localStorage.getItem("photo"+j);
	  out2 += '<li><a href="'+im+'">'+im+'</a></li>';
	  }
	  out2 += '</p>';
	  $('#myImage').html(out2);
	  
	 /* var out3 = '<p>';
	  for(j=1;j<i+1;j++){
	  out3 +='<li><a>'+j+'</a></li>'}
	  out3 += '</p>';
	  $('#myImage2').html(out3);*/
	  
	  //var im = document.getElementById('myImage');
	  //<img style="display:none;width:60px;height:60px;" id="myImage" src=""/>
	  /*var output = '<img style="display:none;width:60px;height:60px;" src="';
	  output += localStorage.getItem("photo");
	  output +='"/>';
	  $('#myImage').html(output);*/
	  
	  
	  
	  
	 /* window.localStorage.setItem("key", "Sam");
	  document.getElementById("value").innerHTML = localStorage.getItem("key");*/
	  

	 //<img style="display:none;width:60px;height:60px;" id="smallImage" src="" >
	  window.localStorage.clear();
    }
	
	function onPhotoDataSuccess(imageData) {
        var smallImage = document.getElementById('smallImage');
	    smallImage.style.display = 'block';
        smallImage.src = "data:image/jpeg;base64," + imageData;
		i++;
	  /*var out1 = '<p>Hello I am inside Camera'+i+'</p>';
	  $('#myImage1').html(out1);*/
	 
	  window.localStorage.setItem("photo"+i, smallImage.src);
	    
	  /*var out2 = '<p>';
	  for(j=1;j<i+1;j++){
	   var im = window.localStorage.getItem("photo"+j);
	   out2 = '<li><img src="'+im+'" width="60" height="60"/></li>'
	   }
	   out2 += '</p>';
	   $('#myImage').html(out2);*/
	   
	  var out2 = '<div>';
	  for(j=1;j<i+1;j++){
	  var im = window.localStorage.getItem("photo"+j);
	  out2 += '<a href="index.html"><img src="'+im+'" width="60" height="60"/></a>';
	  }
	  out2 += '</div>';
	  $('#myImage').html(out2);
	  
	  //window.localStorage.clear();
    }

    // Called when a photo is successfully retrieved
    //
    function onPhotoURISuccess(imageURI) {
      // Uncomment to view the image file URI
      // console.log(imageURI);

      // Get image handle
      //
      var largeImage = document.getElementById('largeImage');

      // Unhide image elements
      //
      largeImage.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      largeImage.src = imageURI;
    }

    // A button will call this function
    //
    function capturePhoto() {
      // Take picture using device camera and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
        destinationType: destinationType.DATA_URL });//saveToPhotoAlbum: true});
    }

    // A button will call this function
    //
    function capturePhotoEdit() {
      // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
        destinationType: destinationType.DATA_URL });
    }

    // A button will call this function
    //
    function getPhoto(source) {
      // Retrieve image file location from specified source
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
        destinationType: destinationType.FILE_URI,
        sourceType: source });
    }

    // Called if something bad happens.
    //
    function onFail(message) {
      alert('Failed because: ' + message);
    }
		
/*--------------------------------------------------------------
----------------------------------------------------------------

Download Worksheet from Database Server

----------------------------------------------------------------
----------------------------------------------------------------*/
function loadHello(){
	/*$.getJSON('http://192.168.0.4:80/Omega/ContractCoordinator/test1ajax.php', function(data) {
		console.log(data);
		alert("Hi");
		var output='<ul data-role="listview" data-theme="a">';
		$.each(data, function(key, val){
			output +='<li>'+val.jobno+'</li>';
			output +='<li>'+val.address+'</li>';
			output +='<li>'+val.jobdescription+'</li>';
			output +='<li>'+val.telephone+'</li>';
			output +='<li>'+val.haname+'</li>';
			output +='<li>'+val.priorityname+'</li>';
			output +='<li>'+val.empname+'</li>';
			output +='<li>'+val.deptname+'</li>';
		});
		output +='</ul>';
		$('#jobinfo').html(output);
		alert("I am inside function");
	});*/
	//$.getJSON('http://192.168.0.4:80/Omega/ContractCoordinator/test1ajax.php', function(data) {
	$.getJSON('http://192.168.0.4:80/Omega/ContractCoordinator/test1ajax.php', function(data) {
		console.log(data);
		alert("Hi");
		var output1='<div>';
		var output2='<div>';
		var output3='<div>';
		var output4='<div>';
		var output5='<div>';
		var output6='<div>';
		var output7='<div>';
		var output8='<div>';
		$.each(data, function(key, val){
			output1 += val.jobno;
			output2 += val.address;
			output3 += val.jobdescription;
			output4 += val.telephone;
			output5 += val.haname;
			output6 += val.priorityname;
			output7 += val.empname;
			output8 += val.deptname;
		});
		output1 +='<div>';
		output2 +='<div>';
		output3 +='<div>';
		output4 +='<div>';
		output5 +='<div>';
		output6 +='<div>';
		output7 +='<div>';
		output8 +='<div>';
		$('#jobinfo1').html(output1);
		$('#jobinfo2').html(output2);
		$('#jobinfo3').html(output3);
		$('#jobinfo4').html(output4);
		$('#jobinfo5').html(output5);
		$('#jobinfo6').html(output6);
		$('#jobinfo7').html(output7);
		$('#jobinfo8').html(output8);
		
		alert("I am inside function");
	});
	alert("I am not fine");
}

/*--------------------------------------------------------------
----------------------------------------------------------------
Local Storage

----------------------------------------------------------------
----------------------------------------------------------------*/

function beep1(){
	navigator.notification.beep(5);
}



/*var deviceInfo = function() {
    document.getElementById("platform").innerHTML = device.platform;
    document.getElementById("version").innerHTML = device.version;
    document.getElementById("uuid").innerHTML = device.uuid;
    document.getElementById("name").innerHTML = device.name;
    document.getElementById("width").innerHTML = screen.width;
    document.getElementById("height").innerHTML = screen.height;
    document.getElementById("colorDepth").innerHTML = screen.colorDepth;
};

var getLocation = function() {
    var suc = function(p) {
        alert(p.coords.latitude + " " + p.coords.longitude);
    };
    var locFail = function() {
    };
    navigator.geolocation.getCurrentPosition(suc, locFail);
};

var beep = function() {
    navigator.notification.beep(5);
};

var vibrate = function() {
    navigator.notification.vibrate(5000);
};

function roundNumber(num) {
    var dec = 3;
    var result = Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
    return result;
}

var accelerationWatch = null;

function updateAcceleration(a) {
    document.getElementById('x').innerHTML = roundNumber(a.x);
    document.getElementById('y').innerHTML = roundNumber(a.y);
    document.getElementById('z').innerHTML = roundNumber(a.z);
}

var toggleAccel = function() {
    if (accelerationWatch !== null) {
        navigator.accelerometer.clearWatch(accelerationWatch);
        updateAcceleration({
            x : "",
            y : "",
            z : ""
        });
        accelerationWatch = null;
    } else {
        var options = {};
        options.frequency = 1000;
        accelerationWatch = navigator.accelerometer.watchAcceleration(
                updateAcceleration, function(ex) {
                    alert("accel fail (" + ex.name + ": " + ex.message + ")");
                }, options);
    }
};

var preventBehavior = function(e) {
    e.preventDefault();
};

function dump_pic(data) {
    var viewport = document.getElementById('viewport');
    console.log(data);
    viewport.style.display = "";
    viewport.style.position = "absolute";
    viewport.style.top = "10px";
    viewport.style.left = "10px";
    document.getElementById("test_img").src = data;
}

function fail(msg) {
    alert(msg);
}

function show_pic() {
    navigator.camera.getPicture(dump_pic, fail, {
        quality : 50
    });
}

function close() {
    var viewport = document.getElementById('viewport');
    viewport.style.position = "relative";
    viewport.style.display = "none";
}

function contacts_success(contacts) {
    alert(contacts.length
            + ' contacts returned.'
            + (contacts[2] && contacts[2].name ? (' Third contact is ' + contacts[2].name.formatted)
                    : ''));
}

function get_contacts() {
    var obj = new ContactFindOptions();
    obj.filter = "";
    obj.multiple = true;
    navigator.contacts.find(
            [ "displayName", "name" ], contacts_success,
            fail, obj);
}

function check_network() {
    var networkState = navigator.network.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.NONE]     = 'No network connection';

    confirm('Connection type:\n ' + states[networkState]);
}

var watchID = null;

function updateHeading(h) {
    document.getElementById('h').innerHTML = h.magneticHeading;
}

function toggleCompass() {
    if (watchID !== null) {
        navigator.compass.clearWatch(watchID);
        watchID = null;
        updateHeading({ magneticHeading : "Off"});
    } else {        
        var options = { frequency: 1000 };
        watchID = navigator.compass.watchHeading(updateHeading, function(e) {
            alert('Compass Error: ' + e.code);
        }, options);
    }
}

function init() {
    // the next line makes it impossible to see Contacts on the HTC Evo since it
    // doesn't have a scroll button
    // document.addEventListener("touchmove", preventBehavior, false);
   // document.addEventListener("deviceready", deviceInfo, true);
   document.addEventListener("deviceready", beep, true);
}

//function vib() {
   // document.addEventListener("deviceready", vibrate, true);
//}*/
