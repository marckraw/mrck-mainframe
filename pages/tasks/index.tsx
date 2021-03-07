import {GetStaticProps} from 'next'
import Head from 'next/head'
import Layout from '../../components/layout'
import Label from '../../components/Label'

interface TasksIndexProps {
    dupa?: string
}

export default function TasksIndex(props: TasksIndexProps): JSX.Element {
    return (
        <Layout home>
            <Head>
                <title>This is title from head</title>
            </Head>
            <section>
                <h2>This is tasks section</h2>
                <ul>
                    <li><Label name="EF" /> <Label name="Virtual Office" /> Fix persistence of data in Virtual Office <span style={{color: 'orange', fontSize: '10px'}}>{`<show task details>`}</span></li>
                    <li><Label name="EF" /> <Label name="sb-mig" type="private" /> GUI for sb-mig <span style={{color: 'orange', fontSize: '10px'}}>{`<show task details>`}</span></li>
                    <li><Label name="mrck-mainframe" type="private" /> Build task manager in mrck-mainframe <span style={{color: 'orange', fontSize: '10px'}}>{`<show task details>`}</span></li>
                    <li>Zorganizować prezenty dla:
                        <ol>
                            <li><Label name="Prezenty" type="private" /> Kasiu i Bena<span style={{color: 'orange', fontSize: '10px'}}>{`<show task details>`}</span></li>
                            <li><Label name="Prezenty" type="private" /> Mamy i Taty<span style={{color: 'orange', fontSize: '10px'}}>{`<show task details>`}</span></li>
                            <li><Label name="Prezenty" type="private" /> Gosi<span style={{color: 'orange', fontSize: '10px'}}>{`<show task details>`}</span></li>
                            <li><Label name="Prezenty" type="private" /> Babci Gieni?<span style={{color: 'orange', fontSize: '10px'}}>{`<show task details>`}</span></li>
                        </ol>
                    </li>
                    <li><Label name="codepride" type="private" /> <Label name="lisiewicz-design" type="private" /> Design and build Huberts website <span style={{color: 'orange', fontSize: '10px'}}>{`<show task details>`}</span></li>
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
