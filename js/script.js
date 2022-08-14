"use strict"
// Определяет устройство ПК/мобаил
const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	IOS: function () {
		return navigator.userAgent.match(/iphone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.IOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};

//Бургер
const iconMenu = document.querySelector('.menu-burger')
if (iconMenu) {
	const menuBody = document.querySelector('.header_nav');
	iconMenu.addEventListener('click', function (e) {
		document.body.classList.toggle('_lock')
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	})
}
//Закрытие меню при переходе на якорь page_2
const lockNav = document.querySelector('a.lock_nav')
if (lockNav) {
	const menuBody = document.querySelector('.header_nav');
	lockNav.addEventListener('click', function (e) {
		document.body.classList.toggle('_lock')
		menuBody.classList.toggle('_active');
	})
}

//Закрытие меню при переходе на якорь page_5
const lockNavp = document.querySelector('a.lock_nav_p')
if (lockNavp) {
	const menuBody = document.querySelector('.header_nav');
	lockNavp.addEventListener('click', function (e) {
		document.body.classList.toggle('_lock')
		menuBody.classList.toggle('_active');
	})
}

//Закрытие меню при переходе на якорь page_7
const lockNava = document.querySelector('a.lock_nav_a')
if (lockNava) {
	const menuBody = document.querySelector('.header_nav');
	lockNava.addEventListener('click', function (e) {
		document.body.classList.toggle('_lock')
		menuBody.classList.toggle('_active');
	})
}
//Закрытие меню при переходе на якорь page_8
const lockNavad = document.querySelector('a.lock_nav_adress')
if (lockNavad) {
	const menuBody = document.querySelector('.header_nav');
	lockNavad.addEventListener('click', function (e) {
		document.body.classList.toggle('_lock')
		menuBody.classList.toggle('_active');
	})
}

// Добавляет класс к body 
if (isMobile.any()) {
	document.body.classList.add('_touch');
} else {
	document.body.classList.add('_pc');
}

//Свайпер
new Swiper('.swiper_pin', {
	spaceBetween: 100,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},
	loop: true,
	autoplay: {
		delay: 3000,
		stopOnLastSlide: true,
		disableOnInteraction: false
	},
	speed: 800,
});

//Маска номера телефона
document.addEventListener("DOMContentLoaded", function () {
    var phoneInputs = document.querySelectorAll('input[data-tel-input]');

    var getInputNumbersValue = function (input) {
        // Return stripped input value — just numbers
        return input.value.replace(/\D/g, '');
    }

    var onPhonePaste = function (e) {
        var input = e.target,
            inputNumbersValue = getInputNumbersValue(input);
        var pasted = e.clipboardData || window.clipboardData;
        if (pasted) {
            var pastedText = pasted.getData('Text');
            if (/\D/g.test(pastedText)) {
                // Attempt to paste non-numeric symbol — remove all non-numeric symbols,
                // formatting will be in onPhoneInput handler
                input.value = inputNumbersValue;
                return;
            }
        }
    }

    var onPhoneInput = function (e) {
        var input = e.target,
            inputNumbersValue = getInputNumbersValue(input),
            selectionStart = input.selectionStart,
            formattedInputValue = "";

        if (!inputNumbersValue) {
            return input.value = "";
        }

        if (input.value.length != selectionStart) {
            // Editing in the middle of input, not last symbol
            if (e.data && /\D/g.test(e.data)) {
                // Attempt to input non-numeric symbol
                input.value = inputNumbersValue;
            }
            return;
        }

        if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
            if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
            var firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
            formattedInputValue = input.value = firstSymbols + " ";
            if (inputNumbersValue.length > 1) {
                formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
            }
            if (inputNumbersValue.length >= 5) {
                formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
            }
            if (inputNumbersValue.length >= 8) {
                formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
            }
            if (inputNumbersValue.length >= 10) {
                formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
            }
        } else {
            formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
        }
        input.value = formattedInputValue;
    }
    var onPhoneKeyDown = function (e) {
        // Clear input after remove last symbol
        var inputValue = e.target.value.replace(/\D/g, '');
        if (e.keyCode == 8 && inputValue.length == 1) {
            e.target.value = "";
        }
    }
    for (var phoneInput of phoneInputs) {
        phoneInput.addEventListener('keydown', onPhoneKeyDown);
        phoneInput.addEventListener('input', onPhoneInput, false);
        phoneInput.addEventListener('paste', onPhonePaste, false);
    }
})
