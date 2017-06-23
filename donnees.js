//<div class=”field”>
//<label for=”restaurant”>Restaurant:</label>
//<input type=”text” name=”restaurant” id=”restaurant”>
//</div>

function initierSelect(){
  var content="";
  content +="<option><\/option>";
  for(var i=1;i<=30;i++){
    if(i==1){
		content +="<option selected>"+i+"<\/option>";
	}
    else{
		content +="<option>"+i+"<\/option>";
		}
  }
  document.getElementById('nbTache').innerHTML = content;
}

function insertDonnees(){
	var nb = document.getElementById('nbTache').value;
	var content ="";
	for(var j=0;j<nb;j++){
		var id = "tacheAnt"+tableauLettre[j];
		content += "<div class=\"row form-group\">";
		content += 	"<div class=\"col-xs-4\"><div class=\"col-xs-4\"><label for=\""+tableauLettre[j]+"\">Dur&eacutee &nbsp"+tableauLettre[j]+": </label></div><div class=\"col-xs-3\"><input type=\"text\" size=\"8\" name=\""+tableauLettre[j]+"\" class=\"form-control\" id=\""+tableauLettre[j]+"\"></div></div>";
		content += 	"<div class=\"col-xs-6\"><div class=\"col-xs-4\"><label for=\"tacheAnt"+tableauLettre[j]+"\">tache anterieur "+tableauLettre[j]+": </label></div><div class=\"col-xs-4\"><input type=\"text\" size=\"15\" name=\"tacheAnt"+tableauLettre[j]+"\" class=\" form-control\" id=\""+id+"\"></div></div>";
		content += "</div>";
	}
	document.getElementById('donnee').innerHTML = content;
	document.getElementById('reponse').disabled = false;
}

function validation(){
var indic = 1;
var val_duree = /^\d{1,3}$/
var val_tache =/^([A-Z],){0,}[A-Z]$|^-$/
	for(var i=0;i<document.getElementById('nbTache').value;i++){
		var val1 = document.getElementById(tableauLettre[i]).value;
		var name = "tacheAnt"+tableauLettre[i];
		var val2 = document.getElementById(name).value;
		//if(!val_duree.match(val1)){
		if(!val1.match(val_duree)){
			alert("Duree invalid "+tableauLettre[i]+" invalide");
			indic =0;
		}
		if(!val2.match(val_tache)){
			alert("tache anterieur invalid "+tableauLettre[i]+" invalide");
			indic = 0;
		}
	}
	return indic;
}