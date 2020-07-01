const regularPhrase = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const button = document.querySelector('#btn');
const textError = document.querySelector('#textError');
const email = document.querySelector('#email');

button.addEventListener('click', () => {
	if (validarIput(email.value)) {
		addClass();
	}
	else {
		removeClass();
	}
});

const validarIput = value => {
	if (!value) return true;
	if (!regularPhrase.exec(email.value.trim())) return true;
	return false;
};

const addClass = () => {
	email.classList.add('inputError');
	textError.classList.add('error-see');
};

const removeClass = () => {
	email.classList.remove('inputError');
	textError.classList.remove('error-see');
};
