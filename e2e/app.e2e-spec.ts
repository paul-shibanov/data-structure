import { DataStructurePage } from './app.po';

describe('data-structure App', () => {
  let page: DataStructurePage;

  beforeEach(() => {
    page = new DataStructurePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
