import { BixoWebPage } from './app.po';

describe('bixo-web App', () => {
  let page: BixoWebPage;

  beforeEach(() => {
    page = new BixoWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
