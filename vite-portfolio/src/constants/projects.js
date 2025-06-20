export const myProjects = [
    {
        title: "JobWorx - Job Search and Resume Builder App",
        desc: "JobWorx is a one-of-a-kind job search platform that makes hiring and finding a new job easy. Take advantage of our profile builder to create your very own digital resume and make yourself accessible to top companies. For hiring managers, find candidates at your own pace without the spam and fluff of LinkedIn or Indeed.",
        subDesc: "Built with React, Node, Express, JavaScript, Bootstrap, and PostgreSQL",
        href: "https://github.com/jpbruehw/jobworx-production",
        githubHref: "https://github.com/jpbruehw/jobworx-production",
        logo: "/assets/projects/logos/jobworx.svg",
        logoStyle: {
            // backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: "/assets/projects/spotlights/spotlight1.png",
        tags: [
            {
                id: 1,
                name: "React.js",
                path: "/assets/projects/tags/react.svg"
            },
            {
                id: 2,
                name: "NodeJS",
                path: "/assets/projects/tags/node.svg"
            },
            {
                id: 3,
                name: "Express",
                path: "/assets/projects/tags/expressjs.svg"
            },
            {
                id: 4,
                name: "JavaScript",
                path: "/assets/projects/tags/js.svg"
            },
            {
                id: 5,
                name: "PostgreSQL",
                path: "/assets/projects/tags/postgresql.svg"
            },
            {
                id: 6,
                name: "VSCode",
                path: "/assets/projects/tags/vscode.svg"
            }
        ]
    },
    {
        title: "Caesar Cipher",
        desc: "Need a new password idea? Want to pass a secret message? Use this handy Caesar Cipher app to seamlessly encrypt and decrypt messages to both string and integer outputs. First used by Julius Caesar to securely pass military messages during times of conflict.",
        subDesc: "Built with HTML, CSS, JavaScript, and Vite.",
        href: "https://jpbruehw.github.io/caesar-cipher/",
        githubHref: "https://github.com/jpbruehw/caesar-cipher/tree/main",
        logo: "/assets/projects/logos/caesar-cipher.svg",
        logoStyle: {
            // backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: "/assets/projects/spotlights/spotlight2.png",
        tags: [
            {
                id: 1,
                name: "HTML/CSS",
                path: "/assets/projects/tags/html-css.svg"
            },
            {
                id: 2,
                name: "JavaScript",
                path: "/assets/projects/tags/js.svg"
            },
            {
                id: 3,
                name: "Vite.js",
                path: "/assets/projects/tags/vite.svg"
            },
            {
                id: 4,
                name: "VSCode",
                path: "/assets/projects/tags/vscode.svg"
            }
        ]
    },
    {
        title: "Modelling Pension Fund Solvency in Python",
        desc: "Pension funds represent the backbone of the retirement system, allowing retirees to live out their golden years in dignity. As modelling techniques evolve, it is crucial to think bigger and differently about how we conduct analysis for pension funds. In this case, I used Monte Carlo simulations and scenario analysis to model the solvency of a pension fund and find optimal asset allocations using a solver-based approach.",
        subDesc: "Built case study with Python, Pandas, Numpy, Matplotlib, Conda, and Spyder IDE",
        href: "https://drive.google.com/file/d/1Llka_s-Fui-vqa5ijGYKfWeh7V7eYAn-/view",
        githubHref: "https://github.com/jpbruehw/pension-fund-solvency-sim/tree/main",
        logo: "/assets/projects/logos/pension-fund.svg",
        logoStyle: {
            // backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: "/assets/projects/spotlights/spotlight3.png",
        tags: [
            {
                id: 1,
                name: "Python",
                path: "/assets/projects/tags/python.svg"
            },
            {
                id: 2,
                name: "Pandas",
                path: "/assets/projects/tags/pandas.svg"
            },
            {
                id: 3,
                name: "Numpy",
                path: "/assets/projects/tags/numpy.svg"
            },
            {
                id: 4,
                name: "Matplotlib",
                path: "/assets/projects/tags/matplotlib.svg"
            },
            {
                id: 5,
                name: "Anaconda",
                path: "/assets/projects/tags/conda.svg"
            },
            {
                id: 6,
                name: "Spyder IDE",
                path: "/assets/projects/tags/spyder.svg"
            }
        ]
    },
    {
        title: "Strategic Asset Allocation with Solver Based Optimization",
        desc: (
                <>
                    Implemented <a href="https://www.cvxpy.org/tutorial/intro/index.html" target="_blank" rel="noopener noreferrer" className="underline text-blue-500">CVXPY</a> convex optimization package to simulate and build risk/return optimal portfolios using the Efficient Frontier and Capital Allocation Line. This methodology allows for more accurate forecasting beyond traditional approaches.
                </>
            ),
        subDesc: "Built case study with Python, Pandas, Numpy, CVXPY, Conda, and Spyder IDE",
        href: "https://drive.google.com/file/d/14LRSIdU0XA_VRfi9E6oOWNGBoK6ym6iK/view",
        githubHref: "https://github.com/jpbruehw/hbs-investor-case",
        logo: "/assets/projects/logos/asset-allocation.svg",
        logoStyle: {
            // backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: "/assets/projects/spotlights/spotlight4.png",
        tags: [
            {
                id: 1,
                name: "Python",
                path: "/assets/projects/tags/python.svg"
            },
            {
                id: 2,
                name: "Pandas",
                path: "/assets/projects/tags/pandas.svg"
            },
            {
                id: 3,
                name: "Numpy",
                path: "/assets/projects/tags/numpy.svg"
            },
            {
                id: 4,
                name: "CVXPY",
                path: "/assets/projects/tags/cvxpy.svg"
            },
            {
                id: 5,
                name: "Anaconda",
                path: "/assets/projects/tags/conda.svg"
            },
            {
                id: 6,
                name: "Spyder IDE",
                path: "/assets/projects/tags/spyder.svg"
            }
        ]
    },
    {
        title: "Typeframe",
        desc: "Ever feel like your frontend framework is bloated and too confusing to configure? Me too. That's where Typeframe comes in. TypeFrame is a custom built and lightweight TypeScript framework. Fully customizable, modular, and with seamless integration with 3rd party libraries, TypeFrame is perfect framework package for large and small projects alike.",
        subDesc: "Built with Typescript, VSCode, and HTML/CSS",
        href: "https://jpbruehw.github.io/typeframe/",
        githubHref: "https://github.com/jpbruehw/typeframe",
        logo: "/assets/projects/logos/typeframe.svg",
        logoStyle: {
            // backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: "/assets/projects/spotlights/spotlight5.png",
        tags: [
            {
                id: 1,
                name: "Typescript",
                path: "/assets/projects/tags/typescript.svg"
            },
            {
                id: 2,
                name: "VSCode",
                path: "/assets/projects/tags/vscode.svg"
            },
            {
                id: 3,
                name: "HTML/CSS",
                path: "/assets/projects/tags/html-css.svg"
            }
        ]
    }
]