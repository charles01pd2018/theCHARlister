// components
import { SEO } from 'components';
// lib
import { EXPERIENCE_ENDPOINT } from 'lib';
// layout
import { ArticleLayout } from 'layout';
// lib
import { PROJECTS_ENDPOINT, BEEMY_PROJECT_ENDPOINT, URL } from 'lib';
// types
import type { GetStaticProps } from 'next';
import type { ArticleLayoutContent } from 'layout/types';


interface Content {
    pageTitle: string;
    description: string;
    articleLayoutContent: ArticleLayoutContent;
}

interface Props {
    content: Content;
}

const Beemy = ( {
    content,
}: Props ) => {
    /* CONTENT */
    const { pageTitle, description, articleLayoutContent } = content;

    return (
        <>
            <SEO pageTitle={pageTitle} description={description}
                image='/static/images/open-graph.png'
                url={`${URL}${BEEMY_PROJECT_ENDPOINT}`} />
            <ArticleLayout className='beemy'
                content={articleLayoutContent} />
        </>
    );
}

export default Beemy;


const content: Content = {
    pageTitle: 'beemy Project - theCHARlister',
    description: 'beemy Personal Project - theCHARlister',
    articleLayoutContent: {
        projectLinkContent: {
            logo: {
                data: '/static/icons/beemy-logo.svg',
                alt: 'beemy Logo',
            },
            href: 'https://www.writebeemy.com/',
            ariaLabel: 'beemy Website',
        },
        breadcrumbsContent: {
            links: [
                {
                    text: 'Home',
                    href: '/',
                },
                {
                    text: 'Projects',
                    href: PROJECTS_ENDPOINT,
                },
                {
                    text: 'beemy',
                    href: BEEMY_PROJECT_ENDPOINT,
                },
            ],
        },
        productArticleContent: {
            items: [
                {
                    title: 'Overview',
                    texts: [
                        {
                            WrapperTag: 'p',
                            text: 'One click blog post publishing with built-in SEO and a rich editor experience.',
                        },
                    ],
                },
                {
                    title: 'Editor',
                    texts: [
                        {
                            WrapperTag: 'p',
                            text: 'The editor functions as a block style editor and leverages the open source library <a target="_blank" href="https://editorjs.io/">editor.js</a>. You can:',
                        },
                        {
                            WrapperTag: 'ol',
                            text: '<li>Search and use different blocks such as images, alerts, headings, tables, checklists, and many more!</li>' + 
                                '<li>Align text content to the left, center, or right.</li>' + 
                                '<li>Easily reorder blocks with drag and drop.</li>' + 
                                '<li>Convert blocks.</li>' + 
                                '<li>Mark up text by <b>bold</b>, <i>italicing</i>, <mark class="blue">highlighting</mark>, etc.</li>',
                        },
                        {
                            WrapperTag: 'p',
                            text: 'Additionally, you can:',
                        },
                        {
                            WrapperTag: 'ol',
                            text: '<li>Tag each article with different topics. Reorder these tags by dragging and dropping.</li>' + 
                                '<li>Add a preview image to the article.</li>' + 
                                '<li>Navigate long articles with the table of contents.</li>' + 
                                '<li>Preview articles before they go live.</li>' + 
                                '<li>Customize page title, search engine preview, and slug to optimize SEO.</li>' + 
                                '<li>Password protect articles.</li>'
                        },
                    ],
                },
                {
                    title: 'Page Builder',
                    texts: [
                        {
                            WrapperTag: 'p',
                            text: 'Build blog pages where you can organize your articles. You can:',
                        },
                        {
                            WrapperTag: 'ol',
                            text: '<li>Utilize our pre-built article panels and components to build  ✨beautiful💫 blog pages.</li>' + 
                                '<li>Drag and drop published articles to populate article panels.</li>' + 
                                '<li>Customize what information article panels have on a granular level.</li>' + 
                                '<li>Customize page title, search engine preview, and tags to optimize SEO.</li>' + 
                                '<li>Link subpages through a top level header with customizable text and link content.</li>' + 
                                '<li>Preview pages before they go live.</li>' +
                                '<li>Have blog page articles all build under a single page context: <u>/articles</u></li>'
                        },
                    ],
                },
                {
                    title: 'Out-of-the Box Writer Page',
                    texts: [
                        {
                            WrapperTag: 'p',
                            text: 'As soon as you create an account on beemy, you get a custom blog page! This is where your personal brand, journal, or canvas lives. Articles published automatically appear on your writer page where you can easily share to your audience.',
                        },
                        {
                            WrapperTag: 'p',
                            text: 'Add socials to let your audience know where to find you and a description to share what topics you write about!',
                        },
                    ],
                },
                {
                    title: 'Organizing Drafts vs. Published',
                    texts: [
                        {
                            WrapperTag: 'p',
                            text: 'Articles and pages work a little differently when it comes to organizing drafts and published content:',
                        },
                        {
                            WrapperTag: 'p',
                            className: "shrink-spacing",
                            text: '<u>Articles</u>',
                        },
                        {
                            WrapperTag: 'ul',
                            text: '<li><mark class="green"><u>Edit</u></mark> - the published version will remain live and unchanged until the draft is republished.</li>' +
                                '<li><mark class="orange"><u>Revert</u></mark> - the published article will be deleted and converted into a draft.</li>' +
                                '<li><mark class="pink"><u>Delete.</u></mark></li>'
                        },
                        {
                            WrapperTag: 'p',
                            className: "shrink-spacing",
                            text: '<u>Pages</u>',
                        },
                        {
                            WrapperTag: 'p',
                            text: 'Unlike articles, when a page is published, the draft version is <b><u>not</u></b> deleted. This is because pages, more often then articles, are frequently updated. Because of this, published pages can be:'
                        },
                        {
                            WrapperTag: 'ul',
                            text: '<li><mark class="orange"><u>Restored</u></mark> - essentially the opposite of publishing where the draft page becomes the published page.</li>' +
                                '<li><mark class="pink"><u>Delete.</u></mark></li>'
                        },
                    ],
                },
            ],
        },
        technicalArticleContent: {
            items: [
                {
                    title: 'Next.JS Project Architecture',
                    texts: [
                        {
                            WrapperTag: 'p',
                            text: 'beemy is a fullstack Typescript project. Because of this, there is some complexity in architecting the repository structure. In other words, placing files in places that makes sense becomes a challenge.',
                        },
                        {
                            WrapperTag: 'a',
                            href: 'https://www.writebeemy.com/writer/@charlie/page/dev/articles/fullstack-nextjs-project-architecture',
                            target: '_blank',
                            text: 'I wrote an article how beemy tackles this',
                        },
                    ],
                },
                {
                    title: 'Server-Side Rendering vs. Incremental Static Generation',
                    texts: [
                        {
                            WrapperTag: 'p',
                            text: 'beemy makes use of <u>server-side rendering</u> within the app pages and i<u>ncremental static generation</u> for public article and blog pages. Because the app page is consistently updated, we need to fetch resources on the request level. However, blog and article pages are not updated as frequently. Because of this, we can build the HTML on the server and cache it so that:',
                        },
                        {
                            WrapperTag: 'ul',
                            text: '<li>Article and blog pages load really fast. 💨</li>' +
                                `<li>We don’t need to fetch from the database for every request.</li>`,
                        },
                        {
                            WrapperTag: 'p',
                            text: `Everytime a page or article is published or updated, it gets <b>rebuilt</b> on the backend. Incremental Static Generation is accomplished through Next.JS's <a target="_blank" href='https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration#on-demand-revalidation'>on-demand revalidation feature</a>.`
                        },
                    ],
                },
                {
                    title: 'Debounce saving',
                    texts: [
                        {
                            WrapperTag: 'p',
                            text: 'The editor portion of the app relies on <b><u>debounce auto-saving</u></b>. This means that after the user stop typing in the editor, an automatic save will be triggered after 200ms.',
                        },
                        {
                            WrapperTag: 'p',
                            text: 'A further feature to add would be to combine manually saving with auto-saving. My preffered method to trigger a manual save would be to press <code>⌘+S</code> → which also makes the most sense since this would be the only method fast enough to override auto-saving. The flow would look something like this:'
                        },
                        {
                            WrapperTag: 'p',
                            text: 'User is typing → debounce save is queued → user presses <code>⌘+S</code> to manually save before debounce save occurs → cancel queued debounce save → save article.'
                        },
                        {
                            WrapperTag: 'p',
                            className: 'indent',
                            text: `*This is how the <a target="_blank" href="${EXPERIENCE_ENDPOINT}/#Knowt">Knowt</a> editor works!`,
                        },
                    ],
                },
                {
                    title: 'GraphQL and Next.JS API Routes',
                    texts: [
                        {
                            WrapperTag: 'p',
                            text: 'beemy makes use of both Next.JS API endpoints + GraphQL through Apollo.',
                        },
                        {
                            WrapperTag: 'a',
                            href: 'https://twitter.com/theCHARlister/status/1559565988441608192',
                            target: '_blank',
                            text: 'I wrote a thread on Twitter about my thoughts on the two API structures',
                        },
                    ],
                },
                {
                    title: 'Authentication',
                    texts: [
                        {
                            WrapperTag: 'p',
                            text: `beemy leverages the <a target="_blank" href="https://next-auth.js.org/">next-auth</a> library and JWT’s (JSON Web Tokens) to support the following authentication methods:`,
                        },
                        {
                            WrapperTag: 'ul',
                            text: '<li>Google and Github OAuth sign-in</li>' +
                                '<li>Email and password login. Magic link emails are supported through Twilio Sendgrid.</li>',
                        },
                        {
                            WrapperTag: 'p',
                            text: 'Additonally, beemy intercepts initial sign-up events to handle a custom account creation step of creating a writer name.',
                        },
                        {
                            WrapperTag: 'a',
                            href: 'https://www.writebeemy.com/writer/@charlie/page/dev/articles/handling-security---next-auth-jwt-mongodb',
                            target: '_blank',
                            text: `More info on securing API routes with JWT’s`,
                        },
                    ],
                },
                {
                    title: 'Text NoSQL MongoDB Storage + Firebase File Storage',
                    texts: [
                        {
                            WrapperTag: 'p',
                            text: 'beemy uses 2 databases on the backend to store user data:',
                        },
                        {
                            WrapperTag: 'ul',
                            text: '<li>MongoDB for text content stored as NoSQL JSON.</li>' +
                                '<li>Firebase file storage that stores article and page images.</li>',
                        },
                        {
                            WrapperTag: 'p',
                            text: 'All file uploading and downloading is offloaded onto the client - meaning that images are uploaded and downloaded from Firebase through the users computer and not the server.',
                        },
                    ],
                },
                {
                    title: 'Pagination',
                    texts: [
                        {
                            WrapperTag: 'p',
                            text: 'Articles are paginated within the beemy app limit the number of articles returned from the server to 10. Pagination occurs in 2 places within the app:',
                        },
                        {
                            WrapperTag: 'ol',
                            text: '<li>The main article app pages. This is a more traditional type of paging where the user clicks a button to fetch more articles. </li>' +
                                '<li>The page builder page. Paging here is accomplished through infinite scrolling → pretty much how every social media feed works.</li>',
                        },
                        {
                            WrapperTag: 'p',
                            text: 'Pagination is optimized by using the last article id as a query parameter.',
                        },
                        {
                            WrapperTag: 'a',
                            href: 'https://www.writebeemy.com/writer/@charlie/page/dev/articles/pagination-patterns',
                            target: '_blank',
                            text: 'More details on beemy Pagination',
                        },
                    ],
                },
                {
                    title: 'Recursive Page Updating',
                    texts: [
                        {
                            WrapperTag: 'p',
                            text: 'The page builder of beemy supports an infinite amount of nested pages on the backend. This means there can theoretically be an infinite amount of subpages associated with a top page. However, there is an imposed maximum nesting of 5.',
                        },
                        {
                            WrapperTag: 'p',
                            text: 'Because all connected pages have the same header - we have to update all the connected pages everytime the header is updated. This can be done because each page will keep track of the topId (id of the top level page) and previous connect pages. So everytime we make a header update, we query for the field topId.'
                        },
                        {
                            WrapperTag: 'a',
                            href: 'https://www.writebeemy.com/writer/@charlie/page/dev/articles/managing-client-and-server-data---react#Queuing-Fetches',
                            target: '_blank',
                            text: 'Updated are made through <u>promise queuing</u>',
                        },
                    ],
                },
                {
                    title: 'Search',
                    texts: [
                        {
                            WrapperTag: 'p',
                            text: `Tag filtering and text searching through articles is accomplished through MongoDB’s <a target="_blank" href='https://www.mongodb.com/docs/manual/text-search/'>Text Search</a> feature.`,
                        },
                        {
                            WrapperTag: 'p',
                            text: 'Each article field is assigned a unique weight on the backend to create a custom search score from each query. So when I search for “Dogs” → the article with the title Dog will appear above the article with description dog.'
                        },
                        {
                            WrapperTag: 'p',
                            text: 'Only articles that have a search score above 0 are returned.'
                        },
                    ],
                },
                {
                    title: 'Extra',
                    texts: [
                        {
                            WrapperTag: 'a',
                            href: 'https://www.reddit.com/r/reactjs/comments/xbkh2j/i_built_a_fullstack_blog_builder_beemy_selftaught/',
                            target: '_blank',
                            text: 'Reddit post detailing story and technologies used',
                        },
                        {
                            WrapperTag: 'a',
                            href: 'https://www.writebeemy.com/writer/@charlie/page/dev',
                            target: '_blank',
                            text: 'Blog page (built with beemy) with 9 articles on lessons learned',
                        },
                    ],
                },
            ],
        },
        tagListContent: {
            tags: [
                {
                    text: 'FULLSTACK',
                    color: 'blue',
                },
                {
                    text: 'PERSONAL',
                    color: 'blue',
                },
            ],
        },
        stackedIconsContent: {
            icons: [
                {
                    data: '/static/icons/vercel-logo.svg',
                    alt: 'Vercel Logo',
                    title: 'Vercel',
                },
                {
                    data: '/static/icons/typescript-bg-logo.svg',
                    alt: 'Typescript Logo',
                    title: 'Typescript',
                },
                {
                    data: '/static/icons/graphql-bg-logo.svg',
                    alt: 'GraphQL Logo',
                    title: 'GraphQL',
                },
                {
                    data: '/static/icons/sendgrid-bg-logo.svg',
                    alt: 'Twilio SendGrid Logo',
                    title: 'Twilio SendGrid'
                },
                {
                    data: '/static/icons/mongodb-logo.svg',
                    alt: 'MongoDB Logo',
                    title: 'MongoDB',
                },
            ],
        },
    },
}

export const getStaticProps: GetStaticProps = () => {
    return {
        props: {
            content,
        }
    }
}