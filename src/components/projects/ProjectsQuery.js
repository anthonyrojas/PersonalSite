import React from 'react';
import {graphql, StaticQuery} from 'gatsby';
import Projects from './Projects';
export default ()=>(
    <StaticQuery
        query={
            graphql`
            query allProjectsQuery {
                allMarkdownRemark(sort: {fields: frontmatter___order, order: DESC}, filter: {frontmatter: {category: {eq: "projects"}}}) {
                    nodes {
                        id
                        frontmatter {
                            title
                            featuredImage{
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
            data=>(
                <Projects data={data.allMarkdownRemark.nodes} />
            )
        }
    />
);