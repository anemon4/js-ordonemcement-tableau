//tache type
function tache(tacheid,nomtache,duree,tacheant){
this.nomTache = nomtache;
this.tacheId = tacheid;
this.duree = duree;
this.tacheAnt = tacheant;
this.tacheSucc = "-";
this.dateDebut = 0;
this.dateFin = 0;
this.marqeur = false;
this.margeTotal = 0;
this.margeLibre = 0;
this.debutAuPlusTard = 10000;
}

//getters

tache.prototype.getNomTache = function()
{
return this.nomTache;
}
tache.prototype.getTacheId = function()
{
return this.tacheId;
}
tache.prototype.getDuree = function()
{
return this.duree;
}
tache.prototype.getTacheAnt = function()
{
return this.tacheAnt;
}
tache.prototype.getTacheSucc = function()
{
return this.tacheSucc;
}
tache.prototype.getDateDebut = function()
{
return this.dateDebut;
}

tache.prototype.getDateFin = function()
{
return this.dateFin;
}

tache.prototype.getMarqeur= function()
{
return this.marqeur;
}

tache.prototype.getMargeTotal = function()
{
return this.margeTotal;
}

tache.prototype.getMargeLibre = function()
{
return this.margeLibre;
}

tache.prototype.getDebutAuPlusTard = function()
{
return this.debutAuPlusTard;
}

//setters
tache.prototype.setNomTache = function(nomtache)
{
	this.nomTache= nomtache;
}
tache.prototype.setTacheId = function(tacheid)
{
	this.tacheId= tacheid;
}
tache.prototype.setDuree = function(duree)
{
	this.duree= duree;
}
tache.prototype.setTacheAnt = function(tacheant)
{
	this.tacheAnt= tacheant;
}
tache.prototype.setTacheSucc = function(tachesucc)
{
	this.tacheSucc= tachesucc;
}
tache.prototype.setDateDebut = function(datedebut)
{
	this.dateDebut= datedebut;
}
tache.prototype.setDateFin = function(datefin)
{
	this.dateFin= datefin;
}
tache.prototype.setMarqeur = function(marqeur)
{
	this.marqeur= marqeur;
}

tache.prototype.setMargeTotal = function(margetotale)
{
	this.margeTotal= margetotale;
}

tache.prototype.setMargeLibre = function(margelibre)
{
	this.margeLibre= margelibre;
}

tache.prototype.setDebutAuPlusTard = function(debut)
{
 this.debutAuPlusTard = debut;
}

//table de tache
function tableauTache(){
	this.taches = new Array();
}

tableauTache.prototype.addTache = function(tacheId,nomtache,duree,tacheant)
{
this.taches[tacheId] = new tache(tacheId,nomtache,duree,tacheant);
}

tableauTache.prototype.getTacheTab = function(tacheid)
{
 return this.taches[tacheid];
}

tableauTache.prototype.getTab = function()
{
 return this.taches;
}

tableauTache.prototype.getLongeurTab = function(tacheid)
{
 return this.taches.length;
}
/*
tableauTache.prototype.getTacheTab = function()
{
 return this.taches;
}
*/
