import { CodingPage } from './app.po';

describe('coding App', () => {
  let page: CodingPage;

  beforeEach(() => {
    page = new CodingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
