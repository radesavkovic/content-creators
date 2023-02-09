import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import faqIcon from "../../assets/faq.png";

const FAQNew = () => {
  return (
    <Box component="div" sx={{ width: "100%", py: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" sx={{ fontWeight: "400" }} gutterBottom>
            WHAT ARE CONTENT CREATORS AND THE DIFFERENCES BETWEEN US AND OTHERS?
          </Typography>
          <Typography variant="body2" sx={{ textAlign: "left" }}>
            This is a fork of spacefieldgame, busd.cropsfarmer and bakedbeans but with a fundamental change. We believe in compulsory compounding for everyone and strive to deliver equitable earnings, no matter when you start. Furthermore, we are here to make our protocol an evolution above what exists. The goal is to implement a tax system that will make our protocol truly sustainable so we can ALL be here for a long time, EVERY participant. We have seen Titano, Safuu and Sphere surviving on a sustainable tax system for a while, providing excellent proof of concept. Low or no fee protocols will never be sustainable. For actual sustainability, it must apply a tax system that is mutually beneficial to investor and protocol; no matter how early or late investors come into the project, there must be a level playing field for everyone. Compounds resulting in referral bonuses being paid out is something which has a net negative result on a protocol's health and ultimately only benefits a small handful of investors while the masses suffer.
            <br/>
            <br/>
              From our daily ROI, Referral % to Tax, all have been perfectly calculated by an expert with sustainability being the primary focus. Our target is to make sure we deliver on our APR 3,650% to every participant for as long as possible.
            <br/>
            <br/>
              We have no intention of copying this on another network, no matter how successful this dapp becomes. Our main goal is to launch our STABLE CERTIFICATE that is already in development to sustain this protocol through direct funding. Direct funding works as a booster injection to increase the value for every participant automatically. A little more information about our STABLE CERTIFICATE will be given at the bottom of this page.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" sx={{ fontWeight: "400" }} gutterBottom>
            MORE DETAILS ON OUR STABILITY FEATURES
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: "400" }} gutterBottom>
            30 Hours Rewards Accumulation Cut-Off
          </Typography>
          <Typography variant="body2" sx={{ textAlign: "left" }}>
            The cut-off time is the amount of time it will take for your "MAX" payment to be ready to claim. Once the payment is ready, it will stop filling until you've taken some action to either claim or compound. This is to prevent others from manipulating the system by allowing their rewards to accumulate for a longer time.
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: "400" }} gutterBottom>
            8 Times Mandatory Compound
          </Typography>
          <Typography variant="body2" sx={{ textAlign: "left" }}>
            The compound count is the number of times the user has compounded. The required compound count by the protocol is 8 and each compound can take place no earlier than 13hrs since the last compound. Once the compound count is 8, investors can withdraw without the imposed tax of 90%. This feature, in essence, will ensure the longevity and stability of the protocol. Should anyone choose to not play the game and only sell, there will be a 90% tax on those sales that will feed back into the contract. The only way for the user to not pay the 90% tax is to compound 8 times before making another withdrawal.
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: "400" }} gutterBottom>
            Importance of Our Tax System
          </Typography>
          <Typography variant="body2" sx={{ textAlign: "left" }}>
            No matter how good a product is, it will not gain attention without proper promotion/marketing to bring awareness to the product. For this reason, majority of our entry tax will be used for promotion. The extra 6% on withdrawal tax will remain in the contract, it is mainly to keep the contract strong, ensuring steady growth.
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: "400" }} gutterBottom>
            Initial Investment (High Risk!)
          </Typography>
          <Typography variant="body2" sx={{ textAlign: "left" }}>
            Please note that once you use your coins to become a content creator, you can only make your initial investment back through the content creation, which you may sell or reinvest to increase your daily ROI.
            <br/><br/>
            Also note that you have to approve BUSD and provide gas by having BNB in your wallet for fees to complete deposits, compounding and withdrawals.
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: "400" }} gutterBottom>
            Rug Prevention
          </Typography>
          <Typography variant="body2" sx={{ textAlign: "left" }}>
            Our contract is audited and our team is KYC, there is no reason for our investors to be worried about rug pull at all. You can also follow the owner for updates through his twitter @MaxTheCreator6.
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: "400" }} gutterBottom>
            How do I Invest?
          </Typography>
          <Typography variant="body2" sx={{ textAlign: "left" }}>
            The first thing you need to do is to setup your metamask wallet, to do this please check videos on how to set up your metamask wallet on youtube, there are several videos there to guide you.
          <br/><br/>
            You can start your investment by buying BNB through fiat on <a href="https://app.bogged.finance/bsc/dashboard" target="_blank" rel="noreferrer noopener">https://app.bogged.finance/bsc/dashboard</a>
          </Typography>
          <img src={faqIcon} alt="" width="80%" style={{margin: "10%"}}></img>
          <Typography variant="body2" sx={{ textAlign: "left" }}>
            Once BNB is purchased, you can swap your BNB for BUSD on same website <a href="https://app.bogged.finance/bsc/swap" target="_blank" rel="noreferrer noopener">https://app.bogged.finance/bsc/swap</a> or you can swap on pancakeswap.finance.
            <br/><br/>
            Now that you have BUSD in your wallet, you have to connect your wallet to our dapp and approve your BUSD, then use your BUSD to Become a Content Creator.
          </Typography>
          
          <Typography variant="h4" sx={{ fontWeight: "400" }} gutterBottom>
            A LITTLE MORE DETAIL ABOUT THE STABLE CERTIFICATE
          </Typography>
          
          <Typography variant="body2" sx={{ textAlign: "left" }}>
            I really don't want to give too much details on this, it’s a completely different type of platform on its own. Each certification will generate 2$ BUSD per day, it will never fluctuate, what you calculate is what you will get 100%. The twist about Stable Certificate is not about your return which is mouth-watering, but how the rewards are generated, the implementations of it and how effectively it helps Content Creators.
            <br/><br/>
            The generated amount will be going into Content Creators through funds injection. Explanation: your investment gets diluted when more people come to our platform (Content Creators), that's why it's important to always compound, so you won't be losing ground but gaining. But when we inject funds directly into the smart contract, it will increase the value of your present standing on our platform, It's something to look forward to because this booster injection will be happening every Monday. It's a game changer, because there is a good possibility that your earnings go above 10% at times, it all depends on how much funds are injected weekly, the potential is unbelievable.
            <br/><br/>
            Like I said, I don't want to give too much details about this until you see it in action.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FAQNew;
