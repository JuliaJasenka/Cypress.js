import * as data from "../helpers/default_data.json"
import * as main_page from "../locators/main_page.json"
import * as result_page from "../locators/result_page.json"
import * as recovery_password_page from "../locators/recovery_password_page.json"

describe('Форма авторизации', function () {

    beforeEach('Начало теста', function () {
        cy.visit('/'); // Зашли на сайт
    });

    afterEach('Конец теста', function () {
        cy.get(result_page.close).should('be.visible'); // Проверили наличие крестика и что он виден пользователям
    });

    it('Верный логин и верный пароль', function () {

        cy.get(main_page.email).type(data.login); // Ввели верный логин
        cy.get(main_page.password).type(data.password); // Ввели верный пароль
        cy.get(main_page.login_button).click(); // Нажали кнопку Войти
        cy.get(result_page.title).contains('Авторизация прошла успешно'); // Получили сообщение Авторизация прошла успешно
        cy.get(result_page.close).should('be.visible'); //Проверили, что сообщение видно пользователям

    })

    it('Востановление пароля', function () {

        cy.get(main_page.fogot_pass_btn).click();
        cy.get(recovery_password_page.email).type('german@dolnikov.ru');
        cy.get(recovery_password_page.send_button).click();
        cy.get(result_page.title).contains('Успешно отправили пароль на e-mail');
        cy.get(result_page.title).should('be.visible');

    })

    it('Верный логин и НЕверный пароль', function () {

        cy.get(main_page.email).type(data.login); // Ввели верный логин
        cy.get(main_page.password).type('iLoveqastudio18'); // Ввели НЕверный пароль
        cy.get(main_page.login_button).click(); // Нажали кнопку Войти
        cy.get(result_page.title).contains('Такого логина или пароля нет'); // Получили сообщение Такого логина или пароля нет
        cy.get(result_page.title).should('be.visible'); //Проверили, что сообщение видно пользователям

    })

    it('НЕверный логин и верный пароль', function () {

        cy.get(main_page.email).type('german@mai.ru'); // Ввели НЕверный логин
        cy.get(main_page.password).type(data.password); // Ввели верный пароль
        cy.get(main_page.login_button).click(); // Нажали кнопку Войти
        cy.get(result_page.title).contains('Такого логина или пароля нет'); // Получили сообщение Такого логина или пароля нет
        cy.get(result_page.title).should('be.visible'); //Проверили, что сообщение видно пользователям

    })

    it('Логин БЕЗ @', function () {

        cy.get(main_page.email).type('germandolnikov.ru'); // Ввели НЕверный логин
        cy.get(main_page.password).type(data.password); // Ввели верный пароль
        cy.get(main_page.login_button).click(); // Нажали кнопку Войти
        cy.get(result_page.title).contains('Нужно исправить проблему валидации'); // Получили сообщение Нужно исправить проблему валидации
        cy.get(result_page.title).should('be.visible'); //Проверили, что сообщение видно пользователям

    })

    it('Логин приведение к нижнему регистру', function () {

        cy.get(main_page.email).type('GerMan@Dolnikov.ru'); // Ввели НЕверный логин
        cy.get(main_page.password).type(data.password); // Ввели верный пароль
        cy.get(main_page.login_button).click(); // Нажали кнопку Войти
        cy.get(result_page.title).contains('Авторизация прошла успешно'); // Получили сообщение Нужно исправить проблему валидации
        cy.get(result_page.title).should('be.visible'); //Проверили, что сообщение видно пользователям

    })
}
)