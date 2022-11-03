import React from "react";
import { useState } from "react";
import { Box } from "@mui/system";
import { blue } from "@mui/material/colors";
import "./App.css";
import Card from "./Card";
import Toolbar from "./Toolbar";
import useCards from "./hooks/useCards";
import NewBox from "@mui/material/Box";
import { Button } from "@mui/material";

function App() {
  const [allCards] = useCards();
  const totalCards = allCards.length; // 12
  const [curCardId, setCurCardId] = useState(1);

  function isValidId(id) {
    return id <= totalCards && id >= 1;
  }

  let goToPrev = () => {
    if (isValidId(curCardId - 1)) {
      setCurCardId(curCardId - 1);
    } else {
      setCurCardId(totalCards);
    }
  };

  let goToNext = () => {
    if (isValidId(curCardId + 1)) {
      setCurCardId(curCardId + 1);
    } else {
      setCurCardId(1);
    }
  };

  return (
    <>
      <Toolbar />
      <NewBox className="main-box">
        <Card {...allCards.find((item) => item.id === curCardId)}></Card>
        <div className="buttons">
          <Button
            variant="contained"
            onClick={goToPrev}
            className="first-button"
            sx={{ marginLeft: 71, position: "absolute" }}
          >
            Prev
          </Button>

          <Button
            variant="contained"
            onClick={goToNext}
            className="second-button"
            sx={{ marginLeft: 100 }}
          >
            Next
          </Button>
          <Button
            sx={{
              bottom: -300,
              background: "rgb(222, 240, 156)",
              width: "100%",
              padding: 19,
            }}
          />
        </div>
      </NewBox>
    </>
  );
}

export default App;
