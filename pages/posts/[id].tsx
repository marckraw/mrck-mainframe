import {GetStaticPaths, GetStaticProps} from 'next'
import Head from 'next/head'
import Layout from '../../components/layout'
import {getAllPostIds, getPostData} from '../../lib/posts'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.scss'

interface PostProps {
    postData: any
}

export default function Post({postData}: PostProps): JSX.Element {
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

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const postData = await getPostData(params.id as string) // this is weird...
    return {
        props: {
            postData
        }
    }
}