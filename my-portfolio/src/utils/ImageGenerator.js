import { toSvg, drawIcon } from 'jdenticon';

const ImageGenerator = () => {
    return {
        generate: (projectName) => {
            // Call your toSvg function
            const svgString = toSvg(projectName, 200);

            // Encode SVG string for safe <img src>
            const encodedSvg = encodeURIComponent(svgString)
                .replace(/'/g, '%27')
                .replace(/"/g, '%22');

            const dataUri = `data:image/svg+xml;utf8,${encodedSvg}`;

            return dataUri;
        },

        generateIcon: () => {
                // ctx.setTransform(1, 0, 0, 1, 20, 20);
                // drawIcon(ctx, "icon 1", 60);
        }
    };
};

export default ImageGenerator;
