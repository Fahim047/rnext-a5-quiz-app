import Swal from 'sweetalert2';

export const Toast = Swal.mixin({
	toast: true,
	position: 'top-end',
	background: '#28194b', //00c49a
	color: '#ffffff',
	showConfirmButton: false,
	timer: 2000,
	timerProgressBar: true,
	customClass: {
		timerProgressBar: 'custom-progress-bar',
	},
	didOpen: (toast) => {
		toast.addEventListener('mouseenter', Swal.stopTimer);
		toast.addEventListener('mouseleave', Swal.resumeTimer);
	},
});
