/** @type {import('next').NextConfig} */
const nextConfig = {
};

module.exports = nextConfig;









// перенаправление на https

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   async headers() {
//     return [
//       {
//         source: '/:path*',
//         headers: [
//           {
//             key: 'Strict-Transport-Security',
//             value: 'max-age=63072000; includeSubDomains; preload',
//           },
//         ],
//       },
//     ];
//   },
//   async redirects() {
//     if (process.env.NODE_ENV === 'production') {
//       return [
//         {
//           source: '/:path*',
//           has: [
//             {
//               type: 'host',
//               value: 'toolsdev.org',
//             },
//             {
//               type: 'header',
//               key: 'x-forwarded-proto',
//               value: 'http',
//             },
//           ],
//           permanent: true,
//           destination: 'https://toolsdev.org/:path*',
//         },
//       ];
//     }
//     return [];
//   },
// };

// module.exports = nextConfig;
