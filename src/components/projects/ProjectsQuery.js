import React from 'react';
import {graphql, StaticQuery} from 'gatsby';
import Projects from './Projects';
export default ()=>(
    <StaticQuery
        query={
            graphql`
            query allProjectsQuery {
                allMarkdownRemark {
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