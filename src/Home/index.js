import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import Connect from "./components/Connect";
import Header from "./components/Header";
import BakeCard from "./components/BakeCard";
import CompareForks from "./components/CompareForks";
import ContractInfo from "./components/ContractInfo";
import NutritionFacts from "./components/NutritionFacts";
import ReferralLink from "./components/ReferralLink";
import { useAuthContext } from "../providers/AuthProvider";
import Footer from "./components/Footer";
import FAQNew from "./components/FAQNew";
import TotalInfo from "./components/TotalInfo";

const Wrapper = styled("div")(({ theme }) => ({
  maxWidth: 900,
  margin: "0 auto",
  // border: "3px solid blue",
  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
  },
}));

const HorizontalBlockWrapper = styled("div")(({ theme }) => ({
  maxWidth: 900,
  // margin: "0 auto",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  // border: "3px solid red",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const VerticalBlockWrapper = styled("div")(({ theme }) => ({
  width: "37%",
  marginRight: "1%",
  display: "flex",
  flexDirection: "column",
  // border: "3px solid green",
  [theme.breakpoints.down("md")]: {
    margin: "1% auto",
    width: "90%",
  },
}));

const TextWrapper = styled("div")(({ theme }) => ({
  textAlign: "center",
  margin: "2% 3%",
  // border: "3px solid green",
  [theme.breakpoints.down("md")]: {
    h5: {
      fontSize: 20,
      margin: 0,
    },
  },
}));

const CustomDivider = styled(Divider)(({ theme }) => ({
  height: "2px",
  marginTop: "10px",
}));


export default function Home() {
  const { address } = useAuthContext();

  return (
    <Wrapper>
      <Connect />
      <Header />
      <HorizontalBlockWrapper>
        <ContractInfo />
        <NutritionFacts />
      </HorizontalBlockWrapper>
      <TextWrapper>
        <Typography variant="body7" color="green">
          IS PAYING 10% ROI DAILY SUSTAINABLE? YES, BY GIVING ONLY 5% REFERRAL BONUS ON EVERY FIRST/NEW DEPOSIT AND NONE ON COMPOUNDS. THIS ALLOWS EVERYONE EQUAL OPPORTUNITY, NO MATTER WHEN YOU START. WE ALSO FEED A 6% TAX OF EACH WITHDRAWAL BACK INTO THE CONTRACT.
        </Typography>
        {/* <Typography variant="body7">
          We strongly advise everyone investing into our platform to compound for a minimum of 5 days and claim the 6th day, which was perfectly calculated to be sustainable by an expert for our own platform.
        </Typography> */}
      </TextWrapper>
      <HorizontalBlockWrapper>
        <VerticalBlockWrapper>
          <BakeCard />
        </VerticalBlockWrapper>
        <TotalInfo />
        <VerticalBlockWrapper>
          <CompareForks />
          <Typography variant="body6" style={{marginLeft: "2.5%", marginTop: "10px"}}>
            REFERRAL LINK
          </Typography>
          <ReferralLink address={address} />
          <Typography fontSize={10} textAlign="center" style={{marginLeft: "2.5%"}}>
            Earn 5% of the BUSD used to participate from anyone who uses your referral link.
          </Typography>
        </VerticalBlockWrapper>

      </HorizontalBlockWrapper>
      <Footer />
      {/* <CustomDivider/>
      <FAQNew /> */}
    </Wrapper>
  );
}
