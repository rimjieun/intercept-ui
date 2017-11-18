import { InterceptUiPage } from './app.po';

describe('intercept-ui App', () => {
  let page: InterceptUiPage;

  beforeEach(() => {
    page = new InterceptUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
