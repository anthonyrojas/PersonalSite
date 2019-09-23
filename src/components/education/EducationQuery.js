import React from 'react';
import {graphql, StaticQuery} from 'gatsby';
import Education from './Education';
export default () => (
    <StaticQuery 
        query={
            graphql`
            query allEducationQuery {
                allMarkdownRemark(sort: {fields: frontmatter___order, order: DESC}, filter: {frontmatter: {category: {eq: "education"}}}) {
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
                <Education data={data.allMarkdownRemark.nodes} />
            )
        }
    />
);