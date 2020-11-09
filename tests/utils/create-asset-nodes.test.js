import { createAssetNodes } from '../../src/utils/setup/create-asset-nodes';

it('should properly construct nodes for static assets', () => {
    const testArticle = {
        ast: {
            children: [],
        },
        // TODO: Update tests
        static_assets: [
            { checksum: 'asset_1', path: 'foo' },
            { checksum: 'asset_2', path: 'bar' },
        ],
    };

    const createNode = jest.fn();
    const createContentDigest = jest.fn(asset => asset[0]);

    createAssetNodes(testArticle, createNode, createContentDigest);
    expect(createNode.mock.calls.length).toBe(testArticle.static_assets.length);

    // check asset_1 call node
    const firstNode = createNode.mock.calls[0][0];
    expect(firstNode.id).toBe(testArticle.static_assets[0]);
    expect(firstNode.internal.type).toBe('Asset');
    expect(firstNode.internal.contentDigest).toBe(
        createContentDigest(testArticle.static_assets[0])
    );
});
