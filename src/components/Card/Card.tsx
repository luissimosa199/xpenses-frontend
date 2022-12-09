import { FunctionComponent } from "react";
import { DataObject } from "../../interfaces/DataInterface";
import { StyledCard } from "./Card.styled";

import { Button } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import IconButton from "../containers/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { statusColor } from "../../utils/statusColor";

interface CardProps {
  info: DataObject;
}

const Card: FunctionComponent<CardProps> = ({ info }) => {
  return (
    <li>
      <StyledCard background={info.status}>
        <div className="card-icon">
          <i>I</i>
        </div>
        <div className="card-exit">
        <IconButton
            onClick={() => {
              console.log("DELETE");
            }}
          >
            <CloseIcon />
          </IconButton>
        </div>
        <div className="card-info">
          <h4>{info.name}</h4>
          <p className="card-info-desc">{info.description}</p>
          <p className="card-info-date">{info.date}</p>
          <Button variant="outlined" color={statusColor(info.status)}>
            {info.status}
          </Button>
          <p className="card-info-amount">${info.amount}</p>
        </div>
        <p className="card-update">
          <a href='#' className="card-link">
            <IconButton
              onClick={() => {
                console.log("CLICK");
              }}
            >
              <MoreHorizIcon />
            </IconButton>
          </a>
        </p>
      </StyledCard>
    </li>
  );
};

export default Card;
