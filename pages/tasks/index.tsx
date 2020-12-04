import {GetStaticProps} from 'next'
import Head from 'next/head'
import Layout from '../../components/layout'

interface TasksIndexProps {
    dupa: string
}

export default function TasksIndex(props: TasksIndexProps): JSX.Element {
    console.log(props)
    return (
        <Layout home>
            <Head>
                <title>This is title from head</title>
            </Head>
            <section>
                <h2>This is tasks section</h2>
                <ul>
                    <li>Fix persistence of data in Virtual Office <span style={{color: 'orange', fontSize: '10px'}}>{`<show task details>`}</span></li>
                    <li>GUI for sb-mig <span style={{color: 'orange', fontSize: '10px'}}>{`<show task details>`}</span></li>
                    <li>Build task manager in mrck-mainframe <span style={{color: 'orange', fontSize: '10px'}}>{`<show task details>`}</span></li>
                    <li>Zorganizować prezenty dla:
                        <ol>
                            <li>Kasiu i Bena<span style={{color: 'orange', fontSize: '10px'}}>{`<show task details>`}</span></li>
                            <li>Mamy i Taty<span style={{color: 'orange', fontSize: '10px'}}>{`<show task details>`}</span></li>
                            <li>Gosi<span style={{color: 'orange', fontSize: '10px'}}>{`<show task details>`}</span></li>
                            <li>Babci Gieni?<span style={{color: 'orange', fontSize: '10px'}}>{`<show task details>`}</span></li>
                        </ol>
                    </li>
                </ul>
            </section>
        </Layout>
    )
}



export const getStaticProps: GetStaticProps =  async () => {
    // Get external data from the file system, API, DB, etc.
    const someStaticProps = { dupa: 'asdasd' }

    // The value of the `props` key will be
    //  passed to the `Home` component
    return {
        props: {
            ...someStaticProps
        }
    }
}
