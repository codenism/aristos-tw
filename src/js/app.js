(function ($){
	$(document).ready(function () {
		var input = $('.form__auth_input');
		emptyInput(input);
		var login = "test";
		var password = "test";
		var loginField = $('#auth_login');
		var passField = $('#auth_password');
		$('.form__auth_btn').click(function () {
			emptyMsg();
			addCheckAnim();
			setTimeout(function () {
				formCheck(login, password, loginField, passField);
			}, 5000);
		});
	});
// Проверка пустых инпутов
function emptyInput(input){
	if($(input).val() != ""){
		$(input).addClass("has-content");
	}else{
		$(input).removeClass("has-content");
	}
	$(input).focusout(function(){
		if($(this).val() != "") {
			$(this).addClass("has-content");
		}
		else {
			$(this).removeClass("has-content");
		}
	});
}
// Проверка отправляемых данных
function formCheck(login, password, loginField, passField) {
	deleteCheckAnim();
	if ( (loginField.val() === login) && (passField.val() === password) ) {
		successMsg();
		setTimeout(function () {
			successScreen();
		}, 3000);
	}
	else {
		errorMsg();
	}
}
// Проверка данных формы - анимация
function addCheckAnim() {
	var animate = $('.form__message span');
	animate.addClass('active');
}
function deleteCheckAnim() {
	var animate = $('.form__message span');
	animate.removeClass('active');
}
// Ошибка при вводе
function errorMsg () {
	var input = $('.form__auth_input');
	var description = $('.form__message');
	var message = "Ошибка в имени или пароле";
	if (!input.hasClass('error') && !description.hasClass('form__error')) {
		input.addClass('error');
		description.addClass('form__error');
		description.find('p').text(message);
	}
}
// При проверке удаляем сообщение об ошибке
function emptyMsg () {
	var input = $('.form__auth_input');
	var description = $('.form__message');
	var message = "";
	input.removeClass('error');
	description.removeClass('form__error');
	description.find('p').text(message);
}
// Показываем сообщение об успешной авторизации
function successMsg () {
	var input = $('.form__auth_input');
	var description = $('.form__message');
	var message = "Успешная авторизация";
	input.removeClass('error');
	description.removeClass('form__error');
	description.addClass('form__success');
	description.find('p').text(message);
}
// Переход после авторизации
function successScreen () {
	$('.page__form_auth').remove();
	var message = "Добро пожаловать";
	$('.form__auth_head p').text(message);
}
})(jQuery);