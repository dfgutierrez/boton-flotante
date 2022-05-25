//Variables for sms
const iconoSms = document.querySelector('#icono_sms');
const tooltipSms = document.querySelector('#tooltip_sms');
const ifremeSms = document.querySelector('#ifreme_sms');
const minimizarSms = document.querySelector('#minimizar_sms');
const cerrarSms = document.querySelector('#cerrar_sms');

//Variables for email
const openEmail = document.getElementById('open_email');
const modalContainerEmail = document.getElementById('modal_container_email');
const minimizarEmail = document.getElementById('minimizar_email');
const cerrarEmail = document.getElementById('cerrar_email');

//code for sms
const calcularPosicionTooltip = () => {
	// Calculamos las coordenadas del icono.
	const x = iconoSms.offsetLeft;
	const y = iconoSms.offsetTop;

	// Calculamos el tamaño del tooltip.
	const anchoTooltip = tooltipSms.clientWidth;
	const altoTooltip = tooltipSms.clientHeight;

	// Calculamos donde posicionaremos el tooltip.
	const izquierda = x ;
	const arriba = y - altoTooltip - 20;

	tooltipSms.style.left = `${izquierda}px`;
	tooltipSms.style.top = `${arriba}px`;
};

window.addEventListener('load', () => calcularPosicionTooltip());
window.addEventListener('resize', () => calcularPosicionTooltip());


iconoSms.addEventListener('click', () => {
	let tooltipIsActivo = tooltipSms.classList.contains("activo-sms");
	if(tooltipIsActivo===true){
		tooltipSms.classList.remove('activo-sms');
	}else{
		tooltipSms.classList.add('activo-sms');
	}
	calcularPosicionTooltip();
});

minimizarSms.addEventListener('click', () => {
	tooltipSms.classList.remove('activo-sms');
});

cerrarSms.addEventListener('click', () => {
	ifremeSms.src = "http://frontend-desarrolloem.apps.claro.co/sms";
	tooltipSms.classList.remove('activo-sms');
});

//code for email
openEmail.addEventListener('click', () => {
  modalContainerEmail.classList.add('show-email');  
});

minimizarEmail.addEventListener('click', () => {
  modalContainerEmail.classList.remove('show-email');
});

cerrarEmail.addEventListener('click', () => {
  modalContainerEmail.classList.remove('show-email');
});


