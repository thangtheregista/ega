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
                    labels: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
                    datasets: [
                        {
                            label: "Doanh thu",
                            data: [1200, 1900, 3000, 5000, 2000, 3000, 4000, 3500, 4500, 6000, 7000, 8000],
                        }
                    ]
                }}
                options={{
                    plugins: {
                        title: {
                            text: "Doanh thu hàng tháng",
                        }
                    }
                }}
            />
        </div>

    )
}