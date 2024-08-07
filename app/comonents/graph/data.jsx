export const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "2023 year",
        data: [34, 88, 30, 69, 39, 37, 41],
        fill: true,
        tension: 0.4,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: "2024 year",
        data: [30, 48, 35, 49, 86, 37, 30],
        fill: true,
        tension: 0.4,
        backgroundColor: "rgba(153,102,255,0.4)",
        borderColor: "rgba(153,102,255,1)",
      },
    ],
  };
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Line Chart Example",
      },
    },
  };
  