import { resolve } from "node:path";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",

  devtools: {
    enabled: true,
  },

  routeRules: {
    "/": { prerender: true },
    "/**": { prerender: true },
    "/prerender/**": { prerender: true },
    "/web3/**": { prerender: true },
    "/api/**": { cors: true },
    "/user/panel/**": { ssr: true },
    "/admin/": { redirect: "/admin/login" },
    "/admin/**": { ssr: true },
    "/mdview/**": { ssr: true },
    "/en-about": { redirect: "/mdview/6" },
  },

  modules: [
    "nuxt-umami",
    "@nuxtjs/robots",
    "@kgierke/nuxt-basic-auth",
    "@sentry/nuxt/module",
    "@nuxt/image",
    "@nuxtjs/sitemap",
    "@nuxt/content",
    "nuxt-gtag",
    "@bg-dev/nuxt-s3",
    //"@nuxtjs/i18n",
  ],

  umami: {
    enabled: true,
    host: "https://data.yuanhau.com",
    autoTrack: true,
    id: "2a995ed3-bdc7-4557-bf53-b724d29bb337",
    ignoreLocalhost: true,
  },

  site: {
    url: "https://intl.yuanhau.com",
    title: "Howard's Personal Website",
    description: "This is Howard's Personal Website for International plaforms, Chinese verison on https://yuanhau.com, If you do understand chinese, there is where to visit.",
  },

  sitemap: {},

  app: {
    head: {
      htmlAttrs: {
        lang: "en-US",
      },
      link: [
        { rel: "dns-prefetch", href: "https://utfs.io" },
        { rel: "dns-prefetch", href: "https://s3.yhw.tw" },
        {
          rel: "prefetch",
          href: "https://utfs.io/f/CCLPSN5W2HD5ziRBkeSZ5pJYf32lWLvIK8uGb41xkHCUnXm7",
        },
        { rel: "icon", href: "/favicon.ico" },
      ],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "吳元皓的個人網站" },
        {
          name: "keywords",
          content:
            "Howard Wu, yuanhau, wuyuanhau, yuanhau.com, yuanh.xyz, Yuan-Hau Wu",
        },
        { name: "author", content: "howard" },
        { name: "author-email", content: "hw@yuanhau.com" },
        { name: "copyright", content: "howard" },
        { name: "twitter:creator", content: "@ictechz" },
        { name: "twitter:site", content: "https:/intl.yuanhau.com" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Howard" },
        { name: "twitter:description", content: "Howard's Personal Website." },
        { name: "twitter:image", content: "https://yuanhau.com/favicon.jpg" },
        { name: "og:title", content: "Howard" },
        { name: "og:description", content: "Howard's Personal Website." },
        { name: "og:image", content: "https://yuanhau.com/favicon.jpg" },
        { name: "og:url", content: "https://yuanhau.com" },
        { name: "og:site_name", content: "Howard" },
        { name: "og:type", content: "website" },
        { name: "og:locale", content: "en-US" },
        {
          name: "og:keywords",
          content:
            "Howard Wu, yuanhau, wuyuanhau, yuanhau.com, yuanh.xyz, Yuan-Hau Wu",
        },
        { name: "og:author", content: "Howard" },
        { name: "og:author:email", content: "hw@yuanhau.com" },
        { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
      ],
    },
  },
  content: {
    blog: {
      prefix: "/post",
      driver: "fs",
    },
  },
  gtag: {
    id: "G-2J2M9834SQ",
  },
  s3: {
    accept: "^image/(png|jpeg|png|gif)",
    maxSizeMb: 10,
    driver: "s3",
    bucket: "yuanhau.com-filesapi",
    endpoint: "s3.ap-northeast-1.wasabisys.com",
    region: "auto",
    accessKeyId: process.env.WASABI_S3_CLIENT_ID, // Client ID
    secretAccessKey: process.env.WASABI_S3_SECRET, // Client secret
  },
  runtimeConfig: {
    public: {
      // Remember to uncomment this stuff.
      posthogPublicKey: "phc_E8muTZ7mYynVfGDxK0OwYf0wXme28svmjTXzxoBXHeZ",
      posthogHost: "https://us.i.posthog.com",
    },
  },
});
