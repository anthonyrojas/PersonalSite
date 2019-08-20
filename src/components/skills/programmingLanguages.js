import React, {Component} from 'react';
import {graphql, StaticQuery} from 'gatsby';
import SkillsList from './skillsList'
export default ()=>(
    <StaticQuery
        query={
            graphql`
            query allLanguagesQuery{
                allLanguagesJson{
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
                <SkillsList title='Programming Languages' data={data.allLanguagesJson.nodes} />
            )
        }
    />
);