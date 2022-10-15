const { I } = inject();

module.exports = {
    selectors: {
        searchInput: '[data-search-input] input',
        loadingProgressBar: '[data-loading-progress]',
        nothingFound: '[data-nothing-found]',
        listItem: '[data-product-list-item]',
        categoryFilter: '[data-product-category-filter]',
    },
    isLoadingShown: function() {
        I.seeElement(this.selectors.loadingProgressBar);
    },
    findProduct: function (productName, options = { shouldBeFound: true }) {
        I.waitForElement(this.selectors.searchInput);
        I.fillField(this.selectors.searchInput, productName);

        this.isLoadingShown();

        (options.shouldBeFound)
            ? I.waitForElement(this.selectors.listItem)
            : I.waitForElement(this.selectors.nothingFound);
    },
    enableCategoryFilter: async function () {
        I.click(this.selectors.categoryFilter);
        this.isLoadingShown();
    }
}