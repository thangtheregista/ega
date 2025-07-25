import {Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar } from "react-chartjs-2"

defaults.maintainAspectRatio = false;
defaults.responsive =true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";
export default function BarChart() {
    return(
        <div className="bar-chart">
            <Bar
                data={{
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    datasets: [
                        {
                            label: "Revenue",
                            data: [1200, 1900, 3000, 5000, 2000, 3000, 4000, 3500, 4500, 6000, 7000, 8000],
                        }
                    ]
                }}
                options={{
                    plugins: {
                        title: {
                            text: "Revenue",
                        }
                    }
                }}
            />
        </div>

    )
}