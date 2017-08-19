import { AngularsPage } from './app.po';

describe('angulars App', () => {
  let page: AngularsPage;

  beforeEach(() => {
    page = new AngularsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
