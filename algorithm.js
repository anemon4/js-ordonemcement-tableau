//function calcul(tache){
/*
var dicoLettre={"A":0,"B":1,"C":2,"D":3,"E":4,"F":5,"G":6,"H":7,"I":8,"J":9,"K":10,"L":11,"M":12,"N":13,"O":14,"P":15,"Q":16,"R":17,"S":18,"T":19,"U":20,"V":21,"W":22,"X":23,"Y":24,"Z":25};
var tableauLettre =new Array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
var ta = new Array();
var txt;
var taches = new tableauTache();
//var taches = tache;
initialiserTache();
tabDonnees();
//lireFichier("file:\\D:\\Boss\\stud\\INFORMATIQUE\\web\\Html et CSS\\html_css\\html5\\projet_RO\\js\\test.txt");
calculDate("-");
rechercheTacheSuccesseur();
marquage(rechercheDateFin());
rechercheMargeLibre();
var tacheAvantFin = rechercherTacheAvantFin();
rechercheMargeTotale(tacheAvantFin,taches.getTacheTab(rechercheDateFin()).getDateFin());
calculMargeTotal();
tabMarge();
var chemin = rechercheCheminCritique().split(",");
/* 
document.write("<br><br><br> chemin optimale :");
for(var h=0;h<chemin.length;h++){
	document.write(""+chemin[h]);
	if(h<chemin.length-1){
		document.write("->");
	}
}
*/


//function d'initialisation de tache
function initialiserTache(){
	//taches.addTache(tacheId,duree,tacheant);
	if(validation()!= 0){
	
	for(var j=0;j<document.getElementById('nbTache').value;j++){
		taches.addTache(j,tableauLettre[j],parseInt(document.getElementById(tableauLettre[j]).value),document.getElementById("tacheAnt"+tableauLettre[j]).value);
	}
	}
	//ex01
	/*
	taches.addTache(0,"A",2,"-");
	taches.addTache(1,"B",2,"A");
	taches.addTache(2,"C",6,"-");
	taches.addTache(3,"D",1,"-");
	taches.addTache(4,"E",2,"D");
	taches.addTache(5,"F",8,"A");
	taches.addTache(6,"G",3,"B,C,E");
	taches.addTache(7,"H",10,"D");
	taches.addTache(8,"I",7,"G");
	taches.addTache(9,"J",11,"G");
	taches.addTache(10,"K",3,"F,H,I");
	taches.addTache(11,"L",8,"J,K");
	taches.addTache(12,"M",10,"F,H,I");
	/*
	
	
	
	//exo2
	taches.addTache(0,"A",3,"-");
	taches.addTache(1,"B",4,"A,I");
	taches.addTache(2,"C",1,"B");
	taches.addTache(3,"D",4,"-");
	taches.addTache(4,"E",2,"D,H");
	taches.addTache(5,"F",5,"E,I");
	taches.addTache(6,"G",1,"-");
	taches.addTache(7,"H",3,"G");
	taches.addTache(8,"I",5,"H");
	taches.addTache(9,"J",2,"L");
	taches.addTache(10,"K",3,"I,J");
	taches.addTache(11,"L",4,"-");
	taches.addTache(12,"M",2,"I");
	taches.addTache(13,"N",2,"M,T");
	taches.addTache(14,"O",3,"C,F,M");
	taches.addTache(15,"P",3,"N,O");
	taches.addTache(16,"Q",2,"P");
	taches.addTache(17,"R",1,"K,N,O");
	taches.addTache(18,"S",3,"R");
	taches.addTache(19,"T",10,"L");
	*/
}



function calculDate(nomtache){
	var tachesucc="";
	for(var i=0;i<taches.getLongeurTab();i++){
		var tacheant = taches.getTacheTab(i).getTacheAnt();
		if( tacheant.lastIndexOf(nomtache) != -1){
			tachesucc += ""+i+","; 
	    }	
    }
	if(tachesucc.length > 0){
		var tachesucce = tachesucc.substring(0,tachesucc.length-1);
		var tachesuccess = tachesucce.split(",");
		for(var i=0; i<tachesuccess.length;i++){
			var tache = taches.getTacheTab(tachesuccess[i]);
			if(nomtache.indexOf("-") == 0){
		             tache.setDateDebut(0);
		             tache.setDateFin(tache.getDuree());
			}
			else{
				var tac = taches.getTacheTab(dicoLettre[nomtache]);
				if(tache.getDateDebut() < tac.getDateFin()){
				tache.setDateDebut(tac.getDateFin());
				tache.setDateFin(tache.getDateDebut()+tache.getDuree());
				}
			}
			calculDate(tache.getNomTache());
		}
	}
}


function afficherTache(){
	document.write("<br>")
	for(var i=0;i<taches.getLongeurTab();i++){
		var tache = taches.getTacheTab(i);
		document.write(tache.getNomTache()+ "&nbsp &nbsp &nbsp date debut : " + tache.getDateDebut() + "&nbsp &nbsp &nbsp date fin : "+tache.getDateFin()+"&nbsp &nbsp &nbsp tache anterieur : "+tache.getTacheAnt()+"&nbsp &nbsp &nbsp tache successeur: "+ tache.getTacheSucc()+"&nbsp &nbsp &nbsp marqeur :"+tache.getMarqeur()+"&nbsp &nbsp marge libre : "+tache.getMargeLibre()+"&nbsp &nbsp date au plus tard :"+tache.getDebutAuPlusTard()+"<br>");
	}
}


function rechercheTacheSuccesseur(){
	for(var i=0;i<taches.getLongeurTab();i++){
		var tach = taches.getTacheTab(i);
		var nomtach = tach.getNomTache();
		var succ="";
		for(var j=0;j<taches.getLongeurTab();j++){
			var t = taches.getTacheTab(j);
			if(t.getTacheAnt().lastIndexOf(nomtach) != -1){
				succ +=""+t.getNomTache()+",";
			}
		}
		if(succ.length > 0){
			tach.setTacheSucc(succ.substring(0,succ.length-1));
		}
		else{
			tach.setTacheSucc("fin");
		}
	}
}


function rechercheDateFin(){
	var date = 0;
	k=0;
	for(var i=0;i<taches.getLongeurTab();i++){
		var tache = taches.getTacheTab(i);
		var val = tache.getDateFin();
		if(val > date){
			date = val;
			k=i;
		}
	}
	return k;
}


function marquage(indice){
	var tache = taches.getTacheTab(indice);
	tache.setMarqeur(true);
	var tachAnt = tache.getTacheAnt();
	if(tachAnt.indexOf("-")!= 0){
		var t=tachAnt.split(",");
		for(var k=0;k<t.length;k++){
			var tac = taches.getTacheTab(dicoLettre[t[k]]);
			if(tac.getDateFin() == tache.getDateDebut()){
				marquage(dicoLettre[t[k]]);
			}
		}
	}
}


function rechercheCheminCritique(){
	var text="";
	for(var i=0;i<taches.getLongeurTab();i++){
		var tache = taches.getTacheTab(i);
		if(tache.getMarqeur() == true){
		 text += tache.getNomTache()+",";
		}
	}
	return text.substring(0,text.length-1);
}


function rechercherTacheAvantFin(){
	var ta ="";
	for(var i=0;i<taches.getLongeurTab();i++){
		var tache = taches.getTacheTab(i);
		if(tache.getTacheSucc().indexOf("fin") == 0){
			ta += tache.getNomTache()+",";
		}
	}
	ta = ta.substring(0,ta.length-1);
	return ta;
}


function rechercheMargeTotale(tacheAnterieurfin,DateDebut){
	if(tacheAnterieurfin.indexOf("-")!= 0){
		var ta = tacheAnterieurfin.split(",");
		var tache;
		for(var i=0;i<ta.length;i++){
			for(var j=0;j<taches.getLongeurTab();j++){
				tache = taches.getTacheTab(j);
				if(tache.getNomTache().indexOf(ta[i]) == 0){
					break;
				}
			}
			var dateAuPlusTard = DateDebut - tache.getDuree();
			if(dateAuPlusTard < tache.getDebutAuPlusTard()){
				tache.setDebutAuPlusTard(dateAuPlusTard);
			}
			rechercheMargeTotale(tache.getTacheAnt(),tache.getDebutAuPlusTard());
		}
	}
	
}


function rechercheMargeLibre(){
	for(var i=0;i<taches.getLongeurTab();i++){
		var t = taches.getTacheTab(i);
		var tachesuc = t.getTacheSucc();
		if(tachesuc.indexOf("fin") != 0){
		var tachesucs = tachesuc.split(",");
		var min = taches.getTacheTab(dicoLettre[tachesucs[0]]).getDateDebut();
		for(var j;j<tachesucs.length;j++){
		    var ta = taches.getTacheTab(dicoLettre[tachesucs[j]]);
			if(ta.getDateDebut() < min){
				min = ta.getDateDebut();
				t.setMargeLibre(min - t.getDateFin());
			}
			}
		t.setMargeLibre(min - t.getDateFin())
		
		}
		else{
	    t.setMargeLibre(taches.getTacheTab(rechercheDateFin()).getDateFin()-t.getDateFin());		
		}
	}
		
}
	
	
function calculMargeTotal(){
	for(var i=0;i<taches.getLongeurTab();i++){
		var tach = taches.getTacheTab(i);
		tach.setMargeTotal(tach.getDebutAuPlusTard() - tach.getDateDebut());
	}
}


function reinitialiser_tableau(){
	var tache = taches.getTab();
	for(var i=0;i<taches.getLongeurTab();i++){
	  tache.pop();
	}
}		
//}

