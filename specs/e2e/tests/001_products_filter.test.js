Feature('Filtering');

Before(({I}) => I.amOnPage('/'));

Scenario('test search filter', ({ I, productsStep }) => {
    I.say('Checking if product not found and empty screen shown');
    productsStep.findProduct('adesadasfdse32ewff5645354rfdsx', {shouldBeFound: false});

    I.say('Checking if product found');
    productsStep.findProduct('zoom');

    I.fillField(productsStep.selectors.searchInput, '');
    I.dontSee(productsStep.selectors.loadingProgressBar);
    I.dontSee(productsStep.selectors.listItem);
});

Scenario('test categories filters', async ({ I, productsStep }) => {
    I.seeNumberOfElements(productsStep.selectors.categoryFilter, 5);
    await productsStep.enableCategoryFilter();
});