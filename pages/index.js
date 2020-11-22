import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.scss'
import {getSortedPostsData} from '../lib/posts'

export default function Home({allPostsData}) {
    return (
        <Layout home>
            <Head>…</Head>
            <section className={utilStyles.headingMd}>…</section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({id, date, title}) => (
                        <li className={utilStyles.listItem} key={id}>
                            {title}
                            <br/>
                            {id}
                            <br/>
                            {date}
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}

export async function getStaticProps() {
    // Get external data from the file system, API, DB, etc.
    const allPostsData = getSortedPostsData()

    // The value of the `props` key will be
    //  passed to the `Home` component
    return {
        props: {
            allPostsData
        }
    }
}