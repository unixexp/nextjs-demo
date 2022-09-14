import Head from "next/head";

import Layout from "../components/layout/layout";
import Logo from "../components/logo/logo";

export default function IndexPage() {

    return (
        <Layout>
            <Head>
                <title>Index page</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Logo />
        </Layout>
    );

}
