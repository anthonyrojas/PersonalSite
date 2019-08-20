import React, {Component} from 'react';
import {graphql, StaticQuery} from 'gatsby';
import SkillsList from './skillsList';
export default ()=>(
    <StaticQuery
        query={
            graphql`
            query allDatabasesQuery{
                allDatabasesJson{
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
                <SkillsList title='Databases' data={data.allDatabasesJson.nodes} />
            )
        }
    />
);