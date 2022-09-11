import Head from "next/head";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import PageOpening from '../components/page-opening';
import PageHeading from '../components/page-heading';
import PageBody from '../components/page-body';

export default function Format(){
    return (
        <div>
            <Head>
                <title>Pugging Format</title>
                <meta name="description" content="Pughub format" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <Navbar />
            <PageOpening title = "FORMAT" subTitle="HOW GAMES ARE PLAYED" imageName="jorgen" />
            <PageBody>
                <PageHeading 
                    title="DRAFT" 
                    content="Two captains are selected to draft randomly with selection weight based on previous success.

                    Player picks are then performed in the following order:">
                </PageHeading>
                <Footer />
            </PageBody>
        </div>
    )
}