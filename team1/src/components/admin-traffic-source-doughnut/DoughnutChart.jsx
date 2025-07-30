import {Bar, Doughnut} from "react-chartjs-2";
import {Chart as ChartJS, defaults } from "chart.js/auto";
defaults.maintainAspectRatio = false;
defaults.responsive =true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";




export default function DoughnutChart() {
    return(
        <div className="doughnut-chart">
            <Doughnut
                data={{
                    labels: ["Lamps", "Beds", "Sofas"],
                    datasets: [
                        {
                            label: "Traffic Sources",
                            data: [22, 15, 63],
                        }
                    ]
                }}
                options={{
                    plugins: {
                        title: {
                            text: "Traffic Sources",
                        }
                    }
                }}
            />
        </div>
    )
}