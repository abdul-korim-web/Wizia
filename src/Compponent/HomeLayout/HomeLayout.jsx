import React from "react";
import Hero from "../Hero/Hero"
import Trustedpartners from '../trustedpartners/trustedpartners'
import AiDRs from '..//AiDRs/AiDRs'
import TrainAi from '../TrainAi/TrainAi'
import Slider from '../Slider/Slider'
import Allocate from '../Allocate/Allocate'
import Embrace from '../Embrace/Embrace'

const HomeLayout = () => {
  return (
    <>
      <Hero />
      <Trustedpartners />
      <AiDRs />
      <TrainAi />
      <Slider />
      <Allocate />
      <Embrace />
    </>
  );
};

export default HomeLayout;
