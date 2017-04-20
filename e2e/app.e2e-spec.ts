import { AppstorePage } from './app.po';

describe('appstore App', () => {
  let page: AppstorePage;

  beforeEach(() => {
    page = new AppstorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
