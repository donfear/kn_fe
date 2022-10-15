Feature('Product details');

Before(({ I }) => I.amOnPage('/'));

Scenario('test open/close product details', ({ I, productsStep }) => {
    productsStep.findProduct('zoom');

    I.say('Open product details');
    I.click(productsStep.selectors.listItem);
    I.seeElement(productsStep.selectors.productDetails);

    I.say('Hide product details');
    I.click(productsStep.selectors.listItem);
    I.dontSee(productsStep.selectors.productDetails);
});

