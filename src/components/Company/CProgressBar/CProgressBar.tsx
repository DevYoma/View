import { Button } from "@mui/material";
import "./CProgressBar.scss";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

type ProgressBarProp = {
  percent: number;
  border?: string;
  opacity: number;
};

export const CProgressBar = () => {
  return (
    <div className="CProgress">
      <div className="CProgressBar">
        <ProgressCount percent={28} opacity={70} />
        <ProgressCount percent={0} opacity={70} />
        <ProgressCount percent={0} opacity={70} />
        <ProgressCount percent={0} opacity={70} />
        <ProgressCount percent={0} opacity={70} />
      </div>

      <div className="CProgressButton">
        <Button
          variant="contained"
          startIcon={<KeyboardArrowDownIcon />}
          sx={{
            backgroundColor: "rgba(225, 240, 255, 1)",
            color: "rgba(0, 0, 0, 1)",
            borderRadius: "10px",
            padding: "1rem auto",
            fontWeight: "400",
            fontSize: "16px",
            textTransform: "none",
          }}
        >
          $.00.00
        </Button>
      </div>
    </div>
  );
}

export const ProgressCount = ({ percent, border, opacity }: ProgressBarProp) => {
  return (
    <div className="progressCount">
      <div
        className="progressCount__progressBar"
        style={{
          border: border,
          background: "rgba(187, 221, 255, 0.83)",
          overflow: "hidden",
        }}
      >
        <div
          className="progressCount__progressBarInner"
          style={{
            width: `${percent}%`,
            backgroundColor: "rgba(17, 125, 233, 0.85)",
            opacity: `${opacity}%`,
            height: "7px"
          }}
        ></div>
      </div>
    </div>
  );
}
