// import React from 'react';
// import {graphql} from 'gatsby';
// export default function Template({
//     data,
// }){
//     const { markdownRemark } = data
//     const { frontmatter, html } = markdownRemark
//     return(
//         <div className='project-container'>
//             <div className='project'>
//                 <h1>{frontmatter.title}</h1>
//                 <h2>{frontmatter.date}</h2>
//                 <img src={frontmatter.featuredImage} alt={frontmatter.title} />
//                 <div className='project-content' dangerouslySetInnerHTML={{__html: html}} />
//             </div>
//         </div>
//     );
// }

// export const pageQuery = graphql`
//     query($path: String!) {
//         markdownRemark(frontmatter: { path: { eq: $path }, category: { eq: "project" } }) {
//             html
//             frontmatter {
//                 date(formatString: "MMMM DD, YYYY")
//                 path
//                 title
//                 featuredImage
//                 category
//             }
//         }
//     }
// `;