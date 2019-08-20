import React from 'react';
import {graphql, StaticQuery} from 'gatsby';
import SkillsList from './skillsList';
export default ()=>(
    <StaticQuery
        query={
            graphql`
            query allApplicationsQuery{
                allApplicationsJson{
                    nodes {
                        id
                        name
                        imageUrl {
                            publicURL
                        }
                    }
                }
            }
            `
        }
        render={
            data=>(
                <SkillsList title='Application Development' data={data.allApplicationsJson.nodes} />
            )
        }
    />
);