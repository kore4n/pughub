import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import PageOpening from '../components/page-opening';
import PageHeading from '../components/page-heading';
import PageBody from '../components/page-body';
import CustomBreak from '../components/custom-break';

export default function About() {
  return (
    <div>
        <Head>
            <title>About Section</title>
            <meta name="description" content="Information about Pughub" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>
        <PageBody>
          <PageOpening title = "ABOUT" subTitle="history, gift, mystery"/> 
            <PageHeading 
                title="THE BASICS" 
                content="PugHub was conceived in 2020 as a result of the collapse of PugChamp along with the many small in-house groups that were made.
                Pugchamp is yet another web-based draft-organized PUG system.
                PugHub is currently in alpha.
                No elo. Why no elo? https://clips.twitch.tv/RealCrowdedInternCoolStoryBro No longer shall there need to be 20 in-house pugs spread across NA. We shall be united."
            />
            <CustomBreak/>
          </PageBody>
          <Footer/>
    </div>
  );
}