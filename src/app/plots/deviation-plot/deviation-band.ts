import { Chart } from 'chart.js';

export function deviationBand(bandsToDraw: {x: number; y: number;}[][], bandColors: string[]) {
    return {
        id: 'deviationBand',
        beforeDraw: (chart: Chart) => {
            const ctx = chart.ctx;
            const xScale = chart.scales['x'];
            const yScale = chart.scales['y'];

            // Define points for the custom shape (data coordinates)

            // Draw the custom shape
            ctx.save();

            for (let b = 0; b < bandsToDraw.length - 1; b++) {
                ctx.beginPath();
                ctx.fillStyle = bandColors[b]; // Semi-transparent teal

                const bandA = bandsToDraw[b];
                const bandB = bandsToDraw[b + 1];
                const canvasPointsA = bandA.map(point => ({
                    x: xScale.getPixelForValue(point.x),
                    y: yScale.getPixelForValue(point.y),
                }));

                const canvasPointsB = bandB.map(point => ({
                    x: xScale.getPixelForValue(point.x),
                    y: yScale.getPixelForValue(point.y),
                }));

                // Start from the first point
                ctx.moveTo(canvasPointsA[0].x, canvasPointsA[0].y);

                // Draw lines to the subsequent points
                for (let i = 1; i < canvasPointsA.length; i++) {
                    ctx.lineTo(canvasPointsA[i].x, canvasPointsA[i].y);
                }
                for (let i = canvasPointsB.length - 1; i >= 0; i--) {
                    ctx.lineTo(canvasPointsB[i].x, canvasPointsB[i].y);
                }

                // Close the shape and fill it
                ctx.closePath();
                ctx.fill();
            }
            ctx.restore();
        }
    }
};