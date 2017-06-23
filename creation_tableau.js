function tabDonnees(){
var contenu = "<thead class=\"thead-inverse\"><tr class=\"table-success\"><th class=\"tete\">Tache</th>";
	for(var i=0;i<taches.getLongeurTab();i++){
		contenu += "<th class=\"tete\">"+taches.getTacheTab(i).getNomTache()+"</th>";
	}
	contenu += "</tr></thead>";
	
	contenu += "<tbody><tr><th scope=\"row\">Dur&eacutee</th>";
	for(var i=0;i<taches.getLongeurTab();i++){
		contenu += "<td>"+taches.getTacheTab(i).getDuree()+"</td>";
	}
	contenu += "</tr>";
	
	contenu += "<tr><th scope=\"row\">Tache anterieur</th>";
	for(var i=0;i<taches.getLongeurTab();i++){
		contenu += "<td>"+taches.getTacheTab(i).getTacheAnt()+"</td>";
	}
	
	contenu += "</tr>";
	contenu += "</tbody>";
	//$('#tabdonnees').html(contenu);
	document.getElementById('tabdonnees').innerHTML = contenu;
	//alert(document.getElementById("imk").innerHTML);
}

function tabMarge(){
	var contenu = "<thead class=\"thead-inverse\"><tr><th class=\"tete\">Tache</th>";
	for(var i=0;i<taches.getLongeurTab();i++){
		contenu += "<th class=\"tete\">"+taches.getTacheTab(i).getNomTache()+"</th>";
	}
	contenu += "</tr></thead>";
	
	contenu += "<tbody><tr><th scope=\"row\">Dur&eacutee</th>";
	for(var i=0;i<taches.getLongeurTab();i++){
		contenu += "<td>"+taches.getTacheTab(i).getDuree()+"</td>";
	}
	contenu += "</tr>";
	
	contenu += "<tr><th scope=\"row\">Tache anterieur</th>";
	for(var i=0;i<taches.getLongeurTab();i++){
		contenu += "<td>"+taches.getTacheTab(i).getTacheAnt()+"</td>";
	}
	
	contenu += "</tr>";
	
	contenu += "<tr><th scope=\"row\">Tache successeur</th>";
	for(var i=0;i<taches.getLongeurTab();i++){
		contenu += "<td>"+taches.getTacheTab(i).getTacheSucc()+"</td>";
	}
	
	contenu += "</tr>";
	
	contenu += "<tr><th scope=\"row\">Marge libre</th>";
	for(var i=0;i<taches.getLongeurTab();i++){
		contenu += "<td>"+taches.getTacheTab(i).getMargeLibre()+"</td>";
	}
	
	contenu += "</tr>";
	
	contenu += "<tr><th scope=\"row\">Marge totale</th>";
	for(var i=0;i<taches.getLongeurTab();i++){
		contenu += "<td>"+taches.getTacheTab(i).getMargeTotal()+"</td>";
	}
	
	contenu += "</tr>";
	
	contenu += "<tr><th scope=\"row\">Date au plus t&ocirct</th>";
	for(var i=0;i<taches.getLongeurTab();i++){
		contenu += "<td>"+taches.getTacheTab(i).getDateDebut()+"</td>";
	}
	
	contenu += "</tr>";
	
	contenu += "<tr><th scope=\"row\">Date au plus tard</th>";
	for(var i=0;i<taches.getLongeurTab();i++){
		var val = taches.getTacheTab(i).getDateDebut()+taches.getTacheTab(i).getMargeTotal();
		contenu += "<td>"+val+"</td>";
	}
	
	contenu += "</tr>";
	
	contenu += "</tbody>";
	//$('#tabdonnees').html(contenu);
	document.getElementById('tabmarge').innerHTML = contenu;
	//alert(document.getElementById("imk").innerHTML);
	
}