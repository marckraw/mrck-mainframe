import {GetStaticProps} from 'next'
import Head from "next/head";
import Layout from '../../components/layout'
import {getAllPostIds, getPostData} from '../../lib/posts'
import Date from "../../components/date";
import utilStyles from '../../styles/utils.module.scss'

export default function Post({postData}) {
    return (
        <Layout home={false}>
            <Head>{postData.title}</Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date}/>
                </div>
                <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
            </article>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}