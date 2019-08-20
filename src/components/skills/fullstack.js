import React, {Component} from 'react';
import {graphql, StaticQuery} from 'gatsby';
import SkillsList from './skillsList';
export default ()=>(
    <StaticQuery
        query={
            graphql`
            query allFullstackQuery{
                allFullstackJson{
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
                <SkillsList title='Fullstack' data={data.allFullstackJson.nodes} />
            )
        }
    />
);