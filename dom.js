window.onload=function(){
	var contador=1;

	var elemento=document.getElementById("titulo");
	elemento.style.color="red";
	var ps=document.getElementsByTagName("p");
	for(var i=0;i<ps.length;++i){
		ps[i].style.color="blue";
	}
	document.getElementById("intercambiar").onclick=function(event){
		var temporal=ps[0].innerHTML;
		ps[0].innerHTML=ps[1].innerHTML;
		ps[1].innerHTML=temporal;
	}
	
	document.getElementById("ocultar").onclick=function(event){
		for(var i=0;i<ps.length;++i){
			ps[i].style.display="none";
		}		
	}
	
	document.getElementById("mostrar").onclick=function(event){
		for(var i=0;i<ps.length;++i){
			ps[i].style.display="block";
		}		
	}
	
	document.getElementById("agregarFinal").onmouseover=function(event){
		var nuevo=document.createElement("div");
		var contenido=document.createTextNode("Soy nuevo");
		/*Agrega el contenido al final*/
		nuevo.appendChild(contenido);
		document.body.appendChild(nuevo);
	}
	
	document.getElementById("agregarInicio").onclick=function(event){
		var nuevo=document.createElement("div");
		var contenido=document.createTextNode("Me agregaron de primeras");
		/*Agrega el contenido al inicio*/
		nuevo.appendChild(contenido);
		/*Saca el primer elemento*/
		var primero=document.body.childNodes[0];
		
		document.body.insertBefore(nuevo,primero);
	}
	
	document.getElementById("agregarParrafo").onclick=function(event){
		/*Crea una nueva etiqueta <p>*/
		var nuevo=document.createElement("p");
		var contenido=document.createTextNode("Parrafo"+contador);
		++contador;
		/*agrega contenido a la etiqueta*/
		nuevo.appendChild(contenido);
		/*saca todos los parrafos*/
		var ps=document.getElementsByTagName("p");
		/*selecciona el ultimo parrafo*/
		var ultimo=ps[ps.length-1];
		
		/*Agrega antes de el siguiente hijo del papa, osea la ultima etiqueta*/
		document.body.insertBefore(nuevo,ultimo.nextSibling);
	}
	
	document.getElementById("eliminarParrafo").onclick=function(event){
		/*saca todos los parrafos*/
		var ps=document.getElementsByTagName("p");
		/*selecciona el ultimo parrafo*/
		if(ps.length>0){
			var ultimo=ps[ps.length-1];
			/*elimina el ultimo, diciendole a la etiqueta padre, cualquiera que sea que borre al hijo, en este caso si mismo*/
			ultimo.parentNode.removeChild(ultimo);
		}
	}
	
}