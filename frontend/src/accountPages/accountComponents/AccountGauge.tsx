import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";

const AccountGauge: React.FC = () => {

    return(
  <>
    <Gauge
      value={75}
      startAngle={-90}
      endAngle={90}
      sx={{
        [`& .${gaugeClasses.valueText}`]: {
          fontSize: 40,
        },
        [`& .${gaugeClasses.valueArc}`]: {
            fill: '#0000FF',
          },

      }}
      text={({ value, valueMax }) => `${value} / ${valueMax}`}
    />
  </>
)};

export default AccountGauge;
