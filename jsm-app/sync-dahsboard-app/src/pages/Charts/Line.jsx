import { ChartsHeader } from "../../widgets";
import { LineChart } from "../../components";

import {
  LinePrimaryXAxis,
  LinePrimaryYAxis,
  lineCustomSeries,
} from "../../util/ecommerceData";

function Line() {
  return (
    <section className="m-2 mt-10 p-4 dark:bg-secondary-dark-bg bg-light-gray dark:text-white">
      <ChartsHeader category="Line" title="Inflation Rate" />

      <div className="flex justify-center items-center w-full">
        <LineChart
          LinePrimaryXAxis={LinePrimaryXAxis}
          LinePrimaryYAxis={LinePrimaryYAxis}
          lineCustomSeries={lineCustomSeries}
        />
      </div>
    </section>
  );
}

export default Line;
