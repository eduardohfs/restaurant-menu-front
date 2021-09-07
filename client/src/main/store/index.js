import itemsStore from './modules/items.store';

const createStores = () => {
    const items = itemsStore()


return {
        modules: {
            items,
        },
    }
};

export default createStores;