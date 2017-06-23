function lireFichier(){
// on lance la requete pour récuperer le fichier
if(window.XMLHttpRequest){
var fichier = new XMLHttpRequest();
}
fichier.open("GET",'ajax.txt',true);
//on a un fonction sur l'evenement OnreadyState
fichier.onreadystatechange = function(){
	if(fichier.readyState == 4 && fichier.status == 200){
			// on peut récuperer puis traiter le texte du fichier
			document.getElementById("ajax").innerHTML = fichier.responseText;
		}
	};
	fichier.send();
}

function lireTache(){
// on lance la requete pour récuperer le fichier
var fic = document.getElementById('fichier').value;
if(window.XMLHttpRequest){
var fichier = new XMLHttpRequest();
}
fichier.open("GET",fic,true);
//on a un fonction sur l'evenement OnreadyState
fichier.onreadystatechange = function(){
	if(fichier.readyState == 4 && fichier.status == 200){
			// on peut récuperer puis traiter le texte du fichier
			var myArr = JSON.parse(fichier.responseText);
			myFunction(myArr);
			//document.getElementById("ajax").innerHTML = fichier.responseText;
		}
	};
	fichier.send();
}

function myFunction(arr) {
    var out = "";
    var i;
	document.getElementById('nbTache').value=arr.length;
	insertDonnees();
    for(i = 0; i < arr.length; i++) {
       // out += arr[i].nom+"&nbsp;&nbsp;"+arr[i].Duree+"&nbsp;&nbsp;"+arr[i].tacheAnt+"<br>";
	   document.getElementById(tableauLettre[i]).value = arr[i].Duree;
	   document.getElementById("tacheAnt"+tableauLettre[i]).value = arr[i].tacheAnt;
    }
    document.getElementById("ajax").innerHTML = out;
}