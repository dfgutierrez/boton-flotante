const icono = document.querySelector('#icono');
const tooltip = document.querySelector('#tooltip');
const ifremesms = document.querySelector('#ifremesms');
const minimizar = document.querySelector('#minimizar');
const cerrar = document.querySelector('#cerrar');

const calcularPosicionTooltip = () => {
	// Calculamos las coordenadas del icono.
	const x = icono.offsetLeft;
	const y = icono.offsetTop;

	// Calculamos el tamaño del tooltip.
	const anchoTooltip = tooltip.clientWidth;
	const altoTooltip = tooltip.clientHeight;

	// Calculamos donde posicionaremos el tooltip.
	const izquierda = x ;
	const arriba = y - altoTooltip - 20;

	tooltip.style.left = `${izquierda}px`;
	tooltip.style.top = `${arriba}px`;
};

window.addEventListener('load', () => calcularPosicionTooltip());
window.addEventListener('resize', () => calcularPosicionTooltip());

icono.addEventListener('click', () => {
	tooltip.classList.add('activo');
	calcularPosicionTooltip();
});

icono.addEventListener('click', () => {
	let tooltipIsActivo = tooltip.classList.contains("activos");
	if(tooltipIsActivo===true){
		tooltip.classList.remove('activos');
	}else{
		tooltip.classList.add('activos');
	}
	calcularPosicionTooltip();
});

minimizar.addEventListener('click', () => {
	tooltip.classList.remove('activos');
});

cerrar.addEventListener('click', () => {
	ifremesms.src = "http://frontend-desarrolloem.apps.claro.co/sms";
	tooltip.classList.remove('activos');
});


