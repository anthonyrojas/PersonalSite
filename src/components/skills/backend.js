import React, {Component} from 'react';
import {graphql, StaticQuery} from 'gatsby';
import SkillsList from './skillsList';
export default ()=>(
    <StaticQuery
        query={
            graphql`
            query allBackendQuery{
                allBackendJson{
                    nodes{
                        id
                        name
                        imageUrl{
                            publicURL
                        }
                    }
                }
            }
            `
        }
        render={
            data=>(
                <SkillsList title='Backend' data={data.allBackendJson.nodes} />
            )
        }
    />
);