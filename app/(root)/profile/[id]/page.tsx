import Header from "@/components/Header";
import {dummyCards} from "@/constants";
import VideoCard from "@/components/VideoCard";
import React from "react";

const Page = async ({params}: ParamsWithSearch) => {
    const {id} = await params;


    return (
        <div className="wrapper page">
            <Header subHeader="henrry@gmail.com" title="Henrry" userImg="/assets/images/dummy.jpg"/>
            <section className="video-grid">
                {dummyCards.map((card) => (
                    <VideoCard key={card.id} {...card} />
                ))}
            </section>
        </div>
    )
}
export default Page
