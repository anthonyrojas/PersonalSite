import React from 'react';
import {
    graphql,
    StaticQuery
} from 'gatsby';
import Work from './Work';
export default ()=>(
    <StaticQuery
        query={
            graphql`
            query allWorkQuery {
                allMarkdownRemark(sort: {fields: frontmatter___order, order: DESC}, filter: {frontmatter: {category: {eq: "work"}}}) {
                    nodes {
                        id
                        frontmatter {
                            title
                            featuredImage {
                                publicURL
                            }
                        }
                        html
                    }
                }
            }
            `
        }
        render={
            data => (
                <Work data={data.allMarkdownRemark.nodes} />
            )
        }
    />
)