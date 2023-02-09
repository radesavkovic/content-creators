/* eslint-disable react-hooks/exhaustive-deps */
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/system";
import { useLocation } from "react-router-dom";
import Web3 from "web3";

import PriceInput from "../../components/PriceInput";
import { useContractContext } from "../../providers/ContractProvider";
import { useAuthContext } from "../../providers/AuthProvider";
import { useEffect, useState } from "react";
import { config } from "../../config";
import busdIcon from "../../assets/busd.png";
import depositIcon from "../../assets/deposit.png";
import withdrawIcon from "../../assets/withdraw.png";

const CardWrapper = styled(Card)({
  backgroundColor: "transparent",
  border: "3px solid white",
  // maxHeight: "400px",
  padding: "1% 1%",
  alignItems: "center",
});

const TextWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  alignItems: "center",
  paddingLeft: 1,
  [theme.breakpoints.down("md")]: {
    h5: {
      fontSize: 20,
      margin: 0,
    },
  },
}));

export default function TotalInfo() {
  const { contract, wrongNetwork, fromWei, web3 } = useContractContext();
  const { address, chainId } = useAuthContext();
  const [walletBalance, setWalletBalance] = useState({
    deposit: 0.00,
    withdraw: 0.00,
  });

  const fetchWalletBalance = async () => {
    if (!web3 || wrongNetwork || !address) {
      setWalletBalance({
        deposit: 0.00,
        withdraw: 0.00,
      });
      return;
    }

    try {
      const [depositAmount, withdrawAmount] = await Promise.all([
        contract.methods
          .getDepositAmount(address)
          .call()
          .catch((err) => {
            console.error("deposit_amount", err);
            return 0;
          }),
          contract.methods
          .getWithdrawAmount(address)
          .call()
          .catch((err) => {
            console.error("withdraw_amount", err);
            return 0;
          }),
      ]);
      setWalletBalance({
        deposit: fromWei(`${depositAmount}`),
        withdraw: fromWei(`${withdrawAmount}`),
      });

      console.log("deposit", depositAmount);
      console.log("withdraw", withdrawAmount);
    } catch (err) {
      console.error(err);
      setWalletBalance({
        deposit: 0.00,
        withdraw: 0.00,
      });
    }
  };

  console.log("WALLET CONNECT+++++++++");
  useEffect(() => {
    fetchWalletBalance();
  }, [address, web3, chainId]);

  return (
    <CardWrapper>
        <Grid
          container
          alignItems="center"
          marginTop={1}
        >
          <img src={depositIcon} alt="" height={60}></img>
          <TextWrapper>
            <Typography variant="body8">TOTAL DEPOSIT</Typography>
            <Typography variant="body1">{walletBalance.deposit}</Typography>
            <img src={busdIcon} alt="" width={"30px"} height={"30px"}></img>
          </TextWrapper>
        </Grid>
        <Divider/>
        <Divider/>
        <Grid
          container
          alignItems="center"
          marginTop={1}
        >
          <img src={withdrawIcon} alt="" height={70}></img>
          <TextWrapper style={{marginLeft: "9px"}}>
            <Typography variant="body8">WITHDRAWN</Typography>
            <Typography variant="body1">{walletBalance.withdraw}</Typography>
            <img src={busdIcon} alt="" width={"30px"} height={"30px"}></img>
          </TextWrapper>
        </Grid>
    </CardWrapper>
  );
}
