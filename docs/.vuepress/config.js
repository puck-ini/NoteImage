module.exports = {
	base: "/blog/",
    title: 'puck-ini的博客',
    description: 'java',
	themeConfig:{
        nav: [{text: "主页", link: "/"      },
            { text: "node", link: "/node/" },
            { text: "前端", 
                items: [ 
                    { text: "html", link:"/web/html/"},
                    { text: "css", link:"/web/css/"},
                ]
            },
            { text: "数据库", link: "/database/"   },
            { text: "android", link: "/android/"   },
            { text: "面试问题", link: "/interview/" }
             ],
		sidebar:{
      "/node/":[
        ["", "node目录"],
        ["path", "作为前端也需要知道的路径知识"],
        ["stream", "node核心模块-stream"]
      ],
      "/web/":[
        ["", "前端"],
        {
          title: "css",
          name: "css",
          collabsable: false,
          children: [
            ["css/", "目录"],
            ['css/1', "css常考面试题"]
          ]
        }
      ]
	    }
    },
}
