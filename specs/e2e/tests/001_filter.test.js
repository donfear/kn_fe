Feature('Filtering');

const selectors = {
    searchInput: '[data-search-input] input',
    loadingProgressBar: '[data-loading-progress]',
    listItem: '[data-product-list-item]',
}

Before(({I}) => I.amOnPage('/'));

Scenario('test search filter', ({ I }) => {
    I.waitForElement(selectors.searchInput);
    I.fillField(selectors.searchInput, 'zoom');

    I.seeElement(selectors.loadingProgressBar);
    I.waitForElement(selectors.listItem);

    I.fillField(selectors.searchInput, '');
    I.dontSee(selectors.loadingProgressBar);
    I.dontSee(selectors.listItem);
});

Scenario('test categories filters', ({ I }) => {
 
});