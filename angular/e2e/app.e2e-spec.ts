import { SpaTemplatePage } from './app.po';

describe('Spa App', function() {
  let page: SpaTemplatePage;

  beforeEach(() => {
    page = new SpaTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
