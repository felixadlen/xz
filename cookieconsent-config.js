import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.umd.js';

CookieConsent.run({
    // https://cookieconsent.orestbida.com/reference/configuration-reference.html#guioptions
    guiOptions: {
      consentModal: {
        layout: 'cloud inline',
        position: 'bottom left',
        equalWeightButtons: true,
        flipButtons: false
      },
      preferencesModal: {
        layout: 'box',
        equalWeightButtons: true,
        flipButtons: false
      }
    },

    onFirstConsent: function(cookie) {
      // callback triggered only once on the first accept/reject action
    },

    categories: {
      necessary: {
        enabled: true,  // this category is enabled by default
        readOnly: true  // this category cannot be disabled
      },
      analytics: {
        autoClear: {
          cookies: [
            {
              name: /^_ga/,   // regex: match all cookies starting with '_ga'
            },
            {
              name: '_gid',   // string: exact cookie name
            }
          ]
        },

        // https://cookieconsent.orestbida.com/reference/configuration-reference.html#category-services
        services: {
          ga: {
            label: 'Google Analytics',
            cookies: [
              {
                name: /^(_ga|_gid)/
              }
            ]
          }
        }
      },
      targeting: {}
    },

    language: {
      default: 'en',
      translations: {
        en: {
          consentModal: {
            title: 'We use cookies',
            description: 'Cookie modal description',
            acceptAllBtn: 'Accept all',
            acceptNecessaryBtn: 'Reject all',
            showPreferencesBtn: 'Manage Individual preferences'
          },
          preferencesModal: {
            title: 'Manage cookie preferences',
            acceptAllBtn: 'Accept all',
            acceptNecessaryBtn: 'Reject all',
            savePreferencesBtn: 'Accept current selection',
            closeIconLabel: 'Close modal',
            sections: [
              {
                title: "Cookie usage",
                description: "We use cookies to ensure the basic functionalities of the website and to enhance your online experience ..."
              },
              {
                title: "Strictly necessary cookies",
                description: "These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly",
                linkedCategory: "necessary"
              },
              {
                title: "Performance and Analytics cookies",
                description: "These cookies allow the website to remember the choices you have made in the past",
                linkedCategory: "analytics",
                cookieTable: {
                    headers: {
                      name: "Name",
                      domain: "Service",
                      description: "Description",
                      expiration: "Expiration"
                    },
                    body: [
                      {
                        name: "_ga",
                        domain: "Google Analytics",
                        description: "Cookie set by <a href=\"#das\">Google Analytics</a>",
                        expiration: "Expires after 12 days"
                      },
                      {
                        name: "_gid",
                        domain: "Google Analytics",
                        description: "Cookie set by <a href=\"#das\">Google Analytics</a>",
                        expiration: "Session"
                      }
                    ]
                  }
                },
                {
                    title: 'Targeting and Advertising',
                    description: 'These cookies are used to make advertising messages more relevant to you and your interests. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.',
                    linkedCategory: 'targeting',
                },
                {
                  title: 'More information',
                  description: 'For any queries in relation to my policy on cookies and your choices, please <a href="#contact-page">contact us</a>'
                }
            ]
          }
        }
      }
    }
  });