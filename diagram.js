function diagram(){
  var modulo=1;
  addcanvas = document.getElementById("adCanvas");
  legcanvas = document.getElementById("legCanvas");
  var h = rechercheDateFin();
  addcanvas.height = 30 * document.getElementById('nbTache').value +35;
  var nb = taches.getLongeurTab();
  var bool=0;
  for(var i=50;i>0;i--){
    if(bool==0){
		for(var j=0;j<nb;j++){
		  if(taches.getTacheTab(j).getDuree()%i != 0) break;
		  if(j==nb-1) {
			bool=1;
			modulo=i;
			break;
			}
		}
	}
	else break;
  }
  addcanvas.width = 30 * (taches.getTacheTab(h).getDateFin()/modulo) + 60;
  var nbcolonne = (taches.getTacheTab(rechercheDateFin()).getDateFin())/modulo;
  var marge = document.getElementById('marge').value;
  
  //initierSelect();
  //document.getElementById('nbTache').onchange = function(){insertDonnees();}
  
 // $('nbTache').change(function(){
  //insertDonnees();
 // });
  
  if (addcanvas.getContext) {
// Initialize a 2d drawing context.
 var ctx = addcanvas.getContext("2d");
 //ctx.clear();
	//ctx.setTransform(1,0,0,1,0,0);
	ctx.clearRect(0,0,905,705);
	ctx.beginPath();
 //drawAdvert();
	ctx.fillStyle = "rgba(0,0,0,0.4)";
 //ctx.fillStyle = "black";
 //ctx.fillRect(0,0,600,400);
	ctx.lineWidth = 0.4;
// ctx.strokeStyle = "#cd2828";
	ctx.strokeStyle = "gray";
	var k=0;
 
for(var j=30;j<nbcolonne*30+60;j+=30){
		var txt = k*modulo;
		if(k<10){
		ctx.fillText(""+txt,j-2,20);
		k++;
		}
		else{
		ctx.fillText(""+txt,j-6,20);
		k++;
		}
}
var h=0;
for(var i=60;i<nb*30+60;i += 30){
		if(h<10){
		ctx.fillText(""+tableauLettre[h],8,i);
		h++;
		}
		else{
		ctx.fillText(""+tableauLettre[h],4,i);
		h++;	
		}
}

for (var x = 30; x < nbcolonne*30+60; x += 30) {
		ctx.moveTo(x, 30);
		ctx.lineTo(x, (nb-1)*30+60);
}

for (var y = 30; y < nb*30+60; y += 30){
		
		ctx.moveTo(30, y);
		ctx.lineTo((nbcolonne-1)*30+60, y);
}

ctx.stroke();
//ctx.beginPath();

 // creation tache
		for(var i=0;i<nb;i++){
				var t = taches.getTacheTab(i);
				if(t.getMarqeur() == false){
				ctx.fillStyle = "green";
				//ctx.fillStyle = "rgba(100,150,185,0.5)";
				//ctx.fillStyle = "rgba(100,150,250,1)";
				ctx.fillRect(30+30*(t.getDateDebut()/modulo),50+i*30,(t.getDuree()/modulo)*30,10);
				//ctx.fillStyle = "green";
				//ctx.fillRect(100,40,60,10);
				}
				else{
				ctx.fillStyle = "red";
				ctx.fillRect(30+30*(t.getDateDebut()/modulo),50+i*30,(t.getDuree()/modulo)*30,10);
				}
		}
		
 // creation marge totale
  if(marge.indexOf("Marge Totale")==0){
		for(var i=0;i<nb;i++){
				var t = taches.getTacheTab(i);
				ctx.fillStyle = "#FF8C00";
				//ctx.fillStyle = "rgba(100,150,185,0.5)";
				ctx.fillRect(30+30*(t.getDebutAuPlusTard()/modulo),40+i*30,(t.getDuree()/modulo)*30,10);
				//ctx.fillStyle = "green";
				//ctx.fillRect(100,40,60,10);
				}
		}
	}
		
	// creation marge libre
	if(marge.indexOf("Marge Libre")==0){
		for(var i=0;i<nb;i++){
				var t = taches.getTacheTab(i);
				//TOMATE
				//ctx.fillStyle = "#FF6347";
				//gold
				ctx.fillStyle = "#FFD700";
				//ctx.fillStyle = "rgba(100,150,185,0.5)";
				ctx.fillRect(30+30*((t.getDateDebut()/modulo)+(t.getMargeLibre()/modulo)),40+i*30,(t.getDuree()/modulo)*30,10);
				//ctx.fillStyle = "green";
				//ctx.fillRect(100,40,60,10);
				}
		}
	//creation legende
	/*
	ctx.beginPath();
	ctx.fillStyle = "#FF8C00";
	ctx.fillRect(30,addCanvas.height-20,60,10);
	ctx.fillStyle = "red";
	ctx.fillText("marge totale",100,addCanvas.height-20);
	
	*/
		if (legcanvas.getContext) {
		// Initialize a 2d drawing context.
			var ct = legcanvas.getContext("2d");
			ct.font = "15px Comic Sans MS";
			ct.fillStyle = "green";
			ct.fillRect(30,30,60,10);
			ct.fillStyle = "rgba(0,0,0,0.8)";
			ct.fillText("tache",100,40);
			ct.fillStyle = "#FF8C00";
			ct.fillRect(210,30,60,10);
			ct.fillStyle = "rgba(0,0,0,0.8)";
			ct.fillText("marge totale",280,40);
			ct.fillStyle = "#FFD700";
			ct.fillRect(400,30,60,10);
			ct.fillStyle = "rgba(0,0,0,0.8)";
			ct.fillText("marge Libre",470,40);
			ct.fillStyle = "red";
			ct.fillRect(600,30,60,10);
			ct.fillStyle = "rgba(0,0,0,0.8)";
			ct.fillText("Chemin Critique",670,40);
		}
	}
	function drawAdvert() {
		// Create the Background Rectangle
		ctx.fillStyle = "rgba(0,0,0,0.4)";
		//ctx.fillStyle = "blue";
	}
	
