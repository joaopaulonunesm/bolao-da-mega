import { BolaoDaMegaPage } from './app.po';

describe('bolao-da-mega App', () => {
  let page: BolaoDaMegaPage;

  beforeEach(() => {
    page = new BolaoDaMegaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
