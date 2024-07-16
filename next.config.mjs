/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        // incremental allows ppr for specific routes
        ppr: 'incremental',
    }
};

export default nextConfig;
