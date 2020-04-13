window.setTimeout(function(){
	"use strict";
	var contenedor = document.getElementById('preloader');
	contenedor.style.visibility = 'hidden';
	contenedor.style.opacity = '0';
},1000);
$(document).ready(function(){
	"use strict";
    $('.icon').on('click', function(){
		$('.menu').toggleClass('active-menu');
		$(this).toggleClass('active_icon');
	});
	$('.icon2').on('click', function(){
		$('.segundo-menu').toggleClass('active-menu2');
		$('.menu2').toggleClass('active-menu3');
		$(this).toggleClass('active_icon2');
	});
	$('#jahen').on('click', function(){
		$('.visita').css('display', 'none');
	});
	$('#capitulos').on('click', function(){
		$('.capitulos').toggleClass('active-capitulos');
		$('#capitulos i').toggleClass('active-icon');
	});
	$('.play').on('click', function(){
		$('.cont-capitulo-vid').css('display', 'flex');
	});
	$('.close-capitulo').on('click', function(){
		$('.cont-capitulo-vid').css('display', 'none');
	});
	$('.galeria__img').on('click', function(e){
        var img = e.target.src;
        var modal = '<div class="modal" id="modal"><img src="'+img+'" class="modal__img"><div class="modal__boton" id="modal__boton"><i class="fas fa-times-circle"></i></div></div>';
        $('body').append(modal);
        $('#modal__boton').click(function(){
            $('#modal').remove();
		});
		$('.modal').click(function(){
            $('#modal').remove();
		});
	});
	$('#publicidad').on('click', function(){
		$('.publicidad').css('display', 'none');	
	});
    const getImages = container => [...container.querySelectorAll('img')];
	//obtener las rutas de las imagenes
		const getLargeImages = gallery => gallery
											.map ( el => el.src)
											.map ( el => el.replace('thumb', 'large'));
	//obtener la descripcion de las imagenes
	//capturar el evento
		const openLightboxEvent = (container,gallery,larges) => {
			container.addEventListener('click', e => {
				let el = e.target,
					i = gallery.indexOf(el);
				if (el.tagName === 'IMG'){
					openLightbox(gallery,i,larges);
				}
					
			})
		};
	//imprimir overlay 
		const openLightbox = (gallery,i,larges) => {
			let lightboxElement = document.createElement('div');
				lightboxElement.innerHTML = `
				<div class="lightbox-overlay">
					<figure class="lightbox-container">
						<div class="close-modal"><i class="fas fa-times-circle"></i></div>
						<img src="${larges[i]}" class="lightbox-img">
						<figcaption>
							<div class="botones">
								<a src="#" class="left prev"></a>
								<a src="#" class="next"></a>
							</div>
							<div class="lightbox-nav">
								<a class="nav-button prev">
									<i class="fas fa-angle-left"></i>
								</a>
								<span class="nav-container">
									Escena ${i + 1} de ${gallery.length}
								</span>
								<section class="nav-button next">
									<i class="fas fa-angle-right"></i>
								</section>
							</div>
						</figcaption>
					</figure>
				</div>
			`;
			lightboxElement.id = 'lightbox';
			document.body.appendChild(lightboxElement);
			closeModal(lightboxElement);
			navigateLightbox(lightboxElement,i,larges);
		};
	//cerrar-modal
	const closeModal= modalElement =>{
		let closeModal = modalElement.querySelector('.close-modal');
		closeModal.addEventListener('click', e => {
			e.preventDefault();
			document.body.removeChild(modalElement);
		});
	};

//navegar en el modal
	const navigateLightbox = (lightboxElement,i,larges) => {
		let prevButton = lightboxElement.querySelector('.prev i'),
			nextButton = lightboxElement.querySelector('.next i'),
			image = lightboxElement.querySelector('img'),
			counter = lightboxElement.querySelector('span'),
			closeButton = lightboxElement.querySelector('.close-modal');
		
		window.addEventListener('keyup', e => {
			if(e.key === 'ArrowRight') nextButton.click();
			if(e.key === 'ArrowLeft') prevButton.click();
			if(e.key === 'Escape') closeButton.click();
		});
		lightboxElement.addEventListener('click', e => {
			e.preventDefault();
			let target = e.target;
			if( target === prevButton){
				if( i > 0){
					image.src = larges [i - 1];
					i--
				} else {
					image.src = larges[larges.length - 1];
					i = larges.length-1;
				} 
			}else if (target === nextButton){
					if( i < larges.length - 1){
						image.src = larges [i + 1];
						i++
					}else{
						image.src = larges [0];
						i = 0;
					}
			}
			counter.textContent = `Imagen ${i + 1} de ${larges.length}`;
		});
	};
	const lightbox = container => {
		let images = getImages(container),
			larges = getLargeImages(images);
			openLightboxEvent(container,images,larges); 
	};
	lightbox(document.getElementById('gallery-container'));
});
$(document).ready(function(){
	"use strict";
	$('#storyboard').on('click', function(){
		var oculto = $('.galley-container');
		var active = document.getElementById("storyboard");
		if(oculto.hasClass('active-teaser')){
			oculto.removeClass('active-teaser');
			active.innerHTML = 'Ver Storyboard <i class="fas fa-chevron-down"></i>';
		}else{
			oculto.addClass('active-teaser');
			active.innerHTML = 'Ocultar Storyboard <i class="fas fa-chevron-up"></i>';
		}
	});
	$('.category_list .category_item[category="all"]').addClass('ct_item-active');
	$('.category_item').click(function(){
		var catProduct = $(this).attr('category');
		//agregando clase active selectionado
		$('.category_item').removeClass('ct_item-active');
		$(this).addClass('ct_item-active');
		// OCULTANDO PRODUCTOS =========================
		$('.galeria-imte').css('transform', 'scale(0)');
		function hideProduct(){
			$('.galeria-imte').hide();
		} setTimeout(hideProduct,400);
		// MOSTRANDO PRODUCTOS =========================
		function showProduct(){
			$('.galeria-imte[category="'+catProduct+'"]').show();
			$('.galeria-imte[category="'+catProduct+'"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	});
	// MOSTRANDO TODOS LOS PRODUCTOS =======================
	$('.category_item[category="all"]').click(function(){
		function showAll(){
			$('.galeria-imte').show();
			$('.galeria-imte').css('transform', 'scale(1)');
		} setTimeout(showAll,400);
	});
});
$(document).ready(function(){
	'use strict';
	var preguntas1 = [
        "¿Cuantosaños tengo?",
        "¿Cual es mi segundo apellido?",
        "¿Cuantos hermanos tengo?",
        "¿Con quien vivo?",
    ];
    var respuestas1 = [
        ["&#60;p&#62;", "h1", "h2", "19"],
        ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nesciunt laboriosam vitae harum soluta quas dolor odit quia, cum aut?", "Eduwin", "Alejandro", "Tibata"],
        ["3", "4", "1", "0"],
        ["Abuelos", "Madre", "Padre", "Tios",],
    ];
    var preguntas2 = [
        "Prueba",
        "Esto",
        "es",
        "una",
    ];
    var respuestas2 = [
        ["27", "26", "28", "29"],
        ["Bolivar", "Eduwin", "Alejandro", "Tibata"],
        ["3", "4", "1", "0"],
        ["Abuelos", "Madre", "Padre", "Tios",],
	];
	var preguntas3 = [
        "¿Que significan las siglas HTML?",
        "¿Quién está haciendo los estándares web?",
        "Elija el elemento HTML correcto para el encabezado más grande:",
		"¿Cómo puedes hacer una lista numerada?",
		"¿Cómo puedes hacer una lista con viñetas?",
		"¿Qué elemento HTML define el título de un documento?",
		"¿Qué atributo HTML especifica un texto alternativo para una imagen, si la imagen no se puede mostrar?",
		"¿Cuál es el elemento HTML correcto para reproducir archivos de video?",
		"¿Cuál es el elemento HTML correcto para reproducir archivos de audio?",
		"¿En qué formato se definen los gráficos definidos por SVG?",
		"La etiqueta HTML &#60;canvas&#62; es usada para:",
		"En HTML, ¿qué define el elemento &#60;aside&#62;?",
		"¿Cual de las siguientes etiquetas no van dentro de una etiqueta &#60;head&#62;?",
		"¿Qué carácter se usa para indicar una etiqueta final?",
		"¿Qué elemento HTML define los enlaces de navegación?",
    ];
    var respuestas3 = [
        ["HyperText Markup Language.", "Hyperlinks and Text Markup Language.", "Home Tool Markup Language.", "Hyperlinks Tool Markup Language."],
        ["The World Wide Web Consortium.", "Microsoft.", "Mozilla.", "Google."],
        ["&#60;h1&#62;", "&#60;h6&#62;", "&#60;heading&#62;", "&#60;head&#62;"],
		["&#60;ol&#62;", "&#60;dl&#62;", "&#60;list&#62;", "&#60;ul&#62;",],
		["&#60;ul&#62;", "&#60;dl&#62;", "&#60;list&#62;", "&#60;ol&#62;",],
		["&#60;title&#62;", "&#60;meta&#62;", "&#60;head&#62;", "&#60;titulo&#62;",],
		["alt", "title", "src", "longdesc",],
		["&#60;video&#62;", "&#60;movie&#62;", "&#60;media&#62;", "&#60;mp4&#62;",],
		["&#60;audio&#62;", "&#60;sound&#62;", "&#60;media&#62;", "&#60;mp3&#62;",],
		["XML", "CSS", "HTML", "SCSS",],
		["dibujar gráficos.", "manipular datos en MySQL.", "crear elementos arrastrables.", "mostrar registros de la base de datos.",],
		["Sección aparte del contenido de la página.", "Una lista de navegación.", "Dibujar gráficos.", "Contenido principal.",],
		["&#60;html&#62;", "&#60;link&#62;", "&#60;meta&#62;", "&#60;title&#62;",],
		["' &#47; '", "' &#60; '", "' &#62; '", "' &#92; '",],
		["&#60;nav&#62;", "&#60;navigate&#62;", "&#60;navigation&#62;", "&#60;menu&#62;",],
	];
	var numeroPreguntas = 0;
    var necesariosNivel = 5;
    var preguntas = preguntas1;
    var checker = $('.nivel1')[0];
	var respuestas = respuestas1;
	var elnivel = 1;
	var tiempo = 30;
    var score = 0;
	var indiceCorrecto;
	var i;
	var getAciertos = '';
	var getAciertos2 = '';
	var getAciertos3 = '';
	//Fin de variables globales
	//Accion de comprobación realizada por el usuario
	var idComprobar = $('#comprobar');
	idComprobar.on('click', function(){
		comprobar();
	});
	//Funcion Principal Del Juego
	function jugar(){
		var indiceAleatorio = Math.floor(Math.random()*preguntas.length);
        var respuestasPosibles = respuestas[indiceAleatorio];
        var posiciones = [0, 1, 2, 3];
        var respuestasReordenadas = [];
        var metio = false;
		var txtRespuestas = "";
		var getNivel = document.getElementById('elnivel');
		var getScore = document.getElementById('score');
        var getPregunta = document.getElementById("pregunta");
		var getRespuestas = document.getElementById("respuestas");
		//Fin de las Variables De Juego
        //Inicio del For in
        for(i in respuestasPosibles){
            var posicionAleatoria = Math.floor(Math.random()*posiciones.length);
            if(posicionAleatoria == 0 && metio == false){
                indiceCorrecto = i;
                metio = true;
            }
            respuestasReordenadas[i] = respuestasPosibles[posiciones[posicionAleatoria]];
            posiciones.splice(posicionAleatoria, 1);
        }
        for(i in respuestasReordenadas){
            txtRespuestas += '<input type="radio" name="pp" value="'+i+'" id="'+i+'"><label for="'+i+'" class="respuesta">'+respuestasReordenadas[i]+'</label><br>';
		}
		getNivel.innerHTML = elnivel + '/3';
        getScore.innerHTML = 'Score: '+score;
        getPregunta.innerHTML = preguntas[indiceAleatorio];
		getRespuestas.innerHTML = txtRespuestas;
		tiempo = 30;
	}
	//Comprobar si la respuesta es correcta
	function comprobar(){
		numeroPreguntas++;
		var getBackground = $('.juego-preguntas');
        var respuesta = $("input[type=radio]:checked").val();
        if(respuesta == null){
            addChecker(null);
        }else{
            if(respuesta == indiceCorrecto){
				addChecker(true);
				score += 10;
            } else {
                addChecker(false);                        
            }
        }
        function addChecker(bool){
            var createDiv = document.createElement('div');
            var txt = document.createTextNode(numeroPreguntas);
            createDiv.appendChild(txt);
			if(bool){
				createDiv.className += 'correct';
				checker.appendChild(createDiv);
			}else{
				createDiv.className += 'false';
				checker.appendChild(createDiv);
			}
		}
		if (numeroPreguntas >= necesariosNivel){
			elnivel += 1;
            numeroPreguntas = 0;
		}
		switch (elnivel) {
			case 1:
				checker = $('.nivel1')[0];
				preguntas = preguntas1;
				respuestas = respuestas1;
				getBackground.addClass('bg1');
				break;
			case 2:
				checker = $('.nivel2')[0];
				preguntas = preguntas2;
				respuestas = respuestas2;
				getBackground.removeClass('bg1').addClass('bg2');
				break;
			case 3:
				checker = $('.nivel3')[0];
				preguntas = preguntas3;
				respuestas = respuestas3;
				getBackground.removeClass('bg2').addClass('bg3');
				break;
			case 4:
				var gano = document.getElementById('mensaje');
				if(score >= 100){
					gano.innerHTML = "Muy Bien";
				}else{
					gano.innerHTML = "Chale...";
				}
				perdiste();
				break;
			default:
				checker = $('.nivel3')[0];
				preguntas = preguntas1;
				respuestas = respuestas1;
				break;
		}
        jugar();
	}
	var a;
    function disminuirTiempo(){
		a = setInterval(restarTiempo,1000);
	}
    function restarTiempo(){
		var getTiempo = document.getElementById('eltiempo');
		var getBarra = $('#barra');
		tiempo--;
		getTiempo.innerHTML = tiempo + 's';
		getBarra.css('width', (tiempo*100/30)+'%');
        if(tiempo == 0){
			comprobar();
        }
	}
	//slider perdiste
	var imgItems = $('.slider li').length;
	var imgPos = 1;
	var colorPrimario = '#EBEBEB';
	var colorSegundario = '#333';
	for(var lol = 1; lol <= imgItems; lol++){
		$('.pagination').append('<li></li>');
	}
	$('.slider li').hide();
	$('.slider li:first').show();
	$('.pagination li:first').css({'background-color': colorSegundario});
	$('.pagination li').click(pagination);
	$('.right').click(nextSlider);
	$('.left').click(prevSlider);
	function pagination(){
		var numeroPagina = $(this).index() + 1;
		$('.slider li').hide();
		$('.slider li:nth-child('+ numeroPagina +')').fadeIn();
		$('.pagination li').css({'background-color': colorPrimario});
		$(this).css({'background-color': colorSegundario});
		imgPos = numeroPagina;
	}
	function nextSlider(){
		if(imgPos >= imgItems){
			imgPos = 1;
		}else{
			imgPos++;
		}
		$('.pagination li').css({'background-color': colorPrimario});
		$('.pagination li:nth-child('+ imgPos +')').css({'background-color': colorSegundario});
		$('.slider li').hide();
		$('.slider li:nth-child('+ imgPos +')').fadeIn();
	}
	function prevSlider(){
		if(imgPos <= 1){imgPos = imgItems;}
		else{imgPos--;}
		$('.pagination li').css({'background-color': colorPrimario});
		$('.pagination li:nth-child('+ imgPos +')').css({'background-color': colorSegundario});
		$('.slider li').hide();
		$('.slider li:nth-child('+ imgPos +')').fadeIn();
	}
	function perdiste(){
		tiempo = 0;
		getAciertos = $(".nivel1 .correct").length;
		getAciertos2 = $(".nivel2 .correct").length;
		getAciertos3 = $(".nivel3 .correct").length;
		var perdedor = $('.perdiste');
		var getPorcentaje = getAciertos*100/necesariosNivel;
		var getPorcentajeGrafica = document.getElementById('porcentaje_grafica1');
		var getGrafica = $('#grafica1');
		var getPorcentaje2 = getAciertos2*100/necesariosNivel;
		var getPorcentajeGrafica2 = document.getElementById('porcentaje_grafica2');
		var getGrafica2 = $('#grafica2');
		var getPorcentaje3 = getAciertos3*100/necesariosNivel;
		var getPorcentajeGrafica3 = document.getElementById('porcentaje_grafica3');
		var getGrafica3 = $('#grafica3');
		var getLado = 'height';
		var getTotalPuntos = document.getElementById('totalPuntos');
		var getRecomendado = document.getElementById('recomendado');
		if(getAciertos >= 4 && getAciertos2 < 4 && getAciertos3 < 4){
			getRecomendado.innerHTML = "Sabes En que te estas metiendo, pero te falta lo tecnico.";
		}else if(getAciertos2 >= 4 && getAciertos < 4 && getAciertos3 < 4){
			getRecomendado.innerHTML = "Eres bueno con la suit de adobe.";
		}else if(getAciertos3 >= 4 && getAciertos < 4 && getAciertos2 < 4){
			getRecomendado.innerHTML = "Eres bueno en web";
		}else if(getAciertos3 >= 4 && getAciertos >= 4 && getAciertos2 < 4){
			getRecomendado.innerHTML = "Sabes En que te estas metiendo y tienes conocimientos en adobe.";
		}else if(getAciertos >= 4 && getAciertos3 >= 4 && getAciertos2 < 4){
			getRecomendado.innerHTML = "Sabes En que te estas metiendo y eres bueno en web.";
		}else if(getAciertos3 >= 4 && getAciertos2 >= 4 && getAciertos < 4){
			getRecomendado.innerHTML = "Eres bueno en todo pero no sabes en que te estas metiendo.";
		}else if(getAciertos >= 4 && getAciertos2 >= 4 && getAciertos3 >= 4){
			if(getAciertos == 5 && getAciertos2 == 5 && getAciertos3 == 5){
				getRecomendado.innerHTML = "Eres bueno en todo, en hora buena.";
			}else{
				getRecomendado.innerHTML = "Eres bueno en todo, pero practica un poco más";
			}
		}else{
			getRecomendado.innerHTML = "Esto no es lo tuyo.";
		}
		getTotalPuntos.innerHTML = 'Score: '+score;
		clearInterval(a);
		if ($(window).width() <= 830){
			getLado = 'width';
		}
		getPorcentajeGrafica.innerHTML = getPorcentaje + '%';
		getPorcentajeGrafica2.innerHTML = getPorcentaje2 + '%';
		getPorcentajeGrafica3.innerHTML = getPorcentaje3 + '%';
		getGrafica.css(getLado, getPorcentaje + '%');
		getGrafica2.css(getLado, getPorcentaje2 + '%');
		getGrafica3.css(getLado, getPorcentaje3 + '%');
		perdedor.css('display', 'flex');
		console.log(getLado);
	}
	jugar();
	disminuirTiempo();
});