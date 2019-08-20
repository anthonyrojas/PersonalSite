import React, {Component} from 'react';
import {graphql, StaticQuery} from 'gatsby';
import SkillsList from './skillsList'

export default ()=>(
    <StaticQuery
        query={
            graphql`
            query allFrontendQuery{
                allFrontendJson{
                    nodes{
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
                <SkillsList title='Frontend' data={data.allFrontendJson.nodes} />
            )
        }
    />
);