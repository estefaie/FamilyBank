import { FamilyBankPage } from './app.po';

describe('family-bank App', () => {
  let page: FamilyBankPage;

  beforeEach(() => {
    page = new FamilyBankPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
