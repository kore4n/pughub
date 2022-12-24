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
    const mapWidth = 300;
    const mapHeight = 169;

    return (
        <div>
            <Head>
                <title>Pugging Format</title>
                <meta name="description" content="Pughub format" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <PageBody>
                <PageOpening title = "FORMAT" subTitle="how games are played"/>
                <PageHeading 
                    title="DRAFT" 
                    content="Two captains are selected to draft randomly with selection weight based on previous success.

                    Player picks are then performed in the following order:">
                </PageHeading>
                <div className=" text-center">
                    A B B A A B B A A B
                </div>
                {/* Map picks */}
                <div>
                    <div className=" text-center mt-10 mb-20">
                        The whitelist and round timer ruleset will be identical to the latest RGL ruleset.
                    </div>
                    <div className=" text-center mt-10 mb-20">
                        The following maps will be put into rotation.
                    </div>
                    <div className=" grid grid-cols-3 mx-80 mb-20">
                        <TF2Map
                            title={"PROCESS"}
                            mapSource="/images/maps/process.png"
                            mapAlt="process"
                        />
                        <TF2Map
                            title={"GULLYWASH"}
                            mapSource="/images/maps/gullywash.png"
                            mapAlt="gullywash"
                        />
                        <TF2Map
                            title={"SUNSHINE"}
                            mapSource="/images/maps/sunshine.png"
                            mapAlt="sunshine"
                        />
                        <TF2Map
                            title={"METALWORKS"}
                            mapSource="/images/maps/metalworks.png"
                            mapAlt="metalworks"
                        />
                        <TF2Map
                            title={"RECKONER"}
                            mapSource="/images/maps/reckoner.jpg"
                            mapAlt="reckoner"
                        />
                        <TF2Map
                            title={"SNAKEWATER"}
                            mapSource="/images/maps/snakewater.png"
                            mapAlt="snakewater"
                        />
                        <TF2Map
                            title={"GRANARY"}
                            mapSource="/images/maps/granary.png"
                            mapAlt="granary"
                        />
                        <TF2Map
                            title={"BAGEL"}
                            mapSource="/images/maps/bagel.jpg"
                            mapAlt="bagel"
                        />
                        <TF2Map
                            title={"PRODUCT"}
                            mapSource="/images/maps/product.jpg"
                            mapAlt="product"
                        />
                        <TF2Map
                            title={"CLEARCUT"}
                            mapSource="/images/maps/clearcut.png"
                            mapAlt="clearcut"
                        />
                        <TF2Map
                            title={"SULTRY"}
                            mapSource="/images/maps/sultry.jpg"
                            mapAlt="sultry"
                        />
                        <TF2Map
                            title={"MANNBASE"}
                            mapSource="/images/maps/mannbase.jpeg"
                            mapAlt="mannbase"
                        />
                    </div>
                </div>
                <CustomBreak/>
            </PageBody>
            <Footer />
        </div>
    )
}