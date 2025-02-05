
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/home",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/expertise"
  },
  {
    "renderMode": 2,
    "route": "/experience"
  },
  {
    "renderMode": 2,
    "route": "/hobbies"
  },
  {
    "renderMode": 2,
    "route": "/achievements"
  },
  {
    "renderMode": 2,
    "route": "/goals"
  },
  {
    "renderMode": 2,
    "route": "/training"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 510, hash: '9e3cf0d860cc2a0a7e342cd2ce642964b7157cf0197e19f2fd780cece0dea60a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1023, hash: '9f4de19d5713e836eef05c761099c7b3a11c8220f297f4af21accd93ca03dd5b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 2174, hash: '7a95062a2cb65634f48e30790e5d1acf47f15299128f48bd4dd6f3e61074bc78', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 2141, hash: 'ea8f29612071714bbdc0385836f0c4700b5ff8e5a598bce3007e9024c9089433', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'hobbies/index.html': {size: 2027, hash: '68b60655edf476bbcec48758990853e086e20c7621b31c694eb61a00c5ff3b78', text: () => import('./assets-chunks/hobbies_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 1696, hash: 'fab6ce8c0092cf2b4f704ba73b6066a9d093359b087cc6a5296ebd55d2a5b25b', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'achievements/index.html': {size: 2238, hash: '0f2ab7284912f40c8111c0bea75ea746da37f62671e13e01610b1301bd707fb8', text: () => import('./assets-chunks/achievements_index_html.mjs').then(m => m.default)},
    'training/index.html': {size: 2113, hash: '05622e34b18d06110d0282168d79e68e600c2b2d11c77aa1f1abd0022546b70b', text: () => import('./assets-chunks/training_index_html.mjs').then(m => m.default)},
    'goals/index.html': {size: 2027, hash: '6655ea35bc3f9b7671e6f0dde56947366adc4d7225f8a9ae28752d35c7b1d772', text: () => import('./assets-chunks/goals_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 2346, hash: '57cc74e5c76ca9d363bb22c8d03cfe8a8bbf6080920c09e44a78b6b095c06dc7', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'expertise/index.html': {size: 1780, hash: '4fe3bc855acbbe6a683b47b8563497668df09e64c49e20c7b1fcd99f04986365', text: () => import('./assets-chunks/expertise_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
