/*
 * To use This library, You need to add the OIPF application manager objects to your HTML page,
 * 
 *	<object id="oipfAppMan" type="application/oipfApplicationManager"></object>
 */

function hbbtvlib_red_initialize(){
  var appManager = document.getElementById("oipfAppMan").getOwnerApplication(document);
  appManager.show();

  appManager.privateData.keyset.setValue(0x1);

  time();
}

function time(){
	$('#redButton').show(0).delay(10000).hide(0).delay(5000).show(0).delay(5000).hide(0).delay(60000).show(0).delay(5000).hide(0);
}

function hbbtvlib_nav_initialize(){
  var appManager = document.getElementById("oipfAppMan").getOwnerApplication(document);
  appManager.show();

  appManager.privateData.keyset.setValue(0x10);
}

function generateRandomSyncNumber(){
	var num = pad(Math.floor(Math.random() * 10000), 4);

	document.getElementById('syncNum').getElementsByTagName('h2')[0].innerHTML = num;

	function pad(n, width, z) {
  		z = z || '0';
  		n = n + '';
  		return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
	}
}

function hbbtvlib_colorANDnav_initialize(){
  var appManager = document.getElementById("oipfAppMan").getOwnerApplication(document);
  appManager.show();

  appManager.privateData.keyset.setValue(0x1+0x2+0x4+0x8+0x10+0x20);
}