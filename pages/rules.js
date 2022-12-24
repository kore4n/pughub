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
                <ul className="list-decimal pl-40 text-xl">
                    <li>Being connected to your team&#39;s voice channel and communicating is required to participate in pugs, act cordially, and don’t use hateful language (even jokingly)</li>
                    <li>Gameplay which detracts from a pug or excessively off-classing (5 minutes) is disallowed.</li>
                    <li>If you are over 5 minutes late to the pug you will be subbed out.</li>
                    <li>You may request a div role move-up after acquiring five wins in that division. Use the move up request channel to do this. (Roster Riding does not count)</li>
                </ul>
                <CustomBreak/>
            </PageBody>
            <Footer />
        </div>
    )
}