import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Link from 'next/link'

export const GET_CATEGORIES  = gql`
{
    findIndustrySectors{
      industrySectors {
        id
        name
      }
      errors
    }
  }
`
export default function FooterCategories () {
  return (
    <fragment>
      <Query query={GET_CATEGORIES}>

        {({ loading, error, data }) => {
            
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
            
          return (
            <ul className="nav flex-column">
              {data.findIndustrySectors.industrySectors.map(function({ id, name}, index){
                if (index<5) {
                  return <li className="footerli" key={id}><Link href="/categories"><a className="flinks">{name}</a></Link></li>;
                }
                  
              })}
            </ul>
          )

        }}

      </Query>

      <style jsx>{`
      .flinks {
            color: #314559 !important;
            font-size:14px;
        }
      `}
      </style>
    </fragment>
  )
}