/** @type {import('next').NextConfig} */
const nextConfig = {};

// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "http",
//         hostname: "127.0.0.1",
//         port: "1337",
//         pathname: "/uploads/**",
//       },
//     ],
//   },
// };

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "note-backend-2pmj.onrender.com",
        port: "",
        pathname: "/uploads/**",
      },
    ],
  },
};
