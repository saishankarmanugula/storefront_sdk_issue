import { StorefrontClient } from '@nacelle/storefront-sdk';
import isoFetch from 'isomorphic-unfetch';

const nacelleV2 = async () => {

    const client = new StorefrontClient({
        storefrontEndpoint: "<Store front end point>",
        etchClient: isoFetch,
      });

      const query = `query allProducts($filter: ProductFilterInput) {
        allProducts(filter: $filter) {
          edges {
            node {
              nacelleEntryId
              productType
              content {
                title
                description
              }
            }
          }
        }
      }`;

      const variables = {
        filter: {
            handles: ['mixed-roses-prd-smrb'],
            locale: 'en-US'
        },
    };

    const { data, error } = await client.query({ query, variables });

    console.log(data, error);
    
}

export default nacelleV2;