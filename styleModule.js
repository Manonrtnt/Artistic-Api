const lines = document.querySelectorAll(".line");
const circles = Array.from(document.querySelectorAll(".circle"));
const container = document.querySelector("svg");

function drawBoard() {
   for (let line of lines) {
      let length = line.getTotalLength();
      line.style.strokeDasharray = length;
      line.style.strokeDashoffset = length;
      line.style.transition = "fill 1s";
   }

   let draw = anime.timeline({
      duration: 1500,
      delay: 2150,
      easing: "linear",
   });
   draw
   .add({
      targets: lines,
      strokeDashoffset: [anime.setDashoffset, 0],
   })
   .add({
      targets: lines[0],
      fill: 'rgb(209, 217, 240, 1)',
   }, "-=3500")
   .add({
      targets: lines[4],
      fill: 'rgb(255, 255, 255, 1)',
   }, "-=3000")
   .add({
      targets: lines[3],
      fill: 'rgb(251, 238, 163)',
   }, "-=2800");
}
function cloudJump() {
   let cloudTl = anime.timeline({
      targets: lines[2],
      duration: 400,
      easing: "linear",
      loop: true,
   });
   cloudTl
   .add({
      translateY: "10px",
   })
   .add({
      translateY: "0px",
   });
}
function themeHandler() {
   let clicked = false;
   const sun = document.querySelector("#sun");
   const h1 = document.querySelector("#title");
   h1.style.transition = "fill 2s";
   sun.style.transition = "fill 2s";
   lines[0].style.transition = "fill 2s";
   for (let circle of circles) circle.style.transition = "fill 2s";

   sun.addEventListener("click", () => {
      let style = document.createElement('style');

      if (!clicked) {
         let css = 'button:hover{ background-color: rgb(251, 238, 163) }';
         if (style.styleSheet) style.styleSheet.cssText = css;
         else style.appendChild(document.createTextNode(css));
         document.getElementsByTagName('head')[0].appendChild(style);

         h1.style.fill = "rgb(251, 238, 163)";
         lines[0].style.fill = "rgb(251, 238, 163)";
         lines[4].style.fill = "rgb(251, 238, 163)";
         lines[5].style.fill = "rgb(255, 255, 255)";

         sun.style.fill = "rgb(209, 217, 240)";
         for (let circle of circles) circle.style.fill = "rgb(251, 238, 163)";
         
         clicked = true;
      }
      else {
         let css = 'button:hover{ background-color: rgb(209, 217, 240) }';
         if (style.styleSheet) style.styleSheet.cssText = css;
         else style.appendChild(document.createTextNode(css));
         document.getElementsByTagName('head')[0].appendChild(style);

         h1.style.fill = "rgb(209, 217, 240)";
         lines[0].style.fill = "rgb(209, 217, 240)";
         lines[4].style.fill = "rgb(255, 255, 255)";
         lines[5].style.fill = "rgb(209, 217, 240)";

         sun.style.fill = "rgb(251, 238, 163)";
         for (let circle of circles) circle.style.fill = "rgb(209, 217, 240)";

         clicked = false;
      }
      
   });
}

function circleAnim() {
   morphCircles()
   scalingCircles();
}

function scalingCircles() {
   let timeline1 = anime.timeline({     
      targets: circles[6],    // Little down-right circle
      duration: 10000,
      easing: "linear",
      loop: true,
   })
   timeline1
   .add({
      scale: 2.5,
      translateY: -20,
   })
   .add({
      scale: 1,
      translateY: 0,
   });

   let timeline2 = anime.timeline({     
      targets: circles[2],    // Little down-right circle
      duration: 14000,
      easing: "linear",
      loop: true,
   })
   timeline2.add({
      scale: 2.5,
      translateX: -20,
   })
   .add({
      scale: 1,
      translateX: 0,
   });

   let timeline3 = anime.timeline({     
      targets: circles[3],    // Little down-right circle
      duration: 12000,
      easing: "linear",
      loop: true,
   })
   timeline3.add({
      scale: 0.5,
   })
   .add({
      scale: 1,
   });
   let timeline4 = anime.timeline({     
      targets: circles[1],    // Little down-right circle
      duration: 9000,
      easing: "linear",
      loop: true,
   })
   timeline4.add({
      scale: 1.5,
      translateX: -30,
   })
   .add({
      scale: 1,
      translateX: 0,
   });
   let timeline5 = anime.timeline({     
      targets: circles[7],    // Little down-right circle
      duration: 10000,
      easing: "linear",
      loop: true,
   })
   timeline5.add({
      scale: 0.66,
      translateY: -20,
   })
   .add({
      scale: 1,
      translateY: 0,
   });
}
function morphOne() {
   let initialPath = "M1815.12,683.812C1838.27,683.812 1859.05,694.641 1873.14,711.757C1884.86,725.989 1891.96,744.568 1891.96,764.883C1891.96,787.047 1883.51,807.146 1869.83,821.787C1855.89,836.702 1836.52,845.953 1815.12,845.953C1794.06,845.953 1774.97,836.995 1761.08,822.497C1747,807.799 1738.28,787.407 1738.28,764.883C1738.28,743.869 1745.87,724.712 1758.32,710.303C1772.38,694.03 1792.62,683.812 1815.12,683.812Z";
   let path = "M1815.12,683.812C1838.27,683.812 1877.3,673.389 1891.39,690.505C1903.11,704.737 1891.96,744.568 1891.96,764.883C1891.96,787.047 1904.51,826.146 1890.83,840.787C1876.89,855.702 1836.52,845.953 1815.12,845.953C1794.06,845.953 1756.97,854.995 1743.08,840.497C1729,825.799 1738.28,787.407 1738.28,764.883C1738.28,743.869 1725.83,704.67 1738.28,690.261C1752.34,673.988 1792.62,683.812 1815.12,683.812Z";
   let path2 = "M1815.12,700.812C1838.27,700.812 1877.3,673.389 1891.39,690.505C1903.11,704.737 1850.96,744.568 1850.96,764.883C1850.96,787.047 1904.51,826.146 1890.83,840.787C1876.89,855.702 1836.52,822.953 1815.12,822.953C1794.06,822.953 1756.97,854.995 1743.08,840.497C1729,825.799 1779.28,787.407 1779.28,764.883C1779.28,743.869 1725.83,704.67 1738.28,690.261C1752.34,673.988 1792.62,700.812 1815.12,700.812Z";
   let path3 = "M1815.12,732.812C1838.27,732.812 1899.3,651.389 1913.39,668.505C1925.11,682.737 1818.96,744.568 1818.96,764.883C1818.96,787.047 1925.51,847.146 1911.83,861.787C1897.89,876.702 1836.52,793.953 1815.12,793.953C1794.06,793.953 1737.97,873.995 1724.08,859.497C1710,844.799 1805.28,787.407 1805.28,764.883C1805.28,743.869 1704.83,683.67 1717.28,669.261C1731.34,652.988 1792.62,732.812 1815.12,732.812Z";

   anime({
      duration: 20000,
      delay: 3000,
      easing: "linear",
      loop: true,
      targets: circles[5],    // Little down-right circle

      d: [
         {value: path},
         {value: path2},
         {value: path3},
         {value: path2},
         {value: path},
         {value: initialPath},
      ],
   })
}
function morphTwo() {
   let initialPath = "M1770.7,260.836C1827.6,260.836 1878.81,285.304 1914.4,324.282C1946,358.88 1965.27,404.909 1965.27,455.405C1965.27,523.596 1930.12,583.641 1876.96,618.388C1846.4,638.36 1809.9,649.974 1770.7,649.974C1715.8,649.974 1666.17,627.182 1630.79,590.552C1596.96,555.54 1576.14,507.885 1576.14,455.405C1576.14,404.909 1595.41,358.88 1627.01,324.282C1662.6,285.304 1713.82,260.836 1770.7,260.836Z";
   let path = "M1770.7,260.836C1827.6,260.836 1878.81,285.304 1914.4,324.282C1946,358.88 1965.27,404.909 1965.27,455.405C1965.27,523.596 1930.12,583.641 1876.96,618.388C1846.4,638.36 1809.9,649.974 1770.7,649.974C1715.8,649.974 1695.93,594.958 1651.79,569.552C1599.96,539.726 1528.14,507.885 1528.14,455.405C1528.14,404.909 1603.92,383.692 1644.92,342.196C1682.02,304.649 1713.82,260.836 1770.7,260.836Z";

   anime({
      duration: 10000,
      easing: "linear",
      delay: 4500,
      loop: true,
      targets: circles[0],    // Little down-right circle

      d: [
         {value: path},
         {value: initialPath},
      ],
   })
}
function morphThree() {
   let initialPath = "M1211.32,925.477C1234.99,925.477 1256.83,933.348 1274.37,946.613C1299.65,965.731 1316.01,996.053 1316.01,1030.16C1316.01,1087.94 1269.1,1134.85 1211.32,1134.85C1153.54,1134.85 1106.63,1087.94 1106.63,1030.16C1106.63,1002.97 1117.03,978.179 1134.05,959.557C1153.2,938.619 1180.74,925.477 1211.32,925.477Z";
   let path = "M1211.32,970.406C1234.99,970.406 1256.83,978.277 1274.37,991.541C1299.65,1010.66 1336.01,1045.89 1336.01,1080C1336.01,1137.78 1269.1,1134.85 1211.32,1134.85C1153.54,1134.85 1099.63,1137.78 1099.63,1080C1099.63,1052.8 1117.03,1023.11 1134.05,1004.49C1153.2,983.547 1180.74,970.406 1211.32,970.406Z";
   
   let timeline = anime.timeline({
      targets: circles[4],    // Little down-right circle
      easing: "linear",
      direction: "alternate",
      loop: true,
   })
   timeline
   .add({
      duration: 10000,
      d: [
         {value: path},
         {value: initialPath},
      ],
      translateX: 50,
   })
}
function morphCircles() {
   morphOne();
   morphTwo();
   morphThree();
}

