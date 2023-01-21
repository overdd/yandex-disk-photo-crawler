import AbstractPage from './abstract.page';

export default class ClientPage extends AbstractPage {
  static tabs = {
    photo:
      '.Link.LeftColumnNavigation__Item.LeftColumnNavigation__Item_type_photo',
  };
  static images = {
    regularThumbnail: 'div.photo__item',
  };
}
