import { Ng4BixoIoPage } from './app.po';

describe('ng4-bixo-io App', () => {
  let page: Ng4BixoIoPage;

  beforeEach(() => {
    page = new Ng4BixoIoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
