import { Query } from 'react-apollo'
import gql from 'graphql-tag'

export const GET_CATEGORIES  = gql`
{
    findCategories(storeId: ["5d28613649065f08f29b8f5c"], retailerId: ["5d23b2efe0d3ed0912e018dc"]) {
      categories {
        id
        name
        imageUrl
      }
      errors
    }
  }
`
export default function Categories () {
  return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <Query query={GET_CATEGORIES}>

        {({ loading, error, data }) => {
            
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            return data.findCategories.categories.map(({ id, name}) => (
            
            <div key={id} className="col-md-6">
                <h3>{name}</h3>
                <hr/>
            </div>

            ));

        }}

        </Query>
  )
}