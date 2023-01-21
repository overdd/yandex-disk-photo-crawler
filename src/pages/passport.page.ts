import AbstractPage from './abstract.page';

export class PassportPage extends AbstractPage {
  static buttons = {
    login: '.passp-button.passp-sign-in-button button',
  };
  static inputs = {
    username: '#passp-field-login',
    password: '#passp-field-passwd',
  };
}
