import Head from "next/head";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import PageOpening from '../components/page-opening';
import PageHeading from '../components/page-heading';
import PageBody from '../components/page-body';
import CustomBreak from "../components/custom-break";

export default function Rules(){
    return (
        <div>
            <Head>
                <title>Pugging Rules</title>
                <meta name="description" content="Pughub rules" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <PageBody>
                <PageOpening title = "RULES" subTitle="big brother is watching you"/>
                <PageHeading 
                    title="DA RULES" 
                    content="Violations of any of the following rules may result in applicable restrictions. 
                    Admins are given discretion in enforcing these rules as they see fit for the benefit of the site and its community.">
                </PageHeading>
                <CustomBreak/>
            </PageBody>
            <Footer />
        </div>
    )
}