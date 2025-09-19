/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',

    // Optional: change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    // trailingSlash: true,

    // Optional: change output directory `out` -> `dist`
    distDir: 'dist',

    images: {
        unoptimized: true,
    },

    // ✅ Add basePath & assetPrefix for GitHub Pages
    basePath: isProd ? '/MyPortfolio' : '',
    assetPrefix: isProd ? '/MyPortfolio/' : '',
};

export default nextConfig;
