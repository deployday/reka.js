import { createExtension, Reka } from '@rekajs/core';
import { RekaProvider } from '@rekajs/react';
import * as t from '@rekajs/types';
import * as React from 'react';

import { Editor } from '@/components/Editor';
import { Preview } from '@/components/Preview';

import { Parser } from '@rekajs/parser';

const getASTByURL = (url = '/') => ({
  "globals": [
    {
      "type": "Val",
      "id": "l1FyvyHxdmWcI7DG2JmiC",
      "meta": {},
      "name": "posts",
      "init": {
        "type": "CallExpression",
        "id": "eZPxOW9pzlhwltO8QV43H",
        "meta": {},
        "identifier": {
          "type": "Identifier",
          "id": "fOt7pvHXcDuUj1J2grp9X",
          "meta": {},
          "name": "getPosts",
          "external": true
        },
        "params": {}
      }
    }
  ],
  components:
  [
    {
      "type": "RekaComponent",
      "id": "bNEfF",
      "name": "index",
      "meta": {},
      "props": [],
      "state": [],
      "template": {
        "type": "ComponentTemplate",
        "id": "QOD4i",
        "meta": {},
        "props": {},
        "children": [
          {
            "type": "ComponentTemplate",
            "id": "OgwoM",
            "meta": {},
            "props": {
              "callToAction": {
                "type": "Literal",
                "value": "{      text: Get template,      href: https://github.com/onwidget/astrowind,      icon: tabler:download,    }"
              },
              "callToAction2": {
                "type": "Literal",
                "value": "{ text: Learn more, href: #features }"
              },
              "image": {
                "type": "Literal",
                "value": "{      src: import(~/assets/images/hero.png),      alt: AstroWind Hero Image,    }"
              }
            },
            "children": [
              {
                "type": "ComponentTemplate",
                "id": "4hE6d",
                "meta": {},
                "props": {},
                "children": [
                  {
                    "type": "TagTemplate",
                    "id": "ATlGa",
                    "meta": {},
                    "props": {
                      "value": {
                        "type": "Literal",
                        "value": "      Free template for "
                      }
                    },
                    "children": [],
                    "tag": "text",
                    "if": null,
                    "each": null,
                    "classList": null
                  },
                  {
                    "type": "TagTemplate",
                    "id": "5Cw9y",
                    "meta": {},
                    "props": {},
                    "children": [
                      {
                        "type": "TagTemplate",
                        "id": "4K8XQ",
                        "meta": {},
                        "props": {
                          "value": {
                            "type": "Literal",
                            "value": "create your website "
                          }
                        },
                        "children": [],
                        "tag": "text",
                        "if": null,
                        "each": null,
                        "classList": null
                      },
                      {
                        "type": "TagTemplate",
                        "id": "q05CE",
                        "meta": {},
                        "props": {
                          "value": {
                            "type": "Literal",
                            "value": " with"
                          }
                        },
                        "children": [],
                        "tag": "text",
                        "if": null,
                        "each": null,
                        "classList": null
                      }
                    ],
                    "if": null,
                    "each": null,
                    "classList": null,
                    "tag": "span"
                  },
                  {
                    "type": "TagTemplate",
                    "id": "Jegso",
                    "meta": {},
                    "props": {},
                    "children": [
                      {
                        "type": "TagTemplate",
                        "id": "SxF1r",
                        "meta": {},
                        "props": {
                          "value": {
                            "type": "Literal",
                            "value": " Astro 2.0"
                          }
                        },
                        "children": [],
                        "tag": "text",
                        "if": null,
                        "each": null,
                        "classList": null
                      }
                    ],
                    "if": null,
                    "each": null,
                    "classList": null,
                    "tag": "span"
                  },
                  {
                    "type": "TagTemplate",
                    "id": "TBhiY",
                    "meta": {},
                    "props": {
                      "value": {
                        "type": "Literal",
                        "value": " + Tailwind      CSS    "
                      }
                    },
                    "children": [],
                    "tag": "text",
                    "if": null,
                    "each": null,
                    "classList": null
                  }
                ],
                "component": {
                  "type": "Identifier",
                  "id": "Vj8fl",
                  "meta": {},
                  "name": "Fragment",
                  "external": false
                },
                "if": null,
                "each": null,
                "classList": null
              },
              {
                "type": "ComponentTemplate",
                "id": "yeia8",
                "meta": {},
                "props": {},
                "children": [
                  {
                    "type": "TagTemplate",
                    "id": "YUZku",
                    "meta": {},
                    "props": {},
                    "children": [
                      {
                        "type": "TagTemplate",
                        "id": "fWD9O",
                        "meta": {},
                        "props": {},
                        "children": [
                          {
                            "type": "TagTemplate",
                            "id": "N1cQ6",
                            "meta": {},
                            "props": {
                              "value": {
                                "type": "Literal",
                                "value": "AstroWind"
                              }
                            },
                            "children": [],
                            "tag": "text",
                            "if": null,
                            "each": null,
                            "classList": null
                          }
                        ],
                        "if": null,
                        "each": null,
                        "classList": null,
                        "tag": "span"
                      },
                      {
                        "type": "TagTemplate",
                        "id": "IyPdX",
                        "meta": {},
                        "props": {
                          "value": {
                            "type": "Literal",
                            "value": " is a free, customizable and        production-ready template for Astro 2.0 + Tailwind CSS."
                          }
                        },
                        "children": [],
                        "tag": "text",
                        "if": null,
                        "each": null,
                        "classList": null
                      }
                    ],
                    "if": null,
                    "each": null,
                    "classList": null,
                    "tag": "span"
                  },
                  {
                    "type": "TagTemplate",
                    "id": "9zEfG",
                    "meta": {},
                    "props": {},
                    "children": [
                      {
                        "type": "TagTemplate",
                        "id": "j1OQg",
                        "meta": {},
                        "props": {
                          "value": {
                            "type": "Literal",
                            "value": "AstroWind: Production-ready."
                          }
                        },
                        "children": [],
                        "tag": "text",
                        "if": null,
                        "each": null,
                        "classList": null
                      }
                    ],
                    "if": null,
                    "each": null,
                    "classList": null,
                    "tag": "span"
                  },
                  {
                    "type": "TagTemplate",
                    "id": "YqtqT",
                    "meta": {},
                    "props": {
                      "value": {
                        "type": "Literal",
                        "value": " Suitable for Startups, Small Business, Sass Websites, Professional Portfolios,      Marketing Websites, Landing Pages & Blogs.    "
                      }
                    },
                    "children": [],
                    "tag": "text",
                    "if": null,
                    "each": null,
                    "classList": null
                  }
                ],
                "component": {
                  "type": "Identifier",
                  "id": "O5SDn",
                  "meta": {},
                  "name": "Fragment",
                  "external": false
                },
                "if": null,
                "each": null,
                "classList": null
              }
            ],
            "component": {
              "type": "Identifier",
              "id": "kiMnJ",
              "meta": {},
              "name": "Hero",
              "external": false
            },
            "if": null,
            "each": null,
            "classList": null
          },
          {
            "type": "ComponentTemplate",
            "id": "wBugY",
            "meta": {},
            "props": {},
            "children": [],
            "component": {
              "type": "Identifier",
              "id": "ql7Sw",
              "meta": {},
              "name": "Note",
              "external": false
            },
            "if": null,
            "each": null,
            "classList": null
          },
          {
            "type": "ComponentTemplate",
            "id": "kadz4",
            "meta": {},
            "props": {
              "items": {
                "type": "Literal",
                "value": "[      [        {          title: Astro + Tailwind CSS Integration,          description:            A seamless integration between two great frameworks that offer high productivity, performance and versatility.,          icon: tabler:brand-tailwind,        },        {          title: Ready-to-use Components,          description:            Widgets made with Tailwind CSS ready to be used in Marketing Websites, SaaS, Blogs, Personal Profiles, Small Business...,          icon: tabler:components,        },        {          title: Best Practices,          description:            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.,          icon: tabler:list-check,        },      ],      [        {          title: Excellent Page Speed,          description:            Having a good page speed impacts organic search ranking, improves user experience (UI/UX) and increase conversion rates.,          icon: tabler:rocket,        },        {          title: Search Engine Optimization (SEO),          description:            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.,          icon: tabler:arrows-right-left,        },        {          title: Open to new ideas and contributions,          description:            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.,          icon: tabler:bulb,        },      ],    ]"
              }
            },
            "children": [],
            "component": {
              "type": "Identifier",
              "id": "LthxK",
              "meta": {},
              "name": "Features",
              "external": false
            },
            "if": null,
            "each": null,
            "classList": null
          },
          {
            "type": "ComponentTemplate",
            "id": "7VkNt",
            "meta": {},
            "props": {
              "items": {
                "type": "Literal",
                "value": "[      {        title: Per ei quaeque sensibus,        description:          Ex usu illum iudico molestie. Pro ne agam facete mediocritatem, ridens labore facete mea ei. Pro id apeirian dignissim.,      },      {        title: Cu imperdiet posidonium sed,        description:          Amet utinam aliquando ut mea, malis admodum ocurreret nec et, elit tibique cu nec. Nec ex maluisset inciderint, ex quis.,      },      {        title: Nulla omittam sadipscing mel ne,        description:          At sed possim oporteat probatus, justo graece ne nec, minim commodo legimus ut vix. Ut eos iudico quando soleat, nam modus.,      },    ]"
              },
              "image": {
                "type": "Literal",
                "value": "{      src: import(~/assets/images/caos.jpg),      alt: Colorful Image,    }"
              }
            },
            "children": [
              {
                "type": "ComponentTemplate",
                "id": "pXKrN",
                "meta": {},
                "props": {},
                "children": [
                  {
                    "type": "TagTemplate",
                    "id": "OoDBx",
                    "meta": {},
                    "props": {},
                    "children": [
                      {
                        "type": "TagTemplate",
                        "id": "ABjyV",
                        "meta": {},
                        "props": {
                          "value": {
                            "type": "Literal",
                            "value": "        Ad vix debet docendi      "
                          }
                        },
                        "children": [],
                        "tag": "text",
                        "if": null,
                        "each": null,
                        "classList": null
                      }
                    ],
                    "if": null,
                    "each": null,
                    "classList": null,
                    "tag": "h3"
                  },
                  {
                    "type": "TagTemplate",
                    "id": "FuEt8",
                    "meta": {},
                    "props": {
                      "value": {
                        "type": "Literal",
                        "value": "      Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam regione      ut, persius eripuit quo id. Sit te euismod tacimates.    "
                      }
                    },
                    "children": [],
                    "tag": "text",
                    "if": null,
                    "each": null,
                    "classList": null
                  }
                ],
                "component": {
                  "type": "Identifier",
                  "id": "buSN9",
                  "meta": {},
                  "name": "Fragment",
                  "external": false
                },
                "if": null,
                "each": null,
                "classList": null
              }
            ],
            "component": {
              "type": "Identifier",
              "id": "2zt3J",
              "meta": {},
              "name": "Content",
              "external": false
            },
            "if": null,
            "each": null,
            "classList": null
          },
          {
            "type": "ComponentTemplate",
            "id": "m2z7K",
            "meta": {},
            "props": {
              "items": {
                "type": "Literal",
                "value": "[      {        title: Per ei quaeque sensibus,      },      {        title: Cu imperdiet posidonium sed,      },      {        title: Nulla omittam sadipscing mel ne,      },      {        title: Per ei quaeque sensibus,      },      {        title: Cu imperdiet posidonium sed,      },      {        title: Nulla omittam sadipscing mel ne,      },    ]"
              },
              "image": {
                "type": "Literal",
                "value": "{      src: import(~/assets/images/vintage.jpg),      alt: Vintage Image,    }"
              }
            },
            "children": [],
            "component": {
              "type": "Identifier",
              "id": "2F4qn",
              "meta": {},
              "name": "Content",
              "external": false
            },
            "if": null,
            "each": null,
            "classList": null
          },
          {
            "type": "ComponentTemplate",
            "id": "CXzI8",
            "meta": {},
            "props": {
              "items": {
                "type": "Literal",
                "value": "[      {        title: Step 1: <span class=font-medium>Download</span>,        description:          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula.,        icon: tabler:package,      },      {        title: Step 2: <span class=font-medium>Add content</em>,        description:          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla.,        icon: tabler:letter-case,      },      {        title: Step 3: <span class=font-medium>Customize styles</span>,        description:          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula. Fusce sit amet dui tellus.,        icon: tabler:paint,      },      {        title: Ready!,        icon: tabler:check,      },    ]"
              },
              "image": {
                "type": "Literal",
                "value": "{      src: import(~/assets/images/creativity.jpg),      alt: Steps image,    }"
              }
            },
            "children": [],
            "component": {
              "type": "Identifier",
              "id": "V1ANF",
              "meta": {},
              "name": "Steps",
              "external": false
            },
            "if": null,
            "each": null,
            "classList": null
          },
          {
            "type": "ComponentTemplate",
            "id": "yiTgY",
            "meta": {},
            "props": {
              "items": {
                "type": "Literal",
                "value": "[      {        title: Headers,        description:          In general, Headers contain information that makes it easier for visitors to interact with the website.,        icon: flat-color-icons:template,      },      {        title: Heros,        description:          If you want your website to get more than its fair share of visitors, the Hero section needs to be stellar.,        icon: flat-color-icons:gallery,      },      {        title: Features,        description:          Display your product in action and how the Features actually create a solution for your target customer.,        icon: flat-color-icons:todo-list,      },      {        title: Content,        description:          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.,        icon: flat-color-icons:document,      },      {        title: Call-to-Action,        description:          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.,        icon: flat-color-icons:advertising,      },      {        title: Pricing,        description:          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.,        icon: flat-color-icons:currency-exchange,      },      {        title: Testimonial,        description:          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.,        icon: flat-color-icons:voice-presentation,      },      {        title: Contact,        description:          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.,        icon: flat-color-icons:business-contact,      },      {        title: Footers,        description:          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.,        icon: icon-park:page-template,      },    ]"
              }
            },
            "children": [],
            "component": {
              "type": "Identifier",
              "id": "2xvGS",
              "meta": {},
              "name": "Features2",
              "external": false
            },
            "if": null,
            "each": null,
            "classList": null
          },
          {
            "type": "ComponentTemplate",
            "id": "EiusP",
            "meta": {},
            "props": {
              "information": {
                "type": "Literal",
                "value": "`The blog is used to display AstroWind documentation.\t\t\tEach new article will be an important step that you will need to know to be an expert in creating a website using Astro + Tailwind CSS.\t\t\tAstro is a very interesting technology. Thanks.\t\t`"
              },
              "postIds": {
                "type": "Literal",
                "value": "[      get-started-website-with-astro-tailwind-css.md,      how-to-customize-astrowind-to-your-brand.md,      useful-resources-to-create-websites.md,      astrowind-template-in-depth.md,    ]"
              }
            },
            "children": [],
            "component": {
              "type": "Identifier",
              "id": "tFSfg",
              "meta": {},
              "name": "LatestPosts",
              "external": false
            },
            "if": null,
            "each": null,
            "classList": null
          },
          {
            "type": "ComponentTemplate",
            "id": "pDphN",
            "meta": {},
            "props": {
              "items": {
                "type": "Literal",
                "value": "[      [        {          question: What do I need to start?,          answer:            Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds. Many say exploration is part of our destiny, but it’s actually our duty to future generations.,        },        {          question: How to install the Astro + Tailwind CSS template?,          answer:            Well, the way they make shows is, they make one show. That shows called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if theyre going to make more shows. Some pilots get picked and become television programs. Some dont, become nothing. She starred in one of the ones that became nothing.,        },        {          question: Whats something that you dont understand?,          answer:            A flower in my garden, a mystery in my panties. Heart attack never stopped old Big Bear. I didnt even know we were calling him Big Bear.,        },      ],      [        {          question: Whats an example of when you changed your mind?,          answer:            Michael Knight a young loner on a crusade to champion the cause of the innocent. The helpless. The powerless in a world of criminals who operate above the law. Here he comes Here comes Speed Racer. Hes a demon on wheels.,        },        {          question: What is something that you would like to try again?,          answer:            A business big enough that it could be listed on the NASDAQ goes belly up. Disappears! It ceases to exist without me. No, you clearly dont know who youre talking to, so let me clue you in.,        },        {          question:            If you could only ask one question to each person you meet, what would that question be?,          answer:            This is not about revenge. This is about justice. A lot of things can change in twelve years, Admiral. Well, thats certainly good to know. About four years. I got tired of hearing how young I looked.,        },      ],    ]"
              }
            },
            "children": [],
            "component": {
              "type": "Identifier",
              "id": "MKu3W",
              "meta": {},
              "name": "FAQs",
              "external": false
            },
            "if": null,
            "each": null,
            "classList": null
          },
          {
            "type": "ComponentTemplate",
            "id": "XwLDZ",
            "meta": {},
            "props": {
              "items": {
                "type": "Literal",
                "value": "[      { name: Downloads, value: 132K },      { name: Stars, value: 24.8K },      { name: Forks, value: 10.3K },      { name: Users, value: 48.4K },    ]"
              }
            },
            "children": [],
            "component": {
              "type": "Identifier",
              "id": "UEWUm",
              "meta": {},
              "name": "Stats",
              "external": false
            },
            "if": null,
            "each": null,
            "classList": null
          },
          {
            "type": "ComponentTemplate",
            "id": "Nsvc7",
            "meta": {},
            "props": {
              "callToAction": {
                "type": "Literal",
                "value": "{      text: Get template,      href: https://github.com/onwidget/astrowind,      icon: tabler:download,    }"
              }
            },
            "children": [
              {
                "type": "ComponentTemplate",
                "id": "3jPol",
                "meta": {},
                "props": {},
                "children": [
                  {
                    "type": "TagTemplate",
                    "id": "1KCwb",
                    "meta": {},
                    "props": {
                      "value": {
                        "type": "Literal",
                        "value": "      Astro + "
                      }
                    },
                    "children": [],
                    "tag": "text",
                    "if": null,
                    "each": null,
                    "classList": null
                  },
                  {
                    "type": "TagTemplate",
                    "id": "sOQzx",
                    "meta": {},
                    "props": {},
                    "children": [
                      {
                        "type": "TagTemplate",
                        "id": "l9HcG",
                        "meta": {},
                        "props": {
                          "value": {
                            "type": "Literal",
                            "value": "Tailwind CSS"
                          }
                        },
                        "children": [],
                        "tag": "text",
                        "if": null,
                        "each": null,
                        "classList": null
                      }
                    ],
                    "if": null,
                    "each": null,
                    "classList": null,
                    "tag": "span"
                  }
                ],
                "component": {
                  "type": "Identifier",
                  "id": "RZHvk",
                  "meta": {},
                  "name": "Fragment",
                  "external": false
                },
                "if": null,
                "each": null,
                "classList": null
              },
              {
                "type": "ComponentTemplate",
                "id": "XjCjm",
                "meta": {},
                "props": {},
                "children": [
                  {
                    "type": "TagTemplate",
                    "id": "SCkVH",
                    "meta": {},
                    "props": {
                      "value": {
                        "type": "Literal",
                        "value": "      Be very surprised by these huge fake numbers you are seeing on this page. "
                      }
                    },
                    "children": [],
                    "tag": "text",
                    "if": null,
                    "each": null,
                    "classList": null
                  },
                  {
                    "type": "TagTemplate",
                    "id": "kuWZk",
                    "meta": {},
                    "props": {
                      "value": {
                        "type": "Literal",
                        "value": "Dont waste more time! :P    "
                      }
                    },
                    "children": [],
                    "tag": "text",
                    "if": null,
                    "each": null,
                    "classList": null
                  }
                ],
                "component": {
                  "type": "Identifier",
                  "id": "p97lR",
                  "meta": {},
                  "name": "Fragment",
                  "external": false
                },
                "if": null,
                "each": null,
                "classList": null
              }
            ],
            "component": {
              "type": "Identifier",
              "id": "SMTkK",
              "meta": {},
              "name": "CallToAction",
              "external": false
            },
            "if": null,
            "each": null,
            "classList": null
          },
          {
            "type": "TagTemplate",
            "id": "XrSEs",
            "meta": {},
            "props": {},
            "children": [
              {
                "type": "TagTemplate",
                "id": "4ctSM",
                "meta": {},
                "props": {
                  "value": {
                    "type": "Literal",
                    "value": "    if (window.netlifyIdentity) {      window.netlifyIdentity.on(init, (user) => {        if (!user) {          window.netlifyIdentity.on(login, () => {            document.location.href = /admin/;          });        }      });    }  "
                  }
                },
                "children": [],
                "tag": "text",
                "if": null,
                "each": null,
                "classList": null
              }
            ],
            "if": null,
            "each": null,
            "classList": null,
            "tag": "script"
          }
        ],
        "component": {
          "type": "Identifier",
          "id": "SgtFQ",
          "meta": {},
          "name": "Layout",
          "external": false
        },
        "if": null,
        "each": null,
        "classList": null
      }
    },
    {
      "type": "RekaComponent",
      "id": "kyEOo",
      "meta": {},
      "name": "Layout",
      "template": {
        "type": "TagTemplate",
        "id": "4gVdL",
        "meta": {},
        "props": {
          "class": {
            "type": "Literal",
            "id": "icJi4",
            "meta": {},
            "value": "bg-neutral-100 w-full h-full"
          }
        },
        "children": [
          {
            "type": "SlotTemplate",
            "id": "4cKNU",
            "meta": {},
            "props": {},
            "children": [],
            "if": null,
            "each": null,
            "classList": null
          }
        ],
        "if": null,
        "each": null,
        "classList": null,
        "tag": "div"
      },
      "state": [],
      "props": []
    },
    {
      "type": "RekaComponent",
      "id": "QyIAQ",
      "meta": {},
      "name": "Hero",
      "template": {
        "type": "TagTemplate",
        "id": "qxzSR",
        "meta": {},
        "props": {
          "class": {
            "type": "Literal",
            "id": "s9uRF",
            "meta": {},
            "value": "bg-neutral-100 w-full h-full"
          }
        },
        "children": [
          {
            "type": "SlotTemplate",
            "id": "zo5YN",
            "meta": {},
            "props": {},
            "children": [],
            "if": null,
            "each": null,
            "classList": null
          }
        ],
        "if": null,
        "each": null,
        "classList": null,
        "tag": "div"
      },
      "state": [],
      "props": []
    },
    {
      "type": "RekaComponent",
      "id": "YRPJo",
      "meta": {},
      "name": "Fragment",
      "template": {
        "type": "TagTemplate",
        "id": "TiWBS",
        "meta": {},
        "props": {
          "class": {
            "type": "Literal",
            "id": "smYiY",
            "meta": {},
            "value": "bg-neutral-100 w-full h-full"
          }
        },
        "children": [
          {
            "type": "SlotTemplate",
            "id": "hacK7",
            "meta": {},
            "props": {},
            "children": [],
            "if": null,
            "each": null,
            "classList": null
          }
        ],
        "if": null,
        "each": null,
        "classList": null,
        "tag": "div"
      },
      "state": [],
      "props": []
    },
    {
      "type": "RekaComponent",
      "id": "btfpx",
      "meta": {},
      "name": "Note",
      "template": {
        "type": "TagTemplate",
        "id": "H1QQe",
        "meta": {},
        "props": {
          "class": {
            "type": "Literal",
            "id": "ZObN5",
            "meta": {},
            "value": "bg-neutral-100 w-full h-full"
          }
        },
        "children": [
          {
            "type": "SlotTemplate",
            "id": "unIta",
            "meta": {},
            "props": {},
            "children": [],
            "if": null,
            "each": null,
            "classList": null
          }
        ],
        "if": null,
        "each": null,
        "classList": null,
        "tag": "div"
      },
      "state": [],
      "props": []
    },
    {
      "type": "RekaComponent",
      "id": "GCh8i",
      "meta": {},
      "name": "Features",
      "template": {
        "type": "TagTemplate",
        "id": "1wMfY",
        "meta": {},
        "props": {
          "class": {
            "type": "Literal",
            "id": "tVpzU",
            "meta": {},
            "value": "bg-neutral-100 w-full h-full"
          }
        },
        "children": [
          {
            "type": "SlotTemplate",
            "id": "4H6VS",
            "meta": {},
            "props": {},
            "children": [],
            "if": null,
            "each": null,
            "classList": null
          }
        ],
        "if": null,
        "each": null,
        "classList": null,
        "tag": "div"
      },
      "state": [],
      "props": []
    },
    {
      "type": "RekaComponent",
      "id": "QSujO",
      "meta": {},
      "name": "Content",
      "template": {
        "type": "TagTemplate",
        "id": "2PXpG",
        "meta": {},
        "props": {
          "class": {
            "type": "Literal",
            "id": "nJ6pI",
            "meta": {},
            "value": "bg-neutral-100 w-full h-full"
          }
        },
        "children": [
          {
            "type": "SlotTemplate",
            "id": "rutNk",
            "meta": {},
            "props": {},
            "children": [],
            "if": null,
            "each": null,
            "classList": null
          }
        ],
        "if": null,
        "each": null,
        "classList": null,
        "tag": "div"
      },
      "state": [],
      "props": []
    },
    {
      "type": "RekaComponent",
      "id": "toVcF",
      "meta": {},
      "name": "Steps",
      "template": {
        "type": "TagTemplate",
        "id": "8Ppfj",
        "meta": {},
        "props": {
          "class": {
            "type": "Literal",
            "id": "u81oK",
            "meta": {},
            "value": "bg-neutral-100 w-full h-full"
          }
        },
        "children": [
          {
            "type": "SlotTemplate",
            "id": "8VFmX",
            "meta": {},
            "props": {},
            "children": [],
            "if": null,
            "each": null,
            "classList": null
          }
        ],
        "if": null,
        "each": null,
        "classList": null,
        "tag": "div"
      },
      "state": [],
      "props": []
    },
    {
      "type": "RekaComponent",
      "id": "4JRe4",
      "meta": {},
      "name": "Features2",
      "template": {
        "type": "TagTemplate",
        "id": "9uFq5",
        "meta": {},
        "props": {
          "class": {
            "type": "Literal",
            "id": "bXhQP",
            "meta": {},
            "value": "bg-neutral-100 w-full h-full"
          }
        },
        "children": [
          {
            "type": "SlotTemplate",
            "id": "eME4t",
            "meta": {},
            "props": {},
            "children": [],
            "if": null,
            "each": null,
            "classList": null
          }
        ],
        "if": null,
        "each": null,
        "classList": null,
        "tag": "div"
      },
      "state": [],
      "props": []
    },
    {
      "type": "RekaComponent",
      "id": "8efFn",
      "meta": {},
      "name": "LatestPosts",
      "template": {
        "type": "TagTemplate",
        "id": "paWsZ",
        "meta": {},
        "props": {
          "class": {
            "type": "Literal",
            "id": "Sa7zm",
            "meta": {},
            "value": "bg-neutral-100 w-full h-full"
          }
        },
        "children": [
          {
            "type": "SlotTemplate",
            "id": "65N1q",
            "meta": {},
            "props": {},
            "children": [],
            "if": null,
            "each": null,
            "classList": null
          }
        ],
        "if": null,
        "each": null,
        "classList": null,
        "tag": "div"
      },
      "state": [],
      "props": []
    },
    {
      "type": "RekaComponent",
      "id": "q4bsR",
      "meta": {},
      "name": "FAQs",
      "template": {
        "type": "TagTemplate",
        "id": "pGh6r",
        "meta": {},
        "props": {
          "class": {
            "type": "Literal",
            "id": "qPDZM",
            "meta": {},
            "value": "bg-neutral-100 w-full h-full"
          }
        },
        "children": [
          {
            "type": "SlotTemplate",
            "id": "Kd1mN",
            "meta": {},
            "props": {},
            "children": [],
            "if": null,
            "each": null,
            "classList": null
          }
        ],
        "if": null,
        "each": null,
        "classList": null,
        "tag": "div"
      },
      "state": [],
      "props": []
    },
    {
      "type": "RekaComponent",
      "id": "U7CxQ",
      "meta": {},
      "name": "Stats",
      "template": {
        "type": "TagTemplate",
        "id": "vcMCU",
        "meta": {},
        "props": {
          "class": {
            "type": "Literal",
            "id": "YLiYe",
            "meta": {},
            "value": "bg-neutral-100 w-full h-full"
          }
        },
        "children": [
          {
            "type": "SlotTemplate",
            "id": "XeQ7Q",
            "meta": {},
            "props": {},
            "children": [],
            "if": null,
            "each": null,
            "classList": null
          }
        ],
        "if": null,
        "each": null,
        "classList": null,
        "tag": "div"
      },
      "state": [],
      "props": []
    },
    {
      "type": "RekaComponent",
      "id": "Dw71O",
      "meta": {},
      "name": "CallToAction",
      "template": {
        "type": "TagTemplate",
        "id": "ibjBM",
        "meta": {},
        "props": {
          "class": {
            "type": "Literal",
            "id": "9I2lS",
            "meta": {},
            "value": "bg-neutral-100 w-full h-full"
          }
        },
        "children": [
          {
            "type": "SlotTemplate",
            "id": "cqq8Q",
            "meta": {},
            "props": {},
            "children": [],
            "if": null,
            "each": null,
            "classList": null
          }
        ],
        "if": null,
        "each": null,
        "classList": null,
        "tag": "div"
      },
      "state": [],
      "props": []
    }
  ]
})

const createSharedStateGlobals = (config: any) => ({
    extension: [
    ...(config.extensions ?? [])
    ],
    externals: {
      components: [
    ...(config.externals?.components ?? [])
      ],
    states: {
      ...(config.externals?.states ?? {}),
      ...{
        scrollTop: 0,
        myString: 'Hello from External Variable',
      }
    },
      functions: (self) => {
        return {...{
          confetti: () => {
            confetti();
          },
          getScrollTop: () => {
            return self.getExternalState('scrollTop');
          },
        }, ...(config?.externals?.functions(self) || {})
        }
      }
      }
    })

const getRekaStateByURL = (url) => {
  return {
    ...createSharedStateGlobals({
      externals: {
        states: {
          posts: [
            {
              name: 'Interesting Post',
              image: '/images/pawel-olek-1.png',
              description:
              'Ut enim ad minim veniam, quis nostrud exercitation ullamco',
            },
            {
              name: 'Hello World',
              image: '/images/pawel-olek-2.png',
              description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            },
          ],
        },
        functions: (self) => ({
          getPosts: () => {
            return self.externals.states.posts
          }
        })
      }
    })
  }
}

const reka = Reka.create(getRekaStateByURL('/'));

reka.load(
  t.state({
    program: t.program(getASTByURL('/')),
//     program: Parser.parseProgram(`
// val posts = $getPosts();
//
// component index() => (
// <Layout>
//  <div class="bg-neutral-100 w-full h-full">
//    <text value="hello" />
//    <text value="newline" />
//   <article @if={posts.length >= 0}>
//   <h1 class="text-lg" @each={post in posts} >
//    <text value={post.name} />
//   </h1>
//   </article>
//   <Hero />
//  </div>
// </Layout>
// )
// component Layout() => (
//  <div class="bg-neutral-100 w-full h-full">
//  <slot />
//  </div>
// )
// component Hero() => (
//  <div class="bg-neutral-100 w-full h-full">
//  <slot />
//  </div>
// )
//     `)
  })
);

reka.createFrame({
  id: 'index (/)',
  component: {
    name: 'index',
  },
});

// reka.createFrame({
//   id: 'Button',
//   component: {
//     name: 'Button',
//   },
// });

// reka.createFrame({
//   id: 'Text',
//   component: {
//     name: 'Text',
//   },
// });

// const appComponent = reka.program.components[0];
const appComponent = reka.program;
console.log('AST', JSON.stringify(appComponent, null, 2))
// reka.change(() => {
//     appComponent.template.children.push(
//           t.tagTemplate({
//                   tag: 'button',
//                   props: {},
//                   children: [
//                             t.tagTemplate({
//                                         tag: 'text',
//                                         props: {
//                                                     value: t.literal({ value: 'Click me!' }),
//                                                     },
//                                         children: [],
//                                       }),
//                           ],
//                 })
//         );
// });
// console.log(appComponent.template.children[1]);

const code = Parser.parseProgram(Parser.stringify(reka.program));
console.log('CODE', code)

reka.watch(() => {
    if (appComponent.template instanceof t.TagTemplate) {
          console.log('appComponent =>', appComponent);
        }
});
reka.change(() => {
  //   Since we know the type of appComponent.template, we can use t.assert to
  // assert the type
// t.assert(appComponent.template, t.TagTemplate).tag = 'section';
});
    // 1)
    // console:
    // appComponent => section
reka.change(() => {
  // t.assert(appComponent.template, t.TagTemplate).tag = 'div';
});

// reka.change(() => {
//     t.assert(appComponent.template, t.TagTemplate).tag = 'section';
// });


export default function Home() {
  return (
    <RekaProvider reka={reka}>
      <div className="flex h-screen">
        <div className="w-3/6 h-full border-r-2">
          <Editor />
        </div>
        <div className="flex-1">
          <Preview />
        </div>
      </div>
    </RekaProvider>
  );
}
