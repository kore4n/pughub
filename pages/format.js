import Head from "next/head";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import PageOpening from '../components/page-opening';
import PageHeading from '../components/page-heading';
import PageBody from '../components/page-body';
import TF2Map from "../components/tf2-map";
import Image from "next/image";
import CustomBreak from "../components/custom-break";

export default function Format(){
    return (
        <div>
            <Head>
                <title>Pugging Format</title>
                <meta name="description" content="Pughub format" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <Navbar />
            <PageOpening title = "FORMAT" subTitle="how games are played"/>
            <PageBody>
                <PageHeading 
                    title="DRAFT" 
                    content="Two captains are selected to draft randomly with selection weight based on previous success.

                    Player picks are then performed in the following order:">
                </PageHeading>
                <div>
                    A B B A A B B A A B
                </div>
                {/* Map picks */}
                <div>
                    <div className=" text-center mt-10 mb-20">
                        The whitelist and round timer ruleset will be identical to the latest RGL ruleset.
                    </div>
                    <div className=" text-center mt-10 mb-20">
                        The following maps will be put into rotation
                    </div>
                    <div className=" grid grid-cols-3 mx-80 mb-20">
                        <TF2Map
                            title={"PROCESS"}
                            map={<Image src="/images/maps/process.png" alt="process" width={300} height={169}/>}
                        />
                        <TF2Map
                            title={"GULLYWASH"}
                            map={<Image src="/images/maps/gullywash.png" alt="gullywash" width={300} height={169}/>}
                        />
                        <TF2Map
                            title={"SUNSHINE"}
                            map={<Image src="/images/maps/sunshine.png" alt="sunshine" width={300} height={169}/>}
                        />
                        <TF2Map
                            title={"METALWORKS"}
                            map={<Image src="/images/maps/metalworks.png" alt="metalworks" width={300} height={169}/>}
                        />
                        <TF2Map
                            title={"RECKONER"}
                            map={<Image src="/images/maps/reckoner.jpg" alt="reckoner" width={300} height={169}/>}
                        />
                        <TF2Map
                            title={"SNAKEWATER"}
                            map={<Image src="/images/maps/snakewater.png" alt="snakewater" width={300} height={169}/>}
                        />
                        <TF2Map
                            title={"GRANARY"}
                            map={<Image src="/images/maps/granary.png" alt="granary" width={300} height={169}/>}
                        />
                        <TF2Map
                            title={"BAGEL"}
                            map={<Image src="/images/maps/bagel.jpg" alt="bagel" width={300} height={169}/>}
                        />
                        <TF2Map
                            title={"PRODUCT"}
                            map={<Image src="/images/maps/product.jpg" alt="product" width={300} height={169}/>}
                        />
                        <TF2Map
                            title={"CLEARCUT"}
                            map={<Image src="/images/maps/clearcut.png" alt="clearcut" width={300} height={169}/>}
                        />
                    </div>
                </div>
                <CustomBreak/>
            </PageBody>
            <Footer />
        </div>
    )
}