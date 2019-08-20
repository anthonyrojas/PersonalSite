import React, {Component} from 'react';
import {graphql, StaticQuery} from 'gatsby';
import SkillsList from './skillsList';
export default ()=>(
    <StaticQuery
        query={
            graphql`
            query allCloudQuery{
                allCloudJson{
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
                <SkillsList title='Cloud' data={data.allCloudJson.nodes} />
            )
        }
    />
);